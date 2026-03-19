---
title: Compacidad
description: Compacidad en la recta real, teorema de Heine-Borel, compacidad secuencial, equivalencias y consecuencias. Tema teorico con ejemplos guiados.
---

# Compacidad

## 1. Motivacion e intuicion

La compacidad es una de las nociones mas importantes del analisis. En $\mathbb{R}$, la pregunta es simple: cuales subconjuntos se comportan "como un intervalo cerrado y acotado"? La respuesta es que los compactos son exactamente los conjuntos cerrados y acotados.

La importancia de la compacidad reside en que los conjuntos compactos son los que permiten pasar de resultados locales a resultados globales. Si una propiedad se cumple "cerca de cada punto" de un compacto, se puede garantizar que se cumple de manera uniforme en todo el conjunto. Esta idea esta detras de resultados centrales como el teorema de Weierstrass (toda funcion continua en un compacto alcanza su maximo) y el teorema de Heine (continuidad en compacto implica continuidad uniforme).

Hay dos formas equivalentes de definir la compacidad en $\mathbb{R}$: por cubiertas abiertas (toda cubierta abierta tiene una subcubierta finita) y secuencialmente (toda sucesion tiene una subsucesion convergente con limite en el conjunto). Ambas son equivalentes en $\mathbb{R}$ y se conectan con el teorema de Bolzano-Weierstrass.

## 2. Prerrequisitos

**Conjuntos abiertos y cerrados.** Definiciones, propiedades de uniones e intersecciones.

**Sucesiones acotadas y convergencia.** Toda sucesion acotada en $\mathbb{R}$ tiene una subsucesion convergente (Bolzano-Weierstrass).

**Conjuntos cerrados y limites.** Un conjunto es cerrado si y solo si contiene el limite de toda sucesion convergente de sus elementos.

**Conjuntos acotados.** $A \subseteq \mathbb{R}$ es acotado si existe $M > 0$ con $|x| \leq M$ para todo $x \in A$.

## 3. Definiciones formales

**Definicion 3.1 (cubierta abierta).** Una **cubierta abierta** de un conjunto $K \subseteq \mathbb{R}$ es una familia $\{U_\alpha\}_{\alpha \in I}$ de conjuntos abiertos tal que $K \subseteq \bigcup_{\alpha \in I} U_\alpha$.

**Definicion 3.2 (subcubierta finita).** Una **subcubierta finita** de $\{U_\alpha\}$ es una subfamilia finita $\{U_{\alpha_1}, \ldots, U_{\alpha_n}\}$ tal que $K \subseteq U_{\alpha_1} \cup \cdots \cup U_{\alpha_n}$.

**Definicion 3.3 (conjunto compacto).** Un conjunto $K \subseteq \mathbb{R}$ es **compacto** si toda cubierta abierta de $K$ admite una subcubierta finita.

**Definicion 3.4 (compacidad secuencial).** Un conjunto $K \subseteq \mathbb{R}$ es **secuencialmente compacto** si toda sucesion $(x_n) \subseteq K$ tiene una subsucesion que converge a un punto de $K$.

## 4. Interpretacion en lenguaje natural

**Compacidad por cubiertas.** Imagina que quieres cubrir el conjunto $K$ con parches (conjuntos abiertos). La compacidad dice que no importa cuantos parches uses ni cuantos traigas: siempre puedes elegir un numero finito de ellos que ya cubran todo $K$.

Si $K$ no es compacto, existe alguna cubierta abierta tan "tacana" que necesitas infinitos parches sin poder reducirlos a finitos.

**Compacidad secuencial.** Si tomas cualquier sucesion de puntos dentro de $K$, siempre puedes extraer una subsucesion que converge, y el limite queda dentro de $K$. Los puntos no pueden escapar hacia afuera ni dispersarse al infinito.

**Cerrado y acotado.** En $\mathbb{R}$, estas dos propiedades juntas capturan exactamente la compacidad: el acotamiento impide que las sucesiones escapen al infinito (Bolzano-Weierstrass garantiza una subsucesion convergente), y el ser cerrado garantiza que el limite caiga dentro del conjunto.

## 5. Ejemplos basicos

**Ejemplo 5.1 (intervalo cerrado y acotado).** $K = [a, b]$ es compacto. Es cerrado y acotado, como se verifica en el teorema de Heine-Borel.

**Ejemplo 5.2 (intervalo abierto no es compacto).** $(0, 1)$ no es compacto. La cubierta $\{(1/n, 1) : n \geq 2\}$ cubre $(0, 1)$ pero no tiene subcubierta finita: cualquier subfamilia finita $\{(1/n_1, 1), \ldots, (1/n_k, 1)\}$ no cubre los puntos cercanos a $0$ menores que $1/\max(n_i)$.

**Ejemplo 5.3 (conjunto no acotado no es compacto).** $\mathbb{R}$ no es compacto. La cubierta $\{(-n, n) : n \in \mathbb{N}\}$ no tiene subcubierta finita.

**Ejemplo 5.4 (conjunto finito es compacto).** Todo conjunto finito $\{x_1, \ldots, x_k\}$ es compacto: dada cualquier cubierta abierta, cada $x_i$ esta en algun abierto $U_i$, y $\{U_1, \ldots, U_k\}$ es subcubierta finita.

**Ejemplo 5.5 (singleton).** $\{p\}$ es compacto (cerrado y acotado, o directamente: toda cubierta contiene un abierto que contiene a $p$, y ese solo abierto ya cubre).

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 ($[0, 1]$ con la cubierta que no reduce).** Sea $\{U_\alpha\}$ una cubierta abierta arbitraria de $[0, 1]$. La compacidad de $[0, 1]$ garantiza que existe una subcubierta finita. No dice cual es ni cuantos abiertos necesita; solo dice que existe.

**Ejemplo 6.2 ($\mathbb{N}$ no es compacto).** $\mathbb{N}$ es cerrado (su complemento es union de intervalos abiertos) pero no acotado, luego no es compacto. La sucesion $(n)_{n\geq 1}$ no tiene subsucesion convergente.

**Ejemplo 6.3 ($\{1/n : n \in \mathbb{N}\}$ no es compacto).** El conjunto es acotado pero no cerrado ($0$ es punto de acumulacion y no esta en el conjunto). La sucesion $(1/n)$ converge a $0 \notin A$, asi que $A$ no es secuencialmente compacto.

**Ejemplo 6.4 ($\{0\} \cup \{1/n : n \in \mathbb{N}\}$ es compacto).** Ahora el conjunto es cerrado (contiene su unico punto de acumulacion $0$) y acotado (contenido en $[0, 1]$), luego es compacto.

**Ejemplo 6.5 (subconjunto cerrado de un compacto es compacto).** Si $K$ es compacto y $F \subseteq K$ es cerrado (en $\mathbb{R}$), entonces $F$ es cerrado y acotado (acotado porque $K$ lo es), luego compacto. Esto no requiere Heine-Borel: se puede demostrar directamente con cubiertas.

**Ejemplo 6.6 (union finita de compactos es compacta).** Si $K_1, \ldots, K_n$ son compactos, $K_1 \cup \cdots \cup K_n$ es cerrado (union finita de cerrados) y acotado, luego compacto.

## 7. Teoremas y demostraciones

### Teorema 7.1 (Heine-Borel)

**Enunciado.** *Un subconjunto $K \subseteq \mathbb{R}$ es compacto si y solo si es cerrado y acotado.*

---

**Demostracion.**

**($\Rightarrow$) Compacto implica cerrado y acotado.**

*Acotado:* La familia $\{(-n, n) : n \in \mathbb{N}\}$ es una cubierta abierta de $K$. Por compacidad, existe subcubierta finita: $K \subseteq (-n_1, n_1) \cup \cdots \cup (-n_k, n_k) = (-M, M)$ con $M = \max(n_i)$. Luego $K$ es acotado.

*Cerrado:* Sea $(x_n) \subseteq K$ con $x_n \to x$. Se muestra que $x \in K$. Supongamos $x \notin K$. Para cada $y \in K$, sea $\varepsilon_y = |y - x|/2 > 0$ y $U_y = B(y, \varepsilon_y)$. Los $\{U_y\}_{y\in K}$ forman una cubierta abierta de $K$. Por compacidad, existen $y_1, \ldots, y_m$ con $K \subseteq U_{y_1} \cup \cdots \cup U_{y_m}$. Sea $\delta = \min(\varepsilon_{y_1}, \ldots, \varepsilon_{y_m}) > 0$. Para $n$ grande, $x_n \in B(x, \delta)$, y $B(x, \delta) \cap U_{y_i}$ es vacio o muy pequeno. Mas precisamente: $B(x, \varepsilon_{y_i}) \cap B(y_i, \varepsilon_{y_i}) = \emptyset$ (porque $|x - y_i| = 2\varepsilon_{y_i}$). Sea $\delta' = \min_i \varepsilon_{y_i}$; entonces $B(x, \delta') \cap K = \emptyset$, lo que contradice $x_n \to x$ con $x_n \in K$.

**($\Leftarrow$) Cerrado y acotado implica compacto.**

Sea $K$ cerrado y acotado, y sea $\{U_\alpha\}$ una cubierta abierta de $K$. Se demuestra que tiene subcubierta finita.

Como $K$ es acotado, $K \subseteq [a, b]$ para algun intervalo. Basta probar que $[a, b]$ es compacto (luego $K$, como cerrado dentro de un compacto, tambien lo es).

**Compacidad de $[a, b]$ por biseccion.** Supongamos por contradiccion que $\{U_\alpha\}$ es una cubierta abierta de $[a, b]$ sin subcubierta finita. Se biseca $[a, b]$ en $[a, m]$ y $[m, b]$ con $m = (a+b)/2$. Al menos una de las mitades no admite subcubierta finita (si ambas la admitieran, su union seria subcubierta finita de $[a,b]$). Se elige la mitad sin subcubierta finita y se llama $I_1$.

Se repite: se obtiene una sucesion de intervalos anidados $[a,b] \supseteq I_1 \supseteq I_2 \supseteq \cdots$ con $|I_n| = (b-a)/2^n \to 0$, y ninguno admite subcubierta finita.

Por el teorema de los intervalos anidados, existe un unico $p \in \bigcap I_n$. Como $p \in [a,b]$, existe $U_\beta$ con $p \in U_\beta$. Como $U_\beta$ es abierto, existe $\varepsilon > 0$ con $B(p, \varepsilon) \subseteq U_\beta$. Para $n$ grande, $|I_n| < \varepsilon$, y como $p \in I_n$, se tiene $I_n \subseteq B(p, \varepsilon) \subseteq U_\beta$. Pero entonces $\{U_\beta\}$ es una subcubierta finita (de un solo elemento) de $I_n$, lo que contradice que $I_n$ no admite subcubierta finita. $\blacksquare$

---

### Teorema 7.2 (equivalencia con compacidad secuencial)

**Enunciado.** *En $\mathbb{R}$, un conjunto $K$ es compacto si y solo si es secuencialmente compacto.*

**Demostracion.**

**($\Rightarrow$)** Sea $K$ compacto (cerrado y acotado) y $(x_n) \subseteq K$. Como $K$ es acotado, $(x_n)$ es acotada. Por Bolzano-Weierstrass, existe una subsucesion $x_{n_k} \to x$. Como $K$ es cerrado, $x \in K$. Luego $K$ es secuencialmente compacto.

**($\Leftarrow$)** Sea $K$ secuencialmente compacto. Se muestra que es cerrado y acotado.

*Acotado:* Si $K$ no fuera acotado, existiria $(x_n) \subseteq K$ con $|x_n| \to \infty$. Ninguna subsucesion podria converger (toda subsucesion seria no acotada), contradiciendo la compacidad secuencial.

*Cerrado:* Sea $(x_n) \subseteq K$ con $x_n \to x$. Por compacidad secuencial, existe $x_{n_k} \to y \in K$. Pero $x_{n_k} \to x$ tambien (subsucesion de una sucesion convergente). Por unicidad del limite, $x = y \in K$. $\blacksquare$

---

### Proposicion 7.3 (subconjunto cerrado de compacto es compacto)

**Enunciado.** *Si $K$ es compacto y $F \subseteq K$ es cerrado (en $\mathbb{R}$), entonces $F$ es compacto.*

**Demostracion.** Sea $\{U_\alpha\}$ cubierta abierta de $F$. Entonces $\{U_\alpha\} \cup \{\mathbb{R} \setminus F\}$ es cubierta abierta de $K$ (ya que $F$ es cerrado, $\mathbb{R}\setminus F$ es abierto). Por compacidad de $K$, existe subcubierta finita: $K \subseteq U_{\alpha_1} \cup \cdots \cup U_{\alpha_m} \cup (\mathbb{R} \setminus F)$. Entonces $F \subseteq U_{\alpha_1} \cup \cdots \cup U_{\alpha_m}$. $\blacksquare$

---

### Proposicion 7.4 (imagen continua de compacto es compacta)

**Enunciado.** *Si $f: K \to \mathbb{R}$ es continua y $K$ es compacto, entonces $f(K)$ es compacto.*

**Demostracion (secuencial).** Sea $(y_n) \subseteq f(K)$. Existen $x_n \in K$ con $f(x_n) = y_n$. Por compacidad secuencial de $K$, existe $x_{n_k} \to x \in K$. Por continuidad, $y_{n_k} = f(x_{n_k}) \to f(x) \in f(K)$. $\blacksquare$

---

### Corolario 7.5 (teorema del valor extremo de Weierstrass)

**Enunciado.** *Si $f: K \to \mathbb{R}$ es continua y $K$ es compacto no vacio, entonces $f$ alcanza su maximo y su minimo en $K$.*

**Demostracion.** Por la proposicion 7.4, $f(K)$ es compacto, luego cerrado y acotado. Como es acotado, $\sup f(K)$ y $\inf f(K)$ existen. Como $f(K)$ es cerrado, estos extremos pertenecen a $f(K)$. $\blacksquare$

---

### Proposicion 7.6 (interseccion de compactos anidados)

**Enunciado.** *Si $K_1 \supseteq K_2 \supseteq K_3 \supseteq \cdots$ es una sucesion decreciente de compactos no vacios, entonces $\bigcap_{n=1}^{\infty} K_n \neq \emptyset$.*

**Demostracion.** Para cada $n$, elijo $x_n \in K_n$. Todos los $x_n$ estan en $K_1$ (compacto), asi que existe $x_{n_k} \to x \in K_1$. Para cada $m$, los terminos $x_{n_k}$ con $n_k \geq m$ pertenecen a $K_m$ (que es cerrado), asi que $x \in K_m$. Como esto vale para todo $m$, $x \in \bigcap K_n$. $\blacksquare$

## 8. Errores comunes

**Error 8.1 (confundir cerrado con compacto).** $[0, +\infty)$ es cerrado pero no compacto (no es acotado). El cierre solo no basta.

**Error 8.2 (confundir acotado con compacto).** $(0, 1)$ es acotado pero no compacto (no es cerrado). La acotacion sola no basta.

**Error 8.3 (creer que compacidad es solo una definicion tecnica).** La compacidad tiene consecuencias practicas inmediatas: existencia de maximos y minimos, convergencia de subsucesiones, paso de local a global. No es una abstraccion vacia.

**Error 8.4 (aplicar Heine-Borel fuera de $\mathbb{R}^n$).** En espacios metricos generales, cerrado y acotado no implica compacto. Por ejemplo, la bola cerrada unitaria en $\ell^2$ es cerrada y acotada pero no compacta (la sucesion de vectores canonicos no tiene subsucesion convergente en norma). Heine-Borel es especifico de $\mathbb{R}^n$.

**Error 8.5 (creer que toda cubierta necesita reduccion).** Una cubierta finita de un compacto ya es su propia subcubierta finita. La compacidad dice que siempre se puede reducir a finita, no que toda cubierta sea infinita.

## 9. Resumen conceptual

En $\mathbb{R}$, las siguientes condiciones son equivalentes para $K \subseteq \mathbb{R}$:

1. $K$ es compacto (toda cubierta abierta tiene subcubierta finita).
2. $K$ es secuencialmente compacto (toda sucesion tiene subsucesion convergente en $K$).
3. $K$ es cerrado y acotado (Heine-Borel).

**Consecuencias principales:**
- Toda funcion continua en un compacto alcanza maximo y minimo.
- Subconjunto cerrado de compacto es compacto.
- Imagen continua de compacto es compacta.
- Interseccion decreciente de compactos no vacios es no vacia.

**La compacidad falla cuando:**
- El conjunto no es cerrado: las sucesiones pueden converger fuera del conjunto.
- El conjunto no es acotado: las sucesiones pueden escapar al infinito.

## 10. Ejemplos guiados finales

### Ejemplo guiado 10.1

Demostrar directamente (sin Heine-Borel) que $(0, 1)$ no es compacto exhibiendo una cubierta sin subcubierta finita.

**Cubierta.** Sea $U_n = (1/n, 1)$ para $n \geq 2$. Entonces $\bigcup_{n=2}^{\infty} U_n = (0, 1)$: todo $x \in (0, 1)$ satisface $x > 1/n$ para $n$ suficientemente grande.

**Sin subcubierta finita.** Dada una subfamilia finita $\{U_{n_1}, \ldots, U_{n_k}\}$ con $N = \max(n_i)$, se tiene $U_{n_1} \cup \cdots \cup U_{n_k} = (1/N, 1)$, que no contiene los puntos de $(0, 1/N]$. Luego no cubre $(0, 1)$.

---

### Ejemplo guiado 10.2

Demostrar que $K = \{0\} \cup \{1/n : n \in \mathbb{N}\}$ es compacto usando compacidad secuencial.

**Paso 1.** $K$ es acotado ($K \subseteq [0, 1]$) y cerrado (su unico punto de acumulacion $0$ pertenece a $K$).

**Paso 2.** Sea $(x_k) \subseteq K$. Si $x_k = 0$ para infinitos $k$, la subsucesion constante $0$ converge a $0 \in K$. Si no, hay infinitos $x_k = 1/n_k$ con $n_k \in \mathbb{N}$. Si la sucesion de los $n_k$ es acotada, algun valor $1/m$ se repite infinitamente y la subsucesion constante converge a $1/m \in K$. Si los $n_k$ son no acotados, existe una subsucesion con $n_k \to \infty$, y $1/n_k \to 0 \in K$.

En todos los casos, hay subsucesion convergente con limite en $K$. $\blacksquare$

---

### Ejemplo guiado 10.3

Usar compacidad para demostrar que toda funcion continua $f: [a, b] \to \mathbb{R}$ esta acotada.

**Paso 1.** $[a, b]$ es compacto.

**Paso 2.** $f([a, b])$ es compacto por la proposicion 7.4 (imagen continua de compacto).

**Paso 3.** $f([a, b])$ es acotado (todo compacto es acotado por Heine-Borel).

**Paso 4.** Luego $f$ esta acotada en $[a, b]$: existe $M$ con $|f(x)| \leq M$ para todo $x \in [a, b]$.

---

### Ejemplo guiado 10.4

Demostrar que $\displaystyle\bigcap_{n=1}^{\infty}\left[0, \frac{1}{n}\right] = \{0\}$ usando la proposicion 7.6.

**Paso 1.** Cada $K_n = [0, 1/n]$ es compacto (cerrado y acotado).

**Paso 2.** La sucesion es decreciente: $K_1 \supseteq K_2 \supseteq \cdots$.

**Paso 3.** Por la proposicion 7.6, $\bigcap K_n \neq \emptyset$.

**Paso 4.** Sea $x \in \bigcap K_n$. Entonces $0 \leq x \leq 1/n$ para todo $n$, luego $x = 0$.

**Paso 5.** Claramente $0 \in K_n$ para todo $n$, asi que $\bigcap K_n = \{0\}$. $\blacksquare$
