---
title: Repositorios remotos
author: odarbelaeze@gmail.com
date: 2017-03-04
tags: git, remote, github, ramas, conflictos
summary: Explicamos cómo crear un repositorio remoto usando github, y cómo
    mantener los proyectos sinronizados en diferentes remotos.
---

Una de las características más usadas de git es su capacidad de facilitar la
colaboración en el desarrollos de proyectos basados en texto como programas o
documentos importantes. Para lograr esto git usa un concepto basado en
repositorios remotos, es decir las carpetas que tenemos con nuestros proyectos
e historia de los mismos pueden ser almacenados en equipos remotos.

Originalmente en git estos estos remotos pueden relacionarse en un grafo
arbitrario sin embargo, vamos a cubrir en este post un servicio de repositorios
remotos centralizado muy popular llamado [github](https://github.com). Este
servicio almacena repositorios y ofrece herramientas que facilitan realizar
proyectos de manera colaborativa.

## Para empezar

Lo primero que debemos hacer es visitar [https://github.com](https://github.com)
crear una cuenta y crear un repositorio, el sitio web ofrece dos opciones,

1. Crear un repositorio vació.
2. Crear un repositorio e inicializarlo con un archivo `README` o una licencia.

La primera opción es útil para cuando ya tenemos un repositorio preparado y
solo queremos almacenarlo remotamente. Cuando tomamos esta opcion vamos a
nuestra máquina y ejecutamos los siguientes comandos para inicializar el
repositorio remoto:

```bash
# Desde nuestro repositorio
git remote add origin https://github.com/<username>/<reponame>.git
git push -u origin master
```

La segunda opcion es muy útil cuando aun no tenemos un repositorio
inicializado, si usamos esta opción es bueno tomar ventaja de las opciones para
agregar un archivo `.gitignore` y un archivo `LICENCE`. Si tomamos esta
opción vamos a nuestra máquina y ejecutamos los siguientes comandos para
inicializar,

```bash
# Desde nuestra carpeta para código
git clone https://github.com/<username>/<reponame>.git
cd <reponame>
```

En ambos casos un remoto llamado _origin_ es agregado a nuestra lista de
remotos que podemos ver usando el comando `git remote -v`.

## Mantener el repositorio sincronizado

Bien, ahora que tenemos nuestro repositorio remoto, necesitamos mantener los
cambios sincronizados entre los distintos repositorios, local y remoto.

Para lograr esto, primero, hagamos un ejemplo,

```bash
# Desde nuestro repositorio
# Hacemos algunos cambios
git add <archivos cambiados>
git commit -m "Describo los cambios"
```

Luego vamos directamente al repositorio en [github](https://github.com) la url
debe ser algo como `https://github.com/<username>/<reponame>` si inspeccionamos
los cambios recientes nos daremos cuenta de que los cambios recientemente
realizados no se encuentran... que contrariedad.

Este ni ningún otro servicio de repositorios remotos va a mantener
sincronizados los repositorios automáticamente, git predata y además tiene una
filosofía diferente a algo como [dropbox](https://dropbox.com) o [google
drive](https://drive.google.com). Los repositorios tienen que ser sincronizados
manualmente, para publicar los cambios recientemente realizados, debemos usar
el comando:

```bash
# Desde nuestro repositorio
git push origin master
```

Donde `origin` es el nombre del remoto y `master` es el nombre de la rama
remota. Recuerden `git push -u origin master`, al haber usado esa bandera `-u`
que es un nombre corto para `--set-upstream` la rama local `master` se há
asociado a la rama remota `origin master` así que este comando se puede
simplificar y simplemente escribir,

```bash
# Desde nuestro repositorio
git push
```

## Un grafo arbitrario

Git, permite tender un grafo arbitrario de remotos, pero cuando usamos
[github](https://github.com) este tiende a convertirse en un lugar centralizado
normalmente, en un equipo de desarrollo, cada miembro mantiene sus cambios
sincronizados con github, y obtine los cambios de sus compañeros desde github
tambien, para leer cambios que se encuentran en el remoto y no se encuentran aun
en nuestro repositorio local usamos el comando

```bash
# Desde nuestro repositorio
git pull origin master
# Que puede ser simplificado a
git pull
```

## Conflictos

Mantener los repositorios sincronizados usando `push` y `pull` de manera
asíncrona puede ocacionar conflictos, estos se generan cuando se quiere
realizar un `pull` y los cambios que se encuentran en el remoto y los cambios
locales que no se encuentran en el remoto modifican las mismas lineas de un
archivo. Git hace muy fácil combinar cambios controlados semánticamente entre
distintas versiones de un repositorio, sin embargo, git requiere intervención
humana en caso de que se presenten conflictos, y aún así, git hace facil
identificarlos y resolverlos.

## Ramas

Para terminar, si se usan ramas, para evitar conflictos entre versiones,
o simplemente para mantener dos versiones de un proyecto simultaneamente en
el mismo repositorio hay que tener cuidados especiales, cuando se va a hacer
push por primera vez de una nueva rama se puede hacer:

```bash
# Desde nuestro repositorio
git checkout -b nueva-rama
# Opcionalmente realizar cambios y commit
git push -u origin nueva-rama
```

La bandera `-u` va a asociar las ramas local y remota para que luego se pueda
hacer simplemente `git push` o `git pull` desde esta rama.

Para traer nuevas ramas desde un repositorio remoto hacemos,

```bash
# Desde nuestro repositorio
git pull
git checkout nueva-rama-remota
```

las versiones recientes de git, van a detectar que la `nueva-rama-remota` no
existe en nuestro repositorio local y luego la va a crear y asociar, en
versiones antiguas de git el comando anterior arrojará un error y lo correcto
sería crear y asociar la rama manualmente,

```bash
# En versiones antiguas de git
# Desde nuestro repositorio
git pull
git checkout -b nueva-rama-remota --track origin/nueva-rama-remota
```

un poco más largo, pero no mucho más complicado.
