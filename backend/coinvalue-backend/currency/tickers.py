# -*- coding: utf-8 -*-

from currency.models import DigitalCurrency, Provider, History
import requests, json
from datetime import datetime

class Ticker:
    provider = None
    
    def get_data(self):
        r = requests.get(self.provider.ticker)
        return r.json()
    
    def map(self):
        # data = self.get_data()
        return {
            'provider': None,
            'date': None,
            'buy': None,
            'sell': None,
            'high': None, 
            'low': None
        }
    
    def get_normalized_data(self):
        data = self.map()
        h = History()
        
        h.provider = data['provider']
        h.date = data['date']
        h.buy = data['buy']
        h.sell = data['sell']
        h.high = data['high']
        h.low = data['low']
        
        return h

class MercadoBitcoinTicker(Ticker):
    
    def map(self):
        data = self.get_data()
        print(data)
        
        # https://www.mercadobitcoin.net/api/
        return {
            'provider': self.provider,
            'date': datetime.now(),
            'buy': data['ticker']['buy'],
            'sell': data['ticker']['sell'],
            'high': data['ticker']['high'], 
            'low': data['ticker']['low']
        }

class MercadoBitcoinTickerBTC(MercadoBitcoinTicker):
    provider = Provider.objects.get(name='Mercado Bitcoin', digitalCurrency=DigitalCurrency.objects.get(id='BTC'))
        
class MercadoBitcoinTickerLTC(MercadoBitcoinTicker):
    provider = Provider.objects.get(name='Mercado Bitcoin', digitalCurrency=DigitalCurrency.objects.get(id='LTC'))
    
class BitstampBTC(Ticker):
    provider = Provider.objects.get(name='Bitstamp', digitalCurrency=DigitalCurrency.objects.get(id='BTC'))
    
    def map(self):
        data = self.get_data()
        
        # https://www.bitstamp.net/api/
        return {
            'provider': self.provider,
            'date': datetime.now(),
            'buy': data['last'],
            'sell': data['ask'],
            'high': data['high'], 
            'low': data['low']
        }
