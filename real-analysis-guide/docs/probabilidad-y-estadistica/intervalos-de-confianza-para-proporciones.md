---
title: Intervalos de confianza para proporciones
description: Construccion y comparacion de intervalos para una proporcion binomial, incluyendo Wald, Wilson, Agresti-Coull y Clopper-Pearson.
---

# Intervalos de confianza para proporciones

## El problema estadistico

Consideremos una variable Bernoulli

$$
X\sim \operatorname{Bernoulli}(p),
$$

donde

$$
0\le p\le 1
$$

es una proporcion o probabilidad desconocida.

Si observamos una muestra i.i.d.

$$
X_1,\dots,X_n,
$$

entonces el numero de exitos

$$
S=\sum_{i=1}^n X_i
$$

sigue una distribucion binomial:

$$
S\sim \operatorname{Bin}(n,p).
$$

El estimador natural de $p$ es la proporcion muestral

$$
\hat p=\frac{S}{n}.
$$

Queremos construir un intervalo aleatorio

$$
I(X_1,\dots,X_n)
$$

tal que

$$
P_p\bigl(p\in I(X_1,\dots,X_n)\bigr)\approx 1-\alpha.
$$

## Dificultad estructural del problema

En el caso de la media normal, muchos intervalos salen de pivotes exactos. En el caso binomial la situacion es mas delicada:

- el parametro vive en el intervalo cerrado $[0,1]$;
- la distribucion es discreta;
- la varianza depende del parametro:

$$
\operatorname{Var}(\hat p)=\frac{p(1-p)}{n}.
$$

Por eso los intervalos para proporciones son un buen ejemplo de como una formula "simple" puede ser mala, aunque parezca razonable.

## Aproximacion normal basica

Por el teorema central del limite,

$$
\frac{\hat p-p}{\sqrt{p(1-p)/n}}
\Longrightarrow
N(0,1).
$$

Esto sugiere que aproximadamente

$$
P\left(
-z_{\alpha/2}\le
\frac{\hat p-p}{\sqrt{p(1-p)/n}}
\le
z_{\alpha/2}
\right)
\approx
1-\alpha.
$$

El problema es que el denominador contiene al parametro desconocido $p$.

## Intervalo de Wald

La aproximacion mas ingenua consiste en sustituir $p$ por $\hat p$ en el error estandar. Asi se obtiene el intervalo de Wald:

$$
\hat p\pm z_{\alpha/2}\sqrt{\frac{\hat p(1-\hat p)}{n}}.
$$

Durante mucho tiempo fue el intervalo mas ensenado porque es facil de recordar y de calcular.

## Por que el intervalo de Wald puede ser malo

Su problema no es una pequena imperfeccion tecnica. Puede tener una cobertura real muy inferior a la nominal, sobre todo cuando:

- $n$ no es grande;
- $p$ esta cerca de $0$ o de $1$;
- el numero observado de exitos es muy pequeno o muy grande.

### Falla visible

El intervalo puede incluso producir extremos fuera de $[0,1]$, algo inadmisible para una proporcion.

### Falla menos visible

Aunque ambos extremos queden dentro de $[0,1]$, la cobertura puede estar sistematicamente por debajo del nivel deseado.

## Ejemplo 1: el fracaso del intervalo de Wald

Supongamos

$$
n=40,
\qquad
S=2.
$$

Entonces

$$
\hat p=\frac{2}{40}=0.05.
$$

El intervalo de Wald al $95\%$ es

$$
0.05\pm 1.96\sqrt{\frac{0.05\cdot 0.95}{40}}
\approx
0.05\pm 0.0676.
$$

Eso produce aproximadamente

$$
(-0.0176,0.1176).
$$

El extremo inferior es negativo. Ya solo por eso el procedimiento resulta conceptualmente sospechoso.

## Inversion de pruebas: una idea mas solida

Muchos intervalos buenos surgen al invertir una familia de contrastes. Esto significa:

- para cada valor hipotetico $p_0$, se contrasta

$$
H_0:p=p_0;
$$

- se conservan los valores $p_0$ que no son rechazados;
- ese conjunto forma el intervalo de confianza.

Esta idea es crucial porque conecta:

- intervalos;
- pruebas;
- cobertura.

## Intervalo score o de Wilson

Si en vez de reemplazar prematuramente $p$ por $\hat p$ despejamos correctamente la desigualdad del contraste normal, obtenemos el intervalo de Wilson.

Su forma es

$$
\frac{
\hat p+\dfrac{z^2}{2n}
}{
1+\dfrac{z^2}{n}
}
\pm
\frac{z}{1+\dfrac{z^2}{n}}
\sqrt{
\frac{\hat p(1-\hat p)}{n}
+
\frac{z^2}{4n^2}
},
$$

donde

$$
z=z_{\alpha/2}.
$$

### Ventajas del intervalo de Wilson

- tiene mejor cobertura que Wald;
- respeta naturalmente el borde del parametro;
- se comporta mejor en muestras moderadas;
- nace de una construccion teoricamente mas coherente.

## Interpretacion geometrica de Wilson

El centro de Wilson no es exactamente $\hat p$, sino una version "ajustada" hacia el centro:

$$
\frac{\hat p+\dfrac{z^2}{2n}}{1+\dfrac{z^2}{n}}.
$$

Eso puede verse como una correccion regularizadora producida por el termino cuadratico que aparece al despejar la desigualdad del contraste.

## Derivacion de Wilson

Partimos de la desigualdad del contraste score bilateral:

$$
\left|
\frac{\hat p-p}{\sqrt{p(1-p)/n}}
\right|
\le z.
$$

Elevando al cuadrado:

$$
\frac{(\hat p-p)^2}{p(1-p)/n}\le z^2.
$$

Equivalentemente,

$$
n(\hat p-p)^2\le z^2p(1-p).
$$

Desarrollando:

$$
n(\hat p^2-2\hat pp+p^2)\le z^2p-z^2p^2.
$$

Llevando todo a un lado:

$$
(n+z^2)p^2-(2n\hat p+z^2)p+n\hat p^2\le 0.
$$

La solucion de esta desigualdad cuadratica produce exactamente el intervalo de Wilson.

### Comentario

Esta derivacion muestra por que Wilson no es un truco numerico. Es el intervalo que resulta de respetar la dependencia del error estandar con el parametro.

## Intervalo de Agresti-Coull

El intervalo de Agresti-Coull es una version aproximada y muy util de Wilson. Se define:

$$
\tilde n=n+z^2,
\qquad
\tilde p=\frac{S+z^2/2}{n+z^2},
$$

y luego se usa

$$
\tilde p\pm z\sqrt{\frac{\tilde p(1-\tilde p)}{\tilde n}}.
$$

Para el nivel $95\%$, como $z^2\approx 4$, esto equivale aproximadamente a "anadir dos exitos y dos fracasos".

### Ventaja

Es facil de calcular a mano y suele comportarse mucho mejor que Wald.

## Intervalo exacto de Clopper-Pearson

Debido a la discrecion binomial, tambien puede construirse un intervalo exacto como inversion de colas binomiales:

$$
P_p(S\le s)\quad\text{y}\quad P_p(S\ge s).
$$

El intervalo de Clopper-Pearson tiene cobertura al menos nominal para todo $p$, pero suele ser conservador: cubre mas de lo prometido y por eso puede ser innecesariamente ancho.

### Filosofia

- Wilson: mejor comportamiento promedio, generalmente mas corto;
- Clopper-Pearson: garantia exacta conservadora;
- Wald: formula facil, pero a menudo mala.

## Casos frontera:

$$
S=0
$$

y

$$
S=n
$$

Los extremos del soporte exponen de inmediato las debilidades de los intervalos ingenuos.

### Caso

$$
S=0
$$

Entonces

$$
\hat p=0.
$$

El intervalo de Wald colapsa al punto

$$
0,
$$

lo cual es absurdo: observar cero exitos no demuestra que

$$
p=0.
$$

Wilson, Jeffreys y Clopper-Pearson producen en cambio un extremo superior positivo, como debe ocurrir.

### Caso

$$
S=n
$$

Sucede el problema simetrico. El intervalo de Wald colapsa a

$$
1,
$$

mientras que los procedimientos mas serios dejan un extremo inferior menor que

$$
1.
$$

### Lectura

Estos casos frontera muestran de forma brutal que la geometria del parametro

$$
[0,1]
$$

no puede ignorarse.

## Correccion de continuidad

Como la distribucion binomial es discreta y la aproximacion normal es continua, a veces se introduce una correccion de continuidad para mejorar el ajuste.

### Idea

En lugar de aproximar directamente

$$
S
$$

por una normal, se desplazan los puntos de corte en

$$
\pm \frac12.
$$

### Comentario

Historicamente esta correccion se usaba mucho en tablas manuales. Hoy suele preferirse pasar a Wilson o a pruebas/intervalos exactos antes que insistir en arreglar Wald con remiendos locales. Aun asi, conceptualmente es importante porque muestra de donde viene parte del error de aproximacion.

## Intervalos mid-p

Entre Wilson y Clopper-Pearson hay una familia intermedia de procedimientos basada en la idea de

$$
\text{mid-}p.
$$

### Filosofia

Clopper-Pearson es exacto pero conservador porque en distribuciones discretas no puede calibrar de forma continua el nivel. El enfoque mid-p corrige parcialmente ese conservadurismo restando media masa del punto observado.

### Lectura

Estos intervalos suelen tener cobertura promedio mejor y longitudes mas cortas, pero sacrifican la garantia estricta de cobertura minima. Son un buen ejemplo de la tension entre exactitud uniforme y rendimiento practico.

## Cuando la aproximacion normal es razonable

Una regla frecuente es exigir

$$
n\hat p\ge 10,
\qquad
n(1-\hat p)\ge 10.
$$

o, segun otros textos, umbrales similares como $5$ o $15$.

Estas reglas no son teoremas, solo indicadores practicos. Cuanto mas cerca este $p$ de $0$ o de $1$, o cuanto mas pequena sea la muestra, menos conviene usar Wald.

## Ejemplo 2: muestra grande

En una encuesta se observa

$$
n=1000,
\qquad
S=570.
$$

Entonces

$$
\hat p=0.57.
$$

### Intervalo de Wald al 95 por ciento

$$
0.57\pm 1.96\sqrt{\frac{0.57\cdot 0.43}{1000}}
\approx
0.57\pm 0.0307.
$$

Por tanto

$$
(0.5393,0.6007).
$$

Como la muestra es grande y $\hat p$ esta lejos del borde, aqui Wald no se comporta mal.

### Comentario

El problema no es que Wald sea siempre terrible. El problema es que no es fiable de manera uniforme.

## Ejemplo 3: comparacion Wald vs Wilson

Tomemos de nuevo

$$
n=40,\qquad S=2,\qquad \hat p=0.05.
$$

Para $95\%$, $z=1.96$ y $z^2\approx 3.84$.

El centro de Wilson es

$$
\frac{0.05+\frac{3.84}{80}}{1+\frac{3.84}{40}}
\approx
\frac{0.098}{1.096}
\approx
0.0894.
$$

El termino de amplitud es

$$
\frac{1.96}{1.096}
\sqrt{
\frac{0.05\cdot 0.95}{40}
+
\frac{3.84}{6400}
}
\approx
0.0727.
$$

Asi, Wilson produce aproximadamente

$$
(0.0167,0.1621),
$$

que es mucho mas razonable que el intervalo de Wald.

## Cobertura: la cuestion de fondo

Un intervalo de confianza no se evalua solo por su formula, sino por su funcion de cobertura:

$$
C(p)=P_p\bigl(p\in I(X)\bigr).
$$

Idealmente queremos

$$
C(p)\approx 1-\alpha
$$

uniformemente en $p$.

El gran problema de Wald es que $C(p)$ puede caer muy por debajo del valor nominal. Wilson y Agresti-Coull suelen acercarse mucho mas al comportamiento deseado.

## Discrecion y cobertura escalonada

En el modelo binomial, la cobertura no suele variar suavemente con

$$
p.
$$

Como

$$
S
$$

solo puede tomar los valores

$$
0,1,\dots,n,
$$

la cobertura de casi cualquier procedimiento viene dada por una suma finita:

$$
C(p)=\sum_{s=0}^n 1_{\{p\in I(s)\}}
\binom{n}{s}p^s(1-p)^{n-s}.
$$

Esto hace que la funcion de cobertura oscile con

$$
p
$$

y explica por que es dificil obtener cobertura exactamente igual a

$$
1-\alpha
$$

para todo valor del parametro sin pagar conservadurismo.

### Lectura

Esta es la razon profunda por la que Clopper-Pearson sobrecubre y Wilson solo puede ser aproximadamente nominal. La discrecion del modelo impide una calibracion perfectamente uniforme con intervalos de dos colas "limpios".

## Intervalo de Jeffreys

Existe otra opcion muy usada por su excelente comportamiento practico: el intervalo de Jeffreys, derivado de la distribucion a priori

$$
\operatorname{Beta}(1/2,1/2).
$$

Tras observar

$$
S=s,
$$

la distribucion posterior es

$$
\operatorname{Beta}(s+1/2,n-s+1/2).
$$

El intervalo bilateral de nivel

$$
1-\alpha
$$

se obtiene tomando sus cuantiles

$$
\alpha/2
$$

y

$$
1-\alpha/2.
$$

### Comentario

Aunque su origen es bayesiano, el intervalo de Jeffreys suele tener muy buen desempeno frecuentista. Esto lo vuelve un puente interesante entre ambos enfoques.

## Longitud del intervalo

Ademas de cubrir bien, interesa que el intervalo no sea innecesariamente largo. Hay un equilibrio:

- Clopper-Pearson: suele cubrir de sobra, pero puede ser mas ancho;
- Wilson: buena cobertura con longitud moderada;
- Wald: a veces corto, pero demasiado optimista.

## Cobertura minima frente a longitud esperada

El problema real de diseno de intervalos para proporciones no es solo "cubrir" o "ser corto", sino equilibrar ambas cosas.

### Lectura

Hay una tension inevitable:

- si se exige cobertura minima uniforme muy cercana o superior a

$$
1-\alpha,
$$

el intervalo tiende a ensancharse;
- si se busca minimizar longitud media, es facil perder cobertura en regiones delicadas, sobre todo cerca de

$$
0
\qquad\text{y}\qquad
1.
$$

### Moral

Clopper-Pearson, Wilson, Jeffreys y mid-p no son formulas rivales arbitrarias. Representan distintas soluciones a un compromiso entre garantia frecuentista y eficiencia geometrica.

## Tamano muestral para un margen de error objetivo

En planificacion experimental suele fijarse un margen de error deseado

$$
E>0
$$

y se pregunta que

$$
n
$$

hace falta para que un intervalo aproximado tenga semilongitud cercana a

$$
E.
$$

Si usamos la heuristica normal,

$$
z_{\alpha/2}\sqrt{\frac{p(1-p)}{n}}\approx E,
$$

lo que lleva a

$$
n\approx \frac{z_{\alpha/2}^2\,p(1-p)}{E^2}.
$$

### Caso conservador

Como

$$
p(1-p)\le \frac14,
$$

si no se tiene una idea previa de

$$
p,
$$

se usa el peor caso

$$
p=1/2,
$$

y entonces

$$
n\approx \frac{z_{\alpha/2}^2}{4E^2}.
$$

### Ejemplo

Para un nivel de confianza del

$$
95\%
$$

y margen de error

$$
E=0.03,
$$

se toma

$$
z_{0.025}\approx 1.96,
$$

de modo que

$$
n\approx \frac{1.96^2}{4(0.03)^2}\approx 1067.1.
$$

En la practica se redondea hacia arriba:

$$
n=1068.
$$

### Lectura

Esta cuenta no sustituye una evaluacion fina de cobertura, pero es extremadamente util para diseno preliminar de encuestas y experimentos.

## Interpretacion correcta

Un intervalo de confianza del $95\%$ para $p$ no significa que, despues de observar los datos, haya probabilidad $0.95$ de que $p$ este en ese intervalo. En el enfoque frecuentista, $p$ es fijo y el intervalo es aleatorio antes de observar la muestra.

La lectura correcta es:

> Si repitieramos el procedimiento muchas veces en las mismas condiciones, aproximadamente el $95\%$ de los intervalos construidos contendrian al verdadero valor de $p$.

## Intervalos unilaterales

A veces interesa acotar solo por arriba o por abajo:

- demostrar que un defecto no supera cierto umbral;
- garantizar que una proporcion minima de exito es suficientemente alta.

En ese caso se construyen cotas unilaterales invirtiendo contrastes unilaterales.

Por ejemplo, una cota superior aproximada de nivel $1-\alpha$ es

$$
\hat p+z_\alpha\sqrt{\frac{\hat p(1-\hat p)}{n}},
$$

aunque, de nuevo, en muestras pequenas conviene preferir formulas score o exactas.

## Conexion con pruebas de hipotesis

La relacion entre intervalos y contrastes es especialmente clara aqui:

- el intervalo de Wilson es la inversion del test score;
- Clopper-Pearson se obtiene invirtiendo la prueba exacta binomial;
- el intervalo de Wald corresponde a la inversion ingenua del test z con error estandar enchufado.

Esta observacion explica por que algunos intervalos tienen mejor comportamiento: nacen de pruebas mejor construidas.

## Que intervalo elegir en la practica

No hay una unica respuesta universal, pero si una jerarquia razonable.

- Si se quiere una opcion general, corta y estable, Wilson suele ser la mejor primera eleccion.
- Si se busca simplicidad con buen desempeno asintotico, Agresti-Coull funciona muy bien.
- Si se necesita cobertura garantizada para todo

$$
p,
$$

Clopper-Pearson es la opcion conservadora clasica.
- Si se admite una lectura bayesiana con excelente comportamiento frecuentista, Jeffreys es una alternativa muy seria.

Wald queda, en esencia, como una formula historica util para entender que puede salir mal.

## Intervalos exactos alternativos y el criterio de Sterne

Clopper-Pearson no es el unico intervalo exacto posible. Existen construcciones exactas de dos colas que ordenan los resultados binomiales por probabilidad bajo

$$
p
$$

y buscan regiones de aceptacion mas cortas, como en el enfoque de Sterne.

### Lectura

Estos intervalos muestran que "exacto" no significa automaticamente "igual a Clopper-Pearson". Lo que cambia es la geometria con la que se seleccionan los resultados extremos admisibles.

### Moral

La teoria exacta para proporciones no se agota en una sola formula. Hay varias nociones razonables de exactitud, y difieren en conservadurismo, longitud y simetria.

## Practica guiada

### Ejercicio 1

En una muestra de tamano

$$
n=25
$$

se observan

$$
S=1
$$

exito.

1. Calcula $\hat p$.
2. Explica por que el intervalo de Wald es mala idea.

#### Solucion

Se tiene

$$
\hat p=\frac{1}{25}=0.04.
$$

El numero de exitos es muy pequeno y el parametro esta cerca del borde $0$. En este regimen la aproximacion normal con varianza enchufada es inestable y el intervalo de Wald puede tener mala cobertura o producir extremos imposibles.

### Ejercicio 2

En una encuesta, $620$ de $1000$ personas responden favorablemente.

1. Calcula la proporcion muestral.
2. Decide si una aproximacion normal es razonable.

#### Solucion

$$
\hat p=0.62.
$$

Ademas,

$$
n\hat p=620,
\qquad
n(1-\hat p)=380,
$$

ambos muy grandes. Una aproximacion normal resulta razonable.

### Ejercicio 3

Explica la diferencia conceptual entre un intervalo de Wilson y uno de Clopper-Pearson.

#### Solucion

Wilson es aproximadamente exacto y suele tener muy buena cobertura con longitud moderada. Clopper-Pearson controla de forma exacta la cobertura minima, pero suele ser conservador y mas ancho.

## Recomendacion practica razonable

Para una sola proporcion binomial:

- evita usar Wald como opcion por defecto;
- prefiere Wilson o Agresti-Coull para trabajo practico general;
- usa Clopper-Pearson cuando necesites una garantia exacta conservadora o cuando $n$ sea muy pequeno.

## Cierre

Los intervalos para proporciones son un excelente recordatorio de una idea central en inferencia: una formula simple no siempre es una buena formula. El intervalo de Wald parece natural, pero ignora rasgos geometricos importantes del problema. Wilson, Agresti-Coull y Clopper-Pearson muestran tres formas de corregir esa ingenuidad:

- una via score;
- una via aproximada estabilizada;
- una via exacta conservadora.

Entender esas diferencias es mucho mas valioso que memorizar una sola expresion.
