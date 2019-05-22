from django.urls import path
from .views import QuestionsApi


urlpatterns = [
    path('getAllQuestions', QuestionsApi.as_view())
]
