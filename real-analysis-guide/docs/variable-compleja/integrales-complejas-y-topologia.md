---
title: Integrales Complejas y Topologia
description: Integrales de linea complejas, parametrizacion de contornos y papel de conexidad y simple conexidad.
---

# Integrales Complejas y Topologia

## Integrales complejas de linea

Si $\gamma:[a,b]\to \mathbb{C}$ es una curva suave a trozos y $f$ es continua sobre su imagen, definimos

$$
\int_{\gamma} f(z)\,dz
=
\int_a^b f(\gamma(t))\gamma'(t)\,dt.
$$

### Lectura

La integral compleja es una integral de linea con peso complejo. Su dependencia del camino sera el gran tema estructural del bloque.

## Parametrizacion

La integral no depende de la parametrizacion orientada concreta, sino de la curva orientada.

### Moral

Lo relevante es el camino en el plano complejo y su orientacion, no la velocidad a la que se recorre.

## Descomposicion real

Si

$$
f=u+iv,
\qquad
z=x+iy,
$$

entonces

$$
f(z)\,dz = (u+iv)(dx+i\,dy).
$$

Esto separa la integral en integrales reales acopladas.

### Importancia

Esta forma permite conectar integrales complejas con teoremas de Green y con condiciones de exactitud.

## Integrales sobre curvas cerradas

Cuando $\gamma$ es cerrada, se escribe a menudo

$$
\oint_{\gamma} f(z)\,dz.
$$

El punto crucial es saber cuando esta integral es cero y cuando depende solo de la clase topologica del contorno.

## Ejemplo guiado: integral de una primitiva

Si $F$ es una primitiva de $f$ en un dominio y $\gamma$ va de $z_1$ a $z_2$, entonces

$$
\int_{\gamma} f(z)\,dz = F(z_2)-F(z_1).
$$

### Moral

La independencia del camino compleja es el analogo exacto del caso real, pero aqui estara forzada por holomorfia y topologia del dominio.

## Regiones conexas y simplemente conexas

Un dominio es conexo si cualquier par de puntos puede unirse por un camino dentro del dominio.

Es simplemente conexo si, ademas, toda curva cerrada puede contraerse continuamente a un punto dentro del dominio.

### Importancia

La simple conexidad es la hipotesis topologica natural para convertir condiciones locales de holomorfia en conclusiones globales sobre primitivas e integrales nulas.

## Plano perforado

El dominio

$$
\mathbb{C}\setminus\{0\}
$$

es conexo pero no simplemente conexo.

### Lectura

Este ejemplo sera central porque funciones como $1/z$ distinguen exactamente la presencia del agujero topologico.

## Ejemplo guiado: integral de 1/z

Sobre la circunferencia unidad orientada positivamente,

$$
\gamma(t)=e^{it}, \qquad 0\le t\le 2\pi,
$$

se tiene

$$
\int_{\gamma}\frac{1}{z}\,dz
=
\int_0^{2\pi}\frac{1}{e^{it}} i e^{it}\,dt
=
2\pi i.
$$

### Moral

La integral no se anula porque el contorno rodea una singularidad y el dominio perforado no es simplemente conexo.

## Orientacion

Invertir la orientacion cambia el signo:

$$
\int_{-\gamma} f(z)\,dz = -\int_{\gamma} f(z)\,dz.
$$

### Importancia

La orientacion es parte del dato geometrico del contorno.

## Estimacion ML

Si

$$
|f(z)|\le M
$$

en la curva $\gamma$ de longitud $L$, entonces

$$
\left|\int_{\gamma} f(z)\,dz\right|\le ML.
$$

### Lectura

Esta desigualdad elemental es una herramienta basica para hacer tender a cero integrales sobre arcos o segmentos grandes o pequenos.

## Homotopia de caminos

Dos caminos con los mismos extremos son homotopicos dentro del dominio si uno puede deformarse continuamente en el otro sin salir del dominio.

### Moral

En dominios adecuados, las integrales de funciones holomorfas dependen solo de la clase de homotopia del camino.

## Primitivas y topologia

Una funcion holomorfa puede no admitir primitiva global si el dominio tiene agujeros topologicos.

### Ejemplo

$$
f(z)=\frac{1}{z}
$$

es holomorfa en $\mathbb{C}\setminus\{0\}$, pero no tiene una primitiva global alli porque la integral sobre una curva cerrada que rodea el origen no es cero.

## Green complejo

La descomposicion real de la integral y el teorema de Green permiten probar formas tempranas del teorema de Cauchy bajo hipotesis suaves.

### Importancia

Esta es la puerta hacia Cauchy-Goursat y Morera.

## Curvas suaves a trozos

La teoria no necesita curvas lisas perfectas. Curvas suaves a trozos bastan para casi toda la integracion de contorno clasica.

### Moral

La geometria compleja es robusta frente a esquinas mientras la curva siga bien orientada y parametrizada.

## Conexion con ramas

La topologia del dominio influye directamente en:

- existencia de logaritmo global;
- existencia de raices globales;
- independencia del camino;
- primitivacion de holomorfas.

## Errores frecuentes

- olvidar la orientacion del contorno;
- creer que conexidad basta donde hace falta simple conexidad;
- pensar que holomorfia siempre implica existencia global de primitiva;
- ignorar el papel del agujero topologico en $\mathbb{C}\setminus\{0\}$;
- usar parametrizaciones distintas sin cuidar la misma imagen orientada.

## Practica recomendada

1. Calcular integrales sobre segmentos y circunferencias parametrizadas.
2. Verificar la invariancia respecto de reparametrizacion orientada.
3. Estudiar la integral de $1/z$ en curvas que rodean o no el origen.
4. Relacionar existencia de primitiva con anulacion de integrales cerradas.
5. Comparar conexidad y simple conexidad en ejemplos del plano.

## Cierre

Las integrales complejas y la topologia del plano son la plataforma exacta sobre la que se monta todo el teorema de Cauchy. Aqui ya aparece una idea central de variable compleja: la analiticidad local solo despliega toda su fuerza cuando se combina con la topologia adecuada del dominio.
