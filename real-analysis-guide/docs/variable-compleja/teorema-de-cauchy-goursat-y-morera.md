---
title: Teorema de Cauchy-Goursat y Morera
description: Integrales nulas de holomorfas, Morera, consecuencias estructurales e integrales especiales por contornos.
---

# Teorema de Cauchy-Goursat y Morera

## Teorema integral de Cauchy-Goursat

La forma estructural del teorema dice:

si $f$ es holomorfa en un dominio simplemente conexo y $\gamma$ es un contorno cerrado suave a trozos dentro del dominio, entonces

$$
\oint_{\gamma} f(z)\,dz=0.
$$

### Importancia

Este resultado es la columna vertebral de toda la teoria posterior. Desde aqui salen primitivas, formulas integrales, desarrollos en series y rigidez global.

## Filosofia del teorema

La derivabilidad compleja local es tan fuerte que impone cancelacion global en integrales cerradas.

### Moral

Lo local y lo global se acoplan de una forma que no tiene analogo real directo.

## Version por rectangulos

Una prueba clasica empieza con rectangulos, subdivisiones y un paso al limite. La idea es aislar que la holomorfia fuerza pequenez de las integrales sobre contornos cada vez mas pequenos.

## Teorema de Morera y Green complejo

Morera afirma, esquematicamente:

si $f$ es continua en un dominio y la integral sobre todo contorno cerrado apropiado es cero, entonces $f$ es holomorfa.

### Lectura

La anulacion de integrales no es solo consecuencia de holomorfia. Bajo continuidad, la caracteriza.

## Green complejo

Si

$$
f=u+iv
$$

con derivadas parciales continuas, la formula de Green traduce la integral de contorno en una integral de area. Usando Cauchy-Riemann, esa integral de area desaparece.

### Moral

Cauchy-Goursat puede verse como una forma profunda de exactitud compleja.

## Consecuencias del teorema de Cauchy-Goursat

Consecuencias inmediatas:

- independencia del camino;
- existencia de primitivas en dominios simplemente conexos;
- anulacion sobre curvas homotopicas;
- base para la formula integral de Cauchy.

## Existencia de primitivas

Si $f$ es holomorfa en un dominio simplemente conexo, puede definirse

$$
F(z)=\int_{z_0}^z f(\zeta)\,d\zeta
$$

y el teorema de Cauchy garantiza que $F$ no depende del camino.

### Importancia

Esto es extraordinario: toda holomorfa en un dominio simplemente conexo tiene primitiva global.

## Contraste con el caso real

En variable real, la derivada de una funcion continua no agota la teoria global de primitivas en dominios arbitrarios porque la topologia de intervalos es trivial. En variable compleja, la topologia del dominio importa tanto como la holomorfia.

## Integrales especiales usando variable compleja

Una vez que Cauchy permite deformar contornos dentro de dominios donde la funcion es holomorfa, se pueden calcular integrales reales:

- cerrando contornos;
- anadiendo arcos donde la integral desaparece;
- capturando singularidades internas.

### Moral

El plano complejo no se usa por lujo formal, sino porque la deformacion de caminos vuelve calculables integrales que en la recta son opacas.

## Ejemplo guiado: integral de exponencial en contornos

Las estimaciones tipo ML sobre arcos grandes o pequenos permiten justificar que ciertos tramos anadidos no contribuyen en el limite. Esta es la mecanica basica del uso de contornos semicirculares o de ojo de cerradura.

## Homotopia de contornos

Si dos contornos cerrados son homotopicos dentro de un dominio donde $f$ es holomorfa, sus integrales coinciden.

### Lectura

La integral depende solo de la clase topologica del contorno respecto de las singularidades excluidas.

## Papel de la simple conexidad

Sin simple conexidad, el teorema local sigue siendo cierto en regiones suficientemente pequenas, pero las conclusiones globales pueden fallar.

### Ejemplo

En $\mathbb{C}\setminus\{0\}$, la funcion $1/z$ es holomorfa, pero la integral sobre curvas que rodean el origen no se anula.

## Morera como criterio de holomorfia

Morera es extremadamente potente porque convierte informacion integral en diferenciabilidad compleja.

### Importancia

Aparece cuando se construyen funciones como limites o integrales parametricas y se quiere demostrar que son holomorfas sin derivar directamente.

## Puente con funciones armonicas

Cauchy-Goursat y Morera explican por que la teoria compleja reorganiza la teoria potencial:

- armonicidad surge de holomorfia;
- la topologia del dominio controla globalidad;
- las integrales de contorno capturan informacion de interior.

## Ejemplo guiado: deformacion de contorno

Si dos caminos unen los mismos puntos dentro de un dominio simplemente conexo, la diferencia de sus integrales es la integral sobre un contorno cerrado. Cauchy-Goursat la anula.

### Moral

La independencia del camino es realmente una consecuencia del teorema integral.

## Conexion con residuos

Cuando una integral cerrada no se anula, la razon suele ser que el dominio de deformacion contiene singularidades. La teoria de residuos cuantificara exactamente esa obstruccion.

## Errores frecuentes

- usar Cauchy-Goursat en dominios con agujeros sin controlar singularidades;
- pensar que continuidad sola basta para anular integrales cerradas;
- olvidar que Morera necesita continuidad;
- confundir dominio simplemente conexo con solo conexo;
- deformar contornos atravesando singularidades.

## Practica recomendada

1. Deducir independencia del camino a partir de Cauchy-Goursat.
2. Estudiar por que $1/z$ falla globalmente en el plano perforado.
3. Aplicar Morera a una familia de funciones definidas por integrales.
4. Usar estimaciones ML en un contorno auxiliar simple.
5. Relacionar homotopia de contornos con igualdad de integrales.

## Cierre

Cauchy-Goursat y Morera son el verdadero punto de inflexion de variable compleja. A partir de ellos, la derivabilidad local explota en una teoria global de contornos, primitivas e invariancia topologica que no tiene equivalente en calculo real ordinario.
