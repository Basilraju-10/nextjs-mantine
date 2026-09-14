import Layout from "@/components/layout/Layout";

import Footer from "@/components/ui/Footer";
import LogisticsLatestNews from "../../features/components/LogisticsPage/LogisticsLatestNews";
import LogisticsFAQSection from "../../features/components/LogisticsPage/LogisticsFAQSection";
import LogisticsBanner from "../../features/components/LogisticsPage/LogisticsBanner";
import LogisticsUnlockingValue from "../../features/components/LogisticsPage/LogisticsUnlockingValue";
import LogisticsAviationParts from "../../features/components/LogisticsPage/LogisticsAviationParts";


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