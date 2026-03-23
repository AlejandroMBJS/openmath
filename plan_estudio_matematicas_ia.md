# Plan de Estudio: Matemáticas para Inteligencia Artificial

## Nivel 1: Fundamentos (8-12 semanas)

### 1. Álgebra Lineal
**Duración**: 4 semanas

**Temas**:
- Vectores y espacios vectoriales
- Operaciones con matrices (suma, multiplicación, transposición)
- Sistemas de ecuaciones lineales
- Determinantes y inversas
- Autovalores y autovectores
- Descomposición de matrices (SVD, QR, LU)
- Proyecciones y transformaciones lineales

**Recursos recomendados**:
- 3Blue1Brown (YouTube): "Essence of Linear Algebra"
- Khan Academy: Álgebra lineal
- Libro: "Linear Algebra Done Right" - Sheldon Axler

**Ejercicios prioritarios**:
- Implementar operaciones matriciales desde cero (sin librerías)
- Calcular autovalores/autovectores manualmente
- Resolver sistemas de ecuaciones con eliminación gaussiana

### 2. Cálculo
**Duración**: 4 semanas

**Temas**:
- Derivadas y reglas de diferenciación
- Integrales
- Cálculo multivariable (gradientes, derivadas parciales)
- Regla de la cadena multivariable
- Optimización (mínimos/máximos)
- Introducción a métodos numéricos

**Recursos recomendados**:
- 3Blue1Brown (YouTube): "Essence of Calculus"
- Khan Academy: Cálculo multivariable
- Libro: "Calculus" - Gilbert Strang

**Ejercicios prioritarios**:
- Calcular gradientes de funciones multivariables
- Encontrar mínimos/máximos locales
- Implementar descenso de gradiente manualmente

### 3. Probabilidad y Estadística
**Duración**: 4 semanas

**Temas**:
- Probabilidad básica y condicional
- Distribuciones de probabilidad (normal, binomial, Poisson, etc.)
- Esperanza, varianza, covarianza
- Teorema de Bayes
- Muestreo y estimación
- Intervalos de confianza
- Hipótesis y tests estadísticos

**Recursos recomendados**:
- Khan Academy: Estadística y probabilidad
- Libro: "Think Stats" - Allen B. Downey (gratis online)
- Curso: "Statistics for Data Science" en Coursera

**Ejercicios prioritarios**:
- Calcular probabilidades condicionales
- Implementar distribuciones desde cero
- Aplicar teorema de Bayes a problemas reales

---

## Nivel 2: Intermedio (12-16 semanas)

### 4. Álgebra Lineal Avanzada
**Duración**: 4 semanas

**Temas**:
- Tensores y operaciones tensoriales
- Factorización de matrices (NMF, ICA)
- Normas matriciales
- Desigualdad de Cauchy-Schwarz
- Espacios de Hilbert (finito-dimensionales)
- Análisis de componentes principales (PCA)

::: warning Nota importante
Los espacios de Hilbert tratados aquí son finito-dimensionales (espacios euclidianos con producto interno). Los espacios de Hilbert infinito-dimensionales, fundamentales para kernels, métodos espectrales y teoría de operadores, se estudian en Análisis Funcional (Nivel 3).
:::

**Aplicaciones en IA**:
- Redes neuronales (operaciones tensoriales)
- Compresión de datos (PCA)
- Sistemas de recomendación (factorización)

**Ejercicios**:
- Implementar PCA desde cero
- Implementar SVD y aplicarlo a compresión de imágenes
- Calcular normas de matrices para regularización

### 5. Cálculo Avanzado
**Duración**: 4 semanas

**Temas**:
- Jacobianos y Hessianos
- Teoría de la optimización convexa
- Condiciones de KKT (Karush-Kuhn-Tucker)
- Métodos de optimización: Newton, BFGS, Adam
- Gradientes estocásticos
- Convergencia y tasas de convergencia

::: warning Nota sobre condiciones KKT
Las condiciones KKT son condiciones necesarias solo bajo **constraint qualifications** (calificaciones de restricciones). Las más comunes son:
- **LICQ** (Linear Independence Constraint Qualification): los gradientes de las restricciones activas son linealmente independientes.
- **MFCQ** (Mangasarian-Fromovitz Constraint Qualification): condición más débil que LICQ.

Siempre verificar estas hipótesis antes de aplicar KKT, pues sin ellas las condiciones pueden no ser necesarias para optimalidad.
:::

**Aplicaciones en IA**:
- Backpropagation
- Optimización de funciones de pérdida
- Regularización (L1, L2, Elastic Net)

**Ejercicios**:
- Calcular Jacobianos y Hessianos manualmente
- Implementar optimizadores desde cero (SGD, Momentum, Adam)
- Analizar convergencia de diferentes métodos

### 6. Probabilidad Avanzada
**Duración**: 4 semanas

**Temas**:
- Inferencia bayesiana
- Distribuciones a priori y a posteriori
- Modelos generativos vs discriminativos
- Maximum Likelihood Estimation (MLE)
- Maximum A Posteriori (MAP)
- Métodos de Monte Carlo (MCMC)

**Aplicaciones en IA**:
- Naive Bayes
- Gaussian Mixture Models
- Variational Autoencoders
- Bayesian Neural Networks

**Ejercicios**:
- Implementar inferencia bayesiana
- Aplicar MCMC a problemas simples
- Comparar MLE vs MAP

### 7. Teoría de la Información
**Duración**: 2 semanas

**Temas**:
- Entropía y entropía cruzada
- Información mutua
- Divergencia de Kullback-Leibler (KL divergence)
- Codificación y compresión
- Teorema de Codificación de Fuente (source coding theorem)
- Teorema del Canal con Ruido (noisy channel coding theorem)
- Teorema de Capacidad de Canal

**Aplicaciones en IA**:
- Función de pérdida cross-entropy
- Regularización (dropout desde perspectiva de información)
- Information bottleneck

**Ejercicios**:
- Calcular entropía de distribuciones
- Implementar cross-entropy loss
- Analizar información mutua en datasets

### 8. Análisis Funcional
**Duración**: 4 semanas

**Temas**:
- Espacios de Banach y espacios de Hilbert infinito-dimensionales
- Operadores lineales acotados
- Teorema de Hahn-Banach
- Teorema de la aplicación abierta y grafo cerrado
- Teoría espectral básica
- Espacios L^p y su dual

**Aplicaciones en IA**:
::: tip Justificación
Los espacios de Hilbert infinito-dimensionales son la base matemática de **kernels en SVM**, **PCA en espacios de funciones** (kernel PCA), y **métodos espectrales** en ML. La teoría de operadores es fundamental para entender convergencia de algoritmos en espacios de funciones.
:::
- Kernel methods (RKHS - Reproducing Kernel Hilbert Spaces)
- GP (Gaussian Processes)
- Análisis espectral de grafos para GNN
- Regularización funcional

**Ejercicios**:
- Verificar que L^2 es espacio de Hilbert
- Demostrar propiedades de operadores compactos
- Calcular espectro de operadores simples

---

## Nivel 3: Avanzado (16-24 semanas)

### 8. Optimización Avanzada
**Duración**: 6 semanas

**Temas**:
- Programación convexa
- Dualidad
- Optimización con restricciones
- Métodos de segundo orden
- Optimización distribuida
- Meta-heurísticas

**Aplicaciones en IA**:
- Support Vector Machines (optimización cuadrática)
- Regularización L1 (LASSO)
- Neural Architecture Search

**Libros recomendados**:
- "Convex Optimization" - Boyd & Vandenberghe (gratis online)
- "Numerical Optimization" - Nocedal & Wright

**Ejercicios**:
- Implementar SVM desde cero
- Resolver problemas de optimización convexa
- Analizar convergencia de diferentes optimizadores

### 9. Teoría de Grafos y Redes
**Duración**: 4 semanas

**Temas**:
- Representación de grafos
- Algoritmos de caminos mínimos
- Centralidad y métricas de grafos
- Grafo espectral (Laplaciano)
- Random walks

**Aplicaciones en IA**:
- Graph Neural Networks
- Sistemas de recomendación
- PageRank

**Ejercicios**:
- Implementar algoritmos de grafos
- Calcular Laplaciano espectral
- Implementar PageRank desde cero

### 10. Geometría Diferencial y Topología
**Duración**: 4 semanas

**Temas**:
- Variedades (manifolds)
- Variedades Riemannianas
- Métricas y geodésicas
- Tensores en espacio curvo
- Topología de datos

**Aplicaciones en IA**:
- Manifold learning
- t-SNE y UMAP
- Normalizing flows
- Geometric Deep Learning

**Ejercicios**:
- Implementar t-SNE desde cero
- Calcular geodésicas en variedades simples
- Analizar estructuras topológicas de datos

### 11. Topología Algebraica (avanzado)
**Duración**: 2 semanas

**Temas**:
- Homología y cohomología
- Grupos fundamentales
- Análisis topológico de datos (TDA)

**Aplicaciones en IA**:
- Persistent homology para análisis de datos
- shape analysis

---

## Nivel 4: Especialización (Opcional)

### 12. Análisis Complejo
**Duración**: 4 semanas

**Temas**:
- Funciones holomorfas y ecuaciones de Cauchy-Riemann
- Teorema integral de Cauchy y consecuencias
- Series de Laurent y clasificación de singularidades
- Teorema de los residuos y aplicaciones a integrales
- Transformadas de Fourier desde perspectiva compleja
- Métodos espectrales y analiticidad

**Aplicaciones en IA**:
- Transformada de Fourier y procesamiento de señales
- Métodos espectrales en ML
- Funciones deGreen y kernels en RKHS
- Análisis de estabilidad en sistemas dinámicos

**Ejercicios**:
- Calcular integrales con residuos
- Demostrar teoremas de analiticidad
- Relacionar series de Fourier con funciones holomorfas

### 13. Teoría de la Medida (para ML teórico)
**Temas**:
- Espacios medibles
- Teorema de Radon-Nikodym
- Integral de Lebesgue

### 14. Lógica y Teoría de Conjuntos (para IA simbólica)
**Temas**:
- Lógica proposicional y de primer orden
- Teoría de modelos
- Razonamiento automatizado

---

## Proyectos Prácticos por Nivel

### Nivel 1 - Proyectos:
1. Implementar regresión lineal desde cero (solo NumPy)
2. Implementar K-means clustering
3. Resolver sistemas de ecuaciones con diferentes métodos

### Nivel 2 - Proyectos:
1. Implementar una red neuronal simple desde cero
2. Implementar PCA y aplicarlo a reducción de dimensionalidad
3. Crear un clasificador Naive Bayes

### Nivel 3 - Proyectos:
1. Implementar un autoencoder variacional (VAE)
2. Implementar Graph Neural Network básica
3. Implementar t-SNE o UMAP desde cero

---

## Herramientas Recomendadas

### Para cálculo matemático:
- SymPy (Python): álgebra simbólica
- NumPy/SciPy: cálculo numérico
- PyTorch/TensorFlow: tensores y autograd

### Para visualización:
- Matplotlib/Seaborn
- Manim (para animaciones matemáticas)

### Para verificación:
- WolframAlpha (verificar cálculos)
- GeoGebra (geometría)

---

## Cronograma Sugerido

| Semanas | Tema | Horas/semana sugeridas |
|---------|------|------------------------|
| 1-4 | Álgebra Lineal | 10-15 |
| 5-8 | Cálculo | 10-15 |
| 9-12 | Probabilidad y Estadística | 10-15 |
| 13-16 | Álgebra Lineal Avanzada | 12-18 |
| 17-20 | Cálculo Avanzado | 12-18 |
| 21-24 | Probabilidad Avanzada | 12-18 |
| 25-26 | Teoría de la Información | 12-18 |
| 27-30 | Análisis Funcional | 15-20 |
| 31-34 | Optimización Avanzada | 15-20 |
| 35-38 | Teoría de Grafos | 12-18 |
| 39-42 | Geometría Diferencial | 12-18 |
| 43-44 | Topología Algebraica | 12-18 |

**Tiempo total**: ~44-48 semanas (10-11 meses) con dedicación consistente

**Ruta opcional (Nivel 4)**: Análisis Complejo (4 semanas adicionales)

---

## Consejos de Estudio

1. **Practica implementando**: Siempre implementa los conceptos desde cero al menos una vez
2. **Verifica con código**: Usa Python/NumPy para verificar tus cálculos manuales
3. **Conecta con IA**: Cada concepto, pregúntate "¿dónde se usa esto en IA?"
4. **Haz ejercicios**: Al menos 10-15 ejercicios por tema
5. **Documenta**: Mantén un cuaderno de notas con tus propios ejemplos
6. **Repite espaciadamente**: Vuelve a temas anteriores cada 2-3 semanas

---

## Recursos Adicionales

### Libros gratuitos:
- "Mathematics for Machine Learning" - Deisenroth, Faisal, Ong (disponible gratis online)
- "Deep Learning" - Goodfellow, Bengio, Courville (capítulos matemáticos)
- "Convex Optimization" - Boyd & Vandenberghe

### Cursos en línea:
- MIT OpenCourseWare: Linear Algebra (Gilbert Strang)
- Stanford: CS229 Machine Learning
- fast.ai: Computational Linear Algebra

### Videos:
- 3Blue1Brown: Essence of Linear Algebra, Calculus, Neural Networks
- StatQuest (Josh Starmer): Estadística para ML