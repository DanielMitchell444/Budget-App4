from django.shortcuts import render
from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserSeralizers
from .forms import UserForm

from .models import Users
from django.shortcuts import render

# Create your views here.

class TodoView(viewsets.ModelViewSet):
    serializer_class = UserSeralizers
    queryset = Users.objects.all()
@csrf_exempt  # For testing; implement CSRF protection in production
def register_user(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            form.save()
            return JsonResponse({'status': 'success'})
        else:
         return JsonResponse({'status': 'error', 'errors': form.errors}, status=400)
    return JsonResponse({'status': 'error', 'message': 'Invalid request'}, status=400)

@api_view(['POST'])
def api_register_user(request):
    serializer = UserSeralizers(data=request.data)  # Use the correct serializer
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=201)

    else:
        return render(request, 'login.js', {"form": UserForm})