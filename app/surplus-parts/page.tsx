import Layout from "@/components/layout/Layout";
import Banner from "../../features/components/SurplusPartsPage/SurplusBanner";
import UnlockingValue from "../../features/components/SurplusPartsPage/SurplusUnlockingValue";
import AviationParts from "../../features/components/SurplusPartsPage/SurplusAvationParts";
import LatestNews from "../../features/components/SurplusPartsPage/SurplusLatestNews";
import FAQSection from "../../features/components/SurplusPartsPage/SurplusFAQSection";
import Footer from "@/components/ui/Footer";




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