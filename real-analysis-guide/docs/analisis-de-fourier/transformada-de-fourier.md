---
title: Transformada de Fourier
description: Paso del espectro discreto al continuo, inversion, simetrias y Parseval en dominios no periodicos.
---

# Transformada de Fourier

## Transformada de Fourier

Para una funcion integrable adecuada, definimos

$$
\widehat{f}(\xi)=\int_{\mathbb{R}} f(t)e^{-i\xi t}\,dt.
$$

En varias dimensiones:

$$
\widehat{f}(\xi)=\int_{\mathbb{R}^n} f(x)e^{-ix\cdot \xi}\,dx.
$$

### Lectura

La transformada mide cuanto del modo oscilatorio $e^{i\xi t}$ aparece en la senal. A diferencia de la serie periodica, ahora el espectro es continuo.

## Transformada de Fourier inversa y espectro

Con normalizacion compatible,

$$
f(t)=\frac{1}{2\pi}\int_{\mathbb{R}} \widehat{f}(\xi)e^{i\xi t}\,d\xi.
$$

### Moral

No se pierde informacion: el dominio temporal y el frecuencial son dos descripciones equivalentes bajo hipotesis adecuadas.

## De serie a transformada

La transformada de Fourier puede verse como limite continuo de las series de Fourier cuando el periodo crece.

### Importancia

Esto explica por que:

- en problemas periodicos aparece una suma discreta;
- en problemas sobre toda la recta aparece una integral continua.

## Derivacion y multiplicacion

Una de las propiedades mas estructurales es:

$$
\widehat{f'}(\xi)=i\xi \widehat{f}(\xi),
$$

y en general

$$
\widehat{\partial^\alpha f}(\xi)=(i\xi)^\alpha \widehat{f}(\xi).
$$

### Lectura

Las derivadas se vuelven multiplicaciones algebraicas. Esta es la base de Fourier en EDO, PDE y analisis espectral.

## Convolucion y producto

Si $h=f*g$, entonces

$$
\widehat{h}=\widehat{f}\,\widehat{g}.
$$

Reciprocamente, el producto puntual se convierte en convolucion.

### Moral

Fourier diagonaliza operadores de convolucion.

## Propiedades de simetria

Si $f$ es real, la transformada satisface simetria hermitiana:

$$
\widehat{f}(-\xi)=\overline{\widehat{f}(\xi)}.
$$

Si $f$ es par, $\widehat{f}$ es par. Si $f$ es impar, $\widehat{f}$ es impar hasta factores imaginarios apropiados.

### Importancia

La estructura temporal se refleja directamente en la geometria frecuencial.

## Teorema de Parseval

En el marco $L^2$,

$$
\|f\|_{L^2}^2=\frac{1}{2\pi}\|\widehat{f}\|_{L^2}^2
$$

segun la normalizacion elegida.

### Lectura

La transformada de Fourier no solo representa funciones: preserva energia en el sentido adecuado.

## Plancherel

El teorema de Plancherel extiende la transformada desde funciones integrables suaves a todo $L^2$ como un operador unitario.

### Moral

Fourier no es solo una integral formal. Es un isomorfismo de espacios de Hilbert.

## Heisenberg y localizacion

La localizacion simultanea en tiempo y frecuencia esta limitada. En terminos esquematicos, una senal muy concentrada en tiempo no puede estar arbitrariamente concentrada en frecuencia.

### Importancia

Esto anticipa analisis microlocal, wavelets y teoria de incertidumbre.

## Ejemplo guiado: gaussiana

Para

$$
f(t)=e^{-a t^2}, \qquad a>0,
$$

la transformada vuelve a ser una gaussiana.

### Lectura

La gaussiana es el perfil mas equilibrado entre localizacion temporal y frecuencial. Por eso aparece en calor, probabilidad, quantum y procesamiento de senales.

## Ejemplo guiado: exponencial amortiguada

Para

$$
f(t)=e^{-a|t|}, \qquad a>0,
$$

la transformada tiene la forma

$$
\widehat{f}(\xi)\propto \frac{1}{a^2+\xi^2}.
$$

### Moral

Un perfil temporal sin suavidad analitica perfecta produce un espectro de cola algebraica.

## Delta y constantes

En lenguaje distribucional:

- la transformada de la delta es constante;
- la transformada de una constante es una delta en frecuencia.

### Lectura

Frecuencia pura y concentracion puntual son duales extremas.

## Rol en PDE

Aplicando Fourier a una ecuacion como

$$
u_t-\Delta u=0,
$$

se obtiene

$$
\partial_t \widehat{u}+|\xi|^2\widehat{u}=0.
$$

Cada frecuencia evoluciona independientemente.

### Importancia

La transformada convierte muchas PDE lineales invariantes por traslacion en familias desacopladas de EDO.

## Ventaja y limite

Ventaja:

- formulas explicitas;
- diagonalizacion;
- estimaciones finas.

Limite:

- dominios con frontera rompen invariancia por traslacion;
- coeficientes variables ya no se diagonalizan globalmente;
- no linealidad fuerte exige herramientas adicionales.

## Que prepara este capitulo

La transformada de Fourier prepara:

- respuesta en frecuencia;
- filtros;
- dispersion y Schrodinger;
- analisis armonico y microlocalidad;
- DFT como version finita/discreta.

## Errores frecuentes

- ignorar normalizaciones;
- usar inversion sin hipotesis o sin marco distribucional adecuado;
- confundir energia temporal con amplitud puntual del espectro;
- pensar que toda funcion tiene transformada ordinaria sin matices;
- olvidar que la transformada de una senal real tiene simetria conjugada.

## Practica recomendada

1. Calcular transformadas de gaussianas, exponenciales y escalones amortiguados.
2. Verificar Parseval en ejemplos concretos.
3. Usar Fourier para resolver una ecuacion lineal simple.
4. Estudiar como simetrias temporales se reflejan en frecuencia.
5. Comparar serie y transformada de Fourier desde el punto de vista espectral.

## Cierre

La transformada de Fourier es el nucleo del bloque: convierte oscilacion en coordenadas, convolucion en producto y derivadas en multiplicadores. Es la herramienta que hace visible la geometria de frecuencias de una senal o de una ecuacion.
