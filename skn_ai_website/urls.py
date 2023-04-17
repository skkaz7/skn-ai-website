"""skn_ai_website URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from website import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='landing-page.html'), name='index'),

    path('integration/', TemplateView.as_view(template_name='integration.html'), name='integration'),
    path('lecture/', TemplateView.as_view(template_name='lecture.html'), name='lecture'),
    path('cic/', TemplateView.as_view(template_name='cic.html'), name='cic'),
    path('aula/', TemplateView.as_view(template_name='aula.html'), name='aula'),
    path('creativity/', TemplateView.as_view(template_name='creativity.html'), name='creativity'),
    path('marketing/', TemplateView.as_view(template_name='marketing.html'), name='marketing'),
    path('point72/', TemplateView.as_view(template_name='point72.html'), name='point72'),

    path('certificate/', TemplateView.as_view(template_name='certificate.html'), name='certificate'),
    path('website/', TemplateView.as_view(template_name='website.html'), name='website'),
    path('studentspeak/', TemplateView.as_view(template_name='studentspeak.html'), name='studentspeak'),
    path('promptbook/', TemplateView.as_view(template_name='promptbook.html'), name='promptbook'),
    path('chatbot/', TemplateView.as_view(template_name='chatbot.html'), name='chatbot'),
]
