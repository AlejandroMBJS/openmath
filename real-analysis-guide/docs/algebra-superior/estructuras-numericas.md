---
title: Estructuras numericas
description: Cadena de sistemas numericos y propiedades algebraicas de naturales, enteros, racionales, reales y complejos.
---

# Estructuras numericas

## Motivacion e intuicion

Los sistemas numericos no aparecen como una lista arbitraria de simbolos. Cada uno resuelve una insuficiencia del anterior:

- $\mathbb{N}$ sirve para contar;
- $\mathbb{Z}$ agrega opuestos aditivos;
- $\mathbb{Q}$ agrega divisiones por no nulos;
- $\mathbb{R}$ completa los huecos metricos y de orden;
- $\mathbb{C}$ asegura soluciones algebraicas que no existen en $\mathbb{R}$.

Entender esta cadena evita tratar los numeros como si todos fueran iguales desde el principio.

## Prerrequisitos

Conviene manejar operaciones entre conjuntos, relaciones y lenguaje algebraico elemental.

## La cadena de inclusiones

Se trabaja con la cadena

$$
\mathbb{N} \subseteq \mathbb{Z} \subseteq \mathbb{Q} \subseteq \mathbb{R} \subseteq \mathbb{C}.
$$

Cada inclusion respeta las operaciones previas, pero la estructura disponible cambia.

## Estructuras algebraicas basicas

### Naturales

$\mathbb{N}$ tiene suma y producto cerrados. Es un semianillo ordenado, pero no todo elemento tiene opuesto aditivo ni inverso multiplicativo.

### Enteros

$\mathbb{Z}$ es un anillo conmutativo con unidad. Todo elemento tiene opuesto aditivo, pero no todo entero no nulo tiene inverso multiplicativo dentro de $\mathbb{Z}$.

### Racionales

$\mathbb{Q}$ es un cuerpo ordenado: se puede sumar, restar, multiplicar y dividir por cualquier elemento no nulo, y ademas existe un orden compatible con las operaciones.

### Reales

$\mathbb{R}$ es un cuerpo ordenado completo. La palabra "completo" significa que todo subconjunto no vacio acotado superiormente tiene supremo.

### Complejos

$\mathbb{C}$ es un cuerpo algebraicamente cerrado, pero no admite un orden total compatible con las operaciones de cuerpo.

## Ejemplos basicos

### Ejemplo 1: falta de inverso en los enteros

El entero $2$ no tiene inverso multiplicativo en $\mathbb{Z}$, porque no existe $z \in \mathbb{Z}$ con

$$
2z=1.
$$

### Ejemplo 2: un numero racional

$$
\frac{3}{7} \in \mathbb{Q}
$$

porque es cociente de enteros con denominador no nulo.

### Ejemplo 3: irracionalidad de $\sqrt{2}$

El numero $\sqrt{2}$ pertenece a $\mathbb{R}$, pero no a $\mathbb{Q}$.

#### Demostracion clasica

Supongamos

$$
\sqrt{2} = \frac{p}{q}
$$

con $p$ y $q$ enteros primos entre si. Entonces

$$
2q^2 = p^2.
$$

De aqui $p^2$ es par, luego $p$ es par. Escribe $p=2k$. Sustituyendo:

$$
2q^2 = 4k^2,
$$

y por tanto

$$
q^2 = 2k^2.
$$

Asi $q$ tambien es par, contradiciendo que $p$ y $q$ eran coprimos.

### Ejemplo 4: necesidad de los complejos

La ecuacion

$$
x^2+1=0
$$

no tiene solucion real, pero si compleja:

$$
x=\pm i.
$$

## Proposiciones y teoremas centrales

### Proposicion 1: $\mathbb{Q}$ es denso en $\mathbb{R}$

Si $a<b$ son reales, existe $q \in \mathbb{Q}$ tal que

$$
a<q<b.
$$

#### Comentario

Esta propiedad muestra que los racionales estan distribuidos por toda la recta, pero no basta para que $\mathbb{Q}$ sea completo.

### Proposicion 2: $\mathbb{Q}$ no es completo

El conjunto

$$
E = \{q \in \mathbb{Q} : q^2 < 2\}
$$

esta acotado superiormente en $\mathbb{Q}$, pero no tiene supremo racional.

#### Comentario

El candidato natural seria $\sqrt{2}$, que no pertenece a $\mathbb{Q}$. Esta carencia es una motivacion esencial para construir $\mathbb{R}$.

### Teorema 3: caracterizacion estructural de $\mathbb{R}$

El sistema $\mathbb{R}$ es, esencialmente, el unico cuerpo ordenado completo.

#### Comentario

Esta afirmacion es profunda y suele demostrarse en cursos de analisis o algebra superior avanzada. Aqui importa retener que la completitud distingue a $\mathbb{R}$ entre los cuerpos ordenados usuales.

### Proposicion 4: $\mathbb{C}$ no puede ser cuerpo ordenado compatible

No existe un orden total en $\mathbb{C}$ compatible con la estructura de cuerpo y que extienda el orden real.

#### Idea de demostracion

En un cuerpo ordenado todo cuadrado es no negativo. Si $\mathbb{C}$ tuviera tal orden, entonces

$$
i^2 = -1
$$

deberia ser no negativo, y tambien

$$
1 = (-i)^2
$$

seria no negativo. Eso fuerza incompatibilidades con el orden.

## Perspectiva estructural

La cadena numerica puede leerse tambien en terminos de propiedades:

- $\mathbb{N}$: conteo y recurrencia;
- $\mathbb{Z}$: resta interna;
- $\mathbb{Q}$: cocientes y algebra exacta;
- $\mathbb{R}$: limites, continuidad, supremum;
- $\mathbb{C}$: factorizacion algebraica mas rica y analisis complejo.

Cada ampliacion conserva parte de la estructura previa y sacrifica o transforma otra.

## Errores comunes

1. Pensar que $\mathbb{Q}$ es "casi igual" a $\mathbb{R}$ por ser denso.
2. Creer que completitud significa simplemente "no tener huecos" sin una formulacion precisa.
3. Suponer que $\mathbb{C}$ hereda un orden compatible como $\mathbb{R}$.
4. Tratar a $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$ y $\mathbb{C}$ como si compartieran exactamente las mismas operaciones internas.

## Resumen operativo

- Cada sistema numerico se construye para resolver una limitacion del anterior.
- $\mathbb{Q}$ es un cuerpo ordenado pero no completo.
- $\mathbb{R}$ es el escenario natural del analisis por su completitud.
- $\mathbb{C}$ amplia la solvencia algebraica, pero pierde orden compatible.

## Ejercicios

1. Prueba que $\mathbb{Z}$ no es cuerpo.
2. Da un ejemplo de sucesion racional que converge en $\mathbb{R}$ a un numero irracional.
3. Explica por que $\sqrt{2} \notin \mathbb{Q}$.
4. Prueba que entre dos racionales distintos hay infinitos racionales.
5. Explica por que la ecuacion $x^2+1=0$ muestra una limitacion estructural de $\mathbb{R}$.
