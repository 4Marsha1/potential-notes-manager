from django.db import models

# Create your models here.
class Note(models.Model):
    name = models.CharField(max_length=100)
    text = models.CharField(max_length=255)
    tag = models.CharField(max_length=50)
    createdAt = models.DateTimeField(auto_now_add=True)