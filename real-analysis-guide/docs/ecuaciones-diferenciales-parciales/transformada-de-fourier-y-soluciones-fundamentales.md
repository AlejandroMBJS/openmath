---
title: Transformada de Fourier y Soluciones Fundamentales
description: Metodo espectral para resolver EDP lineales en dominios no acotados y construir nucleos fundamentales.
---

# Transformada de Fourier y Soluciones Fundamentales

## Idea central

En dominios como $\mathbb{R}^n$, la separacion de variables con series discretas ya no es la herramienta natural. La version continua del analisis espectral es la transformada de Fourier.

Su papel en EDP lineales es claro:

- convierte derivadas en multiplicacion algebraica;
- diagonaliza operadores invariantes por traslacion;
- permite construir soluciones fundamentales y nucleos.

## Regla basica

Si

$$
\widehat{u}(\xi)=\int_{\mathbb{R}^n} e^{-ix\cdot \xi}u(x)\,dx,
$$

entonces formalmente

$$
\widehat{\partial_j u}(\xi)=i\xi_j \widehat{u}(\xi),
\qquad
\widehat{\Delta u}(\xi)=-|\xi|^2 \widehat{u}(\xi).
$$

### Lectura

La derivacion en espacio fisico se vuelve multiplicacion por el simbolo del operador en espacio de frecuencias.

## Problema del calor en todo el espacio

Considerese

$$
u_t-k\Delta u=0,
\qquad
u(0,x)=u_0(x),
\qquad
x\in \mathbb{R}^n.
$$

Aplicando Fourier en $x$:

$$
\partial_t \widehat{u}(t,\xi)+k|\xi|^2 \widehat{u}(t,\xi)=0.
$$

Para cada frecuencia fija $\xi$, esto es una EDO:

$$
\widehat{u}(t,\xi)=e^{-k|\xi|^2 t}\widehat{u_0}(\xi).
$$

Invirtiendo Fourier se obtiene

$$
u(t,x)=(G_t*u_0)(x),
$$

donde

$$
G_t(x)=\frac{1}{(4\pi kt)^{n/2}}e^{-\frac{|x|^2}{4kt}}
$$

es el nucleo del calor.

## Que dice el nucleo del calor

La formula

$$
u(t,x)=\int_{\mathbb{R}^n} G_t(x-y)u_0(y)\,dy
$$

concentra varias propiedades estructurales:

- positividad;
- conservacion de masa;
- suavizado instantaneo;
- auto-semejanza bajo escalamiento parabolico.

## Solucion fundamental

Una solucion fundamental para un operador lineal $L$ es una distribucion $E$ tal que

$$
L E=\delta.
$$

Con ella, para datos o fuentes adecuados, las soluciones pueden escribirse por convolucion.

### Ejemplo

Para el Laplaciano,

$$
-\Delta \Phi=\delta_0.
$$

Entonces, formalmente, la solucion de

$$
-\Delta u=f
$$

en $\mathbb{R}^n$ es

$$
u=\Phi*f.
$$

## Simbolo y resolucion algebraica

Si $L$ es un operador diferencial con coeficientes constantes, Fourier lo convierte en multiplicacion por su simbolo $p(\xi)$:

$$
\widehat{Lu}(\xi)=p(\xi)\widehat{u}(\xi).
$$

Resolver $Lu=f$ significa formalmente escribir

$$
\widehat{u}(\xi)=\frac{\widehat{f}(\xi)}{p(\xi)}.
$$

La dificultad real esta en:

- zeros del simbolo;
- interpretacion distribucional de $1/p(\xi)$;
- decaimiento y regularidad.

## Ecuacion de ondas

Para

$$
u_{tt}-c^2\Delta u=0
$$

la transformada de Fourier en espacio da

$$
\widehat{u}_{tt}+c^2|\xi|^2\widehat{u}=0.
$$

Cada frecuencia satisface un oscilador armonico:

$$
\widehat{u}(t,\xi)
=\widehat{u_0}(\xi)\cos(c|\xi|t)
+\frac{\widehat{u_1}(\xi)}{c|\xi|}\sin(c|\xi|t).
$$

### Lectura

El calor amortigua frecuencias altas. Las ondas las hacen oscilar sin amortiguarlas.

## Regularidad vista en frecuencias

En Fourier, tener derivadas cuadrado-integrables equivale a que

$$
(1+|\xi|^2)^{s/2}\widehat{u}(\xi)
$$

sea cuadrado-integrable. Esta es una forma muy limpia de leer espacios de Sobolev.

Por eso Fourier no solo resuelve ecuaciones: tambien mide regularidad.

## Poisson en Fourier

Para

$$
-\Delta u=f
$$

obtenemos

$$
|\xi|^2 \widehat{u}(\xi)=\widehat{f}(\xi).
$$

Formalmente,

$$
\widehat{u}(\xi)=\frac{\widehat{f}(\xi)}{|\xi|^2}.
$$

Este cociente muestra de inmediato dos hechos:

- el origen $\xi=0$ es delicado;
- el operador inverso gana dos derivadas en sentido espectral, salvo problemas de baja frecuencia.

## Fuente puntual y potencial newtoniano

En $\mathbb{R}^n$, la solucion fundamental del Laplaciano es:

$$
\Phi(x)=
\begin{cases}
c_n |x|^{2-n}, & n\ge 3,\\
-\dfrac{1}{2\pi}\log|x|, & n=2.
\end{cases}
$$

No es una curiosidad formal. Describe:

- potencial electrostatico;
- gravedad newtoniana;
- nucleo de muchas representaciones integrales.

## Metodo de Duhamel en Fourier

Para

$$
u_t-k\Delta u=f,
\qquad
u(0)=u_0,
$$

la transformada lleva a

$$
\partial_t \widehat{u}+k|\xi|^2\widehat{u}=\widehat{f}.
$$

Resolviendo la EDO:

$$
\widehat{u}(t,\xi)
=e^{-k|\xi|^2 t}\widehat{u_0}(\xi)
+\int_0^t e^{-k|\xi|^2(t-s)}\widehat{f}(s,\xi)\,ds.
$$

Al invertir Fourier reaparece la formula de Duhamel con el nucleo del calor.

## Ventaja y limite del metodo

Ventajas:

- diagonalizacion exacta;
- formulas explicitas;
- lectura limpia de regularidad;
- naturalidad en dominios sin frontera.

Limites:

- la frontera rompe la invariancia por traslacion;
- coeficientes variables ya no se diagonalizan globalmente;
- no linealidades fuertes requieren mas herramientas.

## Conexion con distribuciones

Soluciones fundamentales casi nunca son funciones suaves globales. Su lenguaje natural es distribucional.

De hecho, decir

$$
L E=\delta
$$

es una afirmacion distribucional. Esto conecta de manera directa el metodo de Fourier con la teoria de soluciones debiles.

## Ejemplo guiado: delta como dato inicial para el calor

Si $u_0=\delta_0$, entonces

$$
\widehat{u_0}(\xi)=1.
$$

La solucion es

$$
\widehat{u}(t,\xi)=e^{-k|\xi|^2 t},
$$

e invertida:

$$
u(t,x)=G_t(x).
$$

### Lectura

El nucleo del calor es la evolucion del dato mas concentrado posible. Por eso es la pieza elemental de toda solucion.

## Errores frecuentes

- tratar formulas formales de Fourier como si siempre convergieran sin hipotesis;
- ignorar el papel del origen $\xi=0$ en operadores elipticos;
- olvidar que la frontera destruye la diagonalizacion global;
- confundir solucion fundamental con solucion general;
- usar convolucion sin controlar integrabilidad o crecimiento.

## Practica recomendada

1. Derivar el nucleo del calor a partir de la transformada de Fourier.
2. Resolver en Fourier la ecuacion de ondas con datos iniciales dados.
3. Verificar formalmente que el Laplaciano se transforma en $-|\xi|^2$.
4. Estudiar por que la singularidad en $\xi=0$ aparece al invertir Poisson.
5. Interpretar $G_t$ como solucion con dato inicial delta.

## Cierre

La transformada de Fourier es la herramienta espectral natural para EDP lineales en dominios no acotados. Convierte operadores en multiplicadores, produce nucleos fundamentales y revela al mismo tiempo existencia explicita y regularidad. Es una de las bisagras mas claras entre EDP, analisis armonico y fisica matematica.
