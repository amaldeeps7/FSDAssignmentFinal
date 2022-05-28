from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Person(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=200, null=True)

    def __str__(self):
        return self.name

class Task(models.Model):
    peep = models.ForeignKey(Person, on_delete=models.CASCADE)
    task = models.CharField(max_length=200, null=True)
    is_complete = models.BooleanField(default=False)

    def __str__(self):
        return self.task
# Create your models here.
