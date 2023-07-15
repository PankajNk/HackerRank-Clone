from django.shortcuts import render
from django.http import JsonResponse
from .models import Question
from rest_framework import viewsets
from .serializers import QuestionSerializers

# Create your views here.
# def question_detail(request, question_title):
#     question = get_object_or_404(Question, question_title=question_title)

#     data = {
#         'question_title': question.question_title,
#         'question_text': question.question_text,
#         'output': question.output,
#     }

#     return JsonResponse(data)

class QuestionViewSet(viewsets.ModelViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializers