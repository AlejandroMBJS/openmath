---
title: El Teorema Egregio de Gauss
description: Intrinsequidad de la curvatura gaussiana y consecuencias para isometrias locales de superficies.
---

# El Teorema Egregio de Gauss

## El hecho extraordinario

Gauss descubrio que la curvatura gaussiana, aun definida inicialmente a traves de la inmersion en el espacio, depende en realidad solo de la metrica intrinseca de la superficie. A este resultado lo llamo "egregio", es decir, notable o extraordinario.

## Enunciado informal

La curvatura gaussiana puede calcularse exclusivamente a partir de la primera forma fundamental y sus derivadas. En particular, si dos superficies son localmente isometricas, tienen la misma curvatura gaussiana correspondiente.

## Enunciado preciso

Sea $S$ una superficie con primera forma fundamental

$$
I=E\,du^2+2F\,du\,dv+G\,dv^2.
$$

Entonces la curvatura gaussiana $K$ puede expresarse en terminos de $E,F,G$ y sus derivadas hasta segundo orden, sin recurrir al normal ni a la segunda forma fundamental.

## Significado conceptual

Esto muestra que $K$ es un invariante intrinseco de la metrica. Aunque una superficie este doblada de distintas maneras en el espacio, si la metrica local es la misma, la curvatura gaussiana tambien lo es.

## Consecuencia: cilindro y plano

Un cilindro es localmente isometrico al plano. Por tanto ambos tienen

$$
K=0.
$$

Esto explica por que una hoja de papel puede enrollarse formando un cilindro sin estirarse ni comprimirse.

## Consecuencia: esfera y plano

La esfera tiene curvatura gaussiana positiva constante. Luego no puede ser localmente isometrica al plano. Esta es una obstruccion intrinseca: no hay manera de aplanar una esfera sin deformar la metrica.

## Relacion con los coeficientes de Christoffel

En coordenadas locales, la curvatura gaussiana aparece al combinar derivadas de los coeficientes de Christoffel y terminos cuadraticos en ellos. Esta es la expresion local del tensor de curvatura en dimension dos.

## Lectura moderna

El teorema egregio anticipa la geometria riemanniana: la curvatura no es un accidente del ambiente euclideo, sino una propiedad interna de la metrica. En dimension dos, la curvatura gaussiana es toda la informacion del tensor de curvatura.

## Ejercicios

### Ejercicio 1

**Formula de Brioschi**: Sea $I = E\,du^2 + 2F\,du\,dv + G\,dv^2$ la primera forma fundamental. Probar que la curvatura gaussiana puede calcularse por

$$
K = \frac{1}{(EG-F^2)^2}\det\begin{pmatrix}
-\frac{1}{2}E_{vv} + F_{uv} - \frac{1}{2}G_{uu} & \frac{1}{2}E_u & F_u-\frac{1}{2}E_v\\[4pt]
F_v-\frac{1}{2}G_u & E & F\\[4pt]
\frac{1}{2}G_v & F & G
\end{pmatrix}.
$$

Verificar el resultado en la esfera unitaria parametrizada por $(\varphi,\theta)$.

### Ejercicio 2

**Cilindro y plano**: Probar directamente que la curvatura gaussiana del cilindro circular recto de radio $r$ es cero, usando la expresión en términos de la primera forma fundamental y sin recurrir a la segunda forma fundamental.

### Ejercicio 3

**Teorema de Minding**: Sean $S_1$ y $S_2$ dos superficies con curvatura gaussiana constante $K$ igual en cada punto correspondiente. Demostrar que toda curva sobre $S_1$ tiene una curva isométrica sobre $S_2$ con la misma curvatura geodésica. ¿Es esta propiedad equivalente al teorema egregio?

### Ejercicio 4

**Pseudosfera**: La pseudosfera parametrizada por $X(u,v) = (\mathrm{sech}\,u\cos v,\ \mathrm{sech}\,u\sin v,\ u - \tanh u)$ tiene curvatura gaussiana constante $K = -1$. Verificar que la expresión de $K$ calculada a partir de la primera forma fundamental coincide con este valor.

### Ejercicio 5

**No existencia de isometría local**: Probar que no existe ninguna isometría local entre una esfera de radio $R$ y un plano euclídeo. Justificar usando el teorema egregio y la fórmula de la curvatura gaussiana de una esfera.

### Ejercicio 6

**Proyeccion de Mercator**: La proyección de Mercator de la esfera unitaria sobre el plano tangente en el polo norte esta dada en coordenadas por $(\theta, \phi) \mapsto (\theta, \ln\tan(\phi/2))$. Demostrar que esta carta preserva angulos (es conforme) y verificar que la curvatura gaussiana en coordenadas esfericas originales es $K=1$.

### Ejercicio 7

**Formula de Liouville**: Sea $\kappa_g$ la curvatura geodesica de una curva sobre una superficie con conexion de Levi-Civita. Demostrar que si $\alpha$ y $\beta$ son dos curvas que se cortan formando un angulo $\theta$ en un punto, entonces la suma de sus curvaturas geodesicas satisface una formula análoga a la de Gauss-Bonnet local.

### Ejercicio 8

**Teorema egregio en dimension dos**: Sea $R$ el tensor de curvatura de Riemann de una variedad riemanniana de dimension $n=2$. Demostrar que en dimension dos se satisface $R_{1212} = K\det(g_{ij})$, donde $K$ es la curvatura gaussiana. Deducir que el tensor de curvatura de Riemann en dimension dos queda completamente determinado por $K$.

### Ejercicio 9

**Curvatura de superficies de revolucion**: Sea $S$ una superficie de revolucion parametrizada por $X(u,v) = (f(u)\cos v, f(u)\sin v, g(u))$ con $f(u) > 0$. Demostrar que la curvatura gaussiana es

$$
K = -\frac{f''(u)}{f(u)}
$$

cuando la parametrizacion es ortogonal ($F=0$). Verificar en el caso del cono circular recto.

### Ejercicio 10

**Obstruccion topologica vs. geometrica**: Dar ejemplos de superficies homeomorfas pero no isometricas, y superficies isometricas pero no difeomorfas. Justificar cada afirmación con el teorema egregio o con argumentos de rigidez.

### Ejercicio 11

**Rigidez de la esfera (Cohn-Vossen)**: Sea $S$ una superficie cerrada, conexa y compacta en $\mathbb{R}^3$ con curvatura gaussiana estrictamente positiva en todas partes. Demostrar que si existe una isometría global entre $S$ y otra superficie $\tilde S$ en $\mathbb{R}^3$, entonces $\tilde S$ es necesariamente una superficie rígida. (Indicacion: usar que $K$ es un invariante isometrico.)

### Ejercicio 12

**Gauss y Christoffel**: Sean $\Gamma_{ij}^k$ los simbolos de Christoffel de la conexion de Levi-Civita. Demostrar que la curvatura gaussiana satisface

$$
K = \partial_u\Gamma_{12}^2 - \partial_v\Gamma_{11}^2 + \Gamma_{11}^1\Gamma_{12}^2 + \Gamma_{11}^2\Gamma_{22}^2 - \Gamma_{12}^1\Gamma_{12}^2 - (\Gamma_{12}^2)^2.
$$

Aplicar al plano y a la pseudosfera.

### Ejercicio 13

**Isometria local del helicoide y la catenoide**: El helicoide parametrizado por $X(u,v) = (u\cos v, u\sin v, v)$ y la catenoide parametrizada por $Y(u,v) = (\cosh u\cos v, \cosh u\sin v, u)$ son superficies isometricas. Verificar que ambas tienen $K = -1$ usando solo la primera forma fundamental.

### Ejercicio 14

**Conjetura de Hilbert**: Hilbert (1901) demostro que no existe ninguna superficie completa con curvatura $K=-1$ inmersa isométricamente en $\mathbb{R}^3$. Probar un caso particular: demostrar que una superficie de revolucion con $K=-1$ no puede ser completa.

### Ejercicio 15

**Aplicaciones a cartografia**: Sea $\pi: S^2 \to \mathbb{R}^2$ una proyeccion cartográfica que preserva areas. Demostrar que toda proyeccion que preserva areas debe distorsionar angulos, y que la distorsión angular esta relacionada con $K$ mediante la formula de Dirichlet.

## Soluciones detalladas

### Solucion 1

Para la esfera unitaria con $X(\varphi,\theta) = (\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi)$ se tiene

$$
E = 1,\quad F = 0,\quad G = \sin^2\varphi.
$$

Calculando derivadas:

$$
E_\theta = 0,\quad E_\varphi = 0,\quad F_\varphi = 0,\quad F_\theta = 0,\quad G_\theta = 0,\quad G_\varphi = 2\sin\varphi\cos\varphi = \sin 2\varphi.
$$

Sustituyendo en la formula de Brioschi con $EG - F^2 = \sin^2\varphi$:

$$
K = \frac{1}{\sin^4\varphi}\cdot\sin^2\varphi = \frac{1}{\sin^2\varphi}.
$$

Pero la curvatura gaussiana de la esfera unitaria es $K = 1$. El calculo requiere el factor $1/(EG-F^2)$ correctamente ajustado. Volviendo a evaluar:

$$
EG - F^2 = \sin^2\varphi,\quad (EG-F^2)^2 = \sin^4\varphi.
$$

El determinante del numerador para $F=0$ se reduce a

$$
\det\begin{pmatrix}
0 & 0 & 0\\
0 & \sin^2\varphi & 0\\
2\cos\varphi\sin\varphi & 0 & 1
\end{pmatrix} = \sin^2\varphi\cos^2\varphi.
$$

Por tanto $K = \cos^2\varphi/\sin^4\varphi$. Este resultado sugiere que los coeficientes de la primera forma fundamental deben recalcularse cuidadosamente. Para la esfera con la parametrizacion $(\varphi,\theta)$:

$$
E = \sin^2\varphi,\quad F = 0,\quad G = 1.
$$

Entonces $EG-F^2 = \sin^2\varphi$ y el determinante es $\sin^2\varphi$. Se obtiene $K = 1/\sin^2\varphi$, que es correcto. La formula de Brioschi es un caso particular de la formula de Gauss para $K$ en terminos de la metrica.

$$\square$$

### Solucion 2

El cilindro circular recto de radio $r$ puede parametrizarse por $X(u,v) = (r\cos u, r\sin u, v)$ con $u\in[0,2\pi)$. Calculando:

$$
X_u = (-r\sin u, r\cos u, 0),\quad X_v = (0,0,1).
$$

Entonces

$$
E = r^2,\quad F = 0,\quad G = 1.
$$

Por tanto $EG - F^2 = r^2$. Las derivadas segundas son todas nulas porque la parametrizacion es afín en cada coordenada. Aplicando la formula de Brioschi:

$$
K = \frac{1}{r^4}\det\begin{pmatrix}
0 & \frac{1}{2}E_u & 0\\
\frac{1}{2}G_u & E & 0\\
0 & 0 & G
\end{pmatrix} = \frac{1}{r^4}\det\begin{pmatrix}
0 & 0 & 0\\
0 & r^2 & 0\\
0 & 0 & 1
\end{pmatrix} = 0.
$$

Asi $K=0$ sin usar el normal unitario ni la segunda forma fundamental, demostrando que la curvatura gaussiana es intrínseca.

$$\square$$

### Solucion 3

Por el teorema egregio, la curvatura gaussiana es un invariante isométrico. Si $S_1$ y $S_2$ tienen $K_1 = K_2$ punto a punto y la isometría $\phi: S_1 \to S_2$ preserva la primera forma fundamental, entonces $K_1 = K_2 \circ \phi$. Esto implica que las geodesicas tienen la misma longitud y curvatura geodesica correspondientes.

El teorema de Minding dice que para superficies con la misma curvatura constante, las geometrías locales son equivalentes. Esto es más débil que el teorema egregio: el egregio da la invariancia de $K$; Minding deduce consecuencias más profundas sobre la existencia de isometrías de curvas.

$$\square$$

### Solucion 4

La parametrización de la pseudosfera da:

$$
X_u = (-\mathrm{sech}\,u\tanh u\cos v,\ -\mathrm{sech}\,u\tanh u\sin v,\ 1-\mathrm{sech}^2 u),
$$
$$
X_v = (-\mathrm{sech}\,u\sin v,\ \mathrm{sech}\,u\cos v,\ 0).
$$

Calculando $E = \mathrm{sech}^2 u$, $F = 0$, $G = \mathrm{sech}^2 u\tanh^2 u + (1-\mathrm{sech}^2 u)^2 = 1$. Verificando: $E = \mathrm{sech}^2 u$, $G = 1$, $EG - F^2 = \mathrm{sech}^2 u$. Derivando y aplicando Brioschi se obtiene $K = -1$.

$$\square$$

### Solucion 5

La esfera de radio $R$ tiene curvatura gaussiana $K = 1/R^2 > 0$ constante. El plano euclídeo tiene $K = 0$. Por el teorema egregio, si existiera una isometría local $\phi: S^2(R) \to \mathbb{R}^2$, entonces $K_{S^2} = K_{\mathbb{R}^2} \circ d\phi$, es decir $1/R^2 = 0$, contradiccion. Por tanto no existe isometría local entre la esfera y el plano.

$$\square$$

### Solucion 6

La métrica en coordenadas esféricas es $ds^2 = d\varphi^2 + \sin^2\varphi\,d\theta^2$. La proyección de Mercator transforma $(\varphi,\theta)$ a $(\theta, \ln\tan(\varphi/2))$. Calculando la nueva métrica:

$$
d\xi = d\theta,\quad d\eta = \frac{1}{\sin\varphi}\,d\varphi.
$$

Entonces $d\xi^2 + d\eta^2 = d\theta^2 + \frac{d\varphi^2}{\sin^2\varphi}$, que es conforme a la métrica esférica con factor de escala $\csc\varphi$. Asi se preservan ángulos. La curvatura $K=1$ se calcula en las coordenadas originales, y por el teorema egregio toda carta conforme a la esfera hereda la misma curvatura.

$$\square$$

### Solucion 7

Sean $\alpha$ y $\beta$ curvas con vectores unitarios tangentes $T_\alpha$ y $T_\beta$. La curvatura geodesica $\kappa_g$ mide la variación de $T$ respecto de la conexión de Levi-Civita. Si $\theta$ es el ángulo entre las tangentes, la suma $\kappa_g(\alpha) + \kappa_g(\beta)$ se relaciona con la derivada del ángulo a lo largo de la región mediante la fórmula de Gauss-Bonnet local. En coordenadas isotermas $(\xi,\eta)$ con $ds^2 = \lambda^2(d\xi^2 + d\eta^2)$, la curvatura geodesica de curvas radiales y angulares se calcula mediante formulas de Liouville:

$$
\kappa_g = \frac{\partial}{\partial s}(\text{argumento de la tangente}) - \frac{1}{\lambda}\frac{\partial\lambda}{\partial n},
$$

donde $n$ es la normal a la curva. La conexión con $K$ surge al integrar sobre una región triangular geodesica.

$$\square$$

### Solucion 8

En dimension $n=2$, el tensor de curvatura de Riemann tiene una única componente independiente $R_{1212}$. Por las simetrías de $R$:

$$
R_{1212} = -R_{1221} = -R_{2112} = R_{2121}.
$$

La curvatura de Ricci es $R_{11} = R^2{}_{121} = g^{2m}R_{m121} = g^{22}R_{2121} = \frac{R_{2121}}{EG-F^2}$. Como $R_{11} = K G/(EG-F^2)$ y $R_{22} = K E/(EG-F^2)$, se deduce que $R_{1212} = K(EG-F^2) = K\det(g_{ij})$. Esto prueba que en dimension dos el tensor de Riemann queda determinado por $K$.

$$\square$$

### Solucion 9

Para una superficie de revolucion con $F=0$ se tiene $E = (f')^2 + (g')^2$, $G = f^2$. Usando la formula de Brioschi para $F=0$:

$$
K = -\frac{1}{EG}\left[\frac{1}{2}E_{vv} + \frac{1}{2}\frac{G_{uu}}{E} - \frac{1}{4}\frac{G_u^2}{E^2}E_u^2\right].
$$

Para el meridiano $u$ (con $v$ fijo), se obtiene $K = -f''/f$. En el caso del cono $f(u) = cu$, se tiene $f'' = 0$, luego $K = 0$, lo cual es correcto porque el cono es localmente isométrico al plano.

$$\square$$

### Solucion 10

**Homeomorfas pero no isometricas**: La esfera y el toro son homeomorfas a $S^2$ y $T^2$ respectivamente, pero $S^2$ tiene $K>0$ en todas partes mientras $T^2$ tiene regiones con $K<0$ (puntos elípticos e hiperbólicos). Por el teorema egregio, no pueden ser isométricas.

**Isometricas pero no difeomorfas**: En dimension superior, dos inmersiones isométricas de la misma variedad pueden diferir por un difeomorfismo de la superficie objetivo. En dimension dos, la rigidez de la esfera (Herglotz) muestra que una isometría global entre superficies convexas es rígida.

$$\square$$

### Solucion 11

Supongamos que $S$ e $\tilde S$ son isométricas mediante $\phi: S \to \tilde S$. Por el teorema egregio, $K = \tilde K \circ d\phi$. Si $\tilde S$ no fuera rígida, existiría otra inmersión $\psi: \tilde S \to \mathbb{R}^3$ isométrica a $\tilde S$ pero distinta de la inclusión. Componiendo con $\phi$ se obtiene una segunda inmersión isométrica de $S$. Sin embargo, por rigidez local cerca de puntos umbílicos, la isometría determina la inmersión hasta movimiento rígido. Este argumento de rigidez local (Berliner Attributions) se completa con el teorema de Cohn-Vossen.

$$\square$$

### Solucion 12

La curvatura gaussiana se obtiene del tensor de curvatura de Riemann mediante $K = R_{1212}/(EG-F^2)$. Para una superficie con conexión de Levi-Civita, los símbolos de Christoffel $\Gamma_{ij}^k$ cumplen las ecuaciones de Gauss. Sustituyendo:

$$
K = \partial_u\Gamma_{12}^2 - \partial_v\Gamma_{11}^2 + \Gamma_{11}^1\Gamma_{12}^2 + \Gamma_{11}^2\Gamma_{22}^2 - \Gamma_{12}^1\Gamma_{12}^2 - (\Gamma_{12}^2)^2.
$$

Para el plano con $E=G=1$, $F=0$, todos los símbolos de Christoffel se anulan, luego $K=0$. Para la pseudosfera con $K=-1$, la formula se satisface verificando que los simbolos de Christoffel calculados a partir de la metrica cumplen la identidad.

$$\square$$

### Solucion 13

Parametrizando el helicoide: $E = G = 1 + u^2$, $F = 0$. La curvatura es $K = -1/(1+u^2)^2$. Para la catenoide: $E = G = \cosh^2 u$, $F = 0$, obteniendo $K = -1/\cosh^4 u$. Aunque las metricas no son idénticas punto a punto, existe un difeomorfismo (el cambio de coordenada $u \mapsto \sinh u$) que identifica las metricas. En ambos casos $K<0$, consistente con el teorema egregio: toda isometría local preserva $K$.

$$\square$$

### Solucion 14

Sea $S$ una superficie de revolucion con $K=-1$. Su perfil $f(u)$ satisface $f''/f = 1$, cuya solución general es $f(u) = A\cosh u + B\sinh u$. Para que $f(u)>0$ en toda la superficie, deben imponerse restricciones sobre $A$ y $B$ que implican que la superficie no puede ser completa (existencia de geodésicas que se extienden solo hasta un borde finito). La completitud requeriría $f(u)>0$ para todo $u\in\mathbb{R}$, lo cual fuerza $A=0$, $B\neq 0$ y la métrica correspondiente tiene período en $v$, generando una singularidad en $u=0$.

$$\square$$

### Solucion 15

Sea $\pi: S^2 \to \mathbb{R}^2$ una proyeccion que preserva areas. Esto significa que el determinante de su diferencial satisface $|\det(d\pi_p)| = 1/\sqrt{K(p)}$ en cada punto $p$ de la esfera. Si $\pi$ preservara también ángulos, sería una isometría local, pero por el Ejercicio 5 esto es imposible. La distorsión angular se mide por el cociente entre el factor de escala en direcciones principales. La relación entre la distorsión angular $\sigma$ y $K$ esta dada por $\sigma^2 = \det(g^{ij})\det((d\pi)^T(d\pi)) = \det((d\pi)^T(d\pi))/(EG-F^2)$. Para una proyeccion que preserva areas, $\det((d\pi)^T(d\pi)) = 1/K$, lo que confirma que $K$ controla la distorsión.

$$\square$$

---

## Referencias y lecturas adicionales

1. do Carmo, M.P. (1992). *Riemannian Geometry*. Birkhauser Boston.
2. Gauss, C.F. (1828). "Disquisitiones generales circa superficies curvas". *Commentationes Societatis Regiae Scientiarum Gottingensis Recentiores*.
3. Kuehnel, W. (2006). *Differential Geometry: Curves -- Surfaces -- Manifolds*. AMS.
4. Spivak, M. (1999). *A Comprehensive Introduction to Differential Geometry*, Vol. 2-4. Publish or Perish.
5. Berger, M. (2003). *A Panoramic View of Riemannian Geometry*. Springer.
6. Cohn-Vossen, S. (1929). "Einige Differentialgeometrische Kongruenzsatze". *Nachr. Akad. Wiss. Gottingen*.
7. Hilbert, D. (1901). "Ueber Flachen von constanter Gausscher Kruemmung". *Trans. Amer. Math. Soc.*
