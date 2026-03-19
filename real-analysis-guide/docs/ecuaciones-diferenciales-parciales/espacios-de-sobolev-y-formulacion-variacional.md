---
title: Espacios de Sobolev y Formulacion Variacional
description: Marco funcional minimo para soluciones debiles, coercividad y existencia variacional en problemas elipticos.
---

# Espacios de Sobolev y Formulacion Variacional

## Por que Sobolev entra en la teoria

La formulacion debil de una EDP usa derivadas en sentido distribucional. El espacio natural donde esas derivadas viven con control cuantitativo son los espacios de Sobolev.

Para problemas elipticos de segundo orden, el primer escalon serio es:

$$
H^1(\Omega)=\{u\in L^2(\Omega): \partial_i u\in L^2(\Omega)\}.
$$

La idea es sencilla:

- la funcion y sus derivadas debiles primeras deben ser cuadrado-integrables;
- esto permite escribir energias y formas bilineales;
- el problema deja de ser solo diferencial y pasa a ser funcional.

## Norma natural

En $H^1(\Omega)$ se usa

$$
\|u\|_{H^1}^2=\|u\|_{L^2}^2+\|\nabla u\|_{L^2}^2.
$$

Para condiciones de Dirichlet homogeneas aparece el subespacio

$$
H_0^1(\Omega),
$$

que es el cierre de $C_c^\infty(\Omega)$ en la norma $H^1$.

### Lectura

En $H_0^1$ la condicion de frontera se incorpora en el espacio, no como una ecuacion adicional punto a punto.

## Del problema fuerte al problema variacional

Consideremos

$$
-\Delta u=f \quad \text{en } \Omega,
\qquad
u=0 \quad \text{en } \partial\Omega.
$$

Multiplicando por $v$ e integrando por partes:

$$
\int_{\Omega}\nabla u\cdot \nabla v\,dx
=\int_{\Omega} f v\,dx.
$$

La formulacion variacional queda:

Hallar $u\in H_0^1(\Omega)$ tal que

$$
a(u,v)=\ell(v)
\qquad
\forall v\in H_0^1(\Omega),
$$

donde

$$
a(u,v)=\int_{\Omega}\nabla u\cdot \nabla v\,dx,
\qquad
\ell(v)=\int_{\Omega}f v\,dx.
$$

## Formas bilineales

La estructura variacional se organiza con una forma bilineal $a(\cdot,\cdot)$.

Las dos propiedades clave suelen ser:

- continuidad:

$$
|a(u,v)|\le C\|u\|_V\|v\|_V;
$$

- coercividad:

$$
a(v,v)\ge c\|v\|_V^2.
$$

En lenguaje simple:

- continuidad impide explosiones algebraicas;
- coercividad impide degeneracion y controla la norma completa.

## Teorema de Lax-Milgram

Sea $V$ un espacio de Hilbert. Si $a$ es bilineal, continua y coerciva sobre $V$, y $\ell$ es lineal continua, entonces existe unico $u\in V$ tal que

$$
a(u,v)=\ell(v)
\qquad
\forall v\in V.
$$

### Importancia

Lax-Milgram es uno de los teoremas fundacionales de la existencia debil para problemas elipticos lineales.

No construye $u$ explicitamente. Da existencia y unicidad desde pura estructura funcional.

## Aplicacion directa a Poisson

En $V=H_0^1(\Omega)$,

$$
a(u,v)=\int_{\Omega}\nabla u\cdot \nabla v\,dx
$$

es continua por Cauchy-Schwarz. Para coercividad hace falta una desigualdad tipo Poincare:

$$
\|u\|_{L^2}\le C\|\nabla u\|_{L^2}
\qquad
\text{para } u\in H_0^1(\Omega).
$$

Entonces

$$
a(u,u)=\|\nabla u\|_{L^2}^2
\ge c\|u\|_{H^1}^2.
$$

Si $f\in L^2(\Omega)$, el funcional

$$
\ell(v)=\int_{\Omega} f v\,dx
$$

es continuo. Lax-Milgram da existencia y unicidad de una solucion debil.

## Punto de vista energetico

El problema anterior tambien puede leerse como minimizacion del funcional

$$
J(v)=\frac12\int_{\Omega}|\nabla v|^2\,dx-\int_{\Omega}fv\,dx
$$

en $H_0^1(\Omega)$.

El minimizador satisface precisamente la ecuacion variacional.

### Moral

Resolver la EDP equivale a encontrar el estado de energia minima compatible con la carga $f$.

## Regularidad y limite del metodo

La existencia debil en $H_0^1$ no implica automaticamente que $u$ sea suave.

La regularidad adicional depende de:

- regularidad de $f$;
- regularidad del dominio;
- regularidad de los coeficientes.

En dominios suaves y con datos buenos, la solucion debil puede subir a $H^2$ o incluso a $C^\infty$. En dominios con esquinas o datos rugosos, puede no hacerlo.

## Trazas y frontera

Hablar de $u=0$ en la frontera no siempre tiene sentido punto a punto si $u\in H^1$. La teoria de trazas muestra que existe un operador continuo que asigna a $u$ un valor de frontera en un espacio adecuado.

Esa es la version correcta de:

- imponer Dirichlet;
- interpretar condiciones de contorno en marco variacional.

## Ejemplo con coeficientes variables

Sea

$$
-\nabla\cdot(A(x)\nabla u)=f
$$

con $A(x)$ simetrica y uniformemente eliptica:

$$
\lambda |\xi|^2\le \xi^T A(x)\xi \le \Lambda |\xi|^2.
$$

La forma bilineal es

$$
a(u,v)=\int_{\Omega} A(x)\nabla u\cdot \nabla v\,dx.
$$

La continuidad sale del acotamiento de $A$, y la coercividad de la elipticidad uniforme. Otra vez Lax-Milgram resuelve el problema debil.

## Dualidad y fuentes irregulares

No siempre $f$ esta en $L^2$. A veces el dato esta en el dual $H^{-1}(\Omega)$.

Entonces $\ell(v)$ se interpreta por dualidad:

$$
\ell(v)=\langle f,v\rangle_{H^{-1},H_0^1}.
$$

Esto amplia mucho la clase de fuentes admisibles, incluyendo algunas distribuciones.

## Relacion con el metodo de elementos finitos

Elementos finitos no discretiza primero la ecuacion fuerte, sino la formulacion variacional.

La idea es:

1. reemplazar $H_0^1(\Omega)$ por un subespacio finito dimensional $V_h$;
2. hallar $u_h\in V_h$ tal que

$$
a(u_h,v_h)=\ell(v_h)
\qquad
\forall v_h\in V_h.
$$

Esto solo funciona bien porque el problema continuo ya fue reformulado en lenguaje variacional.

## Sobolev no es solo $H^1$

La escala general $W^{k,p}$ y $H^s$ aparece cuando se necesita:

- mas derivadas;
- integrabilidad distinta de $L^2$;
- regularidad fraccionaria;
- trazas y extensiones mas finas.

Para esta guia, el punto de entrada serio es entender por que $H^1$ y $H_0^1$ son inevitables.

## Errores frecuentes

- pensar que una solucion debil en $H^1$ satisface automaticamente la EDP punto a punto;
- confundir coercividad con simple positividad;
- olvidar la desigualdad de Poincare al cerrar la norma;
- imponer condiciones de frontera clasicas donde solo hay traza;
- creer que Lax-Milgram sirve para cualquier ecuacion no lineal.

## Practica recomendada

1. Derivar la formulacion variacional de Poisson con Dirichlet homogeneo.
2. Verificar continuidad y coercividad de la forma bilineal para coeficientes uniformemente elipticos.
3. Mostrar como Poincare permite controlar la norma $H^1$ por $\|\nabla u\|_{L^2}$ en $H_0^1$.
4. Probar que el minimizador de $J$ satisface la ecuacion variacional.
5. Comparar el rol de $H_0^1$ con el de $C_c^\infty$ en la definicion inicial de solucion debil.

## Cierre

Los espacios de Sobolev y la formulacion variacional convierten muchas EDP en problemas de analisis funcional sobre espacios de Hilbert. Ese cambio de lenguaje es decisivo: hace posible existencia, unicidad, aproximacion numerica y una teoria robusta aun cuando la derivacion clasica punto a punto deja de ser util.
