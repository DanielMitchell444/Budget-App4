from django.db import models
from django.core.validators import validate_email

# Create your models here.

class Users(models.Model):
    FirstName = models.CharField(max_length=15, default= "", blank = False)
    LastName = models.CharField(max_length=15, default="", blank=False)
    Username = models.CharField(max_length=15, default="", blank=False)
    Password = models.CharField(max_length=15, default="", blank=False)
    Email = models.CharField(max_length=15, default="", blank=False)
    Birthday = models.CharField(max_length=15, default="" ,blank=False)
    Gender = models.CharField(max_length=1, default="", blank=False)

    def __str__(self):
        return self.title 
