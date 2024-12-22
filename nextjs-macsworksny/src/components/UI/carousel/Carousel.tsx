"use client";
import React, { useState, useEffect, useRef } from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import { Slide, SlideProps } from "./Slide";
import { MWHeading } from "../MWHeading";
import Container from "@mui/material/Container";

export interface CarouselSlideProps extends SlideProps {
  id: string;
}

type CarouselProps = {
  sectionTitle: string;
  slidesData: CarouselSlideProps[];
};
// https://gist.github.com/KishorJena/02ba527672d26435998ac226a04fa712
export const Carousel = ({ sectionTitle, slidesData }: CarouselProps) => {
  // const [scrollIndex, setScrollIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showNavigation, setShowNavigation] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true);

  const checkOverflow = () => {
    if (containerRef.current && contentRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const contentWidth = contentRef.current.scrollWidth;
      setShowNavigation(contentWidth > containerWidth);
    }
  };

  useEffect(() => {
    checkOverflow();
    const resizeObserver = new ResizeObserver(checkOverflow);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current && containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = contentRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth;
        const isAtStart = scrollLeft === 0;

        if (isAtEnd) {
          return setIsAtEnd(true);
        }

        if (isAtStart) {
          return setIsAtStart(true);
        }
      }
      setIsAtEnd(false);
      setIsAtStart(false);
    };

    const currentContentRef = contentRef.current;
    if (currentContentRef) {
      currentContentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentContentRef) {
        currentContentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleScroll = (direction: number) => {
    if (
      containerRef &&
      containerRef.current &&
      containerRef.current.offsetWidth &&
      contentRef.current
    ) {
      const scrollAmount = direction * containerRef.current.offsetWidth;

      contentRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (contentRef.current) {
      setIsDragging(true);
      setStartX(event.pageX - contentRef.current.offsetLeft);
      setScrollLeft(contentRef.current.scrollLeft);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    if (contentRef.current) {
      event.preventDefault();
      const x = event.pageX - contentRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      contentRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  return (
    <Box py={10}>
      <Container maxWidth={"xl"} sx={{ pt: 5 }}>
        <MWHeading
          variant="h2"
          component="h2"
          text={sectionTitle}
          color="white"
          styleProps={{ pb: 1, textTransform: "capitalize" }}
        />
      </Container>
      <Box
        ref={containerRef}
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          width: "100%",
          overflow: "hidden",
          pb: 5,
        }}
      >
        {showNavigation && (
          <IconButton
            disabled={isAtStart}
            onClick={() => handleScroll(-1)}
            sx={{
              position: "absolute",
              left: 0,
              zIndex: 1,
              fill: "white",
              "&:disabled": { fill: "rgba(255, 255, 255, 0.5)" },
            }}
          >
            <ArrowCircleLeftIcon sx={{ fontSize: "3rem", fill: "inherit" }} />
          </IconButton>
        )}
        <Box
          component="div"
          ref={contentRef}
          sx={{
            display: "flex",
            width: "100vw",
            overflowX: "auto",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": { display: "none" },
            cursor: isDragging ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {slidesData.map((slideData) => (
            <Slide
              key={slideData.id}
              title={slideData.title}
              image={slideData.image}
              alt={slideData.alt}
              location={slideData.location}
              link={slideData.link}
            />
          ))}
        </Box>
        {showNavigation && (
          <IconButton
            disabled={isAtEnd}
            onClick={() => handleScroll(1)}
            sx={{
              position: "absolute",
              right: 0,
              zIndex: 1,
              fill: "white",
              "&:disabled": { fill: "rgba(255, 255, 255, 0.5)" },
            }}
          >
            <ArrowCircleRightIcon sx={{ fontSize: "3rem", fill: "inherit" }} />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};
