import Layout from "@/components/layout/Layout";
import CatalogView from "../../features/components/CatalogPage/CatalogView";
import Footer from "../../components/ui/Footer";

export default function CatalogPage() {

  return (
    <Layout>
      <CatalogView/>
      <Footer/>
    </Layout>
  );
}