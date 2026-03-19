---
title: Funciones Elementales, Logaritmo y Ramificacion
description: Exponencial compleja, logaritmo multivaluado, potencias complejas, ramas y cortes en el plano complejo.
---

# Funciones Elementales, Logaritmo y Ramificacion

## Funciones elementales de variable compleja

Las funciones elementales reales se extienden a $\mathbb{C}$, pero su comportamiento cambia de forma radical.

Ejemplos centrales:

- exponencial;
- seno y coseno;
- funciones hiperbolicas;
- potencias complejas;
- logaritmo.

### Moral

En variable compleja, "extender una formula" no basta. Hay que mirar periodicidad, inyectividad, ramas y singularidades.

## Exponencial compleja

Se define por la serie

$$
e^z=\sum_{n=0}^{\infty}\frac{z^n}{n!}.
$$

Si

$$
z=x+iy,
$$

entonces

$$
e^z=e^x(\cos y+i\sin y).
$$

### Consecuencias

- nunca se anula;
- es periodica en direccion imaginaria:

$$
e^{z+2\pi i}=e^z;
$$

- transforma sumas en productos.

## Seno y coseno complejos

Se definen por series o por exponenciales:

$$
\cos z = \frac{e^{iz}+e^{-iz}}{2},
\qquad
\sin z = \frac{e^{iz}-e^{-iz}}{2i}.
$$

### Lectura

La trigonometria compleja es una reorganizacion de la exponencial, no una teoria separada.

## Logaritmo complejo

Queremos invertir la exponencial:

$$
w=e^z.
$$

Si

$$
w=re^{i\theta},
$$

entonces formalmente

$$
z=\log r + i(\theta+2\pi k),
\qquad
k\in \mathbb{Z}.
$$

Por tanto,

$$
\log w = \log|w| + i\arg(w)
$$

es multivaluado.

### Importancia

El logaritmo complejo no es una funcion ordinaria global en $\mathbb{C}\setminus\{0\}$ si se exige unicidad de valor.

## Calculo del logaritmo complejo

Si se elige una rama del argumento, por ejemplo

$$
\Arg z \in (-\pi,\pi),
$$

se obtiene la rama principal:

$$
\Log z = \log|z| + i\Arg z.
$$

### Moral

Una rama es una eleccion coherente local o regional de argumentos.

## Puntos y lineas de ramificacion

El punto $0$ es el punto de ramificacion natural del logaritmo. Para hacer una rama univaluada hay que excluir una curva que impida dar una vuelta completa alrededor del origen.

La eleccion clasica es el corte

$$
(-\infty,0].
$$

### Lectura

El corte no "arregla" una singularidad analitica local. Sirve para eliminar la obstruccion topologica global que impide definir una rama unica.

## Potencias complejas

Si $\alpha\in \mathbb{C}$ y $z\ne 0$, formalmente

$$
z^\alpha = e^{\alpha \log z}.
$$

### Advertencia

Como el logaritmo es multivaluado, tambien lo son las potencias complejas salvo que se fije una rama.

## Ejemplo guiado: raiz cuadrada

La ecuacion

$$
w^2=z
$$

define una funcion bivaluada. Para obtener una rama univaluada de $\sqrt{z}$ hay que elegir un corte, por ejemplo el semieje real negativo.

### Moral

Las raices son el primer ejemplo elemental de superficie de varias hojas.

## Inyectividad local y global

La exponencial es localmente invertible porque su derivada nunca se anula, pero no es globalmente inyectiva por periodicidad:

$$
e^{z+2\pi i k}=e^z.
$$

### Importancia

Esta tension entre inversa local y obstruccion global reaparecera en toda la teoria de ramas y continuacion analitica.

## Superficies de Riemann, idea preliminar

La multivaluacion de logaritmo y raices puede resolverse conceptualmente sustituyendo el dominio plano por una superficie de varias hojas donde la funcion se vuelve univaluada.

### Lectura

Aunque la guia aun no entre en superficies de Riemann en profundidad, esta es la intuicion correcta para entender ramas.

## Ejemplo guiado: logaritmo principal

Si

$$
z=-1,
$$

la rama principal da

$$
\Log(-1)=i\pi.
$$

Pero el logaritmo completo incluye

$$
i(\pi+2\pi k).
$$

### Moral

La rama principal es una eleccion util, no la verdad total del logaritmo complejo.

## Singularidades y cortes

El corte de rama no debe confundirse con una singularidad aislada usual:

- un polo o una singularidad esencial tienen comportamiento local propio;
- un corte de rama surge de multivaluacion global.

## Funciones trigonomatricas inversas

Las inversas complejas de seno, coseno y otras funciones elementales tambien requieren logaritmos y raices, y por tanto heredan:

- ramas;
- puntos de ramificacion;
- cortes.

### Moral

La multivaluacion no es una patologia de un ejemplo concreto; es una caracteristica estructural del calculo complejo.

## Conexion con integrales complejas

La eleccion de ramas influye directamente en:

- integrales de contorno;
- deformaciones de camino;
- calculo de integrales reales con cortes de rama.

## Conexion con Fourier y Laplace

Funciones como

$$
\log z, \qquad z^\alpha
$$

aparecen en analisis asintotico, transformadas y funciones especiales. Entender sus ramas no es opcional si se quiere usar el plano complejo con rigor.

## Errores frecuentes

- tratar $\log z$ como funcion univaluada global en $\mathbb{C}\setminus\{0\}$;
- olvidar el papel del corte al usar la rama principal;
- escribir $z^\alpha$ sin fijar rama cuando importa la unicidad;
- confundir punto de ramificacion con polo;
- pensar que la eleccion del corte es siempre irrelevante.

## Practica recomendada

1. Calcular valores del logaritmo multivaluado para varios complejos.
2. Construir la rama principal de la raiz cuadrada y del logaritmo.
3. Comparar dos elecciones distintas de corte de rama.
4. Estudiar como la periodicidad de la exponencial destruye inyectividad global.
5. Relacionar ramas con vueltas alrededor del origen.

## Cierre

Logaritmo, potencias y ramas son el primer punto donde variable compleja deja de parecer una prolongacion ingenua del calculo real. Aqui aparece ya la topologia global del plano perforado y la necesidad de elegir dominios, cortes y hojas con cuidado.
