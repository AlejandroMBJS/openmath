---
title: Continuidad en metricos
description: Definicion epsilon-delta en espacios metricos, caracterizaciones equivalentes, estabilidad y ejemplos estructurales.
---

# Continuidad en metricos

## Motivacion e intuicion

La continuidad en $\mathbb{R}$ suele introducirse con intervalos y diferencias absolutas. En espacios metricos el contenido conceptual es el mismo, pero se vuelve mas claro: una funcion es continua si pequenas perturbaciones en el dominio producen pequenas perturbaciones en el codominio.

La fuerza de este enfoque es que ya no depende de coordenadas, orden o estructura lineal. Se puede hablar de continuidad entre espacios de funciones, espacios de sucesiones, espacios normados o conjuntos abstractos provistos de una metrica.

::: tip Idea central
La continuidad no dice que la funcion sea "suave" ni que tenga formula regular. Dice que la topologia del dominio es respetada por imagen inversa.
:::

## Prerrequisitos

Conviene manejar:

- convergencia de sucesiones en metricos;
- topologia inducida por una metrica;
- abiertos, cerrados y vecindades;
- sucesiones de Cauchy y completitud basica.

## Definiciones formales

Sean $(X,d_X)$ y $(Y,d_Y)$ espacios metricos y sea

$$
f : X \to Y.
$$

### Continuidad en un punto

Se dice que $f$ es **continua en $a \in X$** si

$$
\forall \varepsilon > 0 \ \exists \delta > 0 \ \text{tal que}\ d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon.
$$

### Continuidad global

Se dice que $f$ es **continua en $X$** si es continua en cada punto de $X$.

### Discontinuidad en un punto

$f$ es **discontinua en $a$** si no es continua en $a$, es decir, si existe $\varepsilon_0>0$ tal que para todo $\delta>0$ puede encontrarse $x \in X$ con

$$
d_X(x,a)<\delta
$$

pero

$$
d_Y(f(x),f(a)) \ge \varepsilon_0.
$$

## Interpretacion en lenguaje natural

Fijado un punto $a$, la continuidad en $a$ significa que cualquier precision deseada alrededor de $f(a)$ puede garantizarse imponiendo una precision suficiente alrededor de $a$.

La cuantificacion es importante:

- primero se fija el error admisible en el codominio;
- despues se responde con un umbral en el dominio;
- ese umbral puede depender del punto $a$ y del error $\varepsilon$.

Esta dependencia puntual es precisamente lo que luego distingue continuidad ordinaria de continuidad uniforme.

## Ejemplos basicos

### Ejemplo 1: funciones constantes

Si $f(x)=y_0$ para todo $x \in X$, entonces

$$
d_Y(f(x),f(a))=0
$$

para todo $x,a \in X$. Luego $f$ es continua.

### Ejemplo 2: identidad

La identidad

$$
\operatorname{id}_X : X \to X
$$

es continua, pues basta tomar

$$
\delta=\varepsilon.
$$

### Ejemplo 3: distancia a un punto fijo

Fijado $a \in X$, la funcion

$$
\varphi_a(x)=d_X(x,a)
$$

es continua. De hecho, por la desigualdad triangular inversa,

$$
|\varphi_a(x)-\varphi_a(y)| = |d_X(x,a)-d_X(y,a)| \le d_X(x,y).
$$

Asi, es Lipschitz con constante $1$.

### Ejemplo 4: inclusion entre metricas equivalentes

Si dos metricas $d$ y $\rho$ sobre el mismo conjunto inducen la misma topologia, la identidad

$$
\operatorname{id} : (X,d) \to (X,\rho)
$$

es continua y su inversa tambien.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: continuidad depende de la topologia

La identidad

$$
\operatorname{id} : (\mathbb{R},d_{dis}) \to (\mathbb{R},|\cdot|)
$$

es continua, porque todo subconjunto del dominio discreto es abierto.

Pero la identidad en direccion opuesta

$$
\operatorname{id} : (\mathbb{R},|\cdot|) \to (\mathbb{R},d_{dis})
$$

no es continua, ya que los singletons son abiertos en la topologia discreta pero no en la usual.

### Contraejemplo 2: continuidad puntual no implica estructura lineal

La continuidad tiene sentido para cualquier funcion entre metricos, aunque no exista suma ni producto. Por ejemplo, una isometria entre dos espacios metricos abstractos es continua sin necesidad de algebra.

### Contraejemplo 3: controlar sucesiones no es automatico fuera de metricos

En espacios metricos la continuidad puede describirse mediante sucesiones. Esto ya no es cierto en topologias arbitrarias sin hipotesis adicionales. La metrizabilidad es precisamente lo que vuelve tan potente el criterio secuencial.

## Teoremas y demostraciones centrales

### Teorema 1: caracterizacion secuencial

$f$ es continua en $a \in X$ si y solo si para toda sucesion $(x_n)$ en $X$ con

$$
x_n \to a,
$$

se cumple

$$
f(x_n) \to f(a).
$$

#### Demostracion

Supongamos primero que $f$ es continua en $a$ y sea $(x_n)$ una sucesion con $x_n \to a$. Dado $\varepsilon>0$, por continuidad existe $\delta>0$ tal que

$$
d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon.
$$

Como $x_n \to a$, existe $N$ tal que para todo $n \ge N$,

$$
d_X(x_n,a)<\delta.
$$

Entonces

$$
d_Y(f(x_n),f(a))<\varepsilon
$$

para todo $n \ge N$, y por tanto $f(x_n) \to f(a)$.

Reciprocamente, supongamos que la condicion secuencial vale y que $f$ no es continua en $a$. Entonces existe $\varepsilon_0>0$ tal que para todo $n \in \mathbb{N}$ puede elegirse $x_n \in X$ con

$$
d_X(x_n,a)<\frac1n
$$

pero

$$
d_Y(f(x_n),f(a)) \ge \varepsilon_0.
$$

De la primera desigualdad se sigue que $x_n \to a$, y por la hipotesis secuencial deberia cumplirse $f(x_n) \to f(a)$, contradiccion.

### Teorema 2: caracterizacion por abiertos

$f : X \to Y$ es continua en todo $X$ si y solo si para todo abierto $U \subseteq Y$, la preimagen

$$
f^{-1}(U)
$$

es abierta en $X$.

#### Demostracion

Supongamos primero que $f$ es continua. Sea $U \subseteq Y$ abierto y sea $a \in f^{-1}(U)$. Entonces

$$
f(a) \in U.
$$

Como $U$ es abierto en $Y$, existe $\varepsilon>0$ tal que

$$
B_Y(f(a),\varepsilon) \subseteq U.
$$

Por continuidad de $f$ en $a$, existe $\delta>0$ tal que

$$
d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon.
$$

Por tanto

$$
B_X(a,\delta) \subseteq f^{-1}(U),
$$

y eso prueba que $f^{-1}(U)$ es abierto.

Reciprocamente, supongamos que la preimagen de todo abierto es abierta. Fijemos $a \in X$ y $\varepsilon>0$. El conjunto

$$
U=B_Y(f(a),\varepsilon)
$$

es abierto en $Y$, luego

$$
f^{-1}(U)
$$

es abierto en $X$ y contiene a $a$. Existe entonces $\delta>0$ tal que

$$
B_X(a,\delta) \subseteq f^{-1}(U).
$$

Eso equivale a

$$
d_X(x,a)<\delta \Rightarrow d_Y(f(x),f(a))<\varepsilon.
$$

Luego $f$ es continua en $a$.

### Corolario 3: caracterizacion por cerrados

$f$ es continua en todo $X$ si y solo si la preimagen de todo cerrado de $Y$ es cerrada en $X$.

#### Demostracion

Se obtiene por complementar:

$$
f^{-1}(Y \setminus F)=X \setminus f^{-1}(F).
$$

### Proposicion 4: caracterizacion local

$f$ es continua en $a$ si y solo si para toda vecindad $V$ de $f(a)$ existe una vecindad $U$ de $a$ tal que

$$
f(U) \subseteq V.
$$

#### Demostracion

Es la traduccion vecindad-vecindad del criterio por abiertos.

### Proposicion 5: estabilidad por composicion

Si

$$
f : X \to Y, \qquad g : Y \to Z
$$

son continuas, entonces

$$
g \circ f : X \to Z
$$

es continua.

#### Demostracion

Sea $W \subseteq Z$ abierto. Entonces

$$
(g \circ f)^{-1}(W)=f^{-1}(g^{-1}(W)).
$$

Como $g$ es continua, $g^{-1}(W)$ es abierto en $Y$, y como $f$ es continua, la preimagen por $f$ de ese abierto es abierta en $X$.

### Proposicion 6: aplicaciones Lipschitz

Si existe $L \ge 0$ tal que

$$
d_Y(f(x),f(y)) \le L\, d_X(x,y)
$$

para todos $x,y \in X$, entonces $f$ es continua. Si $L=0$, la funcion es constante; si $L>0$, basta tomar

$$
\delta = \frac{\varepsilon}{L}.
$$

#### Comentario

La continuidad es una condicion topologica. La condicion Lipschitz es mas fuerte y cuantitativa.

### Proposicion 7: la distancia a un conjunto cerrado

Si $A \subseteq X$ es no vacio, la funcion

$$
x \mapsto d(x,A):=\inf\{d(x,a): a \in A\}
$$

es continua y de hecho Lipschitz con constante $1$.

#### Demostracion

Para todo $a \in A$ se tiene

$$
d(x,A) \le d(x,a) \le d(x,y)+d(y,a).
$$

Tomando infimo en $a$ se obtiene

$$
d(x,A) \le d(x,y)+d(y,A).
$$

Intercambiando el papel de $x$ e $y$ resulta

$$
|d(x,A)-d(y,A)| \le d(x,y).
$$

### Proposicion 8: isometrias y homeomorfismos

Toda isometria

$$
f : (X,d_X) \to (Y,d_Y)
$$

es continua. Si ademas es biyectiva, entonces su inversa tambien es isometria, luego $f$ es un homeomorfismo.

## Ejemplos estructurales

### Ejemplo 1: continuidad de operadores lineales acotados

Si $T : V \to W$ es lineal entre espacios normados y existe $C \ge 0$ tal que

$$
\|T(x)\| \le C\|x\|
$$

para todo $x \in V$, entonces

$$
\|T(x)-T(y)\|=\|T(x-y)\| \le C\|x-y\|,
$$

asi que $T$ es Lipschitz y por tanto continuo.

### Ejemplo 2: una funcion continua no necesita ser Lipschitz

La funcion

$$
f(x)=\sqrt{x}, \qquad x \in [0,1],
$$

es continua, pero no Lipschitz en $0$.

### Ejemplo 3: continuidad de normas

En un espacio normado, la funcion

$$
x \mapsto \|x\|
$$

es continua porque satisface

$$
|\|x\|-\|y\|| \le \|x-y\|.
$$

## Errores comunes

1. Usar la misma metrica simbolicamente en dominio y codominio sin aclarar que pueden ser distintas.
2. Confundir continuidad en un punto con continuidad uniforme.
3. Probar continuidad solo en terminos de formulas algebraicas aunque el espacio sea abstracto.
4. Suponer que la continuidad de sucesiones caracteriza continuidad en toda topologia, cuando aqui es importante la metrizabilidad.
5. Llamar homeomorfismo a una biyeccion continua sin verificar continuidad de la inversa.

## Resumen operativo

- La continuidad puntual se expresa mediante la cuantificacion epsilon-delta adaptada a dos metricas.
- En espacios metricos coincide con la preservacion de limites de sucesiones.
- Globalmente equivale a que las preimagenes de abiertos sean abiertas.
- Las aplicaciones Lipschitz, las isometrias y los operadores lineales acotados son continuos.
- La continuidad es una propiedad topologica; las cotas Lipschitz son refinamientos metricos.

## Ejercicios

1. Prueba directamente con la definicion que toda funcion constante es continua.
2. Demuestra la continuidad de la funcion

$$
x \mapsto d_X(x,a)
$$

para un punto fijo $a \in X$.
3. Prueba el criterio por cerrados a partir del criterio por abiertos.
4. Sea $A \subseteq X$ no vacio. Demuestra que

$$
x \mapsto d(x,A)
$$

es continua.
5. Demuestra que si $f$ es continua y $D \subseteq X$ es denso, entonces $f$ queda determinada unicamente por sus valores en $D$ siempre que el codominio sea Hausdorff.
