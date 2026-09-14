
import Layout from "@/components/layout/Layout";
import Footer from "../../../components/ui/Footer";
import Banner from "@/features/components/service/AogDeskPage/Banner";
import UnlockingValue from "@/features/components/service/AogDeskPage/UnlockingValue";
import AviationParts from "@/features/components/service/AogDeskPage/AvationParts";
import FAQSection from "@/features/components/service/AogDeskPage/FAQSection";
import LatestNews from "@/features/components/service/AogDeskPage/FAQSection";


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