---
title: Introducción y comandos locales
author: miguelgondu@gmail.com
date: 2017-03-02
---

**Git** es una herramienta de control de versiones que nos permite, como su
nombre lo dice, controlar los cambios realizados en un proyecto (desde un libro
y sus capítulos hasta una aplicación o un sistema operativo). Git nos permite
organizar los archivos y sus versiones de una forma **semántica**, es decir,
agregándole significado y sentido a los cambios que realizamos.

Podemos usar git de forma local (es decir, en un solo computador) o de forma
remota (subiendo los repositorios a [github](https://github.com/)).

En los primeros dos videos de la serie sobre git (es decir, [git
1](https://youtu.be/9OEYwr9kAXk) y [git 1.5](https://youtu.be/pUyMtSHBuv4))
discutimos ciertos comandos para aprovechar git de forma local. En este post
discutimos con más profundidad la sintaxis y el manejo de éstos. Además,
resumimos cómo instalar git.

@[youtube](9OEYwr9kAXk)

## Instalando git

Para instalar git (en Linux o en OSX) es necesario usar un administrador de
paquetes.

En Ubuntu, en particular, basta con correr el comando

```
apt-get install git
```

en la consola. Si se tiene OSX, es recomendable revisar cómo instalar
[Homebrew](https://brew.sh/index_es.html) o
[Macports](https://www.macports.org/) y, una vez instalado, instalar git con el
gestor de paquetes correspondiente.

## Comandos locales

### git init

Para comenzar un repositorio, nos ubicamos en la carpeta donde está nuestro
proyecto desde la terminal y corremos el siguiente comando:

```
git init
```

### git status
Para conocer el estado de nuestro repositorio, corremos el comando

```
git status
```

Al correr este comando, se muestra en consola los archivos que se han
modificado o los que no hayan sido añadidos al control de versiones en rojo, y
se muestran en verde los cambios que hayan sido añadidos a la *staging zone*
(es decir, los cambios que serían comprometidos en el siguiente commit).

### git add
Para añadir cambios a la *staging zone*, usamos el comando

```
git add nombre_del_archivo # incluyendo wildcards
```

alternativamente podríamos usar

```
git add .
```
para añadir todos los archivos en el directorio actual.

### git commit
Para comprometer los cambios usamos el comando

```
git commit -m "mensaje"
```

en donde expresamos en el mensaje los cambios que realizamos. Éste mensaje
aparece cuando usamos el comando *git log*. Podemos saltarnos el paso de añadir
los cambios usando el comando

```
git commit -am "mensaje"
```

Usando esta bandera, añadimos al commit todos los cambios de archivos que hayan
sido añadidos al menos una vez antes (es decir, los archivos cuyos cambios ya
se estén *siguiendo*).

### git diff

Para ver qué cambios han sido realizados podemos usar el comando

```
git diff
```

Nótese que solo se mostrarán los cambios de archivos que ya hayan sido añadidos
al menos una vez antes.

### git log

Con el comando

```
git log
```

podemos acceder a un historial de todos los commits realizados anteriormente,
saber quién lo hizo y cuándo, e identificar el hash correspondiente a cada
commit. El hash puede ser útil a la hora de usar comandos como *git revert* y
*git checkout*.

### git revert

Usando el comando

```
git revert hash-del-commit
```

podemos revertir los cambios realizados en un commit especificando su hash.

### git show

Para saber qué cambios se realizaron en cierto commit, usamos el comando

```
git show hash-del-commit
```

Usando este comando podemos identificar las líneas que fueron añadidas (las
cuales están precedidas por un +) y las líneas que fueron eliminadas
(precedidas por un -).
