# -*- coding: utf-8 -*-

from django.core.management.base import BaseCommand
from currency.tickers import MercadoBitcoinTickerBTC, MercadoBitcoinTickerLTC,\
    BitstampBTC

class Command(BaseCommand):
    help = 'Fetches new data for every provider.'
    
    def handle(self, *args, **options):
        print("Fetching data for MercadoBitCoin - BTC")
        mbtc = MercadoBitcoinTickerBTC()
        mbtc.get_normalized_data().save()
        
        print("Fetching data for MercadoBitCoin - LTC")
        mbtc_ltc = MercadoBitcoinTickerLTC()
        mbtc_ltc.get_normalized_data().save()
        
        print("Fetching data for Bitstamp")
        stamp = BitstampBTC()
        stamp.get_normalized_data().save()