from django.urls import path
from crud import views


urlpatterns = [ 
    path('crud/usersLists', views.listar_usuarios),
    path('crud/CrearUSer', views.crear_usuarios),
    path('crud/eliminarUser/<int:pk>', views.Eliminar_usuarios),
    path('crud/updatedeUser/<int:pk>', views.actualizar_usuarios),
     path('crud/buscar/<int:pk>', views.buscarUsuario),

]