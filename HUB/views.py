from telnetlib import LOGOUT
from django.shortcuts import render, redirect
from django.template import context


from HUB.forms import *
from django.contrib import messages

from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import Group
from django.contrib.auth.forms import UserCreationForm
from HUB.decorators import unauthenticated_user, allowed_users, admin_only

# Create your views here.
def home(request):

    context = {}
    return render(request, 'home.html', context)

def order(request):
    form = OrderForm()
    if request.method == 'POST':
        form = OrderForm(request.POST)
        if form.is_valid():
            instance = form.save()
            # instance.user = request.user
            # instance.save()

    context = {'form':form}
    return render(request, 'order.html', context)

def cart(request):
    context = {}
    return render(request, 'store.html', context)


@unauthenticated_user
def register(request):
	form = CreateUserForm()
	if request.method == "POST":
		form = CreateUserForm(request.POST)
		if form.is_valid():
				user = form.save()
				username = form.cleaned_data.get('username')
				
				messages.success(request, f" {username}  has created Account")
				return redirect('login')
	context = {'form': form}
	return render(request,'register.html',context)


@unauthenticated_user
def loginPage(request):
        if request.method == "POST":
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return redirect('home-page')   
        return render(request, 'login.html')

def logoutUser(request):
    logout(request)
    return redirect('login')