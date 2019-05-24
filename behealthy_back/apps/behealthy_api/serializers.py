from rest_framework import serializers
from .models import *


class QuestionRulesSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionRules
        fields = ["expression", "question"]


class QuestionIdsSerializer(serializers.Serializer):

    questions = serializers.ListField()


class QuestionsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Question
        fields = ["description"]
