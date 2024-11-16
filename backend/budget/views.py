from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSeralizers
from .forms import UserForm
from rest_framework import status

from .models import Users
from django.shortcuts import render
from django import forms
from .serializers import LoginSeralizer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from django.db import IntegrityError


# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = UserSeralizers
    queryset = Users.objects.all()
@api_view(['POST'])
def api_register_user(request):
    serializer = UserSeralizers(data=request.data)  
    try:
     if serializer.is_valid():
        user = serializer.save()
        user.set_password(user.Password)  # Hash the password
        return Response(serializer.data, status=201)
    except IntegrityError as e:
         if 'UNIQUE constraint failed' in str(e):
            return JsonResponse({"message": "Email already exists, please choose a different email address."})
         else:
              return Response({'status': 'error', 'errors': serializer.errors}, status=400)
         
    
@csrf_exempt
@csrf_exempt

@csrf_exempt
@api_view(['POST'])
def login_user(request):
    """
    Handles user login by validating the username and password.
    """
    serializer = LoginSeralizer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # Extract username and password from request data
    username = serializer.validated_data["Username"]
    password = serializer.validated_data["Password"]

    try:
        # Use filter().first() to ensure we only retrieve the first match, avoiding MultipleObjectsReturned
        user = Users.objects.filter(Username=username).first()

        if user and user.check_password(password):
            return Response({"message": "Login successful!"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid password."}, status=status.HTTP_401_UNAUTHORIZED)
    except Users.DoesNotExist:
        return Response({"error": "Invalid username."}, status=status.HTTP_401_UNAUTHORIZED)

class LoginView(APIView):
    def post(self, request, *args, **kwargs):
        Username = request.data.get("Username")
        Password = request.data.get("Password")
        user = authenticate(Username=Username, Password=Password)
        if user:
            return Response({"message": "Login successful"}, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)