from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("",views.home, name="Home Page"),
    path("login/", views.login, name="Login Page"),
]

