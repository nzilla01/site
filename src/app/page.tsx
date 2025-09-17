import Dashboard from "./dashboard/page";
import Header from "@/components/ui/nav";
import Footer from "@/components/ui/footer"

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Dashboard />
      <Footer />
    </div> 
  );
}
