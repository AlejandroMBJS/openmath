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

1. Demuestra que $\mathbb{Q}^n$ es denso en $\mathbb{R}^n$.
2. Prueba que un espacio discreto es separable si y solo si es numerable.
3. Demuestra que $\ell^2$ es separable mediante sucesiones de soporte finito racional.
4. Completa la prueba de no separabilidad de $\ell^\infty$ usando el conjunto $\{0,1\}^{\mathbb{N}}$.
5. Prueba que un subespacio metrico de un separable es separable.
