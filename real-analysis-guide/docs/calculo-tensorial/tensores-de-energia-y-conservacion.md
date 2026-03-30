---
title: Tensores de Energía y Conservación
description: El tensor de energía-impulso, su interpretación física y la ley de conservación en espacio curvo.
---

# Tensores de Energía y Conservación

En relatividad general, la fuente de la gravedad no es solo la masa, sino el flujo de energía y momento. El objeto que describe esto es el **Tensor de Energía-Impulso** $T^{\mu\nu}$.

## El Tensor de Energía-Impulso ($T^{\mu\nu}$)

Es un tensor simétrico de rango 2 que contiene toda la información sobre la materia y campos no gravitatorios:

- $T^{00}$: Densidad de energía.
- $T^{0i}$: Flujo de energía (o densidad de momento).
- $T^{ij}$: Flujo de momento (esfuerzos, presiones y cortes).

### Ejemplo: Fluido Perfecto
Para un fluido con densidad $\rho$ y presión $p$, el tensor es:
$$T^{\mu\nu} = (\rho + p)u^\mu u^\nu + p g^{\mu\nu}$$
Donde $u^\mu$ es la cuadrivelocidad del fluido.

---

## Ley de Conservación y Covariancia

En física clásica, la conservación de la energía y el momento se escribe como $\partial_\mu T^{\mu\nu} = 0$. En presencia de gravedad (espacio curvo), esto se generaliza mediante la **derivada covariante**:

$$\nabla_\mu T^{\mu\nu} = 0$$

### Significado Físico:
Esta ecuación implica que la energía y el momento se conservan localmente. Sin embargo, en un espacio-tiempo dinámico, la energía puede intercambiarse con el campo gravitatorio.

---

## Conexión con las Ecuaciones de Einstein

Las ecuaciones de campo de Einstein relacionan la geometría ($G_{\mu\nu}$) con la materia ($T_{\mu\nu}$):

$$G_{\mu\nu} = 8\pi G T_{\mu\nu}$$

Debido a las **Identidades de Bianchi Contraídas**, sabemos que $\nabla_\mu G^{\mu\nu} = 0$ es una identidad geométrica matemática. Por lo tanto, para que las ecuaciones de Einstein sean consistentes, es **obligatorio** que la materia cumpla $\nabla_\mu T^{\mu\nu} = 0$.

> **Conclusión:** La geometría del espacio-tiempo dicta cómo se mueve la materia, y la materia (a través de su conservación) dicta qué geometrías son físicamente posibles.
