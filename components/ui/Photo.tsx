"use client";

import Image, { type ImageLoaderProps } from "next/image";
import { photos, type PhotoAsset, type PhotoKey } from "@/lib/images";

/** Ask Unsplash's CDN for the exact width + best format (AVIF/WebP) per device. */
function unsplashLoader({ src, width, quality }: ImageLoaderProps) {
  return `${src}?auto=format&fit=crop&w=${width}&q=${quality ?? 72}`;
}

type PhotoProps = {
  photo: PhotoKey;
  /** Fill the parent (which must be positioned) instead of intrinsic sizing. */
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  quality?: number;
};

export function Photo({ photo, fill = true, sizes = "100vw", priority, className = "", quality }: PhotoProps) {
  const asset: PhotoAsset = photos[photo];
  const isRemote = asset.src.startsWith("http");
  const common = {
    src: asset.src,
    alt: asset.alt,
    sizes,
    priority,
    quality,
    loader: isRemote ? unsplashLoader : undefined,
    style: { objectPosition: asset.position ?? "50% 50%" },
    className: `object-cover ${className}`,
  };

  return fill ? (
    <Image {...common} fill />
  ) : (
    <Image {...common} width={asset.width} height={asset.height} />
  );
}
