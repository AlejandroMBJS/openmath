---
title: Integrales dobles y volumen
description: Definicion rigurosa de integral doble, sumas de Riemann, teorema de Fubini, regiones generales, volumen y cambio de variables.
---

# Integrales dobles y volumen

## Motivacion

Una integral ordinaria acumula cantidades a lo largo de un intervalo. Una integral doble acumula cantidades distribuidas sobre una region del plano.

Las situaciones tipicas son:

- volumen bajo una superficie;
- masa de una lamina con densidad variable;
- valor medio de una magnitud escalar sobre una region;
- momentos de area;
- cambio de variables para adaptar la integral a la geometria del dominio.

La integral doble es el primer paso serio en la integracion sobre conjuntos de dimension mayor que uno.

## De la suma de Riemann a la integral

Sea

$$
R=[a,b]\times[c,d]\subseteq \mathbb{R}^2,
$$

y sea

$$
f:R\to \mathbb{R}
$$

acotada.

Particionamos el rectangulo en subrectangulos

$$
R_{ij}=[x_{i-1},x_i]\times[y_{j-1},y_j],
$$

y elegimos puntos

$$
(\xi_{ij},\eta_{ij})\in R_{ij}.
$$

La suma de Riemann asociada es

$$
\sum_{i,j} f(\xi_{ij},\eta_{ij})\,\Delta A_{ij},
$$

donde

$$
\Delta A_{ij}=(x_i-x_{i-1})(y_j-y_{j-1}).
$$

La idea es simple: aproximar el aporte de cada subrectangulo por "altura por area de base" y sumar todos esos aportes.

## Definicion de integral doble

Decimos que $f$ es integrable en el sentido de Riemann sobre $R$ si existe un numero $I$ tal que para toda sucesion de particiones con malla tendiendo a cero y toda eleccion de puntos muestrales,

$$
\sum_{i,j} f(\xi_{ij},\eta_{ij})\,\Delta A_{ij}\to I.
$$

Ese numero se denota

$$
\iint_R f(x,y)\,dA.
$$

### Comentario

La notacion

$$
dA
$$

recuerda que se esta integrando respecto del elemento de area del dominio plano.

## Integrabilidad

El criterio practico basico es el siguiente.

### Teorema 1

Toda funcion continua sobre un rectangulo compacto

$$
R=[a,b]\times[c,d]
$$

es Riemann integrable en $R$.

### Comentario

Mas generalmente, toda funcion acotada cuyas discontinuidades formen un conjunto "pequeno" en sentido de Jordan o de medida cero es integrable. Para calculo vectorial elemental, la continuidad basta en la gran mayoria de problemas.

## Interpretacion geometrica

Si

$$
f(x,y)\ge 0,
$$

la integral

$$
\iint_R f(x,y)\,dA
$$

representa el volumen del solido comprendido entre:

- el plano $z=0$;
- la superficie $z=f(x,y)$;
- el cilindro vertical sobre el dominio $R$.

Si la funcion toma signos positivos y negativos, la integral da volumen con signo, es decir, volumen positivo por encima del plano y negativo por debajo.

## Propiedades basicas

Si $f$ y $g$ son integrables sobre $R$ y $\lambda\in \mathbb{R}$, entonces:

$$
\iint_R (f+g)\,dA=\iint_R f\,dA+\iint_R g\,dA,
$$

$$
\iint_R \lambda f\,dA=\lambda\iint_R f\,dA.
$$

Ademas, si

$$
f\le g
$$

en $R$, entonces

$$
\iint_R f\,dA\le \iint_R g\,dA.
$$

Y si

$$
m\le f\le M,
$$

se obtiene

$$
m\,\operatorname{Area}(R)\le \iint_R f\,dA\le M\,\operatorname{Area}(R).
$$

Estas propiedades siguen directamente de las sumas de Riemann.

## Integrales iteradas y teorema de Fubini

La herramienta computacional central es la reduccion de la integral doble a integrales de una variable.

### Teorema 2: Fubini en rectangulos

Si $f$ es continua sobre

$$
R=[a,b]\times[c,d],
$$

entonces

$$
\iint_R f(x,y)\,dA
=
\int_a^b\left(\int_c^d f(x,y)\,dy\right)dx
=
\int_c^d\left(\int_a^b f(x,y)\,dx\right)dy.
$$

### Interpretacion

La integral interna acumula a lo largo de una direccion manteniendo fija la otra variable; la integral externa suma luego todas esas contribuciones.

### Ejemplo 1

Sea

$$
f(x,y)=x+2y
$$

en

$$
R=[0,1]\times[0,2].
$$

Entonces

$$
\iint_R (x+2y)\,dA
=
\int_0^1\int_0^2 (x+2y)\,dy\,dx.
$$

Primero,

$$
\int_0^2 (x+2y)\,dy
=
2x+4.
$$

Luego,

$$
\int_0^1 (2x+4)\,dx=1+4=5.
$$

## Regiones mas generales

No siempre se integra sobre un rectangulo. La mayoria de los problemas fisicos ocurren sobre discos, triangulos, elipses o regiones curvilineas.

Una forma de tratar esos dominios consiste en describirlos mediante desigualdades.

### Region de tipo I

Una region $D$ es de tipo I si puede escribirse como

$$
D=\{(x,y):a\le x\le b,\ \varphi_1(x)\le y\le \varphi_2(x)\}.
$$

Entonces, si $f$ es integrable,

$$
\iint_D f(x,y)\,dA
=
\int_a^b \int_{\varphi_1(x)}^{\varphi_2(x)} f(x,y)\,dy\,dx.
$$

### Region de tipo II

Una region $D$ es de tipo II si puede escribirse como

$$
D=\{(x,y):c\le y\le d,\ \psi_1(y)\le x\le \psi_2(y)\}.
$$

Entonces

$$
\iint_D f(x,y)\,dA
=
\int_c^d \int_{\psi_1(y)}^{\psi_2(y)} f(x,y)\,dx\,dy.
$$

### Comentario

La eleccion del orden correcto es una parte conceptual del problema, no un detalle cosmetico. Hay dominios que se describen de forma natural como tipo I, otros como tipo II, y algunos requieren particionarse en varias piezas.

## Ejemplo 2: integral sobre un triangulo

Sea

$$
D=\{(x,y):0\le x\le 1,\ 0\le y\le x\}.
$$

Entonces

$$
\iint_D (x+y)\,dA
=
\int_0^1\int_0^x (x+y)\,dy\,dx.
$$

Calculamos:

$$
\int_0^x (x+y)\,dy=x^2+\frac{x^2}{2}=\frac{3x^2}{2}.
$$

Por tanto

$$
\int_0^1 \frac{3x^2}{2}\,dx=\frac12.
$$

## Cambio de orden de integracion

Con frecuencia la integral viene dada en un orden incomodo. Cambiar el orden exige reescribir geometricamente el dominio.

### Ejemplo 3

Considere

$$
\int_0^1\int_y^1 e^{x^2}\,dx\,dy.
$$

La integral interna no tiene primitiva elemental. Pero el dominio es

$$
D=\{(x,y):0\le y\le 1,\ y\le x\le 1\}.
$$

Equivalentemente,

$$
D=\{(x,y):0\le x\le 1,\ 0\le y\le x\}.
$$

Entonces

$$
\int_0^1\int_y^1 e^{x^2}\,dx\,dy
=
\int_0^1\int_0^x e^{x^2}\,dy\,dx
=
\int_0^1 x e^{x^2}\,dx.
$$

Ahora si,

$$
\int_0^1 x e^{x^2}\,dx=\frac12(e-1).
$$

## Volumen bajo una superficie

Si

$$
f(x,y)\ge 0
$$

sobre una region $D$, el volumen bajo el grafo

$$
z=f(x,y)
$$

y sobre $D$ es

$$
V=\iint_D f(x,y)\,dA.
$$

### Ejemplo 4

Sea

$$
f(x,y)=4-x^2-y^2
$$

sobre el disco

$$
x^2+y^2\le 4.
$$

Este solido es la parte de paraboloide por encima del plano $z=0$.

En coordenadas cartesianas la integral es posible pero engorrosa. La simetria circular sugiere usar coordenadas polares:

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad dA=r\,dr\,d\theta.
$$

Entonces

$$
V=\int_0^{2\pi}\int_0^2 (4-r^2)r\,dr\,d\theta.
$$

Integrando,

$$
\int_0^2 (4r-r^3)\,dr=8-4=4.
$$

Por tanto

$$
V=8\pi.
$$

## Area de una region

La funcion constante

$$
f(x,y)=1
$$

produce el area:

$$
\operatorname{Area}(D)=\iint_D 1\,dA.
$$

### Ejemplo 5

El area del disco de radio $a$ se obtiene como

$$
\int_0^{2\pi}\int_0^a r\,dr\,d\theta=\pi a^2.
$$

Este es uno de los lugares donde el Jacobiano polar deja de ser una formula abstracta y se vuelve geometricamente inevitable.

## Valor medio de una funcion

Si $D$ tiene area positiva, el valor medio de $f$ sobre $D$ se define por

$$
f_{\mathrm{med}}=\frac{1}{\operatorname{Area}(D)}\iint_D f\,dA.
$$

Esto generaliza la media de una variable y aparece en transferencia de calor, electrostatica y teoria del potencial.

## Masa y momentos de una lamina

Sea una lamina plana ocupando una region $D$ con densidad superficial

$$
\rho(x,y).
$$

Entonces su masa es

$$
M=\iint_D \rho(x,y)\,dA.
$$

Los momentos respecto de los ejes coordenados son

$$
M_x=\iint_D y\,\rho(x,y)\,dA,
\qquad
M_y=\iint_D x\,\rho(x,y)\,dA.
$$

El centro de masa satisface

$$
\bar x=\frac{M_y}{M},
\qquad
\bar y=\frac{M_x}{M}.
$$

### Ejemplo 6

Sea $D$ el triangulo

$$
0\le x\le 1,\qquad 0\le y\le 1-x,
$$

con densidad

$$
\rho(x,y)=x+y.
$$

La masa es

$$
M=\int_0^1\int_0^{1-x}(x+y)\,dy\,dx.
$$

La misma tecnologia permite hallar el centro de masa; lo importante es observar que las integrales dobles no solo miden volumen, sino distribucion ponderada.

## Cambio de variables en el plano

La version madura de la integral doble necesita un teorema de cambio de variables.

Sea

$$
T(u,v)=(x(u,v),y(u,v))
$$

una transformacion regular entre regiones del plano. Su Jacobiano es

$$
J_T(u,v)=
\det
\begin{pmatrix}
x_u & x_v \\
y_u & y_v
\end{pmatrix}.
$$

### Teorema 3: cambio de variables

Bajo hipotesis regulares adecuadas,

$$
\iint_D f(x,y)\,dA
=
\iint_{D^\ast} f(T(u,v))\,|J_T(u,v)|\,du\,dv,
$$

donde

$$
D=T(D^\ast).
$$

### Comentario conceptual

El Jacobiano mide el factor local de deformacion del area.

## Coordenadas polares

El caso mas importante es

$$
x=r\cos\theta,\qquad y=r\sin\theta.
$$

Aqui

$$
J=
\det
\begin{pmatrix}
\cos\theta & -r\sin\theta \\
\sin\theta & r\cos\theta
\end{pmatrix}
=r.
$$

Por tanto

$$
dA=r\,dr\,d\theta.
$$

### Ejemplo 7

Calculemos

$$
\iint_{x^2+y^2\le 1}(x^2+y^2)\,dA.
$$

En polares,

$$
x^2+y^2=r^2,
$$

y el dominio es

$$
0\le r\le 1,\qquad 0\le \theta\le 2\pi.
$$

Luego

$$
\int_0^{2\pi}\int_0^1 r^2\cdot r\,dr\,d\theta
=
2\pi\int_0^1 r^3\,dr
=
\frac{\pi}{2}.
$$

## Regiones no elementales y particiones

Muchos dominios no son de tipo I ni II con una sola descripcion. Entonces se particionan en subregiones elementales:

$$
D=D_1\cup \cdots\cup D_k,
$$

y se integra por suma:

$$
\iint_D f\,dA=\sum_{j=1}^k \iint_{D_j} f\,dA.
$$

La particion correcta del dominio es a menudo el paso creativo del problema.

## Comentario teorico

En un tratamiento mas avanzado, la integral doble se construye con medida de Lebesgue y se estudia junto con Tonelli y Fubini en espacios de medida. Pero incluso en el contexto de Riemann, la geometria esencial ya esta presente:

- particionar;
- aproximar;
- pasar al limite;
- elegir coordenadas adaptadas al dominio.

## Errores frecuentes

- Integrar en un dominio mal descrito.
- Cambiar el orden de integracion sin redibujar la region.
- Olvidar el Jacobiano al usar coordenadas nuevas.
- Tomar el area del dominio por el ancho por alto de un rectangulo imaginario.
- Confundir volumen geometrico con integral de una funcion que cambia de signo.

## Conclusion

Las integrales dobles convierten geometria plana en calculo cuantitativo. Con ellas aparecen por primera vez tres ideas que se quedaran en todo el resto del bloque:

- la region del dominio importa tanto como la formula integranda;
- el cambio de variables debe respetar el factor Jacobiano;
- la interpretacion geometrica y fisica de la integral orienta la mejor forma de calcularla.
