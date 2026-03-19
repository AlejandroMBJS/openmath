---
title: Familias Normales, Montel y Teoremas de Picard
description: Compactidad en espacios de funciones holomorfas, teorema de Montel, teoremas de Picard y consecuencias dinamicas y geometricas.
---

# Familias Normales, Montel y Teoremas de Picard

## Idea central

Una sola funcion holomorfa es rigida. Una familia de funciones holomorfas tambien lo es: bajo cotas adecuadas, no puede oscilar arbitrariamente.

### Lectura

El analisis complejo posee una teoria de compactidad mucho mas fuerte que la del caso real.

## Definicion de familia normal

Una familia $\mathcal{F}$ de funciones holomorfas en un dominio $\Omega$ es normal si de toda sucesion en $\mathcal{F}$ puede extraerse una subsucesion que converge uniformemente en compactos a una funcion holomorfa o a $\infty$.

## Por que la convergencia en compactos

La topologia natural en teoria holomorfa es la convergencia uniforme sobre compactos.

### Razones

- preserva holomorfia del limite;
- interactua bien con Cauchy;
- controla tambien derivadas por estimaciones de Cauchy.

## Teorema de Montel

Toda familia localmente acotada de funciones holomorfas es normal.

### Lectura

Acotacion local implica precompacidad.

## Idea de prueba

En cada compacto se obtienen cotas uniformes de derivadas por Cauchy, luego equicontinuidad, y se aplica Arzela-Ascoli diagonalmente.

## Version omitida de Montel

Si una familia de funciones holomorfas evita dos valores complejos distintos, entonces es normal.

### Importancia

Este criterio es mucho mas fuerte que la mera acotacion local y conduce a Picard.

## Teorema de Vitali

Si una sucesion holomorfa converge puntualmente en un conjunto con punto de acumulacion y es localmente acotada, entonces converge uniformemente en compactos a una holomorfa.

### Rol

Vitali es el principio de identidad combinado con normalidad.

## Lema de Hurwitz

Si $f_n$ son holomorfas no nulas y $f_n\to f$ uniformemente en compactos, entonces o bien $f\equiv 0$ o bien $f$ no se anula.

### Moral

Los ceros no aparecen de la nada en el limite holomorfo.

## Pequeno teorema de Picard

Una funcion entera no constante toma todos los valores complejos salvo, a lo sumo, uno.

### Ejemplos

- $e^z$ omite $0$ y ningun otro valor;
- un polinomio no constante no omite ningun valor complejo.

## Gran teorema de Picard

Cerca de una singularidad esencial, una funcion holomorfa toma todo valor complejo, con a lo sumo una excepcion, infinitas veces.

### Lectura

Las singularidades esenciales no son "puntos complicados"; son focos de comportamiento maximamente salvaje.

## Relacion con Casorati-Weierstrass

Casorati-Weierstrass dice que la imagen de cualquier vecindad perforada de una singularidad esencial es densa en $\mathbb{C}$. Picard refuerza esto de forma draconiana: no solo es densa, casi cubre todo.

## Esquema conceptual Picard-Montel

El pequeno Picard puede derivarse de Montel usando la familia de translaciones y normalidad. El grande Picard se obtiene aplicando el pequeno a una reparametrizacion apropiada cerca de la singularidad.

## Ejemplo guiado: porque $e^{1/z}$ tiene singularidad esencial en $0$

Al acercarse $z\to 0$ por valores reales positivos, $e^{1/z}\to \infty$. Por el eje real negativo, tiende a $0$. Por la recta imaginaria, oscila.

### Conclusion

No es ni removible ni polo. Por Picard grande, cerca de $0$ toma casi todos los valores infinitas veces.

## Normalidad y dinamica compleja

La teoria de familias normales es la base de los conjuntos de Fatou y Julia.

### Lectura

El lugar donde los iterados de una funcion racional forman familia normal es la zona de dinamica estable.

## Criterio de Marty

Una familia es normal si y solo si la derivada esferica es localmente acotada.

### Importancia

Introduce la metrica esferica de la esfera de Riemann como lenguaje natural para normalidad.

## Reescalamiento de Zalcman

Una familia no normal produce, tras reescalamiento, una funcion entera no constante con control esferico.

### Lectura

La perdida de normalidad siempre esconde una estructura entera limite.

## Aplicacion a la inyectividad

Las familias normales ayudan a probar resultados geometricos sobre univalencia y distorsion, y se conectan con Koebe y la teoria geometricofuncional.

## Hurwitz y ceros de limites

Si $f_n$ son univalentes y convergen localmente uniformemente a $f$, entonces $f$ es univalente o constante.

### Razon

La derivada de una univalente no se anula; Hurwitz controla el limite.

## Ejemplo guiado: secuencia $f_n(z)=z^n$ en el disco unidad

En cada compacto estricto del disco, $f_n\to 0$ uniformemente. Sobre la frontera no hay convergencia uniforme.

### Conclusiones

- la convergencia se lee en compactos interiores;
- la frontera puede ser mucho mas delicada;
- la familia es normal en el disco.

## Aplicacion a singularidades

Si una funcion entera omite dos valores, la familia de traslaciones $f(z+a)$ omite esos mismos dos valores. Montel da normalidad y ello fuerza una contradiccion salvo que $f$ sea constante.

## Advertencias

- Normalidad no equivale a convergencia de toda la familia, solo de subsucesiones.
- La convergencia puede ser a $\infty$ en la esfera, no necesariamente a una holomorfa finita.
- Omitir un valor no basta para normalidad; omitir dos si.

## Ejercicios para trabajar

1. Mostrar que la familia $\{nz\}$ no es normal en el plano pero si en el disco como aplicaciones a la esfera con posible limite $\infty$ fuera de $0$.
2. Usar Hurwitz para probar que el limite local uniforme de funciones sin ceros es sin ceros o identicamente nulo.
3. Verificar que $\{e^{nz}\}$ no es normal en bandas verticales suficientemente anchas.

## Cierre

Montel y Picard elevan la teoria desde funciones aisladas hacia compactidad, limite y estructura global. Son el puente entre variable compleja clasica, dinamica compleja y analisis geometricofuncional.
