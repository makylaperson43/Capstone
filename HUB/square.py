from square.client import Client

client = Client(
    access_token='EAAAEAGT49ulpNWzHiSvEF1S4bLUKf8pcHfR6Eql5eT_2cgV45WXFQDueeM0E7nT',
    environment='sandbox',
)

customers_api = client.customers
payments_api = client.payments
result = customers_api.list_customers()
if result.is_success():
    print(result.body)
elif result.is_error():
    print(result.errors)