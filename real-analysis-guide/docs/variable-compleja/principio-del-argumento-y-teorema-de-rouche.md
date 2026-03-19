---
title: Principio del Argumento y Teorema de Rouche
description: Conteo de ceros y polos mediante integrales de contorno y comparacion robusta de funciones holomorfas.
---

# Principio del Argumento y Teorema de Rouche

## La idea de contar con integrales

Una de las aplicaciones mas finas de la teoria compleja es transformar el conteo de ceros y polos en integrales de contorno.

La pieza central es

$$
\frac{f'(z)}{f(z)}.
$$

### Lectura

Cada cero y cada polo deja una huella simple en el logaritmo derivado. Integrar esa huella permite contar multiplicidades.

## Principio del argumento

Si $f$ es meromorfa y no tiene ceros ni polos sobre un contorno cerrado simple $\gamma$, entonces

$$
\frac{1}{2\pi i}\oint_{\gamma}\frac{f'(z)}{f(z)}\,dz
=
N-P,
$$

donde:

- $N$ es el numero de ceros dentro de $\gamma$, contados con multiplicidad;
- $P$ es el numero de polos dentro de $\gamma$, contados con multiplicidad.

### Importancia

El teorema convierte una pregunta algebraica local en una integral global.

## Interpretacion geometrica

La cantidad $N-P$ coincide con el numero de vueltas que la curva $f(\gamma)$ da alrededor del origen.

### Moral

Contar ceros es medir winding number en la imagen.

## Multiplicidad y logaritmo derivado

Si cerca de $z_0$,

$$
f(z)=(z-z_0)^m g(z),
\qquad g(z_0)\ne 0,
$$

entonces

$$
\frac{f'(z)}{f(z)}=\frac{m}{z-z_0}+\frac{g'(z)}{g(z)}.
$$

### Lectura

El logaritmo derivado tiene residuo exactamente igual a la multiplicidad del cero.

## Casos particulares

Si $f$ es holomorfa y no tiene polos en el interior, entonces

$$
\frac{1}{2\pi i}\oint_{\gamma}\frac{f'}{f}\,dz
=
N.
$$

Si $f$ es racional, el principio del argumento relaciona directamente ceros y polos con la geometria de la imagen del contorno.

## Teorema de Rouche

Si $f$ y $g$ son holomorfas en el interior y sobre un contorno cerrado simple $\gamma$, y

$$
|g(z)|<|f(z)|
\qquad
\text{sobre } \gamma,
$$

entonces $f$ y $f+g$ tienen el mismo numero de ceros dentro de $\gamma$, con multiplicidad.

### Moral

Una perturbacion estrictamente menor en la frontera no cambia el conteo de ceros del interior.

## Por que Rouche es poderoso

Permite contar ceros de una funcion complicada comparandola con otra mas simple cuya localizacion de ceros ya se entiende.

### Lectura

No hace falta resolver la ecuacion exactamente. Basta dominar cual termino manda sobre el contorno.

## Ejemplo guiado: polinomio perturbado

Considerese

$$
p(z)=z^n + a_{n-1}z^{n-1}+\cdots+a_0.
$$

Sobre un circulo suficientemente grande,

$$
|a_{n-1}z^{n-1}+\cdots+a_0|<|z^n|.
$$

Por Rouche, $p$ y $z^n$ tienen el mismo numero de ceros dentro del circulo: exactamente $n$.

### Moral

Esta es una forma elegante del teorema fundamental del algebra.

## Version local cerca del borde

Rouche no solo sirve para circulos grandes. Tambien permite:

- aislar raices en regiones concretas;
- comparar funciones cerca de dominios pequenos;
- estudiar estabilidad de ceros bajo perturbacion.

## Corolario de Hurwitz, idea

Si una sucesion de funciones holomorfas sin ceros converge uniformemente en compactos a una funcion no identicamente nula, la funcion limite tampoco introduce ceros arbitrariamente.

### Importancia

Esto es otra manifestacion de la rigidez del conteo de ceros.

## Imagen de contornos

El principio del argumento dice que al recorrer $\gamma$, la variacion del argumento de $f(z)$ satisface

$$
\Delta_{\gamma}\arg f = 2\pi (N-P).
$$

### Lectura

El teorema merece su nombre literalmente: integra el cambio total de argumento.

## Ejemplo guiado: z menos a

Para

$$
f(z)=z-a,
$$

si el contorno rodea a $a$, entonces la imagen rodea al origen una vez. Si no lo rodea, no lo hace. El principio del argumento recupera exactamente ese conteo elemental.

## Rouche y localizacion de raices

Muchas pruebas de localizacion de raices usan:

- contornos circulares;
- comparacion entre el termino dominante y la perturbacion;
- conclusion de que el numero de ceros dentro de cada region es estable.

## Conexion con residuos

El principio del argumento es una aplicacion directa del teorema del residuo al logaritmo derivado.

### Moral

Residuo y conteo de ceros no son teorias separadas: son dos caras del mismo hecho local.

## Conexion con conformalidad

La variacion de argumento y el winding number tambien enlazan con:

- mapas conformes;
- grados topologicos;
- indice de curvas.

## Errores frecuentes

- olvidar que no puede haber ceros ni polos sobre el contorno;
- usar Rouche sin una desigualdad estricta en la frontera;
- contar ceros sin multiplicidad;
- confundir principio del argumento con simple criterio visual de vueltas;
- no distinguir entre ceros de $f$ y de $f+g$ al aplicar Rouche.

## Practica recomendada

1. Aplicar Rouche para contar ceros de polinomios en discos grandes.
2. Deducir el principio del argumento desde el teorema del residuo.
3. Relacionar variacion de argumento con winding number.
4. Estudiar estabilidad de ceros bajo perturbaciones pequenas.
5. Usar el principio del argumento para contar polos y ceros de funciones racionales.

## Cierre

El principio del argumento y Rouche muestran una de las fuerzas mas sorprendentes de variable compleja: el numero de ceros de una funcion puede leerse a partir de una integral de borde o de una comparacion en la frontera. Es una teoria de conteo global profundamente geometrica y extraordinariamente eficaz.
