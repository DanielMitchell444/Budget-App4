from rest_framework import serializers
from .models import Users
import re
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password

class UserSeralizers(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['FirstName', 'LastName', 'Username', 'Password', 'Email', 'Birthday']

    def validate(self, data):
        errors = {}

        # Custom validation
        if len(data['FirstName']) < 5:
            errors['FirstName'] = "First Name must be at least 5 characters long."
        if len(data['LastName']) < 5:
            errors['LastName'] = "Last Name must be at least 5 characters long."
        if len(data['Username']) < 5:
            errors['Username'] = "Username must be at least 5 characters long."
        if len(data['Password']) < 8:
         errors['Password'] = "Password must be at least 8 characters long."
        if not re.search(r'\d', data["Password"]):
            errors['Password'] = "Password must contain at least one number"
        if not re.search(r'[!@#$%^&*(),.?":{}|<>]', data["Password"]):
            errors['Password'] = "Password must contain at least one special character"
        if errors:
            raise serializers.ValidationError(errors)
        
        return data


class LoginSeralizer(serializers.Serializer):
    Username = serializers.CharField()
    Password = serializers.CharField(write_only=True)

    def validate(self, data):
        # Extract username and password from input
        username = data["Username"]
        password = data["Password"]

        try:
            # Query user by username
            user = Users.objects.get(Username=username)
        except Users.DoesNotExist:
            raise serializers.ValidationError("Invalid username or password.")

        # Check if the provided password matches the stored hashed password
        if not check_password(password, user.Password):
            raise serializers.ValidationError("Invalid username or password.")

        # If validation is successful, return the validated data
        return data
