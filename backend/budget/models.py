from django.db import models
from django.db import models
from django.core.validators import EmailValidator

# Create your models here.

class Users(models.Model):
    FirstName = models.CharField(max_length=15, default= "", blank = False)
    LastName = models.CharField(max_length=15, default="", blank=False)
    Username = models.CharField(max_length=15, default="", blank=False)
    Password = models.CharField(max_length=15, default="", blank=False)
    Email = models.EmailField(max_length=254, unique=True, blank=False, validators=[EmailValidator()]) 
    Birthday = models.CharField(max_length=15, default="" ,blank=False)
    Gender = models.CharField(max_length= 8, default="", blank=False)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"  # Return full name

