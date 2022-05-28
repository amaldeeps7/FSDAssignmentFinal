from django.shortcuts import render

from django.views import generic
from .models import post

class PostList(generic.ListView):
    queryset = post.objects.filter(status=1).order_by('-created_on')
    template_name = 'blog.html'

class PostDetail(generic.DetailView):
    model = post
    template_name = 'post_detail.html'
