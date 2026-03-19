---
title: Regularidad Eliptica y Parabolica
description: Como las soluciones debiles ganan suavidad en problemas elipticos y parabolicos, y donde fallan esos mecanismos.
---

# Regularidad Eliptica y Parabolica

## Idea central

La existencia debil rara vez es el final de la teoria. En EDP, una pregunta decisiva es:

si una solucion existe en un espacio rugoso, que tanta suavidad extra hereda de la ecuacion y de los datos.

La respuesta es uno de los rasgos mas profundos del bloque:

- los problemas elipticos suelen transmitir regularidad espacial;
- los problemas parabolicos suelen suavizar instantaneamente en el tiempo positivo.

## Filosofia de regularidad

Una ecuacion diferencial no solo restringe valores de una funcion; tambien acopla sus oscilaciones en escalas pequenas.

Por eso, cuando el operador tiene buen signo y buena estructura, la ecuacion impide rugosidad arbitraria.

La regularidad se organiza en dos preguntas:

1. regularidad interior: que ocurre lejos de la frontera;
2. regularidad hasta la frontera: que ocurre al acercarse a $\partial \Omega$.

## Regularidad eliptica basica

Consideremos

$$
-\Delta u=f \quad \text{en } \Omega.
$$

Si $u$ es solucion debil y $f$ es razonable, la ecuacion fuerza derivadas adicionales de $u$.

Una version esquematica del principio es:

- si $f\in L^2_{\mathrm{loc}}(\Omega)$, entonces $u\in H^2_{\mathrm{loc}}(\Omega)$;
- si $f$ es suave, entonces $u$ es suave en el interior;
- si los coeficientes son analiticos, a menudo la solucion tambien lo es.

### Lectura

El operador eliptico actua como una inversion que gana derivadas, al menos localmente.

## Estimaciones interiores

Una forma tipica de la teoria dice:

si $B_{2r}\subset \Omega$, entonces

$$
\|u\|_{H^2(B_r)}
\le
C\left(\|f\|_{L^2(B_{2r})}+\|u\|_{L^2(B_{2r})}\right).
$$

Esto es una estimacion a priori local. Lo importante no es solo la formula, sino la logica:

- la derivada segunda de $u$ se controla por la ecuacion;
- hace falta un poco de informacion previa sobre $u$;
- se gana regularidad en una bola mas pequena para evitar efectos de frontera.

## Bootstrap eliptico

Si el dato mejora, la solucion mejora sucesivamente.

Por ejemplo:

- $f\in H^k_{\mathrm{loc}}$ sugiere $u\in H^{k+2}_{\mathrm{loc}}$;
- $f\in C^\alpha$ sugiere $u\in C^{2,\alpha}$;
- datos suaves implican soluciones suaves.

Este proceso iterativo se llama bootstrap.

### Moral

La ecuacion transforma regularidad del dato en regularidad de la solucion, dos derivadas por vez en el caso de Poisson.

## Schauder vs Sobolev

Hay dos lenguajes clasicos de regularidad:

- lenguaje Sobolev: controla derivadas en normas integrales;
- lenguaje Schauder: controla derivadas en normas holderianas.

No son rivales. Capturan aspectos distintos:

- Sobolev es robusto para existencia debil y compacidad;
- Schauder es fino para continuidad, derivadas clasicas y coeficientes regulares.

## Calderon-Zygmund

En el plano $L^p$, una estimacion tipica para Poisson es:

$$
\|D^2u\|_{L^p}
\le
C\left(\|f\|_{L^p}+\|u\|_{L^p}\right).
$$

Este tipo de desigualdad muestra que la segunda derivada es tan integrable como el forzamiento.

### Importancia

No es solo una mejora cualitativa. Es una estimacion cuantitativa muy precisa para pasar a problemas no lineales y perturbativos.

## Frontera y geometria del dominio

La regularidad interior suele ser mejor que la regularidad hasta la frontera.

Causas tipicas de perdida:

- esquinas o puntas del dominio;
- condiciones de contorno incompatibles;
- coeficientes no suaves cerca de la frontera.

En un dominio suave, con frontera y datos compatibles, la solucion puede conservar casi la misma regularidad hasta $\partial\Omega$. En dominios poligonales con angulos reentrantes, pueden aparecer singularidades inevitables.

## Funciones armonicas

Las soluciones de

$$
\Delta u=0
$$

son mucho mas rigidas que una solucion debil general. Son suaves y, de hecho, analiticas.

Esto ya se intuia por la propiedad del valor medio y el principio de maximo, pero la teoria de regularidad lo formaliza de manera sistematica.

## Regularidad parabolica

Para el calor

$$
u_t-\Delta u=f,
$$

la regularidad tiene dos rasgos:

- anisotropia entre espacio y tiempo;
- suavizado instantaneo para $t>0$.

La escala correcta recuerda que una derivada temporal vale como dos espaciales.

### Lectura

La geometria parabolica no mide igual espacio y tiempo. El operador ya lo dice:

$$
u_t \sim \Delta u.
$$

## Suavizado instantaneo del calor

Aunque el dato inicial $u_0$ sea poco regular, para todo $t>0$ la convolucion con el nucleo del calor hace la solucion muy suave en $x$.

En terminos simples:

- el calor borra aristas;
- difunde irregularidades de alta frecuencia;
- vuelve la solucion mejor de lo que era el dato inicial.

Esto contrasta de forma radical con el transporte, donde el perfil solo se desplaza, y con las ondas, donde la singularidad puede propagarse.

## Estimaciones de energia y regularidad

Muchas ganancias de regularidad se derivan de probar identidades para derivadas de la solucion.

Ejemplo esquematico:

si derivamos la ecuacion del calor respecto a una variable espacial, obtenemos una nueva ecuacion del calor para $\partial_j u$. Entonces pueden repetirse los argumentos de energia.

### Moral

Una vez que la ecuacion tiene buena estructura, diferenciarla no destruye el problema; genera una ecuacion hermana.

## Regularidad por semigrupos

En espacios abstractos, el operador calor genera un semigrupo analitico:

$$
e^{t\Delta}.
$$

La analiticidad del semigrupo se traduce en ganancia de regularidad instantanea. Esta es una forma moderna de reescribir el fenomeno clasico del nucleo gaussiano.

## Ejemplo guiado: Poisson con dato suave

Sea

$$
-u''=f \quad \text{en } (0,1),
\qquad
u(0)=u(1)=0.
$$

Si $f\in C^\infty([0,1])$, entonces integrar dos veces muestra que $u\in C^\infty([0,1])$.

En una dimension, esto es casi elemental. La teoria eliptica generaliza esa intuicion a dominios y operadores mucho mas complejos.

## Ejemplo guiado: calor con dato rugoso

Sea $u_0\in L^2(\mathbb{R}^n)$. Definimos

$$
u(t)=G_t*u_0.
$$

Para cualquier $t>0$, las derivadas de $G_t$ son integrables con decaimiento fuerte, y por ello las derivadas de toda orden de $u(t,\cdot)$ existen. El dato solo estaba en $L^2$, pero la solucion se hace suave de inmediato.

## Donde falla la regularidad

No todo operador suaviza igual.

Casos delicados:

- coeficientes meramente medibles;
- elipticidad degenerada;
- ecuaciones no lineales criticas;
- leyes de conservacion, donde los choques destruyen suavidad;
- fronteras irregulares.

La teoria moderna consiste en medir exactamente que se puede rescatar bajo hipotesis minimas.

## Regularidad debil, parcial y casi en todas partes

En problemas no lineales avanzados, a veces no se obtiene suavidad global sino:

- regularidad parcial fuera de un conjunto singular;
- continuidad holderiana local;
- derivadas en algun $L^p$ pero no continuidad clasica.

Esta posibilidad ya debe estar presente desde ahora: regularidad no es un todo o nada.

## Conexion con el bloque variacional

La secuencia tipica es:

1. existencia debil por Sobolev y Lax-Milgram o minimizacion;
2. estimaciones a priori;
3. regularidad interior;
4. regularidad hasta la frontera, si los datos lo permiten.

Sin el paso de regularidad, la solucion debil queda demasiado abstracta para muchas aplicaciones.

## Errores frecuentes

- creer que una solucion debil es automaticamente clasica;
- olvidar la diferencia entre regularidad interior y en frontera;
- usar bootstrap sin verificar que cada paso esta justificado;
- asumir que la regularidad del dato pasa intacta a la solucion aunque el dominio sea rugoso;
- confundir suavizado parabolico con propagacion hiperbolica.

## Practica recomendada

1. Derivar una estimacion interior esquematica para Poisson a partir de la estructura del operador.
2. Explicar por que el calor suaviza para $t>0$ aun con dato inicial solo en $L^2$.
3. Comparar transporte, ondas y calor desde el punto de vista de propagacion de singularidades.
4. Estudiar por que las esquinas del dominio pueden destruir regularidad hasta la frontera.
5. Formular el principio de bootstrap para una ecuacion eliptica lineal simple.

## Cierre

La teoria de regularidad es lo que convierte existencia debil en informacion cualitativa seria sobre la solucion. En elipticas explica rigidez y ganancia de derivadas; en parabolicas explica suavizado y disipacion. Sin ella, el bloque de EDP quedaria a nivel de formulacion. Con ella, empieza de verdad el analisis fino.
