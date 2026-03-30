---
title: Funciones de Green Multidimensionales
description: Funciones de Green para la ecuación de Poisson, Ondas y Difusión. Método de imágenes y potenciales retardados.
---

# Funciones de Green Multidimensionales

Mientras que en 1D construimos la función de Green empalmando soluciones, en múltiples dimensiones dependemos fuertemente del análisis de Fourier y de las simetrías geométricas.

## 1. La Ecuación de Poisson y Espacio Libre
La ecuación fundamental de la electrostática y la gravedad newtoniana es $\nabla^2 \phi = -\rho$.
La función de Green satisface:
$$\nabla^2 G(\vec{r}, \vec{r}') = \delta^{(3)}(\vec{r} - \vec{r}')$$

Aplicando la transformada de Fourier 3D, pasamos al espacio de momentos $\vec{k}$:
$$-k^2 \tilde{G}(\vec{k}) = 1 \implies \tilde{G}(\vec{k}) = -\frac{1}{k^2}$$
Transformando de vuelta al espacio real (usando integración de contorno y el lema de Jordan):
$$G(\vec{r}, \vec{r}') = -\frac{1}{4\pi |\vec{r} - \vec{r}'|}$$
*Física:* Este es exactamente el potencial de Coulomb de una carga puntual.

---

## 2. El Método de Imágenes (Fronteras)
Si el espacio no es libre (ej. hay conductores presentes), requerimos que $G(\vec{r}, \vec{r}') = 0$ en la frontera $S$. 
El método de imágenes consiste en colocar cargas ficticias fuera del dominio físico para cancelar el potencial en la frontera.

### Carga frente a un plano conductor ($z=0$):
Si la fuente está en $\vec{r}' = (x', y', z')$, colocamos una "carga imagen" negativa en $\vec{r}'' = (x', y', -z')$.
$$G_D(\vec{r}, \vec{r}') = -\frac{1}{4\pi} \left( \frac{1}{|\vec{r} - \vec{r}'|} - \frac{1}{|\vec{r} - \vec{r}''|} \right)$$

### Carga dentro de una esfera aterrizada (radio $a$):
Si la carga está a una distancia $r'$ del centro, la imagen se coloca a una distancia $r'' = a^2/r'$ con una magnitud escalada por $a/r'$.

---

## 3. La Ecuación de Onda y Causalidad
Para el operador D'Alembertiano $\square = \frac{1}{c^2}\frac{\partial^2}{\partial t^2} - \nabla^2$, buscamos $G(\vec{r}, t; \vec{r}', t')$ tal que:
$$\square G = \delta^{(3)}(\vec{r} - \vec{r}') \delta(t - t')$$

Al resolver esto en el dominio de las frecuencias $\omega$, encontramos polos en $\omega = \pm ck$. Dependiendo de cómo cerremos el contorno de integración (por arriba o por abajo en el plano complejo), obtenemos diferentes funciones de Green.

Para respetar la **Causalidad** (el efecto no puede preceder a la causa, $G=0$ para $t < t'$), desplazamos los polos ligeramente hacia abajo ($\omega \to \omega + i\epsilon$). Esto nos da la **Función de Green Retardada**:
$$G_{ret}(\vec{r}, t; \vec{r}', t') = \frac{\delta\left(t - t' - \frac{|\vec{r} - \vec{r}'|}{c}\right)}{4\pi |\vec{r} - \vec{r}'|}$$

### Potenciales de Liénard-Wiechert
Al convolucionar $G_{ret}$ con una fuente de carga $\rho(\vec{r}', t')$, el tiempo de la fuente se evalúa en $t_{ret} = t - |\vec{r} - \vec{r}'|/c$. Esta es la base matemática de toda la teoría de radiación electromagnética.

---

## 4. Ecuación de Calor (Difusión)
Para el operador $\frac{\partial}{\partial t} - \alpha \nabla^2$, la función de Green (el propagador de difusión) es:
$$G(\vec{r}, t; \vec{r}', t') = \frac{1}{[4\pi \alpha (t-t')]^{3/2}} \exp\left[ -\frac{|\vec{r} - \vec{r}'|^2}{4\alpha(t-t')} \right] \Theta(t-t')$$
Donde $\Theta$ es la función escalón de Heaviside. Note que la "señal" del calor se propaga instantáneamente a todo el espacio (no hay límite de velocidad $c$ aquí), lo cual es una limitación de la formulación parabólica no relativista.
