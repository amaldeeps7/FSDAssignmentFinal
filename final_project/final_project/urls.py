"""final_project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
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
from django.contrib import admin
from django.urls import path, include
from final_app import views
from todo_api import urls as todo_urls
from blog import urls as blog_urls
from my_app import urls as my_app_urls


urlpatterns = [
    path('', views.index, name='index'),
    path('', include(my_app_urls)),
    path('admin/', admin.site.urls),
    path('index.html', views.index, name='index'),
    path('tictactoe.html', views.tictactoe, name='tictactoe'),
    path('wordle.html', views.wordle, name='wordle'),
    path('api-auth/', include('rest_framework.urls')),
    path('todos/', include(todo_urls)),
    path('', include(blog_urls)),
]
