
import Layout from "@/components/Layout";
import Footer from "../../features/components/Footer";
import InventorySection from "../../features/components/InventorySection";
import InventoryBanner from "../../features/components/InventoryBanner";
import InventoryNames from "../../features/components/InventoryNames";



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