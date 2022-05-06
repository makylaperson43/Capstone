from django import views
from django.contrib import admin
from django.urls import path

from HUB import views
from HUB.views import *

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name='home-page'),
    path('gallery/', views.gallery, name='gallery-page'),
    path('cart/', views.cart1, name="cart-page"),
    path('dashboard/', views.customer_dashboard, name="dashboard-page"),
    path('adminpage/', views.adminpage, name="admin-page"),
    path('login/', views.loginPage, name="login-page"),
    path('register/', views.registerPage, name="register-page"),
    path('logout/', views.logoutUser, name="logout"),
]
