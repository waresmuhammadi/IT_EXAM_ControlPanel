from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", views.login, name="Login Page"),
    path("dashboard/", views.dashboard, name="Dashboard Page after login"),
    path("authentication/", views.authentication, name="Authentication API for TEAM application"),
    path("login_auth/", views.login_auth, name="login form submit"),

    path("team/", views.team, name="Team page"),
    path("chat/", views.chat, name="Chat page"),
    path("upload/", views.upload, name="Upload page"),

]