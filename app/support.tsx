import { Section } from "@/app/types";

export const sections: Section = {
  home: {
    title: "Restaurantes, Cafés y Bares",
    description:
      "Encuentra lo mejores de la Ruta del Vino Ensenada del Valle de Guadalupe",
    icons: "/favicon.webp",
    openGraph: {
      title: "Restaurantes, Hoteles y Viñedos del Valle de Guadalupe",
      description:
        "Encuentra lo mejores de la Ruta del Vino Ensenada del Valle de Guadalupe",
      images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
      url: "https://www.larutadelvinoensenada.com/",
    },
  },
  cafes: {
    title: "Cafés",
    description:
      "Encuentra los mejores Viñedos de la Ruta del Vino Ensenada del Valle de Guadalupe",
    icons: "/favicon.webp",
    openGraph: {
      title: "Restaurantes, Hoteles y Viñedos del Valle de Guadalupe",
      description:
        "Encuentra los mejores Viñedos de la Ruta del Vino Ensenada del Valle de Guadalupe",
      images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
      url: "https://www.larutadelvinoensenada.com/",
    },
  },
  restaurantes: {
    title: "Restaurantes",
    description:
      "Encuentra los mejores Restaurantes de la Ruta del Vino Ensenada del Valle de Guadalupe",
    icons: "/favicon.webp",
    openGraph: {
      title: "Restaurantes en el Valle de Guadalupe",
      description:
        "Encuentra los mejores Restaurantes de la Ruta del Vino Ensenada del Valle de Guadalupe",
      images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
      url: "https://www.larutadelvinoensenada.com/",
    },
  },
  bares: {
    title: "Bares",
    description:
      "Encuentra los mejores Hoteles de la Ruta del Vino Ensenada del Valle de Guadalupe",
    icons: "/favicon.webp",
    openGraph: {
      title: "Hoteles en el Valle de Guadalupe",
      description:
        "Encuentra los mejores Hoteles de la Ruta del Vino Ensenada del Valle de Guadalupe",
      images: [{ url: "https://www.larutadelvinoensenada.com/banner.webp" }],
      url: "https://www.larutadelvinoensenada.com/",
    },
  },
};

export function getMetadata(section: string) {
  return sections[section];
}

export const tokens = {
  colors: {
    primary: "#660253",
  },
};
