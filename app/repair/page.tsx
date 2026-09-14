import Layout from "@/components/layout/Layout";
import Banner from "../../features/components/RepairPage/RepairBanner";
import UnlockingValue from "../../features/components/RepairPage/RepairUnlockingValue";
import AviationParts from "../../features/components/RepairPage/RepairAvationParts";
import LatestNews from "../../features/components/RepairPage/RepairtLatestNews";
import FAQSection from "../../features/components/RepairPage/RepairFAQSection";
import Footer from "@/components/ui/Footer";




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