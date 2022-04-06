from django.test import client
from square.client import Client

REPLACE_ACCESS_TOKEN = ''

client = Client(
    access_token='{{REPLACE_ACCESS_TOKEN}}',
    environment='production',
)

