
import Layout from "@/components/layout/Layout";
import Footer from "../../components/ui/Footer";
import Banner from "@/features/components/AogDeskPage/Banner";
import UnlockingValue from "@/features/components/AogDeskPage/UnlockingValue";
import AviationParts from "@/features/components/AogDeskPage/AvationParts";
import FAQSection from "@/features/components/AogDeskPage/FAQSection";
import LatestNews from "@/features/components/AogDeskPage/FAQSection";


export default function AddPage() {
  return (
    <Layout>
        <Banner/>
        <UnlockingValue/>
        <AviationParts/>
        <FAQSection/>
        <LatestNews/>
      <Footer/>
    </Layout>
  )
}