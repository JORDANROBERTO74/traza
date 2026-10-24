/**
 * Spanish dictionary. Mirrors the English dictionary exactly; the shared type
 * is derived from `en`, so this file fails to type-check if a key drifts.
 */

import type { Dictionary } from "./en";

const es: Dictionary = {
  meta: {
    title: "Traza — Contratista general en Austin, Texas",
    description:
      "Traza es un contratista general en Austin, Texas, que construye viviendas, espacios comerciales y reformas con materiales honestos y una ejecución disciplinada.",
  },
  common: {
    brand: "Traza",
    discipline: "Contratista general",
    skip: "Saltar al contenido",
    close: "Cerrar",
    menu: "Menú",
    language: "Idioma",
    backToTop: "Volver arriba",
  },
  nav: {
    label: "Navegación principal",
    home: "Inicio",
    about: "Nosotros",
    services: "Servicios",
    start: "Pedir presupuesto",
  },
  footer: {
    tagline: "Contratista general · Austin, Texas",
    rights: "© 2026 Traza Build. Todos los derechos reservados.",
    navLabel: "Sitio",
    address: "1204 East Cesar Chavez St, Austin, TX 78702",
    phoneLabel: "Llamar",
    emailLabel: "Correo",
  },
  cta: {
    title: {
      lead: "Construyamos algo",
      accent: "que perdure.",
    },
    text: "Cuéntanos sobre el terreno, el alcance y los plazos. Respondemos en un día hábil.",
    primary: "Pedir presupuesto",
    secondary: "Llámanos",
  },
  home: {
    hero: {
      eyebrow: "Contratista general · Austin, Texas",
      title: {
        lead: "Construido para",
        accent: "perdurar.",
      },
      intro:
        "Traza es un contratista general de servicio completo en Austin, que construye viviendas, lugares de trabajo y restaurantes con materiales honestos y una ejecución disciplinada.",
      primary: "Iniciar un proyecto",
      secondary: "Ver servicios",
      imageAlt:
        "Una vivienda moderna de dos plantas en construcción en Austin, con andamios y cielo despejado.",
      imageCaption: "Lago House, Austin — 2025",
      facts: [
        { term: "Fundación", detail: "2012" },
        { term: "Sede", detail: "Austin, Texas" },
        { term: "Licencia", detail: "Totalmente asegurados" },
      ],
    },
    metrics: {
      label: "01 — De un vistazo",
      title: "Cifras que respaldamos.",
    },
    services: {
      label: "02 — Servicios",
      title: "Lo que construimos.",
      intro:
        "De viviendas desde cero a reformas comerciales rápidas, un único equipo responsable de principio a fin.",
      link: "Ver todos los servicios",
    },
    process: {
      label: "03 — Proceso",
      title: "Cuatro pasos, sin sorpresas.",
      intro: "Una secuencia clara y sin sorpresas en costes ni plazos.",
    },
    values: {
      label: "04 — Valores",
      title: "Cómo trabajamos.",
    },
    projects: {
      label: "05 — Obra seleccionada",
      title: "Construido en Texas.",
      intro: "Proyectos recientes en Austin y el Hill Country.",
    },
    testimonials: {
      label: "Palabras amables",
      title: "Lo que dicen los clientes.",
    },
    contact: {
      label: "06 — Contacto",
      title: {
        lead: "Hablemos de",
        accent: "la obra.",
      },
      intro:
        "Cuéntanos sobre el terreno, el alcance y los plazos. Respondemos cada consulta en un día hábil.",
      copy: "Copiar correo",
      copied: "Copiado",
      emailLabel: "Correo",
      phoneLabel: "Teléfono",
      locationLabel: "Estudio",
      availability: "Agendando proyectos para primavera de 2027.",
      fees: "Los presupuestos se emiten en dólares estadounidenses, sin incluir tasas de permisos ni impuestos.",
    },
  },
  about: {
    hero: {
      eyebrow: "Sobre Traza",
      title: "La palabra del constructor es el plano.",
      intro:
        "Traza nació en 2012 con una idea sencilla: construir como de verdad trabaja un buen equipo — con honestidad, a tiempo y sin dramas.",
      imageAlt: "El equipo de Traza revisando planos en una obra activa en Austin.",
    },
    story: {
      label: "Nuestra historia",
      title: "Desde los cimientos.",
      paragraphs: [
        "Traza empezó como un equipo de estructura de tres personas, con una camioneta y una reputación que proteger. Elena Vásquez pasó veinte años en obras ajenas antes de decidir que la única forma de garantizar la calidad era dirigir la suya.",
        "Hoy seguimos siendo pequeños a propósito. En cada obra hay un director, un jefe de obra y un gestor de proyecto, y las mismas manos llevan el proyecto del primer boceto a la entrega final. No subcontratamos las partes que importan.",
        "Nuestros clientes vuelven porque el trabajo aguanta, las cuentas aguantan y el proceso es tranquilo. Ese es todo el discurso.",
      ],
      imageAlt: "Una biblioteca de materiales con muestras de ladrillo, madera y acero en el estudio de Traza.",
      imageCaption: "Materiales en los que confiamos, elegidos para envejecer bien.",
    },
    approach: {
      label: "Cómo construimos",
      title: "Tres promesas, en cada proyecto.",
      items: [
        {
          title: "Alcance por escrito",
          text: "Cada partida presupuestada y acordada antes de la primera entrega.",
        },
        {
          title: "Ritmo semanal",
          text: "Un día fijo de informe para que siempre sepas el avance y el gasto.",
        },
        {
          title: "Sin sustituciones",
          text: "Si un material cambia, primero lo apruebas tú. Siempre.",
        },
      ],
    },
    expertise: {
      label: "Experiencia",
      title: "Dónde somos más fuertes.",
    },
    team: {
      label: "El equipo",
      title: "Las personas en tu obra.",
      intro:
        "Pequeños a propósito. Cada proyecto cuenta con un director, un jefe de obra y un gestor de proyecto.",
    },
  },
  servicesPage: {
    hero: {
      eyebrow: "Servicios",
      title: "Un solo equipo, de principio a fin.",
      intro:
        "Sea cual sea el alcance, lo llevamos del primer boceto a la entrega final con un único punto responsable.",
      imageAlt: "Una obra con estructura de acero y una colada de hormigón en curso.",
    },
    list: {
      label: "01 — Qué hacemos",
      title: "Capacidades.",
      intro: "Seis disciplinas, un equipo, sin pasárselo a desconocidos.",
    },
    process: {
      label: "02 — Cómo funciona",
      title: "Los mismos cuatro pasos.",
      intro: "Una secuencia clara, sin sorpresas en costes ni plazos.",
    },
  },
  projects: [
    {
      slug: "lago-house",
      title: "Lago House",
      category: "Vivienda",
      location: "Austin, Texas",
      year: 2025,
      summary:
        "Una vivienda familiar de dos plantas en un tranquilo cul-de-sac, organizada en torno a un patio central y un porche sombreado.",
      image: {
        src: "/images/project-lago.webp",
        alt: "Una vivienda moderna de dos plantas con ladrillo cálido y grandes ventanales en Austin, Texas.",
      },
    },
    {
      slug: "vela-mercantile",
      title: "Vela Mercantile",
      category: "Comercial",
      location: "Austin, Texas",
      year: 2024,
      summary:
        "Reconversión de 1.100 m² de un almacén de mediados de siglo en oficinas luminosas y flexibles.",
      image: {
        src: "/images/project-vela.webp",
        alt: "Un interior de oficinas diáfano con cerchas de madera vistas y suelos de hormigón pulido.",
      },
    },
    {
      slug: "oak-and-ember",
      title: "Oak & Ember",
      category: "Restaurante",
      location: "Austin, Texas",
      year: 2024,
      summary:
        "La reforma de una cocina de leña con una barra de cuatro metros y un comedor que se abre a la calle.",
      image: {
        src: "/images/project-oak.webp",
        alt: "Un interior de restaurante con una larga barra de madera y lámparas colgantes.",
      },
    },
    {
      slug: "cedar-court",
      title: "Cedar Court",
      category: "Plurifamiliar",
      location: "Georgetown, Texas",
      year: 2023,
      summary:
        "Ocho casas adosadas reformadas para ganar eficiencia sin perder su estructura de cedro ni sus porches.",
      image: {
        src: "/images/project-cedar.webp",
        alt: "Una hilera de casas adosadas revestidas de cedro con porches bajo un cielo despejado de Texas.",
      },
    },
  ],
  services: [
    {
      title: "Viviendas a medida",
      text: "Casas desde cero diseñadas en torno a tu forma de vivir, de la cimentación a la última pintura.",
    },
    {
      title: "Reformas y remodelaciones",
      text: "Trabajos estructurales e interiores que abren las viviendas sin borrar su carácter.",
    },
    {
      title: "Acondicionamiento comercial",
      text: "Oficinas, tiendas y restaurantes acabados a tiempo y dentro de presupuesto.",
    },
    {
      title: "Diseño y construcción",
      text: "Un equipo, un contrato, un único responsable del primer boceto a la ocupación.",
    },
    {
      title: "Gestión de obra",
      text: "Planificación, compras y supervisión en obra para propietarios y arquitectos.",
    },
    {
      title: "Movimiento de tierras y cimentaciones",
      text: "Excavación, instalaciones, losas y muros de contención según especificación técnica.",
    },
  ],
  steps: [
    {
      title: "Consultar",
      text: "Visitamos el terreno, escuchamos el encargo y definimos el alcance en lenguaje claro.",
    },
    {
      title: "Planificar",
      text: "Planos, permisos, materiales y un presupuesto transparente por partidas.",
    },
    {
      title: "Construir",
      text: "Un jefe de obra dedicado, informes semanales y una obra limpia y segura.",
    },
    {
      title: "Entregar",
      text: "Recorrido final, una lista de remates breve y una garantía que se cumple.",
    },
  ],
  stats: [
    { value: "140+", label: "Proyectos terminados" },
    { value: "14", label: "Años de actividad" },
    { value: "78%", label: "Clientes recurrentes" },
    { value: "96%", label: "Entrega a tiempo" },
  ],
  values: [
    {
      title: "Materiales honestos",
      text: "Especificamos lo que pondríamos en nuestras propias casas, y nunca sustituimos sin preguntar.",
    },
    {
      title: "Plazos disciplinados",
      text: "Actualizaciones semanales y fechas realistas. Terminamos cuando decimos.",
    },
    {
      title: "Comunicación clara",
      text: "Un único contacto, un alcance por escrito y sin sorpresas en la factura.",
    },
    {
      title: "Construido por décadas",
      text: "Detalles y oficio que se miden en generaciones, no en fotografías.",
    },
  ],
  testimonials: [
    {
      quote:
        "Traza terminó antes de plazo y por debajo del presupuesto, y los informes semanales nos permitieron saber siempre en qué punto estábamos.",
      name: "Daniel Reyes",
      role: "Lago House",
    },
    {
      quote:
        "El equipo trató la obra como si fuera suya. Limpios, puntuales, y el oficio se nota en cada junta.",
      name: "Priya Nair",
      role: "Vela Mercantile",
    },
    {
      quote:
        "Nos acompañaron en todo el proceso de permisos y mantuvieron el presupuesto. No construiría con nadie más.",
      name: "Marcus Lee",
      role: "Oak & Ember",
    },
  ],
  people: [
    {
      name: "Elena Vásquez",
      role: "Fundadora y directora",
      text: "Dos décadas de estructura antes de fundar Traza, para construir como de verdad trabaja un buen equipo.",
    },
    {
      name: "Marcus Whitfield",
      role: "Jefe de obra",
      text: "Dirige cada obra como si fuera su propia manzana, y no ha fallado una fecha de entrega en nueve años.",
    },
    {
      name: "Sofia Ramos",
      role: "Gestora de proyecto",
      text: "Controla el calendario y el presupuesto, y mantiene informado a cada cliente cada semana.",
    },
  ],
};

export { es };
