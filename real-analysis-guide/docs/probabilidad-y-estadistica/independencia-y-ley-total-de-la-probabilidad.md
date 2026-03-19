---
title: Independencia y ley total de la probabilidad
description: Independencia de eventos y variables, particiones, ley total de la probabilidad y lectura estructural del teorema de Bayes.
---

# Independencia y ley total de la probabilidad

## Por que este tema es central

En probabilidad, dos ideas aparecen una y otra vez:

- separar un problema en casos;
- decidir cuando la informacion sobre un evento no cambia la probabilidad de otro.

La primera idea conduce a la ley total de la probabilidad. La segunda conduce a la independencia.

Sin estas dos herramientas, gran parte del bloque queda fragmentado:

- la binomial no se entiende del todo;
- Bayes se vuelve una formula aislada;
- las muestras aleatorias parecen surgir sin estructura;
- las sumas de variables y los teoremas limite pierden contexto.

## Independencia de eventos

Sean

$$
A,B\in \mathcal{F}.
$$

Decimos que

$$
A
$$

y

$$
B
$$

son **independientes** si

$$
P(A\cap B)=P(A)P(B).
$$

## Interpretacion

La igualdad anterior dice que conocer la ocurrencia de

$$
B
$$

no altera la probabilidad de

$$
A,
$$

siempre que

$$
P(B)>0.
$$

En efecto, si hay independencia,

$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=P(A).
$$

### Observacion

La independencia no significa que los eventos "no se parezcan" ni que sean disjuntos. Significa algo mucho mas preciso: que la informacion sobre uno no modifica la probabilidad del otro.

## Ejemplo 1

Lanzamos una moneda y un dado equilibrados.

Sea

$$
A=\{\text{sale cara}\},
\qquad
B=\{\text{sale numero par}\}.
$$

Entonces

$$
P(A)=\frac12,
\qquad
P(B)=\frac12,
\qquad
P(A\cap B)=\frac14.
$$

Como

$$
P(A\cap B)=P(A)P(B),
$$

los eventos son independientes.

## Ejemplo 2

En un lanzamiento de dado:

$$
A=\{\text{sale par}\}=\{2,4,6\},
\qquad
B=\{\text{sale mayor que 3}\}=\{4,5,6\}.
$$

Entonces

$$
P(A)=\frac12,
\qquad
P(B)=\frac12,
\qquad
P(A\cap B)=\frac{2}{6}=\frac13.
$$

Pero

$$
P(A)P(B)=\frac14.
$$

No hay independencia.

## Incompatibilidad no es independencia

Si

$$
A\cap B=\varnothing
$$

y ambos eventos tienen probabilidad positiva, entonces

$$
P(A\cap B)=0
$$

pero

$$
P(A)P(B)>0.
$$

Por tanto, eventos incompatibles de probabilidad positiva no pueden ser independientes.

### Moral

- incompatibilidad significa que no pueden ocurrir juntos;
- independencia significa que saber uno no da informacion sobre el otro.

Son conceptos distintos y, en presencia de probabilidades positivas, incompatibles entre si.

## Independencia de una familia finita

Una familia

$$
A_1,\dots,A_n
$$

es **mutuamente independiente** si para toda subfamilia

$$
A_{i_1},\dots,A_{i_k}
$$

se cumple

$$
P(A_{i_1}\cap \cdots \cap A_{i_k})
=
P(A_{i_1})\cdots P(A_{i_k}).
$$

No basta verificar la igualdad solo por pares.

## Independencia por pares contra independencia mutua

### Ejemplo clasico

Lanzamos dos monedas equilibradas y definimos:

- $A$: la primera moneda es cara;
- $B$: la segunda moneda es cara;
- $C$: el numero total de caras es par.

Cada par resulta independiente, pero la familia completa no es mutuamente independiente.

### Verificacion breve

Se tiene

$$
P(A)=P(B)=P(C)=\frac12.
$$

Ademas,

$$
P(A\cap B)=P(A\cap C)=P(B\cap C)=\frac14.
$$

Sin embargo,

$$
P(A\cap B\cap C)=P(\text{HH})=\frac14,
$$

mientras que

$$
P(A)P(B)P(C)=\frac18.
$$

Por tanto:

- hay independencia por pares;
- no hay independencia mutua.

## Independencia y complementos

Si

$$
A
$$

y

$$
B
$$

son independientes, entonces tambien lo son:

- $A^c$ y $B$;
- $A$ y $B^c$;
- $A^c$ y $B^c$.

### Demostracion de una de las igualdades

Como

$$
P(A^c\cap B)=P(B)-P(A\cap B),
$$

usando independencia obtenemos

$$
P(A^c\cap B)=P(B)-P(A)P(B)=P(B)(1-P(A))=P(B)P(A^c).
$$

Las otras identidades se deducen del mismo modo.

## Independencia condicionada

En problemas por etapas puede interesar una version relativa a un evento

$$
C
$$

con

$$
P(C)>0.
$$

Se dice que

$$
A
$$

y

$$
B
$$

son independientes condicionados a

$$
C
$$

si

$$
P(A\cap B\mid C)=P(A\mid C)P(B\mid C).
$$

Esta nocion es muy importante en modelos graficos, estadistica bayesiana y procesos aleatorios, aunque para el presente bloque basta con tenerla identificada.

## Independencia de variables aleatorias

Variables aleatorias

$$
X
$$

y

$$
Y
$$

son independientes si para cualesquiera borelianos

$$
B,C\subseteq \mathbb{R}
$$

se cumple

$$
P(X\in B,\ Y\in C)=P(X\in B)\,P(Y\in C).
$$

### Lectura

No basta decir que "no se influyen". La independencia se expresa sobre todos los eventos generados por ambas variables.

## Consecuencias utiles

Si

$$
X
$$

y

$$
Y
$$

son independientes e integrables, entonces:

$$
E[XY]=E[X]E[Y].
$$

Si ademas tienen segundo momento finito, entonces:

$$
\operatorname{Cov}(X,Y)=0.
$$

La implicacion inversa es falsa en general.

## Ejemplo 3

Sea

$$
X
$$

uniforme en

$$
\{-1,0,1\}
$$

y sea

$$
Y=X^2.
$$

Entonces

$$
\operatorname{Cov}(X,Y)=E[X^3]-E[X]E[X^2]=0,
$$

pero

$$
Y
$$

esta completamente determinada por

$$
X.
$$

No hay independencia.

## Particiones del espacio

Una familia

$$
B_1,B_2,\dots
$$

es una **particion** de

$$
\Omega
$$

si:

1. los eventos son disjuntos dos a dos;
2. 

$$
\bigcup_{i=1}^{\infty} B_i=\Omega;
$$

3. normalmente se asume

$$
P(B_i)>0
$$

para los casos relevantes en formulas condicionadas.

Una particion modela una descomposicion del experimento en escenarios excluyentes y exhaustivos.

## Ley total de la probabilidad

### Teorema

Si

$$
B_1,B_2,\dots
$$

es una particion de

$$
\Omega
$$

con

$$
P(B_i)>0,
$$

entonces para todo evento

$$
A
$$

se cumple

$$
P(A)=\sum_{i=1}^{\infty} P(A\mid B_i)P(B_i).
$$

## Demostracion

Como los

$$
A\cap B_i
$$

son disjuntos dos a dos y

$$
A=\bigcup_{i=1}^{\infty} (A\cap B_i),
$$

la sigma-aditividad da

$$
P(A)=\sum_{i=1}^{\infty} P(A\cap B_i).
$$

Usando la regla del producto en cada termino:

$$
P(A\cap B_i)=P(A\mid B_i)P(B_i).
$$

Sustituyendo:

$$
P(A)=\sum_{i=1}^{\infty} P(A\mid B_i)P(B_i).
$$

## Interpretacion

La probabilidad total dice:

- separamos el espacio en escenarios;
- calculamos la probabilidad de

$$
A
$$

dentro de cada escenario;
- ponderamos por la probabilidad de cada escenario;
- sumamos.

Es la forma precisa de un razonamiento por casos.

## Version finita

Si

$$
B_1,\dots,B_n
$$

es una particion finita, entonces

$$
P(A)=\sum_{i=1}^n P(A\mid B_i)P(B_i).
$$

Esta es la version mas usada en aplicaciones elementales.

## Bayes como consecuencia

Si

$$
B_1,\dots,B_n
$$

es una particion y

$$
P(A)>0,
$$

entonces

$$
P(B_j\mid A)
=
\frac{P(A\mid B_j)P(B_j)}
{\sum_{i=1}^n P(A\mid B_i)P(B_i)}.
$$

La ley total aparece en el denominador. Por eso Bayes no debe estudiarse como una formula aislada, sino como una combinacion de:

- regla del producto;
- descomposicion por particiones.

## Ejemplo 4: prueba diagnostica

Sea

$$
D=\{\text{persona enferma}\},
\qquad
T=\{\text{prueba positiva}\}.
$$

Supongamos:

$$
P(D)=0.01,
\qquad
P(T\mid D)=0.95,
\qquad
P(T\mid D^c)=0.04.
$$

Primero calculamos la probabilidad total de test positivo:

$$
P(T)=P(T\mid D)P(D)+P(T\mid D^c)P(D^c).
$$

Sustituyendo:

$$
P(T)=0.95(0.01)+0.04(0.99)=0.0491.
$$

Ahora Bayes:

$$
P(D\mid T)=\frac{0.95(0.01)}{0.0491}\approx 0.1935.
$$

### Lectura

Aunque la prueba es bastante sensible, la probabilidad posterior de estar enfermo dado un positivo es menor que

$$
0.2
$$

porque la prevalencia inicial es muy baja.

## Ejemplo 5: urna y reemplazo

Una caja contiene dos bolas rojas y una azul. Se extraen dos bolas.

### Sin reemplazo

Sea

$$
A=\{\text{la primera es roja}\},
\qquad
B=\{\text{la segunda es roja}\}.
$$

Entonces

$$
P(A)=\frac23,
\qquad
P(B)=\frac23.
$$

Pero

$$
P(B\mid A)=\frac12,
$$

de modo que

$$
P(A\cap B)=\frac23\cdot \frac12=\frac13\neq \frac49.
$$

No hay independencia.

### Con reemplazo

Ahora cada extraccion devuelve la bola a la urna.

Entonces

$$
P(B\mid A)=\frac23=P(B),
$$

de modo que

$$
A
$$

y

$$
B
$$

si son independientes.

### Leccion

La independencia depende del mecanismo del experimento, no solo del lenguaje informal del enunciado.

## Ejemplo 6: mezcla de poblaciones

Un componente proviene de una de dos fabricas:

- fabrica 1 con probabilidad

$$
0.7;
$$

- fabrica 2 con probabilidad

$$
0.3.
$$

La probabilidad de falla en una semana es:

$$
P(F\mid B_1)=0.02,
\qquad
P(F\mid B_2)=0.08.
$$

Entonces, por ley total:

$$
P(F)=0.02(0.7)+0.08(0.3)=0.038.
$$

Y si el componente fallo, Bayes da:

$$
P(B_2\mid F)=\frac{0.08(0.3)}{0.038}\approx 0.6316.
$$

Aunque solo el

$$
30\%
$$

de los componentes viene de la fabrica 2, una vez observado el fallo esa fabrica se vuelve la explicacion mas probable.

## Practica guiada

### Situacion 1

En una clase, el

$$
40\%
$$

estudia algebra antes del examen y el

$$
60\%
$$

no lo hace. La probabilidad de aprobar es

$$
0.85
$$

si estudio algebra y

$$
0.50
$$

si no.

#### Preguntas

1. Cual es la probabilidad total de aprobar.
2. Si un alumno aprobo, cual es la probabilidad de que haya estudiado algebra.

#### Esquema de resolucion

Se toma la particion:

$$
B_1=\{\text{estudio algebra}\},
\qquad
B_2=\{\text{no estudio algebra}\}.
$$

Luego:

$$
P(A)=P(A\mid B_1)P(B_1)+P(A\mid B_2)P(B_2),
$$

y Bayes da la segunda respuesta.

### Situacion 2

Se lanzan dos monedas. Sean:

- $A$: la primera es cara;
- $B$: exactamente una es cara.

#### Tarea conceptual

Decidir si

$$
A
$$

y

$$
B
$$

son independientes.

#### Idea

Calcular

$$
P(A),\ P(B),\ P(A\cap B)
$$

y comparar

$$
P(A\cap B)
$$

con

$$
P(A)P(B).
$$

## Errores frecuentes

- Confundir independencia con incompatibilidad.
- Verificar solo independencia por pares cuando se necesita independencia mutua.
- Aplicar Bayes sin construir antes la particion relevante.
- Olvidar que la ley total pondera por las probabilidades de los escenarios.
- Usar lenguaje causal donde solo hay relacion probabilistica.
- Creer que covarianza nula implica independencia.

## Puente hacia el resto del bloque

Este tema reaparece en casi todo:

- la binomial usa ensayos independientes;
- la ley de los grandes numeros usa independencia en su forma clasica;
- la covarianza distingue entre independencia y mera falta de correlacion;
- los intervalos y pruebas para dos muestras suelen asumir independencia muestral;
- Bayes y la inferencia estadistica por modelos mixtos usan ley total de forma permanente.

## Cierre

La independencia y la ley total de la probabilidad son dos principios organizadores de la materia. La primera indica cuando dos piezas de informacion no se interfieren; la segunda indica como recomponer una probabilidad global a partir de escenarios parciales. Juntas convierten muchos calculos aparentemente ad hoc en razonamientos estructurados y transportables.
