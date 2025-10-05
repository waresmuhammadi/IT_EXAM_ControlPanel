from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from .models import Teams


def dashboard(request):
    return render(request, 'dashboard.html')


def team(request):
    list_of_teams = Teams.objects.filter(is_deleted=False).values().order_by('created_at').reverse()
    print(list_of_teams)
    return render(request, 'team.html', {'teams': list_of_teams})

def chat(request):
    return render(request, 'chat.html')
    
def upload(request):
    return render(request, 'upload.html')


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