---
title: Errores, condicionamiento y estabilidad
description: Fundamentos conceptuales de error numerico, aritmetica de punto flotante, condicionamiento de problemas y estabilidad de algoritmos.
---

# Errores, condicionamiento y estabilidad

## Por que este tema no es opcional

Una guia seria de metodos numericos no puede limitarse a enunciar algoritmos. Dos metodos pueden producir numeros distintos aun resolviendo el mismo problema, y esa diferencia no se explica solo por "mas iteraciones" o "mejor computadora". La cuestion central es otra:

- que problema matematico se esta resolviendo realmente;
- que tan sensible es ese problema a perturbaciones pequenas;
- que tanto de esa sensibilidad es inevitable;
- que parte es culpa del algoritmo;
- como distinguir entre error del modelo, error de truncamiento y error de redondeo.

Sin este lenguaje, el estudio de metodos numericos queda en un nivel procedural. Con este lenguaje, en cambio, se puede analizar por que un metodo funciona, cuando falla y que tipo de garantia se puede prometer.

## Estructura del problema numerico

En terminos abstractos, un problema numerico consiste en aplicar un operador

$$
\mathcal{F}:D\subseteq X\to Y
$$

que a unos datos de entrada

$$
d\in D
$$

les asigna una solucion exacta

$$
y=\mathcal{F}(d).
$$

El algoritmo no produce

$$
y,
$$

sino una aproximacion

$$
\widetilde y.
$$

La pregunta correcta no es solo si

$$
\widetilde y
$$

esta cerca de

$$
y,
$$

sino tambien si

$$
\widetilde y
$$

es la solucion exacta de un problema cercano. Esa distincion separa el analisis de errores en dos niveles:

- error del problema;
- error del algoritmo.

## Tipos de error

Sea

$$
y
$$

el valor exacto y

$$
\widetilde y
$$

una aproximacion.

### Error absoluto

Se define por

$$
E_{\mathrm{abs}}=\lvert y-\widetilde y\rvert.
$$

Es la magnitud natural cuando la escala del problema esta fijada de antemano.

### Error relativo

Si

$$
y\neq 0,
$$

se define por

$$
E_{\mathrm{rel}}=\frac{\lvert y-\widetilde y\rvert}{\lvert y\rvert}.
$$

Este error mide la precision en proporcion al tamano del dato exacto.

### Observacion importante

No existe una sola nocion universalmente correcta. Si el valor exacto es muy pequeno, el error relativo puede ser enorme aunque el error absoluto sea minusculo. Si el valor exacto es muy grande, un error absoluto moderado puede ser irrelevante. Toda estimacion de error debe interpretarse con la escala natural del problema.

## Fuentes de error

En calculo numerico aparecen al menos cuatro fuentes distintas.

### 1. Error de modelado

El problema matematico no coincide exactamente con el fenomeno fisico o con los datos observados. Este error pertenece al modelo, no al algoritmo.

### 2. Error en los datos

Los datos de entrada llegan perturbados:

$$
d\rightsquigarrow d+\delta d.
$$

Si el problema es mal condicionado, perturbaciones muy pequenas pueden producir grandes cambios en la salida.

### 3. Error de truncamiento

Se reemplaza un proceso infinito por uno finito:

- una serie por un numero finito de terminos;
- una derivada por una diferencia finita;
- una integral por una suma;
- una EDO por un esquema discreto.

### 4. Error de redondeo

Las operaciones no se hacen en

$$
\mathbb{R},
$$

sino en un conjunto finito de numeros representables en maquina.

## Aritmetica de punto flotante

La mayoria de los sistemas numericos usan una representacion del tipo

$$
\pm m\times \beta^e,
$$

donde

- $\beta$ es la base;
- $m$ es la mantisa;
- $e$ es el exponente.

En doble precision IEEE-754, la base es

$$
2
$$

y la mantisa tiene una longitud finita. Por eso no todos los reales son representables.

### Modelo estandar de redondeo

Para una operacion elemental

$$
\circ\in \{+,-,\times,\div\},
$$

el resultado calculado se modela como

$$
\operatorname{fl}(x\circ y)=(x\circ y)(1+\delta),
\qquad
\lvert \delta\rvert\le u,
$$

donde

$$
u
$$

es la unidad de redondeo.

Este modelo no es una curiosidad tecnica. Es la base del analisis moderno de estabilidad.

### Consecuencia

Cada operacion elemental introduce un error relativo pequeno, pero una cadena larga de operaciones puede amplificarlo si la formulacion es numericamente inestable.

## Cancelacion catastrofica

Uno de los fenomenos mas importantes de punto flotante es la perdida de cifras significativas al restar numeros casi iguales.

### Ejemplo 1

Considera

$$
f(x)=\sqrt{1+x}-1
$$

para

$$
\lvert x\rvert\ll 1.
$$

Si se evalua directamente, se restan dos numeros muy cercanos y se pierden cifras significativas. Pero la identidad algebraica

$$
\sqrt{1+x}-1=
\frac{x}{\sqrt{1+x}+1}
$$

evita esa cancelacion.

### Leccion

Dos formulas algebraicamente equivalentes pueden ser numericamente muy distintas.

## Cifras significativas

En lenguaje informal se dice que una aproximacion tiene

$$
k
$$

cifras correctas si el error relativo es del orden de

$$
10^{-k}.
$$

Mas precisamente, si

$$
E_{\mathrm{rel}}\le \frac12 10^{-k},
$$

entonces las primeras

$$
k
$$

cifras decimales significativas estan fijadas correctamente.

Esta regla es util para interpretar tolerancias, aunque el analisis serio se hace con cotas explicitas de error, no solo con cifras.

## Condicionamiento del problema

El condicionamiento mide la sensibilidad de la solucion exacta frente a perturbaciones en los datos. Es una propiedad del problema matematico, no del algoritmo.

### Caso escalar

Si

$$
y=F(x),
$$

la sensibilidad local absoluta se mide por

$$
\kappa_{\mathrm{abs}}(x)=\lvert F'(x)\rvert,
$$

y la relativa, cuando tenga sentido, por

$$
\kappa_{\mathrm{rel}}(x)=\left\lvert \frac{xF'(x)}{F(x)}\right\rvert.
$$

Estas formulas se obtienen del desarrollo lineal

$$
F(x+\delta x)-F(x)\approx F'(x)\delta x.
$$

### Interpretacion

- si $\kappa$ es pequena, el problema esta bien condicionado localmente;
- si $\kappa$ es grande, pequenas perturbaciones pueden provocar grandes variaciones en la solucion.

## Ejemplo 2: raiz de una ecuacion

Sea

$$
f(\alpha)=0,
\qquad
f'(\alpha)\neq 0.
$$

Si perturbamos la ecuacion a

$$
f(x)+\delta f(x)=0,
$$

la nueva raiz

$$
\alpha+\delta \alpha
$$

satisface, a primer orden,

$$
\delta \alpha\approx -\frac{\delta f(\alpha)}{f'(\alpha)}.
$$

Por tanto, cuando

$$
\lvert f'(\alpha)\rvert
$$

es pequeno, el problema de localizar la raiz es sensible.

### Consecuencia conceptual

Un metodo de raices puede ser perfectamente estable y aun asi devolver una aproximacion mediocre si la propia raiz esta mal condicionada.

## Condicionamiento de sistemas lineales

En el problema

$$
Ax=b,
$$

el numero de condicion de la matriz se define, respecto a una norma dada, por

$$
\kappa(A)=\lVert A\rVert \lVert A^{-1}\rVert.
$$

Si

$$
\kappa(A)
$$

es grande, un pequeno error relativo en

$$
b
$$

o en

$$
A
$$

puede traducirse en un error relativo mucho mayor en la solucion.

### Ejemplo 3

Considera

$$
A_\varepsilon=
\begin{pmatrix}
1 & 1\\
1 & 1+\varepsilon
\end{pmatrix}.
$$

Cuando

$$
\varepsilon
$$

es pequeno, las filas son casi dependientes y la matriz se acerca a la singularidad. Resolver

$$
A_\varepsilon x=b
$$

es entonces un problema intrinsecamente mal condicionado.

## Error hacia adelante y error hacia atras

Estas dos nociones organizan el analisis moderno de algoritmos.

### Error hacia adelante

Mide la distancia entre la salida calculada y la solucion exacta del problema original:

$$
E_{\mathrm{fwd}}=\lVert \widetilde y-y\rVert.
$$

### Error hacia atras

Mide cuanto hay que perturbar los datos para que la salida calculada sea exacta para un problema cercano:

$$
\widetilde y=\mathcal{F}(d+\delta d).
$$

El tamano minimo razonable de

$$
\delta d
$$

es el error hacia atras.

### Por que el error hacia atras es tan util

Porque separa con nitidez:

- sensibilidad del problema;
- calidad del algoritmo.

Un algoritmo puede producir pequeno error hacia atras aunque el error hacia adelante sea grande; eso ocurre cuando el problema esta mal condicionado.

## Estabilidad hacia atras

Se dice, de manera informal, que un algoritmo es estable hacia atras si la salida calculada coincide exactamente con la solucion del problema ligeramente perturbado.

Esta es la nocion correcta de "algoritmo bueno" en gran parte del calculo cientifico.

### Principio rector

Si un algoritmo es estable hacia atras y el problema esta bien condicionado, entonces el error hacia adelante es pequeno.

De forma esquematica:

$$
\text{error hacia adelante}
\lesssim
\text{condicionamiento}
\times
\text{error hacia atras}.
$$

Este producto explica por que no basta con hablar solo de estabilidad o solo de condicionamiento.

## Residuo no es lo mismo que error

En muchos problemas se puede calcular un residuo barato.

### En sistemas lineales

Si se propone

$$
\widetilde x,
$$

el residuo es

$$
r=b-A\widetilde x.
$$

Si

$$
r=0,
$$

entonces

$$
\widetilde x
$$

es solucion exacta. Pero si

$$
r
$$

es pequeno, eso no garantiza automaticamente que

$$
\widetilde x
$$

este cerca de

$$
x.
$$

La relacion entre residuo y error depende del condicionamiento de

$$
A.
$$

### En busqueda de raices

Que

$$
\lvert f(\widetilde x)\rvert
$$

sea pequeno no implica que

$$
\widetilde x
$$

este cerca de una raiz bien determinada si

$$
f'
$$

es muy pequeno o si hay planicies pronunciadas.

## Estabilidad de algoritmos iterativos

En algoritmos por iteracion aparecen dos preguntas distintas:

1. si la iteracion exacta converge;
2. si la iteracion en aritmetica finita preserva ese comportamiento.

### Ejemplo 4: recurrencias estables e inestables

La recurrencia

$$
y_{n+1}=10y_n
$$

amplifica cualquier error de redondeo en un factor

$$
10
$$

por paso. La informacion inicial errada se magnifica exponencialmente.

En cambio, una recurrencia contractiva del tipo

$$
y_{n+1}=0.1y_n
$$

amortigua perturbaciones.

### Moraleja

La estabilidad tambien es dinamica: hay algoritmos que heredan y amplifican cada error intermedio, y otros que lo amortiguan.

## Consistencia, estabilidad y convergencia

En metodos de aproximacion discreta para derivadas, integrales o EDO suele aparecer el triangulo conceptual:

- consistencia;
- estabilidad;
- convergencia.

### Consistencia

El esquema discreto debe aproximar correctamente la ecuacion o el operador continuo cuando el paso tiende a cero.

### Estabilidad

Las perturbaciones pequenas en los datos, en el redondeo o en pasos anteriores no deben amplificarse de manera incontrolada.

### Convergencia

La solucion numerica debe tender a la solucion exacta cuando el parametro de discretizacion tiende a cero.

### Relacion estructural

En gran cantidad de problemas, la convergencia nace de la combinacion de consistencia y estabilidad. El principio aparece con diferentes formas:

- en EDO de un paso: error global = acumulacion controlada del error local;
- en diferencias finitas: la estabilidad impide que el truncamiento se vuelva explosivo;
- en algebra lineal: una factorizacion estable evita que el redondeo destruya la informacion util.

## Ejemplo 5: error local y error global en Euler

Para la EDO

$$
y'=f(t,y),
$$

el metodo de Euler usa

$$
y_{n+1}=y_n+h f(t_n,y_n).
$$

Su error local de truncamiento es de orden

$$
h^2,
$$

pero el error global es de orden

$$
h.
$$

No hay contradiccion. El error local se comete en cada paso, y la estabilidad del metodo determina como se acumulan esos errores.

## Ejemplo 6: reformulacion estable de la formula cuadratica

Para la ecuacion

$$
ax^2+bx+c=0
$$

la formula usual

$$
x=\frac{-b\pm \sqrt{b^2-4ac}}{2a}
$$

puede sufrir cancelacion severa cuando

$$
b^2\gg 4ac
$$

y se toma el signo que resta cantidades proximas.

Una estrategia estable es calcular primero la raiz que evita cancelacion y obtener la otra mediante

$$
x_1x_2=\frac{c}{a}.
$$

Este ejemplo muestra que el analisis numerico no es solo "aplicar formulas", sino elegir una formulacion computacionalmente sana.

## Cotas tipo primer orden

Sea

$$
y=\mathcal{F}(d)
$$

y supongamos que

$$
\mathcal{F}
$$

es diferenciable. Entonces, para perturbaciones pequenas,

$$
\mathcal{F}(d+\delta d)-\mathcal{F}(d)
\approx
D\mathcal{F}(d)[\delta d].
$$

En normas compatibles se obtiene una cota de la forma

$$
\frac{\lVert \delta y\rVert}{\lVert y\rVert}
\lesssim
\kappa(d)\,
\frac{\lVert \delta d\rVert}{\lVert d\rVert},
$$

donde

$$
\kappa(d)
$$

es el numero de condicion relativo local.

Esta desigualdad es la expresion matematica precisa de la idea de sensibilidad.

## Problemas bien planteados y mal planteados

Desde la perspectiva numerica, interesa distinguir:

- existencia de solucion;
- unicidad;
- dependencia continua respecto de los datos.

Si falta dependencia continua, el problema es mal planteado en el sentido de Hadamard y la computacion estable se vuelve, en general, imposible sin regularizacion adicional.

## Buenas practicas de analisis numerico

Antes de confiar en una salida numerica conviene responder:

1. cual es el problema exacto que se esta discretizando;
2. si el problema continuo esta bien condicionado;
3. que tipo de error domina en el regimen de interes;
4. si el algoritmo es estable hacia atras o, al menos, hacia adelante;
5. si el residuo es interpretable como error;
6. si la formulacion algebraica evita cancelaciones y sobreflujos;
7. si la tolerancia pedida tiene sentido frente al ruido de los datos.

## Ejemplo 7: biseccion y Newton bajo la lente del condicionamiento

Supongamos que

$$
f(\alpha)=0
$$

con

$$
f'(\alpha)\neq 0.
$$

- La biseccion es robusta porque controla geometricamente el intervalo.
- Newton es rapido porque usa informacion diferencial local.
- Si

$$
\lvert f'(\alpha)\rvert
$$

es pequeno, ambos comparten el mismo problema de condicionamiento de la raiz, aunque lo manifiesten de modo distinto.

La comparacion honesta entre algoritmos debe separar:

- la dificultad intrinseca del problema;
- la eficiencia y estabilidad del metodo.

## Puente hacia los bloques siguientes

Estos conceptos reaparecen en todo el bloque:

- en biseccion, al interpretar la cota de error;
- en Newton y secante, al distinguir rapidez de fragilidad;
- en diferencias finitas, al pasar del error local al global;
- en cuadratura, al balancear truncamiento y redondeo;
- en sistemas lineales, al usar pivoteo y factorizaciones estables;
- en minimos cuadrados, al estudiar sensibilidad de los datos;
- en EDO, al hablar de estabilidad y acumulacion de errores.

## Cierre

El nucleo del analisis numerico no es la produccion mecanica de aproximaciones, sino el estudio simultaneo de tres objetos:

- el problema continuo;
- la discretizacion o formulacion;
- la aritmetica finita con la que se implementa.

Solo cuando esas tres capas se distinguen con claridad se puede decir que un metodo numerico esta realmente entendido y no solo memorizado.
