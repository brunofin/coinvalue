# -*- coding: utf-8 -*-

from django.shortcuts import render
from currency.models import Provider
from django.http.response import HttpResponse
from django.core import serializers
import http, simplejson as json


def providers(request):
    if request.method == 'GET':
        # returns a simplified list of providers
        list = []
        providers = Provider.objects.all()
        
        for provider in providers:
            list.append(provider.to_json())
        
        return HttpResponse(status=http.client.OK, 
            content=json.dumps(list), content_type="application/json")
    else:
        return HttpResponse(status=http.client.METHOD_NOT_ALLOWED)
