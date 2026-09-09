import Layout from "@/components/Layout";

import Footer from "@/features/components/Footer";
import LogisticsLatestNews from "../../features/components/LogisticsLatestNews";
import LogisticsFAQSection from "../../features/components/LogisticsFAQSection";
import LogisticsBanner from "../../features/components/LogisticsBanner";
import LogisticsUnlockingValue from "../../features/components/LogisticsUnlockingValue";
import LogisticsAviationParts from "../../features/components/LogisticsAviationParts";  



export default function LogisticsPage() {
  return (
    <Layout>
      <LogisticsBanner/>
      <LogisticsUnlockingValue/> 
      <LogisticsAviationParts/> 
      <LogisticsFAQSection/>
     < LogisticsLatestNews/>
     < Footer/>
    </Layout>
  );
}