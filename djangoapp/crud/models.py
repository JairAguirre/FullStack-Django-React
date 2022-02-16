from django.db import models

# Create your models here.

class Users(models.Model):

    name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    username = models.CharField(max_length=200,unique=True)
    email = models.CharField(max_length=200, unique=True)
    status = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now=True)
    updated_at = models.DateTimeField(auto_now=True)

    def _str_(self):
        return self.name
    class Meta:
        db_table = "users"