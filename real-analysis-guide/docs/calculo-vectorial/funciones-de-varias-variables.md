---
title: Funciones de varias variables
description: Definicion rigurosa de funciones de varias variables, dominio, codominio, conjuntos de nivel y herramientas geometricas para visualizarlas.
---

# Funciones de varias variables

## Motivacion e intuicion

Una sola variable independiente basta para describir fenomenos unidimensionales, pero gran parte de la matematica aplicada y de la fisica depende de varias entradas a la vez.

Algunos ejemplos tipicos son:

- la temperatura $T(x,y,z)$ en un cuerpo;
- la presion $p(x,y,z)$ de un fluido;
- la energia potencial $V(x,y,z)$;
- la altura de una superficie $z=f(x,y)$;
- la densidad $\rho(x,y,z)$.

En todos estos casos, la salida depende simultaneamente de varias coordenadas. El salto conceptual importante es que ya no nos movemos sobre una recta, sino sobre dominios del plano o del espacio.

## Definicion formal

Una **funcion de varias variables** es una aplicacion

$$
f:D\subseteq \mathbb{R}^n\to \mathbb{R}^m.
$$

En calculo multivariable elemental se estudia primero el caso

$$
f:D\subseteq \mathbb{R}^n\to \mathbb{R},
$$

es decir, funciones escalares sobre un dominio de varias variables.

### Casos basicos

- Si $n=2$ y $m=1$, tenemos una funcion escalar de dos variables:

$$
f(x,y).
$$

- Si $n=3$ y $m=1$, tenemos una funcion escalar de tres variables:

$$
f(x,y,z).
$$

- Si $m>1$, hablamos de una funcion vectorial de varias variables, asunto que reaparece en campos vectoriales y aplicaciones diferenciables entre espacios euclideos.

## Dominio, codominio e imagen

No debe confundirse:

- el **dominio** $D$, conjunto de puntos en los que la formula tiene sentido;
- el **codominio**, conjunto de salida declarado;
- la **imagen** $f(D)$, conjunto real de valores que toma la funcion.

La distincion importa porque muchos teoremas locales exigen que el punto estudiado sea interior al dominio, y muchos teoremas globales exigen compacidad del dominio.

## Notacion y puntos del dominio

Cuando

$$
f:\mathbb{R}^2\to \mathbb{R},
$$

un punto del dominio se escribe

$$
(x,y).
$$

Cuando

$$
f:\mathbb{R}^3\to \mathbb{R},
$$

un punto del dominio se escribe

$$
(x,y,z).
$$

El valor

$$
f(a,b)
$$

o

$$
f(a,b,c)
$$

es un numero real asociado a ese punto.

## Dominio de funciones de varias variables {#dominio-de-funciones-de-varias-variables}

Determinar el dominio es el primer paso serio. En una variable esto suele ser rutinario; en varias variables, el dominio ya es un objeto geometrico.

### Regla operativa

Para hallar el dominio se intersectan todas las restricciones impuestas por la formula:

- denominadores distintos de cero;
- radicandos de indice par no negativos;
- argumentos de logaritmos positivos;
- restricciones trigonometrico-inversas cuando aparezcan;
- restricciones adicionales del problema fisico o geometrico.

### Ejemplo 1: polinomio

Sea

$$
f(x,y)=x^2-3xy+y^4.
$$

No hay denominadores, raices ni logaritmos, asi que

$$
\operatorname{Dom}(f)=\mathbb{R}^2.
$$

### Ejemplo 2: cociente racional

Sea

$$
f(x,y)=\frac{x+y}{x^2-y^2}.
$$

Debe cumplirse

$$
x^2-y^2\ne 0,
$$

es decir,

$$
x\ne y,
\qquad
x\ne -y.
$$

Por tanto el dominio es el plano con dos rectas eliminadas:

$$
\operatorname{Dom}(f)=\mathbb{R}^2\setminus \bigl(\{x=y\}\cup \{x=-y\}\bigr).
$$

### Ejemplo 3: raiz cuadrada

Sea

$$
f(x,y)=\sqrt{4-x^2-y^2}.
$$

Se exige

$$
4-x^2-y^2\ge 0,
$$

o equivalentemente

$$
x^2+y^2\le 4.
$$

El dominio es el disco cerrado de radio $2$ centrado en el origen.

### Ejemplo 4: logaritmo y raiz

Sea

$$
f(x,y)=\ln(y-x^2)+\sqrt{1-x}.
$$

Las restricciones son:

$$
y-x^2>0,
\qquad
1-x\ge 0.
$$

Luego

$$
\operatorname{Dom}(f)=\{(x,y)\in \mathbb{R}^2:\ y>x^2,\ x\le 1\}.
$$

Este ejemplo ya muestra que el dominio puede ser una region curvilinea y no necesariamente un rectangulo ni un conjunto sencillo.

## Dominios naturales y dominios de trabajo

La formula da un **dominio natural**, pero en problemas concretos puede imponerse un dominio mas pequeno.

Por ejemplo, la funcion

$$
f(x,y)=\sqrt{1-x^2-y^2}
$$

tiene dominio natural el disco unitario cerrado, pero si estamos modelando la grafica superior de una membrana solo sobre el cuadrante positivo, el dominio de trabajo puede ser

$$
\{(x,y):x\ge 0,\ y\ge 0,\ x^2+y^2\le 1\}.
$$

## Grafo de una funcion

Si

$$
f:D\subseteq \mathbb{R}^2\to \mathbb{R},
$$

su grafo es el conjunto

$$
\Gamma_f=\{(x,y,z)\in \mathbb{R}^3:\ (x,y)\in D,\ z=f(x,y)\}.
$$

Asi, una funcion de dos variables se visualiza como una superficie en $\mathbb{R}^3$.

Cuando

$$
f:\mathbb{R}^3\to \mathbb{R},
$$

ya no se puede graficar directamente en el espacio usual, y se trabaja con secciones, niveles y proyecciones.

## Graficar una funcion de varias variables {#graficar-una-funcion-de-varias-variables}

Graficar bien no significa dibujar a ojo, sino extraer informacion estructural.

### Herramientas principales

1. Identificar el dominio.
2. Hallar intersecciones con ejes o planos coordenados.
3. Estudiar simetrias.
4. Calcular curvas de nivel.
5. Tomar trazas en planos como $x=a$ o $y=b$.
6. Determinar crecimiento, signo y posibles singularidades.

### Curvas de nivel

Para una funcion

$$
f(x,y),
$$

las curvas de nivel son los conjuntos

$$
f(x,y)=c.
$$

Estas curvas codifican gran parte de la geometria del grafo.

### Ejemplo 5: paraboloide

Sea

$$
f(x,y)=x^2+y^2.
$$

Entonces el grafo es un paraboloide eliptico abierto hacia arriba.

Sus curvas de nivel son

$$
x^2+y^2=c,
$$

que son circunferencias para $c>0$ y se reducen al origen para $c=0$.

### Ejemplo 6: silla de montar

Sea

$$
f(x,y)=x^2-y^2.
$$

Las trazas en los planos coordenados son:

$$
f(x,0)=x^2,
\qquad
f(0,y)=-y^2.
$$

Una direccion curva hacia arriba y la otra hacia abajo. Esa tension geometrica es la senal tipica de un punto silla.

### Ejemplo 7: semiesfera superior

Sea

$$
f(x,y)=\sqrt{1-x^2-y^2}.
$$

El grafo es la semiesfera superior de radio $1$.

Las curvas de nivel satisfacen

$$
\sqrt{1-x^2-y^2}=c
\iff
x^2+y^2=1-c^2.
$$

Por tanto las curvas de nivel vuelven a ser circunferencias, ahora de radio dependiente de $c$.

## Trazas y secciones

Las **trazas** se obtienen fijando una variable.

Por ejemplo, si

$$
f(x,y)=x^2+y^2,
$$

entonces para $x=a$ se obtiene la parabola

$$
z=a^2+y^2,
$$

y para $y=b$ se obtiene

$$
z=x^2+b^2.
$$

Estas secciones permiten reconstruir mentalmente el grafo.

## Conjuntos de nivel en dimension superior

Si

$$
f:\mathbb{R}^3\to \mathbb{R},
$$

los conjuntos

$$
f(x,y,z)=c
$$

son superficies de nivel. En fisica aparecen por todas partes:

- superficies equipotenciales;
- isotermas tridimensionales;
- isobaras;
- superficies de energia constante.

## Simetrias utiles

Reconocer simetrias simplifica mucho la visualizacion.

### Ejemplo 8

Si

$$
f(x,y)=x^2+y^2,
$$

la funcion es invariante bajo rotaciones del plano. Por eso el grafo tiene simetria axial respecto del eje $z$.

### Ejemplo 9

Si

$$
f(x,y)=xy,
$$

la funcion cambia de signo al reflejar una sola coordenada y permanece igual al reflejar ambas. Esa estructura se nota de inmediato en las curvas de nivel

$$
xy=c,
$$

que son hiperbolas.

## Ejemplos trabajados de analisis del dominio

### Ejemplo 10

Sea

$$
f(x,y,z)=\frac{\ln(z-x^2-y^2)}{\sqrt{1-x^2-y^2}}.
$$

Las restricciones son

$$
z-x^2-y^2>0
$$

y

$$
1-x^2-y^2>0.
$$

Luego

$$
\operatorname{Dom}(f)=\{(x,y,z):x^2+y^2<1,\ z>x^2+y^2\}.
$$

Observese que la raiz aparece en el denominador, de modo que aqui no basta pedir no negatividad: hace falta desigualdad estricta.

### Ejemplo 11

Sea

$$
f(x,y)=\arccos(x+y).
$$

Como el argumento del arccos debe quedar entre $-1$ y $1$, se obtiene

$$
-1\le x+y\le 1.
$$

El dominio es una franja cerrada del plano.

## Comentario topologico

En calculo diferencial, muchos resultados se formulan sobre conjuntos abiertos porque el estudio local necesita poder moverse en todas las direcciones alrededor del punto.

Por eso, aunque una funcion pueda estar definida en un conjunto con borde, las derivadas parciales, el gradiente y los criterios de diferenciabilidad suelen estudiarse primero en puntos interiores del dominio.

## Errores frecuentes

- Confundir el dominio con el grafo.
- Pensar que toda funcion de dos variables puede dibujarse sin usar curvas de nivel.
- Olvidar restricciones ocultas al combinar raiz, logaritmo y cocientes.
- Analizar solo una traza y concluir demasiado.

## Conclusion

Una funcion de varias variables no es solo una formula con mas letras. Su dominio es una region geometrica, su grafo es un objeto de mayor dimension y sus propiedades locales dependen de como se comporta la funcion al aproximarse al punto desde infinitas direcciones.

Esa riqueza obliga a cambiar de intuicion: ya no basta mirar izquierda y derecha; hay que controlar el comportamiento en todo un entorno.
