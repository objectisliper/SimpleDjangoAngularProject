# Generated by Django 2.2 on 2019-05-23 11:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('behealthy_api', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='name',
        ),
    ]
