from django.db import models
from django.contrib.postgres.fields import JSONField

# Create your models here.


class Question(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField(null=True)


class QuestionRules(models.Model):
    expression = JSONField()
    question = models.OneToOneField(Question, on_delete=models.CASCADE)
