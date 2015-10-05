# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DigitalCurrency',
            fields=[
                ('id', models.CharField(serialize=False, primary_key=True, max_length=5)),
                ('name', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('date', models.DateTimeField()),
                ('buy', models.FloatField()),
                ('sell', models.FloatField()),
                ('high', models.FloatField()),
                ('low', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Provider',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False, verbose_name='ID', auto_created=True)),
                ('name', models.CharField(max_length=255)),
                ('url', models.URLField()),
                ('ticker', models.URLField()),
                ('refCurrency', models.CharField(max_length=5)),
                ('digitalCurrency', models.ForeignKey(to='currency.DigitalCurrency')),
            ],
        ),
        migrations.AddField(
            model_name='history',
            name='provider',
            field=models.ForeignKey(to='currency.Provider'),
        ),
    ]
