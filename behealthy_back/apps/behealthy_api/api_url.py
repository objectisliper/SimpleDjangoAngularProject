from django.urls import path
from .views import QuestionsApi, RulesApi


urlpatterns = [
    path('questions', QuestionsApi.as_view()),
    path('rules', RulesApi.as_view()),
]
