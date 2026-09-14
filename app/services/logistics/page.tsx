import Layout from "@/components/layout/Layout";

import Footer from "@/components/ui/Footer";
import LogisticsLatestNews from "../../../features/components/service/LogisticsPage/LogisticsLatestNews";
import LogisticsFAQSection from "../../../features/components/service/LogisticsPage/LogisticsFAQSection";
import LogisticsBanner from "../../../features/components/service/LogisticsPage/LogisticsBanner";
import LogisticsUnlockingValue from "../../../features/components/service/LogisticsPage/LogisticsUnlockingValue";
import LogisticsAviationParts from "../../../features/components/service/LogisticsPage/LogisticsAviationParts";


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