from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context
from django.views.generic import View
from requests import request
from django.contrib.auth.forms import UserCreationForm

from HUB.forms import *
from HUB.models import *
from django.contrib import messages
from django.contrib.auth import authenticate, login, logout
from HUB.decorators import unauthenticated_user

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)

def menu(request):

    context = {}
    return render(request, 'menu.html', context)

def gallery(request):

    context = {}
    return render(request, 'gallery.html', context)

def about(request):
    context = {}
    return render(request, 'about.html', context)

#User Authentication
@unauthenticated_user
def registerPage(request):
    form = UserCreationForm()

    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login-page')

    context = {'form': form}
    return render(request, 'register.html', context)

@unauthenticated_user
def loginPage(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect('home-page')   
        else:
            messages.info(request, 'Username or Password is incorrect')
    
    context = {}
    return render(request, 'login.html', context)

def logoutUser(request):
    logout(request)
    return redirect('login-page')

    

def cart1(request):

    context = {}
    return render(request, 'cart.html', context)

def payment(request):
    context = {}
    return render(request, 'payment.html', context)
