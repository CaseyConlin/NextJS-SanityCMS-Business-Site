import { SanityDocument } from "next-sanity";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ChecklistIcon from "@mui/icons-material/Checklist";

import { MWHeading } from "../../UI/MWHeading";

type ClientBodyProps = {
  title1: string;
  body1: SanityDocument;
  title2: string;
  body2: SanityDocument;
  services: string[];
};
export const ClientBody = ({
  title1,
  body1,
  title2,
  body2,
  services,
}: ClientBodyProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{ background: "#fff url(/patinabg.webp) no-repeat left bottom" }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 4, md: 10 },
          p: { xs: 1, md: 5 },
          pb: { xs: 5, md: 5 },
          my: { xs: 0, md: 15 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRight: { xs: "none", md: "1px solid #FF6600" },
            pr: { xs: 0, md: 4 },
            flex: 5 / 8,
          }}
        >
          <MWHeading
            component="h2"
            color="mwOrange"
            text={title1}
            fontWeight={400}
            styleProps={{ fontSize: { xs: "1.5rem", md: "2.25rem" } }}
          />

          <PortableTextBody text={body1} />

          <MWHeading
            component="h5"
            color="black"
            text={title2}
            fontSize="1rem"
            fontWeight={700}
            styleProps={{ fontStyle: "italic", mt: 2 }}
          />
          <PortableTextBody text={body2} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            flex: 1 / 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <MWHeading
              component="h2"
              color="mwOrange"
              text="Services We Provide"
              icon={<ChecklistIcon />}
              fontWeight={500}
              styleProps={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
            />
            <List sx={{ listStyleType: "disc" }}>
              {services.map((service, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: 600,
                    display: "list-item",
                    ml: { xs: 3, md: 5 },
                    pl: 0,
                    pb: 0,
                  }}
                >
                  {service}
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Container>
    </Container>
  );
};
