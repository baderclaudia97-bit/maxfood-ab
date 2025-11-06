import { Product } from "@/types";

// Organization Schema
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "MaxFood AB",
    url: "https://maxfood.se",
    logo: "https://maxfood.se/logo.png",
    description: "Leading manufacturer of high-quality food products with ISO certification",
    foundingDate: "2000",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+46-XXX-XXX-XXX",
      contactType: "Sales",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Stockholm",
      addressCountry: "SE",
    },
    sameAs: [
      "https://www.linkedin.com/company/maxfood",
      "https://twitter.com/maxfood",
      "https://www.instagram.com/maxfood",
    ],
  };
}

// Product Schema
export function generateProductSchema(product: Product, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.image || `${baseUrl}/placeholder-product.jpg`,
    brand: {
      "@type": "Brand",
      name: "MaxFood AB",
    },
    sku: product.sku || `MAXFOOD-${product.id}`,
    offers: {
      "@type": "Offer",
      price: product.price || "Contact for price",
      priceCurrency: "EUR",
      availability: product.status === "available" 
        ? "https://schema.org/InStock" 
        : "https://schema.org/OutOfStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "42",
    },
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// LocalBusiness Schema
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://maxfood.se",
    name: "MaxFood AB",
    image: "https://maxfood.se/logo.png",
    description: "Premium Food Solutions",
    url: "https://maxfood.se",
    telephone: "+46-XXX-XXX-XXX",
    priceRange: "$$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Stockholm",
      addressCountry: "SE",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  };
}

// FAQ Schema
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// AggregateOffer Schema
export function generateAggregateOfferSchema(products: Product[]) {
  const prices = products.map((p) => p.price || 0).filter(Boolean);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);

  return {
    "@context": "https://schema.org",
    "@type": "AggregateOffer",
    priceCurrency: "EUR",
    lowPrice: minPrice.toString(),
    highPrice: maxPrice.toString(),
    offerCount: products.length,
    availability: "https://schema.org/InStock",
  };
}
