// Home page map of the Student Branches of the IEEE Colombia Section (Leaflet, department outlines plus faint street tiles).
// Plain script (no fetch, no modules). If Leaflet did not load (offline), the section stays hidden.
// Departments come from ramas-geo.js. Branch data: name, zone, latitude, longitude, members (IEEE vTools, 8 Nov 2026).
// Coordinates are approximate (one campus per branch).
(function () {
  const section = document.getElementById('ramas');
  const el = document.getElementById('ramas-mapa');
  if (!section || !el || !window.L || typeof RAMAS_DEPTS === 'undefined') return;

  // Opaque fills: the Section outline below relies on neighbouring fills covering the inner half of a thick stroke.
  const ZONES = {
    'Antioquia': '#F2C98F',
    'Centro': '#9CC3DD',
    'Eje Cafetero': '#A6D6BE',
    'Santanderes': '#C8B6EA',
    'Suroccidente': '#EDA9A9',
  };
  const PINS = { 'Antioquia': '#D97706', 'Centro': '#00629B', 'Eje Cafetero': '#059669', 'Santanderes': '#7C3AED', 'Suroccidente': '#DC2626' };
  const NO_ZONE = '#E4E4E7';
  const CARIBE = '#FFFFFF';
  const BRANCHES = [
  ["Universidad Sergio Arboleda", "Centro", 4.6612, -74.0597, 0, true],
  ["Universidad de los Llanos", "Centro", 4.0743, -73.5831, 0, true],
  ["Universidad Icesi", "Suroccidente", 3.3409, -76.5292, 51],
  ["Institución Universitaria CESMAG", "Suroccidente", 1.209, -77.2785, 0, true],
  ["Universidad de San Buenaventura (STB03171)", "Centro", 4.7519, -74.0298, 2, true],
  ["Universidad INCCA de Colombia", "Centro", 4.6117, -74.0727, 0, true],
  ["Universidad Santo Tomás, Tunja", "Centro", 5.5485, -73.3442, 23],
  ["Universidad Distrital Francisco José de Caldas", "Centro", 4.6143, -74.0633, 85],
  ["Pontificia Universidad Javeriana, Bogotá", "Centro", 4.6287, -74.0636, 54],
  ["Escuela Colombiana de Carreras Industriales (ECCI)", "Centro", 4.754, -74.0515, 20],
  ["Universidad Nacional de Colombia, Bogotá", "Centro", 4.6387, -74.0852, 68],
  ["Universidad de Medellín", "Antioquia", 6.231, -75.6114, 0, true],
  ["Universidad de San Buenaventura, Cali", "Suroccidente", 3.3451, -76.5435, 0, true],
  ["Universidad Pedagógica Nacional", "Centro", 4.6584, -74.0593, 0, true],
  ["Universidad Pontificia Bolivariana (UPB)", "Antioquia", 6.2419, -75.5895, 5, true],
  ["Universidad del Cauca", "Suroccidente", 2.4704, -76.5512, 57],
  ["Universidad Santo Tomás", "Centro", 4.6565, -74.0563, 2, true],
  ["SENA Antioquia", "Antioquia", 6.2688, -75.5496, 4, true],
  ["Universidad Industrial de Santander", "Santanderes", 7.1409, -73.1199, 90],
  ["Universidad Francisco de Paula Santander", "Santanderes", 7.8983, -72.4872, 3],
  ["Instituto Tecnológico Metropolitano (ITM)", "Antioquia", 6.2451, -75.55, 5, true],
  ["Universidad de los Andes", "Centro", 4.6014, -74.0649, 124],
  ["Escuela Tecnológica Instituto Técnico Central", "Centro", 4.6064, -74.0813, 10, true],
  ["Universidad Nacional Abierta y a Distancia (UNAD)", "Centro", 4.5852, -74.0975, 29],
  ["Universidad Mariana", "Suroccidente", 1.2237, -77.2832, 1, true],
  ["Universidad de Antioquia", "Antioquia", 6.268, -75.5688, 29],
  ["Universidad Surcolombiana", "Suroccidente", 2.943, -75.3017, 25],
  ["Universidad Tecnológica de Pereira", "Eje Cafetero", 4.7943, -75.6889, 18],
  ["Universidad Distrital, sede Ciudad Bolívar", "Centro", 4.5793, -74.1579, 27],
  ["Corporación Universitaria Unitec", "Centro", 4.662, -74.0574, 0, true],
  ["Escuela Colombiana de Ingeniería Julio Garavito", "Centro", 4.7822, -74.0443, 10],
  ["Universidad Autónoma de Occidente", "Suroccidente", 3.3537, -76.5219, 2, true],
  ["Universidad de La Salle", "Centro", 4.6447, -74.0595, 6],
  ["Universidad de Pamplona", "Santanderes", 7.386, -72.6495, 45],
  ["UNIMINUTO", "Centro", 4.7111, -74.0966, 0, true],
  ["Unidades Tecnológicas de Santander", "Santanderes", 7.107, -73.1233, 16],
  ["Pontificia Universidad Javeriana, Cali", "Suroccidente", 3.3471, -76.533, 1, true],
  ["Escuela de Aviación del Ejército", "Centro", 4.7367, -74.2655, 0, true],
  ["Fundación Universitaria Compensar", "Centro", 4.6761, -74.0877, 3, true],
  ["Universidad Santo Tomás, Bucaramanga", "Santanderes", 7.1369, -73.1283, 32],
  ["CORHUILA", "Suroccidente", 2.9379, -75.2903, 31],
  ["Universidad Pedagógica y Tecnológica de Colombia (UPTC)", "Centro", 5.5522, -73.3567, 1, true],
  ["Universidad El Bosque", "Centro", 4.7107, -74.0314, 7, true],
  ["Universidad Nacional de Colombia, Manizales", "Eje Cafetero", 5.0569, -75.4914, 5],
  ["Universidad de Ibagué", "Centro", 4.4497, -75.1991, 0, true],
  ["Universidad Católica de Colombia", "Centro", 4.6352, -74.0688, 1, true],
  ["Universidad Cooperativa de Colombia, Bogotá", "Centro", 4.6263, -74.0678, 0, true],
  ["Universidad de San Buenaventura (STB62571)", "Centro", 4.7525, -74.0298, 0, true],
  ["Universidad Militar Nueva Granada", "Centro", 4.6831, -74.0419, 12],
  ["Universidad de Nariño", "Suroccidente", 1.2325, -77.2934, 5, true],
  ["Universidad Antonio Nariño", "Centro", 4.6348, -74.058, 56],
  ["Universidad EAFIT", "Antioquia", 6.2002, -75.5785, 4, true],
  ["Universidad de Cundinamarca", "Centro", 4.336, -74.3712, 0, true],
  ["Universidad Santiago de Cali", "Suroccidente", 3.4028, -76.5483, 25],
  ["Universidad de Investigación y Desarrollo (UDI)", "Santanderes", 7.1385, -73.1242, 0, true],
  ["Universidad Jorge Tadeo Lozano", "Centro", 4.6079, -74.0673, 23],
  ["Universidad Central", "Centro", 4.6061, -74.069, 13],
  ["Universidad Autónoma de Bucaramanga", "Santanderes", 7.1168, -73.1055, 0, true],
  ["Universidad del Quindío", "Eje Cafetero", 4.5539, -75.661, 8],
  ["Universidad Nacional de Colombia, Medellín", "Antioquia", 6.263, -75.5772, 10, true],
  ["Universidad de La Sabana", "Centro", 4.8624, -74.0338, 35],
  ["Universidad Piloto de Colombia", "Centro", 4.6325, -74.0652, 17],
  ["Universidad del Valle", "Suroccidente", 3.4348, -76.5425, 110],
  ["Universidad del Rosario", "Centro", 4.6, -74.0733, 15],
  ];

  section.hidden = false;
  const map = L.map(el, { scrollWheelZoom: true, zoomSnap: 0.5, attributionControl: true, minZoom: 4, maxZoom: 18 });
  map.attributionControl.setPrefix(false);
  map.attributionControl.addAttribution('Límites: <a href="https://www.geoboundaries.org/">geoBoundaries</a> (OpenStreetMap, ODbL)');

  const add = (d, style) => L.geoJSON(d.g, { style, interactive: false }).addTo(map);
  const inSection = RAMAS_DEPTS.filter((d) => d.z !== 'Caribe');
  // Order matters: other Section first, then a thick line under the Section's own fills (only its outer edge stays visible).
  RAMAS_DEPTS.filter((d) => d.z === 'Caribe').forEach((d) => add(d, { color: '#A1A1AA', weight: 1, dashArray: '3 3', fillColor: CARIBE, fillOpacity: 1 }));
  inSection.forEach((d) => add(d, { color: '#1F2937', weight: 5, fill: false }));
  inSection.forEach((d) => add(d, { color: '#fff', weight: 1, fillColor: ZONES[d.z] || NO_ZONE, fillOpacity: 1 }));
  const sectionBounds = L.geoJSON(inSection.map((d) => d.g)).getBounds();
  map.fitBounds(sectionBounds, { padding: [10, 10], maxZoom: 6.5 });

  // Faint streets, from zoom 6 (map fits at about 6 on desktop), to place a campus by street. Grey + multiply keeps the zone colours visible.
  Object.assign(map.createPane('streets').style, { zIndex: 450, mixBlendMode: 'multiply', filter: 'grayscale(1)', pointerEvents: 'none' });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    pane: 'streets', minZoom: 6, maxZoom: 18, opacity: 0.35,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  // One pin per branch, coloured by zone. Pins are focusable markers; the tooltip shows the member count.
  const pin = (color) => L.divIcon({
    className: 'ramas-pin',
    iconSize: [24, 34],
    iconAnchor: [12, 34],
    tooltipAnchor: [0, -30],
    html: `<svg viewBox="0 0 24 34" width="24" height="34" aria-hidden="true"><path d="M12 .5C5.7.5.5 5.7.5 12c0 8.6 11.5 21.5 11.5 21.5S23.5 20.6 23.5 12C23.5 5.7 18.3.5 12 .5z" fill="${color}" stroke="#fff"/><circle cx="12" cy="12" r="5" fill="#fff"/></svg>`,
  });
  BRANCHES.forEach(([name, zone, lat, lon, members, flag]) => {
    const tip = document.createElement('div');
    const title = document.createElement('strong');
    title.textContent = name;
    tip.append(title, document.createElement('br'), 'Miembros: ' + members);
    // Branches flagged in the 6th field are drawn as a small dot instead of a pin.
    const mark = flag
      ? L.circleMarker([lat, lon], { radius: 5, weight: 1.5, color: '#fff', fillColor: PINS[zone], fillOpacity: 1 })
      : L.marker([lat, lon], { icon: pin(PINS[zone]), title: name + ', miembros: ' + members });
    mark.bindTooltip(tip).addTo(map);
  });

  // Same data as a text list: keyboard and screen reader users cannot hover the markers.
  const legend = document.getElementById('ramas-leyenda');
  legend.innerHTML = '<li><button type="button" data-zone="">Toda la Sección</button></li>' +
    Object.entries(ZONES).map(([z, c]) => `<li><button type="button" data-zone="${z}"><span class="dot" style="background:${c}"></span>${z}</button></li>`).join('') +
    `<li><span class="dot" style="background:${NO_ZONE}"></span>Sin zona</li>` +
    `<li><span class="dot" style="background:${CARIBE};border:1px dashed #A1A1AA"></span>Otra Sección (ColCaribe)</li>`;
  // Click a zone to zoom to its departments.
  legend.addEventListener('click', (e) => {
    const b = e.target.closest('button[data-zone]');
    if (!b) return;
    const group = inSection.filter((d) => !b.dataset.zone || d.z === b.dataset.zone).map((d) => d.g);
    map.fitBounds(b.dataset.zone ? L.geoJSON(group).getBounds() : sectionBounds, { padding: [20, 20], maxZoom: b.dataset.zone ? 9 : 6.5 });
  });
  document.getElementById('ramas-lista').innerHTML = '<tr><th>Rama</th><th>Zona</th><th>Miembros</th></tr>' +
    BRANCHES.map(([n, z, , , m]) => `<tr><td>${n}</td><td>${z}</td><td>${m}</td></tr>`).join('');

  // The map is created while its page may be hidden (deep link to another page): fix its size when shown.
  window.addEventListener('hashchange', () => map.invalidateSize());
})();
