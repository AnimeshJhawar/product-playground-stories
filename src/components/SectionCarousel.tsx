
import React, { ReactNode } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// Generic carousel for sections, mobile friendly with horizontal swipe drag
interface SectionCarouselProps {
  children: ReactNode[];
  className?: string;
  ariaLabel?: string;
}
const SectionCarousel = ({ children, className = "", ariaLabel }: SectionCarouselProps) => (
  <Carousel>
    <CarouselContent
      className={`flex flex-row gap-4 snap-x snap-mandatory pb-2 overflow-x-auto ${className}`}
      aria-label={ariaLabel}
    >
      {children.map((child, i) => (
        <CarouselItem
          className="snap-center w-5/6 md:w-1/2 max-w-xs sm:max-w-sm flex-shrink-0"
          key={i}
        >
          {child}
        </CarouselItem>
      ))}
    </CarouselContent>
  </Carousel>
);

export default SectionCarousel;
