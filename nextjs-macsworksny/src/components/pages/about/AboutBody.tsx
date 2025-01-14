import Container from "@mui/material/Container";
import { MWHeading } from "../../UI/MWHeading";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import MWLightLogo from "../../../../public/logos/miw-updated-logo-light.png";
export const AboutBody = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundColor: "white",
        backgroundSize: "100vw 10vh",
        background: "#fff url(/patinabg.webp) no-repeat left bottom",
      }}
    >
      <Container
        maxWidth={"xl"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          py: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            pb: 10,
          }}
        >
          <Image src={MWLightLogo} alt="MWLogo" />
        </Box>
        <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
          <MWHeading
            variant="h2"
            component={"h2"}
            text={"About Us"}
            styleProps={{ alignSelf: "flex-start" }}
          ></MWHeading>
          <Typography variant="body1" py={1}>
            With over 50 years of combined experience, William Staesser and Jeff
            McKelvey lead Macs Works with an unwavering commitment to
            exceptional steel fabrication and craftsmanship. Based in the heart
            of the Hudson Valley, we proudly serve communities across Dutchess,
            Ulster, Orange, Columbia, Greene, Putnam, and Rockland counties.
            From the bustling towns of Poughkeepsie and Kingston to the serene
            landscapes of Rhinebeck and Newburgh, our work can be found
            enhancing homes, businesses, and public spaces throughout the
            region.
          </Typography>
          <Typography variant="body1" py={1}>
            Specializing in structural steel, custom staircases, bridges,
            railings, and ornamental steelwork, we partner with residential and
            commercial clients to deliver projects that are on time, within
            budget, and meet the highest safety standards. Whether it’s
            fabricating the framework for a new building, installing a custom
            spiral staircase in a historic home, or constructing a steel bridge
            that connects communities, we bring the same level of precision,
            care, and dedication to every job.
          </Typography>
          <MWHeading
            variant="h2"
            component={"h2"}
            text={"Our Work"}
            styleProps={{ alignSelf: "flex-start", pt: 5 }}
          ></MWHeading>
          <Typography variant="body1" py={1}>
            Each project, from large-scale commercial builds to intricate
            residential features, is completed with meticulous attention to
            detail. Our expertise spans new construction and renovations,
            providing innovative solutions that add strength, functionality, and
            aesthetic appeal to any space. Clients trust us to craft durable,
            custom steelwork that seamlessly blends reliability with artistry,
            ensuring every piece meets and exceeds expectations.
          </Typography>
          <Typography variant="body1" py={1}>
            At Macs Works, we take pride in serving the unique needs of Hudson
            Valley communities while supporting the local economy. Our team
            combines time-tested craftsmanship with modern technology to create
            solutions that stand the test of time. Let us help you bring your
            vision to life, whether you’re building a new home in Beacon,
            upgrading a historic property in Hudson, or constructing a
            commercial space in Middletown.
          </Typography>
          <Typography variant="body1" py={1}>
            Reach out today to discover how Macs Works can exceed your
            expectations with quality steel solutions tailored to your needs. We
            look forward to building something remarkable with you.
          </Typography>
        </Box>
      </Container>
    </Container>
  );
};
