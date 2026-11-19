# Plan de validación de la navegación

Plan para comprobar con personas reales que la nueva estructura de la wiki (secciones por objetivo) se entiende mejor que la anterior. Lo ejecuta el equipo SAC. **La fase 4 (iterar la estructura) espera los resultados reales de estas pruebas**: hasta entonces, la estructura actual es una hipótesis basada en el diagnóstico y no en datos de uso.

Los números de participantes y los umbrales de abajo son reglas prácticas, no cálculos estadísticos. Ajústalos a quién esté disponible.

## Hipótesis a validar

| # | Hipótesis | Cómo se comprueba |
| --- | --- | --- |
| 1 | Las 10 secciones por objetivo se entienden y no se confunden entre sí | Tree testing |
| 2 | Premios y Reconocimientos funciona como sección propia | Card sorting |
| 3 | Glosario y formación del CLE se esperan en "Aprender más" | Card sorting y tree testing |
| 4 | "Dinero" y "Membresía y captación" se buscan como secciones separadas de "Operar la Rama" | Tree testing |
| 5 | Los nombres de las páginas (Rebate, Elecciones y transición, Conseguir ponentes) son los que usa la gente | Card sorting (vocabulario) |
| 6 | "Capítulos y Grupos de Afinidad" justifica una sección de 3 páginas | Tree testing |

## Participantes

Mínimo sugerido: 15 personas por prueba, repartidas así.

- 5 estudiantes nuevos o miembros sin cargo.
- 5 directivos de Rama (presidentes, vicepresidentes, secretarios).
- 3 tesoreros.
- 2 Consejeros.

Analiza cada perfil por separado además del total: sus agrupaciones pueden diferir.

## Card sorting (híbrido)

Cada participante recibe una tarjeta por página, las agrupa y puede usar las categorías sugeridas o crear las suyas.

**Categorías sugeridas** (las 10 secciones propuestas): Empezar en IEEE, Mi cargo, Operar la Rama, Eventos, Dinero, Membresía y captación, Capítulos y Grupos de Afinidad, Premios y Reconocimientos, Aprender más, Ayuda y recursos.

**Tarjetas** (título nuevo, entre paréntesis el título anterior para la línea base):

| Título nuevo | Título anterior |
| --- | --- |
| Empezar en IEEE (qué es IEEE) | ¿Qué es IEEE? |
| IEEE en Colombia | IEEE Sección Colombia |
| Cómo unirse a IEEE | Cómo unirse a IEEE |
| Participar como voluntario | (parte de Cómo unirse a IEEE) |
| Tu primer mes como directivo | (repetido en cada cargo y en Empalme) |
| Presidente de Rama | Presidente de Rama |
| Presidente de Capítulo | Presidente de Capítulo |
| Presidente de Grupo de Afinidad | Presidente de Grupo de Afinidad |
| Vicepresidente | Vicepresidente |
| Secretario | Secretario |
| Tesorero | Tesorero |
| Consejero de Rama | Consejero de Rama |
| Requisitos de una Rama | Requisitos de una Rama |
| Reportes y fechas límite | Reportes y fechas límite |
| Junta directiva y funciones | Junta directiva y funciones |
| Elecciones y transición de la junta | Elecciones y Transición de la junta (empalme) |
| Organizar un evento | Organizar un evento |
| Reportar un evento en vTools | Reportar un evento en vTools |
| Conseguir ponentes | (parte de Capítulos y Grupos de Afinidad) |
| Rebate: cómo se calcula y cómo cobrarlo | Rebates y financiación |
| Otras fuentes de financiación | Rebates y financiación |
| Año de membresía | Año de membresía |
| Qué buscan los estudiantes | Captación y retención de miembros |
| Plan de captación y renovación | Captación y retención de miembros |
| Capítulos y Grupos de Afinidad | Capítulos y Grupos de Afinidad |
| Cómo crear un Capítulo | Cómo crear un Capítulo |
| Cómo crear un Grupo de Afinidad | (no existía) |
| Premios del SAC Colombia | Premios y concursos |
| Premios regionales e internacionales | Premios y concursos |
| Glosario | Glosario |
| Formación por cargo | Capacitación |
| Catálogo de cursos del CLE | Cursos del CLE |
| ¿A quién preguntar? | ¿A quién preguntar? |
| Preguntas frecuentes | Preguntas frecuentes |
| Herramientas y marca | Herramientas digitales y Marca y comunicación |
| Enlaces oficiales | Todos los enlaces |

**Preguntas para el moderador**

1. ¿Dónde esperarías encontrar los premios, el glosario, los cursos del CLE y las herramientas? ¿Por qué?
2. ¿Qué palabra usas: rebate o reembolso? ¿empalme o transición? ¿Rama o Branch?
3. ¿Qué tarjetas no sabes dónde poner o te parecen repetidas?
4. ¿Qué nombre le darías a cada grupo que creaste?
5. Para Capítulos y Grupos de Afinidad, ¿prefieres una sección propia o dentro de "Operar la Rama"?

## Tree testing

Se prueban **dos árboles solo con texto, sin contenido**: el anterior (commit `8fd2d80`) y el nuevo. Cada participante ve un árbol, repartidos al azar en dos grupos, y no se les dice cuál es el nuevo. En cada tarea marcan la página donde buscarían la respuesta.

**Umbrales de partida (editables):** al menos 80% de éxito por tarea y al menos 60% de llegada directa (sin retroceder). La estructura nueva debe superar a la anterior en las tareas de tesorero, eventos y membresía, que eran las más fragmentadas.

| # | Tarea | Ruta esperada, árbol anterior | Ruta esperada, árbol nuevo |
| --- | --- | --- | --- |
| 1 | Saber si mi universidad tiene Rama | Conoce IEEE > Cómo unirse a IEEE | Empezar en IEEE > Cómo unirse a IEEE |
| 2 | Soy tesorero nuevo y quiero cobrar el rebate | Recursos > Rebates y financiación | Dinero > Rebate: cómo se calcula y cómo cobrarlo |
| 3 | Saber la fecha límite del Plan Anual | Operación > Reportes y fechas límite | Operar la Rama > Reportes y fechas límite |
| 4 | Reportar la asistencia de un evento que ya hice | Operación > Reportar un evento en vTools | Eventos > Reportar un evento en vTools |
| 5 | Conseguir un conferencista distinguido para mi Capítulo | Operación > Capítulos y Grupos de Afinidad | Eventos > Conseguir ponentes |
| 6 | Recuperar a los miembros que no renovaron | Operación > Captación y retención de miembros | Membresía y captación > Plan de captación y renovación |
| 7 | Corregir mi grado en IEEE (aparezco como Member y no como Student Member) | Operación > Año de membresía | Membresía y captación > Año de membresía |
| 8 | Saber qué significa OU Analytics | Conoce IEEE > Glosario | Aprender más > Glosario |
| 9 | Crear un Grupo de Afinidad de mi Rama | Sin página propia (se espera Operación > Capítulos y Grupos de Afinidad) | Capítulos y Grupos de Afinidad > Cómo crear un Grupo de Afinidad |
| 10 | Acabo de asumir como Vicepresidente, ¿qué hago primero? | Cargos > Vicepresidente | Mi cargo > Tu primer mes como directivo (también vale Mi cargo > Vicepresidente) |
| 11 | Postular mi Rama a un premio | Recursos > Premios y concursos | Premios y Reconocimientos > Premios del SAC Colombia |
| 12 | Elegir la nueva junta y entregar el cargo | Operación > Elecciones (y luego Transición de la junta) | Operar la Rama > Elecciones y transición de la junta |
| 13 | Ver los cursos del CLE recomendados para el tesorero | Cargos > Tesorero o Recursos > Capacitación | Mi cargo > Tesorero o Aprender más > Formación por cargo |
| 14 | ¿A quién escribo si mi Consejero no responde? | Recursos > ¿A quién preguntar? | Ayuda y recursos > ¿A quién preguntar? |

**Qué medir por tarea:** porcentaje de éxito, porcentaje de llegada directa, primer clic y rutas equivocadas más frecuentes. Una ruta equivocada que se repite indica un nombre de sección o página que confunde.

## Árboles para cargar en la herramienta

Árbol anterior (commit `8fd2d80`): Inicio · Conoce IEEE (¿Qué es IEEE?, Cómo unirse a IEEE, IEEE Sección Colombia, Glosario) · Cargos (Soy directivo, Presidente de Rama, Presidente de Capítulo, Presidente de Grupo de Afinidad, Vicepresidente, Secretario, Tesorero, Consejero de Rama) · Operación (Cómo operar una Rama o Capítulo, Requisitos de una Rama, Reportes y fechas límite, Organizar un evento, Reportar un evento en vTools, Año de membresía, Captación y retención de miembros, Junta directiva y funciones, Capítulos y Grupos de Afinidad, Cómo crear un Capítulo, Elecciones, Transición de la junta (empalme)) · Recursos (Recursos útiles, Herramientas digitales, Rebates y financiación, Premios y concursos, Capacitación, Cursos del CLE, Marca y comunicación, ¿A quién preguntar?, Preguntas frecuentes, Todos los enlaces). El menú de la versión anterior es el listado de `mkdocs.yml` en ese commit.

Árbol nuevo: el `nav:` actual de `mkdocs.yml`.

## Después de las pruebas

1. Registrar los resultados por tarea y por perfil en este archivo.
2. Corregir los nombres y la ubicación de las páginas que fallen, sobre todo las de las hipótesis 2, 3 y 6.
3. Repetir el tree testing con la estructura corregida si algún umbral no se cumplió.
4. Si no hay datos de uso del sitio, considerar recoger los datos de búsqueda y el formulario de feedback del pie de página.
