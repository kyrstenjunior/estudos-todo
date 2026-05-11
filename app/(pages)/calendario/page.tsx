import Sidebar from "@/app/components/sidebar";
import Header from "@/app/components/header";
import TitlePage from "@/app/components/title-page";

function Calendario() {
  return (
    <div className="flex flex-1 h-full bg-zinc-200 dark:bg-zinc-800">
      <Sidebar />
      <main className="flex flex-1 w-full flex-col bg-zinc-100 dark:bg-zinc-900">
        <Header />
        <div className="w-full h-full p-8">
          <TitlePage title="Calendário" subtitle="Manage and track your active creative workspaces." />
        </div>
      </main>
    </div>
  )
}

export default Calendario