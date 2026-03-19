---
title: Prueba de hipotesis con varianza desconocida
description: Construccion de la prueba t de Student, fundamento exacto bajo normalidad, interpretacion, robustez y ejemplos guiados.
---

# Prueba de hipotesis con varianza desconocida

## Por que aparece la distribucion t

En la teoria elemental de contraste para la media, el primer caso estudiado suele ser

$$
Z=\frac{\bar X-\mu_0}{\sigma/\sqrt n},
$$

con $\sigma$ conocida. Ese caso es matematicamente limpio, pero estadisticamente poco frecuente. En problemas reales, la varianza poblacional casi nunca se conoce.

Si simplemente reemplazamos $\sigma$ por la desviacion muestral $S$, el cociente deja de ser normal. La incertidumbre adicional por estimar $\sigma$ con una muestra finita modifica la distribucion del estadistico y produce la familia t de Student.

Esa es la razon estructural de la prueba t:

- no es un remiendo empirico;
- es la correccion exacta que impone la teoria cuando la varianza es desconocida y la poblacion es normal.

## Planteamiento basico

Sean

$$
X_1,\dots,X_n
$$

variables aleatorias i.i.d. con distribucion

$$
N(\mu,\sigma^2),
$$

donde tanto $\mu$ como $\sigma^2$ son desconocidos.

Queremos contrastar

$$
H_0:\mu=\mu_0
$$

frente a una de las alternativas:

$$
H_1:\mu>\mu_0,
\qquad
H_1:\mu<\mu_0,
\qquad
H_1:\mu\ne\mu_0.
$$

## Estadisticos muestrales relevantes

La media muestral es

$$
\bar X=\frac{1}{n}\sum_{i=1}^n X_i,
$$

y la varianza muestral insesgada es

$$
S^2=\frac{1}{n-1}\sum_{i=1}^n (X_i-\bar X)^2.
$$

El estadistico de prueba natural es

$$
T=\frac{\bar X-\mu_0}{S/\sqrt n}.
$$

La pregunta no es solo que forma tiene $T$, sino cual es su distribucion bajo $H_0$.

## Dos hechos teoricos fundamentales

Para muestras normales, se cumplen dos resultados clasicos:

### Teorema 1

La media muestral satisface

$$
\bar X\sim N\left(\mu,\frac{\sigma^2}{n}\right).
$$

### Teorema 2

La varianza muestral cumple

$$
\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1}.
$$

### Teorema 3

Bajo normalidad, $\bar X$ y $S^2$ son independientes.

Este ultimo hecho es muy especial de la familia normal y explica por que la teoria t es tan elegante.

## Construccion de la distribucion t

Bajo $H_0:\mu=\mu_0$, definimos

$$
Z=\frac{\bar X-\mu_0}{\sigma/\sqrt n}\sim N(0,1),
$$

y ademas

$$
U=\frac{(n-1)S^2}{\sigma^2}\sim \chi^2_{n-1},
$$

con $Z$ y $U$ independientes.

Entonces

$$
T
=
\frac{\bar X-\mu_0}{S/\sqrt n}
=
\frac{Z}{\sqrt{U/(n-1)}}.
$$

Por definicion, esto implica:

$$
T\sim t_{n-1}.
$$

### Comentario conceptual

La distribucion t surge al dividir una normal estandar por la raiz de un chi-cuadrado normalizado independiente. Esa forma sintetiza dos fuentes de aleatoriedad:

- la fluctuacion de la media;
- la incertidumbre en la estimacion de la varianza.

## Studentizacion e invariancia de escala

La forma del estadistico

$$
T=\frac{\bar X-\mu_0}{S/\sqrt n}
$$

no es arbitraria. Aparece al eliminar la escala desconocida

$$
\sigma
$$

mediante una version estimada interna a la muestra.

### Idea

Si se multiplican todos los datos por una constante positiva, cambian tanto la diferencia

$$
\bar X-\mu_0
$$

como la desviacion muestral

$$
S,
$$

pero su cociente permanece invariante.

### Lectura

La studentizacion convierte el problema con escala desconocida en uno adimensional. Esa es la razon conceptual por la que la prueba t sigue siendo util cuando no conocemos

$$
\sigma.
$$

## Suficiencia, reduccion y por que bastan

$$
\bar X,\ S^2
$$

En la familia normal, el par

$$
(\bar X,S^2)
$$

resume toda la informacion relevante para inferir sobre

$$
(\mu,\sigma^2).
$$

### Lectura

Esto explica por que la prueba t depende solo de:

- la media muestral;
- la varianza muestral;
- el tamano de muestra.

No es una perdida de informacion; es una reduccion suficiente del problema.

## Colas mas pesadas que la normal

La distribucion $t_{n-1}$ es simetrica y centrada en $0$, pero tiene colas mas pesadas que la normal estandar.

Interpretacion:

- con muestras pequenas hay mas incertidumbre;
- por eso hace falta evidencia mas fuerte para rechazar $H_0$;
- en consecuencia, los puntos criticos t son mas grandes en valor absoluto que los puntos criticos z.

Cuando $n\to\infty$,

$$
t_{n-1}\Longrightarrow N(0,1).
$$

Asi se recupera la teoria normal en grandes muestras.

## Regiones criticas

### Prueba bilateral

Para contrastar

$$
H_0:\mu=\mu_0,
\qquad
H_1:\mu\ne\mu_0,
$$

se rechaza $H_0$ al nivel $\alpha$ si

$$
|T|>t_{\alpha/2,n-1},
$$

donde $t_{\alpha/2,n-1}$ denota el cuantil superior de la distribucion t con $n-1$ grados de libertad.

### Prueba unilateral derecha

Para

$$
H_1:\mu>\mu_0,
$$

se rechaza si

$$
T>t_{\alpha,n-1}.
$$

### Prueba unilateral izquierda

Para

$$
H_1:\mu<\mu_0,
$$

se rechaza si

$$
T<-t_{\alpha,n-1}.
$$

## Valor-p asociado

Una vez calculado $t_{\mathrm{obs}}$, el valor-p se obtiene con la distribucion t:

- prueba derecha:

$$
p=P(t_{n-1}\ge t_{\mathrm{obs}});
$$

- prueba izquierda:

$$
p=P(t_{n-1}\le t_{\mathrm{obs}});
$$

- prueba bilateral:

$$
p=2P(t_{n-1}\ge |t_{\mathrm{obs}}|).
$$

## Ejemplo 1: prueba bilateral completa

Se toma una muestra de tamano

$$
n=10
$$

de una poblacion normal. Se observa

$$
\bar x=21.4,
\qquad
s=2.5.
$$

Queremos contrastar

$$
H_0:\mu=20
\qquad\text{frente a}\qquad
H_1:\mu\ne 20.
$$

### Paso 1: estadistico

$$
t_{\mathrm{obs}}
=
\frac{21.4-20}{2.5/\sqrt{10}}
\approx
1.771.
$$

### Paso 2: distribucion nula

Bajo $H_0$, como suponemos normalidad,

$$
T\sim t_9.
$$

### Paso 3: criterio por region critica

Al nivel $\alpha=0.05$, el punto critico bilateral es aproximadamente

$$
t_{0.025,9}\approx 2.262.
$$

Como

$$
|1.771|<2.262,
$$

no se rechaza $H_0$.

### Paso 4: valor-p

$$
p=2P(t_9\ge 1.771)\approx 0.110.
$$

La muestra no aporta evidencia suficiente al $5\%$.

## Ejemplo 2: prueba unilateral derecha

Un laboratorio afirma que el rendimiento medio de una reaccion supera los $80$ puntos. Se dispone de:

$$
n=16,
\qquad
\bar x=82.1,
\qquad
s=3.2.
$$

Contrastamos

$$
H_0:\mu=80,
\qquad
H_1:\mu>80.
$$

Entonces

$$
t_{\mathrm{obs}}
=
\frac{82.1-80}{3.2/\sqrt{16}}
=
\frac{2.1}{0.8}
=
2.625.
$$

Bajo $H_0$,

$$
T\sim t_{15}.
$$

Al nivel $0.05$, el punto critico unilateral es aproximadamente

$$
t_{0.05,15}\approx 1.753.
$$

Como

$$
2.625>1.753,
$$

se rechaza $H_0$.

El valor-p es

$$
p=P(t_{15}\ge 2.625)\approx 0.0095.
$$

## Dualidad con intervalos de confianza

En el caso bilateral, la prueba t al nivel $\alpha$ es dual del intervalo de confianza

$$
\bar X\pm t_{\alpha/2,n-1}\frac{S}{\sqrt n}.
$$

### Proposicion

Se rechaza $H_0:\mu=\mu_0$ en la prueba bilateral t al nivel $\alpha$ si y solo si $\mu_0$ no pertenece al intervalo de confianza de nivel $1-\alpha$.

#### Demostracion

La condicion de rechazo es

$$
\left|
\frac{\bar X-\mu_0}{S/\sqrt n}
\right|
>
t_{\alpha/2,n-1}.
$$

Esto equivale a

$$
|\bar X-\mu_0|
>
t_{\alpha/2,n-1}\frac{S}{\sqrt n},
$$

o, de manera equivalente, a que $\mu_0$ quede fuera del intervalo

$$
\left[
\bar X-t_{\alpha/2,n-1}\frac{S}{\sqrt n},
\bar X+t_{\alpha/2,n-1}\frac{S}{\sqrt n}
\right].
$$

## Hipotesis compuestas e intervalos unilaterales

La dualidad no se limita al contraste bilateral de igualdad exacta. Tambien funciona para hipotesis compuestas de una cola.

### Caso derecho

Si se contrasta

$$
H_0:\mu\le \mu_0,
\qquad
H_1:\mu>\mu_0,
$$

al nivel

$$
\alpha,
$$

se rechaza

$$
H_0
$$

cuando

$$
T=
\frac{\bar X-\mu_0}{S/\sqrt n}
>t_{1-\alpha,n-1}.
$$

Eso equivale a que el extremo inferior del intervalo unilateral

$$
\left(
\bar X-t_{1-\alpha,n-1}\frac{S}{\sqrt n},
\infty
\right)
$$

quede por encima de

$$
\mu_0.
$$

### Caso izquierdo

Analogamente, para

$$
H_0:\mu\ge \mu_0,
\qquad
H_1:\mu<\mu_0,
$$

se rechaza cuando el extremo superior del intervalo unilateral

$$
\left(
-\infty,
\bar X+t_{1-\alpha,n-1}\frac{S}{\sqrt n}
\right)
$$

queda por debajo de

$$
\mu_0.
$$

### Moral

Pruebas e intervalos no son tecnicas paralelas. Una vez fijado el pivote correcto, la region critica y el conjunto de valores no rechazados son exactamente la misma geometria estadistica escrita de dos formas.

## Por que no basta reemplazar sigma por S en una prueba z

Si uno ignorara el efecto de estimar $\sigma$ y usara la normal estandar, el procedimiento tenderia a rechazar demasiado cuando $n$ es pequeno. La prueba z se vuelve anticonservadora porque:

- subestima la variabilidad real del pivote;
- usa puntos criticos demasiado pequenos.

La prueba t corrige exactamente ese problema bajo normalidad.

## Papel de la normalidad

La exactitud de la teoria t reposa en una hipotesis muy concreta: la poblacion es normal.

### Que sigue siendo cierto sin normalidad

En muestras moderadas o grandes, la estadistica

$$
\frac{\bar X-\mu}{S/\sqrt n}
$$

suele comportarse aproximadamente como una normal por combinacion del teorema central del limite y la consistencia de $S$.

### Que puede fallar

Si la muestra es pequena y la distribucion poblacional tiene:

- fuerte asimetria;
- colas muy pesadas;
- outliers severos;

la prueba t puede volverse poco fiable.

## Robustez: lectura fina

La prueba t clasica es sorprendentemente robusta frente a desviaciones moderadas de normalidad, sobre todo si:

- la distribucion es aproximadamente simetrica;
- no hay observaciones aberrantes dominantes;
- el tamano muestral no es demasiado pequeno.

Pero no es un ritual automatico. Antes de aplicarla conviene mirar:

- histograma o boxplot;
- presencia de asimetria severa;
- observaciones influyentes.

## Extension natural: muestra apareada

Si los datos vienen en pares antes-despues o tratamiento-control emparejado, no se aplica directamente la prueba t para una muestra sobre los datos originales, sino sobre las diferencias

$$
D_i=X_i-Y_i.
$$

Entonces se contrasta la media de las diferencias con la misma maquinaria:

$$
T=\frac{\bar D-d_0}{S_D/\sqrt n}.
$$

La estructura matematica es exactamente la misma.

## Extension natural: dos medias

Cuando se comparan dos poblaciones con varianzas desconocidas, aparecen dos caminos:

- prueba t con varianzas iguales agrupadas;
- prueba de Welch con varianzas potencialmente distintas.

La moraleja es importante: la prueba t de una muestra es el bloque basico de una teoria mas amplia basada en pivotes y distribuciones t.

## Welch, varianzas desiguales y el problema de Behrens-Fisher

Si se tienen dos muestras normales e independientes

$$
X_1,\dots,X_{n_1}\sim N(\mu_1,\sigma_1^2),
\qquad
Y_1,\dots,Y_{n_2}\sim N(\mu_2,\sigma_2^2),
$$

y se supone ademas

$$
\sigma_1^2=\sigma_2^2,
$$

puede definirse la varianza agrupada

$$
S_p^2=
\frac{(n_1-1)S_1^2+(n_2-1)S_2^2}{n_1+n_2-2}
$$

y entonces el pivote exacto

$$
T=
\frac{(\bar X-\bar Y)-d_0}{S_p\sqrt{\frac1{n_1}+\frac1{n_2}}}
\sim t_{n_1+n_2-2}
$$

bajo

$$
H_0:\mu_1-\mu_2=d_0.
$$

### Donde aparece la dificultad

Si no puede asumirse igualdad de varianzas, ya no existe en general un pivote exacto simple con distribucion t finita que elimine simultaneamente

$$
\sigma_1^2
$$

y

$$
\sigma_2^2.
$$

Ese es el nucleo del problema clasico de **Behrens-Fisher**.

### Solucion practica: prueba de Welch

Se usa entonces

$$
T_W=
\frac{(\bar X-\bar Y)-d_0}
{\sqrt{S_1^2/n_1+S_2^2/n_2}},
$$

y se aproxima su ley por una distribucion

$$
t_\nu
$$

con grados de libertad efectivos dados por la formula de Satterthwaite

$$
\nu=
\frac{(S_1^2/n_1+S_2^2/n_2)^2}
{\dfrac{(S_1^2/n_1)^2}{n_1-1}+\dfrac{(S_2^2/n_2)^2}{n_2-1}}.
$$

### Lectura estructural

La diferencia entre la prueba agrupada y Welch no es decorativa:

- la agrupada usa una hipotesis estructural fuerte, igualdad de varianzas;
- Welch renuncia a exactitud finita perfecta para ganar robustez frente a heterocedasticidad;
- cuando los tamanos muestrales son muy desbalanceados y las varianzas difieren, la prueba agrupada puede distorsionar el nivel real.

### Regla de trabajo

Si no hay una razon teorica fuerte para imponer

$$
\sigma_1^2=\sigma_2^2,
$$

la aproximacion de Welch suele ser la opcion por defecto mas defendible.

## Ejemplo 3: cuando la conclusion depende del nivel

Supongamos

$$
n=12,
\qquad
\bar x=18.9,
\qquad
s=2.4,
$$

y contrastamos

$$
H_0:\mu=20,
\qquad
H_1:\mu<20.
$$

El estadistico es

$$
t_{\mathrm{obs}}
=
\frac{18.9-20}{2.4/\sqrt{12}}
\approx
-1.588.
$$

El valor-p es

$$
p=P(t_{11}\le -1.588)\approx 0.070.
$$

Conclusiones:

- al $5\%$ no se rechaza;
- al $10\%$ si se rechaza.

Esto no es una contradiccion. El valor-p indica el umbral a partir del cual la evidencia se considera suficiente.

## Error comun: aceptar H0

Si la prueba no rechaza, la conclusion correcta es:

> No hay evidencia suficiente para rechazar $H_0$ al nivel fijado.

No debe decirse:

> Quedo demostrado que $H_0$ es cierta.

La falta de rechazo puede deberse a:

- efecto realmente nulo;
- poca muestra;
- alta variabilidad;
- baja potencia.

## Relacion con el tamano del efecto

La estadistica t puede escribirse como

$$
T=\frac{\bar X-\mu_0}{S}\sqrt n.
$$

Esto muestra que el rechazo depende de tres factores:

- la distancia entre la media observada y la nula;
- la dispersion de los datos;
- el tamano muestral.

Un efecto pequeno puede volverse significativo con una muestra grande. Un efecto sustancial puede no verse con una muestra muy ruidosa o pequena.

## Potencia y distribucion t no central

La teoria de contraste no termina en el nivel de significancia. Tambien interesa la **potencia**: la probabilidad de rechazar

$$
H_0
$$

cuando la alternativa es verdadera.

Si la poblacion sigue siendo normal pero en realidad

$$
\mu\ne \mu_0,
$$

la estadistica

$$
T=\frac{\bar X-\mu_0}{S/\sqrt n}
$$

ya no tiene distribucion

$$
t_{n-1}
$$

central, sino una

$$
t
$$

**no central** con parametro

$$
\delta=\frac{\mu-\mu_0}{\sigma/\sqrt n}.
$$

### Lectura

El parametro

$$
\delta
$$

mide cuan lejos esta la verdad del valor nulo en unidades de error estandar ideal. Resume tres factores:

- distancia real entre

$$
\mu
$$

y

$$
\mu_0;
$$
- dispersion poblacional

$$
\sigma;
$$
- tamano muestral

$$
n.
$$

Cuanto mayor sea

$$
|\delta|,
$$

mas separada queda la distribucion bajo la alternativa y mayor es la potencia.

### Consecuencia practica

La potencia aumenta cuando:

- el efecto real es mayor;
- la variabilidad es menor;
- la muestra es mas grande;
- el nivel

$$
\alpha
$$

es menos estricto.

Por eso un "no rechazo" puede significar simplemente que el estudio tenia poca sensibilidad para detectar el efecto.

## Error de tipo II y diseno muestral

El error de tipo II es

$$
\beta=P(\text{no rechazar }H_0\mid H_1 \text{ verdadera}).
$$

La potencia es

$$
1-\beta.
$$

En planificacion experimental no basta fijar

$$
\alpha.
$$

Tambien se suele exigir una potencia minima, por ejemplo

$$
0.8
$$

o

$$
0.9.
$$

### Lectura estructural

La prueba t no es solo un mecanismo para decidir despues de observar datos. Tambien sirve para planear cuanta informacion hace falta antes de recogerla.

## Significancia estadistica frente a relevancia sustantiva

Una diferencia pequena puede producir un valor-p muy chico si

$$
n
$$

es enorme. Del mismo modo, una diferencia importante desde el punto de vista cientifico puede no resultar significativa con una muestra pequena.

### Moral

La prueba responde a una pregunta de compatibilidad probabilistica con

$$
H_0,
$$

no a una pregunta de importancia practica. Por eso conviene leer siempre junto con:

- el tamano del efecto observado;
- su intervalo de confianza;
- el contexto del problema.

## Practica guiada

### Ejercicio 1

Una muestra normal de tamano $9$ produce

$$
\bar x=14.2,
\qquad
s=1.5.
$$

Contrasta

$$
H_0:\mu=15
\qquad\text{vs}\qquad
H_1:\mu\ne 15.
$$

#### Solucion

El estadistico es

$$
t_{\mathrm{obs}}
=
\frac{14.2-15}{1.5/\sqrt 9}
=
\frac{-0.8}{0.5}
=
-1.6.
$$

Bajo $H_0$,

$$
T\sim t_8.
$$

Al $5\%$ bilateral, el punto critico es aproximadamente $2.306$. Como

$$
|-1.6|<2.306,
$$

no se rechaza $H_0$.

### Ejercicio 2

Explica por que una prueba t con $5$ observaciones y fuerte asimetria debe interpretarse con cautela.

#### Solucion

Porque la exactitud de la distribucion t depende de normalidad. Con muestra muy pequena y fuerte asimetria no hay garantia de que el pivote siga bien esa ley.

### Ejercicio 3

En una prueba t bilateral, el intervalo de confianza del $95\%$ para $\mu$ resulta ser

$$
[9.8,12.4].
$$

Que puedes concluir sobre la hipotesis

$$
H_0:\mu=13?
$$

#### Solucion

Se rechaza $H_0$ al $5\%$, porque $13$ no pertenece al intervalo.

## Cierre

La prueba t de Student es uno de los resultados mas importantes de la estadistica clasica porque combina:

- una construccion exacta;
- una interpretacion geometrica clara;
- una aplicacion inmediata a problemas reales;
- una robustez razonable cuando se usa con juicio.

Su nucleo conceptual es simple: si la varianza es desconocida, el precio teorico de estimarla es pasar de la normal a la familia t. Entender ese paso vale mas que memorizar tablas.
