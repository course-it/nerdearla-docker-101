# nerdearla-docker-101

Workshop: Docker 101 - Nerdearla | Buenos Aires

### Entorno de desarrollo

Build de docker

```sh
docker build -t nerdearla-docker .
```

Correr el container

```sh
docker run -p 3000:3000 nerdearla-docker
```

### Entorno de producción

Build de docker

```sh
docker build -f Dockerfile-prod -t nerdearla-docker .
```

Correr el container

```sh
docker run -p 5000:5000 nerdearla-docker
```
