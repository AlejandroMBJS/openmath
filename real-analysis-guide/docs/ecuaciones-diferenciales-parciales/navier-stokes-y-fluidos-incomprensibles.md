---
title: Navier-Stokes y Fluidos Incomprensibles
description: Ecuaciones de Euler y Navier-Stokes, formulacion debil, energia, vorticidad y la cuestion global en 3D.
---

# Navier-Stokes y Fluidos Incomprensibles

## Por que este bloque es central

Las ecuaciones de fluidos incomprensibles son uno de los lugares donde convergen:

- transporte no lineal;
- difusion;
- restriccion geomatrica de incompresibilidad;
- analisis funcional;
- fenomenos multiescala;
- problemas abiertos profundos.

El modelo viscoso es Navier-Stokes:

$$
\partial_t u + (u\cdot \nabla)u + \nabla p = \nu \Delta u + f,
\qquad
\nabla\cdot u = 0.
$$

## Significado de los terminos

- $u(t,x)$ es el campo de velocidades;
- $p(t,x)$ es la presion;
- $\nu>0$ es la viscosidad;
- $f$ es una fuerza externa;
- $\nabla\cdot u=0$ impone incompresibilidad.

### Lectura

La no linealidad convectiva transporta el propio campo de velocidades. La viscosidad difunde. La presion no tiene dinamica propia independiente: actua como multiplicador que impone la restriccion divergencia cero.

## Euler vs Navier-Stokes

Si $\nu=0$, aparece Euler:

$$
\partial_t u + (u\cdot \nabla)u + \nabla p = f,
\qquad
\nabla\cdot u=0.
$$

La comparacion estructural es:

- Euler: transporte puro con restriccion incompresible;
- Navier-Stokes: transporte mas difusion.

## Presion como variable no local

Tomando divergencia en Navier-Stokes y usando $\nabla\cdot u=0$ se obtiene formalmente

$$
-\Delta p = \nabla\cdot \nabla\cdot (u\otimes u) - \nabla\cdot f.
$$

### Moral

La presion se recupera resolviendo una ecuacion eliptica instantanea. Por eso el sistema es local en $u$ pero no local en la reconstruccion de $p$.

## Proyector de Leray

Una forma elegante de eliminar la presion es proyectar sobre campos solenoidales:

$$
\partial_t u + \mathbb{P}(u\cdot \nabla u) = \nu \Delta u + \mathbb{P}f.
$$

Aqui $\mathbb{P}$ es el proyector de Leray sobre el subespacio $\nabla\cdot u=0$.

### Importancia

Esto convierte el sistema en una ecuacion evolutiva abstracta sobre el espacio correcto.

## Energia

Multiplicando por $u$ e integrando, para datos de frontera adecuados:

$$
\frac12\frac{d}{dt}\|u(t)\|_{L^2}^2
+ \nu \|\nabla u(t)\|_{L^2}^2
= \langle f,u\rangle.
$$

En ausencia de fuerza,

$$
\frac12\frac{d}{dt}\|u(t)\|_{L^2}^2
+ \nu \|\nabla u(t)\|_{L^2}^2
=0.
$$

### Lectura

La energia cinetica se disipa por viscosidad. El termino no lineal no contribuye directamente por cancelacion debida a incompresibilidad.

## Cancelacion del termino convectivo

La identidad clave es

$$
\int (u\cdot \nabla)u\cdot u\,dx = 0
$$

cuando $\nabla\cdot u=0$ y la frontera no aporta termino adicional.

### Moral

La no linealidad no crea energia $L^2$ de la nada. La dificultad viene de redistribucion entre escalas, no de crecimiento algebraico inmediato en la identidad energetica basica.

## Soluciones fuertes y debiles

Una solucion fuerte tiene regularidad suficiente para interpretar la ecuacion punto a punto o casi en todas partes.

Una solucion debil satisface una identidad integral contra campos de prueba divergencia cero.

En 3D, la teoria global conocida se organiza justamente a traves de soluciones debiles tipo Leray-Hopf.

## Soluciones de Leray-Hopf

Para datos iniciales $u_0\in L^2$ divergencia cero, existen soluciones debiles globales que satisfacen:

- la ecuacion en sentido debil;
- la desigualdad de energia;
- cierta continuidad debil en tiempo.

### Lo que falta

En 3D no se sabe si toda solucion de este tipo es suave para todo tiempo ni si es unica dentro de esa clase.

## El problema del milenio

La pregunta global de Navier-Stokes en 3D es, en esencia:

dados datos suaves, existe solucion suave global y unica para todo tiempo?

Este es uno de los problemas abiertos mas famosos del analisis moderno.

## 2D vs 3D

En 2D la teoria es mucho mejor:

- la vorticidad escalar se controla mejor;
- la energia mas enstrofia dan estimaciones cerradas;
- la existencia global suave es conocida.

En 3D la vorticidad es vectorial y el termino de stretching complica profundamente la dinamica.

## Vorticidad

Definimos

$$
\omega = \nabla\times u.
$$

En 3D satisface

$$
\partial_t \omega + (u\cdot \nabla)\omega
=
(\omega\cdot \nabla)u + \nu \Delta \omega + \nabla\times f.
$$

### Lectura

El termino

$$
(\omega\cdot \nabla)u
$$

es el stretching de vorticidad. Esa es una de las fuentes principales de dificultad en 3D.

## Escalamiento

Navier-Stokes en $\mathbb{R}^3$ es invariante bajo

$$
u_\lambda(t,x)=\lambda u(\lambda^2 t,\lambda x),
\qquad
p_\lambda(t,x)=\lambda^2 p(\lambda^2 t,\lambda x).
$$

Las normas criticas son las que permanecen invariantes bajo este escalamiento.

### Importancia

El analisis fino de existencia y regularidad local se organiza alrededor de espacios subcriticos, criticos y supercriticos.

## Mild solutions y semigrupo

Usando el semigrupo calor y el proyector de Leray, la formulacion integral es

$$
u(t)=e^{\nu t\Delta}u_0
-\int_0^t e^{\nu (t-s)\Delta}\mathbb{P}\nabla\cdot (u\otimes u)(s)\,ds
+\int_0^t e^{\nu (t-s)\Delta}\mathbb{P}f(s)\,ds.
$$

Esto convierte la teoria local en un problema de punto fijo en espacios temporales adecuados.

## Criterios de regularidad

En 3D no hay teorema global completo, pero si criterios condicionales. Esquemas tipicos:

- si cierta norma critica permanece finita, la solucion sigue regular;
- si la vorticidad satisface un control espacial-temporal suficiente, no hay blow-up.

Ejemplos clasicos son criterios tipo Serrin o Beale-Kato-Majda para Euler.

## Debilidad y perdida de unicidad

El panorama moderno incluye ademas resultados sorprendentes:

- para Euler debil, la unicidad puede fallar drasticamente;
- aparecen construcciones tipo convex integration;
- la conservacion de energia puede depender de regularidad fina.

Esto conecta con la conjetura de Onsager.

## Conjetura de Onsager

Muy esquematicamente:

- si la regularidad holderiana es mayor que $1/3$, la energia se conserva en Euler;
- por debajo de ese umbral, pueden existir soluciones debiles disipativas.

### Moral

La frontera entre conservacion y cascada turbulenta esta ligada a un exponente de regularidad, no solo a una identidad formal.

## Turbulencia y cascada

Desde el punto de vista matematico, la turbulencia sugiere:

- transferencia de energia entre escalas;
- estructuras altamente oscilatorias;
- dificultad para cerrar estimaciones uniformes.

No toda la teoria turbulenta cabe aqui, pero el lenguaje de escalas y regularidad critica ya aparece en Navier-Stokes.

## Ejemplo guiado: energia sin fuerza

Con $f=0$ y frontera periodica o decaimiento adecuado:

$$
\|u(t)\|_{L^2}^2 + 2\nu \int_0^t \|\nabla u(s)\|_{L^2}^2\,ds
= \|u_0\|_{L^2}^2.
$$

Esta identidad resume tres hechos:

- existencia de una cantidad controlada globalmente;
- disipacion integrada;
- ausencia de crecimiento libre de la energia cinetica.

## Conexion con otros bloques

Navier-Stokes conecta naturalmente con:

- calculo vectorial, por divergencia, rotacional y presion;
- Fourier, por semigrupo calor y analisis en frecuencias;
- EDO, por trayectorias y formulaciones lagrangianas;
- metodos matematicos para la fisica, por transporte, viscosidad y leyes constitutivas.

## Errores frecuentes

- tratar la presion como una variable independiente cualquiera;
- creer que la identidad de energia resuelve por si sola la regularidad global;
- olvidar que el termino convectivo cancela en $L^2$ pero no en normas altas;
- extrapolar el caso 2D al 3D;
- confundir existencia de soluciones debiles con teoria completa de unicidad y suavidad.

## Practica recomendada

1. Derivar la ecuacion de Poisson para la presion a partir de Navier-Stokes.
2. Probar la cancelacion del termino convectivo en la identidad energetica.
3. Comparar la formulacion diferencial con la formulacion proyectada por Leray.
4. Explicar por que 2D y 3D tienen dificultades cualitativamente distintas.
5. Relacionar la conjetura de Onsager con regularidad y conservacion de energia.

## Cierre

Navier-Stokes y Euler son un punto de madurez obligado del bloque de EDP. Reunen no linealidad, difusion, estructura geometrica de incompresibilidad, escalamiento critico y problemas abiertos reales. A este nivel, el bloque ya entra de lleno en territorio doctoral.
