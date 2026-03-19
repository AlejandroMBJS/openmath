---
title: Sistema de los Numeros Complejos y Forma Polar
description: Algebra de C, modulo, argumento, forma polar, De Moivre, raices y el papel estructural de la identidad de Euler.
---

# Sistema de los Numeros Complejos y Forma Polar

## El sistema de los numeros complejos

El cuerpo de los numeros complejos se escribe

$$
\mathbb{C}=\{x+iy : x,y\in \mathbb{R},\ i^2=-1\}.
$$

### Lectura

No es solo un artificio para resolver $x^2+1=0$. Es la extension algebraica minima de $\mathbb{R}$ donde todo polinomio no constante acaba teniendo raices suficientes.

## Operaciones con numeros complejos

Si

$$
z=x+iy, \qquad w=u+iv,
$$

entonces

$$
z+w=(x+u)+i(y+v),
$$

$$
zw=(xu-yv)+i(xv+yu).
$$

La multiplicacion ya no es una simple componente a componente. Mezcla parte real e imaginaria.

## Conjugado

El conjugado de

$$
z=x+iy
$$

es

$$
\overline{z}=x-iy.
$$

### Importancia

El conjugado controla:

- modulo;
- division;
- simetrias respecto del eje real;
- relaciones entre funciones reales y complejas.

## Modulo de un numero complejo

El modulo se define por

$$
|z|=\sqrt{x^2+y^2}.
$$

### Lectura

Geometricamente es la distancia de $z$ al origen en el plano complejo.

### Propiedades

$$
|zw|=|z||w|,
\qquad
|z+w|\le |z|+|w|,
\qquad
z\overline{z}=|z|^2.
$$

Estas propiedades convierten a $\mathbb{C}$ en un espacio normado naturalmente compatible con la multiplicacion.

## Division

Si $w\ne 0$, entonces

$$
\frac{z}{w}
=
\frac{z\overline{w}}{|w|^2}.
$$

### Moral

El conjugado convierte division compleja en algebra real sobre el denominador.

## Geometria del plano complejo

Identificar

$$
x+iy \leftrightarrow (x,y)
$$

permite ver $\mathbb{C}$ como el plano euclidiano.

### Importancia

Esta identificacion sera constante en todo el bloque:

- modulos son distancias;
- argumentos son angulos;
- curvas complejas son trayectorias en el plano;
- dominios abiertos en $\mathbb{C}$ son regiones bidimensionales.

## Forma polar de un numero complejo

Si $z\ne 0$, puede escribirse como

$$
z=r(\cos\theta+i\sin\theta),
\qquad
r=|z|.
$$

Aqui $\theta$ es un argumento de $z$.

### Lectura

La forma polar separa escala radial y direccion angular.

## Argumento

El argumento de $z$ no es unico: si $\theta$ es un argumento, entonces

$$
\theta+2\pi k
$$

tambien lo es para cualquier $k\in \mathbb{Z}$.

### Moral

La multivaluacion angular es la primera aparicion seria de un tema central del bloque: ramas y cortes.

## Identidad de Euler

La identidad

$$
e^{i\theta}=\cos\theta+i\sin\theta
$$

permite escribir la forma polar como

$$
z=re^{i\theta}.
$$

### Importancia

Esta formula no es una curiosidad mnemotecnica. Es la sintesis entre:

- exponencial;
- trigonometria;
- rotacion plana;
- algebra compleja.

## Multiplicacion en forma polar

Si

$$
z=r e^{i\theta}, \qquad w=\rho e^{i\varphi},
$$

entonces

$$
zw=(r\rho)e^{i(\theta+\varphi)}.
$$

### Lectura

Multiplicar complejos significa:

- multiplicar modulos;
- sumar argumentos.

Esta es la razon geometrica por la que los complejos modelan dilataciones y rotaciones.

## Teorema de Moivre

Para $n\in \mathbb{Z}$,

$$
(\cos\theta+i\sin\theta)^n
=
\cos(n\theta)+i\sin(n\theta).
$$

Equivalentemente,

$$
(re^{i\theta})^n=r^n e^{in\theta}.
$$

### Moral

La potencia compleja es trivial en forma polar y complicada en coordenadas cartesianas. Eso explica por que la forma polar es el lenguaje correcto para potencias y raices.

## Raices n-esimas de numeros complejos

Resolver

$$
w^n=z
$$

con

$$
z=r e^{i\theta}
$$

significa buscar

$$
w=r^{1/n} e^{i(\theta+2\pi k)/n},
\qquad
k=0,\dots,n-1.
$$

### Importancia

Cada numero complejo no nulo tiene exactamente $n$ raices n-esimas distintas.

## Calcular raices n-esimas de complejos

Geometricamente, las $n$ raices de $z$:

- tienen el mismo modulo $r^{1/n}$;
- estan igualmente espaciadas en un circulo;
- forman un poligono regular.

### Lectura

La estructura algebraica se vuelve inmediatamente visible en el plano.

## Ejemplo guiado: raices de la unidad

Las soluciones de

$$
w^n=1
$$

son

$$
w_k=e^{2\pi i k/n},
\qquad
k=0,\dots,n-1.
$$

### Moral

Las raices de la unidad son una base geometrica de la periodicidad compleja y reaparecen en Fourier discreto, grupos ciclicos y teoria algebraica.

## Modulo y topologia

La desigualdad triangular

$$
|z-w|<r
$$

define discos abiertos en $\mathbb{C}$. Estos seran los conjuntos basicos de apertura, limite y analiticidad.

### Importancia

La topologia de $\mathbb{C}$ viene de la metrica euclidiana del plano, no de una estructura exotica nueva.

## Algebra vs orden

A diferencia de $\mathbb{R}$, el cuerpo $\mathbb{C}$ no admite un orden compatible con las operaciones de cuerpo.

### Moral

En variable compleja se pierde el orden real, pero se gana una estructura geomatrica y algebraica mucho mas rigida.

## Ejemplo guiado: rotacion

Multiplicar por

$$
e^{i\alpha}
$$

rota el plano un angulo $\alpha$ sin cambiar distancias.

### Lectura

Los complejos no solo representan puntos; tambien representan transformaciones lineales del plano.

## Puente con el resto del bloque

Todo lo que sigue depende de esta base:

- el logaritmo complejo nace de invertir localmente $e^z$;
- las ramas aparecen porque el argumento no es unico;
- la derivada compleja estara fuertemente ligada a rotaciones y dilataciones;
- las integrales de contorno viven sobre curvas del plano complejo.

## Errores frecuentes

- olvidar que el argumento es multivaluado;
- creer que la forma polar es unica sin fijar rama;
- tratar el conjugado como si fuera complejo-lineal;
- usar raices n-esimas sin generar todas las soluciones;
- confundir modulo con parte real o con argumento.

## Practica recomendada

1. Pasar varios complejos entre forma cartesiana y polar.
2. Calcular potencias y raices usando De Moivre.
3. Describir geometricamente la multiplicacion por un complejo fijo.
4. Estudiar las raices de la unidad como vertices de un poligono regular.
5. Verificar las propiedades multiplicativas del modulo.

## Cierre

La forma polar y la identidad de Euler son la verdadera puerta de entrada a variable compleja. Desde aqui el plano complejo deja de ser un par ordenado y se convierte en un espacio donde algebra y geometria coinciden de forma extraordinariamente eficiente.
