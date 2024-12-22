import { WorkPortfolio } from "@/components/UI/workPortfolio/WorkPortfolio";
import { WorkHeader } from "@/components/pages/services/ServiceHeader";
import { ContactFooter } from "@/components/UI/ContactFooter";

export default function Page() {
  return (
    <>
      <WorkHeader />
      <WorkPortfolio />
      <ContactFooter />
    </>
  );
}
