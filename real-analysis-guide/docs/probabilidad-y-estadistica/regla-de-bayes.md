---
title: Regla de Bayes
description: Probabilidad total, inversion de condicionamientos, interpretacion inferencial y ejemplos diagnosticos, de clasificacion y de mezcla.
---

# Regla de Bayes

## La inversion que cambia toda la inferencia

La probabilidad condicional responde preguntas del tipo:

- cual es la probabilidad de un resultado si una causa esta presente;
- cual es la probabilidad de un dato si una hipotesis es correcta.

Pero en problemas reales casi siempre se pregunta en sentido inverso:

- dado un resultado observado, cuan probable era la causa;
- dado un dato, cuan plausible es la hipotesis.

La regla de Bayes permite exactamente esa inversion.

## El error intuitivo mas comun

La confusion tipica es pensar que

$$
P(A\mid B)
$$

y

$$
P(B\mid A)
$$

son casi lo mismo. No lo son. Una mide:

- probabilidad del dato bajo la hipotesis;

la otra:

- probabilidad de la hipotesis dado el dato.

Bayes explica como pasar de una a la otra.

## Teorema de probabilidad total

Antes de Bayes hace falta una descomposicion basica.

### Teorema 1

Sea

$$
B_1,\dots,B_n
$$

una particion de

$$
\Omega
$$

tal que

$$
P(B_i)>0
$$

para todo $i$. Entonces para cualquier evento $A$:

$$
P(A)=\sum_{i=1}^n P(A\mid B_i)P(B_i).
$$

### Demostracion

Como

$$
A=(A\cap B_1)\cup \cdots \cup (A\cap B_n)
$$

en union disjunta,

$$
P(A)=\sum_{i=1}^n P(A\cap B_i).
$$

Y por definicion de probabilidad condicional:

$$
P(A\cap B_i)=P(A\mid B_i)P(B_i).
$$

\qed

### Interpretacion

La probabilidad total mezcla los distintos escenarios $B_i$ ponderados por su peso previo.

## Regla de Bayes para una particion finita

### Teorema 2: regla de Bayes

Bajo las hipotesis anteriores, si

$$
P(A)>0,
$$

entonces para cada $i$:

$$
P(B_i\mid A)
=
\frac{P(A\mid B_i)P(B_i)}
{\sum_{j=1}^n P(A\mid B_j)P(B_j)}.
$$

### Demostracion

Por definicion,

$$
P(B_i\mid A)=\frac{P(B_i\cap A)}{P(A)}.
$$

El numerador puede escribirse como

$$
P(A\mid B_i)P(B_i),
$$

y el denominador se expresa mediante probabilidad total. Sustituyendo se obtiene la formula.

\qed

## Caso de dos hipotesis

Si solo hay una hipotesis $B$ y su complemento $B^c$, entonces

$$
P(B\mid A)
=
\frac{P(A\mid B)P(B)}
{P(A\mid B)P(B)+P(A\mid B^c)P(B^c)}.
$$

Esta es la forma mas comun en diagnostico, deteccion y clasificacion binaria.

## Lectura inferencial: prior, verosimilitud, posterior

En lenguaje bayesiano:

- $P(B_i)$ es el prior;
- $P(A\mid B_i)$ es la verosimilitud;
- $P(B_i\mid A)$ es el posterior.

La regla de Bayes dice:

> posterior = verosimilitud x prior / evidencia total.

La evidencia total es el denominador, que normaliza para que las probabilidades posteriores sumen $1$.

## Bayes en forma de razones

Cuando hay dos hipotesis $H_1$ y $H_0$, una forma muy instructiva es trabajar con odds:

$$
\frac{P(H_1\mid A)}{P(H_0\mid A)}
=
\frac{P(A\mid H_1)}{P(A\mid H_0)}
\cdot
\frac{P(H_1)}{P(H_0)}.
$$

Esto dice que las odds posteriores son:

- odds previas;
- multiplicadas por el cociente de verosimilitudes.

Esta forma es crucial en decision estadistica y aprendizaje bayesiano.

## Ejemplo 1: test medico

Supongamos:

- prevalencia de la enfermedad:

$$
P(E)=0.01;
$$

- sensibilidad:

$$
P(+\mid E)=0.99;
$$

- tasa de falso positivo:

$$
P(+\mid E^c)=0.05.
$$

Queremos

$$
P(E\mid +).
$$

Aplicando Bayes:

$$
P(E\mid +)
=
\frac{0.99\cdot 0.01}
{0.99\cdot 0.01+0.05\cdot 0.99}.
$$

Calculando:

$$
P(E\mid +)
=
\frac{0.0099}{0.0594}
=
\frac16
\approx
0.1667.
$$

### Lectura

Aunque el test es muy sensible, la enfermedad es rara y los falsos positivos no son despreciables. Por eso un positivo no implica una probabilidad alta de estar realmente enfermo.

## Tasa base o base-rate effect

El ejemplo anterior muestra el efecto de la tasa base:

- si una condicion es muy rara;
- incluso un test bastante bueno;
- puede producir muchos positivos entre personas sanas.

Este fenomeno es central en interpretacion de pruebas diagnosticas y en analisis de alarmas.

## Ejemplo 2: urnas

Se elige una urna al azar:

- urna 1 con probabilidad

$$
\frac13;
$$

- urna 2 con probabilidad

$$
\frac23.
$$

La urna 1 contiene $2$ rojas y $1$ azul. La urna 2 contiene $1$ roja y $2$ azules.

Si se extrae una bola roja, cual es la probabilidad de haber elegido la urna 1?

Definimos:

$$
R=\{\text{sale roja}\},
\qquad
U_1=\{\text{urna 1}\},
\qquad
U_2=\{\text{urna 2}\}.
$$

Entonces

$$
P(R\mid U_1)=\frac23,
\qquad
P(R\mid U_2)=\frac13.
$$

Por Bayes:

$$
P(U_1\mid R)
=
\frac{P(R\mid U_1)P(U_1)}
{P(R\mid U_1)P(U_1)+P(R\mid U_2)P(U_2)}.
$$

Sustituyendo:

$$
P(U_1\mid R)
=
\frac{\frac23\cdot \frac13}
{\frac23\cdot \frac13+\frac13\cdot \frac23}
=
\frac12.
$$

### Comentario

Aunque la urna 1 favorece la roja, la urna 2 era mas probable al inicio. Ambas influencias se compensan exactamente.

## Ejemplo 3: clasificacion por correo basura

Supongamos:

- $40\%$ de los correos son spam;
- la palabra "gratis" aparece en el $70\%$ de los spam;
- la palabra "gratis" aparece en el $10\%$ de los no spam.

Queremos

$$
P(\text{spam}\mid \text{aparece "gratis"}).
$$

Entonces

$$
P(S\mid G)
=
\frac{P(G\mid S)P(S)}
{P(G\mid S)P(S)+P(G\mid S^c)P(S^c)}.
$$

Sustituyendo:

$$
P(S\mid G)
=
\frac{0.7\cdot 0.4}{0.7\cdot 0.4+0.1\cdot 0.6}
=
\frac{0.28}{0.34}
\approx
0.8235.
$$

La palabra "gratis" aumenta mucho la plausibilidad de spam, aunque no la vuelve certeza.

## Descomposicion de mezcla

Bayes es particularmente natural cuando una observacion puede venir de varias subpoblaciones:

- varios tipos de pacientes;
- varios mecanismos de fallo;
- varias fuentes de datos.

La probabilidad total calcula la distribucion global de la observacion. Bayes invierte esa mezcla y pregunta de que componente es mas plausible que haya venido.

## Caso continuo: formula informal

Si $\theta$ es un parametro continuo y $x$ un dato observado, la forma heuristica de Bayes es

$$
\pi(\theta\mid x)
\propto
f(x\mid \theta)\pi(\theta),
$$

donde:

- $\pi(\theta)$ es la densidad previa;
- $f(x\mid \theta)$ la verosimilitud;
- $\pi(\theta\mid x)$ la densidad posterior.

### Comentario

En cursos elementales suele trabajarse sobre eventos discretos, pero esta version continua es la que domina la inferencia bayesiana moderna.

## Bayes no es simetria algebraica vacia

Aunque la formula sale de una simple identidad con probabilidades condicionales, su significado es profundo:

- permite actualizar conocimiento;
- obliga a explicitar supuestos previos;
- separa evidencia nueva de informacion previa;
- convierte inferencia en una operacion cuantitativa coherente.

## Error comun 1: confundir sensibilidad con probabilidad posterior

No es lo mismo:

$$
P(+\mid E)
$$

que

$$
P(E\mid +).
$$

La primera habla del test si la enfermedad esta presente. La segunda habla de la enfermedad dado el resultado. Bayes las conecta, pero no las iguala.

## Error comun 2: olvidar el denominador

El denominador

$$
P(A)
$$

es la evidencia total. Ignorarlo equivale a no normalizar. Sin el, solo se tiene una cantidad proporcional, no una probabilidad posterior correcta.

## Error comun 3: ignorar la probabilidad previa

La prevalencia o prior puede cambiar por completo la interpretacion de un dato. Un mismo resultado de prueba significa cosas muy distintas en poblaciones con riesgos previos diferentes.

## Relacion con arboles de probabilidad

Bayes se entiende muy bien con un arbol:

- primero se ramifican hipotesis;
- luego, dentro de cada hipotesis, datos posibles.

Las probabilidades conjuntas aparecen multiplicando a lo largo de ramas. El posterior se obtiene comparando ramas compatibles con la evidencia observada.

## Practica guiada

### Ejercicio 1

Una fabrica tiene dos maquinas:

- maquina A produce el $30\%$;
- maquina B el $70\%$.

La maquina A produce $4\%$ de defectuosos y la B $1\%$.

Si una pieza sale defectuosa, cual es la probabilidad de que provenga de A?

#### Solucion

Sea $D$ el evento "defectuosa". Entonces

$$
P(A\mid D)
=
\frac{0.04\cdot 0.30}{0.04\cdot 0.30+0.01\cdot 0.70}
=
\frac{0.012}{0.019}
\approx
0.6316.
$$

### Ejercicio 2

Explica por que una enfermedad rara puede tener muchos falsos positivos relativos incluso con un test bueno.

#### Solucion

Porque el numero de personas sanas es muy grande. Una pequena tasa de falso positivo aplicada a una poblacion sana enorme puede competir con los verdaderos positivos de la poblacion enferma, que es pequena.

### Ejercicio 3

Que papel juega la probabilidad total en la regla de Bayes?

#### Solucion

Proporciona el denominador, es decir, la probabilidad total de la evidencia observada al sumar sobre todas las hipotesis posibles.

## Cierre

La regla de Bayes no es solo una formula de inversion. Es el mecanismo matematico que convierte:

- informacion previa;
- plausibilidad del dato bajo cada escenario;
- y observacion nueva

en una probabilidad actualizada. Entender bien esta pagina es decisivo porque evita una de las confusiones mas persistentes en probabilidad aplicada: creer que saber la probabilidad del dato dada una hipotesis equivale a saber la probabilidad de la hipotesis dada el dato.
