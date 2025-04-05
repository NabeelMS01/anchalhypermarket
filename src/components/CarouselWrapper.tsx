"use client";

import dynamic from "next/dynamic";

const CarouselComponent = dynamic(() => import("./Courousel"), {
  ssr: false,
});

export default function CarouselWrapper() {
  return <CarouselComponent />;
} 