---
title: EDP Estocasticas
description: Ruido, formulaciones suaves y debiles, semigrupos y renormalizacion en ecuaciones diferenciales parciales estocasticas.
---

# EDP Estocasticas

## Por que introducir ruido

En muchos modelos la incertidumbre o la agitacion microscopica no puede ignorarse:

- fluctuaciones termicas;
- forzamiento turbulento;
- medios aleatorios;
- errores de modelizacion a escala fina.

Una EDP estocastica introduce ese efecto mediante un termino aleatorio, a menudo idealizado por ruido blanco o por un proceso de Wiener.

## Modelo abstracto

Una forma tipica es

$$
du = (Au + F(u))\,dt + G(u)\,dW_t,
$$

donde:

- $A$ es un operador lineal, frecuentemente generador de semigrupo;
- $F$ es la parte determinista no lineal;
- $G$ describe como entra el ruido;
- $W_t$ es un proceso de Wiener en espacio infinito dimensional o un ruido adecuado.

## Ruido aditivo y multiplicativo

- ruido aditivo: $G$ no depende de $u$;
- ruido multiplicativo: $G(u)$ depende del estado.

### Diferencia conceptual

El ruido multiplicativo cambia la propia geometria de la evolucion y puede alterar estabilidad, explosiones y regularidad de forma mucho mas sutil.

## Solucion mild

Si $A$ genera un semigrupo $S(t)$, la formulacion mild es

$$
u(t)=S(t)u_0 + \int_0^t S(t-s)F(u(s))\,ds + \int_0^t S(t-s)G(u(s))\,dW_s.
$$

### Lectura

Es la version estocastica de Duhamel. El ultimo termino es una integral estocastica.

## Integral de Ito

La integral

$$
\int_0^t H(s)\,dW_s
$$

no se interpreta como una integral de Riemann usual. Se define como limite en probabilidad y satisface una isometria fundamental:

$$
\mathbb{E}\left\|\int_0^t H(s)\,dW_s\right\|^2
=
\mathbb{E}\int_0^t \|H(s)\|_{\mathrm{HS}}^2\,ds.
$$

Aqui aparece la norma Hilbert-Schmidt cuando el ruido vive en un espacio de Hilbert.

## Solucion debil, fuerte y en ley

En EDP estocasticas hay varias nociones de solucion:

- fuerte en el sentido probabilistico: construida sobre un espacio de probabilidad dado y adaptada a un Wiener dado;
- debil en el sentido probabilistico: tambien se permite elegir el espacio de probabilidad;
- mild o variacional en el sentido analitico;
- en ley: importa la distribucion del proceso, no la trayectoria individual.

### Advertencia

"Fuerte" y "debil" aqui tienen dos sentidos posibles: uno analitico y otro probabilistico. Hay que distinguirlos con cuidado.

## Ejemplo: calor con ruido aditivo

Una ecuacion modelo es

$$
du = (\Delta u + f)\,dt + Q\,dW_t.
$$

El semigrupo calor suaviza, pero el ruido inyecta irregularidad continuamente.

### Moral

La solucion resulta del equilibrio entre suavizado determinista e inyeccion aleatoria de irregularidad.

## Martingalas y energia

En problemas estocasticos, la energia ya no satisface solo una identidad determinista. Aparece una version con termino martingala y correccion de Ito.

Para una funcion funcional adecuada $\Phi(u)$, la formula de Ito produce

$$
d\Phi(u_t)
=
\text{parte determinista}\,dt
+ \text{parte martingala}\,dW_t
+ \text{correccion de segundo orden}\,dt.
$$

## Regulares vs singulares

Algunas EDP estocasticas son tratables con semigrupos y puntos fijos en Sobolev o Holder. Otras son singularisimas:

- KPZ;
- Phi^4 en dimensiones criticas;
- Navier-Stokes con ruido en ciertos regimens;
- ecuaciones de reaccion-difusion con ruido blanco espacial.

En esos casos, el producto entre distribuciones deja de tener sentido clasico.

## Renormalizacion

Cuando el ruido es demasiado irregular, la ecuacion formal no esta bien definida sin corregir ciertos terminos divergentes.

La renormalizacion consiste en:

- regularizar el ruido;
- estudiar la ecuacion aproximada;
- sustraer terminos divergentes adecuados;
- pasar al limite a una ecuacion corregida.

### Importancia

La ecuacion escrita ingenuamente no siempre es la ecuacion matematica correcta.

## Regularity structures y paracontrol

Dos grandes marcos modernos para EDP estocasticas singulares son:

- estructuras de regularidad de Hairer;
- calculo paracontrolado.

No hace falta dominarlos aun, pero si entender por que surgieron: los metodos Sobolev y semigrupo estandar dejan de bastar cuando el ruido y la no linealidad interactuan por debajo del umbral clasico de multiplicacion.

## Medidas invariantes

Muchas EDP estocasticas tienen distribuciones invariantes o estacionarias. Esto las conecta con:

- sistemas dinamicos aleatorios;
- equilibrio estadistico;
- medidas de Gibbs;
- teoria ergodica infinita dimensional.

## Bien planteamiento y regularizacion por ruido

El ruido no solo complica. A veces tambien regulariza:

- puede prevenir coalescencia;
- puede restaurar unicidad en modelos mal planteados;
- puede mezclar escalas de manera favorable.

Este fenomeno se conoce como regularizacion por ruido.

## Ejemplo guiado: Ornstein-Uhlenbeck infinito dimensional

La ecuacion lineal

$$
du = Au\,dt + Q\,dW_t
$$

tiene solucion mild

$$
u(t)=S(t)u_0 + \int_0^t S(t-s)Q\,dW_s.
$$

El segundo termino es la convolucion estocastica.

### Lectura

Es la pieza elemental de muchisimas EDP estocasticas, del mismo modo que el semigrupo calor lo es en el caso determinista.

## Conexion con probabilidades

Este bloque enlaza directamente con:

- procesos gaussianos;
- martingalas;
- ecuaciones diferenciales estocasticas;
- medidas invariantes;
- grandes desviaciones.

La frontera entre probabilidad y EDP se vuelve especialmente delgada aqui.

## Conexion con fisica matematica

Las EDP estocasticas aparecen en:

- interfaces rugosas;
- ecuaciones de campo efectivas;
- turbulencia forzada;
- difusion en medios aleatorios;
- mecanica estadistica fuera de equilibrio.

## Errores frecuentes

- tratar la integral estocastica como una integral ordinaria;
- olvidar la distincion entre soluciones fuertes/debiles probabilisticas y analiticas;
- pensar que el ruido siempre destruye regularidad;
- ignorar la correccion de Ito en identidades energeticas;
- escribir una ecuacion singular sin preguntarse si el producto de distribuciones tiene sentido.

## Practica recomendada

1. Escribir la formulacion mild de una ecuacion del calor con ruido aditivo.
2. Explicar la diferencia entre ruido aditivo y multiplicativo.
3. Relacionar la convolucion estocastica con el semigrupo lineal.
4. Describir por que la renormalizacion aparece en ecuaciones singulares.
5. Comparar el papel del ruido en una EDO estocastica y en una EDP estocastica.

## Cierre

Las EDP estocasticas llevan el bloque al cruce entre analisis, probabilidad y fisica matematica. Introducen ruido, integracion de Ito, convolucion estocastica y, en regimens singulares, renormalizacion. Esa combinacion ya es inequivamente doctoral.
