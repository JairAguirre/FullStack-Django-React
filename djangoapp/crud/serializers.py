from rest_framework import serializers 
from crud.models import Users
 
 
class UsersSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users
        fields = ('id',
                'name',
                'last_name',
                'username',
                'email',
                'status',
                'created_at',
                'updated_at'
                )