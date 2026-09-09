import Layout from "@/components/Layout";
import HeroBanner from "../../features/components/MainHeroBanner";
import AboutSection from "../../features/components/MainAboutSection";
import OurValues from "../../features/components/MainOurValues";
import OurStory from "../../features/components/MainOurStory";
import LeadershipTeam from "../../features/components/MainLeadershipTeam";
import ServicesSection from "../../features/components/MainServicesSection";
import Footer from "../../features/components/Footer";



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