export interface ClientConfig {
  name: string;
  eventType: string; // e.g., "MIS XV AÑOS"
  finalPhrase: string;
}

export interface ParentsConfig {
  topLabel: string; // e.g., "Con la bendición de mis padres"
  fatherName: string;
  motherName: string;
  godparents?: string;
  invitationText: string;
}

export interface EventConfig {
  date: {
    day: string; // e.g., "04"
    month: string; // e.g., "Abril"
    year: string; // e.g., "2026"
  };
  time: string; // e.g., "16:30 hrs"
  isoDate: string; // format: "YYYY-MM-DDTHH:mm:ss"
  rsvpDeadline: string; // e.g., "1 de Abril"
  topLabel: string; // e.g., "Agenda la fecha"
}

export interface LocationConfig {
  topLabel: string; // e.g., "El Lugar"
  venueName: string;
  address: string;
  mapLink: string;
  buttonText: string;
}

export interface ItineraryItem {
  time: string;
  title: string;
  description: string;
  image: string; // Path to the image
}

export interface ItineraryConfig {
  topLabel: string; // e.g., "Nuestra Noche"
  mainTitle: string; // e.g., "Itinerario"
  schedule: ItineraryItem[];
}

export interface DressCodeConfig {
  topLabel: string; // e.g., "Sugerencia de Estilo"
  mainTitle: string; // e.g., "Dress Code"
  type: string; // e.g., "Formal"
  highlight: {
    line1: string; // e.g., "Todos"
    line2: string; // e.g., "De"
    line3: string; // e.g., "Blanco"
  };
  reservedColorsText: {
    prefix: string;
    color1: string; // e.g., "ROSA"
    color2: string; // e.g., "DORADO"
    suffix: string;
  };
  extraNotes: {
    prefix: string;
    highlight: string; // e.g., "TRAJE DE BAÑO"
    suffix: string;
  };
}

export interface PassesConfig {
  topLabel: string; // e.g., "Control de Asistencia"
  mainTitle: string; // e.g., "Tus Pases"
  ticketLabel: string; // e.g., "Boleto Oficial"
  admitText: string; // e.g., "Admitir"
  quantity: string; // e.g., "1"
  unitText: string; // e.g., "Persona"
}

export interface GoogleSheetsConfig {
  webhookUrl: string;
}

export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    card: string;
    textMuted: string;
  };
}

export interface DecorationItem {
  src: string;
  alt: string;
  className?: string;
  animation?: any; // Framer motion variants or custom logic
  position?: string; // Descriptive position for logic
}

export interface VisualsConfig {
  hero: {
    background: string;
    decorations: DecorationItem[];
  };
  itinerary: {
    background?: string;
  };
}

export interface SiteConfig {
  client: ClientConfig;
  parents: ParentsConfig;
  event: EventConfig;
  location: LocationConfig;
  itinerary: ItineraryConfig;
  dressCode: DressCodeConfig;
  passes: PassesConfig;
  googleSheets?: GoogleSheetsConfig;
  theme: ThemeConfig;
  visuals: VisualsConfig;
}

export const siteConfig: SiteConfig = {
  client: {
    name: "Alexia",
    eventType: "MIS XV AÑOS",
    finalPhrase: 'Aprendí que estar con quienes quiero es suficiente para ser feliz por eso los momentos felices no se viven solo si no con quienes hacen que cada momento valga la pena por eso espero verte en esta noche inolvidable.',
  },
  parents: {
    topLabel: "Junto a mis padres y padrinos",
    fatherName: "Alexis Zabala",
    motherName: "Ana Karen Velasco",
    godparents: "Vivían Cespedes y Pedro Sanabria",
    invitationText: "Me llena de alegría invitarles a compartir este día tan especial con nosotros.",
  },
  event: {
    date: {
      day: "05",
      month: "Junio",
      year: "2026",
    },
    time: "19:00 hrs",
    isoDate: "2026-06-05T19:00:00",
    rsvpDeadline: "25 de mayo",
    topLabel: "Agenda la fecha",
  },
  location: {
    topLabel: "El Lugar",
    venueName: "La Rochelle Salón de Eventos", 
    address: "Calle 24 de septiembre",
    mapLink: "https://maps.app.goo.gl/XaNSPH8HZ14kjYu56",
    buttonText: "¿Cómo llegar?",
  },
  itinerary: {
    topLabel: "Nuestra Noche",
    mainTitle: "Itinerario",
    schedule: [
      {
        time: "19:00",
        title: "Bienvenida",
        description: "Inicio de la celebración y llegada de invitados.",
        image: "/images/decorativas/boladisco2.png",
      },
      {
        time: "20:00",
        title: "Recepción",
        description: "Cóctel de bienvenida para los invitados de la noche.",
        image: "/images/decorativas/flor.png",
      },
      {
        time: "20:30",
        title: "Ceremonia",
        description: "El momento especial: vals y brindis.",
        image: "/images/decorativas/coctail.png", 
      },
      {
        time: "22:00",
        title: "Fiesta a bailar",
        description: "Apertura oficial de la pista de baile.",
        image: "/images/decorativas/fiesta.png",
      },
      {
        time: "23:00",
        title: "Hora Loca",
        description: "¡Máxima energía y sorpresas en la pista!",
        image: "/images/decorativas/megafon.png",
      },
      {
        time: "00:00",
        title: "Torta",
        description: "Compartimos la dulzura de este momento especial.",
        image: "/images/decorativas/torta2.png",
      },
      {
        time: "03:00",
        title: "Bye bye",
        description: "Gracias por acompañarnos en esta noche mágica.",
        image: "/images/decorativas/taxi2.png",
      },
    ]
  },
  dressCode: {
    topLabel: "Sugerencia de Estilo",
    mainTitle: "Dress Code",
    type: "Formal",
    highlight: {
      line1: "Código",
      line2: "De",
      line3: "Gala",
    },
    reservedColorsText: {
      prefix: "LOS COLORES",
      color1: "FUCSIA",
      color2: "PLATEADO",
      suffix: "ESTÁN RESERVADOS EXCLUSIVAMENTE PARA LA QUINCEAÑERA.",
    },
    extraNotes: {
      prefix: "¡PREPÁRATE PARA UNA",
      highlight: "NOCHE INOLVIDABLE",
      suffix: "!",
    }
  },
  passes: {
    topLabel: "Control de Asistencia",
    mainTitle: "Boarding Pass",
    ticketLabel: "VIP Flight",
    admitText: "Pasajero",
    quantity: "1",
    unitText: "Persona",
  },
  googleSheets: {
    webhookUrl: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_WEBHOOK_URL || "https://script.google.com/macros/s/AKfycbzQTqfTwaHMbbNasswGecuqDyk3XKnSz0qRl7YAHYz_FyydWJj8vLRcZzVTLZ_Xu9F9/exec",
  },
  theme: {
    colors: {
      primary: "#ff007f",
      secondary: "#c0c0c0",
      accent: "#ff1493",
      background: "#0f111a",
      foreground: "#ffffff",
      card: "rgba(15, 17, 26, 0.6)",
      textMuted: "#a0a0a0",
    }
  },
  visuals: {
    hero: {
      background: "/images/decorativas/grupo_bolas_disco.png",
      decorations: []
    },
    itinerary: {
      background: "#0f111a"
    }
  }
};
