import Layout from "@/components/layout/Layout";

import Footer from "@/components/ui/Footer";
import InventorysalesBanner from "@/features/components/InventorySalesPage/InventorysalesBanner";
import InventorysalesUnlockingValue from "@/features/components/InventorySalesPage/InventorysalesUnlockingValue";

import InventorysalesFAQSection from "@/features/components/InventorySalesPage/InventorysalesFAQSection";
import InventorysalesLatestNews from "@/features/components/InventorySalesPage/InventorysalesLatestNews";
import InventorysalesAvationParts from "@/features/components/InventorySalesPage/InventorysalesAvationParts";

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