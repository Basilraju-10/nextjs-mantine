import Layout from "@/components/layout/Layout";
import UnlockingValue from "../../../features/components/service/QualityControlPage/QualitycontrolUnlockingValue";
import AviationParts from "../../../features/components/service/QualityControlPage/QualitycontrolAvationParts";
import LatestNews from "../../../features/components/service/QualityControlPage/QulaityconrolLatestNews";
import FAQSection from "../../../features/components/service/QualityControlPage/QualitycontrolFAQSection";
import Footer from "@/components/ui/Footer";
import QualitycontrolBanner from "../../../features/components/service/QualityControlPage/QualitycontrolBanner";
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