import Layout from "@/components/Layout";
import Footer from "@/features/components/Footer";
import ComponentBanner from "../../features/components/ComponentBanner";
import ComponentLatestNews from "../../features/components/ComponentLatestNews";
import ComponentFAQSection from "../../features/components/ComponentFAQSection";
import ComponentUnlockingValue from "../../features/components/ComponentUnlockingValue";
import ComponentAviationParts from "../../features/components/ComponentAvationParts";




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