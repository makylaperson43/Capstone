# Generated by Django 3.2.7 on 2022-05-04 14:39

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('HUB', '0004_remove_order_total'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='order_num',
            field=models.UUIDField(default=uuid.uuid4, editable=False),
        ),
    ]
