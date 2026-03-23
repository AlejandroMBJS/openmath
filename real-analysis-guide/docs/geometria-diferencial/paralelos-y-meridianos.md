---
title: Paralelos y Meridianos
description: Curvas coordenadas en superficies de revolucion y su papel en la geometria local y global.
---

# Paralelos y Meridianos

## Superficies de revolucion

Una superficie de revolucion se obtiene al girar una curva plana generatriz alrededor de un eje. En ese contexto aparecen dos familias naturales de curvas: meridianos y paralelos.

## Parametrizacion tipica

Si la generatriz se da por $(r(u),z(u))$ con $r(u)>0$, la superficie puede parametrizarse como

$$
X(u,v)=(r(u)\cos v,r(u)\sin v,z(u)).
$$

Aqui:

- $u$ recorre la generatriz;
- $v$ mide el angulo de revolucion.

## Meridianos

Los meridianos se obtienen fijando $v=v_0$ y dejando variar $u$. Son las curvas que siguen la generatriz una vez girada.

Geométricamente, conectan polos o niveles de altura distintos y suelen contener informacion radial de la superficie.

## Paralelos

Los paralelos se obtienen fijando $u=u_0$ y dejando variar $v$. Son circunferencias horizontales alrededor del eje de revolucion.

Su longitud es

$$
L=2\pi r(u_0).
$$

## Ortogonalidad

En la parametrizacion de revolucion anterior,

$$
X_u\cdot X_v=0,
$$

por lo que meridianos y paralelos forman curvas coordenadas ortogonales. Esto simplifica la primera forma fundamental.

## Ejemplo: esfera

En la esfera, los meridianos son semicircunferencias maximas que unen los polos y los paralelos son circunferencias de latitud. Solo el ecuador es una geodesica entre los paralelos.

## Ejemplo: cilindro

En el cilindro, los meridianos son rectas verticales y los paralelos son circunferencias horizontales. Ambos aparecen como curvas coordenadas simples, pero sus propiedades geodesicas difieren.

## Curvatura y coordenadas

En superficies de revolucion, meridianos y paralelos suelen alinearse con direcciones principales. Esto hace que la segunda forma fundamental y las curvaturas principales se expresen de manera natural en esa base coordenada.

## Geodesicidad

No todo paralelo es geodesico. Un paralelo es geodesico solo bajo condiciones especiales, por ejemplo cuando su curvatura geodesica se anula. En la esfera, eso ocurre en el ecuador.

## Cierre

Paralelos y meridianos son las curvas coordenadas mas naturales en superficies de revolucion. Organizan la geometria local, simplifican la metrica y sirven como laboratorio para estudiar geodesicas y curvaturas principales.
