---
title: Diferenciacion numerica
description: Aproximacion de derivadas mediante cocientes finitos, analisis por series de Taylor, errores de truncamiento y redondeo.
---

# Diferenciacion numerica

## Motivacion

En muchos problemas no disponemos de una formula cerrada para

$$
f,
$$

pero si de:

- valores tabulados;
- mediciones experimentales;
- evaluaciones numericas de una simulacion.

En ese contexto, calcular exactamente

$$
f'(x)
$$

no es posible. La idea es entonces aproximar la derivada usando diferencias finitas.

## Principio basico

La definicion de derivada dice que

$$
f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}.
$$

Si

$$
h
$$

es pequeno, es natural usar

$$
\frac{f(x+h)-f(x)}{h}
$$

como aproximacion de

$$
f'(x).
$$

La dificultad esta en cuantificar el error y en entender que hacer cuando

$$
h
$$

no puede hacerse arbitrariamente pequeno.

## Diferencia hacia adelante

Definimos

$$
D_h^+f(x)=\frac{f(x+h)-f(x)}{h}.
$$

Si

$$
f\in C^2
$$

en un entorno de

$$
x,
$$

Taylor da:

$$
f(x+h)=f(x)+hf'(x)+\frac{h^2}{2}f''(\xi).
$$

Por tanto,

$$
D_h^+f(x)=f'(x)+\frac{h}{2}f''(\xi).
$$

### Consecuencia

La diferencia hacia adelante tiene error de truncamiento de orden

$$
O(h).
$$

## Diferencia hacia atras

Anlogamente,

$$
D_h^-f(x)=\frac{f(x)-f(x-h)}{h}.
$$

Usando Taylor en

$$
x-h,
$$

se obtiene

$$
D_h^-f(x)=f'(x)+O(h).
$$

Esta formula es util cuando solo se dispone de valores hacia la izquierda del punto.

## Diferencia centrada

Definimos

$$
D_h^0f(x)=\frac{f(x+h)-f(x-h)}{2h}.
$$

Expandiendo

$$
f(x+h)
$$

y

$$
f(x-h)
$$

por Taylor:

$$
f(x+h)=f(x)+hf'(x)+\frac{h^2}{2}f''(x)+\frac{h^3}{6}f'''(\xi_1),
$$

$$
f(x-h)=f(x)-hf'(x)+\frac{h^2}{2}f''(x)-\frac{h^3}{6}f'''(\xi_2).
$$

Restando y dividiendo entre

$$
2h
$$

se obtiene

$$
D_h^0f(x)=f'(x)+O(h^2).
$$

### Comentario

La cancelacion de los terminos pares mejora el orden. Esta es la razon estructural por la que las formulas centradas suelen ser mas precisas que las unilaterales con el mismo numero de nodos.

## Derivadas segundas

Sumando las expansiones de Taylor:

$$
f(x+h)-2f(x)+f(x-h)=h^2f''(x)+O(h^4).
$$

Por tanto,

$$
\frac{f(x+h)-2f(x)+f(x-h)}{h^2}
=
f''(x)+O(h^2).
$$

Esta formula es central en diferencias finitas para ecuaciones diferenciales.

## <a id="como-hacer-diferenciacion-numerica"></a> Como hacer diferenciacion numerica

La receta responsable no consiste solo en aplicar un cociente cualquiera.

### Paso 1

Identificar que valores de la funcion estan disponibles:

- a ambos lados del punto;
- solo por la derecha;
- solo por la izquierda;
- en malla uniforme o no uniforme.

### Paso 2

Escoger una formula consistente con esa geometria de datos.

Si hay valores a ambos lados, normalmente conviene preferir una formula centrada.

### Paso 3

Estimar el orden del error de truncamiento usando Taylor o interpolacion.

### Paso 4

Controlar el error de redondeo.

Si

$$
h
$$

es demasiado pequeno, la resta

$$
f(x+h)-f(x)
$$

puede sufrir cancelacion numerica.

### Paso 5

Comparar resultados con varios valores de

$$
h
$$

si es posible, para detectar estabilizacion o deterioro.

## Error de truncamiento frente a error de redondeo

Reducir

$$
h
$$

mejora el error analitico de truncamiento, pero empeora el error de redondeo porque se restan numeros casi iguales.

En aritmetica finita, el error total suele tener la forma aproximada:

$$
E(h)\approx Ch^p+\frac{\varepsilon_{\text{maq}}}{h}K,
$$

donde

$$
p
$$

es el orden de la formula.

### Consecuencia

Existe un

$$
h
$$

optimo intermedio. Hacerlo demasiado pequeno puede empeorar la aproximacion.

## Ejemplo 1

Sea

$$
f(x)=e^x
$$

y aproximemos

$$
f'(0)=1.
$$

Con

$$
h=0.1,
$$

la diferencia hacia adelante da

$$
\frac{e^{0.1}-1}{0.1}\approx 1.051709.
$$

La diferencia centrada da

$$
\frac{e^{0.1}-e^{-0.1}}{0.2}\approx 1.001668.
$$

La mejora refleja el paso de error

$$
O(h)
$$

a error

$$
O(h^2).
$$

## Datos tabulados

Si la funcion solo se conoce en una tabla

$$
f(x_i),
$$

las diferencias finitas pueden escribirse directamente con esos valores.

En malla uniforme

$$
x_i=x_0+ih,
$$

las formulas toman formas especialmente limpias.

## Derivacion por interpolacion

Otra manera de obtener formulas numericas consiste en interpolar localmente la funcion por un polinomio

$$
p_n
$$

y despues derivar:

$$
f'(x)\approx p_n'(x).
$$

Este enfoque explica de manera sistematica las formulas de 3 y 5 puntos.

## Consistencia

Una formula de diferenciacion

$$
\mathcal{D}_h f(x)
$$

es consistente si

$$
\mathcal{D}_h f(x)\to f'(x)
$$

cuando

$$
h\to 0.
$$

La consistencia no basta por si sola para una implementacion fiable, pero es la primera condicion necesaria.

## Orden

Decimos que una formula tiene orden

$$
p
$$

si

$$
\mathcal{D}_h f(x)-f'(x)=O(h^p).
$$

Cuanto mayor es

$$
p,
$$

mas rapido decae el error de truncamiento cuando

$$
h
$$

disminuye.

## Diferenciacion de datos ruidosos

Diferenciar amplifica ruido.

Si los datos experimentales contienen perturbaciones de alta frecuencia, las formulas de diferencia pueden producir estimaciones muy inestables. En ese contexto suele ser preferible:

- suavizar antes;
- ajustar un modelo;
- usar regularizacion.

## Ejemplo 2: tabla uniforme

Supongamos que conocemos

$$
f(1.9)=3.685,\quad f(2.0)=3.762,\quad f(2.1)=3.842.
$$

Con

$$
h=0.1,
$$

la diferencia centrada en

$$
2.0
$$

es

$$
\frac{3.842-3.685}{0.2}=0.785.
$$

Esta aproximacion suele ser mejor que usar solo

$$
f(2.1)
$$

y

$$
f(2.0).
$$

## Relacion con ecuaciones diferenciales

La diferenciacion numerica no es solo una tecnica de calculo de derivadas aisladas. Es la base de:

- esquemas en diferencias finitas;
- discretizacion de EDO y EDP;
- aproximacion de operadores diferenciales.

## Comentario estructural

Interpolacion, diferenciacion numerica e integracion numerica son tres caras del mismo principio:

reemplazar una funcion por un modelo local mas simple y operar sobre ese modelo.

## Cierre

La diferenciacion numerica parece elemental, pero encierra varias lecciones centrales del analisis numerico: consistencia, orden, sensibilidad al redondeo y dependencia de la geometria de los datos. Su estudio serio prepara directamente el terreno para metodos de diferencias finitas y discretizacion de ecuaciones diferenciales.
