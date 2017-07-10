---
title: Instalando node de manera segura
author: odarbelaeze@gmail.com
tags: node, js, cli
summary: Explicamos como instalar node de manera segura usando el gestor
    de versiones nvm (node version manager)
date: 2017-07-10
---

[Node.js][node] se ha convertido en una herramienta indispensable para el
desarrollo de front-end moderno, sin embargo, tal como evoluciona la
especificacion ECMA Script, en la que se basan las implementaciones específicas
de JavaScript, [Node.js][node] y sus herramientas de consola también evolucionan
rápidamente, habiendo sido publicado en 2011, contamos ya con 8 versiones no
retro compatibles.[[Cambiaría casi todo este párrafo, está inmanejable por el
montón de tecnicismos. Dejaría los tecnicismos para después y diría nada maś que
"Node.js y sus herramientas de consola evolucionan rápidamente. ¡Ya tenemos 8
versiones no retro compatibles desde apenas el 2011!"; además, recuerde las
tildes; por último (y esto afecta todo después), solo pondría el link a node una
sola vez]]

## Paremos, ¿Qué rayos es Node.js?

[Node.js][node] se puede describir con una simple frase "JavaScript en el
servidor", antes de [Node.js][node] JavaScript era un lenguaje del cliente, y
era interpretado por un navegador, cuando llegó `node`, permitió a los
desarrolladores escribir programas que corrían en el lado del servidor, los
ejemplos más impactantes eran servidores HTTP asíncronos en unas pocas lineas
de código:

```js
// server.js
var http = require('http');
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World\n");
});
server.listen(8000);
console.log("Server running at http://127.0.0.1:8000/");
```

para ejecutar este servidor bastaba con escribir `node server.js` y éste
sencillo código podía manejar una gran cantidad de peticiones en "paralelo"
gracias al _non blocking I/O_ con el que `node` se construyó desde un
principio.

Para los que preferimos otros lenguages de programación como Python para el
backend de nuestras aplicaciones, `node` también se hace indispensable para el
flujo de trabajo, porque facilita la construcción de _single page aplications_,
que es la manera preferida de construir aplicaciones web hoy en día (con esto
no quiero decir que otras metodologías no sean útiles ahora, pero construir
una API y una aplicación web que la consuma se ha hecho bastante accesible
incluso para equipos pequeños de desarrollo).

## Instalación

Para instalar [Node.js][node] recomiendo usar [node version manager][nvm],
también conocido como [nvm][nvm]. Este pequeño script permite instalar varias
versiones de [Node.js][node] y usarlas a conveniencia en el momento necesario.
La instalación de [nvm][nvm] puede realizarse usando un script de instalación
listado en el [github del proyecto][nvm], [[mismo cuento con los links, aunque
no sé]]

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
```

el script clona el repositorio y agrega una línea a la configuración de la
consola de mandos `~/.bashrc` o `~/.zshrc` para agregar el programa `nvm` al
`$PATH` del sistema, por tanto se debe reiniciar la ventana de la terminal.

Después de instalar `nvm` podemos proceder a instalar versiones de `node`. Es
bueno usar una version recomendada de `node`, conocida como LTS _long term
support_ al tiempo de escritura la versión de soporte es `lts/boron` versión
`6.x`. Para instalarla, basta usar el comando,

```bash
nvm install lts/boron
```

Si ésta es la primera vez que usamos el comando, se creará un alias `default`
a esta version y se usará en la consola por defecto. Otros comandos importantes
son:

- `nvm ls` lista las versiones instaladas en el sistema.
- `nvm ls-remote` lista las versiones disponibles para instalar.
- `nvm use <version>` usa una version instalada en la consola.
- `nvm default <version>` configura la versión por defecto de `node` a usar.

## Una vez instalado

Podemos verificar la version de `node` usada en la consola con:

```bash
node --version
# y de npm
npm --version
```

Podemos también instalar paquetes:

```bash
# globalmente con
npm install -g <paquete>
# localmente con
npm install <paquete>
```

Y además podemos poner un archivo `.nvmrc` en nuestros proyectos para
sincronizar la versión de `node` usada por los distintos desarrolladores.

[nvm]: https://github.com/creationix/nvm
[node]: https://nodejs.org/es/

