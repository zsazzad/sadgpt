from django.shortcuts import render

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json


# Create your views here.

def chatview(request):
    return render(request,'index.html')

@csrf_exempt
def chatgpt(request):
    if request.method == "POST":
        message = json.loads(request.body)["message"]
        response = "This is the response from ChatGPT."
        return JsonResponse({"message": response})