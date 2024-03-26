# Generated by Django 5.0.3 on 2024-03-26 18:36

import datetime
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Car',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('license_plate', models.CharField(max_length=8)),
                ('mark', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=50)),
                ('VIN', models.CharField(max_length=17)),
                ('price_per_hour', models.DecimalField(decimal_places=2, max_digits=4)),
                ('is_useful', models.BooleanField(default=True)),
                ('notes', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Client',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('age', models.IntegerField()),
                ('PESEL', models.CharField(max_length=11)),
                ('telephone_number', models.CharField(max_length=9)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('locality', models.CharField(max_length=50)),
                ('street', models.CharField(max_length=50)),
                ('zip_code', models.CharField(max_length=5)),
                ('notes', models.TextField(blank=True)),
            ],
        ),
        migrations.CreateModel(
            name='Rental',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('rental_date', models.DateTimeField(default=datetime.datetime(2024, 3, 26, 19, 36, 42, 775949))),
                ('return_term', models.DateTimeField(default=datetime.datetime(2024, 3, 26, 20, 36, 42, 775949))),
                ('return_date', models.DateTimeField(blank=True, null=True)),
                ('rental_cost', models.DecimalField(decimal_places=2, max_digits=10)),
                ('car_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend_api.car')),
                ('client_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='backend_api.client')),
            ],
        ),
    ]
