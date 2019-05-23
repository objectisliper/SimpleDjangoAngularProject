# Generated by Django 2.2 on 2019-05-22 10:58

import django.contrib.postgres.fields.jsonb
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=200)),
                ('description', models.TextField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='QuestionRules',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('expression', django.contrib.postgres.fields.jsonb.JSONField()),
                ('question', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='behealthy_api.Question')),
            ],
        ),
    ]
