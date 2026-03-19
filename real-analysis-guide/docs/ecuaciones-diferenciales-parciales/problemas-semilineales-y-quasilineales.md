---
title: Problemas Semilineales y Quasilineales
description: Paso de EDP lineales a no lineales, con punto fijo, sub y supersoluciones, blow-up y perdida de regularidad.
---

# Problemas Semilineales y Quasilineales

## Donde cambia la dificultad

En una EDP lineal, la ecuacion es compatible con superposicion y muchas herramientas espectrales. Al entrar en no linealidad, incluso suave, cambian hechos estructurales:

- desaparece la superposicion;
- el dato puede producir blow-up en tiempo finito;
- la regularidad deja de propagarse de manera simple;
- aparecen multiples soluciones o ninguna.

Dos escalones basicos son:

- semilineal: la parte de mayor orden sigue siendo lineal;
- quasilineal: los coeficientes de mayor orden ya dependen de la solucion o de su gradiente.

## Semilineal

Ejemplos tipicos:

$$
-\Delta u = f(u),
\qquad
u_t-\Delta u = g(u),
\qquad
iu_t+\Delta u = \lambda |u|^{p-1}u.
$$

La parte principal sigue siendo un operador lineal conocido. La no linealidad aparece como forzamiento dependiente de la propia solucion.

### Ventaja

Todavia puede aprovecharse la teoria lineal como caja de herramientas base.

## Quasilineal

Ejemplos:

$$
u_t+a(u)u_x=0,
\qquad
-\nabla\cdot(A(x,u,\nabla u)\nabla u)=f,
\qquad
\partial_t u-\nabla\cdot\left(|\nabla u|^{p-2}\nabla u\right)=0.
$$

Aqui la parte principal ya depende de la solucion. El operador cambia mientras buscamos la propia solucion.

### Consecuencia

La regularidad y el bien planteamiento pasan a depender de estimaciones a priori mucho mas delicadas.

## Metodo de punto fijo

En muchos problemas semilineales, una idea basica es reescribir la ecuacion como

$$
u=\mathcal{T}(u),
$$

donde $\mathcal{T}$ combina el propagador lineal con la no linealidad.

Por ejemplo, para

$$
u_t-\Delta u = g(u),
\qquad
u(0)=u_0,
$$

la formula de Duhamel sugiere

$$
u(t)=e^{t\Delta}u_0+\int_0^t e^{(t-s)\Delta}g(u(s))\,ds.
$$

Si el operador de la derecha es contractivo en un espacio bien elegido, Banach da existencia y unicidad local.

## Existencia local vs global

En no lineales, una distincion decisiva es:

- existencia local: la solucion existe en algun intervalo corto;
- existencia global: la solucion existe para todo tiempo.

La existencia local suele salir de contraccion o iteracion de Picard. La global exige cotas a priori uniformes.

## Blow-up

Una solucion puede dejar de existir globalmente porque alguna norma relevante se hace infinita en tiempo finito.

Mecanismos frecuentes:

- reaccion demasiado fuerte en ecuaciones reaccion-difusion;
- enfocamiento en Schrodinger no lineal;
- choque en leyes de conservacion;
- degeneracion de la parabolicidad o de la elipticidad.

### Lectura

La no linealidad puede concentrar informacion en vez de dispersarla o difundirla.

## Sub y supersoluciones

En muchos problemas elipticos y parabolicos,

$$
Lu = N(u)
$$

puede estudiarse buscando funciones $\underline{u}$ y $\overline{u}$ tales que

$$
L\underline{u}\le N(\underline{u}),
\qquad
L\overline{u}\ge N(\overline{u}),
\qquad
\underline{u}\le \overline{u}.
$$

Entonces un proceso iterativo puede construir una solucion intermedia.

### Importancia

Este metodo evita formulas explicitas y se apoya en orden, compacidad y principio de maximo.

## Reaccion-difusion

Una familia modelo es

$$
u_t-\Delta u = f(u).
$$

Segun la forma de $f$ pueden aparecer:

- extincion;
- convergencia a equilibrio;
- patrones estacionarios;
- blow-up.

El termino lineal difunde, pero la reaccion puede amplificar o saturar.

## Ecuaciones elipticas semilineales

Para

$$
-\Delta u = |u|^{p-1}u
$$

entran en juego:

- formulacion variacional;
- embeddings de Sobolev;
- exponentes criticos;
- posible perdida de compacidad.

Aqui aparece una de las primeras barreras realmente serias de la teoria moderna: el exponente critico de Sobolev.

## Exponentes criticos

En dimension $n\ge 3$, el embedding

$$
H_0^1(\Omega)\hookrightarrow L^{2^*}(\Omega),
\qquad
2^*=\frac{2n}{n-2},
$$

marca una frontera.

- por debajo del exponente critico, la compacidad ayuda;
- en el critico, la compacidad puede fallar;
- por encima, la teoria cambia sustancialmente.

### Moral

La no linealidad no se mide solo por su forma algebraica, sino por como interactua con la escala del espacio.

## Burgers como quasilineal canonico

La ecuacion

$$
u_t+uu_x=0
$$

es el ejemplo mas simple de quasilineal hiperbolica.

Mientras $u$ sea suave, las caracteristicas obedecen

$$
\frac{dx}{dt}=u,
\qquad
\frac{du}{dt}=0.
$$

Como la velocidad depende del propio estado, las caracteristicas pueden cruzarse y formar choque.

## p-Laplaciano

El operador

$$
\Delta_p u=\nabla\cdot\left(|\nabla u|^{p-2}\nabla u\right)
$$

es un prototipo quasilineal eliptico.

Aparece en:

- medios no newtonianos;
- problemas variacionales no cuadraticos;
- difusion no lineal.

Su teoria comparte ideas con Poisson, pero cambia el espacio natural y la coercividad ya no es puramente lineal.

## Linearizacion

Una tecnica basica para estudiar una solucion $u$ es linealizar alrededor de ella:

$$
u = u_* + v.
$$

La ecuacion para $v$ revela estabilidad local o inestabilidad.

Esto conecta EDP no lineales con:

- analisis espectral;
- semigrupos;
- bifurcaciones;
- metodo de Newton.

## Ejemplo guiado: Duhamel semilineal

Para

$$
u_t-\Delta u = u^3,
\qquad
u(0)=u_0,
$$

la formulacion integral es

$$
u(t)=e^{t\Delta}u_0+\int_0^t e^{(t-s)\Delta}u(s)^3\,ds.
$$

Si el dato inicial es pequeno en el espacio correcto y el semigrupo calor ofrece suficiente suavizado, puede cerrarse una contraccion local, e incluso global en regimen subcritico.

## Ejemplo guiado: sub y supersoluciones

En

$$
-\Delta u = \lambda e^u
$$

con Dirichlet homogeneo, una supersolucion adecuada puede construirse usando una solucion lineal grande, mientras que $0$ puede servir como subsolucion si el lado derecho lo permite. Bajo orden apropiado, se obtiene una solucion por monotonia.

## Que herramientas cambian

De la teoria lineal sobreviven:

- energia;
- maximo;
- Fourier o semigrupos en algunos casos;
- formulaciones debiles.

Pero hacen falta ingredientes nuevos:

- compacidad no lineal;
- desigualdades funcionales precisas;
- monotonia;
- puntos fijos;
- estimaciones de blow-up;
- criterios de entropia o de seleccion.

## Errores frecuentes

- llamar semilineal a una ecuacion donde la parte principal ya depende de $u$;
- asumir globalidad solo porque existe una teoria local;
- ignorar el papel del exponente critico;
- pensar que toda no linealidad pequena en apariencia es perturbativa;
- olvidar que el choque destruye la solucion clasica aunque la ecuacion parezca simple.

## Practica recomendada

1. Reescribir una reaccion-difusion semilineal mediante Duhamel.
2. Clasificar como lineal, semilineal o quasilineal varios modelos prototipo.
3. Explicar por que Burgers genera choque mientras el transporte lineal no.
4. Estudiar el papel del embedding de Sobolev en una ecuacion eliptica con potencia.
5. Construir un esquema de sub y supersoluciones para una eliptica semilineal simple.

## Cierre

Las EDP semilineales y quasilineales son el primer territorio donde la teoria deja de ser una extension controlada del caso lineal y se vuelve genuinamente nueva. Aqui aparecen blow-up, exponentes criticos, choques, multiples soluciones y los metodos que dominan gran parte del analisis contemporaneo.
