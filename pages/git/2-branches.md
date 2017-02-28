---
title: Introducción a branches
author: miguelgondu@gmail.com
---

**Branches** (en español *ramas*) consisten en diferentes líneas temporales para
nuestro proyecto. Supongamos que estamos trabajando en una página web y nos
gustaría experimentar con cambiarla del todo. Hacer todos estos cambios puede
ser peligroso, porque es probable que el resultado no nos guste para nada. Para
esto llegan las ramas: crear una rama en git es como crear una línea temporal
paralela a la original. En esta rama que creamos podemos experimentar todo lo
que querramos y, si no estamos contentos con los resultados, es tan simple como
desecharla y volver a la rama principal. Como segundo ejemplo podemos
considerar el siguiente: supongamos que estamos trabajando en una tesis con un
profesor. Podemos crear una rama en donde el profesor se encargará de hacer
revisiones, de tal forma que sus cambios no afecten el desarrollo principal de
la tesis. 

![Imagen con branches](/branches.svg)

Realizamos un par de ejemplos en el siguiente video:

@[youtube](pUyMtSHBuv4)

En este post presentamos una pequeña introducción al uso básico de ramas de 
forma local. Más tarde entraremos en más detalles sobre este tema cuando
hablemos de usar git de forma remota.

## git branch

Usando el comando

```
git branch
```

podemos obtener una lista de todas las ramas de nuestro proyecto.

## git checkout -b

Con el comando

```
git checkout -b nombre_nueva_rama
```

podemos crear una nueva rama.

## git checkout

Usando

```
git checkout nombre_de_la_rama
```

podemos movernos entre ramas pasándole el nombre de la rama a la que querramos
entrar.

## git merge

Supongamos que estamos ubicados sobre cierta rama llamada *rama1* y que tenemos
otra rama en el repositorio llamada *rama2*. Si queremos mezclar ambas ramas
(lo cual consiste en mezclar los commits de ambas) usamos el comando

```
git merge nombre_de_la_rama
```

## git branch -D

Para eliminar una rama, usamos

```
git branch -D nombre_de_la_rama
```
