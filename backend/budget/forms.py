from django import forms
from .models import Users
import re
from datetime import date

class UserForm(forms.ModelForm):
    Password = forms.CharField(max_length=15, widget=forms.PasswordInput)

    class Meta:
        model = Users
        fields = ["FirstName", "LastName", "Username", "Password", "Email", "Birthday"]
    
   # forms.py
from django import forms
from .models import Users
from django.core.exceptions import ValidationError
import re
from datetime import date

class UserForm(forms.ModelForm):
    Password = forms.CharField(max_length=15, widget=forms.PasswordInput)

    class Meta:
        model = Users
        fields = ["FirstName", "LastName", "Username", "Password", "Email", "Birthday"]

    def clean(self):
        cleaned_data = super().clean()

        if not cleaned_data.get("FirstName"):
            self.add_error("FirstName", "First Name is required")
        if len(cleaned_data.get("FirstName", "")) < 5:
            self.add_error("FirstName", "First Name must be at least 5 characters long")

        if not cleaned_data.get("LastName"):
            self.add_error("LastName", "Last Name is required")
        if len(cleaned_data.get("LastName", "")) < 5:
            self.add_error("LastName", "Last Name must be at least 5 characters long")

        if not cleaned_data.get("Username"):
            self.add_error("Username", "Username is required")
        if len(cleaned_data.get("Username", "")) < 5:
            self.add_error("Username", "Username must be at least 5 characters long")
        if not re.match(r'^\w+$', cleaned_data.get("Username", "")):
            self.add_error("Username", "Username can only contain letters, numbers, and underscores")

        if not cleaned_data.get("Password"):
            self.add_error("Password", "Password is required")
        if len(cleaned_data.get("Password", "")) < 8:
            self.add_error("Password", "Password must be at least 8 characters long")
        if not re.search(r'\d', cleaned_data.get("Password", "")):
            self.add_error("Password", "Password must contain at least one number")
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', cleaned_data.get("Password", "")):
            self.add_error("Password", "Password must contain at least one special character")

        if not cleaned_data.get("Email"):
            self.add_error("Email", "Email is required")
        if not cleaned_data.get("Email").endswith('@example.com'):
            self.add_error("Email", "Email must end with @example.com")

        if not cleaned_data.get("Birthday"):
            self.add_error("Birthday", "Birthday is required")
        else:
            today = date.today()
            birthday = cleaned_data.get("Birthday")
            age = today.year - birthday.year - ((today.month, today.day) < (birthday.month, birthday.day))
            if age < 18:
                self.add_error("Birthday", "You must be at least 18 years old")

        return cleaned_data
