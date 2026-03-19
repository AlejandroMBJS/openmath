---
title: Metodologia de la guia
description: Convenciones editoriales y criterio de calidad matematica para una ruta amplia de estudio entre nivel master y base doctoral.
---

# Metodologia de la guia

Esta guia sigue un criterio fijo para evitar errores de notacion, de redaccion y de contenido matematico. El proyecto ya no cubre solo analisis: ahora funciona como una ruta amplia de estudio en matematicas con aspiracion de nivel master fuerte y base de entrada a trabajo doctoral.

## Convenciones de escritura

- La matematica inline se escribe con `$...$`.
- La matematica en bloque se escribe con `$$...$$`.
- Los backticks se reservan para comandos, rutas y nombres de archivos.
- Cada simbolo nuevo se introduce primero en lenguaje natural.

## Convenciones de contenido

La guia usa dos plantillas segun la naturaleza del tema.

### Temas operativos

Se usan cuando el tema requiere practica tecnica directa, calculo o manipulacion sistematica. Deben incluir:

1. motivacion e intuicion;
2. prerrequisitos;
3. definiciones formales;
4. interpretacion en lenguaje natural;
5. ejemplos basicos;
6. ejemplos finos y contraejemplos;
7. proposiciones y teoremas;
8. demostraciones completas;
9. errores comunes;
10. resumen operativo;
11. ejercicios suficientes para cubrir las variantes relevantes del tema;
12. soluciones completas cuando el bloque requiera practica operativa sistematica.

### Temas teoricos

Se usan cuando el tema es primordialmente estructural o demostrativo. Deben incluir:

1. motivacion e intuicion;
2. prerrequisitos;
3. definiciones formales;
4. interpretacion en lenguaje natural;
5. ejemplos basicos;
6. ejemplos finos y contraejemplos;
7. teoremas y demostraciones;
8. errores comunes;
9. resumen conceptual;
10. ejemplos guiados finales.

Los temas teoricos no llevan lista de ejercicios. En su lugar deben incluir suficientes ejemplos trabajados.

## Criterio de densidad matematica

Un tema no se considera bien desarrollado si solo contiene:

- definiciones aisladas;
- listas de propiedades sin prueba;
- formulas sin interpretacion;
- ejemplos triviales sin contraejemplos.

El estandar buscado es que un lector serio pueda estudiar el tema desde la guia y salir con:

- lenguaje correcto;
- pruebas entendidas;
- ejemplos representativos;
- ubicacion estructural del resultado en el mapa general.

## Criterio de calidad

Un tema no se considera cerrado hasta que:

- todas las formulas renderizan bien en web;
- no hay LaTeX metido en backticks;
- las demostraciones son logicamente correctas;
- si el tema es operativo, los ejercicios y soluciones son consistentes entre si y cubren variantes relevantes;
- si el tema es teorico, hay ejemplos suficientes, matematicamente correctos y realmente informativos;
- no queda texto placeholder.
