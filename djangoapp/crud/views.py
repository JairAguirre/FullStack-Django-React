from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
from crud.models import Users
from crud.serializers import UsersSerializer
from rest_framework.decorators import api_view
#Working
@api_view(['GET'])
def buscarUsuario(request, pk):
    # find users by pk (id)
    try: 
        user = Users.objects.get(pk=pk) 

        users_serializer = UsersSerializer(user) 
        return JsonResponse(users_serializer.data) 
    except Users.DoesNotExist: 
        return JsonResponse({'message': 'The tutorial does not exist'}, status=status.HTTP_404_NOT_FOUND) 


@api_view(['PUT'])
def actualizar_usuarios(request, pk):

        user = Users.objects.get(pk=pk)
        users_data = JSONParser().parse(request) 
        users_serializer = UsersSerializer(user, data=users_data) 
        if users_serializer.is_valid(): 
            users_serializer.save() 
            return JsonResponse(users_serializer.data) 
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST) 

@api_view(['DELETE'])

def Eliminar_usuarios(request,pk):
    user = Users.objects.get(pk=pk)
    user.delete()
    return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)

#Working

@api_view(['POST'])
def crear_usuarios(request):
    users_data = JSONParser().parse(request)
    users_serializer = UsersSerializer(data=users_data)
    if users_serializer.is_valid():
        users_serializer.save()
        return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED) 
    return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def listar_usuarios(request):
    usuarios = Users.objects.all()
    users_serializer = UsersSerializer(usuarios, many=True)
    return JsonResponse(users_serializer.data, safe=False)