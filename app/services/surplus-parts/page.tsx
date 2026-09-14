import Layout from "@/components/layout/Layout";
import Banner from "../../../features/components/service/SurplusPartsPage/SurplusBanner";
import UnlockingValue from "../../../features/components/service/SurplusPartsPage/SurplusUnlockingValue";
import AviationParts from "../../../features/components/service/SurplusPartsPage/SurplusAvationParts";
import LatestNews from "../../../features/components/service/SurplusPartsPage/SurplusLatestNews";
import FAQSection from "../../../features/components/service/SurplusPartsPage/SurplusFAQSection";
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