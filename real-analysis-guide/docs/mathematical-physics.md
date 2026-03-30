---
title: Mathematical Physics (Hassani) - Plan de 4 Años
description: Plan de estudio exhaustivo y definitivo basado en el libro de Sadri Hassani. Diseñado para cubrir la matemática de una licenciatura en física aplicada.
---

# Mathematical Physics (Hassani) — Plan Maestro

Este documento es tu **hoja de ruta definitiva** para dominar la física matemática durante tu carrera en física aplicada. Está estructurado rigurosamente sobre el texto **"Mathematical Physics: A Modern Introduction to Its Foundations"** de Sadri Hassani. 

Si sigues este plan semana a semana, resolviendo los ejercicios propuestos y completando los mini-proyectos, al finalizar tendrás el nivel matemático requerido para entrar directamente a investigación en física teórica, materia condensada, relatividad o mecánica cuántica avanzada.

::: info La Filosofía del Plan
No leas el libro como una novela. La física matemática se aprende **demostrando y calculando**. Cada sección incluye ejercicios divididos en tres niveles:
1. 🛠️ **Mecánico:** Aplicación directa para soltar la mano.
2. 🧠 **Conceptual:** Demostraciones que construyen la intuición profunda.
3. 🧪 **Síntesis:** Aplicación a problemas de física real.
:::

---

## PARTE I: Espacios Vectoriales Finito-Dimensionales
**Semanas 1–5 | El Fundamento Algebraico de la Cuántica**

::: tip 🔬 Mini-Proyecto Integrador: El Oscilador Armónico Cuántico
Construye desde cero el álgebra de operadores de subida $a^\dagger$ y bajada $a$ usando únicamente los resultados de esta parte. Define el espacio de Fock, calcula las matrices de $a, a^\dagger, \hat{x}, \hat{p}$ en la base $|n\rangle$, verifica $[a, a^\dagger]=1$, encuentra el espectro de $H$ sin resolver ninguna EDO y verifica el principio de incertidumbre $\Delta x \Delta p \ge \hbar/2$.
:::

### Cap. 1: Vectores y Transformaciones
- **Física:** Estados cuánticos en $\mathbb{C}^n$, polarización óptica (matrices de Jones), transformaciones de Lorentz.
- **Temas:** Axiomas, suma directa, bases, núcleo/imagen, cambio de base, Gram-Schmidt.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Aplicar Gram-Schmidt a $\{1, x, x^2, x^3\}$ en $L^2[-1,1]$ para obtener polinomios de Legendre. Calcular matrices de cambio de base.
- 🧠 **Conceptual:** Demostrar el teorema del rango-nulidad. Probar que todo espacio complejo finito-dimensional es isomorfo a $\mathbb{C}^n$.
- 🧪 **Síntesis:** Escribe las matrices $2\times2$ para polarizadores y láminas $\lambda/4$. Calcula el resultado de pasar luz polarizada por múltiples filtros.
- ✅ **Autoevaluación:** ¿Puedo calcular la matriz de $T$ en dos bases distintas y convertir entre ellas sin ver mis notas?
:::
> 💡 *Nota Táctica:* El producto interno en $\mathbb{C}^n$ tiene el conjugado en el primer argumento. Esta asimetría es la raíz de toda diferencia entre espacios reales y complejos en cuántica.

### Cap. 2: Álgebra de Operadores
- **Física:** Observables hermitianos, $[x,p]=i\hbar$, compuertas de información cuántica.
- **Temas:** Adjuntos, hermitianos, unitarios, proyectores, conmutadores.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Para $L_x, L_y, L_z$, calcular explícitamente todos los conmutadores y verificar la identidad de Jacobi.
- 🧠 **Conceptual:** Derivar $\Delta A \Delta B \ge \frac{1}{2}|\langle[A,B]\rangle|$ partiendo solo de los axiomas del producto interno.
- 🧪 **Síntesis:** Construye $S_x, S_y, S_z$ para espín-1/2 con matrices de Pauli y calcula el operador de rotación de espín $R_n(\theta) = e^{-i\theta \hat{n} \cdot \vec{S}/\hbar}$.
- ✅ **Autoevaluación:** ¿Puedo derivar el principio de incertidumbre desde cero?
:::

### Cap. 3 y 4: Representación Matricial y Descomposición Espectral
- **Física:** Ecuación de Schrödinger matricial, tensor de inercia, modos normales de oscilación.
- **Temas:** Trazas, determinantes, similitud, ecuación característica, Cayley-Hamilton, teorema espectral, funciones de matrices.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Calcular $e^A, \sin A, \cos A$ para matrices $2\times2$ diagonalizables. Encontrar forma de Jordan para casos degenerados.
- 🧠 **Conceptual:** Demostrar que $\text{Tr}([A,B])=0$. Concluir que $[x,p]=i\hbar$ es imposible en dimensión finita (¡por eso existe el análisis funcional!).
- 🧪 **Síntesis:** Resuelve un sistema de masas acopladas por resortes diagonalizando $M^{-1}K$ para hallar las frecuencias de modos normales.
- ✅ **Autoevaluación:** ¿Puedo calcular el operador de evolución $U(t) = e^{-iHt/\hbar}$ para cualquier Hamiltoniano $2\times2$?
:::

---

## PARTE II: Espacios de Hilbert e Infinito Dimensiones
**Semanas 6–11 | El Lenguaje de la Función de Onda**

::: tip 🔬 Mini-Proyecto Integrador: Estructura del Átomo de Hidrógeno
Demuestra que $L^2(\mathbb{R}^3)$ es un espacio de Hilbert. Expande la función de onda $\psi$ en la base de armónicos esféricos. Verifica ortogonalidad usando polinomios de Legendre y analiza cómo la condición de cuadrado integrable cuantiza la energía, todo esto analizando la estructura matemática antes de resolver la EDO.
:::

### Cap. 5: Espacios de Hilbert
- **Física:** $L^2(\mathbb{R}^3)$ en cuántica, señales de energía finita, ecuación de Liouville.
- **Temas:** Norma, completitud, desigualdad de Bessel, Parseval, operadores acotados vs no acotados.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Expandir $f(x)=x$ en la base de Legendre hasta $P_4$ y calcular el error $\|f-f_n\|^2$.
- 🧠 **Conceptual:** [Entender los Operadores No Acotados y Dominios](/analisis-matematico/operadores-no-acotados). Probar que $\hat{p} = -i\hbar d/dx$ no es un operador acotado en $L^2(\mathbb{R})$.
- 🧪 **Síntesis:** Verifica que los estados de Hermite del oscilador armónico forman una base ortonormal y calcula $\|\psi_n\|^2$.
- ✅ **Autoevaluación:** ¿Entiendo por qué la completitud es absolutamente esencial en física cuántica?
:::

### Cap. 6 y 7: Distribuciones y Polinomios Ortogonales
- **Física:** Cargas puntuales (electrodinámica), orbitales atómicos, potenciales multipolares.
- **Temas:** Delta de Dirac, derivadas distribucionales, Legendre, Hermite, Laguerre, armónicos esféricos $Y_l^m$.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Derivar $P_0...P_4$ y $H_0...H_4$ desde la fórmula de Rodrigues. Calcular la transformada de Fourier de $\delta(x-a)$ y $H(x)$.
- 🧠 **Conceptual:** Demostrar rigurosamente $\nabla^2(1/r) = -4\pi\delta^3(r)$.
- 🧪 **Síntesis:** Escribe el potencial $\phi(r,\theta)$ de un dipolo discreto usando expansión multipolar con polinomios de Legendre.
- ✅ **Autoevaluación:** ¿Puedo escribir los armónicos esféricos para $l=0,1$ de memoria?
:::
> 💡 *Nota Táctica:* La frase "$\delta(x)=\infty$ en $0$" es mentira. $\delta$ es un funcional lineal: $\int \phi(x)\delta(x)dx = \phi(0)$. Usa siempre esta definición para evitar errores catastróficos en ecuaciones diferenciales.

### Cap. 8: Análisis de Fourier
- **Física:** Difracción de Fraunhofer, relación espacio-momento, espectro de potencias.
- **Temas:** Fenómeno de Gibbs, convolución, desigualdad de Heisenberg matemática.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Calcular transformada de Fourier de una Gaussiana y un pulso rectangular.
- 🧠 **Conceptual:** Demostrar el teorema de convolución $\mathcal{F}[f*g] = \mathcal{F}[f]\cdot\mathcal{F}[g]$.
- 🧪 **Síntesis:** Resuelve la ecuación de calor $\partial u/\partial t = \kappa \partial^2 u/\partial x^2$ en todo $\mathbb{R}$ usando Fourier.
- ✅ **Autoevaluación:** ¿Entiendo el principio de incertidumbre como una simple propiedad matemática de la transformada de Fourier?
:::

---

## PARTE III: Análisis Complejo
**Semanas 12–17 | Integración Avanzada y Causalidad**

::: tip 🔬 Mini-Proyecto Integrador: Función de Partición y Contornos
Usa el teorema de residuos para calcular la función de partición termodinámica extendiendo $\beta$ al plano complejo. Calcula la transformada de Laplace inversa de $1/(s^2+\omega^2)$ usando el contorno de Bromwich para obtener respuestas dinámicas de sistemas.
:::

### Cap. 9, 10 y 11: Cálculo Complejo, Residuos y Geometría Conforme
- **Física:** Relaciones de Kramers-Kronig (causalidad), mapeos de fluidos irrotacionales, propagadores cuánticos.
- **Temas:** Ecuaciones de Cauchy-Riemann, series de Laurent, polos, lema de Jordan, cortes de rama, transformaciones de Möbius.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Clasificar singularidades (evitables, polos, esenciales). Evaluar $\int_{-\infty}^\infty \frac{\cos x}{x^2+1}dx$ usando semicírculos.
- 🧠 **Conceptual:** Derivar la relación de dispersión de Kramers-Kronig mostrando cómo la causalidad implica analiticidad en el semiplano superior.
- 🧪 **Síntesis:** Usa el mapeo conforme de Joukowski ($w = z + a^2/z$) para analizar el flujo uniforme alrededor de un cilindro aerodinámico.
- ✅ **Autoevaluación:** ¿Puedo elegir el contorno correcto (keyhole, rectangular, semicírculo) para cualquier integral real difícil?
:::

---

## PARTE IV: Ecuaciones Diferenciales
**Semanas 18–24 | El Corazón de la Física Clásica y Cuántica**

::: tip 🔬 Mini-Proyecto Integrador: Solución Completa del Hidrógeno
Resuelve $H\psi=E\psi$ de principio a fin. Separa en coordenadas esféricas, resuelve la parte radial con Frobenius, identifica la cuantización en la serie truncada (Laguerre) y calcula $\langle r \rangle$ para el estado fundamental.
:::

### Cap. 12: Separación de Variables y Esféricas
- **Física:** Membranas vibrantes, modos sísmicos de la Tierra, cavidades resonantes.
- **Temas:** Laplaciano esférico, ecuación de Helmholtz, funciones de Bessel esféricas.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Resolver la ecuación de Laplace en una esfera sólida dada una condición de frontera arbitraria $V(\theta)$ en la superficie.
- 🧠 **Conceptual:** [Estudiar Cálculo de Variaciones](/metodos-matematicos-para-la-fisica/calculo-de-variaciones) para derivar geodésicas en la esfera. Demostrar la relación de adición de armónicos esféricos.
- 🧪 **Síntesis:** Calcula las frecuencias resonantes de un tambor esférico cerrado buscando las raíces de las funciones de Bessel esféricas.
:::

### Cap. 13 y 14: Frobenius, Fuchs y Sturm-Liouville
- **Física:** Perturbaciones cosmológicas, operadores Hamiltonianos acotados.
- **Temas:** Puntos singulares regulares, ecuación de Bessel, hipergeométrica, teoría espectral de Sturm-Liouville.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Aplicar Frobenius a la ecuación de Bessel $x^2y''+xy'+(x^2-n^2)y=0$ para obtener $J_n(x)$.
- 🧠 **Conceptual:** [Estudiar el Método de Frobenius Logarítmico](/metodos-matematicos-para-la-fisica/metodo-de-frobenius-logaritmico). [Explorar la Ecuación Hipergeométrica](/metodos-matematicos-para-la-fisica/ecuacion-hipergeometrica) como unificador.
- 🧪 **Síntesis:** Demuestra que la cuantización de la energía del oscilador armónico ($\lambda=2n$) surge puramente para evitar que la serie de Frobenius diverja en el infinito.
:::

---

## PARTE V: Funciones de Green y Ecuaciones Integrales
**Semanas 25–29 | Resolviendo la Física con Fuentes**

::: tip 🔬 Mini-Proyecto Integrador: Electrodinámica con Fuentes
Construye $G(\vec{r}, \vec{r}')$ para la ecuación de Poisson en 3 geometrías: espacio libre (Coulomb), semiespacio (imágenes), y caja cúbica (serie de eigenfunciones). Calcula el campo para distribuciones de carga arbitrarias.
:::

### Cap. 15 al 19: Green, Integrales y Asintóticas
- **Física:** Potenciales de Liénard-Wiechert (radiación), dispersión (Lippmann-Schwinger), aproximación WKB.
- **Temas:** $LG=\delta$, causalidad, ecuaciones de Fredholm/Volterra, Fase Estacionaria.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** [Construir G(x,x') formalmente](/metodos-matematicos-para-la-fisica/funciones-de-green-1d). [Resolver ecuaciones integrales simples](/metodos-matematicos-para-la-fisica/ecuaciones-integrales).
- 🧠 **Conceptual:** [Estudiar Expansiones Asintóticas](/metodos-matematicos-para-la-fisica/expansiones-asintoticas). Demostrar que la función de Green de la ecuación de onda debe ser retardada.
- 🧪 **Síntesis:** Deriva la fórmula de Larmor usando la función de Green retardada. Usa el método de Fase Estacionaria para derivar la trayectoria de la luz en el límite óptico.
:::

---

## PARTE VI: Teoría de Grupos
**Semanas 30–36 | La Matemática de la Simetría**

::: tip 🔬 Mini-Proyecto Integrador: Espectroscopía Molecular
Toma el grupo $C_{4v}$ (molécula piramidal cuadrada). Construye su tabla de caracteres completa usando ortogonalidad. Descompón los modos de vibración y usa representaciones irreducibles para predecir qué líneas espectrales aparecerán en Infrarrojo vs. Raman.
:::

### Cap. 20 al 23: Grupos, Representaciones y Tensores Irreducibles
- **Física:** Cristalografía, conservación del momento angular, reglas de selección ópticas, sumas de espín.
- **Temas:** Subgrupos, clases de conjugación, Lema de Schur, caracteres, Clebsch-Gordan, Wigner-Eckart.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** [Aprender a construir Tablas de Caracteres sistemáticamente](/metodos-matematicos-para-la-fisica/tablas-de-caracteres). Calcular coeficientes Clebsch-Gordan para $\frac{1}{2} \otimes \frac{1}{2}$.
- 🧠 **Conceptual:** Demostrar el Lema de Schur y derivar la relación de ortogonalidad de caracteres.
- 🧪 **Síntesis:** [Usa el Teorema de Wigner-Eckart](/metodos-matematicos-para-la-fisica/teorema-de-wigner-eckart) para predecir las líneas espectrales del Efecto Zeeman (reglas de selección $\Delta m$) sin hacer una sola integral.
- ✅ **Autoevaluación:** ¿Puedo descomponer el estado de dos electrones en singlete y triplete?
:::

---

## PARTE VII: Grupos de Lie y Álgebras de Lie
**Semanas 37–42 | Simetrías Continuas y Modelo Estándar**

::: tip 🔬 Mini-Proyecto Integrador: El Modelo de Quark SU(3)
Usa las matrices de Gell-Mann y la teoría de pesos para construir la representación adjunta de SU(3). Calcula $3 \otimes \bar{3} = 8 \oplus 1$ para clasificar el octete de mesones y $3 \otimes 3 \otimes 3$ para hallar el decuplete de bariones.
:::

### Cap. 24 al 27: Álgebras de Lie y Geometría Diferencial
- **Física:** Cromodinámica cuántica (QCD), Relatividad Especial (Lorentz), Mecánica Hamiltoniana (simpléctica).
- **Temas:** El mapa exponencial, corchete de Lie, clasificación de Cartan, variedades diferenciables, álgebra exterior (formas).

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** [Estudiar la Clasificación de Cartan y Álgebras de Lie](/metodos-matematicos-para-la-fisica/algebras-de-lie-y-cartan). Calcular constantes de estructura para $SU(2)$ y $SU(3)$.
- 🧠 **Conceptual:** Demostrar el Teorema de Stokes generalizado $\int_M d\omega = \int_{\partial M} \omega$.
- 🧪 **Síntesis:** Reescribe las 4 ecuaciones de Maxwell clásicas como dos elegantes ecuaciones geométricas: $dF=0$ y $d*F=*J$.
:::
> 💡 *Nota Táctica:* El grupo es la "geometría global", el álgebra de Lie es el "espacio tangente local". Los físicos trabajan casi siempre en el álgebra (momento angular, isospín) y usan la exponencial $e^{i\alpha T}$ para generar la rotación física real.

---

## PARTE VIII: Tensores y Relatividad General
**Semanas 43–46 | La Curvatura del Espacio-Tiempo**

::: tip 🔬 Mini-Proyecto Integrador: Las Ecuaciones de Einstein
Define el tensor métrico $g_{\mu\nu}$ para la métrica de Schwarzschild. Calcula los símbolos de Christoffel, el tensor de Riemann, Ricci, y el escalar $R$. Construye el tensor de Einstein $G_{\mu\nu}$ y verifica que el límite de campo débil recupera la gravedad Newtoniana $\nabla^2 \phi = 4\pi G \rho$.
:::

### Cap. 28: Cálculo Tensorial
- **Física:** Relatividad General, tensores de esfuerzo-energía, fluidos relativistas.
- **Temas:** Covariancia/contravarianza, derivada covariante $\nabla_\mu$, tensores de Riemann y Ricci, Identidades de Bianchi.

::: details 📝 Ejercicios y Autoevaluación
- 🛠️ **Mecánico:** Bajar y subir índices de tensores electromagnéticos. Calcular símbolos de Christoffel para coordenadas esféricas 3D.
- 🧠 **Conceptual:** Demostrar que la derivada covariante transforma correctamente como un tensor. Derivar la conservación $\nabla_\mu G^{\mu\nu} = 0$.
- 🧪 **Síntesis:** Calcula la desviación geodésica (fuerzas de marea gravitacionales) que despedazarían a un astronauta cayendo en un agujero negro usando el tensor de Riemann.
- ✅ **Autoevaluación:** ¿Puedo explicar físicamente por qué necesitamos la derivada covariante en espacios curvos?
:::

---

## ¿Cómo usar este material en conjunto con la web?

A lo largo de los 4 años, usa las secciones de la guía web (como [Variable Compleja](/variable-compleja/), [Ecuaciones Diferenciales](/ecuaciones-diferenciales/) y [Métodos Matemáticos](/metodos-matematicos-para-la-fisica/)) como tus **apuntes formales**. Cuando leas un capítulo del libro de Hassani, busca el concepto correspondiente en la web para ver la demostración desglosada y el rigor topológico o analítico que sostiene esa física. 

¡Éxito en la carrera! La matemática es el lenguaje de la naturaleza; domínala, y dominarás la física.