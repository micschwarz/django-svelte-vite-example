from django.shortcuts import render


def index(request):
    return render(request, 'microfrontend_client/index.html', {})