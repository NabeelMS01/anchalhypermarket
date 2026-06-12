"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const banners = [
  { img: "/imgs/offer2.png", alt: "Current offers at Anchal Hypermarket" },
  { img: "/imgs/offer1.png", alt: "Special deals at Anchal Hypermarket" },
];

const CarouselComponent = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[autoplayPlugin.current]}
      opts={{ loop: true }}
      className="w-full group"
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={banner.img}>
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={banner.img}
                alt={banner.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="hidden md:inline-flex left-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      <CarouselNext className="hidden md:inline-flex right-4 opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Dot indicators */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {banners.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => api?.scrollTo(index)}
            className={`h-2 rounded-full transition-all ${
              current === index ? "w-6 bg-white" : "w-2 bg-white/60"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
