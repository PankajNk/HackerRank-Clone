from django.db import models

# Create your models here.
class Question(models.Model):
    language = models.CharField(max_length = 100)
    question_title = models.CharField(max_length = 100)
    question_text = models.TextField()
    output = models.TextField()

    def __str__(self):
        return self.question_title