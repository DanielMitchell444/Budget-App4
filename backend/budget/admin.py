from django.contrib import admin
from .models import Users
# Register your models here.

class UserAdmin(admin.ModelAdmin):
    list_display = ('Username', 'Password')

admin.site.register(Users, UserAdmin)

