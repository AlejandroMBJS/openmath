---
title: Teorema de Bolzano-Weierstrass
description: Toda sucesion acotada en la recta real contiene una subsucesion convergente. Demostraciones por biseccion y por indices pico, corolarios y ejemplos.
---

# Teorema de Bolzano-Weierstrass

## 1. Motivacion e intuicion

Una sucesion acotada no tiene por que converger. La sucesion $(-1)^n$ esta confinada entre $-1$ y $1$ pero oscila sin descanso y no tiene limite. Sin embargo, algo positivo ocurre: aunque la sucesion completa no converge, siempre es posible extraer de ella una parte que si lo hace.

Esta es la idea central del teorema de Bolzano-Weierstrass: el acotamiento garantiza que los terminos de la sucesion no pueden escaparse al infinito, y eso obliga a que haya alguna direccion hacia la cual infinitos terminos se acumulen. De ese acumulo se extrae la subsucesion convergente.

Geometricamente, imagina que tienes infinitos puntos atrapados en un segmento finito $[m, M]$. Por mucho que salten de un lado a otro, el espacio disponible es limitado. En algun lugar del segmento debe haber un punto al que se acerquen infinitamente muchos de esos terminos. La subsucesion se forma eligiendo, en orden, uno de esos terminos cada vez que la sucesion visita la vecindad de ese punto.

El teorema conecta tres ideas que se desarrollaron en temas anteriores: sucesiones acotadas, subsucesiones y convergencia. Tambien es la herramienta tecnica que hace posible demostrar la compacidad de los intervalos cerrados y acotados en $\mathbb{R}$, que se estudia en el tema siguiente.

## 2. Prerrequisitos

Para trabajar este tema con fluidez conviene tener claros los siguientes resultados.

**Sucesiones acotadas.** Una sucesion $(a_n)$ es acotada si existe $M > 0$ tal que $|a_n| \leq M$ para todo $n \in \mathbb{N}$.

**Subsucesiones.** Dada $(a_n)$ y una sucesion estrictamente creciente de indices naturales $n_1 < n_2 < n_3 < \cdots$, la sucesion $(a_{n_k})_{k \in \mathbb{N}}$ es una subsucesion de $(a_n)$.

**Teorema de la sucesion monotona.** Toda sucesion monotona acotada converge. En particular, toda sucesion creciente acotada superiormente converge a su supremo, y toda sucesion decreciente acotada inferiormente converge a su infimo.

**Teorema de los intervalos anidados.** Si $[a_1, b_1] \supseteq [a_2, b_2] \supseteq \cdots$ es una familia de intervalos cerrados y acotados con $b_n - a_n \to 0$, entonces existe un unico punto $p \in \mathbb{R}$ tal que $\bigcap_{n=1}^{\infty} [a_n, b_n] = \{p\}$.

**Completitud de $\mathbb{R}$.** Todo subconjunto de $\mathbb{R}$ no vacio acotado superiormente tiene supremo en $\mathbb{R}$. Esta propiedad es equivalente al teorema de los intervalos anidados y al teorema de la sucesion monotona.

## 3. Definiciones formales

**Definicion 3.1 (punto de acumulacion de una sucesion).** Sea $(a_n)$ una sucesion en $\mathbb{R}$. Un punto $p \in \mathbb{R}$ es un **punto de acumulacion** de $(a_n)$ si para todo $\varepsilon > 0$ y todo $N \in \mathbb{N}$ existe $n > N$ tal que $|a_n - p| < \varepsilon$.

Equivalentemente, $p$ es punto de acumulacion de $(a_n)$ si algun subconjunto infinito de los terminos de la sucesion cae en cada entorno de $p$.

**Definicion 3.2 (valor limite).** Todo punto de acumulacion de $(a_n)$ se llama tambien **valor limite** de la sucesion. Si $(a_n)$ converge a $L$, entonces $L$ es el unico valor limite de $(a_n)$. Si $(a_n)$ no converge, puede tener varios valores limite o incluso ninguno (si no esta acotada).

**Teorema de Bolzano-Weierstrass (enunciado).** *Toda sucesion acotada $(a_n)$ en $\mathbb{R}$ contiene una subsucesion convergente.*

En terminos equivalentes: toda sucesion acotada en $\mathbb{R}$ tiene al menos un punto de acumulacion.

## 4. Interpretacion en lenguaje natural

El teorema dice que el acotamiento actua como una trampa. Si la sucesion esta obligada a permanecer dentro de un intervalo finito, no puede alejarse indefinidamente en ninguna direccion. Eso garantiza que en alguna zona del intervalo hay una aglomeracion infinita de terminos. Esa zona es el punto de acumulacion, y la subsucesion se obtiene recogiendo terminos de esa aglomeracion en orden creciente de indice.

La conclusion no dice que la sucesion completa converja, ni que el punto de acumulacion sea unico. Dice solamente que hay al menos uno, y que de el se puede extraer una subsucesion que converge hacia el.

Vale la pena notar lo que el teorema no dice: no da ninguna receta constructiva explicita para encontrar la subsucesion. Las dos demostraciones que se presentan a continuacion si dan construcciones explicitas, pero son pruebas de existencia antes que algoritmos practicos.

## 5. Ejemplos basicos

**Ejemplo 5.1.** Sea $a_n = (-1)^n$. Esta sucesion es acotada por $1$ y no converge. Tiene dos subsucesiones convergentes naturales:
- Los terminos con $n$ par forman $(1, 1, 1, \ldots)$, que converge a $1$.
- Los terminos con $n$ impar forman $(-1, -1, -1, \ldots)$, que converge a $-1$.

Los puntos de acumulacion de esta sucesion son exactamente $1$ y $-1$.

**Ejemplo 5.2.** Sea $a_n = \sin(n)$. Esta sucesion es acotada por $1$ (ya que $|\sin(n)| \leq 1$). Es un resultado no trivial que el conjunto de puntos de acumulacion de $(\sin(n))$ es el intervalo completo $[-1, 1]$: para cada $c \in [-1, 1]$ existe una subsucesion de $(\sin(n))$ que converge a $c$. Esto se debe a que los angulos $n$ (en radianes) son densos modulo $2\pi$.

**Ejemplo 5.3.** Sea $(a_n) = (1, 1/2, 1, 1/3, 1, 1/4, \ldots)$, es decir, $a_{2k-1} = 1$ y $a_{2k} = 1/k$ para $k \geq 1$. Esta sucesion es acotada. Tiene dos subsucesiones convergentes inmediatas:
- $(a_{2k-1}) = (1, 1, 1, \ldots) \to 1$.
- $(a_{2k}) = (1/2, 1/3, 1/4, \ldots) \to 0$.

Los puntos de acumulacion son $0$ y $1$.

**Ejemplo 5.4.** Toda sucesion convergente $(a_n) \to L$ es acotada y la subsucesion que extrae el teorema puede tomarse como la sucesion completa, que ya converge a $L$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (el acotamiento es necesario).** La sucesion $a_n = n$ no esta acotada y no tiene ningun punto de acumulacion en $\mathbb{R}$: para cada $p \in \mathbb{R}$, los terminos $a_n = n$ solo visitan la vecindad $(-1 + p, 1 + p)$ un numero finito de veces. En consecuencia, no hay ninguna subsucesion convergente.

**Ejemplo 6.2 (acotado en $\mathbb{Q}$ no implica convergencia en $\mathbb{Q}$).** La sucesion de racionales $a_n$ definida por $a_1 = 1$ y $a_{n+1} = \frac{a_n}{2} + \frac{1}{a_n}$ satisface $a_n \to \sqrt{2}$. Los terminos son racionales y la sucesion esta acotada, pero el limite es irracional. Esto ilustra que el teorema de Bolzano-Weierstrass depende esencialmente de la completitud de $\mathbb{R}$: el resultado falla en $\mathbb{Q}$ sin la propiedad del supremo.

**Ejemplo 6.3 (varios puntos de acumulacion).** Sea $a_n = \sin\!\left(\frac{n\pi}{3}\right)$. Los valores que toma esta sucesion son periodicos con periodo $6$:

$$a_1 = \frac{\sqrt{3}}{2},\quad a_2 = \frac{\sqrt{3}}{2},\quad a_3 = 0,\quad a_4 = -\frac{\sqrt{3}}{2},\quad a_5 = -\frac{\sqrt{3}}{2},\quad a_6 = 0,\quad a_7 = a_1, \ldots$$

Los puntos de acumulacion son $\left\{-\frac{\sqrt{3}}{2}, 0, \frac{\sqrt{3}}{2}\right\}$, y hay tres subsucesiones convergentes naturales.

**Ejemplo 6.4 (el teorema garantiza existencia, no unicidad).** La sucesion $a_n = \frac{1 + (-1)^n}{2}$, es decir, $(0, 1, 0, 1, 0, 1, \ldots)$, tiene exactamente dos puntos de acumulacion: $0$ y $1$. El teorema garantiza que hay al menos uno; en este caso hay exactamente dos.

**Ejemplo 6.5 (limite superior e inferior como puntos de acumulacion extremos).** Para cualquier sucesion acotada $(a_n)$, el limite superior $\limsup_{n\to\infty} a_n$ y el limite inferior $\liminf_{n\to\infty} a_n$ son siempre puntos de acumulacion, y son respectivamente el maximo y el minimo del conjunto de puntos de acumulacion. En el ejemplo anterior, $\limsup = 1$ y $\liminf = 0$.

## 7. Teoremas y demostraciones

### Teorema 7.1 (Bolzano-Weierstrass)

**Enunciado.** *Toda sucesion acotada $(a_n)$ en $\mathbb{R}$ contiene una subsucesion convergente.*

Se presentan dos demostraciones, cada una con su propio valor pedagogico.

---

#### Demostracion 1: por biseccion de intervalos (intervalos anidados)

Como $(a_n)$ es acotada, existe $M > 0$ tal que $a_n \in [-M, M]$ para todo $n$. Defino $I_0 = [-M, M]$.

**Construccion iterativa.** Dado el intervalo $I_k = [c_k, d_k]$ con longitud $2^{1-k} \cdot M$, divido $I_k$ por su punto medio $m_k = \frac{c_k + d_k}{2}$ en dos mitades:

$$I_k^- = \left[c_k, m_k\right], \qquad I_k^+ = \left[m_k, d_k\right].$$

Al menos una de las dos mitades contiene infinitos terminos de $(a_n)$. Si ambas los contienen, elijo la mitad izquierda por convencion. La mitad elegida sera $I_{k+1}$.

Procediendo asi se obtiene una familia de intervalos cerrados y acotados

$$I_0 \supseteq I_1 \supseteq I_2 \supseteq \cdots$$

con longitud $|I_k| = 2^{1-k} M \to 0$ y cada $I_k$ contiene infinitos terminos de $(a_n)$.

**Extraccion de la subsucesion.** Por el teorema de los intervalos anidados, existe un unico punto $p \in \bigcap_{k=0}^{\infty} I_k$.

Elijo $n_1$ de modo que $a_{n_1} \in I_1$. Dado $n_k$, elijo $n_{k+1} > n_k$ de modo que $a_{n_{k+1}} \in I_{k+1}$ (posible porque $I_{k+1}$ contiene infinitos terminos).

La subsucesion $(a_{n_k})$ satisface $a_{n_k} \in I_k$ para todo $k$, y como $p \in I_k$, resulta

$$|a_{n_k} - p| \leq |I_k| = 2^{1-k} M \to 0.$$

Por tanto $a_{n_k} \to p$. $\blacksquare$

---

#### Demostracion 2: por el lema de la subsucesion monotona

**Lema (subsucesion monotona).** *Toda sucesion $(a_n)$ contiene una subsucesion monotona.*

**Demostracion del lema.** Llamo **indice pico** a un indice $n$ tal que $a_n \geq a_k$ para todo $k \geq n$; es decir, $a_n$ es mayor o igual que todos los terminos que vienen despues.

**Caso 1:** existen infinitos indices pico $n_1 < n_2 < n_3 < \cdots$. Entonces $a_{n_1} \geq a_{n_2} \geq a_{n_3} \geq \cdots$, pues cada $n_j$ es pico y $n_{j+1} > n_j$. La subsucesion $(a_{n_k})$ es decreciente.

**Caso 2:** existen solo finitos indices pico. Sea $N$ el ultimo de ellos (o $N = 0$ si no hay ninguno). Para todo $n > N$, el indice $n$ no es pico, luego existe $k > n$ con $a_k > a_n$. Uso esto para construir inductivamente una subsucesion estrictamente creciente: elijo $n_1 > N$; dado $n_j$, como $n_j$ no es pico, existe $n_{j+1} > n_j$ con $a_{n_{j+1}} > a_{n_j}$. La subsucesion $(a_{n_k})$ es estrictamente creciente.

En ambos casos se obtiene una subsucesion monotona. $\square$

**Conclusion del teorema.** Sea $(a_n)$ acotada. Por el lema, contiene una subsucesion monotona $(a_{n_k})$. Esta subsucesion es monotona y acotada (porque $(a_n)$ lo es). Por el teorema de la sucesion monotona, $(a_{n_k})$ converge. $\blacksquare$

---

### Corolario 7.2 (existencia de punto de acumulacion)

**Enunciado.** *Toda sucesion acotada $(a_n)$ en $\mathbb{R}$ tiene al menos un punto de acumulacion.*

**Demostracion.** Por el teorema de Bolzano-Weierstrass existe una subsucesion $(a_{n_k}) \to p$. Entonces $p$ es punto de acumulacion de $(a_n)$: dado $\varepsilon > 0$ y dado $N \in \mathbb{N}$, como $a_{n_k} \to p$ existe $K$ tal que para $k > K$ se tiene $|a_{n_k} - p| < \varepsilon$. Como la sucesion de indices $n_k$ es estrictamente creciente, existe $k > K$ con $n_k > N$. Entonces $n_k > N$ y $|a_{n_k} - p| < \varepsilon$, lo que muestra que $p$ es punto de acumulacion. $\blacksquare$

---

### Teorema 7.3 (caracterizacion del limite superior e inferior)

**Enunciado.** *Sea $(a_n)$ una sucesion acotada. El conjunto de puntos de acumulacion de $(a_n)$ es no vacio, cerrado y acotado. Su maximo es $\limsup_{n\to\infty} a_n$ y su minimo es $\liminf_{n\to\infty} a_n$.*

**Demostracion (esquema).** Defino

$$\limsup_{n\to\infty} a_n = \lim_{n\to\infty} \sup_{k \geq n} a_k = \inf_{n \in \mathbb{N}} \sup_{k \geq n} a_k.$$

La sucesion $s_n = \sup_{k \geq n} a_k$ es decreciente y acotada inferiormente, luego converge; su limite es $\limsup a_n$. Se puede mostrar que $\limsup a_n$ es siempre un punto de acumulacion y que ningun punto de acumulacion lo supera. Un argumento analogo con $i_n = \inf_{k \geq n} a_k$ da el $\liminf$. $\blacksquare$

---

### Proposicion 7.4 (equivalencia con la propiedad del supremo)

El teorema de Bolzano-Weierstrass es equivalente, en el marco de los axiomas de cuerpo ordenado, a la propiedad del supremo de $\mathbb{R}$. Esto significa que:
- Si se asume que todo subconjunto no vacio acotado superiormente tiene supremo, entonces el teorema de Bolzano-Weierstrass se puede demostrar (como hicimos arriba).
- Reciprocamente, si se asume el teorema de Bolzano-Weierstrass, se puede demostrar la propiedad del supremo.

Esta equivalencia muestra que el teorema no es un resultado marginal: captura una propiedad esencial de la recta real que la distingue, por ejemplo, de $\mathbb{Q}$.

## 8. Errores comunes

**Error 8.1 (confundir la sucesion con la subsucesion).** El teorema dice que la sucesion acotada *contiene* una subsucesion convergente, no que la sucesion misma converge. La sucesion $(-1)^n$ es el contraejemplo mas simple: acotada, con subsucesiones convergentes, pero divergente.

**Error 8.2 (pensar que la subsucesion es unica).** No hay unicidad de la subsucesion ni del punto de acumulacion. Una sucesion acotada puede tener muchos puntos de acumulacion y por tanto muchas subsucesiones convergentes con limites distintos.

**Error 8.3 (aplicar el teorema a sucesiones no acotadas).** El enunciado requiere acotamiento. La sucesion $a_n = n$ es la refutacion inmediata de que el resultado valga sin esa hipotesis.

**Error 8.4 (confundir punto de acumulacion de la sucesion con punto de acumulacion del conjunto imagen).** El punto de acumulacion de la sucesion $(a_n)$ esta definido en terminos de la sucesion indexada por $\mathbb{N}$, no del conjunto $\{a_n : n \in \mathbb{N}\}$. Si la sucesion es eventualmente constante, por ejemplo $a_n = 1$ para $n \geq 5$, entonces $1$ es punto de acumulacion de la sucesion aunque $1$ sea un punto aislado del conjunto imagen (si los primeros cuatro terminos son distintos de $1$ y entre si).

**Error 8.5 (creer que el resultado vale en $\mathbb{Q}$).** En $\mathbb{Q}$ el resultado falla: la sucesion de aproximaciones racionales de $\sqrt{2}$ esta acotada en $\mathbb{Q}$ pero no tiene ninguna subsucesion convergente *en $\mathbb{Q}$*, porque el unico candidato a limite es irracional. El teorema depende de la completitud de $\mathbb{R}$.

**Error 8.6 (interpretar el teorema en dimension infinita).** En espacios de dimension infinita el resultado analogamente falso sin hipotesis adicionales. En el espacio de Hilbert $\ell^2$, la sucesion de vectores canonicos $(e_n)$ esta acotada ($\|e_n\| = 1$) pero no tiene ninguna subsucesion convergente en norma. La version correcta en dimension infinita requiere compacidad debil.

## 9. Resumen conceptual

El teorema de Bolzano-Weierstrass establece que el acotamiento en $\mathbb{R}$ es suficiente para garantizar la existencia de al menos una subsucesion convergente. No garantiza convergencia de la sucesion completa ni unicidad del punto de acumulacion.

Las dos demostraciones presentadas son equivalentes y usan ambas la completitud de $\mathbb{R}$, aunque de formas distintas: la primera la usa directamente a traves del teorema de los intervalos anidados; la segunda la usa indirectamente a traves del teorema de la sucesion monotona.

El corolario inmediato es que toda sucesion acotada tiene al menos un punto de acumulacion. Los puntos de acumulacion extremos son el limite superior y el limite inferior.

El teorema es la clave tecnica que justifica la compacidad de los intervalos cerrados y acotados $[a, b]$ en $\mathbb{R}$, y es el punto de partida para los resultados analogos en espacios metricos que se estudian en el bloque de Analisis Matematico.

**Hipotesis esencial.** El acotamiento no puede eliminarse. Sin el, hay sucesiones sin ningun punto de acumulacion.

**Completitud esencial.** El teorema depende de que $\mathbb{R}$ sea completo. En $\mathbb{Q}$ el resultado es falso.

**No unicidad.** El punto de acumulacion no es necesariamente unico. Los extremos del conjunto de puntos de acumulacion son $\limsup$ y $\liminf$.

## 10. Ejemplos guiados finales

### Ejemplo guiado 10.1

Sea $a_n = \frac{(-1)^n \cdot n}{n + 1}$.

**Paso 1.** Verificar que la sucesion es acotada.

Para $n$ par: $a_n = \frac{n}{n+1} < 1$. Para $n$ impar: $a_n = -\frac{n}{n+1} > -1$. En todos los casos $|a_n| < 1$, luego la sucesion esta acotada.

**Paso 2.** Identificar los puntos de acumulacion.

Para $n = 2k$: $a_{2k} = \frac{2k}{2k+1} \to 1$.

Para $n = 2k-1$: $a_{2k-1} = -\frac{2k-1}{2k} \to -1$.

Los puntos de acumulacion son $1$ y $-1$.

**Paso 3.** Verificar que son puntos de acumulacion por definicion.

$p = 1$: dado $\varepsilon > 0$, para $n$ par suficientemente grande, $|a_n - 1| = \frac{1}{n+1} < \varepsilon$. Como hay infinitos $n$ pares mayores que cualquier $N$, $1$ es punto de acumulacion.

$p = -1$: analogo con $n$ impar.

**Paso 4.** Subsucesiones convergentes.

$(a_{2k}) \to 1$ y $(a_{2k-1}) \to -1$.

Ademas, $\limsup a_n = 1$ y $\liminf a_n = -1$.

---

### Ejemplo guiado 10.2

Sea $(a_n)$ definida por $a_n = \cos\!\left(\frac{n\pi}{4}\right)$.

**Paso 1.** Acotamiento. $|\cos(\cdot)| \leq 1$, luego $|a_n| \leq 1$ para todo $n$.

**Paso 2.** Calcular los primeros terminos.

$$a_1 = \cos\!\left(\frac{\pi}{4}\right) = \frac{\sqrt{2}}{2},\quad a_2 = \cos\!\left(\frac{\pi}{2}\right) = 0,\quad a_3 = \cos\!\left(\frac{3\pi}{4}\right) = -\frac{\sqrt{2}}{2},$$
$$a_4 = \cos(\pi) = -1,\quad a_5 = \cos\!\left(\frac{5\pi}{4}\right) = -\frac{\sqrt{2}}{2},\quad a_6 = \cos\!\left(\frac{3\pi}{2}\right) = 0,$$
$$a_7 = \cos\!\left(\frac{7\pi}{4}\right) = \frac{\sqrt{2}}{2},\quad a_8 = \cos(2\pi) = 1,\quad a_9 = a_1, \ldots$$

La sucesion es periodica con periodo $8$.

**Paso 3.** Puntos de acumulacion.

Los valores que toma la sucesion son $\left\{-1, -\dfrac{\sqrt{2}}{2}, 0, \dfrac{\sqrt{2}}{2}, 1\right\}$. Como la sucesion es periodica, cada uno de estos valores se alcanza infinitas veces, y todos son puntos de acumulacion.

**Paso 4.** Subsucesiones convergentes.

Para cada valor $c$ en el conjunto de puntos de acumulacion, la subsucesion formada por los terminos iguales a $c$ converge a $c$ trivialmente (es una sucesion constante a partir del primer termino).

**Paso 5.** Limite superior e inferior.

$\limsup a_n = 1$ (maximo de los puntos de acumulacion) y $\liminf a_n = -1$ (minimo).

---

### Ejemplo guiado 10.3 (aplicacion de la demostracion por biseccion)

Sea $a_n = \frac{1}{n}\sin(n^2)$. Aplicar el metodo de biseccion para localizar un punto de acumulacion.

**Paso 1.** Acotamiento. $|a_n| = \frac{|\sin(n^2)|}{n} \leq \frac{1}{n} \leq 1$ para todo $n \geq 1$. La sucesion esta en $[-1, 1]$.

**Paso 2.** Primera biseccion. Divido $[-1, 1]$ en $[-1, 0]$ y $[0, 1]$. Como $\frac{1}{n}\sin(n^2)$ alterna de signo para distintos valores de $n$, ambas mitades contienen infinitos terminos. Elijo $[-1, 0]$ por convencion.

**Paso 3.** Segunda biseccion. Divido $[-1, 0]$ en $[-1, -1/2]$ y $[-1/2, 0]$. La distribucion de los terminos en cada mitad depende del comportamiento de $\sin(n^2)$; al menos una contiene infinitos terminos.

**Paso 4.** Convergencia. El proceso produce una sucesion de intervalos anidados con longitudes $2, 1, 1/2, 1/4, \ldots$ convergiendo a $0$. El punto $p$ en su interseccion es un punto de acumulacion de $(a_n)$.

**Nota.** En este ejemplo, $a_n = \frac{1}{n}\sin(n^2) \to 0$ porque $|\sin(n^2)| \leq 1$, de modo que el unico punto de acumulacion es $0$. El metodo de biseccion lo localizaria en $0$ si se elige siempre la mitad que contiene infinitos terminos.

---

### Ejemplo guiado 10.4 (subsucesion monotona via indices pico)

Sea $a_n = n \bmod 5$, es decir, el resto de dividir $n$ entre $5$. Los valores son $1, 2, 3, 4, 0, 1, 2, 3, 4, 0, 1, \ldots$ con periodo $5$.

La sucesion esta acotada por $4$.

**Indices pico.** Un indice $n$ es pico si $a_n \geq a_k$ para todo $k \geq n$.

$n = 4$: $a_4 = 4$. Como la sucesion tiene periodo $5$ y el valor $4$ se repite, $n = 4$ no es pico porque $a_9 = 4 \geq 4$ y $a_{14} = 4 \geq 4$, etc. De hecho no hay ningun indice pico (el valor maximo $4$ se repite infinitas veces).

Como hay $0$ indices pico (finitos), el lema asegura que hay una subsucesion estrictamente creciente. En efecto, la subsucesion $a_5, a_{10}, a_{15}, \ldots$ vale $0, 0, 0, \ldots$, que es constante (y por tanto convergente a $0$), pero no es estrictamente creciente. El lema produce una subsucesion creciente escogiendo terminos que superen siempre al anterior: como no hay indices pico despues de $N = 0$, cada termino puede superarse: $a_1 = 1$, luego busco $n_2 > 1$ con $a_{n_2} > 1$: tomo $n_2 = 2$, $a_2 = 2$; luego $n_3 = 3$, $a_3 = 3$; luego $n_4 = 4$, $a_4 = 4$; ahora busco $n_5 > 4$ con $a_{n_5} > 4$: no existe porque el maximo es $4$. La construccion se detiene, lo que indica que en algun paso la subsucesion deja de poder ser estrictamente creciente y debe cambiar de regimen. En la practica, la subsucesion creciente tiene longitud finita en este caso porque el maximo del rango es alcanzado y no superado.

El ejemplo muestra que el lema de la subsucesion monotona funciona formalmente aunque el resultado concreto sea una sucesion eventualmente constante (lo cual es monotona en sentido amplio).
