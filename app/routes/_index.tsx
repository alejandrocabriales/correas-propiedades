  import { Banner } from "../components/layouts/Banner";
  import { TopOffers } from "../components/sections/TopOffers";
  import { AboutUsSection } from "../components/sections/AboutUsSection";
  import { TeamSection } from "../components/sections/TeamSection";
import type { MetaFunction } from "@remix-run/node";


export const meta: MetaFunction = () => {
  return [
    { title: "Correa Properties - Modern Living for Everyone" },
    {
      name: "description",
      content:
        "Find your dream property in Madrid and Barcelona with Correa Properties.",
    },
  ];
};

export default function Index() {
  return (
    <main>
      <Banner />
      <TopOffers />
      <AboutUsSection />
      <TeamSection />
    </main>
  );
}
