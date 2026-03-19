---
title: Continuidad uniforme
description: Continuidad uniforme, diferencia con continuidad puntual, teorema de Heine, funciones Lipschitz y extension uniforme. Incluye 15 ejercicios resueltos.
---

# Continuidad uniforme

## 1. Motivacion e intuicion

Una funcion continua en un dominio puede tener un delta que dependa no solo de epsilon sino tambien del punto. Por ejemplo, $f(x) = 1/x$ en $(0, 1)$: cerca de $0$, la funcion crece tan rapido que el delta necesario se hace arbitrariamente pequeno. La continuidad uniforme elimina esta dependencia del punto: se exige un unico delta que funcione para todos los puntos del dominio simultaneamente.

La diferencia es sutil pero crucial. La continuidad puntual dice: "para cada punto y cada tolerancia, existe un delta". La continuidad uniforme dice: "para cada tolerancia, existe un delta que vale para todos los puntos a la vez".

El teorema de Heine garantiza que toda funcion continua en un compacto es uniformemente continua. Esto explica por que muchos resultados del calculo funcionan bien en intervalos cerrados y acotados: la compacidad proporciona la uniformidad automaticamente.

## 2. Prerrequisitos

**Continuidad puntual.** $f$ es continua en $a$ si para todo $\varepsilon > 0$ existe $\delta > 0$ (que puede depender de $a$) con $|x - a| < \delta \Rightarrow |f(x) - f(a)| < \varepsilon$.

**Compacidad.** Un subconjunto de $\mathbb{R}$ es compacto si y solo si es cerrado y acotado. Toda sucesion en un compacto tiene una subsucesion convergente con limite en el compacto.

**Sucesiones de Cauchy.** $(x_n)$ es de Cauchy si para todo $\varepsilon > 0$ existe $N$ con $|x_n - x_m| < \varepsilon$ para $n, m > N$.

## 3. Definiciones formales

**Definicion 3.1 (continuidad uniforme).** Sea $f: D \to \mathbb{R}$. Se dice que $f$ es **uniformemente continua en $D$** si para todo $\varepsilon > 0$ existe $\delta > 0$ tal que

$$x, y \in D \text{ y } |x - y| < \delta \implies |f(x) - f(y)| < \varepsilon.$$

La diferencia clave con la continuidad puntual: $\delta$ depende solo de $\varepsilon$, no del punto.

**Definicion 3.2 (negacion de continuidad uniforme).** $f$ **no** es uniformemente continua en $D$ si existe $\varepsilon_0 > 0$ tal que para todo $\delta > 0$ existen $x, y \in D$ con $|x - y| < \delta$ y $|f(x) - f(y)| \geq \varepsilon_0$.

Equivalentemente, existen $\varepsilon_0 > 0$ y sucesiones $(x_n), (y_n) \subseteq D$ con $|x_n - y_n| \to 0$ pero $|f(x_n) - f(y_n)| \geq \varepsilon_0$.

**Definicion 3.3 (funcion Lipschitz).** $f: D \to \mathbb{R}$ es **Lipschitz** con constante $L > 0$ si

$$|f(x) - f(y)| \leq L|x - y| \qquad \text{para todo } x, y \in D.$$

**Definicion 3.4 (funcion Holder).** $f$ es **Holder de exponente $\alpha$** ($0 < \alpha \leq 1$) si existe $C > 0$ con $|f(x) - f(y)| \leq C|x - y|^\alpha$ para todo $x, y \in D$.

## 4. Interpretacion en lenguaje natural

En la continuidad puntual, cada punto del dominio puede necesitar su propio delta, y no hay garantia de que estos deltas tengan un minimo positivo. En la continuidad uniforme, un unico delta sirve para todos los puntos.

**Lipschitz** es mas fuerte que continuidad uniforme: dice que la funcion no puede cambiar mas rapido que una velocidad fija $L$. Si $f$ es Lipschitz con constante $L$, entonces $\delta = \varepsilon/L$ funciona para todo punto. Toda funcion Lipschitz es uniformemente continua, pero no al reves ($\sqrt{x}$ en $[0, 1]$ es uniformemente continua pero no Lipschitz).

El teorema de Heine dice que la compacidad "compensa" la falta de uniformidad: en un dominio compacto, la continuidad puntual automaticamente se vuelve uniforme.

## 5. Ejemplos basicos

**Ejemplo 5.1 ($f(x) = 3x + 1$ es uniformemente continua en $\mathbb{R}$).** $|f(x) - f(y)| = 3|x - y|$. Dado $\varepsilon > 0$, $\delta = \varepsilon/3$ funciona para todo par $x, y$.

**Ejemplo 5.2 ($f(x) = x^2$ es uniformemente continua en $[0, 1]$).** Continua en $[0, 1]$ (compacto), luego uniformemente continua por Heine. Directamente: $|x^2 - y^2| = |x-y||x+y| \leq 2|x-y|$ en $[0,1]$. $\delta = \varepsilon/2$.

**Ejemplo 5.3 ($f(x) = x^2$ no es uniformemente continua en $\mathbb{R}$).** Sean $x_n = n$ y $y_n = n + 1/n$. Entonces $|x_n - y_n| = 1/n \to 0$ pero $|f(x_n) - f(y_n)| = |n^2 - (n+1/n)^2| = |2 + 1/n^2| \to 2 \neq 0$.

**Ejemplo 5.4 ($\sqrt{x}$ es uniformemente continua en $[0, +\infty)$).** $|\sqrt{x} - \sqrt{y}| = \frac{|x-y|}{\sqrt{x}+\sqrt{y}} \leq \sqrt{|x-y|}$. Dado $\varepsilon > 0$, $\delta = \varepsilon^2$ funciona.

## 6. Ejemplos finos y contraejemplos

**Ejemplo 6.1 ($f(x) = 1/x$ no es uniformemente continua en $(0, 1)$).** Sean $x_n = 1/n$ y $y_n = 1/(n+1)$. Entonces $|x_n - y_n| = \frac{1}{n(n+1)} \to 0$ pero $|f(x_n) - f(y_n)| = |n - (n+1)| = 1 \geq 1$. Tomando $\varepsilon_0 = 1$, la funcion no es uniformemente continua.

**Ejemplo 6.2 ($f(x) = \sin(1/x)$ no es uniformemente continua en $(0, 1)$).** La funcion oscila cada vez mas rapido cerca de $0$. Para $\varepsilon_0 = 1$, se pueden construir pares $(x_n, y_n)$ arbitrariamente cercanos con $|\sin(1/x_n) - \sin(1/y_n)| \geq 1$.

**Ejemplo 6.3 ($\sin x$ es uniformemente continua en $\mathbb{R}$).** $|\sin x - \sin y| \leq |x - y|$ (Lipschitz con $L = 1$). $\delta = \varepsilon$.

**Ejemplo 6.4 (Holder pero no Lipschitz).** $f(x) = \sqrt{x}$ en $[0, 1]$: $|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x-y|}$ (Holder con $\alpha = 1/2$). Pero $f'(x) = \frac{1}{2\sqrt{x}} \to \infty$ cuando $x \to 0^+$, asi que $f$ no es Lipschitz.

**Ejemplo 6.5 (continuidad uniforme preserva sucesiones de Cauchy).** Si $f$ es uniformemente continua y $(x_n)$ es de Cauchy, entonces $(f(x_n))$ es de Cauchy. Esto falla para continuidad puntual: $f(x) = 1/x$ y $x_n = 1/n$ (Cauchy, pero $f(x_n) = n$ no lo es).

## 7. Proposiciones y teoremas

### Teorema 7.1 (Heine)

**Enunciado.** *Si $f: [a, b] \to \mathbb{R}$ es continua, entonces $f$ es uniformemente continua en $[a, b]$.*

### Proposicion 7.2 (Lipschitz implica uniformemente continua)

**Enunciado.** *Si $f$ es Lipschitz con constante $L$, entonces $f$ es uniformemente continua con $\delta = \varepsilon/L$.*

### Proposicion 7.3 (preservacion de sucesiones de Cauchy)

**Enunciado.** *Si $f: D \to \mathbb{R}$ es uniformemente continua y $(x_n) \subseteq D$ es de Cauchy, entonces $(f(x_n))$ es de Cauchy.*

### Proposicion 7.4 (extension continua)

**Enunciado.** *Si $f: (a, b) \to \mathbb{R}$ es uniformemente continua, entonces los limites $\lim_{x\to a^+} f(x)$ y $\lim_{x\to b^-} f(x)$ existen, y la extension $\tilde{f}: [a, b] \to \mathbb{R}$ definida por esos limites en los extremos es continua (y uniformemente continua).*

### Proposicion 7.5 (negacion secuencial)

**Enunciado.** *$f$ no es uniformemente continua en $D$ si y solo si existen $\varepsilon_0 > 0$ y sucesiones $(x_n), (y_n) \subseteq D$ con $|x_n - y_n| \to 0$ y $|f(x_n) - f(y_n)| \geq \varepsilon_0$ para todo $n$.*

## 8. Demostraciones completas

### Demostracion del teorema 7.1

Supongamos por contradiccion que $f$ no es uniformemente continua en $[a, b]$. Entonces existe $\varepsilon_0 > 0$ y sucesiones $(x_n), (y_n) \subseteq [a, b]$ con $|x_n - y_n| < 1/n$ y $|f(x_n) - f(y_n)| \geq \varepsilon_0$.

Como $(x_n) \subseteq [a, b]$ y $[a, b]$ es compacto, existe subsucesion $x_{n_k} \to c \in [a, b]$. Como $|x_{n_k} - y_{n_k}| < 1/n_k \to 0$, se tiene $y_{n_k} \to c$ tambien.

Por continuidad de $f$ en $c$: $f(x_{n_k}) \to f(c)$ y $f(y_{n_k}) \to f(c)$. Entonces $|f(x_{n_k}) - f(y_{n_k})| \to 0$. Pero $|f(x_{n_k}) - f(y_{n_k})| \geq \varepsilon_0 > 0$ para todo $k$. Contradiccion. $\blacksquare$

### Demostracion de la proposicion 7.2

Dado $\varepsilon > 0$, sea $\delta = \varepsilon/L$. Si $|x - y| < \delta$:

$$|f(x) - f(y)| \leq L|x - y| < L \cdot \varepsilon/L = \varepsilon. \quad \blacksquare$$

### Demostracion de la proposicion 7.3

Sea $\varepsilon > 0$. Como $f$ es uniformemente continua, existe $\delta > 0$ con $|f(x) - f(y)| < \varepsilon$ cuando $|x - y| < \delta$. Como $(x_n)$ es de Cauchy, existe $N$ con $|x_n - x_m| < \delta$ para $n, m > N$. Entonces $|f(x_n) - f(x_m)| < \varepsilon$ para $n, m > N$. $\blacksquare$

### Demostracion de la proposicion 7.4

Se demuestra que $\lim_{x\to a^+} f(x)$ existe. Sea $(x_n) \subseteq (a, b)$ con $x_n \to a$. Entonces $(x_n)$ es de Cauchy. Por la proposicion 7.3, $(f(x_n))$ es de Cauchy, luego converge a algun $L$.

Si $(y_n)$ es otra sucesion con $y_n \to a$, el mismo argumento da que $(f(y_n))$ converge. Para ver que el limite es el mismo $L$: la sucesion intercalada $x_1, y_1, x_2, y_2, \ldots$ converge a $a$, luego por el argumento anterior $(f(x_1), f(y_1), f(x_2), f(y_2), \ldots)$ es de Cauchy y converge. Las subsucesiones $(f(x_n))$ y $(f(y_n))$ convergen al mismo limite.

La extension $\tilde{f}$ es continua en los extremos por construccion (el limite lateral existe e iguala $\tilde{f}$ en el extremo). $\blacksquare$

### Demostracion de la proposicion 7.5

**($\Rightarrow$)** Si $f$ no es uniformemente continua, existe $\varepsilon_0$ tal que para todo $n$, tomando $\delta = 1/n$, existen $x_n, y_n$ con $|x_n - y_n| < 1/n$ y $|f(x_n) - f(y_n)| \geq \varepsilon_0$.

**($\Leftarrow$)** Si existen tales sucesiones, para todo $\delta > 0$ existe $n$ con $1/n < \delta$ (es decir, $|x_n - y_n| < \delta$) y $|f(x_n) - f(y_n)| \geq \varepsilon_0$. Luego $f$ no es uniformemente continua. $\blacksquare$

## 9. Errores comunes

**Error 9.1 (confundir continuidad con continuidad uniforme).** Continuidad uniforme es mas fuerte. En dominios no compactos, la diferencia importa: $x^2$ es continua en $\mathbb{R}$ pero no uniformemente continua.

**Error 9.2 (creer que toda funcion continua en un abierto es uniformemente continua).** Falso: $1/x$ en $(0, 1)$. La compacidad del dominio es crucial para el teorema de Heine.

**Error 9.3 (confundir Lipschitz con uniformemente continua).** Lipschitz $\Rightarrow$ uniformemente continua $\Rightarrow$ continua. Las implicaciones inversas son falsas: $\sqrt{x}$ es uniformemente continua pero no Lipschitz.

**Error 9.4 (creer que la continuidad uniforme depende del punto).** El delta en la continuidad uniforme no depende del punto. Si el delta depende del punto, se tiene continuidad puntual, no uniforme.

**Error 9.5 (olvidar que la continuidad uniforme preserva Cauchy).** Esta es una propiedad exclusiva de la continuidad uniforme. La continuidad puntual no la tiene.

## 10. Resumen operativo

| Propiedad | Definicion clave |
|-----------|------------------|
| Uniformemente continua | $\forall \varepsilon > 0, \exists \delta > 0 : \|x-y\| < \delta \Rightarrow \|f(x)-f(y)\| < \varepsilon$ (un solo $\delta$ para todo par) |
| Lipschitz | $\|f(x)-f(y)\| \leq L\|x-y\|$ |
| Holder($\alpha$) | $\|f(x)-f(y)\| \leq C\|x-y\|^\alpha$ |

**Implicaciones:** Lipschitz $\Rightarrow$ uniformemente continua $\Rightarrow$ continua. Ninguna implicacion inversa es cierta.

**Tecnicas para probar continuidad uniforme:**
1. Acotar $|f(x) - f(y)|$ por $C|x - y|$ o $C|x-y|^\alpha$ (Lipschitz/Holder).
2. Usar Heine si el dominio es compacto.
3. Combinar Lipschitz en una parte con Heine en otra.

**Tecnicas para probar no uniformidad:**
Construir sucesiones $(x_n), (y_n)$ con $|x_n - y_n| \to 0$ pero $|f(x_n) - f(y_n)| \geq \varepsilon_0$.

## 11. Ejercicios

**Ejercicio 1.** Demostrar que $f(x) = x^3$ no es uniformemente continua en $\mathbb{R}$.

**Ejercicio 2.** Demostrar que $f(x) = \sin(x^2)$ no es uniformemente continua en $\mathbb{R}$.

**Ejercicio 3.** Demostrar que $f(x) = \frac{x}{x+1}$ es uniformemente continua en $[0, +\infty)$.

**Ejercicio 4.** Demostrar que si $f$ es uniformemente continua en $(a, b)$, entonces $f$ es acotada.

**Ejercicio 5.** Demostrar que $f(x) = x\sin(1/x)$ es uniformemente continua en $(0, 1]$.

**Ejercicio 6.** Sea $f$ uniformemente continua en $D$ y $g$ uniformemente continua en $D$. Demostrar que $f + g$ es uniformemente continua en $D$.

**Ejercicio 7.** Dar un ejemplo de dos funciones uniformemente continuas cuyo producto no es uniformemente continua.

**Ejercicio 8.** Demostrar que $f(x) = \sqrt{x}$ es uniformemente continua en $[0, +\infty)$ pero no Lipschitz en $[0, 1]$.

**Ejercicio 9.** Demostrar que si $f$ es uniformemente continua en $\mathbb{R}$, entonces existe $a, b > 0$ con $|f(x)| \leq a|x| + b$ para todo $x$.

**Ejercicio 10.** Sea $f: (0, 1) \to \mathbb{R}$ uniformemente continua. Demostrar que $\lim_{x\to 0^+} f(x)$ existe.

**Ejercicio 11.** Demostrar que la funcion $f(x) = \cos(\sqrt{x})$ es uniformemente continua en $[0, +\infty)$.

**Ejercicio 12.** Sea $f$ Lipschitz con constante $L$ y $g$ Lipschitz con constante $M$. Demostrar que $f + g$ es Lipschitz con constante $L + M$.

**Ejercicio 13.** Demostrar que si $f$ es derivable en $(a, b)$ con $|f'(x)| \leq M$ para todo $x$, entonces $f$ es Lipschitz con constante $M$.

**Ejercicio 14.** Sea $f$ uniformemente continua en $(0, +\infty)$ con $\lim_{x\to+\infty} f(x) = 0$. Demostrar que $f$ es acotada.

**Ejercicio 15.** Demostrar que si $f, g$ son uniformemente continuas y acotadas en $D$, entonces $fg$ es uniformemente continua en $D$.

## 12. Soluciones completas

### Solucion 1

Sean $x_n = n$ y $y_n = n + 1/n$. Entonces $|x_n - y_n| = 1/n \to 0$.

$$|f(x_n) - f(y_n)| = |n^3 - (n+1/n)^3| = |3n + 3/n + 1/n^3| \to +\infty.$$

En particular, $|f(x_n) - f(y_n)| \geq 1$ para $n$ grande. Tomando $\varepsilon_0 = 1$, $f$ **no** es uniformemente continua. $\blacksquare$

### Solucion 2

Sean $x_n = \sqrt{2n\pi + \pi/2}$ y $y_n = \sqrt{2n\pi}$. Entonces $x_n^2 - y_n^2 = \pi/2$ y

$$|x_n - y_n| = \frac{x_n^2 - y_n^2}{x_n + y_n} = \frac{\pi/2}{x_n + y_n} \to 0.$$

Pero $f(x_n) = \sin(2n\pi + \pi/2) = 1$ y $f(y_n) = \sin(2n\pi) = 0$, asi que $|f(x_n) - f(y_n)| = 1$. No es uniformemente continua. $\blacksquare$

### Solucion 3

$\left|\frac{x}{x+1} - \frac{y}{y+1}\right| = \left|\frac{x(y+1) - y(x+1)}{(x+1)(y+1)}\right| = \frac{|x - y|}{(x+1)(y+1)}$.

Para $x, y \geq 0$: $(x+1)(y+1) \geq 1$, luego $\left|\frac{x}{x+1} - \frac{y}{y+1}\right| \leq |x - y|$.

Lipschitz con $L = 1$, luego uniformemente continua. $\delta = \varepsilon$. $\blacksquare$

### Solucion 4

Sea $f$ uniformemente continua en $(a, b)$. Para $\varepsilon = 1$, existe $\delta > 0$ con $|f(x) - f(y)| < 1$ si $|x - y| < \delta$.

Se puede cubrir $(a, b)$ con finitos intervalos de longitud $\delta/2$: elijo $a < t_1 < t_2 < \cdots < t_N < b$ con $t_{i+1} - t_i < \delta$. Para cualquier $x \in (a, b)$, existe $t_i$ con $|x - t_i| < \delta$, luego $|f(x) - f(t_i)| < 1$. Entonces $|f(x)| \leq \max_i |f(t_i)| + 1$. $\blacksquare$

### Solucion 5

$f(x) = x\sin(1/x)$ se extiende por $f(0) = 0$ a una funcion continua en $[0, 1]$. Como $[0, 1]$ es compacto, $f$ es uniformemente continua en $[0, 1]$ por Heine, y por tanto en $(0, 1]$. $\blacksquare$

### Solucion 6

Dado $\varepsilon > 0$. Existen $\delta_1$ con $|f(x) - f(y)| < \varepsilon/2$ si $|x-y| < \delta_1$, y $\delta_2$ con $|g(x) - g(y)| < \varepsilon/2$ si $|x-y| < \delta_2$. Sea $\delta = \min(\delta_1, \delta_2)$:

$$|(f+g)(x) - (f+g)(y)| \leq |f(x)-f(y)| + |g(x)-g(y)| < \varepsilon. \quad \blacksquare$$

### Solucion 7

$f(x) = g(x) = x$ son uniformemente continuas (Lipschitz con $L = 1$). Pero $fg = x^2$ no es uniformemente continua en $\mathbb{R}$ (ejercicio 1 con $x^2$ en vez de $x^3$; mismo argumento con $x_n = n$, $y_n = n + 1/n$, $|x_n^2 - y_n^2| = |2 + 1/n^2| \to 2$). $\blacksquare$

### Solucion 8

**Uniformemente continua:** $|\sqrt{x} - \sqrt{y}| \leq \sqrt{|x-y|}$ (demostrado antes). Dado $\varepsilon > 0$, $\delta = \varepsilon^2$.

**No Lipschitz en $[0,1]$:** Si fuera Lipschitz, $|\sqrt{x} - 0| \leq L|x - 0|$, es decir, $\sqrt{x} \leq Lx$, lo que da $1/\sqrt{x} \leq L$ para todo $x > 0$, imposible porque $1/\sqrt{x} \to \infty$. $\blacksquare$

### Solucion 9

Para $\varepsilon = 1$, existe $\delta > 0$ con $|f(x) - f(y)| < 1$ si $|x - y| < \delta$.

Para todo $x \in \mathbb{R}$, sea $n = \lceil|x|/\delta\rceil$. Partiendo de $0$ en pasos de tamano $< \delta$, usando $n + 1$ pasos se llega de $0$ a $x$:

$$|f(x) - f(0)| \leq (n+1) \cdot 1 \leq \frac{|x|}{\delta} + 2.$$

Luego $|f(x)| \leq |f(0)| + \frac{|x|}{\delta} + 2 = \frac{1}{\delta}|x| + (|f(0)| + 2)$.

Tomando $a = 1/\delta$ y $b = |f(0)| + 2$. $\blacksquare$

### Solucion 10

Sea $(x_n) \subseteq (0, 1)$ con $x_n \to 0^+$. Entonces $(x_n)$ es de Cauchy. Por la proposicion 7.3, $(f(x_n))$ es de Cauchy, luego converge a algun $L$.

Si $(y_n)$ es otra sucesion con $y_n \to 0^+$, la sucesion intercalada converge a $0$, es de Cauchy, y $f$ de ella es de Cauchy, luego converge. Las subsucesiones $f(x_n)$ y $f(y_n)$ convergen al mismo limite. Luego $\lim_{x\to 0^+} f(x) = L$ existe. $\blacksquare$

### Solucion 11

Para $x, y \geq 0$: $|\cos(\sqrt{x}) - \cos(\sqrt{y})| \leq |\sqrt{x} - \sqrt{y}| \leq \sqrt{|x - y|}$ (composicion de $\cos$ Lipschitz-$1$ con $\sqrt{\cdot}$ Holder-$1/2$).

Dado $\varepsilon > 0$, $\delta = \varepsilon^2$ funciona: $|\cos(\sqrt{x}) - \cos(\sqrt{y})| \leq \sqrt{|x-y|} < \sqrt{\varepsilon^2} = \varepsilon$. $\blacksquare$

### Solucion 12

$|(f+g)(x) - (f+g)(y)| \leq |f(x)-f(y)| + |g(x)-g(y)| \leq L|x-y| + M|x-y| = (L+M)|x-y|$. $\blacksquare$

### Solucion 13

Por el teorema del valor medio: para todo $x, y \in (a, b)$, existe $c$ entre $x$ e $y$ con $f(x) - f(y) = f'(c)(x - y)$. Entonces $|f(x) - f(y)| = |f'(c)||x - y| \leq M|x - y|$. $\blacksquare$

### Solucion 14

Como $f(x) \to 0$ cuando $x \to +\infty$, existe $R > 0$ con $|f(x)| < 1$ para $x > R$.

En $(0, R]$: por el ejercicio 4, $f$ es acotada en $(0, R]$ (se extiende el argumento: $f$ uniformemente continua en $(0, R]$, que se puede extender a $[0, R]$ por el ejercicio 10 y continuidad; $[0, R]$ compacto implica $f$ acotada).

Alternativamente: $f$ es acotada en $(0, R + 1)$ por el ejercicio 4 (uniformemente continua en ese intervalo abierto acotado). Para $x > R$, $|f(x)| < 1$. Luego $f$ esta acotada en $(0, +\infty)$. $\blacksquare$

### Solucion 15

Sean $|f| \leq M_f$ y $|g| \leq M_g$ en $D$.

$$|f(x)g(x) - f(y)g(y)| \leq |f(x)||g(x) - g(y)| + |g(y)||f(x) - f(y)| \leq M_f|g(x)-g(y)| + M_g|f(x)-f(y)|.$$

Dado $\varepsilon > 0$: existe $\delta_1$ con $|f(x)-f(y)| < \frac{\varepsilon}{2M_g}$ si $|x-y| < \delta_1$ (o $\frac{\varepsilon}{2}$ si $M_g = 0$). Existe $\delta_2$ con $|g(x)-g(y)| < \frac{\varepsilon}{2M_f}$ si $|x-y| < \delta_2$ (o $\frac{\varepsilon}{2}$ si $M_f = 0$).

Sea $\delta = \min(\delta_1, \delta_2)$. Si $|x - y| < \delta$:

$$|f(x)g(x) - f(y)g(y)| < M_f \cdot \frac{\varepsilon}{2M_f} + M_g \cdot \frac{\varepsilon}{2M_g} = \varepsilon. \quad \blacksquare$$
