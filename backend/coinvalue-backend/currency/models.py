from django.db import models

class DigitalCurrency(models.Model):
    id = models.CharField(max_length=5, primary_key=True)
    name = models.CharField(max_length=25)

class Provider(models.Model):
    name = models.CharField(max_length=255)
    url = models.URLField()
    ticker = models.URLField()
    refCurrency = models.CharField(max_length=5)
    digitalCurrency = models.ForeignKey(DigitalCurrency)
    
class History(models.Model):
    provider = models.ForeignKey(Provider)
    date = models.DateTimeField()
    buy = models.PositiveSmallIntegerField()
    sell = models.PositiveSmallIntegerField()
    high = models.PositiveSmallIntegerField()
    low = models.PositiveSmallIntegerField()