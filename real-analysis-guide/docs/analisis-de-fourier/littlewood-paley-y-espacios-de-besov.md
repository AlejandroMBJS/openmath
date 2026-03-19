---
title: Littlewood-Paley y Espacios de Besov
description: Descomposicion dyadica por frecuencias, control por escalas y espacios finos de regularidad.
---

# Littlewood-Paley y Espacios de Besov

## Idea central

Una sola norma global en frecuencia a veces oculta informacion importante. Littlewood-Paley descompone una funcion por escalas dyadicas:

$$
f \sim \sum_{j\in \mathbb{Z}} \Delta_j f,
$$

donde cada $\Delta_j f$ localiza frecuencias del orden $2^j$.

### Lectura

En vez de mirar "todo el espectro", se mira escala por escala.

## Particion dyadica

Se eligen funciones suaves en frecuencia que separan:

- bajas frecuencias;
- bandas intermedias $|\xi|\sim 2^j$;
- altas frecuencias.

### Importancia

La descomposicion se hace suave para evitar artefactos de cortes bruscos y conservar buena teoria de operadores.

## Cuadraticas de Littlewood-Paley

Una cantidad tipica es la square function

$$
S(f)(x)=\left(\sum_j |\Delta_j f(x)|^2\right)^{1/2}.
$$

### Moral

En muchos casos, $\|S(f)\|_{L^p}$ es equivalente a $\|f\|_{L^p}$. Eso permite reconstruir normas globales a partir de bandas frecuenciales.

## Por que esto es profundo

No es solo una descomposicion contable del espectro. La equivalencia de normas dice que la informacion esencial de $L^p$ se puede repartir de manera estable por escalas.

## Sobolev via dyadico

La regularidad Sobolev puede leerse como control ponderado de bloques dyadicos:

$$
\|f\|_{H^s}^2
\sim
\sum_j 2^{2sj}\|\Delta_j f\|_{L^2}^2.
$$

### Lectura

Cada escala contribuye segun su peso $2^{sj}$.

## Besov

Los espacios de Besov refinan Sobolev sustituyendo la suma cuadratica por una suma $\ell^q$ de bloques:

$$
\|f\|_{B^s_{p,q}}
\sim
\left(\sum_j (2^{sj}\|\Delta_j f\|_{L^p})^q\right)^{1/q}.
$$

### Importancia

Esto permite medir regularidad de forma mucho mas fina.

## Que miden los Besov

Los Besov distinguen:

- suavidad;
- integrabilidad;
- forma en que la energia se reparte entre escalas.

### Moral

Dos funciones con la misma regularidad Sobolev pueden diferir notablemente en estructura dyadica.

## Holder como Besov

Los espacios Holder aparecen como casos particulares de Besov:

$$
C^\alpha \sim B^\alpha_{\infty,\infty}
$$

en el sentido adecuado.

### Lectura

Littlewood-Paley no es un formalismo exotico: reorganiza espacios clasicos conocidos.

## Paradiferencialidad

Cuando se multiplica una funcion de baja frecuencia con otra de alta frecuencia, el producto tiene estructura asimetrica. La teoria paradiferencial de Bony explota exactamente esa descomposicion.

### Importancia

Esto es central en:

- Navier-Stokes;
- ecuaciones cuasilineales;
- EDP dispersivas;
- regularidad baja.

## Bony

De forma esquematica:

$$
fg = T_f g + T_g f + R(f,g),
$$

donde:

- $T_f g$ representa baja frecuencia de $f$ actuando sobre alta de $g$;
- $R$ agrupa interacciones de frecuencias comparables.

### Moral

No todo producto debe tratarse de una vez: se descompone por interaccion de escalas.

## Escalamiento critico

En muchas EDP, el espacio natural se detecta mirando la invariancia de escala del problema. Los Besov y Sobolev homoganeos son el lenguaje ideal para formular esa criticidad.

### Ejemplo

Navier-Stokes en 3D tiene espacios criticos ligados a potencias que compensan la dilatacion del flujo.

## Bernstein

Las desigualdades de Bernstein permiten convertir localizacion frecuencial en control de derivadas:

si $\widehat{f}$ esta soportada en $|\xi|\lesssim 2^j$, entonces

$$
\|\nabla^k f\|_{L^q}
\lesssim
2^{jk + jn(\frac1p-\frac1q)}\|f\|_{L^p}.
$$

### Importancia

Estas desigualdades son el motor cuantitativo de la teoria por bloques.

## Ejemplo guiado: regularidad por escalas

Si una funcion tiene bloques $\Delta_j f$ que decrecen muy rapido al crecer $j$, entonces la funcion es muy suave. Si decrecen solo como una potencia, la regularidad es finita. Si no decrecen, aparecen singularidades.

### Lectura

La suavidad se convierte en una ley de decaimiento por escalas.

## Conexion con wavelets

Wavelets bien elegidas proporcionan descomposiciones equivalentes a Besov y Holder.

### Moral

La teoria de wavelets y Littlewood-Paley son dos lenguajes para la misma filosofia: analizar por escalas.

## Conexion con multiplicadores

Los multiplicadores suaves por bandas son precisamente los bloques dyadicos del analisis Littlewood-Paley. Por eso la teoria une Fourier global con control local por frecuencias.

## Errores frecuentes

- pensar que la descomposicion dyadica depende esencialmente de una particion concreta;
- confundir suma de bloques con convergencia puntual simple;
- ignorar el rol del exponente $q$ en Besov;
- creer que Sobolev basta siempre donde la estructura por escalas es critica;
- usar productos no lineales sin separar interacciones de frecuencia.

## Practica recomendada

1. Explicar como una particion dyadica organiza el espectro.
2. Reescribir una norma Sobolev en terminos de bloques Littlewood-Paley.
3. Comparar Sobolev y Besov desde el punto de vista del parametro $q$.
4. Estudiar la descomposicion de Bony de forma heuristica.
5. Relacionar regularidad con decaimiento de coeficientes por escalas.

## Cierre

Littlewood-Paley y Besov llevan Fourier a un nivel donde la regularidad se mide escala por escala. Este es el lenguaje de muchas EDP no lineales modernas y de una parte sustancial del analisis armonico contemporaneo.
