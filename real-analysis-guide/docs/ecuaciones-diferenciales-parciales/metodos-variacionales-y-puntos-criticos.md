---
title: Metodos Variacionales y Puntos Criticos
description: Metodo directo, ecuaciones de Euler-Lagrange y tecnicas de punto critico para EDP no lineales.
---

# Metodos Variacionales y Puntos Criticos

## Idea central

Muchas EDP no se resuelven atacando directamente la ecuacion. Se obtienen como condiciones de estacionariedad de un funcional de energia.

El esquema basico es:

1. elegir un espacio funcional $V$;
2. definir un funcional $J:V\to \mathbb{R}\cup\{+\infty\}$;
3. buscar minimizadores o puntos criticos de $J$;
4. interpretar la condicion de primer orden como una EDP.

## Euler-Lagrange

Si

$$
J(u)=\int_{\Omega}\left(\frac12 |\nabla u|^2 - fu\right)\,dx,
$$

entonces, perturbando con $u+\varepsilon v$ y derivando en $\varepsilon=0$, se obtiene

$$
\frac{d}{d\varepsilon}J(u+\varepsilon v)\Big|_{\varepsilon=0}
=\int_{\Omega}\left(\nabla u\cdot \nabla v - fv\right)\,dx.
$$

La condicion de estacionariedad para todo $v$ es

$$
\int_{\Omega}\nabla u\cdot \nabla v\,dx
=\int_{\Omega}fv\,dx,
$$

que es justamente la formulacion debil de Poisson.

### Lectura

La ecuacion aparece como equilibrio de primer orden de la energia.

## Metodo directo del calculo de variaciones

El metodo directo busca un minimizador mediante una sucesion minimizante.

Piezas clave:

- coercividad: evita que la sucesion escape al infinito;
- compacidad debil: permite extraer una subsucesion convergente;
- semicontinuidad inferior debil: permite pasar al limite sin perder la desigualdad minimizante.

### Estructura

Si $J(u_n)\to \inf J$ y $J$ es coercivo, entonces $(u_n)$ queda acotada en el espacio natural. La compacidad debil produce $u_n\rightharpoonup u$. Si ademas

$$
J(u)\le \liminf_{n\to\infty} J(u_n),
$$

entonces $u$ minimiza.

## Semicontinuidad inferior

Es una de las nociones tecnicas que mas reaparecen.

Intuitivamente:

- un funcional bien comportado no puede bajar bruscamente al pasar al limite debil.

En funcionales convexos de gradiente, esta propiedad suele venir de la convexidad.

## Mas alla de minimizadores

No toda solucion interesante es un minimo global. Pueden aparecer:

- minimos locales;
- maximos locales;
- puntos silla.

Por eso la teoria variacional necesita tambien tecnicas de punto critico, no solo minimizacion.

## Mountain Pass

Si el funcional tiene geometria tipo valle-montana-valle, puede existir un punto critico obtenido al cruzar un paso de montana.

La intuicion es:

- cerca de cero, la energia sube;
- lejos de cero, en alguna direccion baja;
- el nivel minimax asociado produce un punto critico.

### Importancia

Esto permite encontrar soluciones no triviales que no son minimizadoras.

## Condicion de Palais-Smale

Una dificultad tipica es que una sucesion casi critica puede no converger. La condicion de Palais-Smale controla justamente eso:

si

$$
J(u_n) \text{ esta acotado},
\qquad
J'(u_n)\to 0,
$$

entonces $(u_n)$ admite una subsucesion convergente.

Sin algun sustituto de esta condicion, los argumentos de minimax pueden colapsar por perdida de compacidad.

## Ejemplo semilineal

Considerese

$$
-\Delta u = |u|^{p-1}u
$$

con Dirichlet homogeneo. El funcional natural es

$$
J(u)=\int_{\Omega}\left(\frac12 |\nabla u|^2-\frac{1}{p+1}|u|^{p+1}\right)\,dx.
$$

Las soluciones debiles corresponden a puntos criticos de $J$.

### Lo delicado

La parte no lineal puede destruir coercividad o compacidad segun el exponente $p$ y la dimension.

## Restricciones y multiplicadores

No siempre se minimiza en todo el espacio. A veces hay restricciones:

- masa fija;
- norma fija;
- condicion de simetria;
- carga conservada.

Entonces aparecen multiplicadores de Lagrange y ecuaciones asociadas como

$$
J'(u)=\lambda G'(u).
$$

Este esquema es central en ondas estacionarias y problemas de Schrodinger.

## p-Laplaciano y funcional no cuadratico

Para

$$
-\Delta_p u=f,
$$

el funcional natural es

$$
J(u)=\int_{\Omega}\left(\frac{1}{p}|\nabla u|^p-fu\right)\,dx.
$$

La convexidad sigue ayudando, pero el espacio natural ya es $W_0^{1,p}(\Omega)$, no $H_0^1$.

### Moral

El analisis variacional se adapta al operador. No hay una unica energia universal.

## Concentracion y perdida de compacidad

En exponentes criticos, una sucesion acotada puede no converger fuertemente porque:

- se concentra;
- se traslada;
- oscila.

Esto obliga a herramientas mas finas, como:

- concentration-compactness;
- perfiles;
- descomposicion por burbujas.

No hace falta dominarlas aun, pero si entender por que aparecen.

## Relacion con existencia multiple

El paisaje del funcional puede tener varios puntos criticos. Cada uno puede corresponder a:

- estados estacionarios distintos;
- soluciones con diferentes simetrias;
- modos excitados ademas del estado fundamental.

La teoria variacional no solo prueba existencia; tambien organiza la multiplicidad.

## Ejemplo guiado: minimizacion de Poisson

Para

$$
J(v)=\frac12\int_{\Omega}|\nabla v|^2\,dx-\int_{\Omega}fv\,dx
$$

en $H_0^1(\Omega)$:

- coercividad sigue de Poincare;
- convexidad da unicidad;
- el minimo existe por metodo directo;
- la derivada de Gateaux produce la formulacion debil.

Es el modelo limpio donde todas las piezas encajan.

## Ejemplo guiado: geometria tipo montana

Para ciertas ecuaciones semilineales, $J(0)=0$, cerca de cero domina la parte cuadratica positiva, y para grandes multiples de una funcion fija domina la parte no lineal negativa. Entonces existe un nivel minimax positivo entre ambos regimenes. Esa geometria sugiere una solucion no trivial aunque el funcional no sea convexo.

## Conexion con fisica matematica

El lenguaje variacional aparece por todas partes:

- electrostatica como minimizacion de energia;
- elasticidad;
- estados ligados de Schrodinger;
- superficies minimas;
- problemas de campo clasico.

En muchos modelos fisicos, la energia no es solo una herramienta tecnica; es el objeto primario.

## Que puede fallar

- el funcional no ser coercivo;
- la condicion de Palais-Smale fallar;
- la restriccion no ser cerrada;
- la no linealidad estar en el exponente critico;
- existir puntos criticos espurios que no tengan la regularidad esperada.

## Errores frecuentes

- creer que toda solucion debil es un minimo;
- usar Euler-Lagrange sin verificar diferenciabilidad del funcional;
- olvidar el espacio funcional correcto;
- asumir compacidad fuerte donde solo hay convergencia debil;
- confundir convexidad con coercividad.

## Practica recomendada

1. Derivar la ecuacion de Euler-Lagrange para el funcional de Poisson.
2. Identificar coercividad y semicontinuidad inferior en un ejemplo concreto.
3. Explicar por que el metodo directo encuentra minimos pero no necesariamente puntos silla.
4. Relacionar el p-Laplaciano con un funcional en $W_0^{1,p}$.
5. Describir la geometria tipo mountain pass en un problema semilineal sencillo.

## Cierre

Los metodos variacionales convierten EDP en problemas geometricos sobre espacios funcionales. El minimo, el punto silla y la perdida de compacidad pasan a ser conceptos centrales. Con ello la teoria deja de ser solo diferencial: se vuelve tambien geometria infinita dimensional.
