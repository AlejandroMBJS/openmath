---
title: Integrales de superficie y flujo
description: Superficies parametrizadas, elemento de area, integrales escalares de superficie y flujo de campos vectoriales a traves de superficies orientadas.
---

# Integrales de superficie y flujo

## Motivacion

Una integral de linea acumula sobre curvas. Para pasar a Gauss y Stokes hace falta la nocion correspondiente sobre superficies.

Las integrales de superficie permiten medir:

- area de una superficie;
- masa distribuida sobre una membrana;
- flujo de un campo a traves de una superficie;
- cantidad total que atraviesa una frontera.

Sin esta teoria, los teoremas integrales tridimensionales quedan reducidos a formulas sin contenido geometrico.

## Superficies parametrizadas

Una superficie suave en $\mathbb{R}^3$ se describe localmente mediante una parametrizacion

$$
\sigma:U\subseteq \mathbb{R}^2\to \mathbb{R}^3,
\qquad
\sigma(u,v)=(x(u,v),y(u,v),z(u,v)).
$$

Pedimos que

$$
\sigma_u\times \sigma_v\ne 0
$$

en los puntos considerados. Esta condicion garantiza regularidad: las direcciones tangentes generadas por variar $u$ y $v$ son linealmente independientes.

## Plano tangente y vector normal

Los vectores

$$
\sigma_u,\qquad \sigma_v
$$

generan el plano tangente.

El vector

$$
\sigma_u\times \sigma_v
$$

es normal a la superficie. Su norma mide el factor local de deformacion de area.

## Elemento de area

Sobre la superficie parametrizada, el elemento de area es

$$
dS=\|\sigma_u\times \sigma_v\|\,du\,dv.
$$

### Interpretacion

Un pequeno rectangulo

$$
\Delta u\times \Delta v
$$

del dominio parametrico se deforma en la superficie en un pequeno paralelogramo cuya area es aproximadamente

$$
\|\sigma_u\times \sigma_v\|\,\Delta u\,\Delta v.
$$

## Integral escalar de superficie

Si

$$
f:S\to \mathbb{R}
$$

es continua sobre una superficie parametrizada

$$
S=\sigma(U),
$$

definimos

$$
\iint_S f\,dS
=
\iint_U f(\sigma(u,v))\,\|\sigma_u\times \sigma_v\|\,du\,dv.
$$

### Caso particular: area

Tomando

$$
f\equiv 1,
$$

se obtiene el area de la superficie:

$$
\operatorname{Area}(S)=\iint_S 1\,dS.
$$

## Superficies dadas como grafo

Si

$$
S=\{(x,y,g(x,y)):(x,y)\in D\},
$$

entonces una parametrizacion natural es

$$
\sigma(x,y)=\langle x,y,g(x,y)\rangle.
$$

Aqui

$$
\sigma_x=\langle 1,0,g_x\rangle,
\qquad
\sigma_y=\langle 0,1,g_y\rangle,
$$

y

$$
\sigma_x\times \sigma_y=\langle -g_x,-g_y,1\rangle.
$$

Por tanto

$$
dS=\sqrt{1+g_x^2+g_y^2}\,dA.
$$

### Ejemplo 1: area de un paraboloide truncado

Sea

$$
z=x^2+y^2
$$

sobre el disco

$$
x^2+y^2\le 1.
$$

Entonces

$$
g_x=2x,\qquad g_y=2y,
$$

y

$$
dS=\sqrt{1+4x^2+4y^2}\,dA.
$$

Asi,

$$
\operatorname{Area}(S)=\iint_{x^2+y^2\le 1}\sqrt{1+4x^2+4y^2}\,dA.
$$

En polares:

$$
\int_0^{2\pi}\int_0^1 \sqrt{1+4r^2}\,r\,dr\,d\theta.
$$

## Superficies orientadas

Para definir flujo hace falta elegir una orientacion, es decir, un campo normal unitario continuo

$$
n
$$

sobre la superficie.

Una superficie que admite tal eleccion global se llama orientable. En calculo vectorial clasico trabajamos casi siempre con superficies orientables.

### Orientacion por parametrizacion

La parametrizacion induce el normal

$$
n=\frac{\sigma_u\times \sigma_v}{\|\sigma_u\times \sigma_v\|}.
$$

Si intercambiamos $u$ y $v$, el producto cruz cambia de signo y se invierte la orientacion.

## Flujo de un campo vectorial

Sea

$$
F:S\to \mathbb{R}^3
$$

continuo y sea $S$ una superficie orientada con normal unitario $n$.

El flujo de $F$ a traves de $S$ es

$$
\iint_S F\cdot n\,dS.
$$

Usando una parametrizacion orientada,

$$
\iint_S F\cdot n\,dS
=
\iint_U F(\sigma(u,v))\cdot (\sigma_u\times \sigma_v)\,du\,dv.
$$

### Interpretacion

La cantidad

$$
F\cdot n
$$

es la componente normal del campo. El flujo suma la parte del campo que atraviesa realmente la superficie; la componente tangencial no contribuye.

## Dependencia de la orientacion

Si se cambia la orientacion, el flujo cambia de signo:

$$
\iint_{-S} F\cdot n\,dS=-\iint_S F\cdot n\,dS.
$$

Esto es esencial en Gauss y Stokes.

## Superficies cerradas

Si $S$ es frontera de un solido, la orientacion canonica es la normal exterior. En ese caso el flujo positivo indica que el campo sale del volumen y flujo negativo que entra.

## Ejemplo 2: flujo radial a traves de una esfera

Considere la esfera de radio $a$:

$$
x^2+y^2+z^2=a^2,
$$

con orientacion exterior, y el campo

$$
F(x,y,z)=\langle x,y,z\rangle.
$$

Sobre la esfera, el normal unitario exterior es

$$
n=\frac{1}{a}\langle x,y,z\rangle.
$$

Por tanto

$$
F\cdot n=\frac{x^2+y^2+z^2}{a}=a.
$$

Entonces

$$
\iint_S F\cdot n\,dS=a\iint_S 1\,dS=4\pi a^3.
$$

Este resultado reaparecera inmediatamente con el teorema de la divergencia.

## Ejemplo 3: flujo a traves de un grafico

Sea

$$
S=\{(x,y,1-x-y):(x,y)\in D\},
$$

donde

$$
D=\{(x,y):x\ge 0,\ y\ge 0,\ x+y\le 1\}.
$$

Tomemos el campo

$$
F(x,y,z)=\langle 0,0,1\rangle.
$$

Con la parametrizacion

$$
\sigma(x,y)=\langle x,y,1-x-y\rangle,
$$

obtenemos

$$
\sigma_x=\langle 1,0,-1\rangle,
\qquad
\sigma_y=\langle 0,1,-1\rangle.
$$

Luego

$$
\sigma_x\times \sigma_y=\langle 1,1,1\rangle.
$$

Por tanto

$$
F(\sigma(x,y))\cdot(\sigma_x\times \sigma_y)=1,
$$

y el flujo vale

$$
\iint_D 1\,dA=\frac12.
$$

## Formula para graficos orientados hacia arriba

Si

$$
S:z=g(x,y)
$$

esta orientada hacia arriba, entonces

$$
n\,dS=\langle -g_x,-g_y,1\rangle\,dA.
$$

Asi, para

$$
F=\langle P,Q,R\rangle,
$$

el flujo es

$$
\iint_D \bigl(-P\,g_x-Q\,g_y+R\bigr)\,dA.
$$

Esta formula es una de las herramientas mas utiles en aplicaciones.

## Invariancia geometrica

El valor de la integral escalar de superficie o del flujo no depende de la parametrizacion concreta, siempre que esta describa la misma superficie con la misma orientacion.

Lo que si depende de la parametrizacion son las formulas intermedias; por eso conviene elegir una parametrizacion adaptada a la geometria del problema.

## Relacion con integrales de linea y de volumen

Las integrales sobre curvas, superficies y volumenes forman una jerarquia:

- sobre curvas se integra con $ds$ o $dr$;
- sobre superficies se integra con $dS$ o $n\,dS$;
- sobre volumenes se integra con $dV$.

Green, Gauss y Stokes expresan identidades profundas entre estas integrales cuando las regiones tienen frontera.

## Comentario avanzado

En un tratamiento diferencial moderno, una superficie orientada lleva una 2-forma de area, y el flujo es la integral de una 2-forma asociada al campo. Esa formulacion explica la estructura comun de los teoremas integrales, pero el contenido operacional ya esta enteramente presente en la parametrizacion clasica y el producto cruz.

## Errores frecuentes

- Usar $\|\sigma_u\times \sigma_v\|$ cuando el problema pide flujo orientado.
- Olvidar elegir o declarar la orientacion.
- Parametrizar mal la superficie o su dominio parametrico.
- Usar la formula de grafico sin revisar si la orientacion es hacia arriba o hacia abajo.
- Pensar que todo campo atraviesa una superficie aunque sea puramente tangencial.

## Conclusion

Las integrales de superficie son la puerta de entrada al calculo sobre variedades bidimensionales en el espacio. La integral escalar mide densidad sobre area; el flujo mide atravesamiento normal. Con estas dos nociones ya se puede leer de manera sustantiva el teorema de la divergencia y el teorema de Stokes.
