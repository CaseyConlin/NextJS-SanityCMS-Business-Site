import { SanityDocument } from "next-sanity";
import { PortableTextBody } from "@/sanity/PortableTextBody";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import GradingIcon from "@mui/icons-material/Grading";

import { MWHeading } from "../../UI/MWHeading";

type WorkBodyProps = {
  features: string[];
  location: string;
  title1: string;
  body1: SanityDocument;
  title2: string;
  body2: SanityDocument;
};
export const WorkBody = ({
  features,
  location,
  title1,
  body1,
  title2,
  body2,
}: WorkBodyProps) => {
  return (
    <Container
      maxWidth={false}
      sx={{ background: "#fff url(/patinabg.webp) no-repeat left bottom" }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: { xs: 4, sm: 10 },
          p: { xs: 1, sm: 5 },
          pb: { xs: 10, sm: 5 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: { xs: "flex-start", sm: "flex-end" },
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
              text="Features"
              icon={<InfoOutlinedIcon />}
            />
            <List sx={{ listStyleType: "disc" }}>
              {features.map((feature, index) => (
                <ListItem
                  key={index}
                  sx={{
                    fontWeight: 600,
                    display: "list-item",
                    ml: 3,
                    pl: 0,
                    pb: 0,
                  }}
                >
                  {feature}
                </ListItem>
              ))}
            </List>
            <MWHeading
              component="h2"
              color="mwOrange"
              text="Location"
              icon={<PlaceOutlinedIcon />}
              styleProps={{ mt: 4 }}
            />
            <List>
              <ListItem
                sx={{
                  fontWeight: 600,
                  display: "list-item",
                  ml: 3,
                  pl: 0,
                  pb: 0,
                }}
              >
                {location}
              </ListItem>
            </List>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            borderLeft: { xs: "none", sm: "1px solid #FF6600" },
            pl: { xs: 0, sm: 4 },
            flex: 2 / 3,
          }}
        >
          <MWHeading
            component="h2"
            color="mwOrange"
            text="Project Description"
            icon={<GradingIcon />}
          />
          <MWHeading
            component="h3"
            color="black"
            text={title1}
            fontSize="1.25rem"
            fontWeight={500}
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
      </Container>
    </Container>
  );
};
