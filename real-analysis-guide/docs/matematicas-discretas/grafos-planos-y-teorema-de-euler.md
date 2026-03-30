# Grafos Planos y Teorema de Euler

## Objetivo del tema

Desarrollar la teoría de grafos planares, incluyendo el teorema fundamental de Euler, la caracterización de Kuratowski, teoría de menores, coloración de grafos, y aplicaciones en diseño de circuitos, cartografía y optimización combinatoria. Este tema constituye una de las áreas más bellas y profundas de la teoría de grafos, con conexiones profundas con topología, geometría y computación.

---

## 1. Grafos Planares: Fundamentos

### 1.1 Definición y Propiedades Básicas

Un grafo $G = (V, E)$ es **planar** (o plano) si puede dibujarse en el plano $\mathbb{R}^2$ sin que las aristas se intersecten excepto en sus extremos vértices. Este concepto fue formalizado por Euler en 1750 al resolver el problema de los puentes de Königsberg.

**Definición 1.1 (Embedding planar)**: Un embedding planar de un grafo $G$ es una función inyectiva $\phi: V \rightarrow \mathbb{R}^2$ y un homeomorfismo del grafo sobre su imagen que preserva la adyacencia.

La región del plano limitada por aristas se denomina **cara**. Toda representación planar de un grafo conexo satisface la fórmula de Euler.

**Teorema 1.1 (Fórmula de Euler, 1758)**: Para todo grafo planar conexo con $n$ vértices, $m$ aristas y $f$ caras, se cumple:
$$n - m + f = 2$$

*Demostración*: Procedemos por inducción sobre el número de aristas. Para $m = 0$ (un único vértice), $n = 1$, $f = 1$, y $1 - 0 + 1 = 2$. Asumimos el teorema válido para todo grafo con menos de $m$ aristas. Dado un grafo con $m$ aristas, removemos una arista que no sea puente (existe por conectividad). El grafo resultante tiene $n'$ vértices, $m-1$ aristas y $f'$ caras. Por inducción, $n' - (m-1) + f' = 2$. Al restaurar la arista, si era un puente, divide una cara en dos ($f = f' + 1$); si no lo era, une dos caras en una ($f = f' - 1$). En ambos casos, $n - m + f = 2$. $\square$

### 1.2 Cotas para Grafos Planares

**Teorema 1.2 (Cota de aristas)**: Todo grafo planar con $n \geq 3$ vértices satisfies $m \leq 3n - 6$.

*Demostración*: Por la fórmula de Euler, $f = 2 - n + m$. Cada cara tiene al menos 3 aristas en su borde (grafos simples, sin loops ni aristas múltiples). Sumando aristas sobre todas las caras, cada arista se cuenta dos veces:
$$2m \geq 3f = 3(2 - n + m) = 6 - 3n + 3m$$
Manipulando: $2m \geq 6 - 3n + 3m \implies -m \geq 6 - 3n \implies m \leq 3n - 6$. $\square$

**Corolario 1.2.1**: Todo grafo planar tiene un vértice de grado a lo sumo 5.

*Demostración*: Asumiendo lo contrario, sea $\delta \geq 6$. Sumando grados:
$$2m = \sum_{v \in V} \deg(v) \geq n \cdot 6 = 6n$$
Pero por el teorema anterior, $m \leq 3n - 6$, luego:
$$2(3n - 6) \geq 6n \implies 6n - 12 \geq 6n \implies -12 \geq 0$$
Contradicción. $\square$

**Teorema 1.3 (Grafos sin triángulos)**: Si $G$ es planar y no contiene ciclos de longitud 3, entonces $m \leq 2n - 4$.

*Demostración*: Sin triángulos, cada cara tiene al menos 4 aristas en su borde. Luego $2m \geq 4f = 4(2 - n + m) = 8 - 4n + 4m$. Despejando: $-2m \geq 8 - 4n \implies m \leq 2n - 4$. $\square$

### 1.3 Caracterización de Kuratowski

El teorema de Kuratowski (1930) proporciona una caracterización estructural completa de grafos planares.

**Teorema 1.4 (Teorema de Kuratowski)**: Un grafo es planar si y solo si no contiene una subdivisión de $K_5$ ni de $K_{3,3}$.

*Demostración* (esquema): ($\Rightarrow$) Si $G$ contiene una subdivisión de $K_5$ o $K_{3,3}$, no puede ser planar porque ambos grafos son no planares (demostrable por la fórmula de Euler o el teorema de Wagner).

($\Leftarrow$) La demostración directa es constructiva. Sea $G$ un grafo no planar minimal (sin grafos no planares propios). Por el teorema de Wagner, si no contiene $K_5$ ni $K_{3,3}$ como menor, entonces es planar. La prueba proceeds por análisis de casos basado en la estructura de $G$, mostrando que cualquier grafo sin estos menores debe contener un vértice de grado ≤ 5 (por el corolario anterior), y可通过 eliminación de vértices llegar a un grafo planar. La prueba original de Kuratowski usa argumentos topológicos sobre embeddings de grafos en el plano. $\square$

**Definición 1.2 (Subdivisión)**: Una subdivisión de un grafo $H$ es el grafo obtenido de $H$ reemplazando aristas por caminos de longitud ≥ 1.

**Corolario 1.4.1**: $K_5$ y $K_{3,3}$ son los menores prohibidos mínimos para planaridad.

### 1.4 Teorema de Wagner

**Teorema 1.5 (Teorema de Wagner, 1937)**: Los únicos menores prohibidos para planaridad son $K_5$ y $K_{3,3}$. Esto es, un grafo es planar si y solo si no contiene a $K_5$ ni $K_{3,3}$ como menor.

*Demostración*: Claramente, si $G$ contiene a $K_5$ o $K_{3,3}$ como menor, no es planar (contracción de aristas preserva planaridad hacia atrás). La dirección inversa requiere mostrar que todo grafo no planar contiene uno de estos dos como menor. Esto fue demostrado independientemente por Wagner y por la prueba computacional de Robertson-Seymour del "graph minor theorem". La prueba de Wagner usa argumentos de embedding en superficies de género superior. $\square$

---

## 2. Coloración de Grafos Planos

### 2.1 Teorema de los Cinco Colores

**Teorema 2.1 (Kempe-Heawood, 1890)**: Todo grafo planar es 5-coloreable.

*Demostración*: Por inducción sobre el número de vértices. Por el corolario 1.2.1, existe un vértice $v$ con grado ≤ 5. Removemos $v$, el grafo resultante $G - v$ es 5-coloreable por hipótesis inductiva. Si $\deg(v) < 5$, podemos colorear $v$ con un color no usado por sus vecinos. Si $\deg(v) = 5$, los 5 vecinos usan a lo sumo 4 colores (por el principio del palomar, dos deben compartir color). Si los vecinos usan 4 colores, $v$ puede usar el quinto. Si usan 5 colores diferentes, entonces por el argumento de Kempe podemos reacomodar los colores: considerando el componente monocromático que contiene el vecino con el mismo color que otro vecino, podemos intercambiar colores a lo largo de este camino y liberar un color para $v$. $\square$

### 2.2 Teorema de los Cuatro Colores

**Teorema 2.2 (Appel-Haken, 1976)**: Todo grafo planar es 4-coloreable.

*Demostración*: Este teorema tiene una historia única en matemáticas. La primera prueba de Kempe (1879) fue aceptada durante 11 años hasta que Heawood encontró un error. La demostración completa fue lograda por Appel y Haken en 1976, usando verificación asistida por computadora de 1476 casos reducibles y 823 configuraciones reducibles. La prueba fue controversial por su dependencia de computación masiva, y llevó al desarrollo de técnicas de prueba asistida por computadora.

Una prueba más简洁 fue desarrollada por Robertson, Sanders, Seymour y Thomas (1994), con solo 633 configuraciones reducibles verificables computacionalmente.

La conjetura equivalente en términos de coloración de mapas fue formulada por Francis Guthrie en 1852. $\square$

### 2.3 Número Cromático del Plano

**Teorema 2.3 (Número cromático del plano)**: El número cromático del plano $\chi(\mathbb{R}^2)$ satisfy $4 \leq \chi(\mathbb{R}^2) \leq 7$.

*Demostración*: La cota inferior 4 viene del hecho de que $K_4$ puede嵌入se en el plano sin cruces, luego se necesitan al menos 4 colores para algunos grafos planos. Un ejemplo famous es el mapa de las provincias de Australia (usando 4 colores en el mapa original). La cota superior 7 fue probada por el teorema de los 4 colores (todo grafo planar es 4-coloreable). La pregunta exacta permanece abierta: $\chi(\mathbb{R}^2) = 4$ o es mayor? $\square$

---

## 3. Embedding y Dualidad

### 3.1 Grafos Duales

**Definición 3.1 (Grafo dual)**: Para un grafo planar $G$ con embedding fijo, el grafo dual $G^*$ tiene:
- Un vértice por cada cara de $G$
- Una arista por cada arista de $G$, conectando las dos caras que separa
- Un loop en $G^*$ por cada puente de $G$

**Teorema 3.1 (Propiedades del dual)**: Para todo grafo planar $G$:
1. $(G^*)^*$ es isomorphic a $G$ si y solo si $G$ es 2-conexo
2. $G$ es euleriano si y solo si $G^*$ es bipartito

*Demostración*: (1) Si $G$ tiene cut-vertices, la operación de dualidad identifica faces, creando un Grafo con menos vértices que el original. (2) Un grafo es euleriano iff tiene un trail euleriano, que corresponde a un ciclo en el dual que no repite aristas. Tal ciclo existe iff el dual no tiene ciclos de longitud impar, luego es bipartito. $\square$

### 3.2 Dualidad y Teorema de Euler

La dualidad proporciona una perspectiva alternativa sobre la fórmula de Euler. Sea $G$ un grafo planar con $n$ vértices, $m$ aristas, $f$ faces, y sea $G^*$ su dual con $n^*$ vértices, $m^*$ aristas. Entonces:
- $n^* = f$
- $m^* = m$
- Las caras de $G^*$ corresponden a los vértices de $G$

La fórmula de Euler para $G^*$ es $f - m + n = 2$, idéntica a la original.

---

## 4. Teoría de Menores

### 4.1 Conceptos Fundamentales

**Definición 4.1 (Menor de un grafo)**: $H$ es un menor de $G$ si $H$ puede obtenerse de $G$ por una secuencia de operaciones de:
- Remoción de aristas
- Remoción de vértices
- Contracción de aristas

**Teorema 4.1 (Teorema de Robertson-Seymour, Graph Minor Theorem)**: En toda familia cerrada por menores de grafos, existe un conjunto finito de menores prohibidos.

*Demostración*: Este teorema (2004) fue probado por Robertson y Seymour después de 20 años de trabajo. Afirma que cualquier familia de grafos que es cerrada bajo operaciones de menores (si $G$ está en la familia y $H$ es menor de $G$, entonces $H$ está en la familia) tiene un conjunto finito de minors mínimos que la caracterizan. Para planaridad, estos menores son $K_5$ y $K_{3,3}$. $\square$

### 4.2 treewidth y Planaridad

**Teorema 4.2 (treewidth de grafos planares)**: Todo grafo planar de $n$ vértices tiene treewidth $O(\sqrt{n})$.

*Demostración*: El treewidth de un grafo planar puede bounded usando la embedding del grafo. Un embedding planar permite construir un tree decomposition de ancho $O(\sqrt{n})$ mediante la técnica de "grids". Baker (1994) dio una construcción explícita. Este resultado tiene aplicaciones importantes en algoritmos exponenciales para grafos planares (scheme de Baker). $\square$

---

## 5. Direcciones de Investigación y Problemas Abiertos

### 5.1 Problemas Abiertos Clásicos

1. **Conjetura de Hadwiger**: Si $\chi(G) \geq r$, entonces $G$ contiene a $K_r$ como menor. Esta conjetura generaliza el teorema de los cuatro colores (caso $r=4$) y permanece abierta para $r \geq 5$.

2. **Número cromático del plano**: determinar exactamente si $\chi(\mathbb{R}^2) = 4$ o mayor. El límite inferior es 4, pero la pregunta precisa sigue sin resolverse.

3. **Conjetura de Wagner**: ¿Es $K_{3,3}$ el único menor crítico para planaridad besides $K_5$?

### 5.2 Problemas de Investigación Activa

- **Planaridad testing en tiempo lineal**: El algoritmo de Boyer-Myrvold (2004) proporciona $O(n)$ planaridad testing con implementación práctica eficiente.

- **Embeddings aleatorios**: Estudiar propiedades estadísticas de embeddings planares aleatorios y su relación con la geometría de grafos.

- **Grafos en otras superficies**: La teoría de grafos en superficies de género superior ($S_g$, $g > 0$) tiene aplicaciones en topología computacional y design de redes.

- **Parameterized complexity**: Problemas como vertex cover, domination, y coloring en grafos planares tienen algoritmos con complejidad mejorada usando el parámetro treewidth.

---

## 6. Ejercicios

### Ejercicio 1
Probar que $K_5$ no es planar usando la fórmula de Euler. Demostrar que cualquier subdivisión de $K_5$ tampoco es planar.

### Ejercicio 2
Demostrar que todo grafo planar sin triángulos tiene $m \leq 2n - 4$. Proporcionar un ejemplo que alcance esta cota.

### Ejercicio 3
Explicar el teorema de Robertson sobre minors de grafos y su relación con la caracterización de Kuratowski. Por qué es importante en teoría de grafos?

### Ejercicio 4
Construir el dual del cubo $Q_3$ (grafo de los vértices de un cubo). Verificar que satisface las propiedades duales esperadas.

### Ejercicio 5
Demostrar que el problema de los cuatro colores requiere análisis computacional intensivo. Por qué la prueba de Appel-Haken fue controversial?

### Ejercicio 6
Sea $G$ un grafo planar con $n$ vértices, $m$ aristas y grado mínimo $\delta \geq 3$. Demostrar que $m \geq \frac{\delta}{2} n$. Usar esto para probar que todo grafo planar tiene un vértice de grado ≤ 5.

### Ejercicio 7
Demostrar el teorema de Wagner: que los únicos menores prohibidos para planaridad son $K_5$ y $K_{3,3}$. Esbozar los pasos principales de la demostración.

### Ejercicio 8
Caracterizar los grafos planares que son autoduales (isomorfos a su dual). Dar ejemplos y propiedades.

### Ejercicio 9
Sea $G$ un grafo planar triangulation (cada cara es un triángulo). Demostrar que $m = 3n - 6$ y que $G$ es 3-regular iff es el grafo de un poliedro convexo.

### Ejercicio 10
Analizar la relación entre treewidth y planaridad. Por qué los grafos planares tienen treewidth $O(\sqrt{n})$ y cuáles son las implicaciones algorítmicas?

### Ejercicio 11
Sea $G$ un grafo planar y $k$ un entero positivo. Demostrar que el problema de decidir si $\chi(G) \leq k$ es polinomial para $k \leq 3$ (por qué?), pero NP-completo para $k \geq 4$.

### Ejercicio 12
Demostrar que el número cromático de cualquier grafo planar sin ciclos de longitud impar es a lo sumo 3. Construir un ejemplo que muestre que el bound es tight.

### Ejercicio 13
Sea $G$ un grafo planar con embedding fijo. Demostrar que existe un ciclo que separa el grafo en dos partes con al menos $n/2$ vértices cada una (teorema de Li y Tahor).

### Ejercicio 14
Analizar la complejidad del problema de planaridad testing. Describir el algoritmo de Boyer-Myrvold y sus características principales.

### Ejercicio 15
Sea $G$ un grafo planar y $H$ un menor de $G$. Demostrar que $\chi(H) \leq \chi(G)$. Usar esto para dar una prueba alternativa de que $K_5$ y $K_{3,3}$ no pueden ser minor de ningún grafo planar con número cromático 4.

---

## 7. Soluciones

### Solución Ejercicio 1
Para $K_5$, tenemos $n = 5$, $m = 10$. Si fuera planar, por el teorema 1.2 tendríamos $m \leq 3n - 6 = 9$, contradiction. Para subdivisiones, una subdivisión preserva menores: si $K_5$ es menor de $G$, cualquier subdivisión de $K_5$ también es menor de $G$. Como la planaridad es cerrada bajo menores (contracción preserva planaridad), si $G$ contiene una subdivisión de $K_5$, no puede ser planar. $\square$

### Solución Ejercicio 6
Sea $\delta = \min_{v \in V} \deg(v)$. Por el teorema de handshake:
$$2m = \sum_{v \in V} \deg(v) \geq n \cdot \delta$$
Luego $m \geq \frac{\delta}{2} n$. Para grafos planares con $\delta \geq 3$, $m \geq \frac{3}{2} n$. Combinando con $m \leq 3n - 6$:
$$\frac{3}{2} n \leq 3n - 6 \implies \frac{3}{2} n \leq 3n - 6 \implies 6 \leq 3n \implies n \geq 2$$

Ahora demostramos que existe un vértice de grado ≤ 5. Asumamos $\deg(v) \geq 6$ para todo $v$. Sumando:
$$2m = \sum \deg(v) \geq 6n \implies m \geq 3n$$
Contradicción con $m \leq 3n - 6$ para $n \geq 3$. $\square$

### Solución Ejercicio 9
En una triangulación, toda cara tiene exactamente 3 aristas en su borde. Sumando sobre todas las caras: $\sum_{\text{faces}} 3 = 3f$. Cada arista pertenece a exactamente 2 caras, luego $3f = 2m$. Por Euler: $f = 2 - n + m$. Sustituyendo: $3(2 - n + m) = 2m \implies 6 - 3n + 3m = 2m \implies m = 3n - 6$.

Para triangulaciones 3-regulares: por handshake, $3n = 2m = 2(3n - 6) = 6n - 12$, luego $3n = 6n - 12$, dando $n = 4$, $m = 6$. Este es $K_4$, que corresponde al tetraedro. Este resultado se extiende: los poliedros platónicos corresponden a triangulaciones 3-regulares con symmetries máximos. $\square$

### Solución Ejercicio 11
Para $k \leq 3$: un grafo planar con número cromático ≤ 3 es bipartito más un vértice si $\chi = 3$. El testing puede hacerse en tiempo lineal usando testing de bipartititud y algoritmos de 3-coloración específicos para grafos planares.

Para $k \geq 4$: el problema de 4-coloración en grafos planares es polinomial (teorema de Appel-Haken). Sin embargo, el problema de decidir si $\chi(G) \leq k$ para $k \geq 4$ en grafos arbitrary es NP-completo. Para grafos planares de genus fijo $g > 0$, el problema se vuelve NP-completo para todo $k \geq 3$ (dado que grafos de género alto pueden simular grafos arbitrary). $\square$

---

## Referencias

1. Diestel, R. (2017). *Graph Theory* (5th ed.). Springer.

2. Tutte, W.T. (1984). *Graph Theory*. Cambridge University Press.

3. Saaty, T.L.; Kainen, P.C. (1986). *The Four-Color Problem: Assaults and Conquest*. Dover Publications.

4. Kuratowski, K. (1930). "Sur le problème des courbes gauches en топология". *Fundamenta Mathematicae*, 15, 271-283.

5. Wagner, K. (1937). "Über eine Eigenschaft der ebenen Komplexe". *Mathematische Annalen*, 114, 570-590.

6. Robertson, N.; Seymour, P. (2004). "Graph Minors. XX. Wagner's Conjecture". *Journal of Combinatorial Theory, Series B*, 92(2), 325-357.

7. Appel, K.; Haken, W. (1976). "Every planar map is four colorable". *Illinois Journal of Mathematics*, 20(3), 429-490.

8. Robertson, N.; Sanders, D.; Seymour, P.; Thomas, R. (1997). "The four-color theorem". *Journal of Combinatorial Theory, Series B*, 70(1), 2-44.

9. Boyer, J.M.; Myrvold, W.J. (2004). "On the cutting edge: Simplified O(n) planarity testing by edge addition". *Journal of Graph Algorithms and Applications*, 8(3), 241-273.

10. Baker, B.S. (1994). "Approximation algorithms for NP-complete problems on planar graphs". *Journal of the ACM*, 41(1), 153-180.