import { ContactFooter } from "@/components/UI/contactFooter/ContactFooter";
import { sanityFetchData, sanityUrlFor } from "@/sanity/helpers";

export const ContactFooterContainer = async () => {
  const INDEX_QUERY = `*[_type == "indexPage"]{contactFooterTitle, contactFooterSubtitle, contactFooterDescription, contactFooterImage}`;

  const cfData = await sanityFetchData(INDEX_QUERY);
  const {
    contactFooterTitle,
    contactFooterSubtitle,
    contactFooterDescription,
  } = cfData[0];

  const contactFooterImage =
    sanityUrlFor(cfData[0]?.contactFooterImage?.image?.asset)?.url() || "";

  return (
    <ContactFooter
      title={contactFooterTitle}
      subtitle={contactFooterSubtitle}
      description={contactFooterDescription}
      image={contactFooterImage}
    />
  );
};
