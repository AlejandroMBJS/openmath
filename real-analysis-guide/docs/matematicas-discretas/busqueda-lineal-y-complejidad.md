# Búsqueda Lineal y Complejidad

## Objetivo del tema

Análisis riguroso del algoritmo de búsqueda lineal y fundamentos del análisis de complejidad computacional. Este tema cubre aspectos fundamentales de la teoría de algoritmos, incluyendo análisis asintótico, análisis amortizado, lower bounds y técnicas avanzadas de análisis probabilístico.

---

## 1. Búsqueda Lineal

### 1.1 Algoritmo y Variantes

El algoritmo de búsqueda lineal (linear search) constituye el método más básico para encontrar un elemento en una secuencia no ordenada. Presentamos aquí la versión estándar y una optimización mediante centinela.

**Algoritmo Estándar:**

```python
def linear_search(A, n, x):
    for i in range(n):
        if A[i] == x:
            return i
    return -1
```

**Algoritmo con Centinela:**

```python
def linear_search_sentinel(A, n, x):
    last = A[n-1]
    A[n-1] = x
    i = 0
    while A[i] != x:
        i += 1
    A[n-1] = last
    if i < n-1 or A[n-1] == x:
        return i
    return -1
```

### 1.2 Análisis de Complejidad

**Teorema 1.1 (Complejidad en el peor caso)**: El algoritmo de búsqueda lineal tiene complejidad $\Theta(n)$ en el peor caso.

*Demostración*: En el peor caso, el elemento buscado no existe en el array o se encuentra en la última posición. En ambos escenarios, el algoritmo debe examinar todos los $n$ elementos, realizando exactamente $n$ comparaciones. Por definición de notación asintótica, esto corresponde a $\Theta(n)$. $\square$

**Teorema 1.2 (Complejidad en el mejor caso)**: El algoritmo de búsqueda lineal tiene complejidad $\Theta(1)$ en el mejor caso.

*Demostración*: El mejor caso ocurre cuando el elemento buscado se encuentra en la primera posición del array. En este escenario, el algoritmo realiza exactamente una comparación y termina. El tiempo de ejecución es constante, hence $\Theta(1)$. $\square$

**Teorema 1.3 (Complejidad en el caso promedio)**: Para un array de $n$ elementos con distribución uniforme del elemento buscado, el caso promedio de búsqueda lineal es $\Theta(n)$.

*Demostración*: Suponemos que el elemento existe y que su posición está uniformemente distribuida entre las $n$ posiciones. Sea $X$ la variable aleatoria que representa el número de comparaciones realizadas. Entonces:

$$\mathbb{E}[X] = \sum_{i=1}^{n} i \cdot \Pr(\text{elemento en posición } i) = \sum_{i=1}^{n} i \cdot \frac{1}{n} = \frac{1}{n} \cdot \frac{n(n+1)}{2} = \frac{n+1}{2}$$

Para el caso donde el elemento puede no existir, definimos $p$ como la probabilidad de que el elemento esté presente. El número esperado de comparaciones es entonces:

$$\mathbb{E}[X] = p \cdot \frac{n+1}{2} + (1-p) \cdot n$$

En ambos casos, el término dominante es $n$, luego $\mathbb{E}[X] = \Theta(n)$. $\square$

### 1.3 Optimización con Centinela

**Teorema 1.4 (Mejora asintótica del centinela)**: El algoritmo de búsqueda con centinela realiza exactamente $n+1$ comparaciones en el peor caso, comparado con $2n$ comparaciones del algoritmo estándar cuando el elemento no existe.

*Demostración*: En el algoritmo estándar, para cada iteración verificamos dos condiciones: (1) si $i < n$ y (2) si $A[i] == x$, resultando en $2n$ comparaciones cuando el elemento no existe. El algoritmo con centinela elimina la verificación de Bounds al colocar el elemento buscado en la última posición, reduciendo a exactamente $n+1$ comparaciones: $n$ comparaciones del ciclo while más 1 comparación final para verificar si encontramos el elemento o si era el centinela. $\square$

---

## 2. Análisis Amortizado

El análisis amortizado proporciona una visión diferente del costo computacional, considerando el costo total de una secuencia de operaciones en lugar del costo individual de cada operación.

### 2.1 Método Agregado

**Teorema 2.1 (Costo amortizado)**: Sea $T(n)$ el costo total de $n$ operaciones. El costo amortizado por operación es $T(n)/n$.

*Demostración*: Esta definición emerge directamente del principio de promediación. Para una secuencia de operaciones $o_1, o_2, \ldots, o_n$ con costos $c_1, c_2, \ldots, c_n$, el costo total es $T(n) = \sum_{i=1}^{n} c_i$. El costo amortizado $\hat{c} = T(n)/n$ representa el costo promedio por operación en la secuencia completa. Este método es particularmente útil cuando algunas operaciones son costosas pero infrecuentes. $\square$

**Ejemplo 2.1 (Incremento de contador binario)**: Consideremos un contador binario que incrementa de $0$ a $2^k - 1$. El costo total de $n$ incrementos es $O(n \log n)$, hence el costo amortizado es $O(\log n)$.

*Demostración*: En un contador de $k$ bits, el bit menos significativo cambia en cada incremento (1 operación), el segundo bit cambia cada 2 incrementos (1/2 operaciones en promedio), y así sucesivamente. El número promedio de cambios por incremento es:
$$\frac{1}{2^0} + \frac{1}{2^1} + \cdots + \frac{1}{2^{k-1}} = 2 - \frac{1}{2^{k-1}} < 2$$

Para $n$ incrementos, el costo total es menor que $2n$, hence $\Theta(n)$. Sin embargo, cuando，我们需要 considerar que cada bit tiene un costo de operación, el costo total después de $n$ incrementos es $\sum_{i=0}^{k-1} \lfloor n/2^i \rfloor = O(n \log n)$. $\square$

### 2.2 Método del Potencial

**Teorema 2.2 (Costo amortizado via potencial)**: Sea $\Phi$ una función de potencial sobre los estados del数据结构. El costo amortizado de la operación $i$ está dado por:
$$\hat{c}_i = c_i + \Phi(s_i) - \Phi(s_{i-1})$$

donde $c_i$ es el costo real y $s_i$ es el estado después de la operación $i$.

*Demostración*: Sumando sobre $n$ operaciones:
$$\sum_{i=1}^{n} \hat{c}_i = \sum_{i=1}^{n} c_i + \Phi(s_n) - \Phi(s_0)$$

Si $\Phi(s_n) \geq \Phi(s_0)$, entonces $\sum \hat{c}_i \geq \sum c_i$, y el costo amortizado proporciona una cota superior. Este método permite asignar "crédito" a operaciones baratoas para pagar operaciones costosas futuras. $\square$

**Ejemplo 2.2 (Stack con operación multipop)**: En una pila con operaciones push, pop y multipop (pop de k elementos), el costo amortizado de cada operación es $O(1)$.

*Demostración*: Definimos $\Phi$ como el número de elementos en la pila. Para push con costo 1:
$$\hat{c}_{push} = 1 + (s+1) - s = 2$$

Para pop con costo 1:
$$\hat{c}_{pop} = 1 + (s-1) - s = 0$$

Para multipop que remueve $k$ elementos:
$$\hat{c}_{multipop} = k + (s-k) - s = 0$$

El costo amortizado de cada operación es constante, luego el costo total para $n$ operaciones es $O(n)$. $\square$

### 2.3 Método Contable

**Teorema 2.3 (Análisis contable)**: Asignamos créditos a operaciones individuales tales que el crédito asignado cubra el costo real. El crédito total剩余 representa el costo amortizado.

*Demostración*: Sea $c_i$ el costo real de la operación $i$ y $\tilde{c}_i$ el crédito asignado. Requerimos $\sum \tilde{c}_i \geq \sum c_i$. El costo amortizado es $\sum \tilde{c}_i / n$. Este método es equivalente al método del potencial cuando $\Phi(s_i) = \sum_{j=1}^{i} (\tilde{c}_j - c_j)$. $\square$

---

## 3. Lower Bounds

Los lower bounds establecen límites fundamentales sobre lo que ningún algoritmo puede lograr, proporcionando un marco para evaluar la optimalidad de nuestros diseños.

### 3.1 Árbol de Decisión

**Teorema 3.1 (Lower bound para búsqueda lineal)**: Cualquier algoritmo de búsqueda que examine el array secuencialmente requiere $\Omega(n)$ comparaciones en el peor caso.

*Demostración*: Consideremos el árbol de decisión asociado al algoritmo. Cada posible ejecución corresponde a una raíz-hoja en este árbol. Para búsqueda en un array de $n$ elementos, hay $n+1$ posibles resultados: el índice donde se encuentra el elemento (si existe) o "no encontrado". El árbol debe tener al menos $n+1$ hojas. Un árbol binario de profundidad $d$ tiene a lo sumo $2^d$ hojas. Luego, debemos tener $2^d \geq n+1$, lo que implica $d \geq \lceil \log_2(n+1) \rceil$. Sin embargo, este lower bound es para comparación de elementos específicos. Para búsqueda lineal específicamente, el modelo permite solo comparaciones de igualdad secuenciales, forzando $\Omega(n)$. $\square$

**Teorema 3.2 (Lower bound para búsqueda en arrays ordenados)**: El lower bound para búsqueda en arrays ordenados es $\Omega(\log n)$ comparaciones.

*Demostración*: Con comparaciones de tipo "<", el algoritmo puede determinar la posición mediante preguntas de tipo "is x < A[mid]?". Este modelo de decisión binario produce un árbol de decisión binario. Con $n$ elementos, hay $n+1$ hojas posibles (una por cada posición de inserción más "no encontrado"). Luego $2^h \geq n+1$, luego $h \geq \log_2(n+1) = \Omega(\log n)$. Este bound es tight, alcanzado por búsqueda binaria. $\square$

### 3.2 Modelo de Computación

**Teorema 3.3 (Lower bound en modelo de comparación)**: Para problemas de búsqueda en el modelo de comparación, el lower bound es $\Omega(\log n)$.

*Demostración*: El modelo de comparación permite solo operaciones que comparan dos elementos (menor que, igual a). Este modelo es suficiente para capturar la esencia de la búsqueda. La información necesaria para determinar la respuesta es $\log_2(n+1)$ bits (el índice o "no encontrado"). Cada comparación aporta a lo sumo 1 bit de información. Luego se necesitan al menos $\Omega(\log n)$ comparaciones. $\square$

### 3.3 Adversario Informado

**Teorema 3.4 (Construcción adversaria)**: Existe un adversario que puede forzar $\Omega(n)$ comparaciones para cualquier algoritmo de búsqueda lineal.

*Demostración*: El adversario mantiene un elemento no descubierto $x$. Cuando el algoritmo pregunta "¿A[i] = x?", el adversario responde "no" hasta que el algoritmo haya examinado todos los elementos. Solo al final, si el algoritmo pregunta por el último elemento, el adversario revela si $x$ estaba presente. Este argumento muestra que ningún algoritmo puede guarantees better than linear performance en el peor caso. $\square$

---

## 4. Resultados Avanzados y Extensions

### 4.1 Búsqueda Bidireccional

**Teorema 4.1 (Análisis de búsqueda bidireccional)**: La búsqueda bidireccional (buscar desde ambos extremos) tiene complejidad $O(n/2)$ en promedio, pero $\Theta(n)$ en el peor caso.

*Demostración*: Asumiendo distribución uniforme, la posición esperada del elemento es $n/2$ desde cualquier extremo. La distancia promedio desde el extremo más cercano es $n/4$, giving $\Theta(n/2)$ en promedio. Sin embargo, si el elemento está en la posición media-oeste, ambas búsquedas convergen, y el peor caso sigue siendo $\Theta(n)$. El speedup es solo constante. $\square$

### 4.2 Búsqueda con Saltos

**Teorema 4.2 (Salto optimal)**: Para búsqueda con saltos de tamaño $k$, el costo promedio es $\Theta(n/k + k)$.

*Demostración*: Dividimos el array en bloques de tamaño $k$. Primero localizamos el bloque mediante saltos ( $n/k$ saltos), luego buscamos linealmente dentro del bloque ( $k$ comparaciones en el peor caso). Minimizando $n/k + k$ con respecto a $k$,derivamos $k = \sqrt{n}$, giving $\Theta(\sqrt{n})$. Este es el algoritmo de búsqueda por salto (jump search). $\square$

### 4.3 Análisis Probabilístico

**Teorema 4.3 (Búsqueda lineal con probabilidad geométrica)**: Si la distribución del elemento sigue una distribución geométrica con parámetro $p$, el número esperado de comparaciones es $1/p$.

*Demostración*: Sea $X$ la posición del elemento, con $\Pr(X = i) = (1-p)^{i-1}p$ (distribución geométrica). El número esperado de comparaciones es:
$$\mathbb{E}[X] = \sum_{i=1}^{\infty} i \cdot (1-p)^{i-1} p = \frac{1}{p}$$

Este resultado es fundamentales en análisis de algoritmos probabilísticos y tiene aplicaciones en hashing con probing lineal. $\square$

---

## 5. Direcciones de Investigación y Problemas Abiertos

### 5.1 Complejidad Parametrizada

La búsqueda lineal en su forma básica tiene complejidad $\Theta(n)$. Sin embargo, surgen preguntas interesantes cuando consideramos parámetros adicionales:

- **Búsqueda con costos variables**: Cuando cada comparación tiene un costo diferente (por ejemplo, acceso a memoria no secuencial), el problema de minimización se vuelve más complejo. Este problema está relacionado con la búsqueda óptima en estructuras de datos jerárquicas.

- **Búsqueda con restricciones de memoria**: En modelos con memoria limitada, la búsqueda debe adaptarse. El modelo de memoria de $O(1)$ palabras lleva a diferentes estrategias óptimas.

### 5.2 Problemas Abiertos

1. **Búsqueda óptima con caches**: El diseño de algoritmos que minimizan cache misses mientras mantiene eficiencia temporal permanece como un área activa de investigación.

2. **Búsqueda en datos dinámicos**: Mantener estructuras que soporten búsqueda eficiente bajo inserciones y eliminaciones continuas (como skip lists o bloom filters) presenta desafíos teóricos y prácticos.

3. **Lower bounds quantum**: En el modelo de computación cuántica, el algoritmo de Grover proporciona búsqueda óptima con complejidad $O(\sqrt{n})$, mejorando sobre el bound clásico de $\Omega(n)$. La caracterización completa de cuándo se puede lograr esta mejora permanece en estudio.

---

## 6. Ejercicios

### Ejercicio 1
Implementar búsqueda lineal con centinela y demostrar analíticamente la mejora respecto al algoritmo estándar. Calcular el número exacto de comparaciones en ambos casos para el peor caso.

### Ejercicio 2
Demostrar formalmente que el caso promedio de búsqueda lineal es $\Theta(n)$ cuando el elemento tiene probabilidad $p$ de estar presente y distribución uniforme.

### Ejercicio 3
Analizar el algoritmo de búsqueda bidireccional y demostrar que su complejidad promedio es $\Theta(n/2)$ pero su complejidad en el peor caso permanece $\Theta(n)$.

### Ejercicio 4
Comparar teóricamente búsqueda lineal con búsqueda binaria. En qué condiciones es preferible cada una? Justificar matemáticamente.

### Ejercicio 5
Implementar análisis amortizado para el método de potencial. Aplicarlo al problema del contador binario y demostrar que el costo amortizado es $O(1)$ por incremento.

### Ejercicio 6
Sea $A$ un array de $n$ elementos donde el elemento buscado tiene probabilidad $p_i$ de estar en la posición $i$. Diseñar un algoritmo óptimo que minimice el número esperado de comparaciones y demostrar su optimalidad.

### Ejercicio 7
Demontrar que cualquier algoritmo de búsqueda en el modelo de comparación requiere al menos $\lceil \log_2(n+1) \rceil$ comparaciones en el peor caso. Es este bound tight?

### Ejercicio 8
Analizar la búsqueda con saltos (jump search). Encontrar el tamaño de salto óptimo que minimiza el tiempo total y demostrar que es $\Theta(\sqrt{n})$.

### Ejercicio 9
Considerar un modelo donde cada acceso a memoria tiene costo proporcional a la distancia desde el acceso anterior. Diseñar un algoritmo de búsqueda que minimice el costo total y analizar su complejidad.

### Ejercicio 10
Sea un array circular donde el elemento puede estar en cualquier posición con igual probabilidad. Diseñar un algoritmo que encuentre el elemento en tiempo esperado $O(n/2)$ usando $O(1)$ memoria adicional.

### Ejercicio 11
El problema del límite inferior adaptativo pregunta: dado que el algoritmo puede hacer preguntas adaptativas (basadas en respuestas previas), cuál es el mínimo número de preguntas necesarias en el peor caso? Demostrar que sigue siendo $\Omega(n)$ para búsqueda lineal.

### Ejercicio 12
Considerar el modelo de acceso aleatorio donde el costo de acceder al elemento $i$ después del elemento $j$ es $|i-j|$. Reformular el problema de búsqueda como un problema de optimización de trayectoria y resolverlo.

### Ejercicio 13
Analizar la búsqueda exponencial: comenzar con $i=1$, comparar $A[i]$, luego $i=2,4,8,\ldots$ hasta encontrar el elemento o exceder el límite. Demostrar que su complejidad es $O(\log n)$ promedio cuando el elemento existe cerca del inicio.

### Ejercicio 14
En el modelo de computación cuántica, el algoritmo de Grover proporciona complejidad $O(\sqrt{n})$ para búsqueda no estructurada. Demostrar formalmente que ningún algoritmo cuántico puede lograr mejor que $\Omega(\sqrt{n})$ y explicar por qué esto no contradice el lower bound clásico.

### Ejercicio 15
Diseñar un algoritmo de búsqueda que combine búsqueda lineal y binaria adaptativamente, basado en la entropía de la distribución del elemento. Analizar su comportamiento y demostrar bajo qué condiciones supera a ambos métodos individuales.

---

## 7. Soluciones

### Solución Ejercicio 6
Para minimizar el número esperado de comparaciones, debemos buscar en orden de probabilidad decreciente: primero en la posición con mayor $p_i$, luego la siguiente, etc.

*Demostración de optimalidad*: Sea $\pi$ una permutación de posiciones. El número esperado de comparaciones es:
$$\mathbb{E}[C] = \sum_{i=1}^{n} i \cdot p_{\pi(i)}$$

Para minimizar este valor, los términos $i \cdot p_{\pi(i)}$ deben ser lo más pequeños posible para las probabilidades grandes. Formalmente, por intercambio: si $p_i > p_j$ pero $i > j$, intercambiando las posiciones reduce el valor esperado. Luego el orden óptimo es排序 por probabilidad decreciente.

Este resultado se conoce como "búsqueda por probabilidad" u "optimal搜索" y es un caso especial del principio de optimalidad de Bellman. $\square$

### Solución Ejercicio 8
Para jump search con tamaño de bloque $k$, el número de saltos es $\lceil n/k \rceil$ y la búsqueda lineal dentro del bloque toma a lo sumo $k$ comparaciones. El total es:
$$T(k) = \frac{n}{k} + k$$

Derivando e igualando a cero:
$$\frac{dT}{dk} = -\frac{n}{k^2} + 1 = 0 \implies k = \sqrt{n}$$

Sustituyendo:
$$T(\sqrt{n}) = \frac{n}{\sqrt{n}} + \sqrt{n} = 2\sqrt{n} = \Theta(\sqrt{n})$$

Para el caso continuo, este es el mínimo exacto. Para el caso discreto, $k = \lfloor \sqrt{n} \rfloor$ o $\lceil \sqrt{n} \rceil$ proporciona el optimum. $\square$

### Solución Ejercicio 12
En el modelo de costo de distancia, el costo total de una búsqueda que examina posiciones $i_1, i_2, \ldots, i_m$ es:
$$T = |i_1 - s| + \sum_{j=2}^{m} |i_j - i_{j-1}|$$

donde $s$ es el punto de partida. Para $n$ elementos均匀 distribuido, la estrategia óptima es buscar desde el centro hacia afuera, minimizando la suma de distancias. Este problema se reduce a encontrar el "tour más corto" que visita todos los puntos relevantes, que es un caso especial del problema del vendedor ambulante en una dimensión. La solución óptima tiene complejidad $O(n \log n)$ y la búsqueda converge al centroide de la distribución. $\square$

---

## Referencias

1. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

2. Knuth, D.E. (1997). *The Art of Computer Programming, Volume 3: Sorting and Searching* (2nd ed.). Addison-Wesley.

3. Aho, A.V.; Hopcroft, J.E.; Ullman, J.D. (1974). *The Design and Analysis of Computer Algorithms*. Addison-Wesley.

4. Mehlhorn, K.; Sanders, P. (2008). *Algorithms and Data Structures: The Basic Toolbox*. Springer.

5. Sedgewick, R. (2011). *Algorithms* (4th ed.). Addison-Wesley.

6. Brassard, G.; Bratley, P. (1996). *Algorithmics: Theory & Practice*. Prentice Hall.

7. Grover, L.K. (1996). "A fast quantum mechanical algorithm for database search". *Proceedings of the 28th Annual ACM Symposium on Theory of Computing*, 212-219.

8. Bennett, C.H.; Bernstein, E.; Brassard, G.; Vazirani, U. (1997). "Strengths and weaknesses of quantum computing". *SIAM Journal on Computing*, 26(5), 1510-1523.

9. Fredman, M.L. (1976). "On the decision tree complexity of the element uniqueness problem". *Journal of Computer and System Sciences*, 13(3), 335-339.

10. Ben-Or, M. (1983). "Lower bounds for algebraic computation trees". *Proceedings of the 15th Annual ACM Symposium on Theory of Computing*, 80-86.