from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect


def home(request):
    return render(request, 'index.html')


def authentication(request):
    username = "TEAM1"
    password = "1234567890"

    return JsonResponse({"username": username, 
                         "password": password, 
                         "is_login_available": False
                         })


def login(request):
    return render(request, 'login.html')

def login_auth(request):
    if request.method == "POST":
        username = request.POST['Username']
        password = request.POST['Password']

    return redirect("/dashboard/")