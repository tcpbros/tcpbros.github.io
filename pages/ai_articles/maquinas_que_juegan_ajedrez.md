---
title: Máquinas que juegan juegos: ajedrez
tags: ajedrez, inteligencia artificial, autómatas
summary: Un resumen sobre máquinas que han jugado ajedrez a lo largo de la
historia. Desde el Turco hasta Deep Blue.
nodate: 2017-07-10
author: miguelgondu@gmail.com
---

Una de las definiciones de inteligencia artificial que más me gusta es la
siguiente (y se la debemos a Elaine Rich)

> La inteligencia artificial estudia cómo podemos hacer que un computador haga
> cosas que los humanos todavía podemos hacer mejor.

y hay muchas actividades que en un momento fueron consideradas como muestras de
la inteligencia y creatividad únicamente humana (por ejemplo [hacer cuentas y
álgebra](http://www.wolframalpha.com/), [interpretar imágenes](http://www.ibtimes.sg/googles-deep-learning-ai-project-diagnoses-cancer-faster-pathologists-8092), [demostrar
teoremas](http://isabelle.in.tum.de/website-Isabelle2009-1/index.html), [componer
música](http://www.aiva.ai/)...), pero en este artículo me gustaría concentrarme
en una actividad en particular: **jugar al ajedrez**.^[Este es el primer post en
una serie sobre máquinas que juegan juegos de estrategia. En los siguientes
posts hablaré sobre Go y sobre el futuro de máquinas que juegan juegos de
estrategia con Starcraft 2.]

En 1796, Kempelen Fargas construyó en el palacio Schönbrunn en Viena un autómata
que *jugaba* al ajedrez. Vestido con turbante y fumando una narguila, la máquina
tenía un tablero al frente y, de forma mecánica y pausada, respondía a los
movimientos de su oponente. **El Turco** (como fue bautizado el autómata) era en
verdad un fraude: adentro de la máquina estaba un campeón del ajedrez que, con
la ayuda de espejos e imanes, miraba el tablero y movía las fichas. El turco fue
vendido a Johann Maelzel (un ingeniero vienés, inventor del metrónomo), quien se
encargó de mostrarlo a través de Europa y Estados Unidos. El turco fue
rápidamente bautizado como "el hombre que siempre ganaba", y derrotó a oponentes
de la talla de Benjamin Franklin y Napoleón. El turco motivó muchos escritos en
los que se hablaba de sus mecanismos y de las posiblidades de su fraude, y la
opinión general era que *tal cosa no podía ser*, que *jugar al ajedrez no es
algo que se pudiera mecanizar*; Edgar Allan Poe escribió, hablando de los
autómatas de la época (y en especial sobre el Turco),

> [...] el caso del jugador de ajedrez es completamente distinto. Aquí no puede
> haber una progresión matemática determinada. En el ajedrez, nadie
> realiza movimientos predeterminados de modo que a un movimiento le siga
> necesariamente otro.

Poe no tenía en cuenta, obviamente, que en algún punto en el futuro se pudieran
construir máquinas que pudieran evaluar millones de posibilidades y que pudieran
escoger de entre ellas la mejor, ganando en el ajedrez a fuerza bruta; aunque
comenzamos a crear máquinas que jugaran al ajedrez de forma legítima desde 1914
con Torres Quevedo y su autómata *El Ajedrecista*, los avances serios hacia una
máquina que jugara al nivel *gran maestro* se dio a finales de los noventas.
Podríamos resumir la historia con una sola persona: Garry Kasparov.

Garry Kasparov defendió su título como campeón mundial del ajedrez durante 15
años (podríamos decir que él también hace parte de nuestro recuento de máquinas
que jugan al ajedrez). Como es de esperar, la personalidad de Kasparov es segura
y encantadora (en el sentido peyorativo), características que, según él, eran
esenciales en el ajedrez, porque le permitían manipular a su contrincante
emocionalmente.

Las presencia de Kasparov, atemorizante ante el resto de maestros del ajedrez,
era inútil ante las máquinas que no tenían sentimientos: con los noventas
llegaron varios programas de computadora que jugaban al ajedrez de forma
competitiva a nivel gran maestro. Varias (como Socrates, Chessmaster 3000 y
VirtualChess) evolucionaron para ser los primeros videojuegos de ajedrez, pero
una de ellas pasó a la historia al ser la primera máquina en ganarle a Kasparov 
(en ese entonces campeón mundial del ajedrez): Deep Blue.

Deep Blue es el sucesor de Deep Thought (llamado así por la súpercomputadora de
la novela *La guía del viajero intergaláctico*, de Douglas Adams). Deep Thought
fue programada y construida por estudiantes de doctorado de Carnegie Mellon
University, y resultó siendo una de las mejores máquinas en jugar la primera
versión de [Harvard Cup](https://chessprogramming.wikispaces.com/Harvard+Cup) en
1989, un toreno de ajedrez con humanos y máquinas. Esto atrajo la inversión de
IBM y la atención de la comunidad. En 1989 se jugó también una partida entre
Deep Thought y Garry Kasparov, y éste último logró defender su orgullo y el
orgullo de la raza humana ganándole sin ningún problema. Sin embargo, 7 años
después (y contando con la inversión de IBM), Deep Blue ganó al menos una de las
partidas de su revancha contra Kasparov, y un año después de eso, en 1997, Deep
Blue le ganó la revancha de la revancha a Kasparov en un juego muy parejo: 0-1,
1-1, empate, empate y 2-1 a favor de Deep Blue después de una jugada que fue
clasificada por muchos como *humana*. No ocurrió, obviamente, que la máquina
hubiera despertado una conciencia humana y hubiera ganado. Todo lo contrario,
Joel Benjamin (un gran maestro del ajedrez y asesor del equipo de Deep Blue)
sabía que si el juego se abría con un Caro-Kann (una obertura peligrosa que usó
Kasparov en el último partido) y programó a la fuerza una preferencia por
sacrificar un caballo, trampa en la que cayó Kasparov por completo.

Ese día podríamos decir que el ajedrez, según nuestra definición, dejó de ser
objeto de estudio de IA. Esto se nota inclusive por la forma como ha cambiado
nuestra opinión respecto al ajedrez: mientras que Poe y sus contemporáneos
decían que era sencillamente imposible de mecanizar, hoy en día el ajedrez nos
parece un problema *fácil de resolver*, un problema que se puede resolver a
fuerza bruta.

### Bibliografía y lecturas recomendadas:
- [El Rival de Prometeo, vidas de autómatas ilustres]
(http://impedimenta.es/libros.php/el-rival-de-prometeo-vidas), editorial
Impedimenta, 2009.
- [Documental sobre la partida entre Deep Thought y Garry Kasparov en 1989 (en
inglés)](https://youtu.be/mhnDzk9IVAA)
- [Charla con Murray Campbell y Joel Benjamin sobre Deep Thought y Deep Blue 
(en inglés)](https://www.youtube.com/watch?v=2Xhd2KNNs-c)
- [Artículo sobre el libro más reciente de Kasparov (en inglés)](https://www.ft.com/content/19a2c21a-33e6-11e7-99bd-13beb0903fa3)
