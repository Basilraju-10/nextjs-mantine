import Layout from "@/components/layout/Layout";
import HeroBanner from "../../features/components/WhowearePage/MainHeroBanner";
import AboutSection from "../../features/components/WhowearePage/MainAboutSection";
import OurValues from "../../features/components/WhowearePage/MainOurValues";
import OurStory from "../../features/components/WhowearePage/MainOurStory";
import LeadershipTeam from "../../features/components/WhowearePage/MainLeadershipTeam";
import ServicesSection from "../../features/components/WhowearePage/MainServicesSection";
import Footer from "../../components/ui/Footer";



export default function WhoWeArePage() {
  return (
    <Layout>
      <HeroBanner/>
      <AboutSection/>
      <OurValues/>
      <OurStory/>
      <LeadershipTeam/>
      <ServicesSection/>
      <Footer/>
    </Layout>
  );
}