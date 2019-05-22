from rest_framework.response import Response
from rest_framework.views import APIView, status
from .serializers import *
# Create your views here.


class QuestionsApi(APIView):

    def get(self, request):
        questions = QuestionRules.objects.all()
        serialized_questions = QuestionRulesSerializer(questions, many=True)
        return Response({"data": serialized_questions.data})

    # def put(self, request):
    #     tokens, is_created = TrelloTokens.objects.update_or_create(
    #                                     user_id=request.user.id,
    #                                     defaults={'token': request.data['token'],
    #                                               'api_key': request.data['api_key']})
    #     serialized_tokens = TrelloTokensSerializer(tokens)
    #     return Response({"data": serialized_tokens.data})