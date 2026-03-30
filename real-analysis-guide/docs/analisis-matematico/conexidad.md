---
title: Conexidad en espacios metricos
description: Definicion de conexidad, conexidad por caminos, teorema del valor intermedio y componentes conexas.
---

# Conexidad en espacios metricos

## Motivacion e intuicion

La intuicion mas elemental de "un solo pedazo" se formaliza mediante la **conexidad**: un espacio es conexo si no puede partirse en dos abiertos disjuntos no vacios. Es la propiedad topologica que garantiza que funciones continuas no "saltan" valores intermedios.

En $\mathbb{R}$, los intervalos son los unicos subconjuntos conexos. En espacios generales, la nocion es mas rica: existen conjuntos conexos que no son "de una pieza" en el sentido intuitivo (el seno del topólogo es el contraejemplo clasico).

::: tip Idea central
Conexo = no se puede partir en dos abiertos disjuntos no vacios. Conexo por caminos = dos puntos cualquiera pueden unirse con un camino continuo.
:::

## Definiciones formales

### Conexidad

Un espacio metrico $(X, d)$ es **conexo** si no existen abiertos $U, V \subseteq X$ no vacios, disjuntos, tales que $X = U \cup V$.

Equivalentemente: $X$ es conexo si los unicos subconjuntos de $X$ que son simultaneamente abiertos y cerrados son $\emptyset$ y $X$.

Un subconjunto $A \subseteq X$ es **conexo** si $(A, d|_{A \times A})$ es conexo como espacio metrico.

### Separacion

Una **separacion** de $X$ es un par $(U, V)$ de abiertos no vacios, disjuntos, tales que $X = U \cup V$.

$X$ es conexo si y solo si no admite separacion.

### Conexidad por caminos

$X$ es **conexo por caminos** si para todo par de puntos $x, y \in X$ existe un camino continuo $\gamma\colon [0, 1] \to X$ con $\gamma(0) = x$ y $\gamma(1) = y$.

Un **camino** es una funcion continua $\gamma\colon [a, b] \to X$. Decimos que el camino une $\gamma(a)$ con $\gamma(b)$.

### Componentes conexas

La **componente conexa** de $x \in X$ es el mayor subconjunto conexo de $X$ que contiene a $x$:

$$
C(x) = \bigcup \{A \subseteq X : x \in A,\ A \text{ es conexo}\}.
$$

Las componentes conexas forman una particion de $X$.

## Interpretacion en lenguaje natural

- **Conexo:** No hay forma de "separar" el espacio en dos partes usando abiertos. Si intentas partirlo, al menos una parte debe tocarse con la otra.

- **Conexo por caminos:** Puedes caminar de cualquier punto a cualquier otro sin levantar el pie del suelo (por un camino continuo).

- **Componente conexa:** La "isla" a la que pertenece un punto: el mayor pedazo conexo que lo contiene.

## Teoremas fundamentales

### Proposicion 1 — Caracterizacion por cerrados

$X$ es conexo si y solo si los unicos cerrados que son tambien abiertos son $\emptyset$ y $X$.

**Demostracion.**

Si $A$ es abierto y cerrado en $X$, entonces $A$ y $X \setminus A$ son abiertos disjuntos. Si $X$ es conexo, uno de ellos debe ser vacio.

Reciproco: si los unicos clopen son $\emptyset$ y $X$, entonces no existe separacion $(U, V)$ seria una separacion con $U$ abierto y cerrado.

$\blacksquare$

### Proposicion 2 — Intervalos en $\mathbb{R}$

Un subconjunto $I \subseteq \mathbb{R}$ es conexo si y solo si $I$ es un intervalo (posiblemente degenerado).

**Demostracion.**

**$\Leftarrow$:** Supongamos que $I$ es intervalo y que $I = U \cup V$ con $U, V$ abiertos disjuntos no vacios. Tomamos $x \in U$, $y \in V$ con $x < y$. Como $I$ es intervalo, $[x, y] \subseteq I$. Definimos:

$$
s = \sup\{t \in [x, y] : t \in U\}.
$$

Si $s \in U$, como $U$ es abierto, existe $\varepsilon > 0$ con $(s - \varepsilon, s + \varepsilon) \subseteq U$, contradiciendo que $s$ es supremo. Si $s \in V$, como $V$ es abierto, existe $\varepsilon > 0$ con $(s - \varepsilon, s + \varepsilon) \subseteq V$, contradiciendo que existen elementos de $U$ arbitrariamente cerca de $s$.

**$\Rightarrow$:** Si $I$ no es intervalo, existen $x < z < y$ con $x, y \in I$ pero $z \notin I$. Entonces $I = (I \cap (-\infty, z)) \cup (I \cap (z, \infty))$ es separacion.

$\blacksquare$

### Teorema 3 — Imagen continua de conexo es conexa

Si $f\colon X \to Y$ es continua y $X$ es conexo, entonces $f(X)$ es conexo.

**Demostracion.**

Si $f(X) = U \cup V$ con $U, V$ abiertos disjuntos no vacios en $f(X)$, entonces $X = f^{-1}(U) \cup f^{-1}(V)$ es separacion abierta de $X$ (por continuidad de $f$), contradiccion.

$\blacksquare$

### Corolario 4 — Teorema del Valor Intermedio

Si $f\colon [a, b] \to \mathbb{R}$ es continua y $f(a) < c < f(b)$ (o $f(b) < c < f(a)$), entonces existe $x \in (a, b)$ tal que $f(x) = c$.

**Demostracion.**

$[a, b]$ es intervalo, luego conexo. Por el teorema 3, $f([a, b])$ es conexo en $\mathbb{R}$, luego es intervalo. Como $f(a), f(b) \in f([a, b])$ y $c$ esta entre ellos, $c \in f([a, b])$.

$\blacksquare$

### Proposicion 5 — Conexo por caminos implica conexo

Si $X$ es conexo por caminos, entonces $X$ es conexo.

**Demostracion.**

Supongamos $X = U \cup V$ separacion. Tomamos $x \in U$, $y \in V$. Existe camino $\gamma\colon [0, 1] \to X$ con $\gamma(0) = x$, $\gamma(1) = y$. Entonces $[0, 1] = \gamma^{-1}(U) \cup \gamma^{-1}(V)$ es separacion de $[0, 1]$, contradiccion pues $[0, 1]$ es conexo.

$\blacksquare$

::: warning Advertencia
El reciproco es FALSO. Existen espacios conexos que NO son conexos por caminos. El **seno del topologo** es el contraejemplo clasico.
:::

### Ejemplo — El seno del topologo

Definimos:

$$
T = \{(x, \sin(1/x)) : x \in (0, 1]\} \cup \{(0, y) : y \in [-1, 1]\}.
$$

$T$ es conexo pero NO es conexo por caminos. La "cola" $\{(x, \sin(1/x)) : x > 0\}$ se acerca al segmento vertical en $x = 0$ oscilando infinitamente, pero no existe camino continuo desde un punto del segmento vertical a un punto de la cola.

**Demostracion de que $T$ es conexo:** El conjunto $\{(x, \sin(1/x)) : x \in (0, 1]\}$ es imagen de $(0, 1]$, que es conexo. Su clausura incluye el segmento vertical. La union de un conexo con su clausura es conexa.

**Demostracion de que NO es conexo por caminos:** Supongamos que existe camino $\gamma(t) = (x(t), y(t))$ de $(0, 0)$ a $(1/\pi, 0)$. Por continuidad, $x(t)$ debe tomar todos los valores entre $0$ y $1/\pi$. Pero $y(t) = \sin(1/x(t))$ oscila infinitamente, lo que contradice la continuidad en el punto donde $x(t) = 0$.

### Proposicion 6 — Union de conexos con punto comun

Si $\{A_i\}_{i \in I}$ es familia de subconjuntos conexos de $X$ y $\bigcap_{i \in I} A_i \neq \emptyset$, entonces $\bigcup_{i \in I} A_i$ es conexo.

**Demostracion.**

Sea $x_0 \in \bigcap A_i$. Si $\bigcup A_i = U \cup V$ es separacion, sin perdida de generalidad $x_0 \in U$. Cada $A_i$ es conexo y contiene a $x_0 \in U$, asi $A_i \subseteq U$ para todo $i$. Entonces $\bigcup A_i \subseteq U$, contradiccion.

$\blacksquare$

### Proposicion 7 — Producto de conexos

Si $X$ e $Y$ son conexos, entonces $X \times Y$ es conexo (con la métrica producto).

**Demostracion.**

Para $x_0 \in X$, $f\colon Y \to X \times Y$ dada por $f(y) = (x_0, y)$ es continua e inyectiva. Como $Y$ es conexo, $\{x_0\} \times Y$ es conexo.

Similarmente, para $y_0 \in Y$, $X \times \{y_0\}$ es conexo.

La union de todos estos "segmentos horizontales y verticales" que pasan por $(x_0, y_0)$ es conexa por 具有 punto comun $(x_0, y_0)$, y esta union es todo $X \times Y$.

$\blacksquare$

## Componentes conexas

### Proposicion 8

Las componentes conexas de $X$ son cerradas en $X$.

**Demostracion.**

Si $C(x)$ es componente conexa de $x$, su clausura $\overline{C(x)}$ es conexa (clausura de conexo es conexa). Como $C(x)$ es maximal, $\overline{C(x)} \subseteq C(x)$, luego $C(x) = \overline{C(x)}$.

$\blacksquare$

### Proposicion 9

Dos componentes conexas distintas son disjuntas.

**Demostracion.**

Si $C(x)$ y $C(y)$ tienen interseccion no vacia, su union es conexa (por punto comun), contradiciendo maximalidad.

$\blacksquare$

## Conexidad en espacios metricos especificos

### $\mathbb{R}^n$ es conexo por caminos

Para $x, y \in \mathbb{R}^n$, el segmento de recta $\gamma(t) = (1-t)x + ty$, $t \in [0, 1]$, es camino continuo.

### Esferas $S^n$ son conexas por caminos ($n \geq 1$)

Para $x, y \in S^n$ con $x \neq -y$, el "arco de gran circulo":

$$
\gamma(t) = \frac{(1-t)x + ty}{||(1-t)x + ty||}
$$

une $x$ con $y$. Si $x = -y$, usamos un tercer punto $z$ y concatenamos caminos.

### El espacio $\mathbb{Q}$ no es conexo

Para dos racionales $x < y$, existe irracional $r$ con $x < r < y$. Entonces $\mathbb{Q} = ((-\infty, r) \cap \mathbb{Q}) \cup ((r, \infty) \cap \mathbb{Q})$ es separacion.

## Errores comunes

1. **Conexo por caminos $\Rightarrow$ conexo:** Verdadero. Pero el reciproco es FALSO (seno del topologo).

2. **Confundir "conexo" con "un solo punto":** Un intervalo es conexo y tiene infinitos puntos.

3. **Suponer que la union de conexos es conexa:** Solo si tienen interseccion no vacia.

4. **Olvidar que componentes conexas son cerradas:** No necesariamente abiertas.

5. **Aplicar intuicion de $\mathbb{R}$ a espacios generales:** En $\mathbb{R}$, intervalos son los unicos conexos. Mas alla de $\mathbb{R}$, hay muchos mas.

## Resumen operativo

| Propiedad | Implica | Reciproco |
|---|---|---|
| Conexo por caminos | Conexo | Falso (seno del topologo) |
| Conexo | Union de componentes conexas | - |
| Intervalo en $\mathbb{R}$ | Conexo | Verdadero (caracterizacion) |

**Teoremas clave:**
- Imagen continua de conexo = conexo.
- TVI: funcion continua en intervalo toma todos los valores intermedios.
- Union de conexos con punto comun = conexo.

## Ejercicios

### Ejercicio 1

Demuestre que un espacio con un solo punto es conexo.

### Ejercicio 2

Demuestre que la union de una cadena de subconjuntos conexos es conexa: si $A_1 \subseteq A_2 \subseteq \cdots$ con cada $A_n$ conexo, entonces $\bigcup_n A_n$ es conexo.

### Ejercicio 3

Demuestre que $[0, 1] \cup [2, 3]$ no es conexo en $\mathbb{R}$.

### Ejercicio 4

Sea $A$ conexo y $A \subseteq B \subseteq \overline{A}$. Demuestre que $B$ es conexo.

### Ejercicio 5

Demuestre que un espacio metrico discreto con mas de un punto no es conexo.

### Ejercicio 6

En $\mathbb{R}^2$, demuestre que la circunferencia $S^1 = \{(x, y) : x^2 + y^2 = 1\}$ es conexa por caminos.

### Ejercicio 7

Sea $f\colon X \to \mathbb{R}$ continua con $X$ conexo. Demuestre que $f(X)$ es un intervalo.

### Ejercicio 8

Demuestre que si $X$ es conexo y $f\colon X \to X$ es continua, entonces existe $x \in X$ con $f(x) = x$ o proporcione un contraejemplo.

### Ejercicio 9

Sea $A \subseteq \mathbb{R}^2$ tal que para todo par de puntos $x, y \in A$ existe poligonal contenida en $A$ que une $x$ con $y$. Demuestre que $A$ es conexo por caminos.

### Ejercicio 10

Describa las componentes conexas de $\mathbb{Q}$ con la metrica usual.

### Ejercicio 11

Demuestre que la clausura de un subconjunto conexo es conexa.

### Ejercicio 12

Sea $A$ conexo y $x \in A$. Demuestre que para todo $y \in A$, existe conjunto conexo $C \subseteq A$ con $x, y \in C$.

### Ejercicio 13

En $\mathbb{R}^n$, demuestre que todo abierto conexo por caminos es conexo.

### Ejercicio 14

Sea $A \subseteq \mathbb{R}$. Defina $C = \{(x, y) \in \mathbb{R}^2 : x \in A\}$. Determine para que conjuntos $A$, el conjunto $C$ es conexo.

### Ejercicio 15

Demuestre que un espacio metrico es conexo si y solo si toda funcion continua $f\colon X \to \{0, 1\}$ es constante.

## Soluciones

### Solucion 1

Si $X = \{x\}$, los unicos subconjuntos son $\emptyset$ y $X$, que son los unicos abiertos y cerrados. No existe separacion.

### Solucion 2

Sea $U, V$ separacion de $\bigcup_n A_n$. Existe $x \in \bigcup_n A_n$, digamos $x \in A_k$. Como $A_k$ es conexo y $A_k = (A_k \cap U) \cup (A_k \cap V)$, uno de estos es vacio.

Si $A_k \subseteq U$, entonces como $A_n \supseteq A_k$ para $n \geq k$, todos esos $A_n \subseteq U$. Inductivamente, todos los $A_j$ con $j < k$ tambien estan en $U$ (pues comparten puntos con $A_k$).

### Solucion 3

$\mathbb{R} = (-\infty, 1.5) \cup (1.5, \infty)$ separa $\mathbb{R}$, y al restringir a nuestro conjunto obtenemos separacion.

### Solucion 4

Si $B$ admite separacion $U, V$, tomamos $x \in A$. Sin perdida de generalidad $x \in U$. Como $A$ es conexo y $A = (A \cap U) \cup (A \cap V)$, tenemos $A \subseteq U$. Pero $\overline{A} \subseteq \overline{U} = U$ (pues $U$ es cerrado en $B$), asi $B \subseteq U$, contradiccion.

### Solucion 5

Si $X$ discreto tiene al menos dos puntos $x \neq y$, entonces $X = \{x\} \cup (X \setminus \{x\})$ es separacion (ambos son abiertos en discreto).

### Solucion 6

Dados $x, y \in S^1$, si $y \neq -x$, el arco de circunferencia parametrizado por:

$$
\gamma(t) = (\cos(t\theta + (1-t)\phi), \sin(t\theta + (1-t)\phi))
$$

donde $(\cos\theta, \sin\theta) = x$ y $(\cos\phi, \sin\phi) = y$, es un camino en $S^1$.

Si $y = -x$, tomamos un tercer punto $z \in S^1$ y concatenamos dos arcos.

### Solucion 7

$X$ conexo, $f$ continua $\Rightarrow f(X)$ conexo en $\mathbb{R}$ $\Rightarrow f(X)$ es intervalo.

### Solucion 8

Contraejemplo: $X = [0, 1] \cup [2, 3]$, $f(x) = x - 1$ si $x \in [1, 2]$, $f(x) = x$ si $x \in [0, 1] \cup [2, 3]$. Esta mal definido...

Contraejemplo correcto: $X = \{0, 1\}$ con metrica discreta, $f(x) = 1 - x$. No tiene punto fijo.

Si $X$ es conexo: por el teorema de valor intermedio aplicado a $f(x) - x$, si existe $a, b$ con $f(a) < a$ y $f(b) > b$, entonces existe $c$ con $f(c) = c$.

Si $f(x) > x$ para todo $x$ o $f(x) < x$ para todo $x$, no hay punto fijo. Ejemplo: $X = \mathbb{R}$, $f(x) = x + 1$. No tiene punto fijo.

Contraejemplo: $(0, 1)$, $f(x) = x/2 + 1/4$. No tiene punto fijo en $(0, 1)$.

### Solucion 9

Sean $x, y \in A$. Existe poligonal $P$ de $x$ a $y$ contenida en $A$. Una poligonal es union finita de segmentos, cada segmento es imagen continua de $[0, 1]$. La concatenacion de caminos continuos es camino continuo.

### Solucion 10

Las componentes conexas de $\mathbb{Q}$ son los singleton: para cada $q \in \mathbb{Q}$, $\{q\}$ es componente conexa.

En efecto, si $A \subseteq \mathbb{Q}$ tiene al menos dos puntos $q_1 < q_2$, existe irracional $r$ con $q_1 < r < q_2$, y $A = (A \cap (-\infty, r)) \cup (A \cap (r, \infty))$ es separacion.

### Solucion 11

Si $A \subseteq U \cup V$ es separacion de $\overline{A}$, tomamos $x \in A$. Sin perdida $x \in U$. Como $U$ es abierto en $\overline{A}$, existe $\varepsilon > 0$ con $B(x, \varepsilon) \cap \overline{A} \subseteq U$. Como $x \in A$, $B(x, \varepsilon) \cap A \neq \emptyset$, y esto da puntos de $A$ en $U$ arbitrariamente cerca de $x$, contradiciendo que $A$ es conexo si $A \cap V \neq \emptyset$.

Alternativamente: $\overline{A} = A \cup \partial A$. Si $U, V$ separan $\overline{A}$ y $A \subseteq U$, entonces $\partial A \subseteq \overline{U} = U$ (en la subspace topology), asi $\overline{A} \subseteq U$.

### Solucion 12

$A$ conexo implica que para todo par de puntos existe un subconjunto conexo que los contiene (eliasimo $A$ mismo si $x, y \in A$).

Mas precisamente: la componente conexa de $x$ en $A$ contiene a todos los puntos que pueden conectarse a $x$ por caminos dentro de subconjuntos conexos de $A$.

### Solucion 13

Un abierto $U$ en $\mathbb{R}^n$ es conexo por caminos si y solo si es conexo. La direccion $\Leftarrow$ no es trivial: si $U$ es abierto conexo, dados $x, y \in U$, el conjunto de puntos que pueden conectarse a $x$ por un camino en $U$ es abierto (por ser $U$ abierto) y cerrado en $U$, luego es todo $U$.

### Solucion 14

$C$ es conexo si y solo si $A$ es intervalo. Si $A$ no es intervalo, existe separacion $A = A_1 \cup A_2$, y $C = C_1 \cup C_2$ es separacion de $C$.

### Solucion 15

**$\Rightarrow$:** Si $X$ es conexo, el unico subconjunto abierto y cerrado de $\{0, 1\}$ que es imagen de funcion continua es $\{0\}$, $\{1\}$, $\emptyset$, o $\{0, 1\}$. Pero $\{0, 1\}$ no es conexo, asi $f$ debe ser constante.

Alternativamente: si $f$ toma ambos valores, $f^{-1}(\{0\})$ y $f^{-1}(\{1\})$ son abiertos disjuntos no vacios que cubren $X$, contradiccion.

**$\Leftarrow$:** Si $X$ no es conexo con separacion $U, V$, definimos $f(x) = 0$ si $x \in U$, $f(x) = 1$ si $x \in V$. Esta $f$ es continua y no constante.

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
5. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
6. Hocking, J.G. y Young, G.S. (1961). *Topology*. Dover.