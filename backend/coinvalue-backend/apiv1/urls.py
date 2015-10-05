# -*- coding: utf-8 -*-

from django.conf.urls import include, url
from apiv1 import views

urlpatterns = [
    url(r'providers/$', views.providers),
    url(r'providers/(?P<providerId>.*)/history/$', views.history),
    url(r'providers/(?P<providerId>.*)/history/(?P<historyId>.*)/$', views.history),
]