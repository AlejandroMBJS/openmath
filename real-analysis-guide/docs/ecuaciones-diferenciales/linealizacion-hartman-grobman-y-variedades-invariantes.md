---
title: Linealizacion, Hartman-Grobman y variedades invariantes
description: Equilibrios hiperbolicos, teorema de Hartman-Grobman, variedades estable, inestable y central, y limites de la aproximacion lineal.
---

# Linealizacion, Hartman-Grobman y variedades invariantes

## El problema correcto

Dado un sistema no lineal

$$
\dot x=f(x),
\qquad
f(0)=0,
$$

la primera aproximacion natural cerca del equilibrio es su parte lineal:

$$
\dot x=Ax,
\qquad
A=D f(0).
$$

La pregunta no es si esta aproximacion es algebraicamente conveniente, sino **cuando conserva de verdad la dinamica local**.

## Equilibrio hiperbolico

El equilibrio

$$
0
$$

se llama hiperbolico si ninguna autovalor de

$$
A=D f(0)
$$

tiene parte real nula.

### Por que esta condicion es central

Cuando hay hiperbolicidad, la parte lineal separa claramente:

- direcciones estables;
- direcciones inestables;
- y no queda parte central neutra.

Eso elimina resonancias delicadas y hace robusta la topologia local.

## Teorema indirecto de Lyapunov

Si todos los autovalores de

$$
A
$$

tienen parte real negativa, el equilibrio no lineal es localmente asintoticamente estable.

Si alguno tiene parte real positiva, el equilibrio es inestable.

### Advertencia

Si aparece algun autovalor con parte real cero, la linealizacion deja de decidir. Ese es el territorio donde entran variedades centrales y bifurcaciones.

## Hartman-Grobman

### Enunciado informal

Si el equilibrio es hiperbolico, entonces el flujo no lineal cerca del equilibrio es localmente conjugado por un homeomorfismo al flujo lineal

$$
\dot x=Ax.
$$

### Lectura precisa

Existe un cambio de coordenadas continuo, invertible y que preserva el equilibrio, bajo el cual las trayectorias del sistema no lineal se corresponden con las del sistema lineal.

### Lo que si preserva

- numero de ramas estable e inestable;
- estructura de silla, nodo o foco hiperbolico;
- existencia de separatrices topologicas;
- orientacion cualitativa de las orbitas.

### Lo que no preserva

El conjugante es, en general, solo topologico. No promete:

- igualdad de velocidades;
- igualdad metrica;
- suavidad del cambio de coordenadas;
- coincidencia exacta de amplitudes o tiempos.

## Subespacios espectrales lineales

Para la matriz

$$
A
$$

se define la descomposicion

$$
\mathbb{R}^n=E^s\oplus E^u\oplus E^c,
$$

donde:

- $E^s$ corresponde a autovalores con parte real negativa;
- $E^u$ corresponde a autovalores con parte real positiva;
- $E^c$ corresponde a parte real cero.

En el caso hiperbolico,

$$
E^c=\{0\}.
$$

## Variedad estable local

### Enunciado informal

Existe una variedad

$$
W^s_{\mathrm{loc}}(0)
$$

suave, tangente a

$$
E^s
$$

en el origen, formada por los datos iniciales cuya trayectoria permanece cerca del equilibrio y converge a el cuando

$$
t\to\infty.
$$

### Lectura

La variedad estable es la version no lineal del subespacio estable lineal. No es en general un plano: puede ser una superficie curva, pero toca a

$$
E^s
$$

en primer orden.

## Variedad inestable local

Analogamente existe una variedad

$$
W^u_{\mathrm{loc}}(0)
$$

tangente a

$$
E^u
$$

que recoge los datos iniciales cuyas trayectorias se aproximan al equilibrio al invertir el tiempo.

### Importancia

Las intersecciones entre variedades estable e inestable son la materia prima de gran parte de la dinamica global avanzada.

## Variedad central

Si aparecen autovalores con parte real cero, existe en muchos contextos una variedad local

$$
W^c_{\mathrm{loc}}(0)
$$

tangente a

$$
E^c.
$$

### Por que importa

La dinamica en

$$
W^c
$$

es la parte no decidida por la linealizacion. Muchas bifurcaciones locales viven exactamente ahi.

### Moral

Cuando el espectro tiene parte central, la tarea no es "mirar mejor el sistema completo", sino reducir la dinamica a la variedad central y estudiar alli los terminos no lineales relevantes.

## Ejemplo 1: silla no lineal

Considere

$$
\dot x=x,
\qquad
\dot y=-y+x^2.
$$

La linealizacion es

$$
A=
\begin{pmatrix}
1 & 0\\
0 & -1
\end{pmatrix},
$$

con una direccion estable y una inestable. El equilibrio es hiperbolico. Por Hartman-Grobman, el retrato local es topologicamente el de una silla lineal.

### Observacion

La variedad estable ya no es exactamente el eje

$$
y
$$

ni la inestable exactamente el eje

$$
x;
$$

pueden curvarse por los terminos no lineales, pero siguen tangentes a las direcciones lineales correspondientes.

## Ejemplo 2: la linealizacion no decide

Para

$$
\dot x=-x^3
$$

la linealizacion en

$$
0
$$

es

$$
\dot x=0.
$$

El autovalor es cero y la teoria hiperbolica no concluye nada. Sin embargo, el equilibrio es asintoticamente estable.

### Leccion

La linealizacion falla exactamente en los casos donde los terminos no lineales dominan el signo dinamico.

## Ejemplo 3: inestabilidad con espectro central

Para

$$
\dot x=x^2
$$

la linealizacion sigue siendo

$$
\dot x=0,
$$

pero ahora el equilibrio es inestable.

### Leccion complementaria

Con espectro central, dos sistemas con la misma linealizacion pueden tener comportamientos opuestos. Hace falta teoria adicional.

## Relacion con Lyapunov

Lyapunov energetico y linealizacion no compiten: se complementan.

- Hartman-Grobman describe la topologia local en el caso hiperbolico.
- Lyapunov permite demostrar estabilidad sin resolver explicitamente y tambien tratar casos no hiperbolicos.
- Las variedades invariantes organizan geometricamente el conjunto de datos iniciales relevantes.

## Limites del enfoque lineal

La linealizacion no basta cuando:

- hay autovalores con parte real cero;
- hay resonancias no lineales delicadas;
- interesa regularidad fina del conjugante;
- la dinamica global depende de objetos lejos del equilibrio.

## Errores frecuentes

- Creer que igualdad de linealizacion implica misma dinamica local en casos no hiperbolicos.
- Confundir conjugacion topologica con igualdad analitica.
- Pensar que la variedad estable coincide exactamente con el subespacio estable lineal.
- Usar el espectro lineal para concluir comportamiento global.

## Practica guiada

### Ejercicio 1

Clasifica por linealizacion el equilibrio del sistema

$$
\dot x=2x+y+x^2,
\qquad
\dot y=-y.
$$

### Ejercicio 2

Explica por que

$$
\dot x=-y+x(x^2+y^2),
\qquad
\dot y=x+y(x^2+y^2)
$$

no es un caso decidido por el espectro lineal si la parte real lineal fuera cero.

### Ejercicio 3

Describe la geometria de las variedades estable e inestable de una silla hiperbolica en el plano.

## Cierre

La linealizacion se vuelve una teoria seria cuando se entiende junto con hiperbolicidad, conjugacion topologica y variedades invariantes. Ese paquete es el puente real entre algebra lineal y dinamica no lineal local.
