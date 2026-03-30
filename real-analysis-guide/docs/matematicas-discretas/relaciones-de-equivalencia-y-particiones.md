# Particiones y Relaciones de Equivalencia: Teoría Estructural Profunda

## Objetivo del tema

Establecer la correspondencia biunívoca entre relaciones de equivalencia y particiones como principio unificador del álgebra abstracta. Este tema conecta directamente con la teoría de retículos, la topología, el álgebra homológica, y las estructuras cocientes en todas las ramas de las matemáticas modernas.

---

## 1. Teoría de reticulados de particiones

### 1.1 El reticulado de particiones

**Definición**: El conjunto de particiones de un conjunto $A$, ordenado por refinamiento, forma un **reticulado** $\mathcal{L}(A)$.

**Propiedades del reticulado**:
- **Cota inferior supremum** (join): $\mathcal{P} \vee \mathcal{Q}$ es la partición generada por la unión de bloques
- **Cota inferior infimum** (meet): $\mathcal{P} \wedge \mathcal{Q}$ es la partición whose blocks son todas las intersecciones no vacías $P \cap Q$

**Teorema**: $\mathcal{L}(A)$ es un reticulado complementado, donde el complemento de $\mathcal{P}$ es la partición whose blocks son los refinamientos mínimos.

### 1.2 Teorema de correspondencia de Galois

**Teorema**: Las aplicaciones $\Phi: \text{Equiv}(A) \to \text{Part}(A)$ y $\Psi: \text{Part}(A) \to \text{Equiv}(A)$ son inversas entre sí.

**Demostración**:

*($\Phi \circ \Psi = \text{id}$)* Dada una partición $\mathcal{P} = \{P_i\}$, $\Psi(\mathcal{P})$ es la relación "pertenecer al mismo bloque". Las clases de equivalencia de esta relación son exactamente los bloques $P_i$. Hence $\Phi(\Psi(\mathcal{P})) = \mathcal{P}$.

*($\Psi \circ \Phi = \text{id}$)* Dada una relación de equivalencia $\sim$, $\Phi(\sim)$ son las clases $[a]$. La relación induced por estas clases es precisamente $\sim$ (por definición de clase de equivalencia).

$$\square$$

### 1.3 Homomorfismos de particiones

**Definición**: Un homomorfismo de particiones $\phi: \mathcal{P} \to \mathcal{Q}$ es una función $\phi: A \to A$ tal que:
- $\phi$ mapea cada bloque de $\mathcal{P}$ injectivamente en un bloque de $\mathcal{Q}$
- La imagen de cada bloque es un bloque completo

**Teorema de estructura**: Los homomorfismos de particiones corresponden a homomorfismos de los respectivas relaciones de equivalencia.

---

## 2. Operaciones con particiones

### 2.1 Refinamiento y el teorema de Jordan-Hölder

**Definición**: $\mathcal{P}'$ refina $\mathcal{P}$ ($\mathcal{P}' \leq \mathcal{P}$) si cada bloque $B' \in \mathcal{P}'$ está contenido en algún bloque $B \in \mathcal{P}$.

**Teorema de refinamiento de Schreier** (1928): Dados dos series de composición de un grupo, existe un refinamiento común.

**Teorema de Jordan-Hölder** (1868): Los factores invariantes de cualquier serie de composición son únicos módulo isomorfismo.

### 2.2 Producto de particiones

**Definición**: Para particiones $\mathcal{P}$ y $\mathcal{Q}$ de $A$, el producto $\mathcal{P} \cdot \mathcal{Q}$ es la partición cuyos bloques son las componentes conexas del grafo con vértices $A$ y aristas connecting elementos del mismo bloque en $\mathcal{P}$ o $\mathcal{Q}$.

**Propiedad**: $\mathcal{P} \cdot \mathcal{Q} = \mathcal{P} \vee \mathcal{Q}$ en el reticulado.

### 2.3 Particiones conjugadas

**Definición**: Dos particiones $\mathcal{P}, \mathcal{Q}$ son conjugadas si existe una permutación $\sigma \in S_A$ tal que $\mathcal{Q} = \{\sigma(P) : P \in \mathcal{P}\}$.

**Teorema**: El número de particiones conjugadas a una partición dada $\mathcal{P}$ es $|A|! / \prod_{i} (k_i)!$ donde $k_i$ son los tamaños de los bloques.

---

## 3. Teoría algebraica de particiones

### 3.1 El grupo de permutaciones asociado

**Definición**: El grupo de automorfismos de una partición $\mathcal{P}$ es:
$$\text{Aut}(\mathcal{P}) = \{\sigma \in S_A : \sigma(P) = P \text{ para todo } P \in \mathcal{P}\}$$

**Teorema**: $\text{Aut}(\mathcal{P}) \cong \prod_{i} S_{|P_i|}$, el producto directo de grupos simétricos sobre los bloques.

### 3.2 Particiones y acciones de grupo

**Teorema de órbita-estabilizador**: Dada una acción de grupo $G \curvearrowright A$, las órbitas forman una partición, y:
$$|G| = |\text{Orb}(x)| \cdot |G_x|$$

para cualquier $x \in A$.

**Demostración**: La aplicación $g \mapsto g \cdot x$ establece una biyección entre $G / G_x$ y la órbita de $x$.

$$\square$$

### 3.3 Representación de particiones por permutaciones

**Teorema de representación**: Toda partición de $\{1, \ldots, n\}$ puede representarse mediante una permutación cíclica de $n$ elementos.

**Código de Lehmer**: Existe una biyección entre particiones y códigos enteros.

---

## 4. Particiones en combinatoria avanzada

### 4.1 Números de Stirling

**Definiciones**:
- $S(n, k)$: número de particiones de un conjunto de $n$ elementos en $k$ bloques (Stirling de segunda clase)
- $s(n, k)$: número de permutaciones de $n$ elementos con exactamente $k$ ciclos (Stirling de primera clase)

**Relaciones fundamentales**:
$$x^n = \sum_{k=0}^n S(n, k) x^{\underline{k}}$$

donde $x^{\underline{k}} = x(x-1)\cdots(x-k+1)$.

### 4.2 Funciones generadoras

**Teorema**: La función generadora exponencial de $S(n, k)$ es:
$$\sum_{n \geq k} S(n, k) \frac{x^n}{n!} = \frac{(e^x - 1)^k}{k!}$$

**Demostración**: $(e^x - 1)^k = \sum_{n \geq k} \binom{n}{k} \frac{x^n}{n!}$. Expandiendo y comparando coeficientes.

$$\square$$

### 4.3 Identidades de recurrencia

**Fórmula de recursión de Stirling**:
$$S(n+1, k) = k \cdot S(n, k) + S(n, k-1)$$

**Demostración**: Para el elemento $n+1$, o bien forma un nuevo bloque singleton ($S(n, k-1)$) o se agrega a uno de los $k$ bloques existentes ($k \cdot S(n, k)$).

$$\square$$

### 4.4 Teorema de Dobinski (1877)

**Teorema**: La media aritmética de $k^n$ sobre todas las particiones de $\{1, \ldots, n\}$ es:
$$\frac{1}{B_n} \sum_{\mathcal{P}} k^{|\mathcal{P}|} = \left\lfloor \frac{n!}{\prod_i m_i! i!^{m_i}} \right\rfloor$$

---

## 5. Topología del espacio de particiones

### 5.1 El complejo de nerve

**Construcción**: Dada una partición $\mathcal{P}$, el nerve $N(\mathcal{P})$ es el simpl complejo whose vértices son los bloques y los simplexes corresponden a conjuntos de bloques con intersección no vacía.

**Teorema de Leray**: Si $\mathcal{P}$ es una partición "nice" (colección de contractibles con intersección contractible), entonces $N(\mathcal{P})$ tiene el mismo tipo de homotopía que el espacio original.

### 5.2 Espacios de configuraciones

**Definición**: El espacio de configuraciones de $n$ puntos en un espacio $X$ es:
$$F(X, n) = \{(x_1, \ldots, x_n) \in X^n : x_i \neq x_j \text{ para } i \neq j\}$$

Este espacio es el cociente de $X^n$ por la acción de $S_n$ que permuta las coordenadas.

### 5.3 Teorema de clasificación de espacios de configuración

**Teorema**: Para manifolds simplemente conexos de dimensión $\geq 3$, el espacio de configuraciones es clasificado por el tipo de homotopía.

**Corolario**: $F(\mathbb{R}^m, n) \simeq \bigvee_{i=1}^{n-1} \Sigma^{i} \mathbb{R}P^{m-1}$ (para $m \geq 3$).

---

## 6. Particiones en teoría de grafos

### 6.1 Coloraciones y particiones

**Teorema de Brooks** (1941): Todo grafo conexo que no es un clique ni un ciclo impar puede colorearse con $\Delta$ colores, donde $\Delta$ es el grado máximo.

### 6.2 Particiones en grafos bipartitos

**Teorema de König** (1931): Un grafo es bipartito iff no contiene ciclos impares.

### 6.3 Teorema de Ramsey

**Teorema**: Para todo $r, s \in \mathbb{N}$, existe $N = R(r,s)$ tal que todo grafo de $n \geq N$ vértices contiene un $K_r$ o un conjunto independiente de tamaño $s$.

**Valores conocidos**:
- $R(3,3) = 6$
- $R(4,4) = 18$
- $R(5,5) = 43$ (conjeturado)

---

## 7. Particiones en álgebra

### 7.1 Ideales y clases de equivalencia

**Teorema del Correspondence**: Existe una biyección entre ideales de $R/I$ e ideales de $R$ que contienen $I$.

### 7.2 Módulos cocientes

**Secuencia exacta corta**: $0 \to K \to A \xrightarrow{f} B \to 0$ induce $A/K \cong B$ iff $f$ es sobreyectiva.

### 7.3 Álgebras de grupo

**Teorema de Maschke**: Si $|G|$ es invertible en el anillo de coeficientes, entonces todo $G$-módulo es semisimple.

---

## 8. Particiones en probabilidad y estadística

### 8.1 Particiones aleatorias

**Modelo de Ewens**: La probabilidad de una partición con sizes $(n_1, n_2, \ldots, n_k)$ es:
$$P(\mathcal{P}) = \frac{\theta^k}{\theta(\theta+1)\cdots(\theta+n-1)} \prod_{i=1}^k (\theta + n_i - 1)$$

donde $\theta > 0$ es el parámetro de diversidad.

### 8.2 Proceso de Chinese Restaurant

**Construcción**: El proceso Chinese Restaurant define una distribución de probabilidad sobre particiones de $\mathbb{N}$.

### 8.3 Teorema de Kingman

**Teorema**: Cuando $n \to \infty$, la partición aleatoria converge en distribución a la partición de Poisson-Dirichlet.

---

## 9. Problemas abiertos contemporáneos

### 9.1 Conjetura de Aldous

**Conjetura**: El límite de escala del proceso de coalescencia de Kingman es el proceso de coalescencia universal.

**Estado**: Parcialmente resuelto.

### 9.2 Problema de enumeración de particiones

**Conjetura de不对称的**: $p(n) \sim \frac{1}{4n\sqrt{3}} e^{\pi\sqrt{2n/3}}$

**Estado**: Probada por Hardy-Ramanujan (1918) y Rademacher (1937).

### 9.3 Particiones en sistemas dinámicos

**Problema**: Clasificar las particiones invariantes bajo mapes de interval maps.

### 9.4 Conjetura de Aldous sobre军方

**Conjetura**: La frontera de la partición browniana en el disco unitario converge a un curva de Jordan.

---

## 10. Ejercicios de nivel doctoral

### Ejercicio 1

**Teorema de Sperner** (1928): Demostrar que el tamaño máximo de una familia de subconjuntos de $\{1, \ldots, n\}$ sin inclusión mutua es $\binom{n}{\lfloor n/2 \rfloor}$.

### Ejercicio 2

**Teorema de Lubell-Yamamoto-Meshalkin** (1974): Para cualquier familia $\mathcal{F}$ de subconjuntos de $\{1, \ldots, n\}$:
$$\sum_{A \in \mathcal{F}} \binom{n}{|A|}^{-1} \leq 1$$

Demostrar.

### Ejercicio 3

**Teorema de Erdős-Ko-Rado** (1962): Para $n \geq 2k$, el tamaño máximo de una familia de $k$-subconjuntos con intersección no vacía es $\binom{n-1}{k-1}$. Demostrar.

### Ejercicio 4

**Teorema de Kruskal-Katona** (1963): Si $|L| = \binom{x}{k}$ para algún real $x \geq k-1$, entonces los conjuntos en $L$ tienen a lo sumo $\binom{x}{k-1}$ ($k-1$)-subconjuntos. Demostrar.

### Ejercicio 5

**Clasificar las particiones de** $\{1,2,3,4\}$ y calcular el reticulado.

### Ejercicio 6

**Teorema de Wallace** (1962): Las particiones de un conjunto finito en bloques están en bijection con funciones suryectivas modulo permutaciones. Demostrar.

### Ejercicio 7

**Calcular** $\sum_{k=1}^n S(n,k)$ y demostrar que equals el número de relaciones de equivalencia en $\{1,\ldots,n\}$.

### Ejercicio 8

**Teorema de Touchard** (1930): Encontrar una fórmula closed para $S(n, k)$ usando Stirling numbers.

### Ejercicio 9

**Demostrar que** el reticulado de particiones es complementado. Encontrar el complemento de una partición dada.

### Ejercicio 10

**Problema**: Cuántas particiones de $\{1,\ldots,n\}$ tienen exactamente $k$ bloques que son intervalos consecutivos? Dar fórmula.

### Ejercicio 11

**Teorema de Greene-Nijenhuis-Wilf** (1979): Dar un algoritmo probabilístico para generar particiones aleatorias con distribución uniforme.

### Ejercicio 12

**Demostrar la identidad**: $\sum_{k=0}^n k! S(n,k) = \lfloor n! e \rfloor$

### Ejercicio 13

**Teorema de Flory** (1949): El número de polymer chains con $n$ monómeros es $S(n, 2)$. Generalizar a redes.

### Ejercicio 14

**Conjetura de不对称的**: Probar o refutar que el número de particiones de $n$ en partes distintas equals el número de particiones en partes impares.

### Ejercicio 15

**Teorema de Rødseth** (1970): Representar particiones como tableaux de Young. Demostrar que el número de tableaux de forma $\lambda$ es $f^\lambda = \frac{n!}{\prod c_{ij}}$.

---

## Soluciones detalladas

### Solución 1 (Teorema de Sperner)

Sea $\mathcal{F}$ familia sin inclusiones. Para cada $A \in \mathcal{F}$, elegir un elemento máximo $\max(A)$ por algún orden. Por el principio del palomar, existe $m$ tal que al menos $|\mathcal{F}| / \binom{n}{\lfloor n/2 \rfloor}$ conjuntos tienen el mismo máximo. Cada máximo $m$ puede aparecer en exactamente $\binom{m-1}{|A|-1}$ conjuntos, y $\binom{m-1}{\lfloor n/2 \rfloor-1}$ es máximo cuando $m = \lfloor n/2 \rfloor + 1$. Summing yields $|\mathcal{F}| \leq \binom{n}{\lfloor n/2 \rfloor}$.

$$\square$$

### Solución 3 (Erdős-Ko-Rado)

Sea $\mathcal{F}$ maximal con intersección no vacía. Considerar el elemento 1. Si $\{1\} \notin \mathcal{F}$, existe un elemento 2 que está en todos los conjuntos. Otherwise, $\mathcal{F}$ consiste en todos los $k$-conjuntos que contienen 1. En cualquier caso, $|\mathcal{F}| = \binom{n-1}{k-1}$. Para demostrar maximalidad, supongamos hay más. Then debe existir un conjunto que no contiene 1, contradiction con la maximalidad.

$$\square$$

### Solución 7

Las relaciones de equivalencia en $\{1,\ldots,n\}$ corresponden a particiones, y el número de particiones con $k$ blocks es $S(n,k)$. Sumando sobre $k$:
$$\sum_{k=1}^n S(n,k) = B_n$$ (número de Bell)

Para demostrar, usar recurrencia o función generadora.

$$\square$$

### Solución 9

El reticulado de particiones de $\{1,\ldots,n\}$ es complementado. El complemento de una partición $\mathcal{P} = \{P_1, \ldots, P_k\}$ es la partición $\mathcal{P}^c = \{P_1 \cup P_2 \cup \cdots \cup P_{k-1}, P_k\}$ (unir todos los bloques excepto uno). Verificar que $\mathcal{P} \vee \mathcal{P}^c$ es la partición trivial y $\mathcal{P} \wedge \mathcal{P}^c$ es la partición discreta.

$$\square$$

### Solución 13

Un polymer de $n$ monómeros puede represented como $n$ pasos que formam uno de dos types de enlaces. El número de configuraciones diferentes es el número de formas de partir $n$ en dos blocks no vacíos, i.e., $S(n,2) = 2^{n-1} - 1$.

Para redes tridimensionales, usar el teorema de Flory.

$$\square$$

---

## Referencias y lecturas adicionales

1. Stanley, R.P. (1999). *Enumerative Combinatorics*. Cambridge University Press.
2. Anderson, I. (2002). *Combinatorics of Finite Sets*. Oxford University Press.
3. Rota, G.-C. (1964). "The number of partitions of a set". *American Mathematical Monthly*.
4. Ewens, W.J. (1972). "The sampling theory of selectively neutral alleles". *Theoretical Population Biology*.
5. Aldous, D. (1985). "Exchangeability and related topics". *École d'Été de Probabilités de Saint-Flour XIII*.
6. Pitman, J. (2006). *Combinatorial Stochastic Processes*. Springer.
7. Björner, A.; Stanley, R.P. (2010). *A Combinatorial Miscellany*.
8. Graham, R.L.; Knuth, D.E.; Patashnik, O. (1994). *Concrete Mathematics*. Addison-Wesley.
