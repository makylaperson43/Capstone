# Generated by Django 3.2.7 on 2022-05-04 14:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('HUB', '0003_auto_20220504_1421'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='total',
        ),
    ]
