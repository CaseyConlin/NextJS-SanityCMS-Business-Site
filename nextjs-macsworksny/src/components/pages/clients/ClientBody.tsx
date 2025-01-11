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
          flexDirection: "row",
          gap: 10,
          p: 5,
          pb: 5,
          my: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            borderRight: "1px solid #FF6600",
            pr: 4,
            flex: 5 / 8,
          }}
        >
          <MWHeading
            component="h2"
            color="mwOrange"
            text={title1}
            fontWeight={400}
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
              fontSize="2rem"
            />
            <List sx={{ listStyleType: "disc" }}>
              {services.map((service, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: 600,
                    display: "list-item",
                    ml: 5,
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
