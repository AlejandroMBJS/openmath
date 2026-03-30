---
title: Sustitucion y sumas dobles
description: Tecnicas de sustitucion en integrales multiples, cambios de variables y aplicaciones.
---

# Sustitucion y sumas dobles

## Motivacion e intuicion

La sustitucion en integrales multiples es similar a la de una variable, pero requiere transformar tanto el integrando como la region de integracion. El Jacobiano aparece como factor de correccion.

## Formula de cambio de variables

Para una transformacion $T: (u,v) \to (x,y)$:

$$\iint_R f(x,y)\, dx\, dy = \iint_S f(x(u,v), y(u,v)) \left|\frac{\partial(x,y)}{\partial(u,v)}\right|\, du\, dv$$

## Jacobiano en 2D

$$\frac{\partial(x,y)}{\partial(u,v)} = \begin{vmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{vmatrix} = \frac{\partial x}{\partial u}\frac{\partial y}{\partial v} - \frac{\partial x}{\partial v}\frac{\partial y}{\partial u}$$

## Jacobiano en 3D

$$\frac{\partial(x,y,z)}{\partial(u,v,w)} = \det\begin{pmatrix} \partial x/\partial u & \partial x/\partial v & \partial x/\partial w \\ \partial y/\partial u & \partial y/\partial v & \partial y/\partial w \\ \partial z/\partial u & \partial z/\partial v & \partial z/\partial w \end{pmatrix}$$

## Ejemplos de cambios comunes

### Coordenadas polares

$$x = r\cos\theta, \quad y = r\sin\theta$$

$$J = r$$

### Coordenadas esfericas

$$x = \rho\sin\phi\cos\theta, \quad y = \rho\sin\phi\sin\theta, \quad z = \rho\cos\phi$$

$$J = \rho^2\sin\phi$$

### Coordenadas cilindricas

$$x = r\cos\theta, \quad y = r\sin\theta, \quad z = z$$

$$J = r$$

## Sumas dobles con cambio de variables

Para integrales de la forma:

$$\iint_R f(x,y)\, dx\, dy$$

Hacemos $x = x(u,v)$, $y = y(u,v)$ y aplicamos la formula.

## Region de integracion

Es crucial transformar correctamente la region $R$ a la region $S$ en las nuevas coordenadas.

## Ejercicios

### Ejercicio 1

Calcule el Jacobiano de coordenadas polares.

### Ejercicio 2

Evalua $\iint_R xy\, dx\, dy$ en el primer cuadrante del circulo unidad usando polares.

### Ejercicio 3

Calcule el Jacobiano de coordenadas esfericas.

### Ejercicio 4

Evalua $\iint_R 1\, dx\, dy$ donde $R$ es el disco $x^2 + y^2 \leq 1$.

### Ejercicio 5

Calcule el Jacobiano de $x = u + v$, $y = u - v$.

### Ejercicio 6

Evalua $\iint_R e^{-x^2-y^2}\, dx\, dy$ en todo el plano usando polares.

### Ejercicio 7

Calcule el Jacobiano de coordenadas cilindricas.

### Ejercicio 8

Evalua $\iiint_V 1\, dV$ donde $V$ es la esfera unitaria.

### Ejercicio 9

Calcule $\frac{\partial(x,y)}{\partial(u,v)}$ para $x = u^2$, $y = v^2$.

### Ejercicio 10

Evalua $\iint_R (x+y)\, dx\, dy$ en el triangulo con vertices $(0,0), (1,0), (0,1)$.

### Ejercicio 11

Calcule el volumen del sólido delimitado por $z = x^2 + y^2$ y $z = 4$ usando coordenadas cilíndricas.

### Ejercicio 12

Evalúe $\iint_R \sqrt{x^2 + y^2}\, dx\, dy$ donde $R$ es el disco unitario.

### Ejercicio 13

Calcule el Jacobiano de la transformación a coordenadas elípticas: $x = a r \cos\theta$, $y = b r \sin\theta$.

### Ejercicio 14

Evalúe $\iiint_V (x^2 + y^2 + z^2) \, dV$ donde $V$ es la esfera de radio $R$.

### Ejercicio 15

Calcule el área de la superficie $z = xy$ sobre el disco unitario $x^2 + y^2 \leq 1$.

## Soluciones

### Solucion 1

$J = r$

### Solucion 2

$\int_0^{\pi/2}\int_0^1 (r\cos\theta)(r\sin\theta) r\, dr\, d\theta = \frac{1}{8}$

### Solucion 3

$J = \rho^2\sin\phi$

### Solucion 4

$\int_0^{2\pi}\int_0^1 r\, dr\, d\theta = \pi$

### Solucion 5

$J = -2$

### Solucion 6

$\int_0^{2\pi}\int_0^\infty e^{-r^2} r\, dr\, d\theta = \pi$

### Solucion 7

$J = r$

### Solucion 8

$\int_0^{2\pi}\int_0^\pi\int_0^1 \rho^2\sin\phi\, d\rho\, d\phi\, d\theta = \frac{4\pi}{3}$

### Solucion 9

$J = 4uv$

### Solucion 10

$\int_0^1\int_0^{1-x} (x+y)\, dy\, dx = \frac{1}{3}$

### Solucion 11

$\int_0^{2\pi}\int_0^2\int_0^{r^2} r\, dz\, dr\, d\theta = 8\pi$

### Solucion 12

$\int_0^{2\pi}\int_0^1 r \cdot r\, dr\, d\theta = \frac{2\pi}{3}$

### Solucion 13

$J = abr$

### Solucion 14

$\int_0^{2\pi}\int_0^\pi\int_0^R \rho^4 \sin\phi\, d\rho\, d\phi\, d\theta = \frac{4\pi R^5}{5}$

### Solucion 15

$\iint_D \sqrt{1 + x^2 + y^2}\, dx\, dy$ con $D$: disco unitario. Usando polares: $\int_0^{2\pi}\int_0^1 \sqrt{1 + r^2\cos^2\theta + r^2\sin^2\theta} r\, dr\, d\theta = \int_0^{2\pi}\int_0^1 \sqrt{1 + r^2} r\, dr\, d\theta = 2\pi \left[\frac{(1+r^2)^{3/2}}{3}\right]_0^1 = \frac{2\pi}{3}(2^{3/2} - 1)$

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Teoría del Jacobiano

- **Jacobiano nulo**: Condiciones para cuando el determinante jacobiano se anula
- **Cambios de variable singulares**: Transformaciones donde el Jacobiano desaparece en algunos puntos

### 2. Integración en Variedades

- **Teorema de Stokes**: Generalización del teorema fundamental del cálculo
- **Formas diferenciales**: Álgebra exterior y integración en variedades

### 3. Problemas Abiertos

1. ¿Cómo optimizar numéricamente integrales múltiples?
2. ¿Cuál es la complejidad de calcular integrales en dimensiones altas?
3. ¿Cómo aplicar integración numérica en machine learning?

---

## Referencias

1. Apostol, T.M. (1974). *Mathematical Analysis* (2nd ed.). Addison-Wesley.

2. Rudin, W. (1976). *Principles of Mathematical Analysis* (3rd ed.). McGraw-Hill.

3. Fleming, W. (1977). *Functions of Several Variables* (2nd ed.). Springer.

4. Spivak, M. (1965). *Calculus on Manifolds*. Benjamin.

5. Marsden, J.E.; Tromba, A.J. (2003). *Vector Calculus* (5th ed.). W.H. Freeman.

6. Stewart, J. (2015). *Multivariable Calculus* (8th ed.). Cengage Learning.

7. Adams, R.A.; Essex, C. (2013). *Calculus: A Complete Course* (8th ed.). Pearson.

8. Kreyszig, E. (2011). *Advanced Engineering Mathematics* (10th ed.). Wiley.
