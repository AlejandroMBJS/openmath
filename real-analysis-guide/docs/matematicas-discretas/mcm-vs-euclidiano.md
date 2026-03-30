# MCM vs Algoritmo Euclidiano

## Objetivo del tema

Comparar el cálculo del mínimo común múltiplo (MCM) y el máximo común divisor (MCD) usando el algoritmo euclidiano, y entender sus relaciones.

## 1. MCD (Maximo Común Divisor)

### 1.1 Definición

El MCD de $a$ y $b$ es el mayor entero que divide a ambos:
$$\text{mcd}(a, b) = \max\{d : d|a \text{ y } d|b\}$$

### 1.2 Algoritmo euclidiano

El algoritmo de Euclides usa divisiones sucesivas:

```
función mcd(a, b):
    mientras b ≠ 0:
        r = a mod b
        a = b
        b = r
    retornar |a|
```

### 1.3 Complejidad

$O(\log \min(a, b))$ divisiones.

## 2. MCM (Minimo Común Múltiplo)

### 2.1 Definición

El MCM de $a$ y $b$ es el menor múltiplo positivo común:
$$\text{mcm}(a, b) = \min\{m > 0 : a|m \text{ y } b|m\}$$

### 2.2 Cálculo directo

$$\text{mcm}(a, b) = \frac{|a \cdot b|}{\text{mcd}(a, b)}$$

### 2.3 Algoritmo alternativo

```
función mcm(a, b):
    return (a * b) / mcd(a, b)
```

## 3. Relación entre MCD y MCM

### 3.1 Identidad fundamental

$$\text{mcd}(a, b) \cdot \text{mcm}(a, b) = |a \cdot b|$$

### 3.2 Corolario

$$\text{mcm}(a, b) = \frac{|a \cdot b|}{\text{mcd}(a, b)}$$

### 3.3 Propiedades

- $\text{mcd}(a, b) = \text{mcd}(b, a)$
- $\text{mcd}(a, b) = \text{mcd}(a - b, b)$
- $\text{mcd}(ka, kb) = |k| \cdot \text{mcd}(a, b)$

## 4. Algoritmo euclidiano extendido

### 4.1 Objetivo

Encontrar coefficients $x, y$ tales que:
$$\text{mcd}(a, b) = ax + by$$

### 4.2 Algoritmo

```
función mcd_extendido(a, b):
    si b == 0:
        retornar (a, 1, 0)
    sino:
        (d, x1, y1) = mcd_extendido(b, a mod b)
        x = y1
        y = x1 - (a div b) * y1
        retornar (d, x, y)
```

## 5. Aplicaciones

### 5.1 Simplificación de fracciones

$$\frac{a}{b} = \frac{a / \text{mcd}(a,b)}{b / \text{mcd}(a,b)}$$

### 5.2 Ecuaciones diofánticas

Resolver $ax + by = c$ tiene solución si $\text{mcd}(a,b) | c$.

### 5.3 Criptografía

RSA necesita inversos modulares, calculados con el algoritmo extendido.

## 6. Ejercicios

### Ejercicio 1

Calcular $\text{mcd}(48, 18)$ y $\text{mcm}(48, 18)$.

### Ejercicio 2

Verificar que $\text{mcd} \cdot \text{mcm} = ab$ para $a = 12$, $b = 15$.

### Ejercicio 3

Usar el algoritmo euclidiano para encontrar $\text{mcd}(111, 72)$.

### Ejercicio 4

Calcular el inverso de $17 \pmod{43}$ usando el algoritmo extendido.

### Ejercicio 5

Simplificar la fracción $48/18$.

### Ejercicio 6

Determinar si $17x + 43y = 5$ tiene solución entera.

### Ejercicio 7

Calcular $\text{mcd}(123456, 789)$ usando Euclides.

### Ejercicio 8

Encontrar $\text{mcm}(8, 12, 16)$.

### Ejercicio 9

Verificar que $\text{mcd}(a, 0) = |a|$.

### Ejercicio 10

Calcular el inverso de $3 \pmod{11}$ usando el algoritmo extendido.

### Ejercicio 11

Explicar por qué el algoritmo euclidiano siempre termina.

### Ejercicio 12

Encontrar $x, y$ tales que $\text{mcd}(56, 15) = 56x + 15y$.

### Ejercicio 13

Calcular el MCM de 24 y 36 usando la relación con el MCD.

### Ejercicio 14

Determinar si $6x + 9y = 7$ tiene solución.

### Ejercicio 15

Calcular el MCD de tres números usando el algoritmo euclidiano anidado.

## Soluciones

### Solución 1

$\text{mcd}(48, 18) = 6$

$\text{mcm}(48, 18) = 48 \cdot 18 / 6 = 144$

Verificación: $6 \cdot 144 = 864 = 48 \cdot 18$

### Solución 2

$\text{mcd}(12, 15) = 3$

$\text{mcm}(12, 15) = 12 \cdot 15 / 3 = 60$

$3 \cdot 60 = 180 = 12 \cdot 15$. Verificado.

### Solución 3

$111 = 72(1) + 39$

$72 = 39(1) + 33$

$39 = 33(1) + 6$

$33 = 6(5) + 3$

$6 = 3(2) + 0$

$\text{mcd} = 3$

### Sololución 4

Usando algoritmo extendido: el inverso de 17 mód 43 es 5 (verificando $17 \cdot 5 = 85 \equiv -1$).

### Solución 5

$\text{mcd}(48, 18) = 6$

$48/6 = 8$, $18/6 = 3$, entonces $48/18 = 8/3$

### Solución 6

$\text{mcd}(17, 43) = 1$, y $1 | 5$, entonces SÍ tiene solución.

### Solución 7

$123456 = 789(156) + 372$

$789 = 372(2) + 45$

$372 = 45(8) + 12$

$45 = 12(3) + 9$

$12 = 9(1) + 3$

$9 = 3(3) + 0$

$\text{mcd} = 3$

### Solución 8

$\text{mcm}(8, 12) = 24$

$\text{mcm}(24, 16) = 48$

### Solución 9

Todo número divide a 0, el mayor es $|a|$.

### Solución 10

$3 \cdot 4 = 12 \equiv 1 \pmod{11}$, inverso es 4.

### Solución 11

En cada iteración $a \geq b$ y $a \mod b < b$, entonces los números decrecen estrictamente.

### Solución 12

$\text{mcd}(56, 15) = 1 = 56(-4) + 15(15)$

### Solución 13

$\text{mcd}(24, 36) = 12$

$\text{mcm} = 24 \cdot 36 / 12 = 72$

### Solución 14

$\text{mcd}(6, 9) = 3$, y $3 \nmid 7$, entonces NO tiene solución.

### Solución 15

$\text{mcd}(a, b, c) = \text{mcd}(\text{mcd}(a, b), c)$

---

## Direcciones de Investigación y Problemas Abiertos

### 1. Algoritmo Euclidiano y Extensiones

- **Algoritmo Euclidiano extendido**: Encontrar coeficientes de Bézout eficientemente
- **Complejidad del algoritmo**: Análisis del número de iteraciones

### 2. Aplicaciones en Criptografía

- **RSA**: Fundamentado en la dificultad de factorizar números grandes
- **Criptografía de curvas elípticas**: Uso de operaciones sobre grupos

### 3. Problemas Abiertos

1. ¿Cuál es la complejidad exacta del algoritmo euclidiano?
2. ¿Cómo optimizar para números muy grandes?
3. ¿Existen algoritmos cuánticos eficientes para MCD?

---

## Referencias

1. Hardy, G.H.; Wright, E.M. (2008). *An Introduction to the Theory of Numbers* (6th ed.). Oxford University Press.

2. Niven, I.; Zuckerman, H.S.; Montgomery, H.L. (1991). *An Introduction to the Theory of Numbers* (5th ed.). Wiley.

3. Rosen, K.H. (2018). *Discrete Mathematics and Its Applications* (8th ed.). McGraw-Hill.

4. Cormen, T.H.; Leiserson, C.E.; Rivest, R.L.; Stein, C. (2009). *Introduction to Algorithms* (3rd ed.). MIT Press.

5. Bach, E.; Shallit, J. (1996). *Algorithmic Number Theory*. MIT Press.
