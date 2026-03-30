# Relaciones de Equivalencia: Teoría Algebraica Avanzada

## Objetivo del tema

Desarrollar una teoría profunda de las relaciones de equivalencia, estableciendo conexiones con la teoría de grupos, la topología algebraica, la teoría de categorías y la lógica matemática. Las relaciones de equivalencia proporcionan el mecanismo fundamental para construir nuevos estructuras algebraicas mediante identificación y constituyen la base de la teoría de grupos cocientes, espacios cocientes, y construcciones categoriales.

---

## 1. Fundamentos categóricos y algebraicos

### 1.1 Caracterización axiomática

**Definición formal**: Una relación de equivalencia $\sim$ sobre un conjunto $A$ es un subconjunto $R \subseteq A \times A$ que satisface:

1. **Reflexividad**: $\forall a \in A, (a,a) \in R$
2. **Simetría**: $\forall a,b \in A, (a,b) \in R \Rightarrow (b,a) \in R$
3. **Transitividad**: $\forall a,b,c \in A, (a,b) \in R \wedge (b,c) \in R \Rightarrow (a,c) \in R$

**Notación**: Escribimos $a \sim b$ en lugar de $(a,b) \in R$.

### 1.2 Relación con preórdenes y órdenes parciales

La teoría de relaciones forma un continuo categórico:

$$\text{Preorden} \xrightarrow{\text{antisimetría}} \text{Orden parcial} \xrightarrow{\text{total}} \text{Orden total}$$

$$\text{Preorden} \xrightarrow{\text{simetría}} \text{Equivalencia}$$

Un **preorden** es reflexivo y transitivo. Una relación de equivalencia es un preorden simétrico.

### 1.3 Conexión con el álgebra universal

**Definición de núcleo de función**: Para $f: A \to B$, el núcleo de $f$ es:
$$\ker(f) = \{(a,a') \in A \times A : f(a) = f(a')\}$$

**Teorema fundamental del homomorfismo** (universal algebra): Para todo homomorfismo de grupos $f: G \to H$, existe un isomorfismo:
$$G / \ker(f) \cong \text{im}(f)$$

Este teorema tiene análogos en:
- **Anillos**: $R / \ker(\phi) \cong \text{im}(\phi)$
- **Módulos**: $M / \ker(\phi) \cong \text{im}(\phi)$
- **Álgebras de Boole**: $B / \ker(\phi) \cong \text{im}(\phi)$

---

## 2. Clases de equivalencia: teoría de conjuntos

### 2.1 Teorema de descomposición canónica

**Teorema**: Sea $\sim$ una relación de equivalencia sobre $A$. Las clases de equivalencia forman una partición de $A$, y recíprocamente, toda partición define una relación de equivalencia única.

**Demostración**:

*($\Rightarrow$)* Sea $[a]$ la clase de $a$. Mostremos que las clases son disjuntas y cubren $A$:
- $a \in [a]$ por reflexividad
- Si $[a] \cap [b] \neq \emptyset$, sea $c \in [a] \cap [b]$. Entonces $a \sim c$ y $c \sim b$, hence $a \sim b$ por transitividad, y así $[a] = [b]$.

*($\Leftarrow$)* Dada una partición $\{A_i\}$, definimos $a \sim b$ iff $\exists i$ tal que $a,b \in A_i$. Las tres propiedades se verifican directamente.

$$\square$$

### 2.2 Teorema del conjunto cociente

**Definición**: El conjunto cociente es $A / \sim = \{[a] : a \in A\}$.

**Teorema de proyección canónica**: La aplicación $\pi: A \to A / \sim$ definida por $\pi(a) = [a]$ es suprayectiva.

**Propiedad universal**: Para toda función $f: A \to B$ constante sobre clases de equivalencia (i.e., $a \sim a' \Rightarrow f(a) = f(a')$), existe una única función $\bar{f}: A / \sim \to B$ tal que $f = \bar{f} \circ \pi$.

$$\square$$

### 2.3 Cardinalidad del cociente

**Teorema**: Si $\sim$ tiene $k$ clases de equivalencia, entonces $|A / \sim| = k$.

**Demostración**: La biyección entre clases de equivalencia y elementos de la partición es inmediata por definición.

**Corolario**: Para cualquier función $f: A \to B$, $|A / \ker(f)| = |\text{im}(f)|$.

---

## 3. Teorema de Lagrange y aplicaciones grupales

### 3.1 Teorema de Lagrange (1771)

**Teorema**: Si $H$ es un subgrupo de $G$, entonces $|H|$ divide a $|G|$.

**Demostración**: Las clases laterales derechas $Hg = \{hg : h \in H\}$ forman una partición de $G$. Cada clase lateral tiene $|H|$ elementos, y el número de clases (índice) es $|G| / |H|$.

$$\square$$

**Generalización a grupos infinitos**: El teorema de Lagrange se extiende a grupos infinitos mediante la noción de índice: $[G : H] = |G / H|$.

### 3.2 Teoremas de isomorfía

**Primer teorema de isomorfía**: Para todo homomorfismo $\phi: G \to H$:
$$G / \ker(\phi) \cong \text{im}(\phi)$$

**Segundo teorema de isomorfía**: Para $H \leq K \leq G$:
$$K / H \cong (G / H) / (K / H)$$

**Tercer teorema de isomorfía**: Para $H, K \leq G$:
$$HK / K \cong H / (H \cap K)$$

### 3.3 Grupos cocientes y extensions

**Definición**: Una extensión de grupos $1 \to A \to E \to B \to 1$ es **escindida** si existe $s: B \to E$ tal que $\pi \circ s = \text{id}_B$.

**Teorema**: La extensión escindida implica $E \cong A \rtimes B$ (producto semidirecto).

---

## 4. Congruencias y álgebra universal

### 4.1 Definición categórica

Una **congruencia** en una estructura algebraica $(A, \Omega)$ es una relación de equivalencia $\sim$ sobre $A$ que respeta las operaciones: si $a_i \sim a_i'$ para todo $i$, entonces:
$$f(a_1, \ldots, a_n) \sim f(a_1', \ldots, a_n')$$

para toda operación $n$-aria $f \in \Omega$.

### 4.2 Estructura del cociente

**Teorema**: Si $\sim$ es una congruencia en un monoide $(M, \cdot, e)$, entonces el conjunto cociente $M / \sim$ tiene estructura de monoide definida por $[a][b] = [ab]$.

**Demostración**: La operación está bien definida porque $\sim$ es una congruencia. Verificamos asociatividad:
$$([a][b])[c] = [ab][c] = [(ab)c] = [a(bc)] = [a]([b][c])$$

$$\square$$

### 4.3 Álgebras de congruencias

**Teorema de Birkhoff** (1935): Las variedades de álgebras son cerradassub closure under subálgebras, productos directos, e imágenes homomórficas.

**Corolario**: Si $\mathcal{V}$ es una variedad y $\sim$ es una congruencia en $A \in \mathcal{V}$, entonces $A / \sim \in \mathcal{V}$.

---

## 5. Teoría de acciones de grupos

### 5.1 Acciones como relaciones de equivalencia

Una acción de grupo $G \curvearrowright X$ define relaciones de equivalencia:

- **Órbita**: $x \sim y$ iff $y = g \cdot x$ para algún $g \in G$
- **Estabilizador**: $G_x = \{g \in G : g \cdot x = x\}$ es subgrupo

### 5.2 Teorema de órbitas

**Teorema de descomposición orbital**: Las órbitas de una acción de grupo forman una partición de $X$.

### 5.3 Teorema de Burnside (1899)

**Lema de Burnside**: El número de órbitas de una acción de grupo $G \curvearrowright X$ es:
$$\frac{1}{|G|} \sum_{g \in G} |X^g|$$

donde $X^g = \{x \in X : g \cdot x = x\}$ son los puntos fijos de $g$.

**Aplicación**: Contar coloraciones de un tablero bajo simetrías.

### 5.4 Teorema de Cauchy-Frobenius

El número promedio de puntos fijos equals el número de órbitas:
$$|X / G| = \frac{1}{|G|} \sum_{g \in G} |X^g|$$

---

## 6. Relaciones de equivalencia en topología

### 6.1 Espacios cocientes

**Definición**: Dado un espacio topológico $X$ y una relación de equivalencia $\sim$, el espacio cociente $X / \sim$ tiene la topología cociente: $U \subseteq X / \sim$ es abierto iff $\pi^{-1}(U)$ es abierto en $X$.

### 6.2 Ejemplos fundamentales

**Círculo**: $\mathbb{R} / \mathbb{Z} \cong S^1$

**Toro**: $(\mathbb{R} / \mathbb{Z}) \times (\mathbb{R} / \mathbb{Z}) \cong \mathbb{T}^2$

**Espacio proyectivo**: $\mathbb{R}P^n = S^n / (\text{antipodal})$

### 6.3 Teorema de clasificación de superficies

**Teorema de clasificación** (Riemann, 1851; Heegaard, 1898): Toda superficie compacta, conexa, orientable es homeomorfa a una suma conectada de toros:
$$S_g = \#_{i=1}^g T^2$$

El género $g$ es el número de "agujeros".

---

## 7. Teoría de categorías

### 7.1 Categorías como relaciones de equivalencia

En teoría de categorías, las relaciones de equivalencia se generalizan a **isomorfismos**: $a \cong b$ iff existe un isomorfismo $f: a \to b$.

### 7.2 Funtores y equivalencias categóricas

**Definición**: Un funtor $F: \mathcal{C} \to \mathcal{D}$ es una **equivalencia** si existe $G: \mathcal{D} \to \mathcal{C}$ tal que $FG \cong \text{id}_\mathcal{D}$ y $GF \cong \text{id}_\mathcal{C}$.

### 7.3 Objeto cociente

**Definición categórica**: En una categoría con coigualizadores, el objeto cociente de un objeto $X$ por una relación de equivalencia es el coigualizador de las proyecciones.

---

## 8. Problemas abiertos contemporáneos

### 8.1 Conjetura deertas (no resuelta)

**Problema**: Determinar el número mínimo de relaciones de equivalencia necesarias para particionar un conjunto de $n$ elementos en un número dado de bloques.

### 8.2 Conjetura de Hall sobre已婚 grupos

**Conjetura** (1934): Todo grupo infinito tiene subgrupos propios no triviales (resuelta negativamente porOl'shanskii, 1980).

### 8.3 Problema de isomorphismode grupos

**Teorema de Adian-Rabin** (1958): El problema de decidir si dos grupos de presentación finita son isomorfos es indecidible en general.

### 8.4 Clasificación de grupos simples

**Teorema de clasificación** (CFSG, 1983): Los grupos simples finitos están clasificados. La prueba involucra miles de páginas y cientos de artículos.

---

## 9. Aplicaciones avanzadas

### 9.1 Criptografía

**Protocolos de conocimiento cero**: Usan relaciones de equivalencia para demostrar conocimiento sin revelar información.

**Commitment schemes**: $c = g^r h^e$ donde $e$ es commitments sobre $r$.

### 9.2 Teoría de códigos

**Códigos correctores**: El espacio $\mathbb{F}_q^n$ modulo equivalencia de Hamming forma las esferas de radio $d$.

### 9.3 Procesamiento de lenguajes naturales

**Sinónimos**: La relación "significa lo mismo que" es una equivalencia aproximada.

**Stemming**: Algoritmos de stemming definen equivalencias morfológicas.

### 9.4 Teoría de grafos

**Isomorfismo de grafos**: La relación de isomorfismo $G \cong H$ es de equivalencia.

**Problema abierto**: El problema de isomorfismo de grafos está en NP pero no se sabe si está en P ni es NP-completo.

---

## 10. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Stone (1936)**: Demostrar que toda álgebra de Boole $B$ es isomorfa a un campo de conjuntos. Usar el ultrafiltro de $B$ para construir el homomorfismo.

### Ejercicio 2

**Clasificación de grupos de orden 12**: Usar teoremas de Sylow y relaciones de equivalencia para demostrar que los grupos de orden 12 son: $\mathbb{Z}_{12}$, $\mathbb{Z}_6 \times \mathbb{Z}_2$, $A_4$, $D_{12}$, $D_6$.

### Ejercicio 3

**Teorema de Jordan-Hölder** (1868): Demostrar que cualquier serie de composición de un grupo finito tiene los mismos factores invariantes (hasta isomorfismo y orden).

### Ejercicio 4

**Construir el espacio cociente** $\mathbb{R}^2 / \sim$ donde $(x,y) \sim (x+1, y) \sim (x, y+1)$. Identificar topológicamente.

### Ejercicio 5

**Teorema de Burnside** (1902): Si $G$ es un grupo finitamente generado con exponente finito, entonces $G$ es finito. Demostrar el caso especial $G = \langle a, b \mid a^p = b^q = (ab)^r = 1 \rangle$.

### Ejercicio 6

**Clasificar las extensiones** $1 \to \mathbb{Z}_n \to E \to \mathbb{Z}_m \to 1$ usando cohomología $H^2(\mathbb{Z}_m, \mathbb{Z}_n)$.

### Ejercicio 7

**Demostrar el teorema de Noether** (1915): La correspondencia entre subgrupos normales de $G$ y homomorfismos $G \to \text{Aut}(H)$ es biunívoca.

### Ejercicio 8

**Teorema de Sylow** (1872): Demostrar que todo grupo finito tiene subgrupos de orden $p^k$ (máxima potencia de $p$ dividiendo $|G|$).

### Ejercicio 9

**Construir la extensión** $\mathbb{Z}_4 \to D_8 \to \mathbb{Z}_2$ y verificar los teoremas de isomorfía.

### Ejercicio 10

**Clasificar superficies compactas** usando el grupo fundamental y la homología.

### Ejercicio 11

**Demostrar que** $S^1 \vee S^1 \vee S^2$ no es homeomorfo a $T^2 \# T^2$.

### Ejercicio 12

**Teorema de Nielsen-Schreier** (1911): Todo subgrupo de un grupo libre es libre. Demostrar para grupos libres de rango 2.

### Ejercicio 13

**Construir el grupo cociente** $GL(n, \mathbb{R}) / GL(n, \mathbb{Z})$ y estudiar sus propiedades topológicas.

### Ejercicio 14

**Problema de Burnside** (resuelto parcialmente): Determinar si todo grupo finitamente generado con exponente finito es finito. Dar contraejemplos si existen.

### Ejercicio 15

**Conjetura de Hall**: $k(G)$ (número de subgrupos de生成ors) tiene ciertas propiedades. Investigar para grupos nilpotentes.

---

## Soluciones detalladas

### Solución 1 (Teorema de Stone)

Sea $X$ el conjunto de ultrafiltros de $B$. Para cada $b \in B$, definir $U(b) = \{U \in X : b \in U\}$. El mapa $b \mapsto U(b)$ es un homomorfismo de Boolean algebras hacia el campo de conjuntos $P(X)$. El núcleo son los elementos tales que $b \notin U$ para todo ultrafiltro $U$, i.e., $b = 0$.

$$\square$$

### Solución 2 (Clasificación de grupos de orden 12)

Usando teoremas de Sylow:
- $n_3 \mid 4$ y $n_3 \equiv 1 \pmod{3}$ → $n_3 = 1$ o $4$
- $n_2 \mid 3$ y $n_2 \equiv 1 \pmod{2}$ → $n_2 = 1$ o $3$

Casos:
- $n_3 = 1$: subgrupo normal $\mathbb{Z}_3$, luego $G \cong \mathbb{Z}_{12}$ o $D_{12}$ o $A_4$
- $n_3 = 4$: solo $A_4$

Similar para subgrupos de orden 2 y 4.

$$\square$$

### Solución 4

La relación genera un toro $\mathbb{T}^2 = \mathbb{R}^2 / \mathbb{Z}^2$. La topología es cociente: un conjunto es abierto si su preimagen es abierto.

$$\square$$

### Solución 6

Las extensiones están clasificadas por $H^2(\mathbb{Z}_m, \mathbb{Z}_n)$. Calculando:
$$H^2(\mathbb{Z}_m, \mathbb{Z}_n) \cong \mathbb{Z}_{\gcd(m,n)}$$

El número de clases de extensiones es $\gcd(m,n)$.

$$\square$$

### Solución 8 (Teorema de Sylow)

Para $p$ primo, sea $|G| = p^k m$ con $p \nmid m$. Por el teorema de Cauchy, existe subgrupo de orden $p$. Si $p^k$ no es el máximo, agregar más elementos. Usar el teorema de conjugación para mostrar que todos los subgrupos de orden $p^k$ son conjugados, hence el número de Sylow $n_p$ satisface $n_p \mid m$ y $n_p \equiv 1 \pmod{p}$.

$$\square$$

### Solución 10

El grupo fundamental de una superficie orientada de género $g$ es:
$$\pi_1(\Sigma_g) = \langle a_1, b_1, \ldots, a_g, b_g \mid [a_1, b_1] \cdots [a_g, b_g] = 1 \rangle$$

La clasificación sigue de la homología y el grupo fundamental.

$$\square$$

### Solución 12

Sea $F = \langle a, b \rangle$ libre de rango 2. Sea $H \leq F$ subgrupo. Por Nielsen-Schreier, $H$ es libre. El rango se calcula mediante:
$$\text{rank}(H) = [F : H](|F| - 1) + 1 = [F : H] + 1$$

para $[F : H] < \infty$.

$$\square$$

---

## Referencias y lecturas adicionales

1. Dummit, D.S.; Foote, R.M. (2004). *Abstract Algebra*. Wiley.
2. Hungerford, T.W. (1974). *Algebra*. Springer.
3. Rotman, J.J. (1995). *An Introduction to the Theory of Groups*. Springer.
4. Munkres, J.R. (2000). *Topology*. Prentice Hall.
5. Mac Lane, S. (1971). *Categories for the Working Mathematician*. Springer.
6. Robinson, D.J.S. (1996). *A Course in the Theory of Groups*. Springer.
7. Artin, M. (1991). *Algebra*. Prentice Hall.
8. Weibel, C. (2013). *An Introduction to Homological Algebra*. Cambridge University Press.
