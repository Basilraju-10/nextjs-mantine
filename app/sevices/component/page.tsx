import Layout from "@/components/layout/Layout";
import Footer from "@/components/ui/Footer";
import ComponentBanner from "../../../features/components/service/ComponentPage/ComponentBanner";
import ComponentLatestNews from "../../../features/components/service/ComponentPage/ComponentLatestNews";
import ComponentFAQSection from "../../../features/components/service/ComponentPage/ComponentFAQSection";
import ComponentUnlockingValue from "../../../features/components/service/ComponentPage/ComponentUnlockingValue";
import ComponentAviationParts from "../../../features/components/service/ComponentPage/ComponentAvationParts";




export default function ExchangePage() {
  return (
    <Layout>
      <ComponentBanner/>
      <ComponentUnlockingValue/> 
      <ComponentAviationParts/> 
      <ComponentFAQSection/>
     < ComponentLatestNews/>
     < Footer/>
    </Layout>
  );
}