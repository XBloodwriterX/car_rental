from datetime import datetime, timedelta

from django.db import models
from django.db.models import Model, CharField, IntegerField, BooleanField, TextField, DecimalField, EmailField, \
    ForeignKey, CASCADE, DateTimeField


# Create your models here.
class Car(Model):
    id = IntegerField(primary_key=True)
    licence_plate = CharField(max_length=8)
    mark = CharField(max_length=50)
    model = CharField(max_length=50)
    VIN = CharField(max_length=17)
    price_per_hour = DecimalField(max_digits=4, decimal_places=2)
    is_useful = BooleanField(default=True)
    notes = TextField(blank=True)

class Client(Model):
    id = IntegerField(primary_key=True)
    first_name = CharField(max_length=50)
    last_name = CharField(max_length=50)
    age = IntegerField()
    PESEL = CharField(max_length=11)
    telephone_number = CharField(max_length=9)
    email = EmailField(unique=True)
    locality = CharField(max_length=50)
    street = CharField(max_length=50)
    zip_code = CharField(max_length=5)
    notes = TextField(blank=True)

class Rental(Model):
    id = IntegerField(primary_key=True)
    client_id = ForeignKey(Client, on_delete=CASCADE)
    car_id = ForeignKey(Car, on_delete=CASCADE)
    rental_date = DateTimeField(default=datetime.now())
    return_term = DateTimeField(default=datetime.now() + timedelta(hours=1))
    return_date = DateTimeField(null=True, blank=True)
    rental_cost = DecimalField(max_digits=10, decimal_places=2)