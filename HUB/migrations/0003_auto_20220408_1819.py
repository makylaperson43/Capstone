# Generated by Django 3.2.7 on 2022-04-08 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('HUB', '0002_auto_20220408_1818'),
    ]

    operations = [
        migrations.AlterField(
            model_name='coffees',
            name='add_in',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AlterField(
            model_name='food',
            name='add_ins',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
    ]