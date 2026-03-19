---
title: Transformada de Laplace y Funcion del Sistema
description: Laplace como herramienta para LTI causales, funcion de transferencia y relacion con ecuaciones diferenciales.
---

# Transformada de Laplace y Funcion del Sistema

## Transformada de Laplace y los LTI

Para una senal causal $x(t)$, la transformada de Laplace es

$$
X(s)=\int_0^{\infty} e^{-st}x(t)\,dt,
\qquad s=\sigma+i\omega.
$$

### Lectura

Laplace incorpora a la vez:

- oscilacion, a traves de $i\omega$;
- decaimiento o crecimiento, a traves de $\sigma$.

Por eso sirve mejor que Fourier cuando la senal no es absolutamente integrable pero si tiene crecimiento controlado.

## Region de convergencia

La transformada no se define solo por una formula; tambien por el conjunto de $s$ donde converge.

### Importancia

La region de convergencia:

- distingue senales distintas con igual expresion algebraica formal;
- codifica causalidad y estabilidad;
- decide si la transformada de Fourier aparece como restriccion sobre el eje imaginario.

## Convolucion y producto

Si $y=x*h$, entonces

$$
Y(s)=X(s)H(s).
$$

### Moral

Laplace convierte el operador temporal de convolucion en multiplicacion algebraica. Esta es la razon estructural por la que simplifica los sistemas LTI.

## Funcion del sistema

Para un sistema LTI causal con respuesta impulsional $h(t)$, la funcion del sistema o funcion de transferencia es

$$
H(s)=\mathcal{L}\{h\}(s).
$$

La salida queda dada por

$$
Y(s)=H(s)X(s).
$$

### Lectura

$H(s)$ resume el sistema entero en el plano complejo.

## Sistemas LTI con ecuaciones diferenciales

Sea

$$
a_m y^{(m)}+\cdots+a_0 y
=
b_r x^{(r)}+\cdots+b_0 x.
$$

Si las condiciones iniciales son nulas, aplicando Laplace:

$$
(a_m s^m+\cdots+a_0)Y(s)
=
(b_r s^r+\cdots+b_0)X(s).
$$

Por tanto,

$$
H(s)=\frac{Y(s)}{X(s)}
=
\frac{b_r s^r+\cdots+b_0}{a_m s^m+\cdots+a_0}.
$$

### Importancia

La ecuacion diferencial se transforma en una funcion racional.

## Polos y ceros

Los ceros de $H(s)$ anulan ciertas componentes del sistema. Los polos describen resonancias, modos naturales y restricciones de estabilidad.

### Moral

La geometria analitica de $H(s)$ en el plano complejo es la version espectral del comportamiento dinamico del sistema.

## Respuesta impulsional y polos

Para sistemas racionales causales, la descomposicion en fracciones parciales permite escribir $h(t)$ como combinacion de:

- exponenciales;
- exponenciales por polinomios;
- senos y cosenos amortiguados.

Esto recupera directamente la teoria de EDO lineales con coeficientes constantes.

## Causalidad y ROC

En sistemas causales, la region de convergencia suele ser un semiplano a la derecha del polo mas a la derecha.

### Lectura

La misma expresion racional puede representar respuestas distintas si cambia la region de convergencia.

## Estabilidad y polos

Para un sistema racional causal continuo, una condicion clasica de estabilidad BIBO es que todos los polos tengan parte real estrictamente negativa.

### Relacion con Fourier

Si el eje imaginario queda dentro de la region de convergencia, entonces puede evaluarse

$$
H(i\omega),
$$

y aparece la respuesta en frecuencia.

## Fourier y Laplace

Fourier es, en muchos casos, una seccion de Laplace sobre el eje imaginario:

$$
\mathcal{F}\{x\}(\omega)=X(i\omega)
$$

si la region de convergencia lo permite.

### Moral

Laplace es mas flexible para evolucion y causalidad. Fourier es mas natural para analisis de frecuencia pura y conservacion espectral.

## Ejemplo guiado: sistema de primer orden

Sea

$$
y'(t)+a y(t)=x(t), \qquad a>0.
$$

Con dato inicial nulo:

$$
(s+a)Y(s)=X(s).
$$

Entonces

$$
H(s)=\frac{1}{s+a}.
$$

La respuesta impulsional es

$$
h(t)=e^{-at}H(t).
$$

### Lectura

El polo en $s=-a$ codifica el decaimiento exponencial del sistema.

## Diagrama de bloques mental

En lenguaje de senales, un LTI causal racional puede leerse como:

- dinamica interna descrita por polos;
- cancelaciones o atenuaciones descritas por ceros;
- salida obtenida multiplicando la entrada por $H(s)$ en el dominio transformado.

## Inversion de Laplace

Recuperar $y(t)$ desde $Y(s)$ puede hacerse por:

- tablas y fracciones parciales;
- propiedades operativas;
- formula integral compleja en contextos mas avanzados.

Esto ya conecta naturalmente con variable compleja.

## Relaciones operativas

Propiedades tipicas:

- derivacion temporal:

$$
\mathcal{L}\{x'(t)\}=sX(s)-x(0^+);
$$

- desplazamiento temporal;
- multiplicacion por exponencial;
- integracion temporal.

Estas reglas permiten resolver sistemas sin rehacer integrales desde cero.

## Que prepara este capitulo

Laplace prepara:

- respuesta en frecuencia;
- filtros racionales;
- control lineal;
- puentes con variable compleja;
- sistemas discretos via analogia con Z.

## Errores frecuentes

- olvidar la region de convergencia;
- usar $H(s)=Y/X$ sin verificar condiciones iniciales nulas;
- identificar Fourier y Laplace sin comprobar convergencia en el eje imaginario;
- leer polos solo algebraicamente y no dinamicamente;
- pensar que la misma expresion racional determina por si sola la senal en tiempo.

## Practica recomendada

1. Calcular $H(s)$ para varios sistemas diferenciales lineales.
2. Relacionar polos y estabilidad en ejemplos concretos.
3. Recuperar $h(t)$ por fracciones parciales.
4. Comparar una misma fraccion racional con distintas regiones de convergencia.
5. Estudiar cuando Fourier puede obtenerse como restriccion de Laplace.

## Cierre

La transformada de Laplace organiza la teoria de sistemas LTI causales en el plano complejo. Convierte dinamica en algebra, pero sin perder la informacion esencial: causalidad, estabilidad y modos naturales. Es la antesala exacta de la respuesta en frecuencia y de la teoria compleja del bloque.
