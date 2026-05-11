import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import TitlePage from "@/app/components/title-page";
import CardProject from "./components/card-project";

function Projetos() {
  return (
    <div className="flex flex-1 h-full bg-zinc-200 dark:bg-zinc-800">
      <Sidebar />
      <main className="flex flex-1 w-full flex-col bg-zinc-100 dark:bg-zinc-900">
        <Header />
        <div className="w-full h-full p-8">
          <TitlePage title="Projetos" subtitle="Manage and track your active creative workspaces." />

          <div className="grid grid-cols-3 gap-6">
            <CardProject
              isActive={true}
              title="Brand Identity 2024"
              description="Complete visual overhaul for the Nordic design system and digital assets."
              progress={83}
            />

            <CardProject
              isActive={false}
              title="E-Commerce Flow"
              description="Optimization of the checkout experience and mobile cart interaction patterns."
              progress={45}
            />

            <CardProject
              isActive={false}
              title="Social Campaign"
              description="Video-first advertising content for the Q3 product launch across 4 platforms."
              progress={12}
            />

            <CardProject
              isActive={true}
              title="Brand Identity 2024"
              description="Complete visual overhaul for the Nordic design system and digital assets."
              progress={83}
            />
          </div>


        </div>
      </main>
    </div>
  )
}

export default Projetos