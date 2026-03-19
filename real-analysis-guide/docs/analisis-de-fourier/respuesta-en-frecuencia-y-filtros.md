---
title: Respuesta en Frecuencia y Filtros
description: Interpretacion frecuencial de sistemas LTI, ganancia, fase, filtros y ancho de banda.
---

# Respuesta en Frecuencia y Filtros

## Respuesta en frecuencia

Si un sistema LTI admite funcion de transferencia $H(s)$ y el eje imaginario pertenece a la region de convergencia, la respuesta en frecuencia es

$$
H(i\omega).
$$

### Lectura

Es la ganancia compleja con la que el sistema trata la frecuencia pura $e^{i\omega t}$.

## Autofunciones exponenciales

Para un sistema LTI, la entrada

$$
x(t)=e^{i\omega t}
$$

produce una salida de la forma

$$
y(t)=H(i\omega)e^{i\omega t}.
$$

### Moral

Las exponenciales complejas son autofunciones de los sistemas LTI. Esa es la razon profunda de la respuesta en frecuencia.

## LTI aplicando Fourier

Si

$$
y = h*x,
$$

entonces

$$
\widehat{y}(\omega)=\widehat{h}(\omega)\widehat{x}(\omega).
$$

Identificando

$$
H(i\omega)=\widehat{h}(\omega),
$$

la salida se obtiene multiplicando espectros.

### Importancia

El sistema deja de mezclar tiempos y pasa a actuar frecuencia por frecuencia.

## Ganancia y fase

La cantidad

$$
H(i\omega)=|H(i\omega)|e^{i\phi(\omega)}
$$

se interpreta como:

- $|H(i\omega)|$: ganancia o atenuacion;
- $\phi(\omega)$: desplazamiento de fase.

### Lectura

Un sistema no solo amplifica o atenua frecuencias; tambien retrasa o adelanta su fase.

## Filtros

Un filtro es un sistema disenado para modificar selectivamente el contenido frecuencial de una senal.

Categorias clasicas:

- pasa-bajas;
- pasa-altas;
- pasa-banda;
- rechaza-banda.

## Pasa-bajas

Deja pasar frecuencias pequenas y atenua las altas.

### Uso

- suavizado;
- eliminacion de ruido de alta frecuencia;
- reconstruccion despues de muestreo.

## Pasa-altas

Atenua bajas frecuencias y deja pasar altas.

### Uso

- deteccion de bordes;
- eliminacion de tendencias lentas;
- realce de cambios abruptos.

## Pasa-banda y rechaza-banda

Un pasa-banda selecciona una ventana frecuencial. Un rechaza-banda elimina un rango concreto, por ejemplo una interferencia periodica.

## Ancho de banda

El ancho de banda mide el rango de frecuencias que un sistema transmite de forma significativa.

### Lectura

No es solo una cifra ingenieril. Resume resolucion temporal, capacidad de transmision y selectividad espectral.

## Filtro ideal vs filtro realizable

Un filtro ideal de corte perfecto suele requerir una respuesta impulsional no causal o no integrable.

### Moral

La selectividad perfecta en frecuencia entra en tension con causalidad y localizacion temporal.

## Ejemplo guiado: primer orden pasa-bajas

Con

$$
H(s)=\frac{1}{s+a}, \qquad a>0,
$$

la respuesta en frecuencia es

$$
H(i\omega)=\frac{1}{a+i\omega}.
$$

Su modulo es

$$
|H(i\omega)|=\frac{1}{\sqrt{a^2+\omega^2}}.
$$

### Lectura

Cuando $|\omega|$ crece, la ganancia decae. El sistema atenua altas frecuencias: es un pasa-bajas elemental.

## Resonancia y picos de respuesta

En sistemas de segundo orden, la respuesta en frecuencia puede mostrar picos alrededor de frecuencias naturales.

### Importancia

La resonancia explica por que una frecuencia concreta puede dominar la salida aunque la entrada tenga varias componentes.

## Fase y retardo de grupo

La fase no es solo un adorno complejo. Su variacion con $\omega$ controla:

- distorsion;
- retardo de componentes;
- deformacion temporal de pulsos.

## Fourier y diseno de filtros

Desde el punto de vista frecuencial, disenar un filtro significa elegir una funcion $H$ con propiedades deseadas:

- regularidad;
- banda de paso;
- banda de rechazo;
- causalidad aproximada o exacta;
- estabilidad.

## Ventana temporal y compromiso

Cuanto mas localizado este un filtro en tiempo, mas extendido tiende a estar en frecuencia, y viceversa.

### Moral

El filtrado siempre vive bajo un principio de compromiso tiempo-frecuencia.

## Version discreta

En tiempo discreto, las mismas ideas sobreviven con:

- respuesta impulsional $h[n]$;
- respuesta en frecuencia sobre el circulo unitario;
- filtros FIR e IIR;
- interpretacion en frecuencia digital.

## Que prepara este capitulo

Respuesta en frecuencia y filtros preparan:

- transformada Z;
- procesamiento digital;
- control;
- dispersion y analisis de propagadores;
- analisis experimental de sistemas reales.

## Errores frecuentes

- identificar espectro de la entrada con espectro de la salida sin multiplicar por la respuesta del sistema;
- mirar solo el modulo y olvidar la fase;
- suponer que filtro ideal implica realizabilidad fisica;
- usar ancho de banda sin especificar criterio de corte;
- confundir suavizado temporal con eliminacion perfecta de frecuencias altas.

## Practica recomendada

1. Calcular respuesta en frecuencia de varios sistemas racionales.
2. Clasificar filtros por el comportamiento de $|H(i\omega)|$.
3. Estudiar el efecto de fase en una senal con dos armonicos.
4. Relacionar anchura temporal de un filtro con selectividad frecuencial.
5. Comparar un pasa-bajas continuo con su version discreta.

## Cierre

La respuesta en frecuencia muestra la esencia espectral de los sistemas LTI: cada frecuencia entra y sale multiplicada por un numero complejo. Desde ahi, el filtrado deja de ser caja negra y se convierte en geometria de ganancia y fase.
