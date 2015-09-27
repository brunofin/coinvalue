from django.conf.urls import include, url
from apiv1 import views

urlpatterns = [
    url(r'providers/$', views.providers),
]