from rest_framework.response import Response
from rest_framework.views import APIView, status
from .serializers import *
from .managers import get_missed_params, interpret_expression
# Create your views here.


class QuestionsApi(APIView):

    def get(self, request):
        question_ids = request.query_params.get('question_ids')
        if not (question_ids and len(question_ids) > 0):
            return Response(status=404)
        question_ids = question_ids.split(",")
        questions = Question.objects.filter(id__in=question_ids).all()
        serialized_questions = QuestionsSerializer(questions, many=True)
        return Response({'data': serialized_questions.data})

    def post(self, request):
        created_question = Question.objects.create(description=request.data['question'])
        created_rule = QuestionRules.objects.create(expression=request.data['expressions'], question=created_question)
        return Response({"data": {'rule_id': created_rule.id}})


class RulesApi(APIView):

    def post(self, request):
        missed_params = get_missed_params(request.data)
        rules_query = QuestionRules.objects
        for missed_param in missed_params:
            rules_query = rules_query.exclude(expression__icontains=missed_param)
        rules = rules_query.all()
        questions = []
        for rule in rules:
            if(interpret_expression(parameters=request.data, expression_dict=rule.expression)):
                questions.append({'ask_question': rule.question.id})
        serialized_questions_ids = QuestionIdsSerializer({'questions': questions})
        return Response({'data': serialized_questions_ids.data['questions']})

