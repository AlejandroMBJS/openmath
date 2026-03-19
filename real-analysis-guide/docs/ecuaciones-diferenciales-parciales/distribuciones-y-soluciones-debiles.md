---
title: Distribuciones y Soluciones Debiles
description: Paso de soluciones clasicas a distribuciones y formulaciones debiles para tratar datos o soluciones con baja regularidad.
---

# Distribuciones y Soluciones Debiles

## Por que hace falta ampliar la nocion de solucion

Muchas EDP producen soluciones que:

- no son dos veces derivables;
- presentan esquinas, frentes o choques;
- nacen de datos singulares;
- solo se controlan en normas integrales.

Si insistimos en derivadas clasicas punto a punto, la teoria se rompe demasiado pronto. La salida natural es trasladar las derivadas a funciones de prueba suaves.

## Funciones de prueba

Denotamos por $C_c^\infty(\Omega)$ el espacio de funciones suaves con soporte compacto en $\Omega$.

Estas funciones sirven como sondas locales: permiten probar identidades sin mirar la solucion punto a punto.

## Distribuciones

Una distribucion $T$ sobre $\Omega$ es un funcional lineal continuo sobre $C_c^\infty(\Omega)$.

El punto de vista correcto es:

- una funcion integrable local $f$ define una distribucion por

$$
\langle T_f,\varphi\rangle=\int_{\Omega} f(x)\varphi(x)\,dx;
$$

- pero tambien hay distribuciones que no vienen de funciones clasicas, como la delta de Dirac.

## Derivada distribucional

La derivada de una distribucion se define por dualidad:

$$
\langle \partial_i T,\varphi\rangle=-\langle T,\partial_i\varphi\rangle.
$$

Si $T=T_f$ con $f$ suave, esta definicion recupera la derivada usual tras integrar por partes.

### Ganancia conceptual

La derivada se mueve de la solucion a la funcion de prueba. Eso permite derivar objetos poco regulares.

## Ejemplo: funcion escalon

Sea

$$
H(x)=
\begin{cases}
0, & x<0,\\
1, & x>0.
\end{cases}
$$

No tiene derivada clasica en $x=0$. Pero distribucionalmente,

$$
H'=\delta_0.
$$

En efecto,

$$
\langle H',\varphi\rangle=-\int_{\mathbb{R}}H(x)\varphi'(x)\,dx
=-\int_0^\infty \varphi'(x)\,dx
=\varphi(0).
$$

## Solucion debil de una EDP lineal

Consideremos

$$
-\Delta u=f \quad \text{en } \Omega.
$$

Si $u$ es suficientemente suave, al multiplicar por $\varphi\in C_c^\infty(\Omega)$ e integrar se obtiene

$$
\int_{\Omega}\nabla u\cdot \nabla \varphi\,dx
=\int_{\Omega} f\varphi\,dx.
$$

Esto sugiere la definicion:

Una funcion $u$ es solucion debil si

$$
\int_{\Omega}\nabla u\cdot \nabla \varphi\,dx
=\int_{\Omega} f\varphi\,dx
\qquad
\text{para toda } \varphi\in C_c^\infty(\Omega).
$$

### Lectura

La ecuacion se prueba contra funciones suaves, no punto a punto.

## Integracion por partes como origen de la formulacion debil

La formulacion debil no es un truco arbitrario. Nace de una identidad exacta valida para soluciones suaves:

$$
\int_{\Omega}(-\Delta u)\varphi\,dx
=\int_{\Omega}\nabla u\cdot \nabla \varphi\,dx
-\int_{\partial \Omega}\frac{\partial u}{\partial n}\varphi\,dS.
$$

Con funciones de prueba de soporte compacto, el termino de frontera desaparece. Con pruebas mas generales, el termino de frontera codifica condiciones de Dirichlet o Neumann.

## Soluciones debiles de evolucion

Para una ecuacion como

$$
u_t-\Delta u=f,
$$

la derivada temporal tambien puede interpretarse debilmente:

$$
\iint u(-\phi_t-\Delta \phi)\,dx\,dt
=\iint f\phi\,dx\,dt
+ \text{terminos de datos iniciales}.
$$

La formulacion exacta depende del espacio funcional elegido, pero la idea es la misma: mover derivadas a la funcion de prueba.

## Delta de Dirac como fuente

La ecuacion

$$
-\Delta u=\delta_0
$$

no tiene sentido clasico en todo el dominio. Distribucionalmente, en cambio, describe el potencial generado por una fuente puntual.

En dimension $n\ge 3$, la solucion fundamental tiene forma

$$
\Phi(x)=c_n |x|^{2-n},
$$

y satisface

$$
-\Delta \Phi=\delta_0
$$

en el sentido de distribuciones.

## Soluciones debiles no clasicas

Una funcion puede ser debilmente solucion sin ser clasica.

Ejemplo tipico:

- funciones con derivadas primeras en $L^2$;
- funciones continuas a trozos con salto en la derivada;
- soluciones de leyes de conservacion con choques.

La teoria debil no es una concesion informal; es la categoria natural donde existen soluciones fisicamente relevantes.

## Unicidad y criterio adicional

Ampliar la nocion de solucion a veces destruye unicidad si no se agrega una condicion extra.

Ejemplo:

- en ecuaciones elipticas lineales, coercividad y formulacion variacional suelen restaurar unicidad;
- en leyes de conservacion no lineales, hacen falta condiciones de entropia;
- en fluidos, puede haber soluciones debiles multiples.

Por tanto, debilidad no equivale a arbitrariedad, pero exige estructura adicional.

## Relacion con espacios funcionales

Una vez definida la ecuacion debilmente, el siguiente paso es elegir el espacio donde vive la solucion:

- $L^p$ para integrabilidad;
- $H^1$ o Sobolev para derivadas debiles cuadrado-integrables;
- duales como $H^{-1}$ para fuentes mas irregulares.

La formulacion debil y el espacio funcional deben casar entre si.

## Ejemplo guiado: Poisson unidimensional

En $(0,1)$ consideremos

$$
-u''=f,
\qquad
u(0)=u(1)=0.
$$

La formulacion debil dice: hallar $u$ tal que

$$
\int_0^1 u'(x)\varphi'(x)\,dx
=\int_0^1 f(x)\varphi(x)\,dx
\qquad
\forall \varphi\in C_c^\infty(0,1).
$$

Si luego se muestra que $u\in H_0^1(0,1)$ satisface esta identidad, ya existe una solucion en el sentido debil aunque tal vez no sepamos aun si $u\in C^2$.

## Ventaja practica

La formulacion debil:

- reduce numero de derivadas exigidas a $u$;
- permite usar metodos de compacidad;
- se adapta a minimizacion de funcionales;
- es la base de elementos finitos;
- hace posible incorporar datos singulares.

## Advertencia importante

No toda identidad integral razonable define la EDP correcta. Hay que verificar:

- que la integracion por partes sea legitima;
- que los terminos de frontera se interpreten bien;
- que la clase de pruebas sea suficientemente rica;
- que si la solucion debil mejora de regularidad, recupere la ecuacion clasica.

Esta ultima propiedad se llama consistencia.

## De distribuciones a regularidad

Un principio recurrente es:

1. definir la solucion debil en un espacio amplio;
2. probar existencia por compacidad o representacion;
3. demostrar estimaciones a priori;
4. usar regularidad para mostrar que, bajo hipotesis mejores, la solucion debil es en realidad clasica.

La teoria moderna de EDP sigue a menudo este esquema.

## Errores frecuentes

- creer que una distribucion es necesariamente una funcion;
- confundir derivada debil con derivada clasica casi en todas partes sin verificar hipotesis;
- olvidar terminos iniciales o de frontera en formulaciones de evolucion;
- pensar que toda solucion debil es unica;
- usar funciones de prueba que no encajan con el dominio o la frontera.

## Practica recomendada

1. Verificar distribucionalmente que la derivada del escalon de Heaviside es la delta de Dirac.
2. Derivar la formulacion debil de $-u''=f$ en un intervalo con condiciones de Dirichlet.
3. Mostrar que si $u$ es clasica, entonces tambien es debil.
4. Estudiar por que un choque en una ley de conservacion no puede interpretarse clasica pero si debilmente.
5. Probar que dos funciones iguales casi en todas partes definen la misma distribucion.

## Cierre

Distribuciones y soluciones debiles son el primer gran cambio de lenguaje en EDP avanzadas. Permiten que la teoria sobreviva cuando la regularidad clasica falla, y preparan el camino para Sobolev, formulaciones variacionales, compacidad y metodos numericos serios.
