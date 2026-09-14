import Layout from "@/components/layout/Layout";
import Banner from "../../../features/components/service/RepairPage/RepairBanner";
import UnlockingValue from "../../../features/components/service/RepairPage/RepairUnlockingValue";
import AviationParts from "../../../features/components/service/RepairPage/RepairAvationParts";
import LatestNews from "../../../features/components/service/RepairPage/RepairtLatestNews";
import FAQSection from "../../../features/components/service/RepairPage/RepairFAQSection";
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