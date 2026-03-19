---
title: Fase Estacionaria e Integrales Oscilatorias
description: Metodo asintotico para integrales de alta frecuencia y fundamento de dispersion, propagacion y optica geometrica.
---

# Fase Estacionaria e Integrales Oscilatorias

## Por que importan las fases oscilatorias

Muchas soluciones de EDP y muchas transformadas se escriben como integrales del tipo

$$
I(\lambda)=\int a(x)e^{i\lambda \phi(x)}\,dx,
\qquad \lambda\gg 1.
$$

Aqui:

- $a$ es la amplitud;
- $\phi$ es la fase;
- $\lambda$ mide alta frecuencia.

La pregunta central es: que ocurre cuando la oscilacion se hace muy rapida.

## Cancelacion oscilatoria

Cuando $\phi'(x)\ne 0$, las oscilaciones vecinas tienden a cancelarse.

### Moral

La contribucion dominante no viene de todas partes del dominio, sino de regiones donde la fase deja de oscilar "a primer orden".

## Puntos estacionarios

Un punto $x_0$ tal que

$$
\nabla \phi(x_0)=0
$$

se llama punto estacionario.

### Importancia

En alta frecuencia, los principales aportes asintoticos suelen venir de puntos estacionarios o de fronteras.

## Lema de fase no estacionaria

Si la derivada de la fase no se anula en la region de integracion, integraciones por partes repetidas muestran que

$$
I(\lambda)=O(\lambda^{-N})
$$

para todo $N$, bajo hipotesis adecuadas.

### Lectura

Sin puntos estacionarios, la integral se hace pequena mas rapido que cualquier potencia.

## Metodo de fase estacionaria

Si $\phi$ tiene un punto estacionario no degenerado, el comportamiento dominante de $I(\lambda)$ viene dado por una expansion asintotica local cerca de ese punto.

En una dimension:

$$
I(\lambda)\sim
a(x_0)e^{i\lambda \phi(x_0)}
e^{i\frac{\pi}{4}\operatorname{sgn}(\phi''(x_0))}
\left(\frac{2\pi}{\lambda |\phi''(x_0)|}\right)^{1/2}.
$$

### Moral

Alta frecuencia no elimina toda la integral: selecciona geomatricamente los puntos donde la fase se estaciona.

## Significado geometrico

Los puntos estacionarios son lugares donde la interferencia deja de cancelarse a primer orden.

Esto explica:

- patrones de difraccion;
- decaimiento dispersivo;
- concentracion de rayos;
- asintotica semiclasica.

## Ejemplo guiado: transformada de superficie

Las estimaciones de decaimiento de transformadas de medidas sobre curvas y superficies dependen de la curvatura porque esta controla la no degeneracion de la fase estacionaria.

### Lectura

Curvatura y decaimiento de Fourier estan ligados.

## Ejemplo guiado: Schrodinger libre

La solucion del problema libre se escribe como integral oscilatoria. El decaimiento

$$
\|u(t)\|_{L^\infty}\lesssim |t|^{-n/2}\|u_0\|_{L^1}
$$

se obtiene, en esencia, por fase estacionaria.

### Importancia

La dispersion no es magia: es cancelacion oscilatoria cuantificada.

## Van der Corput

Las desigualdades de Van der Corput son herramientas cuantitativas para controlar integrales oscilatorias mediante derivadas de la fase.

### Moral

Permiten convertir geometria de la fase en tasas concretas de decaimiento.

## Integrales oscilatorias como distribuciones

A veces la integral no converge absolutamente, pero si define una distribucion oscilatoria.

### Importancia

Este punto conecta con distribuciones temperadas, parametrices y operadores de Fourier integral.

## Optica geometrica

En regimens de alta frecuencia se usan ansatz como

$$
u(x)\approx a(x)e^{i\phi(x)/h}.
$$

La fase satisface una ecuacion eikonal y la amplitud una ecuacion de transporte.

### Lectura

La fase estacionaria es la huella asintotica de esa separacion entre rayo y amplitud.

## Fronteras y extremos

Si el punto relevante esta en la frontera o la fase es degenerada, el analisis cambia:

- aparecen exponente de decaimiento distintos;
- se requieren cambios de variable adaptados;
- surgen funciones especiales tipo Airy.

## Relacion con microlocalidad

La propagacion de singularidades y los operadores de Fourier integral se apoyan en las mismas ideas:

- fase;
- amplitud;
- flujo hamiltoniano;
- localizacion de contribuciones dominantes.

## Relacion con numero-teoria armonica

Sumas exponenciales y problemas de conteo tambien usan cancelacion oscilatoria. La filosofia es la misma:

alta oscilacion implica pequena suma o integral salvo en geometria especial.

## Ejemplo guiado: gaussiana oscilatoria

Integrales tipo

$$
\int e^{i\lambda x^2}\,dx
$$

son el modelo elemental de fase estacionaria. El punto estacionario esta en $x=0$, y el exponente $-1/2$ del decaimiento ya aparece.

## Lo que ensena este bloque

Las integrales oscilatorias son la maquina oculta detras de:

- decaimiento dispersivo;
- aproximaciones semiclasicas;
- kernels de propagadores;
- formulas asintoticas de transformadas.

## Errores frecuentes

- tratar alta oscilacion como si siempre implicara pequenez uniforme sin mirar puntos estacionarios;
- ignorar el papel del Hessiano en la no degeneracion;
- olvidar contribuciones de frontera;
- pensar que fase estacionaria es solo tecnica formal y no geometria real;
- usar formulas asintoticas fuera del regimen de alta frecuencia.

## Practica recomendada

1. Aplicar fase no estacionaria en un ejemplo con $\phi'\ne 0$.
2. Calcular el primer termino de fase estacionaria en una integral unidimensional simple.
3. Relacionar dispersion de Schrodinger con cancelacion oscilatoria.
4. Estudiar el papel de la curvatura en transformadas de medidas de superficie.
5. Comparar fases no degeneradas y degeneradas.

## Cierre

Fase estacionaria e integrales oscilatorias son el puente entre Fourier y la geometria de propagacion. En este punto el bloque entra de lleno en el lenguaje de dispersion, semiclasica y analisis asintotico de alto nivel.
