---
title: Sistemas Hiperbolicos y Problemas de Riemann
description: Estructura de sistemas de conservacion, ondas elementales, choques, rarefacciones y estabilidad en variacion total.
---

# Sistemas Hiperbolicos y Problemas de Riemann

## Por que los sistemas cambian la teoria

Pasar de una ecuacion escalar a un sistema hiperbolico no es solo aumentar dimension algebraica. Cambia la geometria de la propagacion.

En un sistema aparecen:

- varias familias de ondas;
- acoplamiento entre componentes;
- interaccion no trivial entre choques y rarefacciones;
- estructuras de entropia mas delicadas.

El modelo abstracto es

$$
u_t+F(u)_x=0,
\qquad
u(t,x)\in \mathbb{R}^m.
$$

## Forma cuasilineal

Mientras $u$ sea suave,

$$
u_t+A(u)u_x=0,
\qquad
A(u)=DF(u).
$$

La matriz $A(u)$ controla las velocidades locales de propagacion.

## Hiperbolicidad

El sistema es hiperbolico si $A(u)$ tiene autovalores reales.

Es estrictamente hiperbolico si, ademas,

$$
\lambda_1(u)<\lambda_2(u)<\cdots<\lambda_m(u).
$$

### Lectura

Los autovalores son velocidades caracteristicas. Los autovectores marcan direcciones naturales de descomposicion de perturbaciones.

## Familias de ondas

Cada par $(\lambda_j,r_j)$ da una familia de ondas. Segun como cambie $\lambda_j$ en direccion de $r_j$, pueden aparecer dos regimes importantes:

- no linealidad genuina:

$$
\nabla \lambda_j(u)\cdot r_j(u)\ne 0;
$$

- degeneracion lineal:

$$
\nabla \lambda_j(u)\cdot r_j(u)=0.
$$

### Significado

- no linealidad genuina: las ondas pueden comprimirse o expandirse, generando choques o rarefacciones;
- degeneracion lineal: aparecen discontinuidades de contacto y transporte a velocidad caracteristica.

## Problema de Riemann

El dato de Riemann es el mas elemental y el mas importante:

$$
u(0,x)=
\begin{cases}
u_L, & x<0,\\
u_R, & x>0.
\end{cases}
$$

La solucion autosimilar depende de

$$
\xi=\frac{x}{t}.
$$

### Por que es central

Todo esquema numerico conservativo serio y gran parte de la teoria global en variacion total se construyen ensamblando soluciones locales de Riemann.

## Ondas elementales

En sistemas estrictamente hiperbolicos, la solucion del problema de Riemann suele componerse de ondas de cada familia:

- rarefacciones;
- choques;
- contactos.

Cada familia ocupa un rango de velocidades y se ensambla secuencialmente desde $u_L$ hasta $u_R$.

## Rarefaccion

Una rarefaccion es una zona continua donde la solucion se expande a lo largo de una curva integral del autovector $r_j$.

Formalmente, para una solucion autosimilar,

$$
(A(u)-\xi I)u'(\xi)=0.
$$

En una rarefaccion genuina, $u'(\xi)$ queda alineado con $r_j(u)$ y $\xi=\lambda_j(u)$.

### Lectura

La rarefaccion es la contraparte continua de un abanico de caracteristicas que se separan.

## Choque

Una discontinuidad que viaja con velocidad $s$ debe satisfacer la condicion de Rankine-Hugoniot:

$$
s(u_R-u_L)=F(u_R)-F(u_L).
$$

En sistemas esto es una igualdad vectorial. Seleccionar que choques son admisibles requiere criterios adicionales.

## Admisibilidad de Lax

Para un choque de la familia $j$, el criterio de Lax impone

$$
\lambda_j(u_R)<s<\lambda_j(u_L),
$$

y ademas las demas familias quedan ordenadas alrededor de $s$ de forma compatible.

### Interpretacion

Las caracteristicas de la familia del choque deben entrar a la discontinuidad desde ambos lados. Si salen, la discontinuidad no es la correcta.

## Contactos

Cuando una familia es linealmente degenerada, pueden aparecer discontinuidades de contacto. No se comprimen ni expanden como un choque genuino; transportan informacion a una velocidad caracteristica.

## Interaccion de ondas

La teoria se complica de verdad cuando dos ondas se encuentran.

Posibles efectos:

- una rarefaccion puede atravesar otra con correcciones suaves;
- dos choques pueden producir ondas reflejadas o reforzadas;
- la variacion total puede crecer o decrecer segun la estructura.

El control de estas interacciones es el nucleo de la teoria global BV.

## BV y esquema de Glimm

Para datos con variacion total pequena, una estrategia clasica es:

1. aproximar el dato por funciones a trozos constantes;
2. resolver problemas de Riemann locales;
3. controlar la interaccion de ondas con un funcional tipo Glimm;
4. pasar al limite.

### Moral

La existencia global no nace de formulas cerradas, sino de ensamblar soluciones locales y medir como interactuan.

## Entropia en sistemas

En sistemas, una entropia convexa es una funcion $\eta(u)$ con flujo asociado $q(u)$ tal que las soluciones suaves satisfacen

$$
\eta(u)_t+q(u)_x=0.
$$

Para soluciones debiles se exige una desigualdad de entropia adecuada.

### Dificultad

En sistemas la clasificacion de entropias y la unicidad global son mucho mas sutiles que en el caso escalar.

## Ejemplo lineal: acustica

Un sistema lineal hiperbolico sencillo es

$$
\begin{cases}
\rho_t + v_x = 0,\\
v_t + c^2 \rho_x = 0.
\end{cases}
$$

Su matriz es

$$
A=
\begin{pmatrix}
0 & 1\\
c^2 & 0
\end{pmatrix},
$$

con autovalores $\pm c$. Aparecen dos familias de ondas que viajan a izquierda y derecha.

### Lectura

Este ejemplo muestra la version matricial mas simple del desacoplamiento en modos caracteristicos.

## Ejemplo no lineal: Euler isentropico

De manera esquematica, la gas dinamica compresible produce sistemas hiperbolicos no lineales con:

- campos genuinamente no lineales;
- choques y rarefacciones;
- invarianzas y entropias fisicas.

Son uno de los grandes laboratorios de la teoria de sistemas hiperbolicos.

## Soluciones autosimilares

Para el dato de Riemann se busca

$$
u(t,x)=U(x/t).
$$

Esto reduce la EDP a un problema ordinario con discontinuidades permitidas. La autosimilitud es una forma de codificar que el dato inicial no tiene escala espacial salvo el salto en el origen.

## Que se conserva y que no

En sistemas hiperbolicos:

- la conservacion original sigue siendo el punto de partida;
- la suavidad puede perderse en tiempo finito;
- la energia total puede no bastar para clasificar la dinamica;
- la variacion total y las entropias toman un papel central.

## Conexion con metodos numericos

Los esquemas de Godunov, Roe, HLL y muchos otros nacen precisamente del problema de Riemann.

Esto no es accidental:

- las ondas elementales son la microlocalidad del modelo;
- el esquema numerico intenta respetarlas a nivel discreto.

## Errores frecuentes

- pensar que Rankine-Hugoniot basta para seleccionar la solucion;
- extrapolar resultados escalares al caso vectorial sin mas;
- olvidar que distintas familias de ondas interactuan;
- confundir un sistema lineal diagonalizable con un sistema no lineal general;
- usar caracteristicas como si no hubiera interacciones despues del primer choque.

## Practica recomendada

1. Calcular autovalores y autovectores del sistema lineal de acustica.
2. Explicar la diferencia entre no linealidad genuina y degeneracion lineal.
3. Derivar la condicion de Rankine-Hugoniot para un sistema.
4. Describir cualitativamente como se arma una solucion de Riemann con varias familias.
5. Estudiar por que el control BV es natural para existencia global en 1D.

## Cierre

Los sistemas hiperbolicos y los problemas de Riemann son el paso natural desde leyes escalares hacia modelos fisicos reales. Introducen varias familias de ondas, interacciones y una teoria estructural mucho mas rica. Aqui empieza una parte central de la EDP aplicada a fluidos, trafico, elasticidad y dinamica compresible.
