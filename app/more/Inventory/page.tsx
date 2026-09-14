
import Layout from "@/components/layout/Layout";
import Footer from "../../../components/ui/Footer";
import InventorySection from "../../../features/components/more/InventoryPage/InventorySection";
import InventoryBanner from "../../../features/components/more/InventoryPage/InventoryBanner";
import InventoryNames from "../../../features/components/more/InventoryPage/InventoryNames";



export default function RelationshipsPage() {
  return (
    <Layout>
      <InventoryBanner/>
      <InventorySection/>
      <InventoryNames/>
      <Footer/>
    </Layout>
  );
}