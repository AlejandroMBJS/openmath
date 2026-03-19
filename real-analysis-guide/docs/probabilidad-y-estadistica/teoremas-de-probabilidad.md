---
title: Teoremas de probabilidad
description: Formulas fundamentales derivadas de los axiomas, inclusion-exclusion, continuidad de la probabilidad y desigualdades basicas.
---

# Teoremas de probabilidad

## Motivacion

Los axiomas de Kolmogorov son pocos, pero sus consecuencias son muchas. Esta pagina recoge los teoremas estructurales mas usados en el calculo probabilistico elemental y en el analisis teorico posterior.

## Recordatorio de hipotesis

Trabajamos sobre un espacio de probabilidad

$$
(\Omega,\mathcal{F},P).
$$

Todas las formulas siguientes se deducen unicamente de los axiomas.

## Probabilidad del complemento

### Teorema 1

Para todo evento

$$
A\in \mathcal{F},
$$

se tiene

$$
P(A^c)=1-P(A).
$$

### Prueba

Como

$$
\Omega=A\cup A^c
$$

con union disjunta,

$$
1=P(\Omega)=P(A)+P(A^c).
$$

## Probabilidad de una diferencia

### Teorema 2

Si

$$
A\subseteq B,
$$

entonces

$$
P(B\setminus A)=P(B)-P(A).
$$

### Prueba

Tenemos

$$
B=A\cup (B\setminus A)
$$

disjuntamente. Luego

$$
P(B)=P(A)+P(B\setminus A).
$$

## Formula de la union de dos eventos

### Teorema 3

Para cualesquiera eventos

$$
A,\ B,
$$

vale

$$
P(A\cup B)=P(A)+P(B)-P(A\cap B).
$$

### Comentario

La correccion por

$$
P(A\cap B)
$$

es indispensable porque la interseccion se cuenta dos veces al sumar

$$
P(A)+P(B).
$$

### Ejemplo 1

Si

$$
P(A)=0.6,\qquad P(B)=0.5,\qquad P(A\cap B)=0.2,
$$

entonces

$$
P(A\cup B)=0.6+0.5-0.2=0.9.
$$

## Subaditividad para dos eventos

### Corolario 4

Para cualesquiera

$$
A,\ B,
$$

se cumple

$$
P(A\cup B)\le P(A)+P(B).
$$

La desigualdad es estricta salvo que

$$
A\cap B=\varnothing.
$$

## Inclusion-exclusion finita

### Teorema 5

Para tres eventos,

$$
\begin{aligned}
P(A\cup B\cup C)
=&\ P(A)+P(B)+P(C) \\
&-P(A\cap B)-P(A\cap C)-P(B\cap C) \\
&+P(A\cap B\cap C).
\end{aligned}
$$

### Comentario

La regla general para

$$
n
$$

eventos alterna sumas y restas de intersecciones de orden creciente. Es una version probabilistica del principio combinatorio de inclusion-exclusion.

## Inclusion-exclusion general e indicadores

La forma conceptual mas limpia de inclusion-exclusion usa funciones indicadoras. Para eventos

$$
A_1,\dots,A_n,
$$

la identidad algebraica

$$
1_{\bigcup_{j=1}^n A_j}=1-\prod_{j=1}^n (1-1_{A_j})
$$

ya contiene toda la formula. Al expandir el producto aparecen sumas alternadas de productos de indicadores, y cada producto es la indicadora de una interseccion.

### Proposicion 5 bis

Para cualesquiera eventos

$$
A_1,\dots,A_n,
$$

se tiene casi seguramente

$$
1_{\bigcup_{j=1}^n A_j}
=
\sum_{j=1}^n 1_{A_j}
-\sum_{1\le i<j\le n}1_{A_i\cap A_j}
+\sum_{1\le i<j<k\le n}1_{A_i\cap A_j\cap A_k}
-\cdots
+(-1)^{n+1}1_{\bigcap_{j=1}^n A_j}.
$$

Tomando esperanza,

$$
P\left(\bigcup_{j=1}^n A_j\right)
=
\sum_{j=1}^n P(A_j)
-\sum_{1\le i<j\le n}P(A_i\cap A_j)
+\cdots
+(-1)^{n+1}P\left(\bigcap_{j=1}^n A_j\right).
$$

### Demostracion

La identidad de indicadores se obtiene expandiendo el producto

$$
\prod_{j=1}^n (1-1_{A_j})
$$

igual que en algebra elemental. Para cada

$$
\omega\in \Omega,
$$

si ningun evento

$$
A_j
$$

ocurre, todos los indicadores valen cero y ambos lados dan cero. Si ocurre al menos uno, el producto del lado derecho se anula y la expresion completa vale uno. Una vez verificada la identidad puntual, basta recordar que

$$
E(1_B)=P(B)
$$

para cualquier evento

$$
B.
$$

### Lectura

Este argumento es importante porque muestra que inclusion-exclusion no es una formula aislada. Es la sombra, a nivel de probabilidades, de una identidad exacta entre indicadores.

## Monotonia

### Teorema 6

Si

$$
A\subseteq B,
$$

entonces

$$
P(A)\le P(B).
$$

### Prueba

Se deduce de

$$
P(B)=P(A)+P(B\setminus A)
$$

y de la no negatividad.

## Subaditividad numerable

### Teorema 7

Para toda familia numerable de eventos

$$
A_1,A_2,\dots,
$$

se cumple

$$
P\left(\bigcup_{n=1}^\infty A_n\right)\le \sum_{n=1}^\infty P(A_n).
$$

### Idea de la demostracion

Definimos

$$
B_1=A_1,\qquad B_n=A_n\setminus \bigcup_{k=1}^{n-1}A_k.
$$

Entonces los

$$
B_n
$$

son disjuntos y

$$
\bigcup_{n=1}^\infty A_n=\bigcup_{n=1}^\infty B_n.
$$

Por sigma-aditividad,

$$
P\left(\bigcup_{n=1}^\infty A_n\right)=\sum_{n=1}^\infty P(B_n)\le \sum_{n=1}^\infty P(A_n).
$$

### Aplicacion

La desigualdad anterior se llama a veces **desigualdad de Boole**.

## Continuidad creciente

### Teorema 8

Si

$$
A_1\subseteq A_2\subseteq \cdots
$$

y definimos

$$
A=\bigcup_{n=1}^\infty A_n,
$$

entonces

$$
P(A_n)\to P(A).
$$

### Demostracion

Definimos

$$
B_1=A_1,\qquad B_n=A_n\setminus A_{n-1}\quad (n\ge 2).
$$

Entonces los

$$
B_n
$$

son disjuntos y

$$
A=\bigcup_{n=1}^\infty B_n.
$$

Ademas,

$$
A_n=\bigcup_{k=1}^n B_k.
$$

Por sigma-aditividad,

$$
P(A_n)=\sum_{k=1}^n P(B_k),
\qquad
P(A)=\sum_{k=1}^\infty P(B_k).
$$

La conclusion sigue del paso al limite de las sumas parciales.

## Continuidad decreciente

### Teorema 9

Si

$$
A_1\supseteq A_2\supseteq \cdots
$$

y

$$
A=\bigcap_{n=1}^\infty A_n,
$$

entonces

$$
P(A_n)\to P(A).
$$

### Demostracion

Aplicamos continuidad creciente a los complementos

$$
A_n^c.
$$

Como

$$
A_n^c\uparrow A^c,
$$

tenemos

$$
P(A_n^c)\to P(A^c).
$$

Usando el complemento:

$$
1-P(A_n)\to 1-P(A),
$$

luego

$$
P(A_n)\to P(A).
$$

### Comentario

Esta propiedad es uno de los motivos profundos por los que la sigma-aditividad es necesaria.

## Bonferroni basico

De la formula de la union de dos eventos obtenemos

$$
P(A\cap B)=P(A)+P(B)-P(A\cup B)\ge P(A)+P(B)-1.
$$

Esta cota inferior es util cuando se conocen probabilidades marginales pero no la estructura exacta de interseccion.

### Ejemplo 2

Si

$$
P(A)=0.8,\qquad P(B)=0.7,
$$

entonces necesariamente

$$
P(A\cap B)\ge 0.5.
$$

## Exhaustividad por particion

Si

$$
A_1,\dots,A_n
$$

forman una particion de

$$
\Omega,
$$

entonces

$$
\sum_{k=1}^n P(A_k)=1.
$$

Esto es una consecuencia inmediata de la aditividad finita y de

$$
\bigcup_{k=1}^n A_k=\Omega.
$$

## Eventos "casi imposibles" y "casi seguros"

En probabilidad avanzada es comun distinguir:

- evento de probabilidad cero;
- evento imposible;
- evento de probabilidad uno;
- evento seguro.

En espacios finitos estas nociones coinciden de forma intuitiva. En espacios continuos no siempre.

### Ejemplo 3

Si se elige un numero real al azar en

$$
[0,1]
$$

con distribucion uniforme, la probabilidad de obtener exactamente

$$
\frac12
$$

es cero, aunque ese resultado no es imposible.

Este ejemplo entrena una intuicion esencial para el paso al caso continuo.

## Limite superior e inferior de eventos

Dada una sucesion de eventos

$$
A_n,
$$

aparecen los conjuntos

$$
\limsup A_n=\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k,
$$

$$
\liminf A_n=\bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k.
$$

Estos objetos codifican eventos que ocurren infinitamente a menudo o eventualmente siempre. Se vuelven centrales en teoremas limite como Borel-Cantelli y ley de los grandes numeros.

### Interpretacion precisa

- 
$$
\omega\in \limsup A_n
$$

si y solo si

$$
\omega
$$

pertenece a infinitos eventos

$$
A_n;
$$

- 
$$
\omega\in \liminf A_n
$$

si y solo si, a partir de cierto indice, pertenece a todos los

$$
A_n.
$$

Por tanto

$$
\liminf A_n\subseteq \limsup A_n.
$$

Si ambas coinciden, se habla del limite del sistema de eventos.

### Proposicion 10

Para cualquier sucesion de eventos

$$
A_n,
$$

se cumple

$$
(\limsup A_n)^c=\liminf A_n^c,
\qquad
(\liminf A_n)^c=\limsup A_n^c.
$$

### Demostracion

Es una aplicacion directa de las leyes de De Morgan:

$$
\left(\bigcap_{n=1}^\infty \bigcup_{k=n}^\infty A_k\right)^c
=
\bigcup_{n=1}^\infty \bigcap_{k=n}^\infty A_k^c.
$$

La segunda identidad se obtiene igual.

## Primer lema de Borel-Cantelli

### Teorema 11

Si

$$
\sum_{n=1}^\infty P(A_n)<\infty,
$$

entonces

$$
P(\limsup A_n)=0.
$$

En palabras: si la suma de probabilidades es finita, el evento "ocurren infinitamente muchos

$$
A_n
$$
"

tiene probabilidad cero.

### Demostracion

Definimos

$$
B_n=\bigcup_{k=n}^\infty A_k.
$$

Entonces

$$
B_{n+1}\subseteq B_n
$$

y

$$
\limsup A_n=\bigcap_{n=1}^\infty B_n.
$$

Por subaditividad numerable,

$$
P(B_n)\le \sum_{k=n}^\infty P(A_k).
$$

Como la serie converge, sus colas tienden a cero. Luego

$$
P(B_n)\to 0.
$$

Aplicando continuidad decreciente,

$$
P(\limsup A_n)=P\left(\bigcap_{n=1}^\infty B_n\right)=\lim_{n\to\infty}P(B_n)=0.
$$

### Comentario

La conclusion no dice que ningun

$$
A_n
$$

ocurra, sino que con probabilidad uno solo ocurren finitamente muchos. Esta distincion es central en probabilidad asintotica.

### Aplicacion

Si

$$
P(A_n)\le 2^{-n},
$$

entonces

$$
\sum_{n=1}^\infty P(A_n)\le \sum_{n=1}^\infty 2^{-n}<\infty,
$$

de modo que

$$
P(A_n\ \text{ocurre infinitas veces})=0.
$$

Una lectura util es esta: errores extremadamente raros, pero acumulados con suma total finita, no pueden seguir apareciendo para siempre con probabilidad positiva.

## Teorema de continuidad y estabilidad

Los teoremas de continuidad muestran que la probabilidad se comporta bien con procesos de aproximacion por eventos crecientes o decrecientes. Esta estabilidad es lo que permite construir argumentos rigurosos con limites y aproximaciones sucesivas.

## Ejemplo 4: aproximacion creciente

Sea

$$
A_n=\left[0,1-\frac{1}{n}\right]
$$

en un modelo uniforme sobre

$$
[0,1].
$$

Entonces

$$
A_n\uparrow [0,1),
$$

y

$$
P(A_n)=1-\frac{1}{n}\to 1=P([0,1)).
$$

Observese que

$$
P([0,1))=1
$$

porque el punto

$$
\{1\}
$$

tiene probabilidad cero.

## Comentario estructural

Muchos teoremas posteriores, como probabilidad total, Bayes, desigualdades de cola o teoremas limite, no son formulas aisladas. Son aplicaciones reiteradas de unas pocas ideas:

- descomponer eventos en partes disjuntas;
- usar monotonia;
- pasar al complemento;
- controlar uniones e intersecciones por inclusion-exclusion y continuidad.

## Errores frecuentes

- Usar

$$
P(A\cup B)=P(A)+P(B)
$$

sin verificar disjuncion.
- Confundir eventos disjuntos con eventos independientes.
- Creer que probabilidad cero implica imposibilidad absoluta.
- Olvidar que inclusion-exclusion no termina en el segundo orden cuando hay tres o mas eventos.

## Conclusion

Los teoremas basicos de probabilidad muestran que los axiomas no son meras reglas de notacion. Organizan toda la logica cuantitativa de los eventos. Dominar estas identidades es indispensable, porque casi todo el calculo probabilistico serio consiste en descomponer bien un evento y aplicar una de estas herramientas con precision.
