# Generated by Django 2.2 on 2020-03-22 10:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_auto_20200322_1633'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='fk',
            new_name='category_id',
        ),
    ]