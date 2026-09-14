import Layout from "@/components/layout/Layout";
import Footer from "@/components/ui/Footer";
import ComponentBanner from "../../features/components/ComponentPage/ComponentBanner";
import ComponentLatestNews from "../../features/components/ComponentPage/ComponentLatestNews";
import ComponentFAQSection from "../../features/components/ComponentPage/ComponentFAQSection";
import ComponentUnlockingValue from "../../features/components/ComponentPage/ComponentUnlockingValue";
import ComponentAviationParts from "../../features/components/ComponentPage/ComponentAvationParts";




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