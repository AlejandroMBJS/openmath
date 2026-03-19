---
title: Bifurcaciones locales en EDO
description: Dependencia respecto de parametros, perdida de hiperbolicidad, bifurcaciones de codimension uno y formas normales locales.
---

# Bifurcaciones locales en EDO

## El parametro como parte de la dinamica

En muchas aplicaciones no se estudia un solo sistema, sino una familia

$$
\dot x=f(x,\mu),
$$

donde

$$
\mu
$$

es un parametro real. La pregunta cualitativa pasa a ser:

- que equilibrios existen para cada

$$
\mu;
$$

- cuales son estables;
- en que valores de

$$
\mu
$$

cambia la topologia local del retrato.

Esos valores especiales son bifurcaciones.

## Persistencia hiperbolica

Mientras un equilibrio siga siendo hiperbolico, su comportamiento cualitativo es robusto frente a pequenas perturbaciones del parametro.

### Moral

Las bifurcaciones locales aparecen cuando la hiperbolicidad falla, es decir, cuando algun autovalor cruza el eje imaginario o se anula.

## Definicion informal de bifurcacion

Decimos que en

$$
\mu_*
$$

hay una bifurcacion local si el retrato de fases local de la familia cerca de un equilibrio cambia de tipo al variar

$$
\mu
$$

a traves de

$$
\mu_*.
$$

## Forma normal

La teoria local busca reducir la familia, mediante cambios de coordenadas y de parametro, a un modelo canonico simple que conserve la dinamica esencial.

### Lectura

La forma normal no pretende conservar todos los terminos, sino solo los que controlan el cambio topologico relevante.

## Bifurcacion saddle-node

### Forma normal

$$
\dot x=\mu-x^2.
$$

### Retrato

- si

$$
\mu<0,
$$

no hay equilibrios reales;
- si

$$
\mu=0,
$$

aparece un equilibrio doble no hiperbolico;
- si

$$
\mu>0,
$$

hay dos equilibrios

$$
x=\pm \sqrt{\mu},
$$

uno estable y otro inestable.

### Lectura

Dos equilibrios nacen o colapsan al cruzar el valor critico.

## Bifurcacion transcritical

### Forma normal

$$
\dot x=\mu x-x^2.
$$

### Retrato

Los equilibrios

$$
x=0
$$

y

$$
x=\mu
$$

intercambian estabilidad al cruzarse.

### Lectura

No se crean ni destruyen equilibrios: se intercambian papel dinamico.

## Bifurcacion pitchfork

### Forma normal supercritica

$$
\dot x=\mu x-x^3.
$$

### Retrato

- si

$$
\mu<0,
$$

solo existe

$$
x=0,
$$

estable;
- si

$$
\mu>0,
$$

el equilibrio central se vuelve inestable y nacen dos equilibrios estables

$$
\pm\sqrt{\mu}.
$$

### Comentario

La forma pitchfork suele requerir simetria. Sin ella, bajo perturbaciones genericas, acostumbra desdoblarse en escenarios tipo saddle-node o transcritical.

## Bifurcacion de Hopf

Aqui el cambio ocurre en dimension al menos dos.

### Mecanismo

Un par conjugado de autovalores cruza el eje imaginario:

$$
\lambda_{1,2}(\mu)=\alpha(\mu)\pm i\omega(\mu),
\qquad
\alpha(\mu_*)=0,
\qquad
\omega(\mu_*)\ne 0.
$$

### Consecuencia tipica

En condiciones no degeneradas nace o desaparece una orbita periodica cerca del equilibrio.

### Forma normal polar

La ecuacion reducida para el radio suele verse como

$$
\dot r=r(\mu-\beta r^2),
$$

con

$$
\beta\ne 0.
$$

Entonces:

- si

$$
\beta>0,
$$

la Hopf supercritica crea un ciclo limite estable;
- si

$$
\beta<0,
$$

la Hopf subcritica produce un ciclo inestable y un cambio mucho mas delicado.

## Centro manifold y bifurcacion

En bifurcaciones locales la informacion decisiva vive en la parte no hiperbolica del espectro. Por eso la herramienta correcta es reducir la dinamica a la variedad central y estudiar alli la forma normal.

### Moral

La secuencia conceptual es:

1. detectar perdida de hiperbolicidad;
2. reducir a la parte central;
3. simplificar por forma normal;
4. leer el cambio cualitativo.

## Diagramas de bifurcacion

Un diagrama de bifurcacion representa:

- parametro

$$
\mu
$$

en un eje;
- ramas de equilibrios o de ciclos en el otro;
- estabilidad marcada por linea continua o discontinua.

No es un dibujo decorativo: resume en una sola figura la geometria de la familia completa.

## Ejemplo 1: ecuacion logistica con cosecha

Una version simplificada puede llevar a

$$
\dot x=r x\left(1-\frac{x}{K}\right)-h.
$$

Al variar

$$
h
$$

puede aparecer una saddle-node donde desaparecen estados estacionarios positivos. Ese punto marca una transicion fisicamente importante: la poblacion deja de tener equilibrio sostenible.

## Ejemplo 2: nacimiento de oscilaciones

En muchos osciladores con retroalimentacion, una bifurcacion de Hopf describe el paso desde un equilibrio estable a un regimen oscilatorio autoexcitado. Esa es la lectura local de numerosos fenomenos en electronica, mecanica y biologia.

## Lo que no debe confundirse

- Bifurcacion no significa automaticamente caos.
- Perder estabilidad lineal no dice por si solo que tipo de bifurcacion ocurre.
- Un diagrama de bifurcacion local no describe necesariamente la dinamica global completa.

## Errores frecuentes

- Pensar que cualquier equilibrio no hiperbolico bifurca.
- Aplicar una forma normal sin verificar hipotesis de no degeneracion.
- Olvidar la simetria necesaria en la pitchfork clasica.
- Confundir centro lineal con Hopf.

## Practica guiada

### Ejercicio 1

Estudia la familia

$$
\dot x=\mu-x^2
$$

y dibuja su diagrama de bifurcacion.

### Ejercicio 2

Compara

$$
\dot x=\mu x-x^2
$$

con

$$
\dot x=\mu x-x^3
$$

desde el punto de vista de numero de equilibrios y estabilidad.

### Ejercicio 3

Explica por que la perdida de hiperbolicidad es necesaria para una bifurcacion local.

## Cierre

La teoria de bifurcaciones convierte a las EDO dependientes de parametros en una geometria de transiciones. Ese punto de vista es indispensable para pasar de resolver sistemas a entender familias dinamicas.
