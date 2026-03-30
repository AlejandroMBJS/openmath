---
title: Espacios separables
description: Densidad numerable, equivalencia con segunda numerabilidad y consecuencias estructurales en espacios metricos.
---

# Espacios separables

## Motivacion e intuicion

La separabilidad expresa que un espacio, aunque pueda ser muy grande, puede ser aproximado topologicamente por un conjunto numerable. Esta propiedad es una de las razones por las que muchos espacios usados en analisis pueden estudiarse con herramientas discretas sin dejar de capturar su estructura continua.

En espacios metricos, la separabilidad se conecta con bases numerables, con Lindelof y con argumentos de diagonalizacion. Por eso es una de las hipotesis mas frecuentes en analisis funcional, probabilidad y teoria de la medida.

## Prerrequisitos

Conviene manejar:

- densidad y clausura;
- topologia de espacios metricos;
- bases numerables;
- compacidad metrica y total acotacion.

## Definiciones formales

### Conjunto denso numerable

Sea $(X,d)$ un espacio metrico. Un subconjunto $D \subseteq X$ es **denso** si

$$
\overline{D}=X.
$$

Si ademas $D$ es numerable, se dice que $D$ es un **denso numerable**.

### Espacio separable

$X$ es **separable** si admite un subconjunto denso numerable.

### Segunda numerabilidad

$X$ es **de segunda numerabilidad** si posee una base numerable para su topologia.

## Interpretacion en lenguaje natural

La separabilidad no significa que el espacio sea numerable. Significa que existe un subconjunto numerable cuyos puntos alcanzan arbitrariamente cerca a todos los puntos del espacio.

Por ejemplo:

- $\mathbb{R}$ es no numerable, pero separable;
- $\ell^\infty$ es no separable;
- un compacto metrico siempre es separable.

## Ejemplos basicos

### Ejemplo 1: $\mathbb{R}^n$

El subconjunto

$$
\mathbb{Q}^n
$$

es numerable y denso en $\mathbb{R}^n$. Luego $\mathbb{R}^n$ es separable.

### Ejemplo 2: espacios de funciones clasicos

El espacio

$$
C([0,1])
$$

con la norma del supremo es separable. Un subconjunto denso numerable lo forman los polinomios con coeficientes racionales.

### Ejemplo 3: compactos metricos

Todo espacio metrico compacto es separable.

### Ejemplo 4: subespacios de un separable

Todo subespacio metrico de un espacio metrico separable es separable.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: $\ell^\infty$ no es separable

Considera el conjunto

$$
E=\{x=(x_n)_{n \ge 1} : x_n \in \{0,1\}\} \subseteq \ell^\infty.
$$

Es no numerable y satisface que para cualesquiera $x \ne y$ en $E$,

$$
\|x-y\|_\infty = 1.
$$

Si $\ell^\infty$ fuera separable, no podria contener un subconjunto no numerable cuyas bolas abiertas de radio $1/3$ alrededor de sus puntos fueran disjuntas y no vacias con centros todos diferentes respecto de un denso numerable. Esta idea se formaliza mostrando que cada bola de radio $1/3$ contiene a lo sumo un elemento de $E$, lo que impide una aproximacion numerable.

### Contraejemplo 2: no todo espacio discreto es separable

Un espacio discreto es separable si y solo si es numerable. En un discreto no numerable, todo conjunto denso debe coincidir con el espacio entero.

### Ejemplo fino 3: separabilidad no equivale a compacidad

$\mathbb{R}$ es separable pero no compacto.

## Teoremas y demostraciones centrales

### Teorema 1: separable implica segunda numerabilidad en metricos

Si $(X,d)$ es separable, entonces es de segunda numerabilidad.

#### Demostracion

Sea

$$
D=\{x_k\}_{k \in \mathbb{N}}
$$

un subconjunto denso numerable. Consideremos la familia

$$
\mathcal{B}=\{B(x_k,q): k \in \mathbb{N},\ q \in \mathbb{Q},\ q>0\}.
$$

Es numerable por ser producto numerable de conjuntos numerables.

Veamos que es base. Sea $U$ un abierto y sea $x \in U$. Existe $r>0$ tal que

$$
B(x,r)\subseteq U.
$$

Elige un racional $q$ con

$$
0<q<\frac r2.
$$

Como $D$ es denso,

$$
B(x,q)\cap D \ne \varnothing.
$$

Escoge $x_k \in D \cap B(x,q)$. Entonces

$$
x \in B(x_k,q)
$$

y, si $y \in B(x_k,q)$, por desigualdad triangular

$$
d(y,x)\le d(y,x_k)+d(x_k,x)<q+q<r.
$$

Luego

$$
B(x_k,q)\subseteq B(x,r)\subseteq U.
$$

Esto prueba que $\mathcal{B}$ es una base numerable.

### Teorema 2: segunda numerabilidad implica separabilidad en metricos

Si $(X,d)$ es de segunda numerabilidad, entonces es separable.

#### Demostracion

Sea

$$
\mathcal{B}=\{B_n\}_{n \in \mathbb{N}}
$$

una base numerable. Para cada $n$ tal que $B_n \ne \varnothing$, elige un punto

$$
x_n \in B_n.
$$

Sea

$$
D=\{x_n : B_n \ne \varnothing\}.
$$

Entonces $D$ es numerable. Veamos que es denso. Sea $U$ un abierto no vacio. Como $\mathcal{B}$ es base, existe $B_n$ con

$$
\varnothing \ne B_n \subseteq U.
$$

Por construccion,

$$
x_n \in D \cap U,
$$

luego todo abierto no vacio corta a $D$, lo que equivale a

$$
\overline{D}=X.
$$

### Corolario 3: equivalencia en espacios metricos

Para un espacio metrico $(X,d)$,

$$
\text{separable} \iff \text{segunda numerabilidad}.
$$

### Teorema 4: todo compacto metrico es separable

Si $(X,d)$ es compacto, entonces es separable.

#### Demostracion

Para cada $n \in \mathbb{N}$, la compacidad implica total acotacion, de modo que existe un conjunto finito

$$
F_n \subseteq X
$$

tal que

$$
X \subseteq \bigcup_{x \in F_n} B\left(x,\frac1n\right).
$$

El conjunto

$$
D=\bigcup_{n=1}^\infty F_n
$$

es numerable por ser union numerable de conjuntos finitos.

Veamos que es denso. Sea $U$ un abierto no vacio y toma $x \in U$. Existe $r>0$ con

$$
B(x,r)\subseteq U.
$$

Escoge $n$ tal que

$$
\frac1n<r.
$$

Como $F_n$ cubre con bolas de radio $1/n$, existe $y \in F_n$ con

$$
d(x,y)<\frac1n<r,
$$

luego $y \in U$. Por tanto $D$ es denso.

### Proposicion 5: los subespacios metricos de separables son separables

Si $Y \subseteq X$ y $X$ es metrico separable, entonces $Y$ es separable con la metrica inducida.

#### Demostracion

Como $X$ es separable, por el corolario anterior es de segunda numerabilidad. Todo subespacio de un segundo numerable vuelve a ser segundo numerable. Como $Y$ es metrico, nuevamente por el corolario, $Y$ es separable.

#### Observacion

Tambien puede construirse un denso numerable de $Y$ eligiendo un punto de $Y$ en cada elemento no vacio de una base numerable relativa.

### Proposicion 6: Lindelof metrico

Todo espacio metrico separable es Lindelof.

#### Comentario

Esto sigue porque separabilidad implica segunda numerabilidad, y segunda numerabilidad implica Lindelof.

## Ejemplos estructurales

### Ejemplo 1: redes racionales en espacios euclideos

La separabilidad de $\mathbb{R}^n$ no depende de la norma escogida. Toda norma en dimension finita induce la misma topologia, y $\mathbb{Q}^n$ sigue siendo denso.

### Ejemplo 2: espacios de sucesiones

El espacio

$$
\ell^p, \qquad 1 \le p < \infty,
$$

es separable: las sucesiones de soporte finito con entradas racionales forman un subconjunto numerable denso.

### Ejemplo 3: importancia probabilistica

En muchos argumentos de medibilidad y compacidad secuencial, la separabilidad permite reducir supremums o infimums sobre familias continuas a familias numerables.

## Errores comunes

1. Confundir separabilidad con numerabilidad del espacio total.
2. Creer que un conjunto denso debe contener todos los puntos.
3. Usar sin prueba la equivalencia entre separabilidad y segunda numerabilidad fuera del contexto metrico.
4. Pensar que todo Banach es separable.
5. Olvidar que la no separabilidad de $\ell^\infty$ es un fenomeno genuinamente infinito-dimensional.

## Resumen operativo

- Un espacio metrico es separable si contiene un subconjunto denso numerable.
- En metricos, separabilidad y segunda numerabilidad son equivalentes.
- Todo compacto metrico es separable.
- Todo subespacio metrico de un separable vuelve a ser separable.
- La separabilidad conecta argumentos continuos con estructuras numerables manejables.

## Ejercicios

### Ejercicio 1

Demuestra que $\mathbb{Q}^n$ es denso en $\mathbb{R}^n$.

### Ejercicio 2

Prueba que un espacio discreto es separable si y solo si es numerable.

### Ejercicio 3

Demuestra que $\ell^2$ es separable mediante sucesiones de soporte finito racional.

### Ejercicio 4

Completa la prueba de no separabilidad de $\ell^\infty$ usando el conjunto $\{0,1\}^{\mathbb{N}}$.

### Ejercicio 5

Prueba que un subespacio metrico de un separable es separable.

### Ejercicio 6

Demuestra que todo espacio metrico compacto es separable.

### Ejercicio 7

Pruebe que si $X$ es separable, entonces toda familia de abiertos disjuntos dos a dos es a lo sumo numerable.

### Ejercicio 8

Demuestra que $C([0,1])$ con la norma del supremo es separable.

### Ejercicio 9

Prueba que todo espacio metrico Lindelof es separable.

### Ejercicio 10

Sea $X$ separable metrico. Demuestre que la familia de todos los abiertos de $X$ tiene cardinal a lo sumo $2^{\aleph_0}$.

### Ejercicio 11

Prueba que $\ell^1$ es separable.

### Ejercicio 12

Demuestra que $\mathbb{R}$ con la metrica $d(x,y) = \min\{1, |x-y|\}$ es separable.

### Ejercicio 13

Pruebe que la union numerable de conjuntos separables es separable.

### Ejercicio 14

Sea $X$ separable y $f : X \to Y$ continua y sobreyectiva. Demuestre que $Y$ es separable.

### Ejercicio 15

Demuestra que el producto numerable de espacios separables es separable.

## Soluciones

### Solucion 1

Dado $x \in \mathbb{R}^n$ y $\varepsilon > 0$, para cada coordenada $x_i$ existe $q_i \in \mathbb{Q}$ con $|x_i - q_i| < \varepsilon/\sqrt{n}$. Entonces $q = (q_1, \ldots, q_n) \in \mathbb{Q}^n$ y $\|x - q\|_2 = \sqrt{\sum (x_i - q_i)^2} < \varepsilon$. $\blacksquare$

### Solucion 2

Si $X$ es discreto separable, existe $D$ denso numerable. Como todo punto es abierto, $D$ debe contener a todos los puntos, asi $X \subseteq \overline{D} = D$, luego $X$ es numerable. Recprocamente, si $X$ es numerable, $D = X$ es denso numerable. $\blacksquare$

### Solucion 3

Las sucesiones de soporte finito con coordenadas racionales forman un conjunto numerable $D$. Sea $x \in \ell^2$. Dado $\varepsilon > 0$, existe $N$ tal que $\sum_{k=N+1}^\infty |x_k|^2 < \varepsilon^2/2$. Para cada $k \le N$, elige $q_k \in \mathbb{Q}$ con $|x_k - q_k| < \varepsilon/(2\sqrt{N})$. Define $y \in D$ como $y_k = q_k$ para $k \le N$ e $y_k = 0$ para $k > N$. Entonces $\|x - y\|_2^2 = \sum_{k=1}^N |x_k - q_k|^2 + \sum_{k=N+1}^\infty |x_k|^2 < N \cdot (\varepsilon^2/(4N)) + \varepsilon^2/2 = \varepsilon^2$. $\blacksquare$

### Solucion 4

El conjunto $\{0,1\}^{\mathbb{N}}$ (todas las sucesiones binarias) se embede isometricamente en $\ell^\infty$ como subconjunto de la esfera unitaria. Este conjunto tiene cardinal $2^{\aleph_0}$, y puntos distintosestan a distancia $1$ entre s. Si $\ell^\infty$ fuera separable, existiria un denso numerable $D$. Pero la bola de radio $1/3$ alrededor de cada punto de $\{0,1\}^{\mathbb{N}}$ contiene un unico punto de $D$ (porque las bolas de radio $1/3$ alrededor de puntos distintos son disjuntas). Esto dara una inyeccion de $\{0,1\}^{\mathbb{N}}$ en $D$, contradictio con que $D$ es numerable y $\{0,1\}^{\mathbb{N}}$ no lo es. $\blacksquare$

### Solucion 5

Sea $D$ denso numerable en $X$. Para cada $B(x, 1/n)$ no vacia con $x \in X$ y $n \in \mathbb{N}$, elige $d_{x,n} \in D \cap B(x, 1/n)$. El conjunto $E = \{d_{x,n} : x \in X, n \in \mathbb{N}\}$ es numerable. Dado $y \in Y$ y $\varepsilon > 0$, existe $x \in X$ con $d(x,y) < \varepsilon/2$. Toma $n$ tal que $1/n < \varepsilon/2$. Existe $d_{x,n} \in D \cap B(x, 1/n)$. Luego $d(d_{x,n}, y) \le d(d_{x,n}, x) + d(x,y) < 1/n + \varepsilon/2 < \varepsilon$. $\blacksquare$

### Solucion 6

Para cada $n$, existe $F_n$ finito con $K \subseteq \bigcup_{x \in F_n} B(x, 1/n)$. El conjunto $D = \bigcup_n F_n$ es numerable y denso en $K$ (argumento estandar de total acotacion). $\blacksquare$

### Solucion 7

Sea $\{U_i\}$ familia de abiertos disjuntos. Por separabilidad, existe base numerable $\{B_n\}$. Cada $U_i$ contiene algun $B_{n(i)}$, y si $i \ne j$, entonces $U_i \cap U_j = \varnothing$ implica $B_{n(i)} \ne B_{n(j)}$. Asi la familia $\{U_i\}$ es inyectiva en la base numerable, luego es a lo sumo numerable. $\blacksquare$

### Solucion 8

Los polinomios con coeficientes racionales forman un conjunto numerable $P$. Por el teorema de Stone-Weierstrass, $P$ es denso en $C([0,1])$ con $\|\cdot\|_\infty$. $\blacksquare$

### Solucion 9

Un espacio Lindelof metrico tiene base numerable (por equivalencia). Una base numerable contiene un subconjunto denso numerable, hence el espacio es separable. $\blacksquare$

### Solucion 10

Por segunda numerabilidad (equivalente a separabilidad en metricos), existe base numerable $\mathcal{B}$. Cada abierto $U$ es unin de elementos de $\mathcal{B}$, y hay $2^{\aleph_0}$ subconjuntos de $\mathbb{N}$, asiel cardinal de la familia de abiertos es a lo sumo $2^{\aleph_0}$. $\blacksquare$

### Solucion 11

Igual que $\ell^2$: las sucesiones de soporte finito con coordenadas racionales forman un denso numerable en $\ell^1$. $\blacksquare$

### Solucion 12

La metrica $d(x,y) = \min\{1, |x-y|\}$ induce la misma topologa que la usual en $\mathbb{R}$ (son Lipschitz-equivalentes). Como $\mathbb{R}$ con la usual es separable ($\mathbb{Q}$ es denso), el espacio con la metrica transformada es separable. $\blacksquare$

### Solucion 13

Sean $X_n$ separables con denso numerable $D_n$. Sea $D = \bigcup_n D_n \times \{n\}$, embedido en $\bigcup_n X_n$ como $\bigcup_n \{(d, n) : d \in D_n\}$. En el espacio union disjunta, $D$ es numerable y denso. $\blacksquare$

### Solucion 14

Sea $D$ denso en $X$. Entonces $\overline{f(D)} = f(\overline{D}) = f(X) = Y$ (por continuidad de $f$). Asi $f(D)$ es denso en $Y$. Como $X$ es separable, existe base numerable; su imagen por $f$ (preimagenes de abiertos) es numerable. $\blacksquare$

### Solucion 15

Sea $X_n$ separable con denso numerable $D_n$. El producto $\prod_n X_n$ tiene base de la topologa producto formada por productos de abiertos basicos. El conjunto de productos de elementos de los $D_n$ con soporte finito es numerable y denso en el producto. $\blacksquare$

---

## Referencias y lecturas adicionales

1. Munkres, J.R. (2000). *Topology*. Prentice Hall.
2. Engelking, R. (1989). *General Topology*. Heldermann Verlag.
3. Willard, S. (2004). *General Topology*. Dover.
4. Kelley, J.L. (1955). *General Topology*. Van Nostrand.
5. Bourbaki, N. (1989). *General Topology*, Chapters 1-4. Springer.
6. Oxtoby, J.C. (1980). *Measure and Category*. Springer.
