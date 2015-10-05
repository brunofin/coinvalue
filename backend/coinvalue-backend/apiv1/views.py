# -*- coding: utf-8 -*-

from currency.models import Provider, History
from django.http.response import HttpResponse
import http, json

def providers(request):
    if request.method == 'GET':
        # returns a simplified list of providers
        providers = Provider.objects.all()

        l = []
        for provider in providers:
            l.append(provider.to_json())
        
        return HttpResponse(status=http.client.OK, 
            content=json.dumps(l), content_type="application/json")
    else:
        return HttpResponse(status=http.client.METHOD_NOT_ALLOWED)

def history(request, providerId, historyId=None):
    if request.method == 'GET':
        if historyId is None:
            try:
                provider = Provider.objects.get(pk=providerId)
            except Provider.DoesNotExist:
                return HttpResponse(status=http.client.NOT_FOUND)
            
            history = History.objects.filter(provider=provider)
            
            l = []
            for h in history:
                l.append(h.to_json())
            
            return HttpResponse(status=http.client.OK, 
                content=json.dumps(l), content_type="application/json")
        else:
            try:
                history = History.objects.get(provider=providerId, pk=historyId)
            except History.DoesNotExist:
                return HttpResponse(status=http.client.NOT_FOUND)
            
            print(history.to_json())
            
            return HttpResponse(status=http.client.OK, 
                content=json.dumps(history.to_json()), content_type="application/json")
    else:
        return HttpResponse(status=http.client.METHOD_NOT_ALLOWED)

