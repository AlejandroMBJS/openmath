---
title: Principios de Maximo y Metodos de Energia
description: Herramientas estructurales para unicidad, estabilidad y estimaciones a priori en ecuaciones diferenciales parciales.
---

# Principios de Maximo y Metodos de Energia

## Idea central

En una gran parte de la teoria de EDP, la ecuacion explicita es menos importante que las desigualdades que satisface la solucion.

Dos familias de herramientas aparecen una y otra vez:

- principios de maximo, que controlan extremos a partir de la frontera o de los datos iniciales;
- metodos de energia, que convierten la ecuacion en identidades o desigualdades integrales robustas.

Estas tecnicas son el lenguaje basico para probar:

- unicidad;
- estabilidad respecto de los datos;
- dependencia continua;
- regularidad preliminar;
- imposibilidad de ciertos comportamientos.

## Principio de maximo eliptico

Sea $\Omega\subset \mathbb{R}^n$ acotado y sea $u\in C^2(\Omega)\cap C(\overline{\Omega})$ tal que

$$
-\Delta u \ge 0 \quad \text{en } \Omega.
$$

Entonces $u$ no puede alcanzar un maximo estricto en el interior salvo que sea constante.

### Intuicion

Si $u$ tuviera un maximo interior en $x_0$, la matriz Hessiana seria semidefinida negativa y por tanto

$$
\Delta u(x_0)\le 0.
$$

Pero la hipotesis dice $-\Delta u\ge 0$, es decir $\Delta u\le 0$. Para una solucion armonica, ambas restricciones fuerzan rigidez.

### Consecuencia

Para $\Delta u=0$ en $\Omega$,

$$
\max_{\overline{\Omega}} u=\max_{\partial \Omega} u,
\qquad
\min_{\overline{\Omega}} u=\min_{\partial \Omega} u.
$$

De aqui sale inmediatamente la unicidad del problema de Dirichlet.

## Unicidad por principio de maximo

Si $u$ y $v$ satisfacen

$$
\Delta u=\Delta v \quad \text{en } \Omega,
\qquad
u=v \quad \text{en } \partial \Omega,
$$

entonces $w=u-v$ satisface

$$
\Delta w=0 \quad \text{en } \Omega,
\qquad
w=0 \quad \text{en } \partial \Omega.
$$

Aplicando maximo y minimo a $w$ se obtiene $w\equiv 0$.

### Lectura

El argumento es tipico: la diferencia de dos soluciones satisface una ecuacion homogenea, y la herramienta estructural elimina grados de libertad espurios.

## Principio de maximo parabolico

Para la ecuacion del calor

$$
u_t-k\Delta u=0,
$$

el maximo de una solucion en un cilindro espacio-tiempo aparece en la frontera parabolica, formada por:

- el tiempo inicial;
- la frontera espacial para todos los tiempos.

### Moral

La ecuacion del calor no crea nuevos extremos interiores positivos. Difunde y aplana.

## Unicidad para el calor

Si $u$ y $v$ satisfacen el mismo problema del calor con los mismos datos iniciales y de frontera, entonces $w=u-v$ satisface un problema homogeneo. El principio de maximo da

$$
\sup |w| \le 0,
$$

y por tanto $u=v$.

## Metodo de energia en la ecuacion de ondas

Considerese

$$
u_{tt}-c^2\Delta u=0
$$

en un dominio adecuado con frontera fija y datos compatibles.

La energia natural es

$$
E(t)=\frac12 \int_{\Omega}\left(u_t^2+c^2|\nabla u|^2\right)\,dx.
$$

Si multiplicamos la ecuacion por $u_t$ e integramos en $\Omega$, obtenemos

$$
\int_{\Omega} u_{tt}u_t\,dx-c^2\int_{\Omega}\Delta u\,u_t\,dx=0.
$$

Integrando por partes en el segundo termino,

$$
\frac{d}{dt}\frac12\int_{\Omega}u_t^2\,dx
+\frac{d}{dt}\frac{c^2}{2}\int_{\Omega}|\nabla u|^2\,dx
= \text{terminos de frontera}.
$$

Con condiciones de Dirichlet homogeneas o de decaimiento adecuado, los terminos de frontera desaparecen y queda

$$
E'(t)=0.
$$

### Interpretacion

La ecuacion de ondas conserva la energia total: la energia cinetica y la potencial se transforman una en otra, pero la suma permanece.

## Metodo de energia en el calor

Para

$$
u_t-k\Delta u=0,
$$

si multiplicamos por $u$ e integramos:

$$
\int_{\Omega}u_tu\,dx-k\int_{\Omega}\Delta u\,u\,dx=0.
$$

Tras integrar por partes,

$$
\frac{d}{dt}\frac12\int_{\Omega}u^2\,dx
+k\int_{\Omega}|\nabla u|^2\,dx
=0.
$$

Por tanto

$$
\frac{d}{dt}\|u(t)\|_{L^2(\Omega)}^2=-2k\|\nabla u(t)\|_{L^2(\Omega)}^2\le 0.
$$

### Lectura

La norma $L^2$ no aumenta. La disipacion aparece escrita en el termino $\|\nabla u\|_{L^2}^2$.

## A priori y posterioridad

Una estimacion a priori se obtiene antes de conocer explicitamente la solucion. Su valor es que controla cualquier solucion posible.

Ejemplos:

- $\|u\|_{L^\infty}$ controlada por la frontera en problemas elipticos;
- $\|u(t)\|_{L^2}$ decreciente en calor;
- energia constante en ondas.

Estas cotas son la base de:

- metodos de aproximacion;
- paso al limite;
- demostraciones de existencia;
- estabilidad numerica y fisica.

## Ejemplo guiado: unicidad por energia

Sea

$$
u_{tt}-u_{xx}=0
$$

en $(0,L)$ con

$$
u(t,0)=u(t,L)=0,
\qquad
u(0,x)=0,
\qquad
u_t(0,x)=0.
$$

Definimos

$$
E(t)=\frac12\int_0^L\left(u_t^2+u_x^2\right)\,dx.
$$

Del calculo de energia se obtiene $E'(t)=0$. Como $E(0)=0$, resulta $E(t)=0$ para todo $t$. Luego

$$
u_t\equiv 0,
\qquad
u_x\equiv 0.
$$

Con las condiciones de frontera, necesariamente $u\equiv 0$.

### Moral

No hizo falta resolver la ecuacion. Bastaron una cantidad conservada y los datos nulos.

## Desigualdad de Gronwall como metodo de energia

Con frecuencia la energia no satisface una identidad exacta, sino

$$
E'(t)\le C E(t)+F(t).
$$

Entonces Gronwall da

$$
E(t)\le e^{Ct}\left(E(0)+\int_0^t e^{-Cs}F(s)\,ds\right).
$$

Esto aparece en:

- perturbaciones de coeficientes;
- problemas no lineales;
- estabilidad de soluciones debiles;
- paso a limites en ecuaciones evolutivas.

## Que no prueban por si solos

Ni el principio de maximo ni la energia sustituyen toda la teoria.

Todavia hace falta controlar:

- existencia;
- regularidad alta;
- compatibilidad con la frontera;
- comportamiento singular;
- no linealidades fuertes.

Pero dan el primer esqueleto de la teoria.

## Errores frecuentes

- confundir maximo en la clausura con maximo en el interior;
- olvidar terminos de frontera al integrar por partes;
- usar energia equivocada para la ecuacion;
- interpretar una cota $L^2$ como si implicara regularidad clasica;
- pensar que conservacion de energia equivale a ausencia de oscilacion compleja.

## Practica recomendada

1. Probar la unicidad del problema de Dirichlet para $\Delta u=f$ con dato de frontera dado.
2. Derivar la identidad de energia para la ecuacion del calor en un intervalo.
3. Mostrar que la energia de la onda unidimensional se conserva con condiciones de Dirichlet homogeneas.
4. Repetir el calculo de energia con un termino de amortiguamiento $u_{tt}+\gamma u_t-c^2u_{xx}=0$.
5. Verificar como cambian los terminos de frontera bajo condiciones de Neumann.

## Cierre

Principios de maximo y metodos de energia son el lenguaje estructural minimo de la teoria moderna de EDP. Antes de construir soluciones complicadas, dicen que informacion puede entrar, que cantidad se conserva y que magnitud no puede crecer. Ese control es la base de toda teoria posterior, desde soluciones debiles hasta regularidad avanzada.
