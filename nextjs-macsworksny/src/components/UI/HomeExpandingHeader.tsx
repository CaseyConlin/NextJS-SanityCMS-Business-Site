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
            flex: hovered && hovered === quarter.id ? "2" : "1",
            height: "100vh",
            transition: "all .5s",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
          }}
        >
          <Box
            component="div"
            // onMouseEnter={(e) => setHovered(e.currentTarget.dataset.hovered)}
            // onMouseLeave={() => setHovered(undefined)}
            // data-hovered={quarter.id}
            sx={{
              flex: hovered && hovered === quarter.id ? "2" : "1",
              height: "100vh",
              transition: "all .5s",
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
                height: "100%",
                filter:
                  hovered && hovered === quarter.id ? "" : "saturate(10%)",
              }}
              sizes={"100%"}
            />
            <Box
              sx={{
                position: "absolute",
                transform: "rotate(-90deg)",
                transformOrigin: "bottom right",
              }}
            >
              <Typography
                variant="h4"
                color="mwOrange"
                fontWeight={900}
                fontSize={"4rem"}
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
