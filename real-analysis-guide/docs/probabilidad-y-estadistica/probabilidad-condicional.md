---
title: Probabilidad condicional
description: Definicion, regla del producto, probabilidad condicionada como nueva medida, independencia y razonamiento secuencial.
---

# Probabilidad condicional

## Cuando la informacion cambia el problema

La probabilidad de un evento no es una cantidad absoluta en todos los contextos. Puede cambiar radicalmente si se incorpora informacion adicional.

Ejemplos:

- la probabilidad de enfermedad cambia al saber que una prueba fue positiva;
- la probabilidad de una carta roja cambia al saber que la carta es figura;
- la probabilidad de lluvia cambia al conocer nuevas observaciones atmosfericas.

La probabilidad condicional formaliza exactamente ese cambio de universo informativo.

## Definicion

Sean

$$
A,B\in\mathcal F
$$

con

$$
P(B)>0.
$$

La probabilidad condicional de $A$ dado $B$ se define por

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}.
$$

## Interpretacion geometrica

Al condicionar por $B$, el universo relevante deja de ser $\Omega$ y pasa a ser $B$.

Dentro de ese nuevo universo:

- la parte favorable a $A$ es

$$
A\cap B;
$$

- el total disponible es

$$
B.
$$

La probabilidad condicional mide la proporcion relativa de $A\cap B$ dentro de $B$.

## Ejemplo 1: dado

Sea

$$
A=\{2,4,6\}
$$

el evento "sale numero par", y

$$
B=\{4,5,6\}
$$

el evento "sale numero mayor que 3".

Entonces

$$
A\cap B=\{4,6\}.
$$

Como

$$
P(B)=\frac{3}{6}=\frac12,
\qquad
P(A\cap B)=\frac{2}{6}=\frac13,
$$

tenemos

$$
P(A\mid B)=\frac{1/3}{1/2}=\frac23.
$$

### Lectura

Una vez sabido que el resultado esta entre $4,5,6$, quedan tres posibilidades y dos son pares.

## Regla del producto

La definicion puede reescribirse como

$$
P(A\cap B)=P(A\mid B)P(B),
$$

si

$$
P(B)>0.
$$

Tambien

$$
P(A\cap B)=P(B\mid A)P(A),
$$

si

$$
P(A)>0.
$$

### Comentario

Esta identidad es una de las formulas mas usadas en toda la teoria. Permite descomponer probabilidades conjuntas en etapas informativas.

## Probabilidad condicionada como nueva probabilidad

Fijado un evento $B$ con

$$
P(B)>0,
$$

la aplicacion

$$
A\mapsto P(A\mid B)
$$

define una nueva probabilidad sobre los eventos medibles dentro del universo condicionado.

### Propiedad 1

$$
P(B\mid B)=1.
$$

### Propiedad 2

Si

$$
A_1,A_2,\dots
$$

son disjuntos, entonces

$$
P\left(\bigcup_{n=1}^{\infty}A_n\mid B\right)
=
\sum_{n=1}^{\infty}P(A_n\mid B).
$$

### Comentario

Condicionar no es solo una division por una constante. Es rehacer el calculo probabilistico dentro de una informacion ya fijada.

## Regla en cadena

Para eventos con probabilidades relevantes positivas:

$$
P(A\cap B\cap C)
=
P(A)P(B\mid A)P(C\mid A\cap B).
$$

Mas generalmente,

$$
P(A_1\cap\cdots\cap A_n)
=
P(A_1)\,P(A_2\mid A_1)\cdots P(A_n\mid A_1\cap\cdots\cap A_{n-1}).
$$

### Interpretacion

La regla en cadena es la formulacion matematica del conteo o razonamiento por etapas, pero ahora en clave probabilistica.

## Ejemplo 2: cartas sin reemplazo

De una baraja de $52$ cartas se extraen dos sin reemplazo. Sea:

$$
A=\{\text{la primera es as}\},
\qquad
B=\{\text{la segunda es as}\}.
$$

Entonces

$$
P(A)=\frac{4}{52}.
$$

Sabiendo que ya salio un as, quedan $3$ ases entre $51$ cartas:

$$
P(B\mid A)=\frac{3}{51}.
$$

Por la regla del producto:

$$
P(A\cap B)=\frac{4}{52}\cdot \frac{3}{51}.
$$

### Comentario

Este ejemplo muestra como la condicion cambia el espacio disponible cuando no hay reemplazo.

## Independencia

Dos eventos $A$ y $B$ son independientes si

$$
P(A\cap B)=P(A)P(B).
$$

Si ademas

$$
P(B)>0,
$$

esto equivale a

$$
P(A\mid B)=P(A).
$$

### Interpretacion

Saber que ocurrio $B$ no altera la probabilidad de $A$.

## Demostracion de la equivalencia con independencia

Si

$$
P(A\cap B)=P(A)P(B),
$$

entonces

$$
P(A\mid B)
=
\frac{P(A\cap B)}{P(B)}
=
\frac{P(A)P(B)}{P(B)}
=
P(A).
$$

Reciprocamente, si

$$
P(A\mid B)=P(A),
$$

entonces multiplicando por $P(B)$ se obtiene la formula de independencia.

## Incompatibilidad no es independencia

Dos eventos disjuntos no pueden ocurrir a la vez. Dos eventos independientes no se afectan mutuamente.

### Ejemplo 3

En un dado:

$$
A=\{1\},
\qquad
B=\{2\}.
$$

Entonces

$$
A\cap B=\varnothing,
$$

luego

$$
P(A\cap B)=0.
$$

Pero

$$
P(A)P(B)=\frac{1}{6}\cdot \frac{1}{6}=\frac{1}{36}\ne 0.
$$

No son independientes.

### Leccion

Disjuntos significa incompatibles; independientes significa no informativos uno respecto del otro. Son ideas completamente distintas.

## Probabilidad total

Si

$$
B_1,\dots,B_n
$$

forman una particion con

$$
P(B_i)>0,
$$

entonces para cualquier evento $A$:

$$
P(A)=\sum_{i=1}^n P(A\mid B_i)P(B_i).
$$

### Comentario

Esta formula descompone una probabilidad global en escenarios condicionados. Es el paso previo a la regla de Bayes.

## Ejemplo 4: probabilidad total

Una fabrica produce con dos maquinas:

- maquina 1 produce el $40\%$;
- maquina 2 produce el $60\%$.

Las tasas de defecto son:

$$
P(D\mid M_1)=0.03,
\qquad
P(D\mid M_2)=0.01.
$$

Entonces

$$
P(D)=0.03(0.4)+0.01(0.6)=0.018.
$$

La probabilidad total se obtiene mezclando escenarios de produccion.

## Bayes como inversion del condicionamiento

Una vez conocida la probabilidad total, puede invertirse la condicion:

$$
P(B_i\mid A)
=
\frac{P(A\mid B_i)P(B_i)}
\sum_{j=1}^n P(A\mid B_j)P(B_j)}.
$$

La regla de Bayes se apoya enteramente en la probabilidad condicional.

### Comentario

Sin dominar la idea de "nuevo universo informativo", Bayes se vuelve una formula mecanica facil de malinterpretar.

## Condicionamiento y reduccion del espacio

En muchos problemas discretos, condicionar consiste literalmente en restringir el espacio elemental.

### Ejemplo 5: dos hijos

Si se asume que los sexos de dos hijos son equiprobables e independientes, el espacio es

$$
\{(N,N),(N,V),(V,N),(V,V)\},
$$

donde $N$ significa nina y $V$ nino.

Si sabemos que al menos uno es nino, el nuevo universo es

$$
\{(N,V),(V,N),(V,V)\}.
$$

La probabilidad de que ambos sean ninos, condicionada a esa informacion, es

$$
\frac{1}{3}.
$$

## Eventos independientes por construccion

En ensayos con reemplazo o repeticiones independientes, la condicion no altera probabilidades marginales relevantes.

### Ejemplo 6

Al lanzar una moneda equilibrada dos veces, el evento

$$
A=\{\text{la primera es cara}\}
$$

y el evento

$$
B=\{\text{la segunda es cara}\}
$$

son independientes porque

$$
P(A\cap B)=\frac14=\frac12\cdot\frac12.
$$

## Error comun 1: invertir condicion sin justificacion

No es cierto, en general, que

$$
P(A\mid B)=P(B\mid A).
$$

La inversion exige Bayes y depende de las probabilidades previas.

## Error comun 2: olvidar que P(B) debe ser positiva

La expresion

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}
$$

solo tiene sentido si

$$
P(B)>0.
$$

Condicionar sobre un evento de probabilidad cero requiere herramientas mas finas que no pertenecen a este nivel elemental.

## Error comun 3: identificar independencia con no ocurrencia conjunta

Que dos eventos no puedan ocurrir juntos no los vuelve independientes; de hecho, normalmente los vuelve fuertemente dependientes.

## Practica guiada

### Ejercicio 1

En un dado, calcula la probabilidad de "sale impar" dado que "sale mayor que 2".

#### Solucion

Sea

$$
A=\{1,3,5\},
\qquad
B=\{3,4,5,6\}.
$$

Entonces

$$
A\cap B=\{3,5\}.
$$

Luego

$$
P(A\mid B)=\frac{2/6}{4/6}=\frac12.
$$

### Ejercicio 2

Explica por que en extracciones sin reemplazo el segundo resultado suele depender del primero.

#### Solucion

Porque el primer resultado cambia la composicion del conjunto restante, de modo que altera las probabilidades del segundo evento.

### Ejercicio 3

Si

$$
P(A)=0.3,
\qquad
P(B)=0.5,
\qquad
P(A\cap B)=0.15,
$$

son independientes?

#### Solucion

Si,

$$
P(A)P(B)=0.3\cdot 0.5=0.15=P(A\cap B).
$$

## Cierre

La probabilidad condicional expresa una idea central: la incertidumbre es relativa a la informacion disponible. Una vez que esto se entiende, muchas formulas dejan de ser recetas y se vuelven inevitables:

- la regla del producto describe informacion secuencial;
- la independencia significa invariancia frente a nueva informacion;
- la probabilidad total descompone por escenarios;
- Bayes invierte la direccion del condicionamiento.

Por eso esta pagina es uno de los verdaderos nodos conceptuales de todo el bloque.
