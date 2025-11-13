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