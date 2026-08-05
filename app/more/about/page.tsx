import Layout from "@/components/Layout";
import HeroBanner from "./components/HeroBanner";
import AboutSection from "./components/AboutSection";
import OurValues from "./components/OurValues";
import OurStory from "./components/OurStory";
import LeadershipTeam from "./components/LeadershipTeam";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";



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