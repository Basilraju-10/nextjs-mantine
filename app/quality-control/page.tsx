import Layout from "@/components/layout/Layout";
import UnlockingValue from "../../features/components/QualityControlPage/QualitycontrolUnlockingValue";
import AviationParts from "../../features/components/QualityControlPage/QualitycontrolAvationParts";
import LatestNews from "../../features/components/QualityControlPage/QulaityconrolLatestNews";
import FAQSection from "../../features/components/QualityControlPage/QualitycontrolFAQSection";
import Footer from "@/features/components/AogDeskPage/Footer";
import QualitycontrolBanner from "../../features/components/QualityControlPage/QualitycontrolBanner";
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