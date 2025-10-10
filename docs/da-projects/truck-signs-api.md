# Truck Signs API

---

## Table of Contents
- [Description](#description)
- [Quickstart](#quickstart)
    - [Prerequisites](#prerequisites)
    - [Clone the Project](#1-clone-the-project)
    - [Prepare Configuration](#2-prepare-configuration)
    - [Create Docker Network](#3-network)
    - [Database](#4-database)
    - [Django App](#5-django-app)
    - [Django Admin](#6-django-admin)
    - [Important Notes](#important-notes)

---

## Description

**Signs for Trucks** is an online store to buy pre-designed vinyls with custom lines of letters (often call truck letterings). The store also allows clients to upload their own designs and to customize them on the website as well. Aside from the vinyls that are the main product of the store, clients can also purchase simple lettering vinyls with no truck logo, a fire extinguisher vinyl, and/or a vinyl with only the truck unit number (or another number selected by the client).

---

## Quickstart

### Prerequisites

- [Git](https://git-scm.com/) must be installed
- [Docker](https://www.docker.com/) must be installed

---

### 1. Clone the Project

```bash
git clone https://gitlab.com/geeser/truck_signs_api.git
cd truck_signs_api
```

---

### 2. Prepare Configuration

Copy the sample environment file:

```bash
cp ./truck_signs_designs/settings/simple_env_config.env ./truck_signs_designs/settings/.env
```

Generate a new SECRET_KEY:

```bash
docker run -it --rm python /bin/bash -c "pip -qq install Django; python -c 'from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())'"
```

```bash
Example Output:
j0z*mr@^sqnw1c+^(cj5-3u^j!^%p0o=b+6v+uv$r1%n4b&tw4
```

Open the .env file and fill in the variables:

```bash
nano ./truck_signs_designs/settings/.env
```

```bash
SECRET_KEY=j0z*mr@^sqnw1c+^(cj5-3u^j!^%p0o=b+6v+uv$r1%n4b&tw4

POSTGRES_DB=trucksigns_db
POSTGRES_USER=trucksigns_user
POSTGRES_PASSWORD=supertrucksignsuser!
POSTGRES_HOST=truck_signs_db
POSTGRES_PORT=5432

# Django settings
SUPERUSER_USERNAME=admin
SUPERUSER_EMAIL=admin@admin.com
SUPERUSER_PASSWORD=admin
```

---

### 3. Network

Create Docker Network
```bash
docker network create truck_signs_network
```

---

### 4. Database

Start a Postgres Database with Docker

***Bash:***
```bash
docker run -d \
--name truck_signs_db \
--network truck_signs_network \
--env-file ./truck_signs_designs/settings/.env \
-v ./postgres_data:/var/lib/postgresql/data \
-p 5432:5432 \
--restart unless-stopped \
postgres:13
```

***Powershell:***

```pwsh
docker run -d `
--name truck_signs_db `
--network truck_signs_network `
--env-file ./truck_signs_designs/settings/.env `
-v ./postgres_data:/var/lib/postgresql/data `
-p 5432:5432 `
--restart unless-stopped `
postgres:13
```

---

### 5. Django App

First, build the Docker image:

```bash
docker build -t truck_signs .
```

If you got an Error like this: You need sudo priveleges.
>```ignore
>------
> > [internal] load build context:
>------
>ERROR: failed to solve: error from sender: open postgres_data: permission denied
>```
>```bash
>sudo docker build -t truck_signs .
>```

Then, start the container:

***Bash:***

```bash
docker run -d \
--name truck_signs_app \
--network truck_signs_network \
--env-file ./truck_signs_designs/settings/.env \
-v truck_signs_media:/app/media \
-v truck_signs_static:/app/static \
-p 8020:5000 \
--restart on-failure \
truck_signs
```

***Powershell:***

```pwsh
docker run -d `
--name truck_signs_app `
--network truck_signs_network `
--env-file ./truck_signs_designs/settings/.env `
-v truck_signs_media:/app/media `
-v truck_signs_static:/app/static `
-p 8020:5000 `
--restart on-failure `
truck_signs
```

---

### 6. Django Admin

Open in your browser:

- http://localhost:8020 – should show an error page at first

- http://localhost:8020/admin – Django Admin interface

The superuser is defined in the .env file and should be automatically created on startup (otherwise, run createsuperuser
manually).

---

### Important Notes

>- The database hostname must be consistent everywhere: `truck_signs_db`
   >
   >  - In `.env`, Docker run command, `entrypoint.sh`, etc.
>
>- The ports must match:
   >
   >  - `Dockerfile`: `EXPOSE 5000`
>
>  - `entrypoint.sh`: binds to `0.0.0.0:5000`
>
>  - Docker run: `-p 8020:5000`

Your Truck Signs API is now running in Docker!


