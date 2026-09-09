import Layout from "@/components/Layout";
import Banner from "../../features/components/SurplusBanner";
import UnlockingValue from "../../features/components/SurplusUnlockingValue";
import AviationParts from "../../features/components/SurplusAvationParts";
import LatestNews from "../../features/components/SurplusLatestNews";
import FAQSection from "../../features/components/SurplusFAQSection";
import Footer from "@/features/components/Footer";




export default function SurplusPartsPage() {
  return (
    <Layout>
      <Banner/>
      <UnlockingValue/> 
      <AviationParts/> 
      <FAQSection/>
     < LatestNews/>
     < Footer/>
    </Layout>
  );
}