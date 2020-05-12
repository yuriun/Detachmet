from django.shortcuts import render
from detachmentx.models import Product

# Create your views here.

def index(request):
    listP = Product.objects.all()
    context = {
        'produtos':listP
    }
    return render(request, 'index.html', context)

def contact(request):
    return render(request, 'contact.html')
