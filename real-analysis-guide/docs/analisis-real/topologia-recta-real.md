---
title: Topologia de la recta real
description: Conjuntos abiertos, cerrados, clausura, interior, frontera, puntos de acumulacion y densidad en la recta real. Tema teorico con ejemplos guiados.
---

# Topologia de la recta real

## 1. Motivacion e intuicion

Hasta ahora se ha estudiado la convergencia de sucesiones y series trabajando directamente con la definicion epsilon. Pero muchos resultados de analisis real dependen no de sucesiones individuales sino de propiedades del espacio donde viven. Estas propiedades son topologicas: describen la forma en que los puntos se relacionan con sus vecindades.

La topologia de la recta real responde preguntas como: que significa que un conjunto sea abierto (que cada punto tenga espacio a su alrededor), cerrado (que contenga todos sus limites), o denso (que se aproxime a todo punto de la recta). Estas nociones son la base para definir continuidad, compacidad y conexidad en los temas siguientes.

La herramienta fundamental es la bola abierta en $\mathbb{R}$, que no es mas que un intervalo abierto centrado en un punto: $B(x, \varepsilon) = (x - \varepsilon, x + \varepsilon)$. Todo lo demas se construye a partir de esta nocion.

## 2. Prerrequisitos

**Valor absoluto y distancia.** $d(x, y) = |x - y|$ define una distancia en $\mathbb{R}$.

**Convergencia de sucesiones.** $(x_n) \to x$ si para todo $\varepsilon > 0$ existe $N$ tal que $|x_n - x| < \varepsilon$ para $n > N$.

**Propiedad del supremo.** Todo subconjunto no vacio de $\mathbb{R}$ acotado superiormente tiene supremo.

**Bolzano-Weierstrass.** Toda sucesion acotada tiene una subsucesion convergente.

## 3. Definiciones formales

**Definicion 3.1 (entorno o bola abierta).** Para $x \in \mathbb{R}$ y $\varepsilon > 0$, el **entorno** de radio $\varepsilon$ centrado en $x$ es

$$B(x, \varepsilon) = \{y \in \mathbb{R} : |y - x| < \varepsilon\} = (x - \varepsilon, x + \varepsilon).$$

**Definicion 3.2 (conjunto abierto).** Un conjunto $U \subseteq \mathbb{R}$ es **abierto** si para todo $x \in U$ existe $\varepsilon > 0$ tal que $B(x, \varepsilon) \subseteq U$.

**Definicion 3.3 (conjunto cerrado).** Un conjunto $F \subseteq \mathbb{R}$ es **cerrado** si su complemento $\mathbb{R} \setminus F$ es abierto.

**Definicion 3.4 (punto interior).** Un punto $x \in A$ es **punto interior** de $A$ si existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq A$.

**Definicion 3.5 (interior de un conjunto).** El **interior** de $A$ es el conjunto de todos sus puntos interiores:

$$\operatorname{int}(A) = A^\circ = \{x \in A : \exists\, \varepsilon > 0,\; B(x,\varepsilon) \subseteq A\}.$$

**Definicion 3.6 (punto de acumulacion de un conjunto).** Un punto $x \in \mathbb{R}$ es **punto de acumulacion** de $A \subseteq \mathbb{R}$ si para todo $\varepsilon > 0$, el entorno $B(x, \varepsilon)$ contiene al menos un punto de $A$ distinto de $x$:

$$(B(x, \varepsilon) \setminus \{x\}) \cap A \neq \emptyset.$$

**Definicion 3.7 (punto aislado).** Un punto $x \in A$ es **aislado** si existe $\varepsilon > 0$ tal que $B(x, \varepsilon) \cap A = \{x\}$.

**Definicion 3.8 (clausura).** La **clausura** de $A$ es

$$\overline{A} = A \cup A',$$

donde $A'$ es el conjunto de puntos de acumulacion de $A$ (llamado el **derivado** de $A$).

Equivalentemente, $x \in \overline{A}$ si y solo si para todo $\varepsilon > 0$, $B(x, \varepsilon) \cap A \neq \emptyset$.

**Definicion 3.9 (frontera).** La **frontera** de $A$ es

$$\partial A = \overline{A} \setminus \operatorname{int}(A) = \overline{A} \cap \overline{\mathbb{R} \setminus A}.$$

Equivalentemente, $x \in \partial A$ si y solo si todo entorno de $x$ contiene puntos de $A$ y puntos de $\mathbb{R} \setminus A$.

**Definicion 3.10 (conjunto denso).** $A$ es **denso** en $\mathbb{R}$ si $\overline{A} = \mathbb{R}$, es decir, todo intervalo abierto no vacio contiene puntos de $A$.

## 4. Interpretacion en lenguaje natural

**Abierto** significa que cada punto del conjunto tiene un margen de maniobra: puedes moverte un poco en cualquier direccion sin salir del conjunto.

**Cerrado** significa que el conjunto contiene todos sus puntos frontera y todos los limites de sucesiones de sus elementos.

**Interior** es la parte "segura" del conjunto, donde hay espacio libre alrededor de cada punto.

**Clausura** es el conjunto junto con todo lo que se le puede acercar arbitrariamente. Si puedes aproximarte tanto como quieras a un punto usando elementos de $A$, ese punto esta en la clausura.

**Frontera** es la linea divisoria: los puntos que estan justo en el borde, donde cada vecindad toca tanto al conjunto como a su complemento.

**Denso** significa que el conjunto permea toda la recta: no hay ningun trozo de $\mathbb{R}$ que este libre de puntos de $A$.

## 5. Ejemplos basicos

**Ejemplo 5.1 (intervalos abiertos son abiertos).** Sea $U = (a, b)$. Para $x \in U$, tomo $\varepsilon = \min(x - a, b - x) > 0$. Entonces $B(x, \varepsilon) \subseteq (a, b)$.

**Ejemplo 5.2 (intervalos cerrados son cerrados).** Sea $F = [a, b]$. Su complemento es $(-\infty, a) \cup (b, +\infty)$, que es union de abiertos y por tanto abierto. Asi, $F$ es cerrado.

**Ejemplo 5.3 ($\mathbb{R}$ y $\emptyset$).** Ambos son simultaneamente abiertos y cerrados. $\mathbb{R}$ es abierto trivialmente (todo entorno cabe). $\emptyset$ es abierto vacuamente (no hay puntos que verificar). Sus complementos son $\emptyset$ y $\mathbb{R}$, ambos abiertos, asi que ambos son tambien cerrados.

**Ejemplo 5.4 (los racionales son densos en $\mathbb{R}$).** Dados $a < b$ reales, existe $q \in \mathbb{Q}$ con $a < q < b$ (propiedad arquimediana). Luego todo intervalo abierto contiene racionales, y $\overline{\mathbb{Q}} = \mathbb{R}$.

**Ejemplo 5.5 (los irracionales son densos en $\mathbb{R}$).** Dados $a < b$, existe $q \in \mathbb{Q}$ con $a - \sqrt{2} < q < b - \sqrt{2}$, luego $q + \sqrt{2}$ es irracional y esta en $(a, b)$. Asi, $\overline{\mathbb{R} \setminus \mathbb{Q}} = \mathbb{R}$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (un conjunto ni abierto ni cerrado).** $A = [0, 1)$. No es abierto porque $0 \in A$ pero ningun entorno de $0$ esta contenido en $A$ (los entornos contienen puntos negativos). No es cerrado porque $1$ es punto de acumulacion de $A$ pero $1 \notin A$. Interior: $(0, 1)$. Clausura: $[0, 1]$. Frontera: $\{0, 1\}$.

**Ejemplo 6.2 (los enteros como conjunto cerrado).** $\mathbb{Z}$ es cerrado: su complemento es $\bigcup_{n \in \mathbb{Z}} (n, n+1)$, que es union de abiertos. Todos los puntos de $\mathbb{Z}$ son aislados: para $n \in \mathbb{Z}$, $B(n, 1/2) \cap \mathbb{Z} = \{n\}$.

**Ejemplo 6.3 ($\mathbb{Q}$ no es abierto ni cerrado).** $\mathbb{Q}$ no es abierto porque ningun entorno de un racional contiene solo racionales (hay irracionales en todo intervalo). $\mathbb{Q}$ no es cerrado porque $\overline{\mathbb{Q}} = \mathbb{R} \neq \mathbb{Q}$. Interior: $\operatorname{int}(\mathbb{Q}) = \emptyset$. Clausura: $\overline{\mathbb{Q}} = \mathbb{R}$. Frontera: $\partial \mathbb{Q} = \mathbb{R}$.

**Ejemplo 6.4 (conjunto de Cantor: cerrado, sin interior, no numerable).** El conjunto de Cantor $\mathcal{C}$ se construye eliminando sucesivamente el tercio medio abierto de cada intervalo, comenzando con $[0, 1]$. Es cerrado (interseccion de cerrados), tiene interior vacio (no contiene ningun intervalo abierto), tiene medida cero, pero es no numerable (tiene la cardinalidad de $\mathbb{R}$). Todos sus puntos son de acumulacion.

**Ejemplo 6.5 (el complemento de un punto es abierto).** $\mathbb{R} \setminus \{p\} = (-\infty, p) \cup (p, +\infty)$ es union de abiertos, luego es abierto. Equivalentemente, $\{p\}$ es cerrado.

**Ejemplo 6.6 (interseccion infinita de abiertos puede no ser abierta).** $\displaystyle\bigcap_{n=1}^{\infty}\left(-\frac{1}{n}, \frac{1}{n}\right) = \{0\}$, que no es abierto. Esto muestra que la propiedad de ser abierto se preserva bajo uniones arbitrarias e intersecciones finitas, pero no bajo intersecciones infinitas.

## 7. Teoremas y demostraciones

### Teorema 7.1 (propiedades de los abiertos)

**Enunciado.** *En $\mathbb{R}$:*
1. *$\emptyset$ y $\mathbb{R}$ son abiertos.*
2. *La union arbitraria de abiertos es abierta.*
3. *La interseccion finita de abiertos es abierta.*

**Demostracion.** (1) es inmediato.

(2) Sea $\{U_\alpha\}_{\alpha \in I}$ una familia de abiertos y $x \in \bigcup U_\alpha$. Entonces $x \in U_\beta$ para algun $\beta$, y como $U_\beta$ es abierto, existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq U_\beta \subseteq \bigcup U_\alpha$.

(3) Sean $U_1, \ldots, U_k$ abiertos y $x \in \bigcap_{i=1}^k U_i$. Para cada $i$, existe $\varepsilon_i > 0$ con $B(x, \varepsilon_i) \subseteq U_i$. Sea $\varepsilon = \min(\varepsilon_1, \ldots, \varepsilon_k) > 0$. Entonces $B(x, \varepsilon) \subseteq U_i$ para todo $i$, luego $B(x, \varepsilon) \subseteq \bigcap U_i$. $\blacksquare$

---

### Teorema 7.2 (propiedades de los cerrados)

**Enunciado.** *En $\mathbb{R}$:*
1. *$\emptyset$ y $\mathbb{R}$ son cerrados.*
2. *La interseccion arbitraria de cerrados es cerrada.*
3. *La union finita de cerrados es cerrada.*

**Demostracion.** Se obtiene del teorema 7.1 por complementacion (leyes de De Morgan). $\blacksquare$

---

### Teorema 7.3 (caracterizacion secuencial de cerrados)

**Enunciado.** *Un conjunto $F \subseteq \mathbb{R}$ es cerrado si y solo si contiene el limite de toda sucesion convergente de elementos de $F$: si $(x_n) \subseteq F$ y $x_n \to x$, entonces $x \in F$.*

**Demostracion.** ($\Rightarrow$) Supongamos $F$ cerrado y $(x_n) \subseteq F$ con $x_n \to x$. Si $x \notin F$, entonces $x \in \mathbb{R} \setminus F$ que es abierto, luego existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq \mathbb{R} \setminus F$. Pero $x_n \to x$ implica que hay $x_n \in B(x, \varepsilon)$ para $n$ grande, y $x_n \in F$, contradiccion.

($\Leftarrow$) Supongamos que $F$ contiene todos los limites de sucesiones en $F$. Se muestra que $\mathbb{R} \setminus F$ es abierto. Si $x \in \mathbb{R} \setminus F$, supongamos por contradiccion que no existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq \mathbb{R} \setminus F$. Entonces para cada $n$, existe $x_n \in B(x, 1/n) \cap F$. La sucesion $(x_n) \subseteq F$ satisface $|x_n - x| < 1/n \to 0$, asi que $x_n \to x$. Por hipotesis, $x \in F$, lo que contradice $x \in \mathbb{R} \setminus F$. $\blacksquare$

---

### Teorema 7.4 (caracterizacion de la clausura)

**Enunciado.** *Las siguientes condiciones son equivalentes para $x \in \mathbb{R}$ y $A \subseteq \mathbb{R}$:*
1. *$x \in \overline{A}$.*
2. *Para todo $\varepsilon > 0$, $B(x, \varepsilon) \cap A \neq \emptyset$.*
3. *Existe una sucesion $(a_n) \subseteq A$ con $a_n \to x$.*

*Ademas, $\overline{A}$ es cerrado, y es el menor cerrado que contiene a $A$.*

**Demostracion.** $(1 \Leftrightarrow 2)$: $x \in \overline{A} = A \cup A'$. Si $x \in A$, entonces $x \in B(x, \varepsilon) \cap A$ para todo $\varepsilon$. Si $x \in A'$, por definicion de punto de acumulacion, $B(x, \varepsilon)$ contiene un punto de $A$ distinto de $x$.

$(2 \Rightarrow 3)$: Para cada $n$, existe $a_n \in B(x, 1/n) \cap A$. Entonces $|a_n - x| < 1/n \to 0$.

$(3 \Rightarrow 2)$: Si $a_n \to x$ con $a_n \in A$, dado $\varepsilon > 0$ existe $n$ con $a_n \in B(x, \varepsilon) \cap A$.

$\overline{A}$ es cerrado: sea $(x_n) \subseteq \overline{A}$ con $x_n \to x$. Para cada $n$, por (2), existe $a_n \in A$ con $|a_n - x_n| < 1/n$. Entonces $|a_n - x| \leq |a_n - x_n| + |x_n - x| < 1/n + |x_n - x| \to 0$. Asi, $a_n \to x$ con $a_n \in A$, luego $x \in \overline{A}$ por (3).

$\overline{A}$ es el menor cerrado: si $F$ es cerrado y $A \subseteq F$, y $x \in \overline{A}$, existe $(a_n) \subseteq A \subseteq F$ con $a_n \to x$. Como $F$ es cerrado, $x \in F$. Luego $\overline{A} \subseteq F$. $\blacksquare$

---

### Teorema 7.5 (el interior es el mayor abierto contenido)

**Enunciado.** *$\operatorname{int}(A)$ es abierto, y es el mayor abierto contenido en $A$.*

**Demostracion.** Sea $x \in \operatorname{int}(A)$. Existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq A$. Para todo $y \in B(x, \varepsilon)$, sea $\delta = \varepsilon - |y - x| > 0$. Entonces $B(y, \delta) \subseteq B(x, \varepsilon) \subseteq A$, asi que $y \in \operatorname{int}(A)$. Esto muestra que $B(x, \varepsilon) \subseteq \operatorname{int}(A)$, de modo que $\operatorname{int}(A)$ es abierto.

Si $U$ es abierto con $U \subseteq A$, todo punto de $U$ tiene un entorno en $U \subseteq A$, luego todo punto de $U$ es interior a $A$. Asi, $U \subseteq \operatorname{int}(A)$. $\blacksquare$

---

### Proposicion 7.6 (relaciones entre interior, clausura y frontera)

**Enunciado.** *Para todo $A \subseteq \mathbb{R}$:*

1. *$\overline{A} = \operatorname{int}(A) \cup \partial A$ (particion de la clausura).*
2. *$\partial A = \overline{A} \setminus \operatorname{int}(A)$.*
3. *$A$ es abierto $\iff$ $A = \operatorname{int}(A)$ $\iff$ $A \cap \partial A = \emptyset$.*
4. *$A$ es cerrado $\iff$ $A = \overline{A}$ $\iff$ $\partial A \subseteq A$.*
5. *$\operatorname{int}(A) = \mathbb{R} \setminus \overline{\mathbb{R} \setminus A}$ y $\overline{A} = \mathbb{R} \setminus \operatorname{int}(\mathbb{R} \setminus A)$.*

**Demostracion (esquema).** Todas las identidades se verifican directamente usando las definiciones y las equivalencias de pertenencia en terminos de entornos. $\blacksquare$

---

### Teorema 7.7 (estructura de los abiertos en $\mathbb{R}$)

**Enunciado.** *Todo conjunto abierto no vacio $U \subseteq \mathbb{R}$ es union numerable de intervalos abiertos disjuntos.*

**Demostracion (esquema).** Para cada $x \in U$, sea $I_x$ el mayor intervalo abierto contenido en $U$ que contiene a $x$ (definido como la union de todos los intervalos abiertos en $U$ que contienen a $x$). Cada $I_x$ es un intervalo abierto. Dos intervalos $I_x$ e $I_y$ son o iguales o disjuntos. La familia de intervalos distintos es una particion de $U$ en intervalos abiertos disjuntos. Cada intervalo contiene un racional (por densidad de $\mathbb{Q}$), y como los intervalos son disjuntos, la familia es a lo sumo numerable. $\blacksquare$

## 8. Errores comunes

**Error 8.1 (creer que "no abierto" es lo mismo que "cerrado").** La mayoria de los subconjuntos de $\mathbb{R}$ no son ni abiertos ni cerrados. Ejemplo: $[0, 1)$.

**Error 8.2 (creer que la interseccion infinita de abiertos es abierta).** $\bigcap_{n=1}^{\infty} (-1/n, 1/n) = \{0\}$, que no es abierto.

**Error 8.3 (confundir punto de acumulacion de un conjunto con punto de acumulacion de una sucesion).** El punto de acumulacion de un conjunto $A$ es un punto cuyo entorno siempre contiene algun otro punto de $A$. El de una sucesion es un punto al que converge alguna subsucesion. Si la sucesion tiene valores repetidos, un valor puede ser punto de acumulacion de la sucesion sin ser punto de acumulacion del conjunto imagen.

**Error 8.4 (creer que la clausura agrega un numero finito de puntos).** La clausura de $\mathbb{Q} \cap [0,1]$ es $[0,1]$, que agrega todos los irracionales del intervalo (un conjunto no numerable).

**Error 8.5 (creer que un conjunto denso debe ser grande).** $\mathbb{Q}$ es denso en $\mathbb{R}$ pero es numerable (y tiene medida cero). La densidad es una propiedad topologica, no de tamano.

**Error 8.6 (confundir frontera de $A$ con $A$ mismo).** La frontera de $(0,1)$ es $\{0, 1\}$, no el intervalo. La frontera de $\mathbb{Q}$ es $\mathbb{R}$, no $\mathbb{Q}$.

## 9. Resumen conceptual

| Concepto | Definicion clave | Ejemplo con $A = (0, 1]$ |
|----------|------------------|--------------------------|
| Interior $\operatorname{int}(A)$ | Mayor abierto en $A$ | $(0, 1)$ |
| Clausura $\overline{A}$ | Menor cerrado que contiene a $A$ | $[0, 1]$ |
| Frontera $\partial A$ | $\overline{A} \setminus \operatorname{int}(A)$ | $\{0, 1\}$ |
| Puntos de acumulacion $A'$ | Limites de sucesiones no constantes en $A$ | $[0, 1]$ |
| Puntos aislados | En $A$ sin otros puntos de $A$ cerca | Ninguno |

**Relaciones clave:**
- $A$ abierto $\iff$ $A = \operatorname{int}(A)$ $\iff$ $\partial A \cap A = \emptyset$.
- $A$ cerrado $\iff$ $A = \overline{A}$ $\iff$ $\partial A \subseteq A$.
- $\overline{A}$ es cerrado, $\operatorname{int}(A)$ es abierto.
- $x \in \overline{A}$ $\iff$ existe sucesion en $A$ que converge a $x$.
- Todo abierto en $\mathbb{R}$ es union numerable de intervalos abiertos disjuntos.

## 10. Ejemplos guiados finales

### Ejemplo guiado 10.1

Determinar interior, clausura y frontera de $A = \{1/n : n \in \mathbb{N}\}$.

**Interior.** Para cualquier $1/n \in A$, todo entorno $B(1/n, \varepsilon)$ contiene puntos que no estan en $A$ (hay irracionales y racionales distintos de $1/n$ en cualquier intervalo). Ningun punto de $A$ es interior. $\operatorname{int}(A) = \emptyset$.

**Clausura.** Los puntos de acumulacion de $A$: sea $x$ un punto de acumulacion. Todo entorno de $x$ contiene infinitos puntos de $A$. Los elementos de $A$ se acumulan solo en $0$ (porque $1/n \to 0$). Para cualquier otro $x \neq 0$, solo hay finitos $1/n$ en un entorno suficientemente pequeno de $x$. Luego $A' = \{0\}$ y $\overline{A} = A \cup \{0\} = \{0\} \cup \{1/n : n \in \mathbb{N}\}$.

**Frontera.** $\partial A = \overline{A} \setminus \operatorname{int}(A) = \overline{A} = \{0\} \cup \{1/n : n \in \mathbb{N}\}$. Todos los puntos del conjunto (y el $0$) son puntos frontera.

$A$ no es ni abierto (interior vacio distinto de $A$) ni cerrado ($0 \notin A$ pero $0 \in \overline{A}$).

---

### Ejemplo guiado 10.2

Demostrar que $A = \{x \in \mathbb{R} : x^2 < 2\}$ es abierto y determinar su clausura.

**Paso 1.** $A = (-\sqrt{2}, \sqrt{2})$: $x^2 < 2 \iff |x| < \sqrt{2}$.

**Paso 2.** $A$ es un intervalo abierto, luego es abierto.

**Paso 3.** $\overline{A} = [-\sqrt{2}, \sqrt{2}]$: la clausura de un intervalo abierto $(a, b)$ es $[a, b]$.

**Paso 4.** $\partial A = \{-\sqrt{2}, \sqrt{2}\}$.

---

### Ejemplo guiado 10.3

Sea $A = \mathbb{Q} \cap (0, 1)$. Determinar $\operatorname{int}(A)$, $\overline{A}$ y $\partial A$.

**Interior.** Para cualquier $q \in A$, todo entorno de $q$ contiene irracionales que no estan en $A$. Luego $\operatorname{int}(A) = \emptyset$.

**Clausura.** Todo real $x \in [0, 1]$ es limite de racionales en $(0, 1)$ (por densidad de $\mathbb{Q}$). Luego $\overline{A} = [0, 1]$.

**Frontera.** $\partial A = \overline{A} \setminus \operatorname{int}(A) = [0, 1]$.

Cada punto de $[0, 1]$ es punto frontera: sus entornos contienen racionales (en $A$) e irracionales (fuera de $A$).

---

### Ejemplo guiado 10.4

Demostrar que la union $\displaystyle U = \bigcup_{n=1}^{\infty}\left(\frac{1}{n+1}, \frac{1}{n}\right)$ es abierta, y que $\overline{U} = \{0\} \cup \bigcup_{n=1}^{\infty}\left[\frac{1}{n+1}, \frac{1}{n}\right]$.

**$U$ es abierta.** Es union de intervalos abiertos, luego es abierta por el teorema 7.1.

**Los puntos de $U$.** $U$ consiste en todos los reales de la forma $x \in (1/(n+1), 1/n)$ para algun $n$. Estos intervalos son disjuntos y todos estan en $(0, 1)$.

**Clausura.** Se agrega cada punto frontera de cada intervalo componente. Los extremos son $1/n$ para $n \geq 1$, que son puntos de acumulacion de $U$ (cada $1/n$ es limite por la izquierda de puntos en $(1/(n+1), 1/n)$ y por la derecha de puntos en $(1/n, 1/(n-1))$ si $n \geq 2$). Ademas, $0$ es punto de acumulacion (porque $1/n \to 0$ y hay puntos de $U$ arbitrariamente cerca de $0$). Luego $\overline{U} = \{0\} \cup \bigcup_{n=1}^{\infty}\left[\frac{1}{n+1}, \frac{1}{n}\right] = [0, 1] \setminus \emptyset$... verificamos: $\overline{U}$ incluye todos los $1/n$ y los intervalos entre ellos, y el $0$. Falta verificar si $1 \in \overline{U}$: $1 = 1/1$ es el extremo derecho de $(1/2, 1)$, luego $1 \in \overline{U}$. Asi, $\overline{U} = (0, 1) \cup \{0\} \cup \{1/n : n \geq 1\}$. Pero $(0,1) \setminus U = \{1/n : n \geq 2\}$ (los puntos extremos interiores). Combinando: $\overline{U} = [0, 1]$.

Verificacion directa: para cualquier $x \in [0, 1]$ y $\varepsilon > 0$, el entorno $(x-\varepsilon, x+\varepsilon)$ contiene puntos de alguno de los intervalos $(1/(n+1), 1/n)$, luego $x \in \overline{U}$. Asi, $\overline{U} = [0, 1]$.
