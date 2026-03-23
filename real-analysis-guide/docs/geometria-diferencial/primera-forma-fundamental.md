---
title: Primera Forma Fundamental
description: Metrica inducida, coeficientes EFG, longitud, area, angulos y lectura intrinseca de la geometria de una superficie.
---

# Primera Forma Fundamental

## Metrica inducida

Sea $X:V\subset\mathbb{R}^2\to S\subset\mathbb{R}^3$ una parametrizacion regular. El producto interno euclideo del ambiente induce sobre cada espacio tangente una forma bilineal simetrica positiva definida.

En coordenadas $(u,v)$ esta forma se expresa como

$$
I=E\,du^2+2F\,du\,dv+G\,dv^2,
$$

donde

$$
E=\langle X_u,X_u\rangle,
\qquad
F=\langle X_u,X_v\rangle,
\qquad
G=\langle X_v,X_v\rangle.
$$

## Significado de E, F y G

Los coeficientes $E,F,G$ codifican la geometria intrinseca de primer orden de la superficie:

- longitudes de vectores tangentes;
- angulos entre direcciones tangentes;
- elementos de area;
- longitudes de curvas sobre la superficie.

## Longitud de una curva sobre la superficie

Si una curva de parametros es $(u(t),v(t))$, la curva sobre la superficie es

$$
\alpha(t)=X(u(t),v(t))
$$

y su velocidad satisface

$$
\|\alpha'(t)\|^2=E(u')^2+2F u'v'+G(v')^2.
$$

Por tanto,

$$
L(\alpha)=\int_a^b \sqrt{E(u')^2+2F u'v'+G(v')^2}\,dt.
$$

## Angulo entre direcciones tangentes

Si

$$
w=aX_u+bX_v,
\qquad
z=cX_u+dX_v,
$$

entonces

$$
\langle w,z\rangle=Eac+F(ad+bc)+Gbd.
$$

Con esto se obtiene el angulo por la formula usual del coseno.

## Elemento de area

El area elemental viene dada por

$$
dA=\|X_u\times X_v\|\,du\,dv=\sqrt{EG-F^2}\,du\,dv.
$$

La expresion $EG-F^2>0$ refleja la independencia lineal de $X_u$ y $X_v$.

## Ejemplo: grafica z=f(u,v)

Para

$$
X(u,v)=(u,v,f(u,v)),
$$

se obtiene

$$
E=1+f_u^2,
\qquad
F=f_uf_v,
\qquad
G=1+f_v^2.
$$

## Ejemplo: esfera unitaria

Con coordenadas esfericas

$$
X(\varphi,\theta)=(\sin\varphi\cos\theta,\sin\varphi\sin\theta,\cos\varphi),
$$

se obtiene

$$
E=1,
\qquad
F=0,
\qquad
G=\sin^2\varphi.
$$

## Interpretacion intrinseca

La primera forma fundamental no necesita curvatura extrinseca para existir. Si dos superficies tienen la misma metrica local, comparten la misma geometria intrinseca de primer orden, aunque puedan estar dobladas de modo distinto en el espacio ambiente.

## Cierre

La primera forma fundamental convierte a una superficie en un espacio metrico infinitesimalmente euclideo. Con los coeficientes $E,F,G$ queda codificada toda la geometria de primer orden: longitudes, angulos y areas. A partir de aqui la teoria puede bifurcarse en dos direcciones: la intrinseca, gobernada por la metrica, y la extrinseca, gobernada por la segunda forma fundamental.
