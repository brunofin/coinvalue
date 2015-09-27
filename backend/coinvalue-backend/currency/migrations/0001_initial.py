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
                ('id', models.CharField(max_length=5, serialize=False, primary_key=True)),
                ('name', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='History',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('date', models.DateTimeField()),
                ('buy', models.PositiveSmallIntegerField()),
                ('sell', models.PositiveSmallIntegerField()),
                ('high', models.PositiveSmallIntegerField()),
                ('low', models.PositiveSmallIntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Provider',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
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
