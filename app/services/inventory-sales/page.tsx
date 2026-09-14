
import Layout from "@/components/layout/Layout";

import Footer from "@/components/ui/Footer";
import InventorysalesBanner from "@/features/components/service/InventorySalesPage/InventorysalesBanner";
import InventorysalesUnlockingValue from "@/features/components/service/InventorySalesPage/InventorysalesUnlockingValue";

import InventorysalesFAQSection from "@/features/components/service/InventorySalesPage/InventorysalesFAQSection";
import InventorysalesLatestNews from "@/features/components/service/InventorySalesPage/InventorysalesLatestNews";
import InventorysalesAvationParts from "@/features/components/service/InventorySalesPage/InventorysalesAvationParts";

export default function InventorySalesPage() {
  return (
    <Layout>
      <InventorysalesBanner/>
      <InventorysalesUnlockingValue/>
        <InventorysalesAvationParts/> 
        <InventorysalesFAQSection/>
      < InventorysalesLatestNews/>
     < Footer/>
    </Layout>
  );
}