# Conduit Backend

---

## Table of Contents
- [Configuration](#configuration)
- [Quick Start Docker](#quick-start-docker)
- [Quick Start Docker Compose](#quick-start-docker-compose)
- [Usage](#usage)

---

## Configuration

Adjust your environment setup inside `conduit-backend/`:

```bash
cp .env.example .env
nano .env
```

Edit your environment variables:

```text
# DJANGO SUPERUSER
DJANGO_SUPERUSER_EMAIL=admin@example.com    # <- change
DJANGO_SUPERUSER_NAME=admin                 # <- change
DJANGO_SUPERUSER_PASSWORD=adminpass         # <- change

# SECURITY
SECRET_KEY=your-django-secret-key           # <- change
DEBUG=True
ALLOWED_HOSTS=localhost,127.0.0.1           # <- change

# CORS
ALLOWED_ORIGIN=http://127.0.0.1:8082        # <- change
```
Save & Exit: `CTRL + O`, then `CTRL + X`

---


## Quick Start Docker

1. Build Image:
```bash
docker build -t conduit-backend .
```

2. Run Container:
```bash
docker run --rm -it -p 7000:8000 --env-file .env conduit-backend
```

---

## Quick Start Docker Compose

You can also start the Django API with [Docker Compose](https://github.com/GeorgStrassberger/conduit-backend/blob/docker/docker-compose.yml) by running:
```bash
docker compose up -d --build
```
---

## Usage

Admin-Login:
```text
Email: admin@example.com
Passwort: adminpass
```

>Replace `localhost` with your host IP if needed.

- Backend: http://localhost:7000/admin

![django_admin_login.png](img/django_administration.png)