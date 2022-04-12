"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django import views
from django.contrib import admin
from django.urls import path

from HUB import views
from HUB.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home-page'),
    path('gallery/', views.gallery, name='gallery-page'),
    path('menu/', views.menu, name='menu-page'),
    path('cart/', views.cart, name='cart-page'),
    path('register/', views.registerPage, name="register-page"),
    path('login/', views.loginPage, name="login-page"),
    path('logout/', views.logoutUser, name="logout")
]
