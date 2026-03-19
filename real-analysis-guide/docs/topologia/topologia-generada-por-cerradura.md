---
title: Topologia generada por cerradura
description: Axiomas de Kuratowski y reconstruccion de una topologia a partir de un operador de cerradura.
---

# Topologia generada por cerradura

## Motivacion e intuicion

Una topologia puede describirse por abiertos, por cerrados, por bases o incluso por un operador abstracto de cerradura. Este ultimo enfoque es especialmente potente porque empaqueta en una sola aplicacion gran parte de la informacion topologica.

El resultado central es que no toda aplicacion sobre conjuntos es una cerradura topologica: debe satisfacer axiomas precisos, los axiomas de Kuratowski.

## Prerrequisitos

Conviene manejar cerrados, clausura usual y operaciones entre conjuntos.

## Definiciones formales

Sea $X$ un conjunto y sea

$$
c : \mathcal{P}(X) \to \mathcal{P}(X)
$$

una aplicacion.

### Operador de cerradura de Kuratowski

Se dice que $c$ es un **operador de cerradura** si para todos $A,B \subseteq X$ se cumplen:

1. 

$$
c(\varnothing)=\varnothing;
$$

2. 

$$
A \subseteq c(A);
$$

3. 

$$
c(c(A))=c(A);
$$

4. 

$$
c(A \cup B)=c(A)\cup c(B).
$$

### Conjuntos $c$-cerrados

Un conjunto $F \subseteq X$ se llama **$c$-cerrado** si

$$
c(F)=F.
$$

## Ejemplos basicos

### Ejemplo 1: cerradura usual de una topologia

Si $(X,\tau)$ es un espacio topologico, la aplicacion

$$
A \mapsto \overline{A}
$$

es un operador de cerradura.

### Ejemplo 2: topologia discreta

En la topologia discreta,

$$
c(A)=A
$$

para todo $A \subseteq X$.

### Ejemplo 3: topologia indiscreta

En la topologia indiscreta,

$$
c(\varnothing)=\varnothing,
$$

y si $A \ne \varnothing$,

$$
c(A)=X.
$$

## Proposiciones y teoremas centrales

### Proposicion 1: monotonia derivada

Si $c$ satisface los axiomas de Kuratowski, entonces

$$
A \subseteq B \Rightarrow c(A) \subseteq c(B).
$$

#### Demostracion

Si $A \subseteq B$, entonces

$$
B = A \cup B.
$$

Aplicando el axioma de la union:

$$
c(B)=c(A \cup B)=c(A)\cup c(B).
$$

Esto solo es posible si

$$
c(A) \subseteq c(B).
$$

### Proposicion 2: los conjuntos $c$-cerrados se comportan como cerrados topologicos

La familia

$$
\mathcal{F}_c = \{F \subseteq X : c(F)=F\}
$$

satisface:

1. $\varnothing,X \in \mathcal{F}_c$;
2. es estable por intersecciones arbitrarias;
3. es estable por uniones finitas.

#### Demostracion

Por axioma,

$$
c(\varnothing)=\varnothing.
$$

Ademas, como $X \subseteq c(X) \subseteq X$, se tiene $c(X)=X$.

Sea ahora $(F_i)_{i \in I}$ una familia de $c$-cerrados y

$$
F=\bigcap_{i \in I} F_i.
$$

Como $F \subseteq F_i$ para todo $i$, por monotonia

$$
c(F) \subseteq c(F_i)=F_i
$$

para todo $i$, luego

$$
c(F) \subseteq \bigcap_{i \in I} F_i = F.
$$

Por extensividad, $F \subseteq c(F)$, asi que $c(F)=F$.

Si $F$ y $G$ son $c$-cerrados, entonces

$$
c(F \cup G)=c(F)\cup c(G)=F \cup G.
$$

### Teorema 3: reconstruccion de la topologia

Si $c$ es un operador de cerradura de Kuratowski, entonces la familia de complementos de los $c$-cerrados define una topologia

$$
\tau_c = \{X \setminus F : F \in \mathcal{F}_c\},
$$

y la clausura topologica asociada coincide con $c$.

#### Demostracion

Por la proposicion anterior, $\mathcal{F}_c$ satisface los axiomas duales de cerrados. Por tanto sus complementos forman una topologia.

Falta ver que la clausura en esa topologia coincide con $c$. Si $A \subseteq X$, el conjunto $c(A)$ es $c$-cerrado por idempotencia:

$$
c(c(A))=c(A),
$$

y contiene a $A$ por extensividad. Luego la clausura topologica de $A$ esta contenida en $c(A)$.

Reciprocamente, si $F$ es cualquier $c$-cerrado que contiene a $A$, por monotonia

$$
c(A) \subseteq c(F)=F.
$$

Entonces $c(A)$ esta contenido en toda parte cerrada que contiene a $A$, asi que es exactamente la clausura topologica de $A$.

### Proposicion 4: el operador queda determinado por sus conjuntos fijos

Si $c$ es un operador de cerradura de Kuratowski, entonces para todo $A \subseteq X$ se cumple

$$
c(A)=\bigcap\{F \in \mathcal{F}_c : A \subseteq F\}.
$$

#### Demostracion

Como $c(A)$ es $c$-cerrado por idempotencia y contiene a $A$ por extensividad, pertenece a la familia de la derecha. Luego

$$
\bigcap\{F \in \mathcal{F}_c : A \subseteq F\} \subseteq c(A).
$$

Reciprocamente, si $F \in \mathcal{F}_c$ contiene a $A$, por monotonia

$$
c(A) \subseteq c(F)=F.
$$

Asi $c(A)$ esta contenido en toda parte de la familia, y por tanto en su interseccion.

### Proposicion 5: operador interior dual

Definiendo

$$
i(A)=X \setminus c(X \setminus A),
$$

se obtiene el operador interior correspondiente a la topologia reconstruida.

#### Comentario

Esta formula es la version abstracta de la dualidad entre interior y clausura.

### Teorema 6: del lado de los cerrados al operador

Sea $\mathcal{F} \subseteq \mathcal{P}(X)$ una familia que satisface:

1.

$$
\varnothing,X \in \mathcal{F};
$$

2. $\mathcal{F}$ es estable por intersecciones arbitrarias;
3. $\mathcal{F}$ es estable por uniones finitas.

Define para cada $A \subseteq X$:

$$
c_{\mathcal{F}}(A)=\bigcap\{F \in \mathcal{F} : A \subseteq F\}.
$$

Entonces $c_{\mathcal{F}}$ es un operador de cerradura de Kuratowski, y sus conjuntos fijos son exactamente los elementos de $\mathcal{F}$.

#### Demostracion

Como $X \in \mathcal{F}$, la familia de cerrados que contienen a $A$ nunca es vacia, de modo que $c_{\mathcal{F}}(A)$ esta bien definido.

La igualdad

$$
c_{\mathcal{F}}(\varnothing)=\varnothing
$$

vale porque $\varnothing \in \mathcal{F}$ y es el menor conjunto de $\mathcal{F}$.

La extensividad es inmediata: toda parte $F \in \mathcal{F}$ que contiene a $A$ contiene a cada elemento de $A$, luego

$$
A \subseteq c_{\mathcal{F}}(A).
$$

La idempotencia se obtiene porque $c_{\mathcal{F}}(A)$ pertenece a $\mathcal{F}$ por estabilidad de $\mathcal{F}$ bajo intersecciones arbitrarias. Entonces

$$
c_{\mathcal{F}}(c_{\mathcal{F}}(A)) = c_{\mathcal{F}}(A).
$$

Para la union finita, primero observa que

$$
c_{\mathcal{F}}(A)\cup c_{\mathcal{F}}(B)
$$

es un elemento de $\mathcal{F}$ que contiene a $A \cup B$, luego

$$
c_{\mathcal{F}}(A \cup B) \subseteq c_{\mathcal{F}}(A)\cup c_{\mathcal{F}}(B).
$$

Para la inclusion contraria, observa que $c_{\mathcal{F}}(A \cup B)$ es un elemento de $\mathcal{F}$ que contiene a $A$. Por la definicion misma de $c_{\mathcal{F}}(A)$ como interseccion de todos los elementos de $\mathcal{F}$ que contienen a $A$, se obtiene

$$
c_{\mathcal{F}}(A)\subseteq c_{\mathcal{F}}(A \cup B).
$$

De la misma manera,

$$
c_{\mathcal{F}}(B)\subseteq c_{\mathcal{F}}(A \cup B).
$$

Luego

$$
c_{\mathcal{F}}(A)\cup c_{\mathcal{F}}(B)\subseteq c_{\mathcal{F}}(A \cup B).
$$

Finalmente, si $F \in \mathcal{F}$, entonces

$$
c_{\mathcal{F}}(F)=F
$$

porque $F$ es uno de los cerrados que se intersectan y, por extensividad, no puede aparecer un conjunto menor. Reciprocamente, si

$$
c_{\mathcal{F}}(A)=A,
$$

como toda imagen de $c_{\mathcal{F}}$ pertenece a $\mathcal{F}$, se tiene $A \in \mathcal{F}$.

## Ejemplos finos y contraejemplos

### Contraejemplo 1: extensividad e idempotencia no bastan

Una aplicacion puede satisfacer

$$
A \subseteq c(A), \qquad c(c(A))=c(A),
$$

y aun asi no provenir de ninguna topologia si falla la compatibilidad con uniones finitas.

### Contraejemplo 2: no toda regla intuitiva de "agregar puntos"

Si se define sobre $\mathbb{R}$ la operacion

$$
c(A)=
\begin{cases}
A \cup \{0\}, & \text{si } A \text{ es finito y no vacio}, \\
A, & \text{si } A \text{ es infinito}, \\
\varnothing, & \text{si } A=\varnothing,
\end{cases}
$$

la intuicion "agregar un punto especial a conjuntos pequenos" no basta para producir una clausura topologica. En efecto, si

$$
A=(1,2), \qquad B=\{1\},
$$

entonces

$$
c(A \cup B) = c([1,2)) = [1,2),
$$

mientras que

$$
c(A) \cup c(B) = (1,2) \cup \{0,1\} = \{0\} \cup [1,2),
$$

de modo que falla el axioma

$$
c(A \cup B)=c(A)\cup c(B).
$$

### Ejemplo fino 3: el enfoque por cerradura es equivalente, no adicional

Trabajar con una topologia o con su operador de cerradura no da dos teorias distintas, sino dos lenguajes equivalentes para la misma estructura.

## Errores comunes

1. Pensar que cualquier operador extensivo e idempotente es una clausura topologica.
2. Olvidar derivar monotonia antes de usarla.
3. Confundir conjuntos $c$-cerrados con subconjuntos cualquiera.
4. No distinguir entre la topologia dada y la topologia reconstruida.

## Resumen operativo

- Los axiomas de Kuratowski caracterizan exactamente a los operadores de cerradura topologicos.
- A partir del operador se recuperan los cerrados y, por complemento, la topologia.
- El operador queda completamente determinado por sus conjuntos fijos.
- Reciprocamente, toda familia abstracta de cerrados produce un operador de clausura.
- La monotonia es derivada, no un axioma independiente en esta formulacion.
- El lenguaje operatorio condensa mucha informacion estructural.

## Ejercicios

1. Verifica que la clausura usual satisface los axiomas de Kuratowski.
2. Demuestra la monotonia a partir de los axiomas.
3. Reconstruye la topologia discreta desde el operador $c(A)=A$.
4. Reconstruye la topologia indiscreta desde su operador de clausura.
5. Explica por que el operador interior se obtiene por dualidad con el complemento.
6. Parte de la familia de cerrados de la topologia cofinita y reconstruye su operador de cerradura.
