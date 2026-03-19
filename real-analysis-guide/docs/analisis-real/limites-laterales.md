---
title: Limites laterales
description: Limites por la izquierda y por la derecha, relacion con el limite bilateral, discontinuidades de salto y clasificacion de discontinuidades. Incluye 15 ejercicios resueltos.
---

# Limites laterales

## 1. Motivacion e intuicion

El limite bilateral $\lim_{x\to a} f(x) = L$ exige que $f(x)$ se acerque a $L$ sin importar por que lado se aproxime $x$ a $a$. Pero muchas funciones se comportan de forma distinta segun si $x$ llega desde la izquierda o desde la derecha. La funcion de Heaviside, por ejemplo, vale $0$ para $x < 0$ y $1$ para $x \geq 0$: el comportamiento es radicalmente distinto segun el lado.

Los limites laterales formalizan esta asimetria. El limite por la derecha $\lim_{x\to a^+} f(x)$ solo mira los valores $x > a$, y el limite por la izquierda $\lim_{x\to a^-} f(x)$ solo mira $x < a$. El limite bilateral existe si y solo si ambos laterales existen y coinciden.

Los limites laterales permiten clasificar las discontinuidades de una funcion: de salto (laterales existen pero difieren), evitable (laterales coinciden pero $f(a)$ difiere o no existe), y esencial (algun lateral no existe).

## 2. Prerrequisitos

**Limite de una funcion.** Definicion $\varepsilon$-$\delta$ de $\lim_{x\to a} f(x) = L$.

**Caracterizacion secuencial.** $\lim_{x\to a} f(x) = L$ sii $f(x_n) \to L$ para toda sucesion $x_n \to a$ con $x_n \neq a$.

**Algebra de limites.** Suma, producto, cociente de limites.

## 3. Definiciones formales

**Definicion 3.1 (limite por la derecha).** Sea $f$ definida en $(a, b)$ para algun $b > a$. Se dice que $\lim_{x\to a^+} f(x) = L$ si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que

$$a < x < a + \delta \implies |f(x) - L| < \varepsilon.$$

**Definicion 3.2 (limite por la izquierda).** Sea $f$ definida en $(c, a)$ para algun $c < a$. Se dice que $\lim_{x\to a^-} f(x) = L$ si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que

$$a - \delta < x < a \implies |f(x) - L| < \varepsilon.$$

**Definicion 3.3 (relacion con el limite bilateral).** $\lim_{x\to a} f(x) = L$ si y solo si $\lim_{x\to a^+} f(x) = L$ y $\lim_{x\to a^-} f(x) = L$.

**Definicion 3.4 (clasificacion de discontinuidades).** Sea $f$ definida en un entorno de $a$ (posiblemente sin estar definida en $a$ mismo).

- **Discontinuidad evitable:** ambos limites laterales existen, coinciden en un valor $L$, pero $f(a) \neq L$ o $f(a)$ no esta definida.
- **Discontinuidad de salto:** ambos limites laterales existen pero difieren: $\lim_{x\to a^-} f(x) \neq \lim_{x\to a^+} f(x)$.
- **Discontinuidad esencial:** al menos uno de los limites laterales no existe (oscila o es infinito).

**Definicion 3.5 (salto de la funcion en $a$).** Si ambos limites laterales existen, el **salto** de $f$ en $a$ es

$$\sigma(a) = \lim_{x\to a^+} f(x) - \lim_{x\to a^-} f(x).$$

La discontinuidad es de salto si $\sigma(a) \neq 0$.

## 4. Interpretacion en lenguaje natural

Los limites laterales permiten examinar cada lado de un punto por separado. A veces una funcion se "porta bien" por cada lado pero los dos lados no se encuentran en el mismo valor; eso es un salto. A veces ambos lados coinciden pero $f$ esta definida incorrectamente en el punto (o no esta definida); eso es evitable. Y a veces alguno de los lados oscila o explota; eso es esencial.

La condicion de que el limite bilateral exista equivale a que ambos laterales existan y coincidan. Esto conecta directamente con la continuidad: $f$ es continua en $a$ si y solo si $\lim_{x\to a^-} f(x) = f(a) = \lim_{x\to a^+} f(x)$.

## 5. Ejemplos basicos

**Ejemplo 5.1 (funcion de Heaviside).** Sea $H(x) = 0$ si $x < 0$ y $H(x) = 1$ si $x \geq 0$.

$\lim_{x\to 0^-} H(x) = 0$ y $\lim_{x\to 0^+} H(x) = 1$. Los laterales existen pero difieren. Discontinuidad de salto con $\sigma(0) = 1$.

**Ejemplo 5.2 (funcion signo).** $\operatorname{sgn}(x) = -1$ si $x < 0$, $0$ si $x = 0$, $1$ si $x > 0$.

$\lim_{x\to 0^-}\operatorname{sgn}(x) = -1$ y $\lim_{x\to 0^+}\operatorname{sgn}(x) = 1$. Salto de magnitud $2$.

**Ejemplo 5.3 (discontinuidad evitable).** $f(x) = \frac{x^2 - 4}{x - 2}$ para $x \neq 2$. Entonces $f(x) = x + 2$ para $x \neq 2$.

$\lim_{x\to 2^-} f(x) = 4$ y $\lim_{x\to 2^+} f(x) = 4$. $f(2)$ no esta definida. Discontinuidad evitable.

**Ejemplo 5.4 (laterales iguales, funcion continua).** $f(x) = x^2$. $\lim_{x\to 1^-} x^2 = 1 = \lim_{x\to 1^+} x^2 = f(1)$. $f$ es continua en $1$.

**Ejemplo 5.5 (funcion parte entera).** $\lfloor x \rfloor$ es el mayor entero menor o igual que $x$. En $x = n$ entero: $\lim_{x\to n^-}\lfloor x \rfloor = n - 1$ y $\lim_{x\to n^+}\lfloor x \rfloor = n$. Salto $\sigma(n) = 1$.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 (discontinuidad esencial por oscilacion).** $f(x) = \sin(1/x)$ en $x = 0$. $\lim_{x\to 0^+}\sin(1/x)$ no existe (oscila entre $-1$ y $1$). Discontinuidad esencial.

**Ejemplo 6.2 (lateral infinito).** $f(x) = 1/x$ en $x = 0$. $\lim_{x\to 0^+}\frac{1}{x} = +\infty$ y $\lim_{x\to 0^-}\frac{1}{x} = -\infty$. Discontinuidad esencial.

**Ejemplo 6.3 (un lateral existe y el otro no).** Sea $f(x) = \sin(1/x)$ para $x > 0$ y $f(x) = 0$ para $x \leq 0$. $\lim_{x\to 0^-} f(x) = 0$ (existe). $\lim_{x\to 0^+} f(x)$ no existe (oscilacion). Discontinuidad esencial.

**Ejemplo 6.4 (discontinuidades numerables).** La funcion parte entera $\lfloor x \rfloor$ tiene discontinuidades de salto en cada entero y es continua por la derecha en los enteros. El conjunto de discontinuidades es $\mathbb{Z}$, que es numerable.

**Ejemplo 6.5 (toda funcion monotona tiene limites laterales).** Si $f$ es monotona creciente en $(a, b)$, entonces para todo $c \in (a, b)$:

$$\lim_{x\to c^-} f(x) = \sup\{f(x) : x \in (a, c)\}, \qquad \lim_{x\to c^+} f(x) = \inf\{f(x) : x \in (c, b)\}.$$

Ambos laterales existen (posiblemente distintos). Esto implica que una funcion monotona solo puede tener discontinuidades de salto, y estas son a lo sumo numerables.

## 7. Proposiciones y teoremas

### Proposicion 7.1 (equivalencia bilateral-lateral)

**Enunciado.** *$\lim_{x\to a} f(x) = L$ si y solo si $\lim_{x\to a^-} f(x) = L$ y $\lim_{x\to a^+} f(x) = L$.*

### Proposicion 7.2 (caracterizacion secuencial lateral)

**Enunciado.** *$\lim_{x\to a^+} f(x) = L$ si y solo si para toda sucesion $(x_n)$ con $x_n > a$ y $x_n \to a$ se tiene $f(x_n) \to L$. Analogamente para el limite por la izquierda con $x_n < a$.*

### Proposicion 7.3 (algebra de limites laterales)

**Enunciado.** *Las operaciones aritmeticas (suma, producto, cociente) se preservan para limites laterales, con las mismas reglas que para limites bilaterales.*

### Proposicion 7.4 (funciones monotonas tienen limites laterales)

**Enunciado.** *Si $f$ es monotona creciente en $(a, b)$, entonces para todo $c \in (a, b)$, $\lim_{x\to c^-} f(x)$ y $\lim_{x\to c^+} f(x)$ existen. Ademas, $\lim_{x\to c^-} f(x) \leq f(c) \leq \lim_{x\to c^+} f(x)$.*

### Proposicion 7.5 (discontinuidades de funciones monotonas son numerables)

**Enunciado.** *Si $f: (a, b) \to \mathbb{R}$ es monotona, el conjunto de puntos de discontinuidad de $f$ es a lo sumo numerable.*

## 8. Demostraciones completas

### Demostracion de la proposicion 7.1

**($\Rightarrow$)** Si $\lim_{x\to a} f(x) = L$, dado $\varepsilon > 0$ existe $\delta > 0$ con $|f(x) - L| < \varepsilon$ cuando $0 < |x - a| < \delta$. En particular, si $a < x < a + \delta$ (que implica $0 < |x-a| < \delta$), se cumple $|f(x) - L| < \varepsilon$. Luego $\lim_{x\to a^+} f(x) = L$. Analogamente por la izquierda.

**($\Leftarrow$)** Si ambos laterales valen $L$, dado $\varepsilon > 0$ existe $\delta_1$ con $|f(x) - L| < \varepsilon$ para $a < x < a + \delta_1$, y $\delta_2$ con $|f(x) - L| < \varepsilon$ para $a - \delta_2 < x < a$. Sea $\delta = \min(\delta_1, \delta_2)$. Si $0 < |x - a| < \delta$, entonces $x$ esta a la derecha o a la izquierda de $a$, y en ambos casos $|f(x) - L| < \varepsilon$. $\blacksquare$

### Demostracion de la proposicion 7.4

Sea $f$ creciente en $(a, b)$ y $c \in (a, b)$. Para el limite por la izquierda:

Sea $S = \{f(x) : x \in (a, c)\}$. Como $f$ es creciente y acotada superiormente por $f(c)$ en $(a, c)$, el conjunto $S$ es acotado superiormente y no vacio. Sea $\ell = \sup S$.

Dado $\varepsilon > 0$, existe $x_0 \in (a, c)$ con $f(x_0) > \ell - \varepsilon$ (por definicion de supremo). Para todo $x \in (x_0, c)$, como $f$ es creciente: $\ell - \varepsilon < f(x_0) \leq f(x) \leq \ell$. Luego $|f(x) - \ell| < \varepsilon$.

Sea $\delta = c - x_0 > 0$. Si $c - \delta < x < c$, es decir, $x_0 < x < c$, se tiene $|f(x) - \ell| < \varepsilon$.

Esto muestra $\lim_{x\to c^-} f(x) = \ell = \sup\{f(x) : x \in (a,c)\}$.

La desigualdad $\ell \leq f(c)$ se cumple porque $f(x) \leq f(c)$ para $x < c$ (crecimiento), luego $\sup S \leq f(c)$.

Analogamente, $\lim_{x\to c^+} f(x) = \inf\{f(x) : x \in (c, b)\} \geq f(c)$. $\blacksquare$

### Demostracion de la proposicion 7.5

Sea $f$ creciente en $(a, b)$. En cada punto de discontinuidad $c$, el salto $\sigma(c) = \lim_{x\to c^+} f(x) - \lim_{x\to c^-} f(x) > 0$. Los intervalos abiertos $\left(\lim_{x\to c^-} f(x), \lim_{x\to c^+} f(x)\right)$ son disjuntos para distintos puntos de discontinuidad (por el crecimiento de $f$). Cada uno contiene un racional (por densidad de $\mathbb{Q}$). Como los racionales son numerables, el conjunto de discontinuidades es a lo sumo numerable. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (concluir que el limite bilateral existe porque un lateral existe).** Que $\lim_{x\to a^+} f(x)$ exista no implica que $\lim_{x\to a} f(x)$ exista. Se necesitan ambos laterales y que coincidan.

**Error 9.2 (confundir $f(a)$ con los limites laterales).** Los limites laterales describen el comportamiento cerca de $a$, no en $a$. $f(a)$ puede existir y ser distinto de ambos laterales.

**Error 9.3 (creer que las discontinuidades de salto son siempre visibles).** La funcion indicadora de $\mathbb{Q}$ tiene discontinuidad esencial en todo punto, no de salto, aunque la grafica parece tener "saltos" por todas partes.

**Error 9.4 (aplicar algebra de limites sin verificar existencia).** Las reglas de suma, producto, etc. requieren que ambos limites laterales existan. No se puede operar con limites que no existen.

**Error 9.5 (creer que toda funcion tiene limites laterales en todo punto).** $\sin(1/x)$ no tiene limite lateral por la derecha en $0$.

**Error 9.6 (confundir discontinuidad evitable con continuidad).** Una discontinuidad evitable es una discontinuidad. La funcion no es continua ahi. Se llama "evitable" porque se puede redefinir $f(a)$ para hacerla continua.

## 10. Resumen operativo

| Situacion | Diagnostico |
|-----------|-------------|
| $\lim_{x\to a^-} f = \lim_{x\to a^+} f = f(a)$ | $f$ continua en $a$ |
| $\lim_{x\to a^-} f = \lim_{x\to a^+} f \neq f(a)$ (o $f(a)$ no definida) | Discontinuidad evitable |
| $\lim_{x\to a^-} f \neq \lim_{x\to a^+} f$ (ambos existen) | Discontinuidad de salto |
| Algun lateral no existe | Discontinuidad esencial |

**Tecnicas:**
- Para demostrar existencia de un lateral: usar $\varepsilon$-$\delta$ con la restriccion $x > a$ o $x < a$.
- Para demostrar no existencia: encontrar dos sucesiones del mismo lado con limites distintos.
- Para funciones monotonas: los laterales siempre existen (supremo/infimo).

## 11. Ejercicios

**Ejercicio 1.** Calcular $\lim_{x\to 0^+} \frac{|x|}{x}$ y $\lim_{x\to 0^-} \frac{|x|}{x}$.

**Ejercicio 2.** Sea $f(x) = \lfloor x \rfloor$ (parte entera). Calcular $\lim_{x\to 3^-} f(x)$ y $\lim_{x\to 3^+} f(x)$.

**Ejercicio 3.** Clasificar la discontinuidad de $f(x) = \frac{\sin x}{x}$ en $x = 0$ (definida para $x \neq 0$).

**Ejercicio 4.** Sea $f(x) = \frac{x}{|x|}$ para $x \neq 0$. Clasificar la discontinuidad en $x = 0$.

**Ejercicio 5.** Demostrar con $\varepsilon$-$\delta$ que $\lim_{x\to 1^+}\sqrt{x - 1} = 0$.

**Ejercicio 6.** Sea $f(x) = \frac{e^{1/x}}{1 + e^{1/x}}$ para $x \neq 0$. Calcular los limites laterales en $x = 0$ y clasificar la discontinuidad.

**Ejercicio 7.** Sea $f(x) = x - \lfloor x \rfloor$ (parte fraccionaria). Determinar en que puntos $f$ es continua y clasificar las discontinuidades.

**Ejercicio 8.** Demostrar que si $f$ es creciente en $(a, b)$ y continua en $c \in (a, b)$, entonces $\lim_{x\to c^-} f(x) = f(c) = \lim_{x\to c^+} f(x)$.

**Ejercicio 9.** Calcular $\lim_{x\to 0^+} x \lfloor 1/x \rfloor$.

**Ejercicio 10.** Sea $f(x) = \begin{cases} x^2 & \text{si } x < 1, \\ 2 & \text{si } x = 1, \\ 3 - x & \text{si } x > 1. \end{cases}$ Clasificar la discontinuidad en $x = 1$.

**Ejercicio 11.** Demostrar que si $\lim_{x\to a^+} f(x) = L$ y $\lim_{x\to a^+} g(x) = M$, entonces $\lim_{x\to a^+}[f(x) + g(x)] = L + M$.

**Ejercicio 12.** Calcular $\lim_{x\to 0^+} \frac{1}{x} - \lfloor 1/x \rfloor$ (la parte fraccionaria de $1/x$).

**Ejercicio 13.** Demostrar que la funcion $f(x) = \begin{cases} \sin(1/x) & \text{si } x > 0, \\ 0 & \text{si } x \leq 0 \end{cases}$ tiene $\lim_{x\to 0^-} f(x) = 0$ pero $\lim_{x\to 0^+} f(x)$ no existe.

**Ejercicio 14.** Sea $f$ monotona creciente en $(0, 1)$ con $f(0, 1) \subseteq [0, 10]$. Demostrar que $f$ tiene a lo sumo $9$ puntos de discontinuidad con salto mayor que $1$.

**Ejercicio 15.** Demostrar que si $f$ tiene limites laterales finitos en $a$ y $f$ es continua excepto posiblemente en $a$, entonces $|f|$ tambien tiene limites laterales finitos en $a$.

## 12. Soluciones completas

### Solucion 1

Para $x > 0$: $\frac{|x|}{x} = \frac{x}{x} = 1$. Luego $\lim_{x\to 0^+}\frac{|x|}{x} = 1$.

Para $x < 0$: $\frac{|x|}{x} = \frac{-x}{x} = -1$. Luego $\lim_{x\to 0^-}\frac{|x|}{x} = -1$.

Los laterales difieren, asi que $\lim_{x\to 0}\frac{|x|}{x}$ no existe. $\blacksquare$

### Solucion 2

Para $x$ ligeramente menor que $3$ (por ejemplo $x = 2.999$), $\lfloor x \rfloor = 2$. Luego $\lim_{x\to 3^-}\lfloor x \rfloor = 2$.

Para $x$ ligeramente mayor que $3$ (por ejemplo $x = 3.001$), $\lfloor x \rfloor = 3$. Luego $\lim_{x\to 3^+}\lfloor x \rfloor = 3$.

Formalmente: si $2 < x < 3$, $\lfloor x \rfloor = 2$, constante. Si $3 < x < 4$, $\lfloor x \rfloor = 3$, constante. $\blacksquare$

### Solucion 3

$\lim_{x\to 0^+}\frac{\sin x}{x} = 1$ y $\lim_{x\to 0^-}\frac{\sin x}{x} = 1$ (limite clasico). Ambos laterales existen y coinciden en $1$. Como $f(0)$ no esta definida, la discontinuidad es **evitable**: se puede definir $f(0) = 1$ para hacer $f$ continua. $\blacksquare$

### Solucion 4

$\lim_{x\to 0^+}\frac{x}{|x|} = 1$ y $\lim_{x\to 0^-}\frac{x}{|x|} = -1$. Los laterales existen pero difieren. Discontinuidad de **salto** con $\sigma(0) = 2$. $\blacksquare$

### Solucion 5

Dado $\varepsilon > 0$. Necesito $\sqrt{x-1} < \varepsilon$ para $x > 1$ cerca de $1$. Esto equivale a $x - 1 < \varepsilon^2$.

Tomo $\delta = \varepsilon^2$. Si $1 < x < 1 + \delta$:

$$\sqrt{x-1} < \sqrt{\delta} = \varepsilon. \quad \blacksquare$$

### Solucion 6

Para $x > 0$: $1/x > 0$ y $e^{1/x} \to +\infty$ cuando $x \to 0^+$. Entonces $\frac{e^{1/x}}{1+e^{1/x}} = \frac{1}{e^{-1/x}+1} \to \frac{1}{0+1} = 1$.

Para $x < 0$: $1/x < 0$ y $e^{1/x} \to 0$ cuando $x \to 0^-$. Entonces $\frac{e^{1/x}}{1+e^{1/x}} \to \frac{0}{1+0} = 0$.

$\lim_{x\to 0^+} f(x) = 1$ y $\lim_{x\to 0^-} f(x) = 0$. Discontinuidad de **salto** con $\sigma(0) = 1$. $\blacksquare$

### Solucion 7

$f(x) = x - \lfloor x \rfloor$ es la parte fraccionaria. Para $n$ entero y $n < x < n+1$: $f(x) = x - n$, que es continua (funcion lineal).

En $x = n$ entero: $\lim_{x\to n^-} f(x) = \lim_{x\to n^-}(x - (n-1)) = n - (n-1) = 1$. $\lim_{x\to n^+} f(x) = \lim_{x\to n^+}(x - n) = 0$. $f(n) = 0$.

Los laterales difieren ($1 \neq 0$). Discontinuidad de **salto** en cada entero. $f$ es continua en todo punto no entero. $\blacksquare$

### Solucion 8

Por la proposicion 7.4, $\lim_{x\to c^-} f(x) \leq f(c) \leq \lim_{x\to c^+} f(x)$. Si $f$ es continua en $c$, el limite bilateral existe e iguala $f(c)$:

$$\lim_{x\to c^-} f(x) = \lim_{x\to c} f(x) = f(c) = \lim_{x\to c^+} f(x).$$

La primera y ultima igualdad siguen de la proposicion 7.1, la del medio es la definicion de continuidad. $\blacksquare$

### Solucion 9

Para $x > 0$: $\lfloor 1/x \rfloor = n$ cuando $\frac{1}{n+1} < x \leq \frac{1}{n}$, es decir, $1/x \in [n, n+1)$.

Entonces $x\lfloor 1/x \rfloor = xn$ y $n = \lfloor 1/x \rfloor$.

Se tiene $\frac{1}{x} - 1 < \lfloor 1/x \rfloor \leq \frac{1}{x}$, luego $1 - x < x\lfloor 1/x \rfloor \leq 1$.

Cuando $x \to 0^+$: $1 - x \to 1$ y la cota superior es $1$. Por el teorema del sandwich, $\lim_{x\to 0^+} x\lfloor 1/x \rfloor = 1$. $\blacksquare$

### Solucion 10

$\lim_{x\to 1^-} f(x) = \lim_{x\to 1^-} x^2 = 1$.

$\lim_{x\to 1^+} f(x) = \lim_{x\to 1^+}(3-x) = 2$.

Los laterales difieren ($1 \neq 2$). Discontinuidad de **salto** con $\sigma(1) = 1$. $\blacksquare$

### Solucion 11

Dado $\varepsilon > 0$. Existe $\delta_1$ con $|f(x) - L| < \varepsilon/2$ para $a < x < a + \delta_1$. Existe $\delta_2$ con $|g(x) - M| < \varepsilon/2$ para $a < x < a + \delta_2$.

Sea $\delta = \min(\delta_1, \delta_2)$. Si $a < x < a + \delta$:

$$|f(x) + g(x) - (L+M)| \leq |f(x)-L| + |g(x)-M| < \varepsilon. \quad \blacksquare$$

### Solucion 12

La parte fraccionaria de $1/x$ es $\{1/x\} = 1/x - \lfloor 1/x \rfloor$.

Del ejercicio 9, $x\lfloor 1/x \rfloor \to 1$, es decir, $\lfloor 1/x \rfloor \approx 1/x$ cuando $x \to 0^+$.

Mas precisamente: $\{1/x\} = 1/x - \lfloor 1/x \rfloor$ y $0 \leq \{1/x\} < 1$.

El $\lim_{x\to 0^+}\{1/x\}$ no existe: para $x = 1/n$ (entero), $\{1/x\} = 0$; para $x = 1/(n + 1/2) = 2/(2n+1)$, $1/x = (2n+1)/2 = n + 1/2$, $\{1/x\} = 1/2$. Las subsucesiones dan limites distintos ($0$ y $1/2$), luego el limite **no existe**. $\blacksquare$

### Solucion 13

**Limite por la izquierda.** Para $x \leq 0$: $f(x) = 0$. Luego $\lim_{x\to 0^-} f(x) = 0$.

**Limite por la derecha.** Para $x > 0$: $f(x) = \sin(1/x)$. Sea $x_n = \frac{1}{2n\pi} \to 0^+$: $f(x_n) = \sin(2n\pi) = 0$. Sea $y_n = \frac{1}{(4n+1)\pi/2} \to 0^+$: $f(y_n) = \sin((4n+1)\pi/2) = 1$. Como $0 \neq 1$, el limite $\lim_{x\to 0^+} f(x)$ no existe. $\blacksquare$

### Solucion 14

Sea $D = \{c \in (0,1) : \sigma(c) > 1\}$ el conjunto de discontinuidades con salto mayor que $1$.

A cada $c \in D$ le asocio el intervalo abierto $J_c = (\lim_{x\to c^-}f(x), \lim_{x\to c^+}f(x))$ de longitud $> 1$. Como $f$ es creciente, los intervalos $J_c$ son disjuntos.

Todos estan contenidos en $[0, 10]$ (por la hipotesis sobre la imagen). La longitud total es $\sum_{c \in D} |J_c| > |D| \cdot 1$, y debe ser $\leq 10$. Luego $|D| < 10$, es decir, $|D| \leq 9$. $\blacksquare$

### Solucion 15

Supongamos $\lim_{x\to a^+} f(x) = L^+$ y $\lim_{x\to a^-} f(x) = L^-$.

Se usa $\big||f(x)| - |L^+|\big| \leq |f(x) - L^+|$ (desigualdad triangular inversa). Dado $\varepsilon > 0$, existe $\delta$ con $|f(x) - L^+| < \varepsilon$ para $a < x < a + \delta$. Entonces $\big||f(x)| - |L^+|\big| < \varepsilon$. Luego $\lim_{x\to a^+}|f(x)| = |L^+|$. Analogamente por la izquierda: $\lim_{x\to a^-}|f(x)| = |L^-|$. $\blacksquare$
