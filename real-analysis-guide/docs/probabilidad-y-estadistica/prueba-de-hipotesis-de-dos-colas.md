---
title: Prueba de hipotesis de dos colas
description: Contrastes bilaterales para medias, simetria de la region critica y dualidad con intervalos de confianza.
---

# Prueba de hipotesis de dos colas

## Motivacion

La prueba bilateral se usa cuando cualquier desviacion respecto del valor nulo, sea por exceso o por defecto, es relevante.

El esquema tipico es

$$
H_0:\mu=\mu_0
$$

frente a

$$
H_1:\mu\ne \mu_0.
$$

Aqui no se esta preguntando si la media aumento o disminuyo, sino si dejo de coincidir con el valor de referencia.

## Geometria de la decision

En una prueba bilateral, la discrepancia relevante no tiene direccion prefijada. Lo que importa es la **magnitud** de la desviacion, no su signo.

Por eso la region critica se coloca en ambas colas de la distribucion nula.

## Estadistico clasico

Con varianza conocida o muestra grande:

$$
Z=\frac{\overline X-\mu_0}{\sigma/\sqrt n}.
$$

Bajo

$$
H_0,
$$

se tiene exactamente o aproximadamente

$$
Z\sim N(0,1).
$$

## Region critica bilateral

Para un nivel

$$
\alpha,
$$

se reparte el error entre las dos colas:

$$
\text{rechazar }H_0
\quad \text{si}\quad
|Z|>z_{\alpha/2}.
$$

### Lectura

El nivel total se reparte como

$$
\frac{\alpha}{2}
$$

en cada extremo.

## Significado geometrico

No solo importan valores grandes de

$$
Z,
$$

sino cualquier valor con magnitud excesiva.

La direccion de la discrepancia se pierde parcialmente en la decision, aunque se conserva en el signo del estadistico observado.

## Ejemplo 1

Supongamos

$$
n=64,
\qquad
\overline x=101.5,
\qquad
\sigma=6,
\qquad
\mu_0=100.
$$

Entonces

$$
Z=\frac{101.5-100}{6/8}=2.
$$

Al nivel

$$
0.05,
$$

como

$$
z_{0.025}\approx 1.96,
$$

se rechaza

$$
H_0.
$$

### Interpretacion

La diferencia observada equivale a dos errores estandar respecto del valor nulo. Eso la coloca fuera de la banda central del

$$
95\%
$$

bajo

$$
H_0.
$$

## Comparacion con la prueba unilateral

Para el mismo

$$
\alpha,
$$

la prueba bilateral usa el umbral

$$
z_{\alpha/2},
$$

mas exigente que

$$
z_\alpha.
$$

Por eso es menos potente frente a una alternativa de direccion fija, pero mas honesta cuando ambas direcciones son plausibles.

### Regla conceptual

- si solo una direccion tiene sentido cientifico antes de mirar los datos, puede usarse prueba unilateral;
- si ambas direcciones importan o no se quiere sesgo post hoc, corresponde prueba bilateral.

## Valor-p bilateral

Si la ley nula es simetrica,

$$
p=2P(Z\ge |z_{\text{obs}}|).
$$

En el ejemplo anterior:

$$
p\approx 2(0.0228)=0.0456.
$$

Como

$$
0.0456<0.05,
$$

se rechaza

$$
H_0.
$$

## Relacion con intervalos de confianza

El contraste bilateral al nivel

$$
\alpha
$$

equivale a verificar si

$$
\mu_0
$$

pertenece al intervalo

$$
\overline X\pm z_{\alpha/2}\frac{\sigma}{\sqrt n}.
$$

Si queda fuera, se rechaza.

### Importancia

La prueba bilateral y el intervalo bilateral son dos caras del mismo mecanismo probabilistico.

## Ejemplo 2

Con

$$
\overline x=12.3,
\quad
\sigma=1.5,
\quad
n=25,
$$

se contrasta

$$
H_0:\mu=11.8
$$

frente a

$$
H_1:\mu\ne 11.8.
$$

El estadistico es

$$
Z=\frac{12.3-11.8}{1.5/5}=1.666\ldots
$$

Como

$$
1.666<1.96,
$$

no se rechaza al

$$
5\%.
$$

### Comentario

La media observada esta por encima de

$$
11.8,
$$

pero no lo bastante lejos, en terminos de error estandar, para salir de la region central.

## Caso con varianza desconocida

Si la poblacion es normal y

$$
\sigma
$$

es desconocida, se usa

$$
T=\frac{\overline X-\mu_0}{S/\sqrt n},
$$

que bajo

$$
H_0
$$

sigue una ley

$$
t_{n-1}.
$$

La regla bilateral al nivel

$$
\alpha
$$

es:

$$
|T|>t_{\alpha/2,n-1}.
$$

## Ejemplo 3: bilateral con t

Supongamos

$$
n=16,
\qquad
\overline x=8.4,
\qquad
s=1.2,
\qquad
\mu_0=7.8.
$$

Entonces

$$
T=\frac{8.4-7.8}{1.2/4}=2.
$$

Con

$$
15
$$

grados de libertad y nivel

$$
0.05,
$$

el valor critico es aproximadamente

$$
t_{0.025,15}\approx 2.131.
$$

Como

$$
2<2.131,
$$

no se rechaza.

### Leccion

El uso de

$$
t
$$

en lugar de

$$
z
$$

hace el criterio mas conservador, reflejando la incertidumbre adicional por estimar

$$
\sigma.
$$

## Alternativa compuesta y simetrica

La formulacion correcta suele ser

$$
H_0:\mu=\mu_0,
\qquad
H_1:\mu<\mu_0\ \text{o}\ \mu>\mu_0.
$$

La alternativa es compuesta y simetrica en torno a

$$
\mu_0.
$$

## Dos colas y deteccion de efectos

Una prueba bilateral protege frente a sesgos de interpretacion post hoc, pero puede necesitar muestras mayores para detectar un mismo efecto con la misma potencia.

### Regla intuitiva

Si ya se sabe que solo una direccion puede tener interes real, usar bilateral desperdicia potencia. Si no se sabe, usar unilateral seria intelectualmente deshonesto.

## Potencia en una prueba bilateral

La potencia contra una alternativa concreta

$$
\mu=\mu_1
$$

depende de:

- la distancia entre

$$
\mu_1
$$

y

$$
\mu_0;
$$

- el tamano muestral;
- la variabilidad;
- el nivel

$$
\alpha.
$$

### Lectura

Una prueba bilateral con muestra pequena puede no detectar desviaciones moderadas aunque estas existan.

## Tamano del efecto

Rechazar

$$
H_0
$$

no dice si la diferencia es importante en la practica.

Con muestras grandes, efectos minimos pueden resultar significativos. Por eso conviene mirar tambien:

- diferencia estimada

$$
\overline x-\mu_0;
$$

- intervalo de confianza asociado;
- escala natural del problema.

## Ejemplo 4: maquina descalibrada

Una maquina debe producir piezas con media

$$
10.
$$

Si una desviacion hacia arriba o hacia abajo es indeseable, el contraste correcto es

$$
H_0:\mu=10,
\qquad
H_1:\mu\ne 10.
$$

Si, en cambio, solo importa detectar sobredimensionamiento, entonces el contraste correcto seria unilateral derecho. La direccion no debe elegirse despues de mirar la muestra.

## Comentario avanzado

En modelos regulares, muchas pruebas bilaterales se construyen a partir de:

- razones de verosimilitud;
- estadisticos score;
- estadisticos Wald.

En gran muestra, estas construcciones suelen ser asintoticamente equivalentes. La prueba

$$
z
$$

es la version elemental donde la pivote normal aparece explicitamente.

## No rechazar no significa demostrar igualdad

Una prueba bilateral clasica solo decide si hay evidencia suficiente contra

$$
H_0:\mu=\mu_0.
$$

Si no se rechaza, eso no demuestra que la diferencia sea pequena en sentido practico. Puede deberse simplemente a falta de potencia.

### Lectura

Esta confusion es especialmente peligrosa cuando alguien interpreta un no rechazo como "equivalencia" entre tratamientos, maquinas o procesos. Igualdad aproximada y falta de evidencia de diferencia no son lo mismo.

## Equivalencia y margen practico

Cuando lo importante es demostrar que dos medias son suficientemente cercanas, el problema correcto no es una prueba bilateral ordinaria, sino una prueba de equivalencia.

### Idea

Se fija un margen

$$
\Delta>0
$$

y se plantea

$$
H_0:|\mu-\mu_0|\ge \Delta,
\qquad
H_1:|\mu-\mu_0|<\Delta.
$$

### Lectura

Esto invierte la logica usual. La hipotesis nula representa ahora una discrepancia demasiado grande, y la carga de la prueba recae en mostrar cercania dentro del margen relevante.

## Flujo de trabajo digerible

1. Escribir

$$
H_0
$$

y

$$
H_1
$$

de forma bilateral.

2. Identificar si corresponde

$$
z
$$

o

$$
t.
$$

3. Calcular el estadistico observado.

4. Compararlo con el valor critico bilateral o calcular el valor-p bilateral.

5. Decidir si se rechaza o no se rechaza

$$
H_0.
$$

6. Interpretar magnitud y contexto, no solo la decision.

## Practica guiada

### Problema 1

Se tiene

$$
n=49,
\qquad
\overline x=20.7,
\qquad
\sigma=2.8,
\qquad
\mu_0=20.
$$

Contrastar bilateralmente al nivel

$$
0.05.
$$

#### Guion

1. formar

$$
Z=\frac{20.7-20}{2.8/7};
$$

2. comparar con

$$
1.96.
$$

### Problema 2

Se observa una muestra con

$$
n=12,
\qquad
\overline x=5.4,
\qquad
s=0.9.
$$

Contrastar

$$
H_0:\mu=5
\qquad \text{frente a} \qquad
H_1:\mu\ne 5.
$$

#### Idea

Usar

$$
t
$$

de Student con

$$
11
$$

grados de libertad.

### Problema 3

Explicar por que no es correcto concluir "la media es exactamente igual a

$$
\mu_0
$$

" cuando una prueba bilateral no rechaza

$$
H_0.
$$

#### Idea conceptual

No rechazar significa solo que la muestra no aporta evidencia suficiente para sostener una discrepancia distinta de cero al nivel fijado.

## Errores frecuentes

- Elegir unilateral o bilateral despues de ver el signo del estadistico.
- Pensar que bilateral significa simplemente duplicar una unilateral sin revisar la hipotesis alternativa.
- Concluir equivalencia exacta cuando no se rechaza.
- Ignorar la dualidad con el intervalo de confianza.
- Reportar solo "se rechaza" o "no se rechaza" sin mostrar estadistico ni valor-p.

## Cierre

La prueba de dos colas es la opcion correcta cuando la discrepancia relevante no tiene direccion predeterminada. Su costo es una exigencia mas alta por cola; su beneficio es una inferencia coherente con problemas donde tanto el exceso como el defecto importan. Bien entendida, obliga a distinguir entre significacion, direccion, magnitud del efecto y honestidad en el planteamiento del contraste.
