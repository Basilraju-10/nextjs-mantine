import Layout from "@/components/Layout";
import Banner from "../../features/components/RepairBanner";
import UnlockingValue from "../../features/components/RepairUnlockingValue";
import AviationParts from "../../features/components/RepairAvationParts";
import LatestNews from "../../features/components/RepairtLatestNews";
import FAQSection from "../../features/components/RepairFAQSection";
import Footer from "@/features/components/Footer";




export default function RepairPage() {
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