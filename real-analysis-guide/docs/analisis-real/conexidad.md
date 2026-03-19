---
title: Conexidad
description: Conjuntos conexos en la recta real, teorema del valor intermedio, componentes conexas e intervalos como unicos subconjuntos conexos de R. Tema teorico con ejemplos guiados.
---

# Conexidad

## 1. Motivacion e intuicion

La conexidad captura la idea de que un conjunto esta "de una pieza": no se puede partir en dos pedazos que esten genuinamente separados. En la recta real, la intuicion es clara: un intervalo es conexo porque no tiene huecos, mientras que la union de dos intervalos disjuntos no lo es.

La importancia de la conexidad se manifiesta en el **teorema del valor intermedio**: si una funcion continua toma dos valores, toma todos los valores intermedios. Esto es una consecuencia directa de que la imagen continua de un conexo es conexa, y de que los conexos de $\mathbb{R}$ son exactamente los intervalos.

En $\mathbb{R}$, la conexidad es relativamente simple: los unicos subconjuntos conexos son los intervalos (incluyendo semirrectas, la recta entera, puntos aislados y el vacio). Pero el concepto es crucial como base para la generalizacion a espacios metricos y topologicos.

## 2. Prerrequisitos

**Conjuntos abiertos y cerrados.** Definiciones y propiedades basicas en $\mathbb{R}$.

**Propiedad del supremo.** Uso del supremo para construir puntos en demostraciones de existencia.

**Continuidad de funciones.** La preimagen de un abierto bajo una funcion continua es abierta (se usara en consecuencias).

## 3. Definiciones formales

**Definicion 3.1 (separacion).** Una **separacion** de un conjunto $A \subseteq \mathbb{R}$ es un par de conjuntos abiertos (en $\mathbb{R}$) $U, V$ tales que:
1. $A \subseteq U \cup V$,
2. $A \cap U \neq \emptyset$ y $A \cap V \neq \emptyset$,
3. $A \cap U \cap V = \emptyset$.

**Definicion 3.2 (conjunto conexo).** Un conjunto $A \subseteq \mathbb{R}$ es **conexo** si no admite ninguna separacion.

Equivalentemente, $A$ es conexo si los unicos subconjuntos de $A$ que son simultaneamente abiertos y cerrados relativos a $A$ son $\emptyset$ y $A$ mismo.

**Definicion 3.3 (conjunto disconexo).** $A$ es **disconexo** si admite una separacion.

**Definicion 3.4 (componente conexa).** La **componente conexa** de un punto $x \in A$ es el mayor subconjunto conexo de $A$ que contiene a $x$.

**Definicion 3.5 (intervalo).** Un subconjunto $I \subseteq \mathbb{R}$ es un **intervalo** si para todo $a, b \in I$ con $a < b$ y todo $c$ con $a < c < b$ se tiene $c \in I$.

## 4. Interpretacion en lenguaje natural

**Conexo** significa que el conjunto no se puede dividir en dos partes no vacias que esten separadas por abiertos. Si intentas cortarlo, siempre hay puntos que se resisten a quedar en un solo lado.

**Disconexo** significa que hay una grieta genuina: dos pedazos separados sin puntos de contacto.

En $\mathbb{R}$, la conexidad equivale a ser un intervalo: cualquier conjunto que contenga dos puntos tambien contiene todo lo que hay entre ellos. Los huecos destruyen la conexidad.

El teorema del valor intermedio es la version funcional de esta idea: si una funcion continua "salta" de un valor a otro, debe pasar por todos los valores intermedios, porque la imagen de un conexo es conexa.

## 5. Ejemplos basicos

**Ejemplo 5.1 (intervalos son conexos).** Todo intervalo $I$ (abierto, cerrado, semiabierto, acotado o no) es conexo. La demostracion usa la propiedad del supremo.

**Ejemplo 5.2 (union de intervalos disjuntos es disconexa).** $A = [0, 1] \cup [2, 3]$. Tomo $U = (-1, 3/2)$ y $V = (3/2, 4)$. Se verifica: $A \subseteq U \cup V$, $A \cap U = [0,1] \neq \emptyset$, $A \cap V = [2,3] \neq \emptyset$, $A \cap U \cap V = \emptyset$.

**Ejemplo 5.3 ($\mathbb{Q}$ es disconexo).** Tomo $U = (-\infty, \sqrt{2})$ y $V = (\sqrt{2}, +\infty)$. Como $\sqrt{2} \notin \mathbb{Q}$, se tiene $\mathbb{Q} \subseteq U \cup V$, $\mathbb{Q} \cap U \neq \emptyset$, $\mathbb{Q} \cap V \neq \emptyset$, y $\mathbb{Q} \cap U \cap V = \emptyset$.

**Ejemplo 5.4 ($\{p\}$ es conexo).** Un punto aislado no se puede separar: cualquier separacion requiere dos partes no vacias, pero el conjunto solo tiene un elemento.

**Ejemplo 5.5 ($\emptyset$ es conexo por convencion).** Vacuamente, no existe separacion.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (los irracionales son disconexos).** $\mathbb{R} \setminus \mathbb{Q}$ se separa con $U = (-\infty, 0)$ y $V = (0, +\infty)$ (ya que $0 \notin \mathbb{R} \setminus \mathbb{Q}$, los irracionales quedan separados). De hecho, $\mathbb{R} \setminus \mathbb{Q}$ se puede separar por cualquier racional.

**Ejemplo 6.2 ($\{1/n : n \in \mathbb{N}\}$ es disconexo).** Tomo $U = (-\infty, 3/4)$ y $V = (3/4, +\infty)$. Entonces $1 \in V$ y todos los $1/n$ con $n \geq 2$ estan en $U$. La separacion funciona.

**Ejemplo 6.3 (union de conexos con punto comun es conexa).** Si $A$ y $B$ son conexos y $A \cap B \neq \emptyset$, entonces $A \cup B$ es conexo. La interseccion no vacia impide la separacion.

**Ejemplo 6.4 (clausura de un conexo es conexa).** Si $A$ es conexo, $\overline{A}$ es conexo. En particular, la clausura de un intervalo abierto $(a, b)$ es $[a, b]$, que es conexo.

**Ejemplo 6.5 (imagen continua de conexo).** Si $f: [0, 1] \to \mathbb{R}$ es continua, $f([0, 1])$ es un intervalo (conexo). Esto es el teorema del valor intermedio en version conjuntista.

## 7. Teoremas y demostraciones

### Teorema 7.1 (los conexos de $\mathbb{R}$ son exactamente los intervalos)

**Enunciado.** *Un subconjunto $A \subseteq \mathbb{R}$ es conexo si y solo si es un intervalo.*

---

**Demostracion.**

**($\Leftarrow$) Todo intervalo es conexo.**

Sea $I$ un intervalo y supongamos por contradiccion que $I$ admite una separacion $U, V$. Existen $a \in I \cap U$ y $b \in I \cap V$. Sin perdida de generalidad, $a < b$.

Como $I$ es intervalo, $[a, b] \subseteq I$. Defino $c = \sup\{x \in [a, b] : x \in U\}$.

Como $a \in U$ y $U$ es abierto, hay un entorno de $a$ en $U$, asi que $c > a$. Como $b \in V$ y $V$ es abierto, $b \notin U$ y hay un entorno de $b$ fuera de $U$, asi que $c < b$. Luego $c \in (a, b) \subseteq I$.

Se tiene $c \in I \subseteq U \cup V$ con $U \cap V \cap I = \emptyset$. Caso 1: $c \in U$. Como $U$ es abierto, existe $\delta > 0$ con $(c - \delta, c + \delta) \subseteq U$. Pero entonces $c + \delta/2 \in U \cap [a, b]$ contradice que $c$ es el supremo. Caso 2: $c \in V$. Como $V$ es abierto, existe $\delta > 0$ con $(c-\delta, c+\delta) \subseteq V$. Ningun punto de $(c-\delta, c) \cap [a,b]$ esta en $U$ (estarian en $V$ y tendrian que estar en $U$ por estar debajo de $c = \sup$), contradiccion con la definicion de supremo (habria un supremo menor).

En ambos casos hay contradiccion, luego $I$ no admite separacion. $\blacksquare$

**($\Rightarrow$) Todo conexo es un intervalo.**

Sea $A$ conexo y supongamos que $A$ no es un intervalo. Existen $a, b \in A$ con $a < b$ y algun $c \in (a, b)$ con $c \notin A$.

Defino $U = (-\infty, c)$ y $V = (c, +\infty)$. Como $c \notin A$, se tiene $A \subseteq U \cup V$. Ademas $a \in A \cap U$ y $b \in A \cap V$, y $U \cap V = \emptyset$. Esto es una separacion de $A$, contradiciendo que $A$ es conexo. $\blacksquare$

---

### Teorema 7.2 (imagen continua de conexo es conexa)

**Enunciado.** *Si $f: A \to \mathbb{R}$ es continua y $A$ es conexo, entonces $f(A)$ es conexo.*

**Demostracion.** Supongamos que $f(A)$ admite separacion por $U, V$ abiertos. Entonces $f^{-1}(U)$ y $f^{-1}(V)$ son abiertos (preimagen de abierto por funcion continua es abierta en la topologia relativa de $A$; pero trabajando en $\mathbb{R}$, usamos que $f^{-1}(U) \cap A$ y $f^{-1}(V) \cap A$ separan $A$).

Formalmente: $A \subseteq f^{-1}(U) \cup f^{-1}(V)$ (porque $f(A) \subseteq U \cup V$). $A \cap f^{-1}(U) \neq \emptyset$ (porque $f(A) \cap U \neq \emptyset$). $A \cap f^{-1}(V) \neq \emptyset$. $A \cap f^{-1}(U) \cap f^{-1}(V) = \emptyset$ (porque $f(A) \cap U \cap V = \emptyset$).

Esto da una separacion de $A$, contradiciendo que $A$ es conexo. $\blacksquare$

---

### Corolario 7.3 (teorema del valor intermedio)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua y $f(a) \neq f(b)$, entonces para todo $y$ entre $f(a)$ y $f(b)$ existe $c \in (a, b)$ con $f(c) = y$.*

**Demostracion.** $[a, b]$ es un intervalo, luego es conexo. Por el teorema 7.2, $f([a, b])$ es conexo, luego es un intervalo. Como $f(a)$ y $f(b)$ pertenecen a $f([a, b])$ y este es un intervalo, todo valor entre $f(a)$ y $f(b)$ tambien pertenece a $f([a, b])$. $\blacksquare$

---

### Proposicion 7.4 (clausura de conexo es conexa)

**Enunciado.** *Si $A$ es conexo, entonces $\overline{A}$ es conexo.*

**Demostracion.** Supongamos $\overline{A}$ admite separacion por $U, V$. Como $A \subseteq \overline{A} \subseteq U \cup V$ y $A$ es conexo, $A$ esta contenido enteramente en $U$ o en $V$ (de lo contrario, $U, V$ separarian $A$). Supongamos $A \subseteq U$. Entonces $\overline{A} \cap V \neq \emptyset$, asi que existe $x \in \overline{A} \cap V$. Como $x \in \overline{A}$, todo entorno de $x$ contiene puntos de $A \subseteq U$. Pero $x \in V$ y $V$ es abierto, asi que existe $\varepsilon > 0$ con $B(x, \varepsilon) \subseteq V$. Entonces $B(x, \varepsilon)$ contiene puntos de $A$, que estan en $U$. Esto implica $B(x, \varepsilon) \cap U \neq \emptyset$, pero tambien $B(x, \varepsilon) \subseteq V$, asi que hay puntos en $U \cap V$, y esos puntos estan en $A \subseteq \overline{A}$, dando $\overline{A} \cap U \cap V \neq \emptyset$, contradiccion con la separacion. $\blacksquare$

---

### Proposicion 7.5 (componentes conexas)

**Enunciado.** *Para todo $A \subseteq \mathbb{R}$ y $x \in A$, la componente conexa $C_x$ de $x$ en $A$ existe, es el mayor subconjunto conexo de $A$ que contiene a $x$, y es un intervalo.*

**Demostracion.** $C_x$ se define como la union de todos los subconjuntos conexos de $A$ que contienen a $x$. La union de conexos con punto comun es conexa (si se tuviera una separacion de la union, al menos uno de los subconjuntos quedaria separado, contradiccion). $C_x$ es maximal por construccion. Como es conexo en $\mathbb{R}$, es un intervalo. $\blacksquare$

## 8. Errores comunes

**Error 8.1 (confundir conexo con convexo).** En $\mathbb{R}$, los conjuntos conexos y convexos coinciden (ambos son los intervalos). Pero en dimensiones superiores no: un conjunto en forma de herradura puede ser conexo sin ser convexo.

**Error 8.2 (creer que la union de conexos es conexa).** $[0, 1] \cup [2, 3]$ es union de conexos pero no es conexa. Se necesita que los conexos se intersecten o se "encadenen" para que la union sea conexa.

**Error 8.3 (pensar que "sin huecos" es una definicion rigurosa).** La intuicion de que un conexo no tiene huecos es correcta en $\mathbb{R}$, pero la definicion formal es por separaciones, que es la version que se generaliza a espacios topologicos.

**Error 8.4 (confundir la conexidad de $A$ con la de $\overline{A}$).** $A$ conexo implica $\overline{A}$ conexo, pero no al reves. Ejemplo: $A = (0, 1) \cup (1, 2)$ es disconexo pero $\overline{A} = [0, 2]$ es conexo.

**Error 8.5 (aplicar el valor intermedio sin continuidad).** El teorema del valor intermedio requiere que $f$ sea continua. La funcion de Heaviside $H(x) = 0$ si $x < 0$ y $H(x) = 1$ si $x \geq 0$ no satisface la propiedad del valor intermedio en $[-1, 1]$.

## 9. Resumen conceptual

| Concepto | En $\mathbb{R}$ |
|----------|-----------------|
| Conjunto conexo | Exactamente los intervalos |
| Separacion | Par de abiertos disjuntos que cubren el conjunto |
| Componente conexa | Mayor intervalo contenido que contiene al punto |
| Imagen continua de conexo | Conexa (luego intervalo) |
| Valor intermedio | Consecuencia directa de conexidad |
| Clausura de conexo | Conexa |

**Ideas centrales:**
- La conexidad en $\mathbb{R}$ es simple: los conexos son los intervalos.
- El teorema del valor intermedio es una consecuencia de la conexidad, no un resultado independiente.
- La conexidad se generaliza a espacios metricos donde es mas rica y sutil.

## 10. Ejemplos guiados finales

### Ejemplo guiado 10.1

Demostrar que todo polinomio de grado impar tiene al menos una raiz real.

**Paso 1.** Sea $p(x) = a_n x^n + \cdots + a_0$ con $n$ impar y $a_n \neq 0$.

**Paso 2.** $\lim_{x\to+\infty} p(x)$ y $\lim_{x\to-\infty} p(x)$ tienen signos opuestos (porque el termino dominante $a_n x^n$ con $n$ impar cambia de signo).

**Paso 3.** Existen $a < 0 < b$ con $p(a)$ y $p(b)$ de signos opuestos (digamos $p(a) < 0 < p(b)$, o al reves).

**Paso 4.** $p$ es continua en $[a, b]$, $p(a) < 0 < p(b)$. Por el teorema del valor intermedio, existe $c \in (a, b)$ con $p(c) = 0$.

---

### Ejemplo guiado 10.2

Demostrar que si $f: [0, 1] \to [0, 1]$ es continua, tiene un punto fijo ($f(c) = c$).

**Paso 1.** Defino $g(x) = f(x) - x$. $g$ es continua en $[0, 1]$.

**Paso 2.** $g(0) = f(0) - 0 = f(0) \geq 0$ (porque $f(0) \in [0, 1]$).

**Paso 3.** $g(1) = f(1) - 1 \leq 0$ (porque $f(1) \in [0, 1]$).

**Paso 4.** Si $g(0) = 0$, entonces $c = 0$ es punto fijo. Si $g(1) = 0$, $c = 1$. Si $g(0) > 0 > g(1)$, por el TVI existe $c \in (0, 1)$ con $g(c) = 0$, es decir, $f(c) = c$. $\blacksquare$

---

### Ejemplo guiado 10.3

Determinar las componentes conexas de $A = (-\infty, 0) \cup \{1\} \cup (2, 5]$.

**Paso 1.** $(-\infty, 0)$ es un intervalo, luego conexo. Es maximal: no se puede extender a un intervalo mas grande dentro de $A$ porque $0 \notin A$ y $(0, 1) \cap A = \emptyset$.

**Paso 2.** $\{1\}$ es conexo. No se puede extender porque $(0, 1) \cap A = \emptyset$ y $(1, 2) \cap A = \emptyset$.

**Paso 3.** $(2, 5]$ es un intervalo, luego conexo. No se puede extender porque $(1, 2] \cap A = \emptyset$ y $2 \notin A$.

**Paso 4.** Las componentes conexas son $(-\infty, 0)$, $\{1\}$ y $(2, 5]$.

---

### Ejemplo guiado 10.4

Demostrar que $\mathbb{Q}$ es totalmente disconexo: sus unicas componentes conexas son los puntos individuales.

**Paso 1.** Sea $C$ una componente conexa de $\mathbb{Q}$ con $q \in C$.

**Paso 2.** $C$ es conexo en $\mathbb{R}$, luego es un intervalo (por el teorema 7.1).

**Paso 3.** Si $C$ contiene dos puntos distintos $q_1 < q_2$, entonces $[q_1, q_2] \subseteq C$ (por ser intervalo). Pero $[q_1, q_2]$ contiene irracionales, y $C \subseteq \mathbb{Q}$. Contradiccion.

**Paso 4.** Luego $C = \{q\}$ para cada $q \in \mathbb{Q}$. $\blacksquare$
