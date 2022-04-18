from square.client import Client

client = Client(
    access_token='EAAAEAGT49ulpNWzHiSvEF1S4bLUKf8pcHfR6Eql5eT_2cgV45WXFQDueeM0E7nT',
    environment='sandbox',
)

locations_api = client.locations
result = locations_api.list_locations()
if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)