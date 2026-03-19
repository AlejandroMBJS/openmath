---
title: Ecuaciones Dispersivas y Schrodinger
description: Entrada estructural a la dinamica dispersiva, el papel de Fourier y la ecuacion de Schrodinger como modelo central.
---

# Ecuaciones Dispersivas y Schrodinger

## Que significa dispersion

Una ecuacion es dispersiva cuando distintas frecuencias viajan con velocidades de fase o de grupo diferentes. El efecto no es difusion ni amortiguamiento:

- la masa o la energia pueden conservarse;
- la amplitud local decae porque la onda se reparte en el espacio;
- la oscilacion se reorganiza en vez de suavizarse por friccion.

### Comparacion rapida

- calor: disipa y suaviza;
- ondas: propaga con velocidad finita;
- dispersion: separa frecuencias y produce cancelacion oscilatoria.

## Modelo central: Schrodinger libre

La ecuacion lineal de Schrodinger en $\mathbb{R}^n$ es

$$
i\partial_t u+\Delta u=0,
\qquad
u(0,x)=u_0(x).
$$

Aplicando Fourier en espacio:

$$
i\partial_t \widehat{u}(t,\xi)-|\xi|^2\widehat{u}(t,\xi)=0.
$$

Entonces

$$
\widehat{u}(t,\xi)=e^{-it|\xi|^2}\widehat{u_0}(\xi).
$$

### Lectura

Cada frecuencia gira con fase distinta. Esa diferencia de fase es el origen de la dispersion.

## Conservacion de masa

La cantidad

$$
M(u)=\int_{\mathbb{R}^n}|u(t,x)|^2\,dx
$$

se conserva.

En Fourier esto es natural porque

$$
|e^{-it|\xi|^2}|=1.
$$

No hay disipacion. La norma $L^2$ permanece constante.

## Conservacion de energia

Para la ecuacion libre, una energia natural es

$$
E(u)=\int_{\mathbb{R}^n} |\nabla u|^2\,dx.
$$

Tambien se conserva en el caso lineal. En modelos no lineales aparece una energia corregida por el potencial no lineal.

## Nucleo oscilatorio

La solucion puede escribirse como

$$
u(t,x)=K_t*u_0,
$$

con un nucleo oscilatorio complejo. A diferencia del calor:

- no es positivo;
- no produce promedio gaussiano;
- genera cancelacion por interferencia de fases.

## Decaimiento dispersivo

Aunque la norma $L^2$ se conserva, la norma $L^\infty$ puede decaer con el tiempo:

$$
\|u(t)\|_{L^\infty}
\le
C|t|^{-n/2}\|u_0\|_{L^1}.
$$

### Importancia

Esta desigualdad es el equivalente dispersivo del suavizado: no gana derivadas directamente, pero reparte la amplitud.

## Strichartz

Las estimaciones de Strichartz refinan el decaimiento dispersivo y controlan normas mixtas espacio-tiempo:

$$
\|u\|_{L_t^qL_x^r}
\le
C\|u_0\|_{L^2}
$$

para pares admisibles $(q,r)$.

### Rol

Son la herramienta principal para bien planteamiento local en muchas ecuaciones dispersivas semilineales.

## Semilineal dispersiva

Una familia central es

$$
i u_t+\Delta u = \lambda |u|^{p-1}u.
$$

Segun el signo y el exponente aparecen dos regimes:

- defocusing: la no linealidad tiende a dispersar;
- focusing: la no linealidad puede concentrar y producir blow-up.

## Escalamiento y criticidad

En Schrodinger no lineal, el exponente relevante depende del escalamiento que deja invariante la ecuacion. Esto determina si el problema es:

- subcritico;
- critico;
- supercritico.

### Moral

La dificultad no la decide solo el tamano de $p$, sino su posicion respecto de la simetria de escala del modelo.

## Ondas dispersivas mas alla de Schrodinger

El bloque dispersivo incluye tambien:

- Airy y KdV, donde el simbolo es cubico;
- ecuaciones de Klein-Gordon, con mezcla de oscilacion y masa;
- sistemas acoplados de fisica matematica.

El principio comun sigue siendo Fourier: la ley de fase controla la propagacion y la cancelacion.

## Velocidad de grupo

Si la fase es $\omega(\xi)$, la velocidad de grupo es formalmente

$$
\nabla_\xi \omega(\xi).
$$

Para Schrodinger libre,

$$
\omega(\xi)=|\xi|^2,
\qquad
\nabla_\xi \omega(\xi)=2\xi.
$$

Distintas frecuencias viajan con distintas velocidades. Esa es la fuente directa de la expansion del paquete de ondas.

## Paquetes de ondas

Un dato concentrado tanto en posicion como en frecuencia se propaga aproximadamente siguiendo la dinamica de la velocidad de grupo. Esta idea conecta:

- analisis de Fourier;
- optica geometrica;
- mecanica cuantica semiclasica.

## Duhamel dispersivo

Para

$$
i u_t+\Delta u = N(u),
\qquad
u(0)=u_0,
$$

la formula integral es

$$
u(t)=e^{it\Delta}u_0-i\int_0^t e^{i(t-s)\Delta}N(u(s))\,ds.
$$

Igual que en calor, esto convierte la ecuacion en un problema de punto fijo. La diferencia es que ahora la ganancia no viene de positividad y suavizado gaussiano, sino de decaimiento oscilatorio y Strichartz.

## Scattering

Un fenomeno profundo de la teoria dispersiva es el scattering:

para tiempos grandes, una solucion no lineal puede parecerse a una solucion lineal, en el sentido de que existe $u_+$ tal que

$$
\|u(t)-e^{it\Delta}u_+\| \to 0
$$

en una norma adecuada cuando $t\to+\infty$.

### Lectura

La no linealidad importa en tiempos finitos, pero a gran escala la dispersion puede dominar y devolver el sistema a un comportamiento libre.

## Blow-up dispersivo

En regimen focusing, la dispersion puede no bastar para contrarrestar la no linealidad. Entonces:

- la masa se concentra;
- ciertas normas explotan;
- pueden formarse perfiles autosimilares.

El equilibrio entre conservacion, dispersion y no linealidad es el centro del analisis.

## Conexion con Fourier y variable compleja

Las ecuaciones dispersivas son un punto de union natural entre:

- analisis armonico;
- EDP no lineales;
- mecanica cuantica;
- asintotica oscilatoria;
- variable compleja, via metodos de fase y deformacion de contornos en algunos problemas.

## Ejemplo guiado: Gaussiana en Schrodinger libre

Una gaussiana inicial sigue siendo explicitamente tratable y muestra bien el fenomeno:

- el perfil no se conserva rigidamente;
- el ancho crece con el tiempo;
- la masa total permanece constante.

Es la contraparte dispersiva del nucleo del calor: en ambos casos Fourier da formula exacta, pero el significado dinamico es distinto.

## Que cambia respecto de leyes de conservacion

En leyes hiperbolicas no lineales aparecen choques y perdida de suavidad por compresion.

En dispersion:

- las singularidades no necesariamente se convierten en choques;
- la oscilacion y la cancelacion dominan;
- las herramientas principales son Fourier, fases oscilatorias y estimaciones espacio-tiempo.

## Errores frecuentes

- confundir decaimiento local con disipacion de energia;
- creer que conservacion de masa impide blow-up;
- tratar Strichartz como una version exotica de Sobolev cuando en realidad mezcla espacio y tiempo;
- pensar que toda ecuacion compleja es automaticamente dispersiva;
- ignorar el papel del escalamiento y la criticidad.

## Practica recomendada

1. Resolver la ecuacion de Schrodinger libre en Fourier.
2. Comparar la formula de Duhamel de Schrodinger con la del calor.
3. Explicar la diferencia entre masa conservada y decaimiento en $L^\infty$.
4. Describir cualitativamente el significado de la velocidad de grupo.
5. Relacionar el concepto de scattering con el predominio asintotico de la parte lineal.

## Cierre

Las ecuaciones dispersivas introducen un tercer gran mecanismo dinamico, distinto de la difusion y de la propagacion hiperbolica clasica. En ellas la estructura oscilatoria es la protagonista. La ecuacion de Schrodinger es el modelo central porque muestra con claridad como Fourier, conservacion, escalamiento y no linealidad se entrelazan en un bloque ya claramente doctoral.
