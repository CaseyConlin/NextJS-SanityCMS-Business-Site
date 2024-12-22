"use client";
import { useState } from "react";
import Image from "next/image";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

// import Bridge from "../../../../public/little_steelbridge_7285.jpg";
// import bridge1 from "../../../../public/bridge1.jpeg";
// import bridge2 from "../../../../public/bridge2.jpeg";

// const pics = [
//   {
//     id: 0,
//     image: Bridge,
//     alt: "Steel Bridge",
//   },
//   {
//     id: 1,
//     image: bridge1,
//     alt: "Steel Bridge",
//   },
//   {
//     id: 2,
//     image: bridge2,
//     alt: "Steel Bridge",
//   },
// ];
type ImageGalleryProps = {
  images: {
    id: string;
    image: string;
    alt: string;
  }[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [bigImage, setBigImage] = useState(images[0]);

  return (
    <Box mb={10}>
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          height: "80vh",
          overflow: "hidden",
          transition: "all .5s",
        }}
      >
        <Image
          src={bigImage.image}
          alt={bigImage.alt}
          fill
          priority
          sizes={"100%"}
          style={{ transition: "all .5s", objectFit: "cover" }}
        />
      </Container>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "center", gap: 4, mt: 4 }}
      >
        {images.map((pic) => (
          <Button
            key={pic.id}
            sx={{ width: "220px", height: "220px", position: "relative" }}
            onClick={() => setBigImage(pic)}
          >
            <Image
              src={pic.image}
              alt={pic.alt}
              fill
              sizes="100%"
              style={{ objectFit: "cover" }}
            />
          </Button>
        ))}
      </Container>
    </Box>
  );
};
