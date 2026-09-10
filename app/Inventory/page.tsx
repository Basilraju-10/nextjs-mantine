
import Layout from "@/components/layout/Layout";
import Footer from "../../features/components/AogDeskPage/Footer";
import InventorySection from "../../features/components/InventoryPage/InventorySection";
import InventoryBanner from "../../features/components/InventoryPage/InventoryBanner";
import InventoryNames from "../../features/components/InventoryPage/InventoryNames";



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