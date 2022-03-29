from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context


from HUB.forms import *
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserCreationForm
from HUB.decorators import unauthenticated_user
from HUB.models import Product

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)

@login_required(login_url='login-page')
def order(request):
    form = OrderForm()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            instance = form.save()
            instance.user = request.user
            instance.save()

    context = {'form':form}
    return render(request, 'order.html', context)

def cart(request):
    all_products = Product.objects.all()
    context = {'all_products': all_products}
    return render(request, 'store.html', context)

#User Authentication
@unauthenticated_user
def registerPage(request):
    form = CreateUserForm()

    if request.method == 'POST':
        form = CreateUserForm(request.POST)
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