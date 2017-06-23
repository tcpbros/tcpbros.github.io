---
title: Git Commit
author: odarbelaeze@gmail.com
---

`git commit` puede ser el comando más importante en el mundo de git. Este
comando agrega semántica a un repositorio de git, esto quiere decir, que no
solo almacenamos cambios sino la razón por la cual se realizan estos cambios.

## Commit message

La manera como agregamos sentido a los cambios realizados en git es mediante
un _commit message_, este mensaje se puede agregar desde el editor predeterminado
del sistema mediante `git commit` o mediante un argumento de consola:

```bash
git commit -m "Tu propio commit message"
```

Es importante saber que escribir en este mensaje, al principio nos vemos
inclinados a escribir mensajes del tipo:

```bash
git commit -m "Realizando cambios"
# ó
git commit -m "Actualiando los archivos a.py y b.py"
```

Estos son malos ejemplos de _commit messages_, por una parte son obvios, ya
que git no nos permitiría realizar un _commit_ si no hay cambios en el
repositiorio, y por otra parte redundantes, ya que `git show <commit hash>`
muestra no solo la lista de archivos modificados sino los cambios específicos
realizados en dicha revisión.

## Buenos commit messages

Un buen _commit message_ explica la intencion que tuvieron los cambios, por
ejemplo,

```bash
git commit -m "Cambia el color del fondo de la pagina about"
# ó
git commit -m "Crea una nueva sección en el blog"
```

Por otra parte, buenos _commit messages_, son consisos (menos de 72 caractéres)
y estan escritos en infinitivo, ya que estas revisiones son reversibles, y al
revertirlas se generan automáticamente mensajes del tipo,

> Revert "Crea una nueva sección en el blog"

que no tienen tanto sentido para otras conjugaciones.

## Cuando realizar un commit

Bien, en este caso distintos autores van a tener distintas opiniones, sin
embargo, yo me adhiero a la teoría del _unit of work_ (unidad de trabajo), me
gusta definir una unidad de trabajo como un set de cambios mínimo que nos lleva
desde un software funcional (o texto compilable e inteligible) hasta otro
software funcional acercandonos a una meta mas grande.

Por ejemplo, si tengo el objetivo de crear un blog, descargar los archivos
básicos (wordpress por ejemplo) sería una unidad de trabajo, no toma tanto
tiempo como el objetivo final (crear un blog) pero me lleva un paso adelante,
y se puede celebrar con un:

```bash
git commit -m "Agrega archivos basicos del blog engine"
```

Una segunda unidad de trabajo sería elegir y descargar los archivos
relacionados con el tema deseado para el blog, este paso nuevamente nos lleva
desde un software funcional a otro software funcional pero no todo el camino
hasta el objetivo final, este pequeño paso puede ser celebrado con un:

```bash
git commit -m "Configura archivos relacionados con un tema"
```

## Conclusión

Realizar buenos _commits_ a buen tiempo y con buenos _commit messages_ toma
tiempo y práctica, hay que saber que pese a que los _commit messages_ sean
malos al principio no perderemos todas las ventajas de un sitema de control de
vesiones, así que a experimentar con _commit messages_ y unidades de trabajo.
