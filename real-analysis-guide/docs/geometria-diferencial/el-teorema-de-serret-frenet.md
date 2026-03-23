---
title: El Teorema de Serret-Frenet
description: Formulas de Frenet como sistema estructural de curvas espaciales y su demostracion conceptual.
---

# El Teorema de Serret-Frenet

## Enunciado estructural

Sea $\alpha:I\to\mathbb{R}^3$ una curva de clase $C^3$ parametrizada por longitud de arco, con curvatura estrictamente positiva. Entonces existen campos unitarios $T,N,B$ a lo largo de la curva tales que

$$
T=\alpha',
\qquad
T'=\kappa N,
$$

$$
N'=-\kappa T+\tau B,
$$

$$
B'=-\tau N.
$$

Estas son las **ecuaciones de Serret-Frenet**.

## Por que el teorema importa

No se trata solo de una coleccion de identidades. El contenido real es que la geometria local completa de una curva espacial regular queda codificada por la evolucion de un triedro ortonormal gobernado por dos funciones escalares: curvatura y torsion.

## Paso 1: el tangente unitario

Como la curva esta parametrizada por longitud de arco,

$$
\|\alpha'(s)\|=1.
$$

Definimos

$$
T(s)=\alpha'(s).
$$

Al derivar $\langle T,T\rangle=1$, se obtiene

$$
\langle T',T\rangle=0.
$$

Luego $T'$ es ortogonal a $T$.

## Paso 2: la normal principal

Si $\kappa(s)=\|T'(s)\|>0$, definimos

$$
N(s)=\frac{T'(s)}{\|T'(s)\|}.
$$

Entonces

$$
T'(s)=\kappa(s)N(s).
$$

Aqui aparece la curvatura como el modulo del cambio del tangente.

## Paso 3: la binormal

Definimos

$$
B(s)=T(s)\times N(s).
$$

Como $T$ y $N$ son ortonormales, $B$ tambien es unitario y ortogonal a ambos. El triedro $(T,N,B)$ forma una base ortonormal positiva de $\mathbb{R}^3$.

## Paso 4: derivada de la normal

Dado que $N$ es unitario, se tiene

$$
\langle N',N\rangle=0,
$$

asi que $N'$ pertenece al plano generado por $T$ y $B$. Escribimos

$$
N'=aT+bB.
$$

Para hallar $a$, derivamos $\langle N,T\rangle=0$:

$$
\langle N',T\rangle+\langle N,T'\rangle=0.
$$

Usando $T'=\kappa N$ obtenemos

$$
a=-\kappa.
$$

El coeficiente restante se define como la torsion:

$$
b=\tau.
$$

Con ello,

$$
N'=-\kappa T+\tau B.
$$

## Paso 5: derivada de la binormal

Derivando $B=T\times N$,

$$
B'=T'\times N+T\times N'.
$$

Sustituyendo las formulas ya halladas:

$$
B'=(\kappa N)\times N+T\times(-\kappa T+\tau B)=-\tau N.
$$

## Significado de cada ecuacion

- $T'=\kappa N$: el tangente gira hacia la normal con velocidad $\kappa$.
- $N'=-\kappa T+\tau B$: la normal compensa el giro del tangente y registra la salida del plano osculador.
- $B'=-\tau N$: la binormal solo cambia cuando hay torsion.

## Caso plano

Si $\tau\equiv 0$, entonces

$$
B'\equiv 0,
$$

luego la binormal es constante y la curva queda contenida en un plano fijo. Esta es la version diferencial precisa de la planaridad.

## Escritura matricial

El triedro puede escribirse como matriz columna

$$
F=(T\;N\;B),
$$

y las ecuaciones de Frenet toman la forma

$$
F'=FA,
$$

donde

$$
A=
\begin{pmatrix}
0 & -\kappa & 0 \\
\kappa & 0 & -\tau \\
0 & \tau & 0
\end{pmatrix}.
$$

La matriz $A$ es antisimetrica. Esto refleja la preservacion ortonormal del marco.

## Contenido conceptual del teorema

El teorema de Serret-Frenet muestra que la geometria local de una curva no se estudia directamente sobre la posicion, sino sobre la evolucion de un marco movil. Esta idea reaparece en superficies, variedades riemannianas y teoria gauge: la geometria se codifica mediante ecuaciones estructurales de marcos adaptados.

## Cierre

Las ecuaciones de Serret-Frenet no son una curiosidad algebraica, sino el sistema fundamental que organiza la teoria local de curvas espaciales. Separan giro tangencial y torsion espacial, y convierten el estudio de curvas en un problema rigido de ecuaciones diferenciales lineales sobre marcos moviles.
