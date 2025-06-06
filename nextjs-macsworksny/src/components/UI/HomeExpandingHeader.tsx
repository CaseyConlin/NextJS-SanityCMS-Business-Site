"use client";
import { useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

type quarterProps = {
  id: string;
  title: string;
  image: StaticImageData;
  alt: string;
  link: string;
};

type HomeExpandingHeaderProps = {
  quarters: quarterProps[];
};

export const HomeExpandingHeader = ({ quarters }: HomeExpandingHeaderProps) => {
  const [hovered, setHovered] = useState<undefined | string>(undefined);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        columnGap: "1px",
      }}
    >
      {quarters.map((quarter: quarterProps) => (
        <Link
          href={quarter.link}
          key={quarter.id}
          onMouseEnter={(e) => setHovered(e.currentTarget.dataset.hovered)}
          onMouseLeave={() => setHovered(undefined)}
          data-hovered={quarter.id}
          style={{
            flex: hovered && hovered === quarter.id ? 2 : 1,
            height:
              global?.window && window.innerWidth < 900 ? "20vh" : "100vh",
            transition: "all .5s ease",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="div"
            sx={{
              flex: hovered && hovered === quarter.id ? "2" : "1",
              height: { xs: "20vh", md: "100vh" },
              transition: "all .5s ease",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "flex-end",
            }}
          >
            <Image
              src={quarter.image}
              alt={quarter.alt}
              width={0}
              height={0}
              priority
              style={{
                objectFit: "cover",
                width: "100%",
                transition: "all .25s ease",
                height: "100%",
                filter:
                  hovered && hovered === quarter.id
                    ? ""
                    : "grayscale(1) brightness(.7)",
              }}
              sizes={"100%"}
            />
            <Box
              sx={{
                position: "absolute",
                transform: { xs: "none", md: "rotate(-90deg)" },
                mt: { xs: "12vh", md: "unset" },
                left: { xs: "2vw", md: "unset" },
                transformOrigin: "bottom right",
              }}
            >
              <Typography
                variant="h2"
                color="mwOrange"
                fontWeight={900}
                fontSize={{ xs: "2rem", md: "4rem" }}
              >
                {quarter.title}
              </Typography>
            </Box>
          </Box>
        </Link>
      ))}
    </Box>
  );
};
