from rest_framework import serializers
from .models import *


class QuestionRulesSerializer(serializers.ModelSerializer):

    class Meta:
        model = QuestionRules
        fields = ["expression", "question"]
