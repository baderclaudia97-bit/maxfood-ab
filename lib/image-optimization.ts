import Image from "next/image";

export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
}

/**
 * Optimized Image Component using Next.js Image
 * Automatically handles:
 * - WebP format conversion
 * - Responsive sizing
 * - Lazy loading
 * - AVIF support
 */
export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  priority = false,
  className = "",
  objectFit = "cover",
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      loading={priority ? "eager" : "lazy"}
      quality={75}
      className={className}
      style={{
        objectFit,
      }}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  );
}

/**
 * Image optimization tips and configuration
 */
export const imageOptimizationConfig = {
  // Supported formats
  formats: ["image/webp", "image/avif"],

  // Quality levels
  quality: {
    high: 90,
    medium: 75,
    low: 60,
  },

  // Responsive breakpoints
  breakpoints: [320, 480, 640, 768, 1024, 1280, 1536],

  // Image sizes for srcset
  imageSizes: [
    { width: 640, size: "(max-width: 640px) 100vw" },
    { width: 1024, size: "(max-width: 1024px) 50vw" },
    { width: 1536, size: "33vw" },
  ],

  // Placeholders
  placeholder: {
    blur: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'%3E%3Crect fill='%23374151' width='800' height='600'/%3E%3C/svg%3E",
    empty: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
  },
};

/**
 * Get optimized image URL with transformations
 */
export function getOptimizedImageUrl(
  originalUrl: string,
  width: number = 800,
  quality: "high" | "medium" | "low" = "medium"
): string {
  // If using external CDN/API, implement URL transformation
  // Example for Cloudinary or similar
  const qualityMap = {
    high: 90,
    medium: 75,
    low: 60,
  };

  // For now, return original URL
  // In production, integrate with image optimization service
  return originalUrl;
}

/**
 * Batch image preloading
 */
export function preloadImages(urls: string[]) {
  if (typeof window === "undefined") return;

  urls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = url;
    document.head.appendChild(link);
  });
}

/**
 * Image lazy loading observer
 */
export function useImageLazyLoad() {
  if (typeof window === "undefined") return;

  const images = document.querySelectorAll("img[data-lazy]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = img.dataset.lazy || "";
        img.removeAttribute("data-lazy");
        observer.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}
