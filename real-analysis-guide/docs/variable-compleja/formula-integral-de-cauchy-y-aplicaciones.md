---
title: Formula Integral de Cauchy y Aplicaciones
description: Formula integral de Cauchy, derivadas por integrales, Liouville, algebra fundamental y valor medio.
---

# Formula Integral de Cauchy y Aplicaciones

## Formula integral de Cauchy

Si $f$ es holomorfa en un dominio que contiene la curva cerrada simple $\gamma$ y su interior, y $z_0$ esta dentro de la curva, entonces

$$
f(z_0)=\frac{1}{2\pi i}\oint_{\gamma}\frac{f(\zeta)}{\zeta-z_0}\,d\zeta.
$$

### Importancia

Esta formula es el corazon operativo de la teoria compleja. A partir de ella se obtienen derivadas de todo orden, estimaciones, series de Taylor y teoremas globales.

## Significado estructural

El valor interior de una funcion holomorfa queda completamente determinado por sus valores sobre una curva que rodea el punto.

### Moral

Las funciones holomorfas no tienen grados de libertad locales independientes: estan rigidamente atadas a los datos de contorno.

## Usando la formula integral de Cauchy con derivadas

Derivando respecto de $z_0$,

$$
f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_{\gamma}\frac{f(\zeta)}{(\zeta-z_0)^{n+1}}\,d\zeta.
$$

### Consecuencia

Si una funcion es holomorfa, entonces tiene derivadas de todo orden.

### Moral

En variable compleja, derivabilidad una vez ya implica suavidad infinita y mas aun: analiticidad.

## Series de Taylor

La formula de derivadas permite expandir

$$
f(z)=\sum_{n=0}^{\infty}\frac{f^{(n)}(z_0)}{n!}(z-z_0)^n
$$

dentro del disco de holomorfia apropiado.

### Importancia

Las funciones holomorfas son exactamente funciones dadas localmente por series de potencias.

## Estimaciones de Cauchy

Si $|f(\zeta)|\le M$ sobre un circulo de radio $R$ centrado en $z_0$, entonces

$$
|f^{(n)}(z_0)| \le \frac{n! M}{R^n}.
$$

### Lectura

Las derivadas quedan controladas por el tamano de la funcion en la frontera. Este es otro signo de rigidez.

## Demo: teorema de Liouville

Si $f$ es entera y acotada en todo $\mathbb{C}$, entonces $f$ es constante.

### Demostracion esquematica

Aplicando la estimacion de Cauchy con radios arbitrariamente grandes,

$$
|f'(z_0)|\le \frac{M}{R}.
$$

Al hacer $R\to\infty$, se obtiene $f'(z_0)=0$ para todo $z_0$.

### Moral

Una funcion entera no puede ser simultaneamente no trivial y globalmente acotada.

## Demo: teorema fundamental del algebra

Todo polinomio complejo no constante tiene al menos una raiz en $\mathbb{C}$.

### Esquema

Si un polinomio $P$ no tuviera raices, entonces $1/P$ seria entera. Ademas, para $|z|$ grande,

$$
|P(z)|\to\infty,
$$

luego $1/P$ seria acotada. Por Liouville, seria constante, contradiccion.

### Importancia

Esta es una de las demostraciones mas limpias de un teorema puramente algebraico usando analisis complejo.

## Demo: teorema del valor medio de Gauss

Si $f$ es holomorfa, entonces sobre discos la media de $f$ en la circunferencia reproduce el valor en el centro:

$$
f(z_0)=\frac{1}{2\pi}\int_0^{2\pi} f(z_0+re^{it})\,dt.
$$

### Lectura

Las funciones holomorfas comparten con las armonicas una propiedad de promedio extraordinariamente fuerte.

## Consecuencias globales

La formula de Cauchy implica:

- analiticidad local;
- principio del maximo;
- unicidad por continuation;
- rigidez de ceros;
- desarrollo en series.

## Principio del maximo, idea

Si una funcion holomorfa alcanza un maximo interior de modulo, entonces es constante.

### Moral

Una funcion holomorfa no puede tener picos interiores aislados como una funcion real cualquiera.

## Ceros aislados

Si $f$ es holomorfa y no identicamente nula, sus ceros son aislados.

### Importancia

Otra vez la teoria excluye comportamientos intermedios blandos: o la funcion es identicamente cero o sus ceros quedan separados.

## Ejemplo guiado: exponencial

La funcion

$$
e^z
$$

es entera y no tiene ceros. Eso muestra que el teorema fundamental del algebra no vale para funciones enteras generales: es una propiedad especifica de polinomios.

## Ejemplo guiado: seno

La funcion

$$
\sin z
$$

es entera y sus ceros son

$$
n\pi, \qquad n\in \mathbb{Z}.
$$

### Lectura

Los ceros son discretos y se organizan globalmente de manera muy rigida.

## Integrales especiales, idea general

La formula de Cauchy permite calcular integrales donde aparece el kernel

$$
\frac{1}{\zeta-z_0}
$$

y sirve como punto de partida para residuos y contornos mas elaborados.

## Conexion con Fourier y Laplace

Muchas representaciones integrales y deformaciones en Fourier-Laplace usan principios que, en el fondo, son aplicaciones de Cauchy y de la holomorfia de integrandos complejos.

## Errores frecuentes

- usar la formula de Cauchy sin asegurar que el punto esta dentro del contorno;
- olvidar la orientacion positiva;
- pensar que una funcion complejamente derivable una vez podria no tener derivadas superiores;
- extrapolar Liouville a funciones no enteras;
- confundir valor medio de funciones holomorfas con promedio de modulos.

## Practica recomendada

1. Derivar la formula de las derivadas de Cauchy a partir de la formula integral.
2. Probar Liouville usando estimaciones de Cauchy.
3. Deducir el teorema fundamental del algebra desde Liouville.
4. Verificar la propiedad de valor medio en un ejemplo concreto.
5. Estudiar como la formula integral implica analiticidad por series de Taylor.

## Cierre

La formula integral de Cauchy es el centro de gravedad del bloque. Resume de manera casi milagrosa la rigidez de las funciones holomorfas y convierte la analiticidad en una fuente inagotable de teoremas globales, estimaciones y consecuencias algebraicas.
