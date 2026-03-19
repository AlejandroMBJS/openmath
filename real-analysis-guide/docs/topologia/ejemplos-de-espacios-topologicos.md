---
title: Ejemplos de espacios topologicos
description: Topologia usual, discreta, indiscreta, cofinita y ejemplos finitos para construir intuicion comparativa.
---

# Ejemplos de espacios topologicos

## Motivacion e intuicion

Una buena parte de la intuicion topologica se forma comparando ejemplos que obligan a separar fenomenos distintos: separacion, convergencia, cerradura, compacidad y comportamiento secuencial.

La topologia general no se aprende solo a partir de $\mathbb{R}$ con su topologia usual. Tambien hace falta mirar ejemplos donde ciertas propiedades dejan de ser ciertas.

## Prerrequisitos

Conviene manejar la definicion de topologia y la comparacion por finura.

## Ejemplos fundamentales

### La topologia usual en $\mathbb{R}$

Es la topologia generada por los intervalos abiertos

$$
(a,b), \qquad a<b.
$$

Es la topologia de referencia para analisis.

### La topologia discreta

Sobre un conjunto $X$, todo subconjunto es abierto. Es el ejemplo extremo de topologia muy fina.

### La topologia indiscreta

Solo $\varnothing$ y $X$ son abiertos. Es el ejemplo extremo de topologia muy gruesa.

### La topologia cofinita

En un conjunto infinito $X$, son abiertos los conjuntos vacios y los que tienen complemento finito.

### La topologia del punto particular

Fijado $p \in X$, se define

$$
\tau_p = \{\varnothing\} \cup \{U \subseteq X : p \in U\}.
$$

Es una topologia porque toda union de conjuntos que contienen a $p$ vuelve a contener a $p$, y la interseccion finita tambien.

### La topologia cocontable

Si $X$ es no numerable, se llama **cocontable** la topologia cuyos abiertos no vacios son los subconjuntos con complemento numerable.

### La topologia de Sierpinski

Sobre

$$
X=\{0,1\},
$$

la familia

$$
\{\varnothing,\{1\},X\}
$$

define la topologia de Sierpinski. Es el modelo elemental de una topologia no simetrica desde el punto de vista de separacion.

### Un ejemplo finito no trivial

Si

$$
X=\{1,2,3\},
$$

la familia

$$
\tau=\{\varnothing,X,\{1\},\{1,2\}\}
$$

es una topologia.

## Comparaciones instructivas

### Ejemplo 1: discreta frente a indiscreta

En la discreta, cada punto puede aislarse topologicamente porque $\{x\}$ es abierto. En la indiscreta, ningun punto puede distinguirse por abiertos no triviales.

### Ejemplo 2: cofinita frente a usual

En la usual de $\mathbb{R}$, un intervalo pequeno alrededor de un punto excluye a casi todos los demas. En la cofinita, todo abierto no vacio contiene "casi todo" el espacio.

### Ejemplo 3: punto particular

En la topologia del punto particular, todo abierto no vacio contiene al punto distinguido $p$. Esto produce comportamientos muy poco parecidos a los metricos.

### Ejemplo 4: cocontable frente a cofinita

En conjuntos no numerables, la topologia cocontable es mas fina que la cofinita, pero sigue teniendo convergencia y separacion muy alejadas de la intuicion metrica.

## Criterios minimos de separacion

Sin entrar todavia en un bloque sistematico de axiomas de separacion, conviene fijar tres nociones que ya aparecen naturalmente en los ejemplos:

- $T_0$: para dos puntos distintos, alguno puede separarse del otro mediante un abierto.
- $T_1$: todo singleton es cerrado.
- Hausdorff: dos puntos distintos admiten vecindades abiertas disjuntas.

## Proposiciones y teoremas centrales

### Proposicion 1: la topologia cofinita es $T_1$ en conjuntos infinitos

Sea $X$ infinito con topologia cofinita. Entonces para todo $x \in X$, el singleton $\{x\}$ es cerrado.

#### Demostracion

El complemento

$$
X \setminus \{x\}
$$

tiene complemento finito, luego es abierto. Por tanto $\{x\}$ es cerrado.

### Proposicion 2: la topologia cofinita sobre un conjunto infinito no es Hausdorff

Si $X$ es infinito con topologia cofinita, no es posible separar dos puntos distintos mediante abiertos disjuntos.

#### Demostracion

Sean $x \ne y$ en $X$, y sean $U$, $V$ abiertos no vacios. Entonces $X \setminus U$ y $X \setminus V$ son finitos, luego

$$
X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)
$$

es finito. Como $X$ es infinito, $U \cap V$ no puede ser vacio. Luego no existen abiertos no vacios disjuntos.

### Proposicion 3: en la topologia discreta toda funcion saliente es continua

Si $X$ tiene la topologia discreta y $(Y,\sigma)$ es cualquier espacio topologico, entonces toda funcion

$$
f : X \to Y
$$

es continua.

#### Demostracion

Para todo abierto $U \subseteq Y$, la preimagen $f^{-1}(U)$ es un subconjunto cualquiera de $X$, y por ser discreta toda parte de $X$ es abierta.

### Proposicion 4: hacia un espacio indiscreto toda funcion es continua

Si $Y$ tiene la topologia indiscreta, toda funcion

$$
f : X \to Y
$$

es continua.

#### Demostracion

Los unicos abiertos de $Y$ son $\varnothing$ y $Y$. Sus preimagenes son respectivamente $\varnothing$ y $X$, ambos abiertos en cualquier topologia.

### Proposicion 5: la topologia de Sierpinski es $T_0$ pero no $T_1$

En la topologia de Sierpinski sobre $\{0,1\}$:

- el punto $1$ puede separarse de $0$ mediante el abierto $\{1\}$;
- no existe abierto que contenga a $0$ sin contener a $1$.

Por tanto el espacio es $T_0$ pero no $T_1$.

#### Demostracion

La descripcion de los abiertos muestra directamente ambas afirmaciones. El punto $1$ queda distinguido por el abierto $\{1\}$, mientras que $0$ no puede distinguirse de $1$ con ningun abierto.

Ademas,

$$
\{1\}
$$

no es cerrado, porque su complemento $\{0\}$ no es abierto. Por tanto no todos los singletons son cerrados y el espacio no es $T_1$.

### Proposicion 6: convergencia en la topologia cofinita

Sea $X$ infinito con topologia cofinita y sea $(x_n)$ una sucesion en $X$. Entonces $(x_n)$ converge a un punto $x \in X$ si y solo si para todo

$$
y \in X \setminus \{x\}
$$

el valor $y$ aparece solo finitamente muchas veces en la sucesion.

#### Demostracion

Supongamos primero que $x_n \to x$ y sea $y \ne x$. El conjunto

$$
U = X \setminus \{y\}
$$

es un abierto que contiene a $x$. Como la sucesion converge a $x$, existe $N$ tal que

$$
n \ge N \Rightarrow x_n \in U.
$$

Luego $x_n \ne y$ para todo $n \ge N$, es decir, $y$ aparece solo finitamente muchas veces.

Reciprocamente, supongamos que todo $y \ne x$ aparece solo finitamente muchas veces y sea $U$ un abierto que contiene a $x$. Como $U$ es cofinito,

$$
F = X \setminus U
$$

es finito y no contiene a $x$. Cada elemento de $F$ aparece solo finitamente muchas veces en la sucesion, y al ser $F$ finito existe $N$ tal que

$$
n \ge N \Rightarrow x_n \notin F.
$$

Eso equivale a

$$
n \ge N \Rightarrow x_n \in U.
$$

Luego $x_n \to x$.

### Corolario

En la topologia cofinita sobre un conjunto infinito, toda sucesion inyectiva converge a todo punto del espacio.

### Proposicion 7: convergencia en la topologia del punto particular

Sea $X$ con topologia del punto particular de punto distinguido $p$.

1. Una sucesion $(x_n)$ converge a $p$ si y solo si es eventualmente constante igual a $p$.
2. Si $x \ne p$, entonces $(x_n)$ converge a $x$ si y solo si existe $N$ tal que

$$
n \ge N \Rightarrow x_n \in \{p,x\}.
$$

#### Demostracion

La parte 1 se obtiene observando que

$$
\{p\}
$$

es un abierto, luego converger a $p$ obliga a que la sucesion sea finalmente igual a $p$.

Para la parte 2, nota que un abierto que contiene a $x$ debe contener tambien a $p$, asi que

$$
\{p,x\}
$$

es el menor abierto que contiene a $x$.

Si $(x_n)$ converge a $x$, necesariamente termina quedandose en $\{p,x\}$.

Reciprocamente, si eventualmente todos los terminos pertenecen a $\{p,x\}$, entonces para cualquier abierto $U$ que contenga a $x$ se tiene

$$
\{p,x\} \subseteq U,
$$

y por tanto la sucesion termina entrando en $U$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: $T_1$ no implica Hausdorff

La topologia cofinita infinita es el ejemplo clasico: los singletons son cerrados, pero no hay separacion de puntos por abiertos disjuntos.

### Contraejemplo 2: convergencia no unica en la indiscreta

En la topologia indiscreta, una sucesion puede converger a todos los puntos a la vez, porque el unico abierto no vacio que debe eventualmente contenerla es todo el espacio.

### Contraejemplo 3: abiertos muy pequenos no existen siempre

En la topologia del punto particular, no hay abiertos no vacios que excluyan al punto distinguido.

## Errores comunes

1. Pensar que toda topologia razonable se parece a la usual de $\mathbb{R}$.
2. Confundir $T_1$ con Hausdorff.
3. Creer que la continuidad siempre es una condicion restrictiva.
4. Suponer que los ejemplos finitos son pedagogicos pero no matematicamente serios.

## Resumen operativo

- Los ejemplos no metricos muestran que muchas intuiciones de $\mathbb{R}$ no son universales.
- La discreta y la indiscreta son extremos estructurales.
- La cofinita, la cocontable, Sierpinski y la del punto particular sirven para separar propiedades de separacion y convergencia.
- La topologia general se entiende comparando estos modelos.

## Ejercicios

1. Verifica que la topologia del punto particular es una topologia.
2. Decide cuales de los ejemplos anteriores son Hausdorff.
3. En la topologia discreta, describe los cerrados y las sucesiones convergentes.
4. En la topologia indiscreta, determina cuales funciones son abiertas.
5. Construye una topologia finita sobre $\{1,2,3\}$ distinta de la discreta y de la indiscreta.
6. Demuestra que en la topologia cofinita toda sucesion inyectiva converge a todo punto.
