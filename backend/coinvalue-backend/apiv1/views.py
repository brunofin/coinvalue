from django.shortcuts import render
from currency.models import Provider
from django.http.response import HttpResponse
from django.core import serializers
import http


def providers(request):
    if request.method == 'GET':
        # returns a simplified list of providers
        providers = Provider.objects.all()
        return HttpResponse(status=http.client.OK, 
            content=serializers.serialize('json', providers),
            content_type='application/json')
    else:
        return HttpResponse(status=http.client.METHOD_NOT_ALLOWED)
