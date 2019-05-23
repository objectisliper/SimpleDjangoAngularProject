from rest_framework.response import Response
from rest_framework.views import APIView, status
from .serializers import *
# Create your views here.


class QuestionsApi(APIView):

    def get(self, request):
        questions = QuestionRules.objects.all()
        serialized_questions = QuestionRulesSerializer(questions, many=True)
        return Response({"data": serialized_questions.data})

    def post(self, request):
        created_question = Question.objects.create(description=request.data['question'])
        created_rule = QuestionRules.objects.create(expression=request.data['expressions'], question=created_question)
        return Response({"data": {'rule_id': created_rule.id}})
