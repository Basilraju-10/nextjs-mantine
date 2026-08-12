
import Layout from "@/components/Layout";
import Footer from "../whoweare/components/Footer";
import InventorySection from "./components/InventorySection";
import InventoryBanner from "./components/InventoryBanner";
import InventoryNames from "./components/InventoryNames";



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