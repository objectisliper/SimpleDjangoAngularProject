# PythonProjectInit
## Base set up

At core directory of project, use provided commands:

```
python3 -m venv venv
source venv/bin/activate
python3 -m pip install --upgrade pip
pip install -r requirements.txt
```

Duplicate .env.example file and rename it to .env at project core directory, change secret key,
debug mode, and database settings to your own or to production server settings

If you don't have installed postgresql at your system, use this commands

```
sudo apt-get update

sudo apt-get install postgresql postgresql-contrib
```

Full guide, how set up postgres on unix system
- https://medium.com/chingu/how-i-setup-postgresql-with-django-1-11-in-ubuntu-17-04-lts-85e51669e153

And the final stage:

```
python manage.py migrate

```

## To start local server

```
python manage.py runserver 0:8000
```
