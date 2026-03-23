---
title: Formula de Integracion Euler-Maclaurin
description: Puente entre sumas e integrales, correcciones de borde y papel de Bernoulli en el analisis asintotico.
---

# Formula de Integracion Euler-Maclaurin

## Idea central

Euler-Maclaurin cuantifica la diferencia entre una suma discreta y la integral correspondiente. Es una de las formulas mas potentes del analisis clasico porque convierte una suma dificil en una integral mas correcciones de borde y terminos asintoticos.

## Forma basica

Si $f$ es suficientemente suave en $[a,b]$, entonces

$$
\sum_{n=a}^b f(n)=\int_a^b f(x)\,dx+\frac{f(a)+f(b)}{2}
+\sum_{k=1}^m \frac{B_{2k}}{(2k)!}\left(f^{(2k-1)}(b)-f^{(2k-1)}(a)\right)+R_m.
$$

Aqui $B_{2k}$ son numeros de Bernoulli y $R_m$ es el resto.

## Interpretacion de los terminos

- la integral es la aproximacion continua principal;
- el promedio de extremos corrige el efecto de borde mas grueso;
- los terminos con Bernoulli corrigen curvaturas sucesivas;
- el resto mide la precision de truncar la expansion.

## Ejemplo elemental

Aplicada a potencias, Euler-Maclaurin recupera las formulas de Faulhaber para

$$
\sum_{n=1}^N n^p.
$$

Aplicada a funciones mas generales produce expansiones asintoticas muy precisas.

## Restos y precision

El resto puede escribirse mediante polinomios de Bernoulli periodizados, lo cual permite obtener cotas cuantitativas. En muchas aplicaciones no interesa una convergencia exacta de la serie correctiva, sino truncarla en el orden optimo para obtener la mejor aproximacion asintotica.

## Aplicaciones clasicas

Euler-Maclaurin aparece en:

- aproximacion de sumas por integrales;
- derivacion de Stirling;
- estudio de la zeta de Riemann;
- errores de cuadratura;
- teoria espectral y suma de modos.

## Lectura fisica

En fisica matematica la formula mide la diferencia entre descripciones discretas y continuas. Esto es crucial al pasar de redes finitas a limites continuos, o al estimar densidades de estados frente a conteos discretos.

## Cierre

Euler-Maclaurin es la herramienta maestra para traducir entre sumacion e integracion. Su contenido profundo es que el error entre ambas no es caotico: tiene una estructura universal gobernada por Bernoulli y por derivadas en la frontera.
