from django.contrib import admin

from backend_api.models import *

# Register your models here.
@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    pass

@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    pass

@admin.register(Rental)
class RentalAdmin(admin.ModelAdmin):
    pass