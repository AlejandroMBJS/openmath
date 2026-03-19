import { defineConfig } from "vitepress";
import mathjax3 from "markdown-it-mathjax3";

const githubRepository = process.env.GITHUB_REPOSITORY;
const githubRepositoryName = githubRepository?.split("/")[1];
const docsBase =
  process.env.DOCS_BASE ??
  (process.env.GITHUB_ACTIONS === "true" && githubRepositoryName
    ? `/${githubRepositoryName}/`
    : "/");
const enableLocalSearch =
  process.env.DOCS_LOCAL_SEARCH === "true" ||
  (process.env.DOCS_LOCAL_SEARCH !== "false" && process.env.GITHUB_ACTIONS !== "true");

const realAnalysisItems = [
  { text: "Principio del supremo", link: "/analisis-real/principio-del-supremo" },
  { text: "Sucesiones", link: "/analisis-real/sucesiones" },
  { text: "Convergencia de sucesiones", link: "/analisis-real/convergencia-de-sucesiones" },
  { text: "Sucesiones acotadas", link: "/analisis-real/sucesiones-acotadas" },
  { text: "Operaciones con sucesiones", link: "/analisis-real/operaciones-con-sucesiones" },
  { text: "Subsucesiones", link: "/analisis-real/subsucesiones" },
  { text: "Sucesiones de Cauchy", link: "/analisis-real/sucesiones-de-cauchy" },
  { text: "Bolzano-Weierstrass", link: "/analisis-real/bolzano-weierstrass" },
  { text: "Series", link: "/analisis-real/series" },
  { text: "Series geometricas", link: "/analisis-real/series-geometricas" },
  { text: "Criterios: comparacion y condensacion", link: "/analisis-real/criterios-comparacion-condensacion" },
  { text: "Criterios de Cauchy y de la raiz", link: "/analisis-real/criterios-cauchy-raiz" },
  { text: "Topologia de la recta real", link: "/analisis-real/topologia-recta-real" },
  { text: "Compacidad", link: "/analisis-real/compacidad" },
  { text: "Conexidad", link: "/analisis-real/conexidad" },
  { text: "Limites epsilon-delta", link: "/analisis-real/limites-epsilon-delta" },
  { text: "Continuidad", link: "/analisis-real/continuidad" },
  { text: "Continuidad uniforme", link: "/analisis-real/continuidad-uniforme" },
  { text: "Limites laterales", link: "/analisis-real/limites-laterales" },
  { text: "Integral de Riemann", link: "/analisis-real/integral-de-riemann" },
  { text: "Funciones Riemann integrables", link: "/analisis-real/funciones-riemann-integrables" },
  { text: "Integral definida", link: "/analisis-real/integral-definida" },
  { text: "Derivada", link: "/analisis-real/derivada" },
  { text: "Reglas de derivacion", link: "/analisis-real/reglas-de-derivacion" },
  { text: "Regla de la cadena", link: "/analisis-real/regla-de-la-cadena" },
  { text: "Regla de L'Hopital", link: "/analisis-real/regla-de-lhopital" }
];

const mathematicalAnalysisItems = [
  { text: "Mapa del bloque", link: "/analisis-matematico/" },
  { text: "Espacios metricos", link: "/analisis-matematico/espacios-metricos" },
  { text: "Bolas abiertas en metricos", link: "/analisis-matematico/bolas-abiertas-metricos" },
  { text: "Conjuntos abiertos en metricos", link: "/analisis-matematico/conjuntos-abiertos-metricos" },
  { text: "Topologia de espacios metricos", link: "/analisis-matematico/topologia-espacios-metricos" },
  { text: "Convergencia en metricos", link: "/analisis-matematico/convergencia-sucesiones-metricas" },
  { text: "Puntos de acumulacion y clausura", link: "/analisis-matematico/puntos-acumulacion-clausura" },
  { text: "Frontera en metricos", link: "/analisis-matematico/frontera-conjuntos-metricos" },
  { text: "Sucesiones de Cauchy en metricos", link: "/analisis-matematico/sucesiones-cauchy-metricos" },
  { text: "Completitud", link: "/analisis-matematico/completitud-espacios-metricos" },
  { text: "Espacios separables", link: "/analisis-matematico/espacios-separables" },
  { text: "Teorema de Baire", link: "/analisis-matematico/teorema-baire" },
  { text: "Teorema de Lindelof", link: "/analisis-matematico/teorema-lindelof" },
  { text: "Espacios normados", link: "/analisis-matematico/espacios-normados" },
  { text: "Sucesiones en normados", link: "/analisis-matematico/sucesiones-espacios-normados" },
  { text: "Convexidad en normados", link: "/analisis-matematico/convexidad-espacios-normados" },
  { text: "Continuidad en metricos", link: "/analisis-matematico/continuidad-epsilon-delta-metricos" },
  { text: "Funciones separadoras", link: "/analisis-matematico/funciones-separadoras-puntos" },
  { text: "Homeomorfismos e isometrias", link: "/analisis-matematico/homeomorfismos-isometrias" },
  { text: "Continuidad uniforme en metricos", link: "/analisis-matematico/continuidad-uniforme-metricos" },
  { text: "Compacidad en metricos", link: "/analisis-matematico/compacidad-espacios-metricos" },
  { text: "Bolzano-Weierstrass en metricos", link: "/analisis-matematico/bolzano-weierstrass-metricos" },
  { text: "Heine-Borel en metricos", link: "/analisis-matematico/heine-borel-metrico" },
  { text: "Borel-Lebesgue completo", link: "/analisis-matematico/borel-lebesgue-completo" }
];

const advancedAlgebraItems = [
  { text: "Mapa del bloque", link: "/algebra-superior/" },
  { text: "Preliminares logicos y de conjuntos", link: "/algebra-superior/preliminares-logicos-y-de-conjuntos" },
  { text: "Operaciones entre conjuntos", link: "/algebra-superior/operaciones-entre-conjuntos" },
  { text: "Producto cartesiano, imagen y preimagen", link: "/algebra-superior/producto-cartesiano-imagen-y-preimagen" },
  { text: "Funciones entre conjuntos", link: "/algebra-superior/funciones-entre-conjuntos" },
  { text: "Composicion entre funciones", link: "/algebra-superior/composicion-entre-funciones" },
  { text: "Funciones inyectivas y suprayectivas", link: "/algebra-superior/funciones-inyectivas-y-suprayectivas" },
  { text: "Cardinalidad de conjuntos finitos", link: "/algebra-superior/cardinalidad-de-conjuntos-finitos" },
  { text: "Principio de induccion matematica", link: "/algebra-superior/principio-de-induccion-matematica" },
  { text: "Relaciones de equivalencia", link: "/algebra-superior/relaciones-de-equivalencia" },
  { text: "Particiones y relaciones de equivalencia", link: "/algebra-superior/particiones-y-relaciones-de-equivalencia" },
  { text: "Estructuras numericas", link: "/algebra-superior/estructuras-numericas" }
];

const topologyItems = [
  { text: "Mapa del bloque", link: "/topologia/" },
  { text: "Preliminares de topologia general", link: "/topologia/preliminares-de-topologia-general" },
  { text: "Espacios topologicos y axiomas", link: "/topologia/espacios-topologicos-y-axiomas" },
  { text: "Ejemplos de espacios topologicos", link: "/topologia/ejemplos-de-espacios-topologicos" },
  { text: "Vecindades y bases", link: "/topologia/vecindades-y-bases" },
  { text: "Topologia generada por una base", link: "/topologia/topologia-generada-por-una-base" },
  { text: "Bases locales", link: "/topologia/bases-locales" },
  { text: "Axiomas de numerabilidad", link: "/topologia/axiomas-de-numerabilidad" },
  { text: "Conjuntos cerrados", link: "/topologia/conjuntos-cerrados" },
  { text: "Conjuntos y su cerradura", link: "/topologia/conjuntos-y-su-cerradura" },
  { text: "Interior y puntos de acumulacion", link: "/topologia/interior-y-puntos-de-acumulacion" },
  { text: "Topologia de subespacio", link: "/topologia/topologia-de-subespacio" },
  { text: "Topologia generada por cerradura", link: "/topologia/topologia-generada-por-cerradura" },
  { text: "Axiomas de separacion", link: "/topologia/axiomas-de-separacion" },
  { text: "Continuidad en espacios topologicos", link: "/topologia/continuidad-en-espacios-topologicos" },
  { text: "Compacidad en espacios topologicos", link: "/topologia/compacidad-en-espacios-topologicos" },
  { text: "Conexidad en espacios topologicos", link: "/topologia/conexidad-en-espacios-topologicos" },
  { text: "Topologia producto", link: "/topologia/topologia-producto" },
  { text: "Espacios cociente", link: "/topologia/espacios-cociente" },
  { text: "Redes y filtros", link: "/topologia/redes-y-filtros" }
];

const blockItems = (base: string, topics: Array<[string, string]>) => [
  { text: "Mapa del bloque", link: base },
  ...topics.map(([text, hash]) => ({ text, link: `${base}#${hash}` }))
];

const probabilityStatisticsRouteOverrides: Record<string, string> = {
  "como-calcular-la-esperanza-matematica": "/probabilidad-y-estadistica/esperanza-matematica#como-calcular-la-esperanza-matematica",
  "moda-media-y-mediana-con-integrales": "/probabilidad-y-estadistica/moda-y-mediana#moda-media-y-mediana-con-integrales"
};

const numericalMethodsRouteOverrides: Record<string, string> = {
  "errores-condicionamiento-y-estabilidad": "/metodos-numericos/errores-condicionamiento-y-estabilidad",
  "metodo-de-biseccion": "/metodos-numericos/metodo-de-biseccion",
  "ejemplo-de-biseccion": "/metodos-numericos/metodo-de-biseccion#ejemplo-de-biseccion",
  "error-y-aproximacion-en-biseccion": "/metodos-numericos/metodo-de-biseccion#error-y-aproximacion-en-biseccion",
  "metodo-de-iteracion-de-punto-fijo": "/metodos-numericos/metodo-de-iteracion-de-punto-fijo",
  "ejemplo-de-iteracion-de-punto-fijo": "/metodos-numericos/metodo-de-iteracion-de-punto-fijo#ejemplo-de-iteracion-de-punto-fijo",
  "metodo-de-newton-raphson": "/metodos-numericos/metodo-de-newton-raphson",
  "aproximar-raices-con-newton-raphson": "/metodos-numericos/metodo-de-newton-raphson#aproximar-raices-con-newton-raphson",
  "newton-raphson-vs-punto-fijo": "/metodos-numericos/metodo-de-newton-raphson#newton-raphson-vs-punto-fijo",
  "metodo-de-la-secante": "/metodos-numericos/metodo-de-la-secante",
  "secante-vs-newton-vs-punto-fijo": "/metodos-numericos/metodo-de-la-secante#secante-vs-newton-vs-punto-fijo",
  "newton-raphson-modificado-raices-multiples": "/metodos-numericos/metodo-de-newton-raphson#newton-raphson-modificado-raices-multiples",
  "interpolacion-con-el-polinomio-de-lagrange": "/metodos-numericos/interpolacion-con-el-polinomio-de-lagrange",
  "interpolacion-de-lagrange-con-dos-puntos": "/metodos-numericos/interpolacion-con-el-polinomio-de-lagrange#interpolacion-de-lagrange-con-dos-puntos",
  "polinomio-de-lagrange-con-tres-puntos": "/metodos-numericos/interpolacion-con-el-polinomio-de-lagrange#polinomio-de-lagrange-con-tres-puntos",
  "diferenciacion-numerica": "/metodos-numericos/diferenciacion-numerica",
  "como-hacer-diferenciacion-numerica": "/metodos-numericos/diferenciacion-numerica#como-hacer-diferenciacion-numerica",
  "newton-cotes-diferenciacion-3-y-5-puntos": "/metodos-numericos/newton-cotes-diferenciacion-3-y-5-puntos",
  "metodo-del-trapecio": "/metodos-numericos/metodo-del-trapecio",
  "integrales-por-newton-cotes": "/metodos-numericos/integrales-por-newton-cotes",
  "regla-de-simpson": "/metodos-numericos/regla-de-simpson",
  "regla-de-simpson-compuesta": "/metodos-numericos/regla-de-simpson#regla-de-simpson-compuesta",
  "cuadratura-de-gauss": "/metodos-numericos/cuadratura-de-gauss",
  "como-usar-la-cuadratura-gaussiana": "/metodos-numericos/cuadratura-de-gauss#como-usar-la-cuadratura-gaussiana",
  "newton-cotes-vs-cuadratura-de-gauss": "/metodos-numericos/cuadratura-de-gauss#newton-cotes-vs-cuadratura-de-gauss",
  "edo-aproximacion-con-euler": "/metodos-numericos/edo-aproximacion-con-euler",
  "edo-aproximacion-de-taylor-orden-n": "/metodos-numericos/edo-aproximacion-de-taylor-orden-n",
  "edo-metodo-de-runge-kutta": "/metodos-numericos/edo-metodo-de-runge-kutta",
  "edo-euler-modificado": "/metodos-numericos/edo-euler-modificado",
  "edo-runge-kutta-orden-4": "/metodos-numericos/edo-runge-kutta-orden-4",
  "pivoteo-parcial": "/metodos-numericos/pivoteo-parcial",
  "pivoteo-parcial-escalado": "/metodos-numericos/pivoteo-parcial-escalado",
  "pivoteo-escalado-3x3": "/metodos-numericos/pivoteo-escalado-3x3",
  "factorizacion-matricial-ldlt": "/metodos-numericos/factorizacion-matricial-ldlt",
  "factorizacion-matricial-de-cholesky": "/metodos-numericos/factorizacion-matricial-de-cholesky",
  "metodo-de-minimos-cuadrados": "/metodos-numericos/metodo-de-minimos-cuadrados"
};

const vectorCalculusTopics: Array<[string, string]> = [
  ["Rectas en el espacio", "rectas-en-el-espacio"],
  ["Planos en el espacio", "planos-en-el-espacio"],
  ["Ejercicios con planos y rectas en el espacio", "ejercicios-con-planos-y-rectas-en-el-espacio"],
  ["Distancia de un punto a un plano", "distancia-de-un-punto-a-un-plano"],
  ["Coordenadas cilindricas", "coordenadas-cilindricas"],
  ["Coordenadas esfericas", "coordenadas-esfericas"],
  ["Funciones vectoriales", "funciones-vectoriales"],
  ["Graficar funciones vectoriales", "graficar-funciones-vectoriales"],
  ["Transformar cualquier funcion a una vectorial", "transformar-cualquier-funcion-a-una-vectorial"],
  ["Limite de una funcion vectorial", "limite-de-una-funcion-vectorial"],
  ["Funciones vectoriales, limites, continuidad y dominio", "funciones-vectoriales-limites-continuidad-y-dominio"],
  ["Derivada de una funcion vectorial", "derivada-de-una-funcion-vectorial"],
  ["Derivada como un vector", "derivada-como-un-vector"],
  ["Propiedades de la derivada vectorial", "propiedades-de-la-derivada-vectorial"],
  ["Derivada, producto cruz y producto escalar", "derivada-producto-cruz-y-producto-escalar"],
  ["Integracion de funciones vectoriales", "integracion-de-funciones-vectoriales"],
  ["Definicion de integral en funciones vectoriales", "definicion-de-integral-en-funciones-vectoriales"],
  ["Velocidad, aceleracion y rapidez en R3", "velocidad-aceleracion-y-rapidez-en-r3"],
  ["Funcion posicion a partir de la aceleracion", "funcion-posicion-a-partir-de-la-aceleracion"],
  ["Vector tangente unitario y recta tangente a una curva", "vector-tangente-unitario-y-recta-tangente-a-una-curva"],
  ["Vector unitario normal principal", "vector-unitario-normal-principal"],
  ["Componentes tangencial y normal de la aceleracion", "componentes-tangencial-y-normal-de-la-aceleracion"],
  ["Longitud de arco en funciones vectoriales", "longitud-de-arco-en-funciones-vectoriales"],
  ["Curvatura", "curvatura"],
  ["Funciones de varias variables", "funciones-de-varias-variables"],
  ["Dominio de funciones de varias variables", "dominio-de-funciones-de-varias-variables"],
  ["Graficar una funcion de varias variables", "graficar-una-funcion-de-varias-variables"],
  ["Limite de una funcion de varias variables", "limite-de-una-funcion-de-varias-variables"],
  ["Ejemplos de limites de funciones de varias variables", "ejemplos-de-limites-de-funciones-de-varias-variables"],
  ["Derivadas parciales con funciones de varias variables", "derivadas-parciales-con-funciones-de-varias-variables"],
  ["Derivada direccional y gradiente", "derivada-direccional-y-gradiente"],
  ["Extremos relativos y criterio de la segunda derivada", "extremos-relativos-y-criterio-de-la-segunda-derivada"],
  ["Multiplicadores de Lagrange", "multiplicadores-de-lagrange"],
  ["Integrales dobles y volumen", "integrales-dobles-y-volumen"],
  ["Integrales triples", "integrales-triples"],
  ["Integrales de linea", "integrales-de-linea"],
  ["Teorema de Green", "teorema-de-green"],
  ["Teorema de la divergencia, Gauss-Ostrogradski", "teorema-de-la-divergencia-gauss-ostrogradski"],
  ["Teorema de Stokes", "teorema-de-stokes"]
];

const probabilityStatisticsTopics: Array<[string, string]> = [
  ["Espacios de probabilidad y sigma-algebras", "espacios-de-probabilidad-y-sigma-algebras"],
  ["Concepto de probabilidad", "concepto-de-probabilidad"],
  ["Axiomas de la probabilidad", "axiomas-de-la-probabilidad"],
  ["Teoremas de probabilidad", "teoremas-de-probabilidad"],
  ["Asignacion de probabilidades", "asignacion-de-probabilidades"],
  ["Probabilidad condicional", "probabilidad-condicional"],
  ["Independencia y ley total de la probabilidad", "independencia-y-ley-total-de-la-probabilidad"],
  ["Regla de Bayes", "regla-de-bayes"],
  ["Principio fundamental del conteo", "principio-fundamental-del-conteo"],
  ["Permutaciones", "permutaciones"],
  ["Combinaciones", "combinaciones"],
  ["Variables aleatorias", "variables-aleatorias"],
  ["Distribucion de probabilidad discreta", "distribucion-de-probabilidad-discreta"],
  ["Funcion de distribucion", "funcion-de-distribucion"],
  ["Funcion de densidad", "funcion-de-densidad"],
  ["Esperanza matematica", "esperanza-matematica"],
  ["Como calcular la esperanza matematica", "como-calcular-la-esperanza-matematica"],
  ["Varianza y desviacion estandar", "varianza-y-desviacion-estandar"],
  ["Covarianza", "covarianza"],
  ["Desigualdad de Chebyshev", "desigualdad-de-chebyshev"],
  ["Ley de los grandes numeros", "ley-de-los-grandes-numeros"],
  ["Moda y mediana", "moda-y-mediana"],
  ["Moda, media y mediana con integrales", "moda-media-y-mediana-con-integrales"],
  ["Distribucion binomial", "distribucion-binomial"],
  ["Distribucion normal", "distribucion-normal"],
  ["Distribucion de Poisson", "distribucion-de-poisson"],
  ["Introduccion a la estadistica", "introduccion-a-la-estadistica"],
  ["Distribucion en proporciones", "distribucion-en-proporciones"],
  ["Distribucion de frecuencias", "distribucion-de-frecuencias"],
  ["Estimadores y distribuciones muestrales", "estimadores-y-distribuciones-muestrales"],
  ["Intervalos de confianza para muestras grandes", "intervalos-de-confianza-muestras-grandes"],
  ["Intervalo de confianza para muestras chicas", "intervalo-de-confianza-muestras-chicas"],
  ["Intervalos de confianza para proporciones", "intervalos-de-confianza-para-proporciones"],
  ["Intervalo de confianza para sumas y diferencias de media", "intervalo-de-confianza-para-sumas-y-diferencias-de-media"],
  ["Introduccion a la prueba de hipotesis", "introduccion-a-la-prueba-de-hipotesis"],
  ["Prueba de hipotesis de una cola", "prueba-de-hipotesis-de-una-cola"],
  ["Prueba de hipotesis por metodo valor-p", "prueba-de-hipotesis-metodo-valor-p"],
  ["Prueba de hipotesis de dos colas", "prueba-de-hipotesis-de-dos-colas"],
  ["Prueba de hipotesis con varianza desconocida", "prueba-de-hipotesis-con-varianza-desconocida"],
  ["Prueba de hipotesis para proporciones", "prueba-de-hipotesis-para-proporciones"]
];

const numericalMethodsTopics: Array<[string, string]> = [
  ["Errores, condicionamiento y estabilidad", "errores-condicionamiento-y-estabilidad"],
  ["Metodo de biseccion", "metodo-de-biseccion"],
  ["Ejemplo de biseccion", "ejemplo-de-biseccion"],
  ["Error y aproximacion en biseccion", "error-y-aproximacion-en-biseccion"],
  ["Metodo de iteracion de punto fijo", "metodo-de-iteracion-de-punto-fijo"],
  ["Ejemplo de iteracion de punto fijo", "ejemplo-de-iteracion-de-punto-fijo"],
  ["Metodo de Newton-Raphson", "metodo-de-newton-raphson"],
  ["Aproximar raices con Newton-Raphson", "aproximar-raices-con-newton-raphson"],
  ["Newton-Raphson vs punto fijo", "newton-raphson-vs-punto-fijo"],
  ["Metodo de la secante", "metodo-de-la-secante"],
  ["Secante vs Newton vs punto fijo", "secante-vs-newton-vs-punto-fijo"],
  ["Newton-Raphson modificado para raices multiples", "newton-raphson-modificado-raices-multiples"],
  ["Interpolacion con el polinomio de Lagrange", "interpolacion-con-el-polinomio-de-lagrange"],
  ["Interpolacion de Lagrange con dos puntos", "interpolacion-de-lagrange-con-dos-puntos"],
  ["Polinomio de Lagrange con tres puntos", "polinomio-de-lagrange-con-tres-puntos"],
  ["Diferenciacion numerica", "diferenciacion-numerica"],
  ["Como hacer diferenciacion numerica", "como-hacer-diferenciacion-numerica"],
  ["Newton-Cotes para diferenciacion de 3 y 5 puntos", "newton-cotes-diferenciacion-3-y-5-puntos"],
  ["Metodo del trapecio", "metodo-del-trapecio"],
  ["Regla de Simpson", "regla-de-simpson"],
  ["Integrales por Newton-Cotes", "integrales-por-newton-cotes"],
  ["Regla de Simpson compuesta", "regla-de-simpson-compuesta"],
  ["Cuadratura de Gauss", "cuadratura-de-gauss"],
  ["Como usar la cuadratura gaussiana", "como-usar-la-cuadratura-gaussiana"],
  ["Newton-Cotes vs cuadratura de Gauss", "newton-cotes-vs-cuadratura-de-gauss"],
  ["EDO: aproximacion con Euler", "edo-aproximacion-con-euler"],
  ["EDO: aproximacion de Taylor de orden n", "edo-aproximacion-de-taylor-orden-n"],
  ["EDO: metodo de Runge-Kutta", "edo-metodo-de-runge-kutta"],
  ["EDO: Euler modificado", "edo-euler-modificado"],
  ["EDO: Runge-Kutta de orden 4", "edo-runge-kutta-orden-4"],
  ["Pivoteo parcial", "pivoteo-parcial"],
  ["Pivoteo parcial escalado", "pivoteo-parcial-escalado"],
  ["Pivoteo escalado 3x3", "pivoteo-escalado-3x3"],
  ["Factorizacion matricial LDLt", "factorizacion-matricial-ldlt"],
  ["Factorizacion matricial de Cholesky", "factorizacion-matricial-de-cholesky"],
  ["Metodo de minimos cuadrados", "metodo-de-minimos-cuadrados"]
];

const discreteMathematicsTopics: Array<[string, string]> = [
  ["Conjuntos y subconjuntos", "conjuntos-y-subconjuntos"],
  ["Operaciones con conjuntos", "operaciones-con-conjuntos"],
  ["Algebra de conjuntos", "algebra-de-conjuntos"],
  ["Conteo y conjuntos finitos", "conteo-y-conjuntos-finitos"],
  ["Producto de conjuntos y relaciones", "producto-de-conjuntos-y-relaciones"],
  ["Representacion de relaciones", "representacion-de-relaciones"],
  ["Relaciones de equivalencia", "relaciones-de-equivalencia"],
  ["Relaciones de equivalencia y particiones", "relaciones-de-equivalencia-y-particiones"],
  ["Funciones y algoritmos", "funciones-y-algoritmos"],
  ["Complejidad de algoritmos", "complejidad-de-algoritmos"],
  ["Busqueda lineal y complejidad", "busqueda-lineal-y-complejidad"],
  ["Principios basicos de conteo", "principios-basicos-de-conteo"],
  ["Permutaciones", "permutaciones"],
  ["Combinaciones y principio del palomar", "combinaciones-y-principio-del-palomar"],
  ["Principio de inclusion y exclusion", "principio-de-inclusion-y-exclusion"],
  ["Introduccion a la teoria de grafos", "introduccion-a-la-teoria-de-grafos"],
  ["Pilas, colas y colas prioritarias", "pilas-colas-y-colas-prioritarias"],
  ["Grafos y multigrafos", "grafos-y-multigrafos"],
  ["Grafos finitos, subgrafos, triviales, isomorfias y homomorfias", "grafos-finitos-subgrafos-triviales-isomorfias-y-homomorfias"],
  ["Caminos y conectividad", "caminos-y-conectividad"],
  ["Grafos eulerianos y hamiltonianos", "grafos-eulerianos-y-hamiltonianos"],
  ["Otros tipos de grafos", "otros-tipos-de-grafos"],
  ["Arboles", "arboles"],
  ["Arboles de expansion minima", "arboles-de-expansion-minima"],
  ["Representacion de grafos en la memoria computacional", "representacion-de-grafos-en-la-memoria-computacional"],
  ["Algoritmo de busqueda en profundidad", "algoritmo-de-busqueda-en-profundidad"],
  ["Busqueda de anchura", "busqueda-de-anchura"],
  ["Grafo dirigido", "grafo-dirigido"],
  ["Arboles de raiz", "arboles-de-raiz"],
  ["Arboles binarios", "arboles-binarios"],
  ["Arboles binarios completos y extendidos", "arboles-binarios-completos-y-extendidos"],
  ["Representacion de arboles binarios en la memoria computacional", "representacion-de-arboles-binarios-en-la-memoria-computacional"],
  ["Algoritmo de la division", "algoritmo-de-la-division"],
  ["MCM vs Euclidiano", "mcm-vs-euclidiano"],
  ["Lenguajes y automatas de estado finito", "lenguajes-y-automatas-de-estado-finito"],
  ["Algebra booleana", "algebra-booleana"]
];

const fourierAnalysisTopics: Array<[string, string]> = [
  ["Introduccion a las senales", "introduccion-a-las-senales"],
  ["Senales de tiempo continuo", "senales-de-tiempo-continuo"],
  ["Senales exponenciales", "senales-exponenciales"],
  ["Senales discretas", "senales-discretas"],
  ["Que son los sistemas", "que-son-los-sistemas"],
  ["Sistemas LTI", "sistemas-lti"],
  ["Integral de convolucion", "integral-de-convolucion"],
  ["Ejemplo de integral de convolucion", "ejemplo-de-integral-de-convolucion"],
  ["Convolucion por metodo grafico", "convolucion-por-metodo-grafico"],
  ["Tren de impulsos unitarios", "tren-de-impulsos-unitarios"],
  ["Sistemas LTI discretos", "sistemas-lti-discretos"],
  ["Suma de convolucion", "suma-de-convolucion"],
  ["Transformada de Laplace y los LTI", "transformada-de-laplace-y-los-lti"],
  ["Funcion del sistema", "funcion-del-sistema"],
  ["Sistemas LTI con ecuaciones diferenciales", "sistemas-lti-con-ecuaciones-diferenciales"],
  ["Transformada Z y LTI", "transformada-z-y-lti"],
  ["Transformada Z y sus propiedades", "transformada-z-y-sus-propiedades"],
  ["Transformada Z inversa", "transformada-z-inversa"],
  ["Transformada Z inversa en serie de potencias", "transformada-z-inversa-en-serie-de-potencias"],
  ["Funcion del sistema usando Z", "funcion-del-sistema-usando-z"],
  ["Introduccion a series de Fourier", "introduccion-a-series-de-fourier"],
  ["Coeficientes de la serie de Fourier", "coeficientes-de-la-serie-de-fourier"],
  ["Calcular serie de Fourier: ejemplos", "calcular-serie-de-fourier-ejemplos"],
  ["Paridad e imparidad en serie de Fourier", "paridad-e-imparidad-serie-de-fourier"],
  ["Aplicar paridad e imparidad", "aplicar-paridad-e-imparidad"],
  ["Oscilaciones forzadas y Fourier", "oscilaciones-forzadas-y-fourier"],
  ["Serie compleja de Fourier", "serie-compleja-de-fourier"],
  ["Espectro de amplitud de una senal", "espectro-de-amplitud-de-una-senal"],
  ["Transformada de Fourier", "transformada-de-fourier"],
  ["Transformada de Fourier inversa y espectro", "transformada-de-fourier-inversa-y-espectro"],
  ["Fourier y Laplace", "fourier-y-laplace"],
  ["Propiedades de simetria", "propiedades-de-simetria"],
  ["Teorema de Parseval", "teorema-de-parseval"],
  ["Respuesta en frecuencia", "respuesta-en-frecuencia"],
  ["LTI aplicando Fourier", "lti-aplicando-fourier"],
  ["Filtros", "filtros"],
  ["Ancho de banda", "ancho-de-banda"],
  ["Serie trigonometrica discreta de Fourier", "serie-trigonometrica-discreta-de-fourier"],
  ["Transformada de una senal discreta", "transformada-de-una-senal-discreta"],
  ["Transformada discreta de Fourier", "transformada-discreta-de-fourier"]
];

const complexVariableTopics: Array<[string, string]> = [
  ["El sistema de los numeros complejos", "el-sistema-de-los-numeros-complejos"],
  ["Operaciones con numeros complejos", "operaciones-con-numeros-complejos"],
  ["Modulo de un numero complejo", "modulo-de-un-numero-complejo"],
  ["Forma polar de un numero complejo", "forma-polar-de-un-numero-complejo"],
  ["Teorema de Moivre", "teorema-de-moivre"],
  ["Raices n-esimas de numeros complejos", "raices-nesimas-de-numeros-complejos"],
  ["Calcular raices n-esimas de complejos", "calcular-raices-nesimas-de-complejos"],
  ["Identidad de Euler", "identidad-de-euler"],
  ["Funciones elementales de variable compleja", "funciones-elementales-de-variable-compleja"],
  ["Logaritmo complejo", "logaritmo-complejo"],
  ["Calculo del logaritmo complejo", "calculo-del-logaritmo-complejo"],
  ["Puntos y lineas de ramificacion", "puntos-y-lineas-de-ramificacion"],
  ["Limites por epsilon y delta", "limites-por-epsilon-y-delta"],
  ["Limite con numeros complejos", "limite-con-numeros-complejos"],
  ["Derivada compleja y funciones analiticas", "derivada-compleja-y-funciones-analiticas"],
  ["Derivada compleja por definicion", "derivada-compleja-por-definicion"],
  ["Ecuaciones de Cauchy-Riemann y funciones armonicas", "ecuaciones-de-cauchy-riemann-y-funciones-armonicas"],
  ["Funciones analiticas, armonicas y laplaciano", "funciones-analiticas-armonicas-y-laplaciano"],
  ["Singularidades y polos de funciones complejas", "singularidades-y-polos-de-funciones-complejas"],
  ["Integrales complejas de linea", "integrales-complejas-de-linea"],
  ["Regiones conexas y simplemente conexas", "regiones-conexas-y-simplemente-conexas"],
  ["Teorema integral de Cauchy-Goursat", "teorema-integral-de-cauchy-goursat"],
  ["Teorema de Morera y Green complejo", "teorema-de-morera-y-green-complejo"],
  ["Consecuencias del teorema de Cauchy-Goursat", "consecuencias-del-teorema-de-cauchy-goursat"],
  ["Integrales especiales usando variable compleja", "integrales-especiales-usando-variable-compleja"],
  ["Formula integral de Cauchy", "formula-integral-de-cauchy"],
  ["Demo: teorema de Liouville", "demo-teorema-de-liouville"],
  ["Demo: teorema fundamental del algebra", "demo-teorema-fundamental-del-algebra"],
  ["Demo: teorema del valor medio de Gauss", "demo-teorema-del-valor-medio-gauss"],
  ["Usando la formula integral de Cauchy con derivadas", "usando-la-formula-integral-de-cauchy-con-derivadas"],
  ["Residuos de funciones complejas", "residuos-de-funciones-complejas"],
  ["Como calcular residuos", "como-calcular-residuos"],
  ["El teorema del residuo", "el-teorema-del-residuo"],
  ["Integrales definidas con teorema del residuo", "integrales-definidas-con-teorema-del-residuo"],
  ["Integral impropia racional", "integral-impropia-racional"],
  ["Integral racional de senos y cosenos", "integral-racional-de-senos-y-cosenos"]
];

const differentialGeometryTopics: Array<[string, string]> = [
  ["Introduccion a las curvas derivables", "introduccion-a-las-curvas-derivables"],
  ["Curvas regulares parametrizadas", "curvas-regulares-parametrizadas"],
  ["Longitud de arco y angulo entre curvas", "longitud-de-arco-y-angulo-entre-curvas"],
  ["Curvatura de curvas planas", "curvatura-de-curvas-planas"],
  ["Curvatura y circunferencia osculatriz", "curvatura-y-circunferencia-osculatriz"],
  ["Curvatura con signo", "curvatura-con-signo"],
  ["El triedro de Serret-Frenet", "el-triedro-de-serret-frenet"],
  ["Curvatura y torsion", "curvatura-y-torsion"],
  ["El teorema de Serret-Frenet", "el-teorema-de-serret-frenet"],
  ["Teorema fundamental de la teoria de curvas", "teorema-fundamental-de-la-teoria-de-curvas"],
  ["Plano normal, osculador y rectificador", "plano-normal-osculador-y-rectificador"],
  ["Proyecciones a los planos coordenados", "proyecciones-a-los-planos-coordenados"],
  ["Vectores asociados al triedro", "vectores-asociados-al-triedro"],
  ["Superficies topologicas, cartas y atlas", "superficies-topologicas-cartas-y-atlas"],
  ["Superficie diferenciable", "superficie-diferenciable"],
  ["Propiedades de las superficies", "propiedades-de-las-superficies"],
  ["Paralelos y meridianos", "paralelos-y-meridianos"],
  ["Caracterizacion de las superficies", "caracterizacion-de-las-superficies"],
  ["El toro de dimension 2", "el-toro-de-dimension-2"],
  ["El espacio tangente", "el-espacio-tangente"],
  ["Primera forma fundamental", "primera-forma-fundamental"],
  ["Ejemplos de metrica riemanniana", "ejemplos-de-metrica-riemanniana"],
  ["Longitud en superficies diferenciables", "longitud-en-superficies-diferenciables"],
  ["Curvatura de una superficie", "curvatura-de-una-superficie"],
  ["Superficie diferenciable orientada", "superficie-diferenciable-orientada"],
  ["Aplicacion de Gauss", "aplicacion-de-gauss"],
  ["La segunda forma fundamental", "la-segunda-forma-fundamental"],
  ["El teorema de Euler", "el-teorema-de-euler"],
  ["Curvatura normal", "curvatura-normal"],
  ["Clasificacion de puntos de una superficie", "clasificacion-de-puntos-de-una-superficie"],
  ["Curvatura gaussiana", "curvatura-gaussiana"],
  ["Ecuaciones de Weingarten", "ecuaciones-de-weingarten"],
  ["Coeficientes de Christoffel", "coeficientes-de-christoffel"],
  ["El teorema egregio de Gauss", "el-teorema-egregio-de-gauss"]
];

const mathematicalMethodsPhysicsTopics: Array<[string, string]> = [
  ["Sistemas coordenados", "sistemas-coordenados"],
  ["Coordenadas curvilineas", "coordenadas-curvilineas"],
  ["Vectores diferenciales", "vectores-diferenciales"],
  ["Cosenos de direccion", "cosenos-de-direccion"],
  ["Matriz de cosenos de direccion", "matriz-de-cosenos-de-direccion"],
  ["Matrices hermitianas y unitarias", "matrices-hermitianas-y-unitarias"],
  ["Matrices de Pauli y Dirac", "matrices-de-pauli-y-dirac"],
  ["Definicion de grupo", "definicion-de-grupo"],
  ["El grupo de Klein", "el-grupo-de-klein"],
  ["Isomorfismo y homomorfismo", "isomorfismo-y-homomorfismo"],
  ["Matrices reducibles e irreducibles", "matrices-reducibles-e-irreducibles"],
  ["Traza y subgrupo", "traza-y-subgrupo"],
  ["Rotacion con doble simetria", "rotacion-con-doble-simetria"],
  ["Rotaciones con triple simetria", "rotaciones-con-triple-simetria"],
  ["Grupos dihedrales", "grupos-dihedrales"],
  ["Grupos y puntos cristalograficos", "grupos-y-puntos-cristalograficos"],
  ["Grupos de Lie continuos", "grupos-de-lie-continuos"],
  ["Grupo ortogonal", "grupo-ortogonal"],
  ["Grupo unitario especial", "grupo-unitario-especial"],
  ["Desarrollo de Taylor", "desarrollo-de-taylor"],
  ["Teorema de Maclaurin", "teorema-de-maclaurin"],
  ["Teorema binomial", "teorema-binomial"],
  ["Series y la energia relativista", "series-y-la-energia-relativista"],
  ["Taylor en varias variables", "taylor-en-varias-variables"],
  ["Pendulo e integrales elipticas", "pendulo-e-integrales-elipticas"],
  ["Integral eliptica de primera y segunda clase", "integral-eliptica-de-primera-y-segunda-clase"],
  ["Numeros de Bernoulli", "numeros-de-bernoulli"],
  ["Funciones de Bernoulli", "funciones-de-bernoulli"],
  ["Formula de integracion Euler-Maclaurin", "formula-de-integracion-euler-maclaurin"],
  ["Funcion zeta de Riemann", "funcion-zeta-de-riemann"],
  ["Productos infinitos de funciones", "productos-infinitos-de-funciones"],
  ["Funcion Gamma con senos y cosenos", "funcion-gamma-con-senos-y-cosenos"],
  ["Funcion Gamma: representaciones", "funcion-gamma-representaciones"],
  ["Notacion factorial de la funcion Gamma", "notacion-factorial-de-la-funcion-gamma"],
  ["Representacion integral de la funcion Gamma", "representacion-integral-funcion-gamma"]
];

const tensorCalculusTopics: Array<[string, string]> = [
  ["Convenio de la suma de Einstein", "convenio-de-la-suma-de-einstein"],
  ["Sustitucion y sumas dobles", "sustitucion-y-sumas-dobles"],
  ["Delta de Kronecker", "delta-de-kronecker"],
  ["Algebra lineal en notacion tensorial", "algebra-lineal-en-notacion-tensorial"],
  ["Matrices y vectores tensoriales", "matrices-y-vectores-tensoriales"],
  ["Sistemas lineales y formas cuadraticas", "sistemas-lineales-y-formas-cuadraticas"],
  ["Transformaciones lineales y distancias", "transformaciones-lineales-y-distancias"],
  ["Transformaciones generales de coordenadas", "transformaciones-generales-de-coordenadas"],
  ["Cambio de coordenadas", "cambio-de-coordenadas"],
  ["Tensores de primer orden contravariante", "tensores-de-primer-orden-contravariante"],
  ["Tensores de primer orden covariantes", "tensores-de-primer-orden-covariantes"],
  ["Objetos tensoriales invariantes", "objetos-tensoriales-invariantes"],
  ["Tensores de orden superior", "tensores-de-orden-superior"],
  ["El tensor de esfuerzos", "el-tensor-de-esfuerzos"],
  ["Tensores cartesianos afines", "tensores-cartesianos-afines"],
  ["Ejercicios sobre tensores", "ejercicios-sobre-tensores"],
  ["Operaciones y algebra con tensores", "operaciones-y-algebra-con-tensores"],
  ["Criterios de tensorialidad", "criterios-de-tensorialidad"],
  ["Ecuaciones e identidades tensoriales", "ecuaciones-e-identidades-tensoriales"],
  ["El tensor metrico", "el-tensor-metrico"],
  ["La metrica tensorial generalizada", "la-metrica-tensorial-generalizada"],
  ["Tensor metrico conjugado, subir y bajar indices", "tensor-metrico-conjugado"],
  ["Espacios con producto interno y angulos", "espacios-con-producto-interno-y-angulos"],
  ["Derivada tensorial y simbolos de Christoffel", "derivada-tensorial-y-simbolos-de-christoffel"],
  ["Derivada absoluta a lo largo de una curva", "derivada-absoluta-a-lo-largo-de-una-curva"],
  ["Introduccion a los espacios de Riemann", "introduccion-a-los-espacios-de-riemann"],
  ["El tensor de Riemann", "el-tensor-de-riemann"],
  ["Propiedades del tensor de Riemann", "propiedades-del-tensor-de-riemann"],
  ["Curvatura de Riemann", "curvatura-de-riemann"],
  ["El tensor de Ricci", "el-tensor-de-ricci"],
  ["La metrica euclidea y curvatura de Ricci", "la-metrica-euclidea-y-curvatura-de-ricci"],
  ["El tensor de Einstein", "el-tensor-de-einstein"]
];

const vectorCalculusItems = [
  { text: "Mapa del bloque", link: "/calculo-vectorial/" },
  { text: "Rectas en el espacio", link: "/calculo-vectorial/rectas-en-el-espacio" },
  { text: "Planos en el espacio", link: "/calculo-vectorial/planos-en-el-espacio" },
  { text: "Ejercicios con planos y rectas en el espacio", link: "/calculo-vectorial/ejercicios-con-planos-y-rectas-en-el-espacio" },
  { text: "Distancia de un punto a un plano", link: "/calculo-vectorial/distancia-de-un-punto-a-un-plano" },
  { text: "Coordenadas cilindricas", link: "/calculo-vectorial/coordenadas-cilindricas" },
  { text: "Coordenadas esfericas", link: "/calculo-vectorial/coordenadas-esfericas" },
  { text: "Funciones vectoriales", link: "/calculo-vectorial/funciones-vectoriales" },
  { text: "Graficar funciones vectoriales", link: "/calculo-vectorial/funciones-vectoriales#graficar-funciones-vectoriales" },
  { text: "Transformar cualquier funcion a una vectorial", link: "/calculo-vectorial/funciones-vectoriales#transformar-cualquier-funcion-a-una-vectorial" },
  { text: "Limite de una funcion vectorial", link: "/calculo-vectorial/limite-de-una-funcion-vectorial" },
  { text: "Funciones vectoriales, limites, continuidad y dominio", link: "/calculo-vectorial/limite-de-una-funcion-vectorial#funciones-vectoriales-limites-continuidad-y-dominio" },
  { text: "Derivada de una funcion vectorial", link: "/calculo-vectorial/derivada-de-una-funcion-vectorial" },
  { text: "Derivada como un vector", link: "/calculo-vectorial/derivada-de-una-funcion-vectorial#derivada-como-un-vector" },
  { text: "Propiedades de la derivada vectorial", link: "/calculo-vectorial/derivada-de-una-funcion-vectorial#propiedades-de-la-derivada-vectorial" },
  { text: "Derivada, producto cruz y producto escalar", link: "/calculo-vectorial/derivada-de-una-funcion-vectorial#derivada-producto-cruz-y-producto-escalar" },
  { text: "Integracion de funciones vectoriales", link: "/calculo-vectorial/integracion-de-funciones-vectoriales" },
  { text: "Definicion de integral en funciones vectoriales", link: "/calculo-vectorial/integracion-de-funciones-vectoriales#definicion-de-integral-en-funciones-vectoriales" },
  { text: "Velocidad, aceleracion y rapidez en R3", link: "/calculo-vectorial/velocidad-aceleracion-y-rapidez-en-r3" },
  { text: "Funcion posicion a partir de la aceleracion", link: "/calculo-vectorial/velocidad-aceleracion-y-rapidez-en-r3#funcion-posicion-a-partir-de-la-aceleracion" },
  { text: "Vector tangente unitario y recta tangente a una curva", link: "/calculo-vectorial/vector-tangente-unitario-y-recta-tangente-a-una-curva" },
  { text: "Vector unitario normal principal", link: "/calculo-vectorial/vector-unitario-normal-principal" },
  { text: "Componentes tangencial y normal de la aceleracion", link: "/calculo-vectorial/componentes-tangencial-y-normal-de-la-aceleracion" },
  { text: "Longitud de arco en funciones vectoriales", link: "/calculo-vectorial/longitud-de-arco-en-funciones-vectoriales" },
  { text: "Curvatura", link: "/calculo-vectorial/curvatura" },
  { text: "Funciones de varias variables", link: "/calculo-vectorial/funciones-de-varias-variables" },
  { text: "Dominio de funciones de varias variables", link: "/calculo-vectorial/funciones-de-varias-variables#dominio-de-funciones-de-varias-variables" },
  { text: "Graficar una funcion de varias variables", link: "/calculo-vectorial/funciones-de-varias-variables#graficar-una-funcion-de-varias-variables" },
  { text: "Limite de una funcion de varias variables", link: "/calculo-vectorial/limite-de-una-funcion-de-varias-variables" },
  { text: "Ejemplos de limites de funciones de varias variables", link: "/calculo-vectorial/limite-de-una-funcion-de-varias-variables#ejemplos-de-limites-de-funciones-de-varias-variables" },
  { text: "Derivadas parciales con funciones de varias variables", link: "/calculo-vectorial/derivadas-parciales-con-funciones-de-varias-variables" },
  { text: "Derivada direccional y gradiente", link: "/calculo-vectorial/derivada-direccional-y-gradiente" },
  { text: "Extremos relativos y criterio de la segunda derivada", link: "/calculo-vectorial/extremos-relativos-y-criterio-de-la-segunda-derivada" },
  { text: "Multiplicadores de Lagrange", link: "/calculo-vectorial/multiplicadores-de-lagrange" },
  { text: "Integrales dobles y volumen", link: "/calculo-vectorial/integrales-dobles-y-volumen" },
  { text: "Integrales triples", link: "/calculo-vectorial/integrales-triples" },
  { text: "Integrales de linea", link: "/calculo-vectorial/integrales-de-linea" },
  { text: "Integrales de superficie y flujo", link: "/calculo-vectorial/integrales-de-superficie-y-flujo" },
  { text: "Teorema de Green", link: "/calculo-vectorial/teorema-de-green" },
  { text: "Teorema de la divergencia, Gauss-Ostrogradski", link: "/calculo-vectorial/teorema-de-la-divergencia-gauss-ostrogradski" },
  { text: "Teorema de Stokes", link: "/calculo-vectorial/teorema-de-stokes" }
];
const probabilityStatisticsItems = [
  { text: "Mapa del bloque", link: "/probabilidad-y-estadistica/" },
  ...probabilityStatisticsTopics.map(([text, hash]) => ({
    text,
    link: probabilityStatisticsRouteOverrides[hash] ?? `/probabilidad-y-estadistica/${hash}`
  }))
];
const numericalMethodsItems = [
  { text: "Mapa del bloque", link: "/metodos-numericos/" },
  ...numericalMethodsTopics.map(([text, hash]) => ({
    text,
    link: numericalMethodsRouteOverrides[hash] ?? `/metodos-numericos/#${hash}`
  }))
];
const discreteMathematicsItems = blockItems("/matematicas-discretas/", discreteMathematicsTopics);
const fourierAnalysisItems = [
  { text: "Mapa del bloque", link: "/analisis-de-fourier/" },
  { text: "Introduccion a las senales", link: "/analisis-de-fourier/senales-y-sistemas#introduccion-a-las-senales" },
  { text: "Senales de tiempo continuo", link: "/analisis-de-fourier/senales-y-sistemas#senales-de-tiempo-continuo" },
  { text: "Senales exponenciales", link: "/analisis-de-fourier/senales-y-sistemas#senales-exponenciales" },
  { text: "Senales discretas", link: "/analisis-de-fourier/senales-y-sistemas#senales-discretas" },
  { text: "Que son los sistemas", link: "/analisis-de-fourier/senales-y-sistemas#que-son-los-sistemas" },
  { text: "Sistemas LTI", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#sistemas-lti" },
  { text: "Integral de convolucion", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#integral-de-convolucion" },
  { text: "Ejemplo de integral de convolucion", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#ejemplo-de-integral-de-convolucion" },
  { text: "Convolucion por metodo grafico", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#convolucion-por-metodo-grafico" },
  { text: "Tren de impulsos unitarios", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#tren-de-impulsos-unitarios" },
  { text: "Sistemas LTI discretos", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#sistemas-lti-discretos" },
  { text: "Suma de convolucion", link: "/analisis-de-fourier/sistemas-lti-y-convolucion#suma-de-convolucion" },
  { text: "Transformada de Laplace y los LTI", link: "/analisis-de-fourier/transformada-de-laplace-y-funcion-del-sistema#transformada-de-laplace-y-los-lti" },
  { text: "Funcion del sistema", link: "/analisis-de-fourier/transformada-de-laplace-y-funcion-del-sistema#funcion-del-sistema" },
  { text: "Sistemas LTI con ecuaciones diferenciales", link: "/analisis-de-fourier/transformada-de-laplace-y-funcion-del-sistema#sistemas-lti-con-ecuaciones-diferenciales" },
  { text: "Fourier y Laplace", link: "/analisis-de-fourier/transformada-de-laplace-y-funcion-del-sistema#fourier-y-laplace" },
  { text: "Transformada Z y LTI", link: "/analisis-de-fourier/transformada-z-y-tiempo-discreto#transformada-z-y-lti" },
  { text: "Transformada Z y sus propiedades", link: "/analisis-de-fourier/transformada-z-y-tiempo-discreto#transformada-z-y-sus-propiedades" },
  { text: "Transformada Z inversa", link: "/analisis-de-fourier/transformada-z-y-tiempo-discreto#transformada-z-inversa" },
  { text: "Transformada Z inversa en serie de potencias", link: "/analisis-de-fourier/transformada-z-y-tiempo-discreto#transformada-z-inversa-en-serie-de-potencias" },
  { text: "Funcion del sistema usando Z", link: "/analisis-de-fourier/transformada-z-y-tiempo-discreto#funcion-del-sistema-usando-z" },
  { text: "Introduccion a series de Fourier", link: "/analisis-de-fourier/series-de-fourier#introduccion-a-series-de-fourier" },
  { text: "Coeficientes de la serie de Fourier", link: "/analisis-de-fourier/series-de-fourier#coeficientes-de-la-serie-de-fourier" },
  { text: "Calcular serie de Fourier: ejemplos", link: "/analisis-de-fourier/series-de-fourier#calcular-serie-de-fourier-ejemplos" },
  { text: "Paridad e imparidad en serie de Fourier", link: "/analisis-de-fourier/series-de-fourier#paridad-e-imparidad-serie-de-fourier" },
  { text: "Aplicar paridad e imparidad", link: "/analisis-de-fourier/series-de-fourier#aplicar-paridad-e-imparidad" },
  { text: "Oscilaciones forzadas y Fourier", link: "/analisis-de-fourier/series-de-fourier#oscilaciones-forzadas-y-fourier" },
  { text: "Serie compleja de Fourier", link: "/analisis-de-fourier/series-de-fourier#serie-compleja-de-fourier" },
  { text: "Espectro de amplitud de una senal", link: "/analisis-de-fourier/series-de-fourier#espectro-de-amplitud-de-una-senal" },
  { text: "Transformada de Fourier", link: "/analisis-de-fourier/transformada-de-fourier#transformada-de-fourier" },
  { text: "Transformada de Fourier inversa y espectro", link: "/analisis-de-fourier/transformada-de-fourier#transformada-de-fourier-inversa-y-espectro" },
  { text: "Propiedades de simetria", link: "/analisis-de-fourier/transformada-de-fourier#propiedades-de-simetria" },
  { text: "Teorema de Parseval", link: "/analisis-de-fourier/transformada-de-fourier#teorema-de-parseval" },
  { text: "Respuesta en frecuencia", link: "/analisis-de-fourier/respuesta-en-frecuencia-y-filtros#respuesta-en-frecuencia" },
  { text: "LTI aplicando Fourier", link: "/analisis-de-fourier/respuesta-en-frecuencia-y-filtros#lti-aplicando-fourier" },
  { text: "Filtros", link: "/analisis-de-fourier/respuesta-en-frecuencia-y-filtros#filtros" },
  { text: "Ancho de banda", link: "/analisis-de-fourier/respuesta-en-frecuencia-y-filtros#ancho-de-banda" },
  { text: "Serie trigonometrica discreta de Fourier", link: "/analisis-de-fourier/transformada-discreta-de-fourier#serie-trigonometrica-discreta-de-fourier" },
  { text: "Transformada de una senal discreta", link: "/analisis-de-fourier/transformada-discreta-de-fourier#transformada-de-una-senal-discreta" },
  { text: "Transformada discreta de Fourier", link: "/analisis-de-fourier/transformada-discreta-de-fourier#transformada-discreta-de-fourier" },
  { text: "Espacios de Schwartz y distribuciones temperadas", link: "/analisis-de-fourier/espacios-de-schwartz-y-distribuciones-temperadas" },
  { text: "Teoremas de inversion y Plancherel", link: "/analisis-de-fourier/teoremas-de-inversion-y-plancherel" },
  { text: "Paley-Wiener, incertidumbre y muestreo", link: "/analisis-de-fourier/paley-wiener-incertidumbre-y-muestreo" },
  { text: "Multiplicadores de Fourier y operadores singulares", link: "/analisis-de-fourier/multiplicadores-de-fourier-y-operadores-singulares" },
  { text: "Analisis tiempo-frecuencia y wavelets", link: "/analisis-de-fourier/analisis-tiempo-frecuencia-y-wavelets" },
  { text: "Fase estacionaria e integrales oscilatorias", link: "/analisis-de-fourier/fase-estacionaria-e-integrales-oscilatorias" },
  { text: "Littlewood-Paley y espacios de Besov", link: "/analisis-de-fourier/littlewood-paley-y-espacios-de-besov" },
  { text: "Hardy, Hilbert y senal analitica", link: "/analisis-de-fourier/hardy-hilbert-y-senal-analitica" }
];
const complexVariableItems = [
  { text: "Mapa del bloque", link: "/variable-compleja/" },
  { text: "El sistema de los numeros complejos", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#el-sistema-de-los-numeros-complejos" },
  { text: "Operaciones con numeros complejos", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#operaciones-con-numeros-complejos" },
  { text: "Modulo de un numero complejo", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#modulo-de-un-numero-complejo" },
  { text: "Forma polar de un numero complejo", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#forma-polar-de-un-numero-complejo" },
  { text: "Teorema de Moivre", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#teorema-de-moivre" },
  { text: "Raices n-esimas de numeros complejos", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#raices-nesimas-de-numeros-complejos" },
  { text: "Calcular raices n-esimas de complejos", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#calcular-raices-nesimas-de-complejos" },
  { text: "Identidad de Euler", link: "/variable-compleja/sistema-de-los-numeros-complejos-y-forma-polar#identidad-de-euler" },
  { text: "Funciones elementales de variable compleja", link: "/variable-compleja/funciones-elementales-logaritmo-y-ramificacion#funciones-elementales-de-variable-compleja" },
  { text: "Logaritmo complejo", link: "/variable-compleja/funciones-elementales-logaritmo-y-ramificacion#logaritmo-complejo" },
  { text: "Calculo del logaritmo complejo", link: "/variable-compleja/funciones-elementales-logaritmo-y-ramificacion#calculo-del-logaritmo-complejo" },
  { text: "Puntos y lineas de ramificacion", link: "/variable-compleja/funciones-elementales-logaritmo-y-ramificacion#puntos-y-lineas-de-ramificacion" },
  { text: "Limites por epsilon y delta", link: "/variable-compleja/limites-y-derivada-compleja#limites-por-epsilon-y-delta" },
  { text: "Limite con numeros complejos", link: "/variable-compleja/limites-y-derivada-compleja#limite-con-numeros-complejos" },
  { text: "Derivada compleja y funciones analiticas", link: "/variable-compleja/limites-y-derivada-compleja#derivada-compleja-y-funciones-analiticas" },
  { text: "Derivada compleja por definicion", link: "/variable-compleja/limites-y-derivada-compleja#derivada-compleja-por-definicion" },
  { text: "Ecuaciones de Cauchy-Riemann y funciones armonicas", link: "/variable-compleja/cauchy-riemann-y-funciones-armonicas#ecuaciones-de-cauchy-riemann-y-funciones-armonicas" },
  { text: "Funciones analiticas, armonicas y laplaciano", link: "/variable-compleja/cauchy-riemann-y-funciones-armonicas#funciones-analiticas-armonicas-y-laplaciano" },
  { text: "Singularidades y polos de funciones complejas", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#singularidades-y-polos-de-funciones-complejas" },
  { text: "Integrales complejas de linea", link: "/variable-compleja/integrales-complejas-y-topologia#integrales-complejas-de-linea" },
  { text: "Regiones conexas y simplemente conexas", link: "/variable-compleja/integrales-complejas-y-topologia#regiones-conexas-y-simplemente-conexas" },
  { text: "Teorema integral de Cauchy-Goursat", link: "/variable-compleja/teorema-de-cauchy-goursat-y-morera#teorema-integral-de-cauchy-goursat" },
  { text: "Teorema de Morera y Green complejo", link: "/variable-compleja/teorema-de-cauchy-goursat-y-morera#teorema-de-morera-y-green-complejo" },
  { text: "Consecuencias del teorema de Cauchy-Goursat", link: "/variable-compleja/teorema-de-cauchy-goursat-y-morera#consecuencias-del-teorema-de-cauchy-goursat" },
  { text: "Integrales especiales usando variable compleja", link: "/variable-compleja/teorema-de-cauchy-goursat-y-morera#integrales-especiales-usando-variable-compleja" },
  { text: "Formula integral de Cauchy", link: "/variable-compleja/formula-integral-de-cauchy-y-aplicaciones#formula-integral-de-cauchy" },
  { text: "Demo: teorema de Liouville", link: "/variable-compleja/formula-integral-de-cauchy-y-aplicaciones#demo-teorema-de-liouville" },
  { text: "Demo: teorema fundamental del algebra", link: "/variable-compleja/formula-integral-de-cauchy-y-aplicaciones#demo-teorema-fundamental-del-algebra" },
  { text: "Demo: teorema del valor medio de Gauss", link: "/variable-compleja/formula-integral-de-cauchy-y-aplicaciones#demo-teorema-del-valor-medio-gauss" },
  { text: "Usando la formula integral de Cauchy con derivadas", link: "/variable-compleja/formula-integral-de-cauchy-y-aplicaciones#usando-la-formula-integral-de-cauchy-con-derivadas" },
  { text: "Residuos de funciones complejas", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#residuos-de-funciones-complejas" },
  { text: "Como calcular residuos", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#como-calcular-residuos" },
  { text: "El teorema del residuo", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#el-teorema-del-residuo" },
  { text: "Integrales definidas con teorema del residuo", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#integrales-definidas-con-teorema-del-residuo" },
  { text: "Integral impropia racional", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#integral-impropia-racional" },
  { text: "Integral racional de senos y cosenos", link: "/variable-compleja/singularidades-residuos-y-aplicaciones#integral-racional-de-senos-y-cosenos" },
  { text: "Series de Laurent y funciones meromorfas", link: "/variable-compleja/series-de-laurent-y-funciones-meromorfas" },
  { text: "Principio del argumento y teorema de Rouche", link: "/variable-compleja/principio-del-argumento-y-teorema-de-rouche" },
  { text: "Transformaciones conformes y fracciones lineales", link: "/variable-compleja/transformaciones-conformes-y-fracciones-lineales" },
  { text: "Esfera de Riemann y mapas racionales", link: "/variable-compleja/esfera-de-riemann-y-mapas-racionales" },
  { text: "Funciones armonicas y potencial logaritmico", link: "/variable-compleja/funciones-armonicas-y-potencial-logaritmico" },
  { text: "Continuacion analitica y monodromia", link: "/variable-compleja/continuacion-analitica-y-monodromia" },
  { text: "Runge, Mittag-Leffler y factorizacion de Weierstrass", link: "/variable-compleja/runge-mittag-leffler-y-factorizacion-de-weierstrass" },
  { text: "Familias normales, Montel y teoremas de Picard", link: "/variable-compleja/familias-normales-montel-y-teoremas-de-picard" },
  { text: "Aplicacion de Riemann y comportamiento en la frontera", link: "/variable-compleja/aplicacion-de-riemann-y-fronteras" }
];
const differentialGeometryItems = blockItems("/geometria-diferencial/", differentialGeometryTopics);
const mathematicalMethodsPhysicsItems = blockItems("/metodos-matematicos-para-la-fisica/", mathematicalMethodsPhysicsTopics);
const tensorCalculusItems = blockItems("/calculo-tensorial/", tensorCalculusTopics);
const partialDifferentialEquationsItems = [
  { text: "Mapa del bloque", link: "/ecuaciones-diferenciales-parciales/" },
  { text: "Clasificacion y bien planteamiento", link: "/ecuaciones-diferenciales-parciales/clasificacion-y-bien-planteamiento" },
  { text: "EDP de primer orden y caracteristicas", link: "/ecuaciones-diferenciales-parciales/ecuaciones-de-primer-orden-y-metodo-de-caracteristicas" },
  { text: "Ecuacion de transporte y conservacion", link: "/ecuaciones-diferenciales-parciales/ecuacion-de-transporte-y-conservacion" },
  { text: "Ecuacion del calor", link: "/ecuaciones-diferenciales-parciales/ecuacion-del-calor" },
  { text: "Ecuacion de ondas", link: "/ecuaciones-diferenciales-parciales/ecuacion-de-ondas" },
  { text: "Ecuacion de Laplace y funciones armonicas", link: "/ecuaciones-diferenciales-parciales/ecuacion-de-laplace-y-funciones-armonicas" },
  { text: "Separacion de variables y series de Fourier", link: "/ecuaciones-diferenciales-parciales/separacion-de-variables-y-series-de-fourier" },
  { text: "Principios de maximo y metodos de energia", link: "/ecuaciones-diferenciales-parciales/principios-de-maximo-y-metodos-de-energia" },
  { text: "Distribuciones y soluciones debiles", link: "/ecuaciones-diferenciales-parciales/distribuciones-y-soluciones-debiles" },
  { text: "Espacios de Sobolev y formulacion variacional", link: "/ecuaciones-diferenciales-parciales/espacios-de-sobolev-y-formulacion-variacional" },
  { text: "Transformada de Fourier y soluciones fundamentales", link: "/ecuaciones-diferenciales-parciales/transformada-de-fourier-y-soluciones-fundamentales" },
  { text: "Leyes de conservacion no lineales y entropia", link: "/ecuaciones-diferenciales-parciales/leyes-de-conservacion-no-lineales-y-entropia" },
  { text: "Regularidad eliptica y parabolica", link: "/ecuaciones-diferenciales-parciales/regularidad-eliptica-y-parabolica" },
  { text: "Problemas semilineales y quasilineales", link: "/ecuaciones-diferenciales-parciales/problemas-semilineales-y-quasilineales" },
  { text: "Metodos variacionales y puntos criticos", link: "/ecuaciones-diferenciales-parciales/metodos-variacionales-y-puntos-criticos" },
  { text: "Ecuaciones dispersivas y Schrodinger", link: "/ecuaciones-diferenciales-parciales/ecuaciones-dispersivas-y-schrodinger" },
  { text: "Sistemas hiperbolicos y problemas de Riemann", link: "/ecuaciones-diferenciales-parciales/sistemas-hiperbolicos-y-problemas-de-riemann" },
  { text: "Ecuaciones elipticas no lineales y monotonia", link: "/ecuaciones-diferenciales-parciales/ecuaciones-elipticas-no-lineales-y-monotonia" },
  { text: "Homogenizacion y escalas multiples", link: "/ecuaciones-diferenciales-parciales/homogenizacion-y-escalas-multiples" },
  { text: "EDP geometricas y flujos geometricos", link: "/ecuaciones-diferenciales-parciales/edp-geometricas-y-flujos-geometricos" },
  { text: "Navier-Stokes y fluidos incomprensibles", link: "/ecuaciones-diferenciales-parciales/navier-stokes-y-fluidos-incomprensibles" },
  { text: "Analisis microlocal y operadores pseudodiferenciales", link: "/ecuaciones-diferenciales-parciales/analisis-microlocal-y-operadores-pseudodiferenciales" },
  { text: "EDP estocasticas", link: "/ecuaciones-diferenciales-parciales/edp-estocasticas" },
  { text: "Problemas inversos y continuacion unica", link: "/ecuaciones-diferenciales-parciales/problemas-inversos-y-continuacion-unica" }
];

const ordinaryDifferentialEquationsItems = [
  { text: "Mapa del bloque", link: "/ecuaciones-diferenciales/" },
  { text: "Modelizacion y planteamiento de problemas", link: "/ecuaciones-diferenciales/modelizacion-y-planteamiento-de-problemas" },
  { text: "Teorema de existencia y unicidad", link: "/ecuaciones-diferenciales/teorema-de-existencia-y-unicidad" },
  { text: "Analisis cualitativo y campos de direcciones", link: "/ecuaciones-diferenciales/analisis-cualitativo-y-campos-de-direcciones" },
  { text: "Dependencia continua y desigualdad de Gronwall", link: "/ecuaciones-diferenciales/dependencia-continua-y-desigualdad-de-gronwall" },
  { text: "Ecuaciones separables", link: "/ecuaciones-diferenciales/ecuaciones-separables" },
  { text: "Ecuaciones exactas y factor integrante", link: "/ecuaciones-diferenciales/ecuaciones-exactas-y-factor-integrante" },
  { text: "Ecuaciones lineales de primer orden y operadores", link: "/ecuaciones-diferenciales/ecuaciones-lineales-de-primer-orden-y-operadores" },
  { text: "Ecuaciones lineales con coeficientes constantes", link: "/ecuaciones-diferenciales/ecuaciones-lineales-coeficientes-constantes" },
  { text: "Wronskiano y formula de Abel", link: "/ecuaciones-diferenciales/wronskiano-y-formula-de-abel" },
  { text: "No homogeneas por inspeccion y aniquilador", link: "/ecuaciones-diferenciales/ecuaciones-no-homogeneas-por-inspeccion-y-aniquilador" },
  { text: "Variacion de parametros", link: "/ecuaciones-diferenciales/variacion-de-parametros" },
  { text: "Ecuaciones de Euler", link: "/ecuaciones-diferenciales/ecuaciones-diferenciales-de-euler" },
  { text: "Movimiento armonico simple y resortes", link: "/ecuaciones-diferenciales/movimiento-armonico-simple-y-resortes" },
  { text: "Transformada de Laplace", link: "/ecuaciones-diferenciales/transformada-de-laplace" },
  { text: "Series de Taylor y soluciones en serie", link: "/ecuaciones-diferenciales/series-de-taylor-y-soluciones-en-serie" },
  { text: "Sistemas lineales y valores propios", link: "/ecuaciones-diferenciales/sistemas-lineales-y-valores-propios" },
  { text: "Estabilidad de Lyapunov no lineal", link: "/ecuaciones-diferenciales/estabilidad-de-lyapunov-no-lineal" },
  { text: "Linealizacion, Hartman-Grobman y variedades invariantes", link: "/ecuaciones-diferenciales/linealizacion-hartman-grobman-y-variedades-invariantes" },
  { text: "Poincare-Bendixson y ciclos limite", link: "/ecuaciones-diferenciales/poincare-bendixson-y-ciclos-limite" },
  { text: "Bifurcaciones locales en EDO", link: "/ecuaciones-diferenciales/bifurcaciones-locales-en-edo" },
  { text: "Problemas de frontera y Sturm-Liouville", link: "/ecuaciones-diferenciales/problemas-de-frontera-y-sturm-liouville" },
  { text: "Semigrupos y evolucion en espacios de Banach", link: "/ecuaciones-diferenciales/semigrupos-y-evolucion-en-espacios-de-banach" }
];

export default defineConfig({
  lang: "es-MX",
  base: docsBase,
  title: "Guia de Matematicas",
  description: "Ruta rigurosa de autoestudio desde fundamentos de nivel master hasta bloques puente hacia trabajo doctoral en matematica y fisica matematica.",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: "Inicio", link: "/" },
      { text: "Mapa", link: "/mapa" },
      { text: "Metodologia", link: "/metodologia" },
      {
        text: "Fundamentos",
        items: [
          { text: "Algebra superior", link: "/algebra-superior/" },
          { text: "Analisis real", link: "/analisis-real/principio-del-supremo" },
          { text: "Topologia", link: "/topologia/" },
          { text: "Analisis matematico", link: "/analisis-matematico/" },
          { text: "Matematicas discretas", link: "/matematicas-discretas/" }
        ]
      },
      {
        text: "Modelado",
        items: [
          { text: "Calculo vectorial", link: "/calculo-vectorial/" },
          { text: "Probabilidad y estadistica", link: "/probabilidad-y-estadistica/" },
          { text: "Ecuaciones diferenciales", link: "/ecuaciones-diferenciales/" },
          { text: "Ecuaciones diferenciales parciales", link: "/ecuaciones-diferenciales-parciales/" },
          { text: "Metodos numericos", link: "/metodos-numericos/" }
        ]
      },
      {
        text: "Avanzado",
        items: [
          { text: "Analisis de Fourier", link: "/analisis-de-fourier/" },
          { text: "Variable compleja", link: "/variable-compleja/" },
          { text: "Geometria diferencial", link: "/geometria-diferencial/" }
        ]
      },
      {
        text: "Fisica matematica",
        items: [
          { text: "Metodos matematicos para la fisica", link: "/metodos-matematicos-para-la-fisica/" },
          { text: "Calculo tensorial", link: "/calculo-tensorial/" }
        ]
      }
    ],
    sidebar: [
      {
        text: "Guia",
        items: [
          { text: "Mapa del programa", link: "/mapa" },
          { text: "Metodologia", link: "/metodologia" }
        ]
      },
      {
        text: "Analisis real",
        items: realAnalysisItems
      },
      {
        text: "Analisis matematico",
        items: mathematicalAnalysisItems
      },
      {
        text: "Algebra superior",
        items: advancedAlgebraItems
      },
      {
        text: "Topologia",
        items: topologyItems
      },
      {
        text: "Ecuaciones diferenciales",
        items: ordinaryDifferentialEquationsItems
      },
      {
        text: "Ecuaciones diferenciales parciales",
        items: partialDifferentialEquationsItems
      },
      {
        text: "Calculo vectorial y multivariado",
        items: vectorCalculusItems
      },
      {
        text: "Probabilidad y estadistica",
        items: probabilityStatisticsItems
      },
      {
        text: "Metodos numericos",
        items: numericalMethodsItems
      },
      {
        text: "Matematicas discretas",
        items: discreteMathematicsItems
      },
      {
        text: "Analisis de Fourier",
        items: fourierAnalysisItems
      },
      {
        text: "Variable compleja",
        items: complexVariableItems
      },
      {
        text: "Geometria diferencial",
        items: differentialGeometryItems
      },
      {
        text: "Metodos matematicos para la fisica",
        items: mathematicalMethodsPhysicsItems
      },
      {
        text: "Calculo tensorial",
        items: tensorCalculusItems
      }
    ],
    outline: {
      level: [2, 3]
    },
    search: enableLocalSearch
      ? {
          provider: "local"
        }
      : undefined,
    socialLinks: []
  },
  markdown: {
    config(md) {
      md.use(mathjax3);
    }
  }
});
