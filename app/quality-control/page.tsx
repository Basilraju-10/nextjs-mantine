import Layout from "@/components/Layout";
import UnlockingValue from "../../features/components/QualitycontrolUnlockingValue";
import AviationParts from "../../features/components/QualitycontrolAvationParts";
import LatestNews from "../../features/components/QulaityconrolLatestNews";
import FAQSection from "../../features/components/QualitycontrolFAQSection";
import Footer from "@/features/components/Footer";
import QualitycontrolBanner from "../../features/components/QualitycontrolBanner";
export default function QualityControlPage() {
  return (
    <Layout>
      <QualitycontrolBanner/>
      <UnlockingValue/> 
      <AviationParts/> 
      <FAQSection/>
     < LatestNews/>
     < Footer/>
    </Layout>
  );
}