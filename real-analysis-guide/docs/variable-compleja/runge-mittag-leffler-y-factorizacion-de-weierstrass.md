---
title: Runge, Mittag-Leffler y Factorizacion de Weierstrass
description: Aproximacion holomorfa, construccion de meromorfas con partes principales prescritas y factorizacion entera por ceros.
---

# Runge, Mittag-Leffler y Factorizacion de Weierstrass

## Panorama

Despues de entender singularidades y continuation analitica, aparece una pregunta global: dado un comportamiento local prescrito, que funciones holomorfas o meromorfas pueden construirse?

Tres teoremas responden a esto desde angulos complementarios:

- Runge controla aproximacion holomorfa;
- Mittag-Leffler prescribe partes principales;
- Weierstrass prescribe ceros de funciones enteras.

## Runge: idea basica

Sea $K\subset \Omega$ compacto y supongase que $\Omega\setminus K$ no tiene componentes compactas. Entonces toda funcion holomorfa en un entorno de $K$ puede aproximarse uniformemente en $K$ por funciones racionales con polos fuera de $\Omega$.

### Caso entero

Si $\Omega=\mathbb{C}$, la aproximacion puede hacerse por polinomios.

## Lectura de Runge

La holomorfia global tiene enorme flexibilidad mientras la topologia del complemento no imponga "agujeros atrapados".

## Ejemplo simple

En el disco cerrado $\overline{D(0,1)}$, la funcion $e^z$ se aproxima uniformemente por sus polinomios de Taylor.

### Comentario

Aqui no hace falta Runge en toda su fuerza, pero el fenomeno ya esta presente.

## Obstruccion topologica

Si el compacto rodea un agujero, las racionales sin polos en el agujero pueden no capturar el comportamiento correcto.

### Moral

La complejidad de la aproximacion holomorfa esta dictada por la topologia del complemento.

## Formulacion operativa de Mittag-Leffler

Dado un conjunto discreto $\{a_n\}$ y en cada $a_n$ una parte principal finita

$$
P_n(z)=\sum_{k=1}^{m_n} \frac{c_{n,k}}{(z-a_n)^k},
$$

existe una funcion meromorfa en el dominio cuya parte principal en cada $a_n$ es exactamente $P_n$.

## Lectura

Mittag-Leffler dice que las singularidades polares pueden ensamblarse libremente, salvo por la necesidad de ajustar convergencia mediante correcciones holomorfas.

## Idea de construccion

La suma formal $\sum P_n(z)$ suele divergir. Se resta en cada termino un polinomio de truncacion apropiado para forzar convergencia normal en compactos fuera de los polos.

### Importancia

La correccion no cambia la parte principal, pero si controla la cola global.

## Ejemplo clasico

La funcion

$$
\pi \cot(\pi z)
$$

tiene polos simples en los enteros con residuo $1$.

### Interpretacion

Es una solucion explicita del problema de Mittag-Leffler para la red $\mathbb{Z}$ con partes principales $1/(z-n)$.

## De los polos a los ceros: Weierstrass

Sea $\{a_n\}$ un conjunto discreto en $\mathbb{C}\setminus\{0\}$ sin punto de acumulacion finito. Entonces existe una funcion entera cuyos ceros, con multiplicidades prescritas, son exactamente los $a_n$.

## Productos primarios

La dificultad es que el producto ingenuo

$$
\prod_n \left(1-\frac{z}{a_n}\right)
$$

puede divergir. Weierstrass introduce factores elementales

$$
E_p(w)=(1-w)\exp\left(w+\frac{w^2}{2}+\cdots+\frac{w^p}{p}\right)
$$

que mejoran la convergencia sin cambiar el cero en $w=1$.

## Factorizacion canonica

Toda entera $f$ con ceros $\{a_n\}$ puede escribirse, de forma esquematica, como

$$
f(z)=e^{g(z)} z^m \prod_n E_{p_n}\!\left(\frac{z}{a_n}\right),
$$

donde $g$ es entera y $m$ es la multiplicidad del cero en $0$.

## Significado estructural

Los ceros determinan la parte multiplicativa esencial de una entera; el factor exponencial recoge la libertad restante.

## Ejemplo clasico

La identidad

$$
\sin(\pi z)=\pi z \prod_{n\neq 0}\left(1-\frac{z}{n}\right)e^{z/n}
$$

es una version concreta de la factorizacion de Weierstrass.

### Lectura

La posicion periodica de los ceros reconstruye la funcion casi por completo.

## Orden de crecimiento

La eleccion de los factores $E_{p_n}$ esta ligada al crecimiento de la funcion. Esta relacion lleva a la nocion de orden y genero de una entera.

### Idea

Cuanto mas rapido crecen los ceros, mas delicada es la convergencia del producto.

## Relacion entre Mittag-Leffler y residuos

Construir una meromorfa con polos prescritos es dual a reconstruir una funcion a partir de sus residuos y partes principales.

### Lectura

Una controla "como sopla" la funcion cerca de sus polos; la otra, "donde se anula" globalmente.

## Runge y aproximacion racional

Runge puede usarse para demostrar versiones de Mittag-Leffler y Weierstrass al aproximar localmente correcciones que peguen los datos deseados.

## Ejemplo guiado: construir una meromorfa con polos simples en los enteros

Se quiere una funcion con polos simples en $\mathbb{Z}$ y residuo $1$.

La suma $\sum_{n\in\mathbb{Z}} 1/(z-n)$ diverge. Pero la combinacion simetrica

$$
\frac{1}{z}+\sum_{n\ge 1}\left(\frac{1}{z-n}+\frac{1}{z+n}\right)
$$

converge normalmente en compactos fuera de los enteros y produce una meromorfa; en efecto es $\pi\cot(\pi z)$.

## Ejemplo guiado: construir una entera con ceros en los enteros positivos

La sucesion $\{1,2,3,\dots\}$ no tiene acumulacion finita. Weierstrass garantiza una entera con esos ceros.

Un candidato formal es

$$
\prod_{n=1}^{\infty} \left(1-\frac{z}{n}\right)e^{z/n},
$$

que converge gracias al factor exponencial.

## Unicidad y no unicidad

Las construcciones de Mittag-Leffler y Weierstrass no son unicas.

- Dos soluciones de Mittag-Leffler difieren en una holomorfa.
- Dos enteras con los mismos ceros difieren por un factor $e^g$ con $g$ entera.

## Aplicaciones

- construccion de funciones especiales;
- representaciones producto de funciones enteras;
- espectro de operadores y determinantes regulares;
- interpolacion compleja y aproximacion racional.

## Advertencias

- Prescribir arbitrariamente polos o ceros en un conjunto con punto de acumulacion interior es imposible.
- La topologia del dominio importa en Runge.
- Los productos infinitos requieren convergencia normal en compactos, no solo convergencia puntual.

## Ejercicios para trabajar

1. Probar que $1/\Gamma(z)$ es entera y tiene ceros simples en los enteros no positivos.
2. Construir una meromorfa con polos dobles en $\mathbb{Z}$ y parte principal $1/(z-n)^2$.
3. Mostrar que una entera sin ceros admite un logaritmo entero y por tanto es de la forma $e^g$.

## Cierre

Runge, Mittag-Leffler y Weierstrass forman una triada central: aproximar, prescribir polos y prescribir ceros. Juntos muestran que la teoria global de funciones holomorfas es a la vez rigida y sorprendentemente constructiva.
