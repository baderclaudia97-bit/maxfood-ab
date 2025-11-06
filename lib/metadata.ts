import { Metadata } from "next";
import { Locale } from "@/app/layout";

const baseUrl = "https://maxfood.se";

const pageMetadata: Record<Locale, Record<string, Metadata>> = {
  es: {
    products: {
      title: "Catálogo de Productos — MaxFood AB",
      description: "Descubre nuestro completo catálogo de productos alimentarios premium. Bebidas, snacks, lácteos y soluciones de etiqueta privada.",
      openGraph: {
        title: "Catálogo de Productos MaxFood AB",
        description: "Productos alimentarios de alta calidad con certificación ISO",
        url: `${baseUrl}/es/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "Contacto — MaxFood AB",
      description: "Ponte en contacto con nuestro equipo de ventas. Resolvemos tus inquietudes en menos de 24 horas.",
      openGraph: {
        title: "Contacto MaxFood AB",
        description: "Envía tu mensaje y nos pondremos en contacto",
        url: `${baseUrl}/es/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "Acerca de MaxFood AB",
      description: "Conoce nuestra historia, valores y compromiso con la calidad en la industria alimentaria desde 2000.",
      openGraph: {
        title: "Acerca de MaxFood AB",
        description: "Más de 20 años de excelencia en alimentos premium",
        url: `${baseUrl}/es/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  en: {
    products: {
      title: "Product Catalog — MaxFood AB",
      description: "Explore our comprehensive catalog of premium food products. Beverages, snacks, dairy, and private label solutions.",
      openGraph: {
        title: "MaxFood AB Product Catalog",
        description: "High-quality food products with ISO certification",
        url: `${baseUrl}/en/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "Contact — MaxFood AB",
      description: "Get in touch with our sales team. We respond within 24 hours to all inquiries.",
      openGraph: {
        title: "Contact MaxFood AB",
        description: "Send us a message and we'll get back to you",
        url: `${baseUrl}/en/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "About MaxFood AB",
      description: "Learn about our story, values, and commitment to quality in the food industry since 2000.",
      openGraph: {
        title: "About MaxFood AB",
        description: "Over 20 years of excellence in premium food",
        url: `${baseUrl}/en/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  sv: {
    products: {
      title: "Produktkatalog — MaxFood AB",
      description: "Utforska vår kompletta katalog av premiumlivsmedelsprodukter. Drycker, snacks, mejerivaror och privatmärkeslösningar.",
      openGraph: {
        title: "MaxFood AB Produktkatalog",
        description: "Högkvalitativa livsmedelsprodukter med ISO-certifiering",
        url: `${baseUrl}/sv/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "Kontakt — MaxFood AB",
      description: "Kontakta vårt försäljningsteam. Vi svarar på alla förfrågningar inom 24 timmar.",
      openGraph: {
        title: "Kontakt MaxFood AB",
        description: "Skicka ditt meddelande och vi återkommer till dig",
        url: `${baseUrl}/sv/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "Om MaxFood AB",
      description: "Läs om vår historia, värderingar och engagemang för kvalitet i livsmedelsindustrin sedan 2000.",
      openGraph: {
        title: "Om MaxFood AB",
        description: "Över 20 år av excellens inom premiumprodukter",
        url: `${baseUrl}/sv/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  fr: {
    products: {
      title: "Catalogue de Produits — MaxFood AB",
      description: "Explorez notre catalogue complet de produits alimentaires premium. Boissons, collations, produits laitiers et marques privées.",
      openGraph: {
        title: "Catalogue MaxFood AB",
        description: "Produits alimentaires haut de gamme certifiés ISO",
        url: `${baseUrl}/fr/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "Contact — MaxFood AB",
      description: "Contactez notre équipe commerciale. Nous répondons à toutes les demandes dans les 24 heures.",
      openGraph: {
        title: "Contact MaxFood AB",
        description: "Envoyez-nous un message et nous vous recontacterons",
        url: `${baseUrl}/fr/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "À Propos de MaxFood AB",
      description: "Découvrez notre histoire, nos valeurs et notre engagement en faveur de la qualité dans l'industrie alimentaire depuis 2000.",
      openGraph: {
        title: "À Propos MaxFood AB",
        description: "Plus de 20 ans d'excellence en aliments premium",
        url: `${baseUrl}/fr/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  de: {
    products: {
      title: "Produktkatalog — MaxFood AB",
      description: "Entdecken Sie unseren umfassenden Katalog von Premium-Lebensmittelprodukten. Getränke, Snacks, Milchprodukte und Markenartikel.",
      openGraph: {
        title: "MaxFood AB Produktkatalog",
        description: "Hochwertige Lebensmittel mit ISO-Zertifizierung",
        url: `${baseUrl}/de/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "Kontakt — MaxFood AB",
      description: "Kontaktieren Sie unser Verkaufsteam. Wir antworten auf alle Anfragen innerhalb von 24 Stunden.",
      openGraph: {
        title: "Kontakt MaxFood AB",
        description: "Senden Sie uns eine Nachricht und wir werden Sie kontaktieren",
        url: `${baseUrl}/de/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "Über MaxFood AB",
      description: "Erfahren Sie mehr über unsere Geschichte, Werte und unser Engagement für Qualität in der Lebensmittelindustrie seit 2000.",
      openGraph: {
        title: "Über MaxFood AB",
        description: "Über 20 Jahre Exzellenz bei Premium-Lebensmitteln",
        url: `${baseUrl}/de/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  ar: {
    products: {
      title: "فهرس المنتجات — MaxFood AB",
      description: "استكشف فهرسنا الكامل لمنتجات الغذاء الفاخرة. المشروبات والوجبات الخفيفة ومنتجات الألبان والعلامات الخاصة.",
      openGraph: {
        title: "فهرس MaxFood AB",
        description: "منتجات غذائية عالية الجودة معتمدة ISO",
        url: `${baseUrl}/ar/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "اتصل بنا — MaxFood AB",
      description: "اتصل بفريق المبيعات لدينا. نرد على جميع الاستفسارات في غضون 24 ساعة.",
      openGraph: {
        title: "اتصل بـ MaxFood AB",
        description: "أرسل لنا رسالة وسنتواصل معك",
        url: `${baseUrl}/ar/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "حول MaxFood AB",
      description: "اعرف المزيد عن قصتنا وقيمنا والتزامنا بالجودة في صناعة الغذاء منذ عام 2000.",
      openGraph: {
        title: "حول MaxFood AB",
        description: "أكثر من 20 سنة من التميز في الغذاء الفاخر",
        url: `${baseUrl}/ar/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  zh: {
    products: {
      title: "产品目录 — MaxFood AB",
      description: "探索我们的高级食品产品完整目录。饮料、零食、乳制品和自有品牌解决方案。",
      openGraph: {
        title: "MaxFood AB 产品目录",
        description: "ISO认证的高品质食品",
        url: `${baseUrl}/zh/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "联系我们 — MaxFood AB",
      description: "联系我们的销售团队。我们在24小时内回复所有询询。",
      openGraph: {
        title: "联系 MaxFood AB",
        description: "向我们发送信息，我们会与您联系",
        url: `${baseUrl}/zh/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "关于 MaxFood AB",
      description: "了解我们的故事、价值观和自2000年以来对食品工业质量的承诺。",
      openGraph: {
        title: "关于 MaxFood AB",
        description: "超过20年的高级食品卓越成就",
        url: `${baseUrl}/zh/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
  ja: {
    products: {
      title: "製品カタログ — MaxFood AB",
      description: "プレミアム食品製品の完全なカタログをご覧ください。飲料、スナック、乳製品、プライベートブランドソリューション。",
      openGraph: {
        title: "MaxFood AB 製品カタログ",
        description: "ISO認証の高品質食品",
        url: `${baseUrl}/ja/products`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    contact: {
      title: "お問い合わせ — MaxFood AB",
      description: "営業チームにお問い合わせください。24時間以内にすべてのお問い合わせにお応えします。",
      openGraph: {
        title: "お問い合わせ MaxFood AB",
        description: "メッセージをお送りいただければ、ご連絡いたします",
        url: `${baseUrl}/ja/contact`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
    about: {
      title: "MaxFood AB について",
      description: "2000年以来の食品業界における私たちの歴史、価値観、品質への取り組みについてご覧ください。",
      openGraph: {
        title: "MaxFood AB について",
        description: "プレミアム食品における20年以上の卓越性",
        url: `${baseUrl}/ja/about`,
        siteName: "MaxFood AB",
        type: "website",
      },
    },
  },
};

export function getPageMetadata(locale: Locale, page: string): Metadata {
  return pageMetadata[locale]?.[page] || {};
}
