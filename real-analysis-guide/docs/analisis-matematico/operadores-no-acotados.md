---
title: Operadores No Acotados
description: Análisis de dominios, clausura y operadores autoadjuntos en espacios de Hilbert de dimensión infinita.
---

# Operadores No Acotados en Espacios de Hilbert

En un espacio vectorial de dimensión finita ($\mathbb{C}^n$), todos los operadores lineales son matrices con norma finita. En dimensión infinita (como $L^2(\mathbb{R})$), esto deja de ser cierto. 

Un operador $T$ es **acotado** si existe una constante $C$ tal que $\|T\psi\| \le C\|\psi\|$ para todo $\psi$.
Si tal constante no existe, el operador es **no acotado**.

## El Operador de Momento es No Acotado
Consideremos el operador de momento $\hat{p} = -i\hbar \frac{d}{dx}$ en $L^2(\mathbb{R})$.
Podemos construir una sucesión de funciones normalizadas $\psi_n(x)$ cuyas derivadas crezcan infinitamente. Por ejemplo, pulsos cada vez más estrechos y altos (que tienden a la delta de Dirac). La norma $\|\hat{p}\psi_n\|$ tiende a infinito. Por lo tanto, $\|\hat{p}\| = \infty$.

**Consecuencia Física:** ¡Los observables fundamentales de la mecánica cuántica ($\hat{x}, \hat{p}, \hat{H}$) son todos operadores no acotados!

## El Problema del Dominio
Dado que $\hat{p}$ aplica derivadas, si le pasamos una función que no es derivable (o cuya derivada no es de cuadrado integrable), el operador escupirá un vector que ya no pertenece al espacio de Hilbert $L^2(\mathbb{R})$.

Por lo tanto, un operador no acotado no puede definirse en todo el espacio de Hilbert. Debe definirse junto con su **Dominio** $\mathcal{D}(T)$, que es un subespacio denso de $H$.
- $\mathcal{D}(\hat{p})$ = {funciones en $L^2$ que son absolutamente continuas y cuya derivada está en $L^2$}.

## Hermitiano vs. Autoadjunto
Aquí yace la diferencia crucial que suele omitirse en textos introductorios de física:

1. **Operador Hermitiano (Simétrico):**
   Un operador $T$ es simétrico si para todo $\phi, \psi$ en $\mathcal{D}(T)$:
   $$\langle \phi, T\psi \rangle = \langle T\phi, \psi \rangle$$

2. **Operador Adjunto ($T^\dagger$):**
   El adjunto se define por la misma relación, pero el dominio $\mathcal{D}(T^\dagger)$ es el conjunto de todas las $\phi$ para las cuales el funcional $\psi \mapsto \langle \phi, T\psi \rangle$ es continuo. Para operadores no acotados, generalmente $\mathcal{D}(T) \subset \mathcal{D}(T^\dagger)$.

3. **Operador Autoadjunto:**
   $T$ es autoadjunto si es simétrico **Y** sus dominios coinciden estrictamente: $\mathcal{D}(T) = \mathcal{D}(T^\dagger)$.

### ¿Por qué importa en Física?
El Teorema Espectral (que garantiza que los eigenvalores son reales y forman una base completa, permitiendo que existan estados estacionarios y probabilidades que sumen a 1) **solo aplica a operadores autoadjuntos**, no a simples operadores hermitianos.

**Ejemplo de desastre matemático:**
El operador momento $\hat{p} = -i \frac{d}{dx}$ en el intervalo $[0, 1]$ con condición $\psi(0)=0$ es hermitiano. Pero **no es autoadjunto** (al tratar de integrar por partes para hallar el adjunto, se generan términos de frontera que requieren diferentes condiciones en $\mathcal{D}(T^\dagger)$). Como resultado, este $\hat{p}$ ingenuo ¡no tiene autofunciones reales y la evolución temporal unitaria $e^{-i\hat{p}t}$ falla!

Para arreglarlo, debemos usar **Extensiones Autoadjuntas** (por ejemplo, imponiendo condiciones de frontera periódicas $\psi(0) = \psi(1)$), lo que fuerza al momento a tener un espectro discreto, restaurando la física sana.
