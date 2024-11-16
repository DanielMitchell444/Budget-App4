from django.db import models
from django.db import models
from django.core.validators import EmailValidator
from django import forms
from django.contrib.auth.hashers import make_password, check_password

# Create your models here.

class Users(models.Model):
    FirstName = models.CharField(max_length=15, blank = False)
    LastName = models.CharField(max_length=15, blank=False)
    Username = models.CharField(max_length=10, blank=False, unique = True)
    Password = models.CharField(max_length=15, blank=False, unique=True, default = "")
    Email = models.EmailField(max_length=254, unique=True, blank=False, validators=[EmailValidator()], default="") 
    Birthday = models.CharField(max_length=20) # Changed to DateField

    def set_password(self, raw_password):
        self.Password = make_password(raw_password)
    def check_password(self, raw_password):
        return check_password(raw_password, self.Password)
    def __str__(self):
        return f"{self.first_name} {self.last_name}"  # Return full name

