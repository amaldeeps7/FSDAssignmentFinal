from . import views
from django.urls import path

urlpatterns = [
    path('blog/', views.PostList.as_view(), name='home'),
    path('<slug:slug>/', views.PostDetail.as_view(), name='post_detail'),
    path('blog.html', views.PostList.as_view(), name='home'),
    path('post_detail.html', views.PostDetail.as_view(), name='post_detail'),
    path('base.html', views.PostDetail.as_view(), name='base'),
]