# -*- coding: utf-8 -*-

from django.db import models
import json

class DigitalCurrency(models.Model):
    id = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=25)
    
    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }

class Provider(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    ticker = models.URLField()
    refCurrency = models.CharField(max_length=5)
    digitalCurrency = models.ForeignKey(DigitalCurrency)
    
    
    def to_json(self):
        return {
            'id': self.pk,
            'name': self.name,
            'url': self.url,
            'ticker': self.ticker,
            'refCurrency': self.refCurrency,
            'digitalCurrency': self.digitalCurrency.id
        }
    
    """
    def to_JSON(self):
        return { 'a': 1}
        def _try(o): 
            try:
                return o.__dict__
            except:
                return str(o)
        return json.dumps(self, default=lambda o: _try(o), sort_keys=True, indent=0, separators=(',',':')).replace('\n', '')"""
    
    
class History(models.Model):
    provider = models.ForeignKey(Provider)
    date = models.DateTimeField()
    buy = models.PositiveSmallIntegerField()
    sell = models.PositiveSmallIntegerField()
    high = models.PositiveSmallIntegerField()
    low = models.PositiveSmallIntegerField()
    
    def to_json(self):
        return {
            'id': self.pk,
            'providerId': self.provider.pk,
            'date': self.date,
            'buy': self.buy,
            'sell': self.sell,
            'high': self.high,
            'low': self.low
        }
