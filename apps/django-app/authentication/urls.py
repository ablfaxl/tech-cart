from django.urls import path
from .views import SignupView, SigninView, Users

urlpatterns = [
    path('signup/', SignupView.as_view(), name='signup'),
    path('signin/', SigninView.as_view(), name='signin'),
    path('users/', Users.as_view(), name='users')
]
