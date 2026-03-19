---
title: Espacios cociente
description: Topologia cociente, aplicaciones identificadoras, conjuntos saturados, ejemplos clasicos y propiedad universal.
---

# Espacios cociente

## Motivacion

El subespacio hereda estructura por restriccion. El producto combina espacios sin identificar puntos. El cociente, en cambio, construye un espacio nuevo pegando puntos segun una relacion de equivalencia o, mas generalmente, a traves de una sobreyeccion.

## Topologia cociente

Sea

$$
q:X\to Y
$$

una aplicacion sobreyectiva entre conjuntos y supongamos que

$$
X
$$

ya es espacio topologico.

La **topologia cociente** sobre

$$
Y
$$

se define declarando abierto a un conjunto

$$
U\subseteq Y
$$

si y solo si

$$
q^{-1}(U)
$$

es abierto en

$$
X.
$$

## Comentario

Esta es la topologia mas fina sobre

$$
Y
$$

que hace continua a

$$
q.
$$

## Verificacion de axiomas

La familia de abiertos asi definida es una topologia porque la preimagen conmuta con:

- uniones arbitrarias;
- intersecciones finitas;
- complementos si se quiere razonar con cerrados.

## Propiedad universal

### Teorema 1

Sea

$$
q:X\to Y
$$

una aplicacion cociente y

$$
g:Y\to Z
$$

una aplicacion cualquiera.

Entonces

$$
g
$$

es continua si y solo si

$$
g\circ q:X\to Z
$$

es continua.

### Demostracion

Si

$$
g
$$

es continua, la composicion tambien.

Reciprocamente, supongamos continua

$$
g\circ q.
$$

Si

$$
W\subseteq Z
$$

es abierto, entonces

$$
q^{-1}(g^{-1}(W))=(g\circ q)^{-1}(W)
$$

es abierto en

$$
X.
$$

Como

$$
q
$$

es cociente, se concluye que

$$
g^{-1}(W)
$$

es abierto en

$$
Y.
$$

### Importancia

Esta propiedad universal es la razon principal para usar topologia cociente: toda aplicacion constante sobre fibras factoriza de manera natural.

## Relaciones de equivalencia

Si

$$
\sim
$$

es una relacion de equivalencia en

$$
X,
$$

se denota por

$$
X/{\sim}
$$

el conjunto de clases de equivalencia, y por

$$
\pi:X\to X/{\sim}
$$

la proyeccion canonica.

Dotando a

$$
X/{\sim}
$$

de la topologia cociente inducida por

$$
\pi,
$$

obtenemos el espacio cociente asociado a la identificacion.

## Conjuntos saturados

Un subconjunto

$$
A\subseteq X
$$

es saturado respecto de

$$
q
$$

si es union de fibras de

$$
q.
$$

Equivalentemente:

$$
A=q^{-1}(q(A)).
$$

### Comentario

Los abiertos del cociente corresponden exactamente a abiertos saturados del espacio original.

## Aplicaciones cociente

Una aplicacion sobreyectiva continua

$$
q:X\to Y
$$

se llama aplicacion cociente si

$$
U\subseteq Y
$$

es abierto siempre que

$$
q^{-1}(U)
$$

lo sea.

### Proposicion 2

Toda aplicacion abierta y sobreyectiva es cociente. Toda aplicacion cerrada y sobreyectiva tambien es cociente.

### Demostracion

Si

$$
q
$$

es abierta y

$$
q^{-1}(U)
$$

es abierto, entonces

$$
U=q(q^{-1}(U))
$$

es abierto por sobreyectividad. El caso cerrado se prueba por complementos.

## Ejemplo 1: el circulo como cociente

Tomemos

$$
[0,1]
$$

y la relacion que identifica

$$
0\sim 1
$$

y deja distintos los otros puntos.

El cociente

$$
[0,1]/(0\sim 1)
$$

es homeomorfo al circulo

$$
S^1.
$$

### Idea

Se pega el extremo izquierdo con el derecho, transformando el intervalo en una curva cerrada.

## Ejemplo 2: colapsar un subespacio a un punto

Si

$$
A\subseteq X,
$$

puede definirse una relacion de equivalencia que identifique todos los puntos de

$$
A
$$

en una sola clase y deje fijos los demas puntos.

El espacio resultante se denota a menudo por

$$
X/A.
$$

### Comentario

Esta construccion es fundamental en topologia algebraica.

## Ejemplo 3: recta con extremos pegados

Si identificamos los extremos de un intervalo cerrado obtenemos un circulo.

Si identificamos todos los puntos de un borde de un disco, se obtiene una esfera. Estos ejemplos muestran el poder geometrico de las topologias cociente.

## Continuidad de la proyeccion

La proyeccion cociente

$$
q:X\to Y
$$

es siempre continua por construccion.

Lo delicado no es la continuidad de

$$
q,
$$

sino entender la estructura de abiertos y cerrados de

$$
Y.
$$

## Imagen de abiertos y cerrados

Una proyeccion cociente no tiene por que ser abierta ni cerrada.

### Comentario

El hecho de ser cociente solo controla continuidad por preimagen, no por imagen.

## Separacion y cocientes

Las propiedades de separacion pueden perderse al pasar al cociente.

### Ejemplo conceptual

Si se identifican puntos de manera demasiado agresiva, el espacio resultante puede dejar de ser Hausdorff incluso si el espacio original lo era.

### Comentario

Para que un cociente de un espacio compacto Hausdorff siga siendo Hausdorff, la relacion de equivalencia debe satisfacer condiciones adicionales, por ejemplo que su grafica sea cerrada.

## Conexidad y cocientes

La imagen continua de un conexo es conexa. Como una proyeccion cociente es continua y sobreyectiva, todo cociente de un espacio conexo es conexo.

## Compacidad y cocientes

De igual modo, el cociente de un compacto es compacto, porque la imagen continua de un compacto es compacta.

## Criterio de factorizacion

Si

$$
f:X\to Z
$$

es una aplicacion constante sobre las clases de equivalencia de

$$
\sim,
$$

entonces existe una unica

$$
\tilde f:X/{\sim}\to Z
$$

tal que

$$
f=\tilde f\circ \pi.
$$

Si

$$
\pi
$$

es cociente, la continuidad de

$$
\tilde f
$$

equivale a la continuidad de

$$
f.
$$

### Comentario

Esta propiedad convierte al cociente en el objeto correcto para imponer identificaciones topologicas sin perder el control universal de las aplicaciones.

## Cocientes frente a subespacios

Un subespacio restringe la topologia a un subconjunto. Un cociente colapsa informacion. Son operaciones duales en cierto sentido:

- subespacio hereda;
- cociente identifica.

## Importancia estructural

Los cocientes son indispensables en:

- construccion de variedades;
- topologia algebraica;
- espacios proyectivos;
- compactificaciones;
- espacios de orbitas por acciones de grupos.

## Comentario conceptual

La topologia cociente es el mecanismo universal para pasar de una descripcion por puntos originales a una descripcion por clases de equivalencia. Su potencia proviene de que no solo pega puntos, sino que lo hace conservando la continuidad correcta hacia cualquier otro espacio.

## Cierre

Los espacios cociente completan la triada estructural de operaciones basicas en topologia general: subespacios, productos y cocientes. Sin ellos, gran parte de la geometria topologica moderna no puede formularse con naturalidad.
