# Docker

---

## Build

````bash
# 🔸 Build-Argument vor dem FROM: Basis-Image konfigurierbar
ARG NODE_VERSION=20
FROM node:${NODE_VERSION}

# 🔸 Argument auch nach FROM nochmal definieren, falls später genutzt wird
ARG APP_ENV=production
ARG APP_DIR=/createdFolder
ARG APP_PORT=3000

# 🔸 Umgebungsvariable zur Laufzeit verfügbar machen
ENV NODE_VERSION=${NODE_VERSION}
ENV NODE_ENV=${APP_ENV}
ENV PORT=${APP_PORT}
ENV WORKDIR=${APP_DIR}

# 🔸 Arbeitsverzeichnis im Container
WORKDIR ${WORKDIR}

# 🔸 Abhängigkeiten zuerst kopieren (für Build-Caching)
COPY package*.json ./
RUN npm install

# 🔸 Restliche Dateien kopieren in WORKDIR
COPY . .

# 🔸 Port dokumentieren (optional, für Info-Zwecke)
EXPOSE ${PORT}

# 🔸 Port dokumentieren (optional, für Info-Zwecke)
RUN echo "Ausgabe: NODE_VERSION=$NODE_VERSION, NODE_ENV=$NODE_ENV, PORT=$PORT, WORKDIR=${WORKDIR}"

# 🔸 Startkommando
CMD ["node", "start"]
````

Nur Default werten starten
````bash
docker build -t myapp .
````

````bash
 PS C:\DEVELOPMENT\Dockertest> docker build -t myapp .
[+] Building 4.4s (11/11) FINISHED                                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 965B                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:20                                                         0.5s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => [1/6] FROM docker.io/library/node:20@sha256:2c071012e93673d595e1399564c4a48a70a5c0a0acd7db8211d5e6f6316b431a   0.0s
 => => resolve docker.io/library/node:20@sha256:2c071012e93673d595e1399564c4a48a70a5c0a0acd7db8211d5e6f6316b431a   0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 997B                                                                                  0.0s
 => CACHED [2/6] WORKDIR /createdFolder                                                                            0.0s
 => CACHED [3/6] COPY package*.json ./                                                                             0.0s
 => [4/6] RUN npm install                                                                                          2.3s
 => [5/6] COPY . .                                                                                                 0.1s
 ----------------------------------------------------------------------------------------------------------------------
 => [6/6] RUN echo "Ausgabe: NODE_VERSION=20.19.4, NODE_ENV=production, PORT=3000, WORKDIR=/createdFolder"         0.4s
 ----------------------------------------------------------------------------------------------------------------------
 => exporting to image                                                                                             0.8s
 => => exporting layers                                                                                            0.5s
 => => exporting manifest sha256:f4b74052d1f4fc92f59d10519e9db2beb1296c3f511c7f1c464d1a1d37b636dd                  0.0s
 => => exporting config sha256:02419a4e53365db3344390b2963c8b4b9c856e6ee40cf0af5483fda14142dc08                    0.0s
 => => exporting attestation manifest sha256:dbba38c0807f802a5eda6581106a0bc7f4bd6e652d9cb5aae93f4757bda9ff68      0.0s
 => => exporting manifest list sha256:6f7441fa3e624fded91a24d50de2ea344a1e4434439e3d1511241d8837a2cc8e             0.0s
 => => naming to docker.io/library/myapp:latest                                                                    0.0s
 => => unpacking to docker.io/library/myapp:latest   
````

````bash
docker run -p 3000:3000 myapp
````

Mit anderen Werten starten
````bash
docker build `
  --build-arg NODE_VERSION=18 `
  --build-arg APP_ENV=development `
  --build-arg APP_PORT=4000 `
  --build-arg APP_DIR=/app `
  -t myapp-dev .
````

````bash
PS C:\DEVELOPMENT\Dockertest> docker build `
>>   --build-arg NODE_VERSION=18 `
>>   --build-arg APP_ENV=development `
>>   --build-arg APP_PORT=4000 `
>>   --build-arg APP_DIR=/app `
>>   -t myapp-dev .
[+] Building 5.0s (12/12) FINISHED                                                                 docker:desktop-linux
 => [internal] load build definition from Dockerfile                                                               0.0s
 => => transferring dockerfile: 965B                                                                               0.0s
 => [internal] load metadata for docker.io/library/node:18                                                         0.9s
 => [auth] library/node:pull token for registry-1.docker.io                                                        0.0s
 => [internal] load .dockerignore                                                                                  0.0s
 => => transferring context: 2B                                                                                    0.0s
 => CACHED [1/6] FROM docker.io/library/node:18@sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d94349855671  0.0s
 => => resolve docker.io/library/node:18@sha256:c6ae79e38498325db67193d391e6ec1d224d96c693a8a4d943498556716d3783   0.0s
 => [internal] load build context                                                                                  0.0s
 => => transferring context: 64B                                                                                   0.0s
 => [2/6] WORKDIR /app                                                                                             0.1s
 => [3/6] COPY package*.json ./                                                                                    0.1s
 => [4/6] RUN npm install                                                                                          2.3s
 => [5/6] COPY . .                                                                                                 0.1s
 ----------------------------------------------------------------------------------------------------------------------
 => [6/6] RUN echo "Ausgabe: NODE_VERSION=18.20.8, NODE_ENV=development, PORT=4000, WORKDIR=/app"                  0.5s
 ----------------------------------------------------------------------------------------------------------------------
 => exporting to image                                                                                             0.9s
 => => exporting layers                                                                                            0.6s
 => => exporting manifest sha256:6a84492c4052afb02a2e22d44361ec50498e9463c86925c2a6b7925ef36b322a                  0.0s
 => => exporting config sha256:927df1229e3c0f024e866c1d93eabbb3ec20036dc571bb1722f3984c7476cb11                    0.0s
 => => exporting attestation manifest sha256:6df6d3f18603e93b190f6f59daf4ababd28eb0ca09cb1be0250ee286dab81cb9      0.0s
 => => exporting manifest list sha256:2dd3e4c53f4a954e582d372eb6eeee42f567faac02e0a62b9778bfd73fb1b19f             0.0s
 => => naming to docker.io/library/myapp-dev:latest                                                                0.0s
 => => unpacking to docker.io/library/myapp-dev:latest                                                             0.2s
````

````bash
docker run -p 3000:4000 myapp-dev
````

## Image

````
docker pull imagename
````


## Container

````
docker start imagename -options
    --name=Containername
    --restart=option
    -p Portbinding
    -v volume
    -d detached (im hintergrund)
````








