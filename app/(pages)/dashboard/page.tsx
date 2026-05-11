import Header from "@/app/components/header";
import Sidebar from "@/app/components/sidebar";
import TopCards from "@/app/(pages)/dashboard/top-cards";
import TitlePage from "@/app/components/title-page";

function Dashboard() {
  return (
    <div className="flex flex-1 h-full bg-zinc-200 dark:bg-zinc-800">
      <Sidebar />
      <main className="flex flex-1 w-full flex-col bg-zinc-100 dark:bg-zinc-900">
        <Header />
        <div className="w-full h-full p-8">
          <TitlePage title="Workshop Overview" subtitle="You have 4 high-priority tasks requiring attention today." />
          <TopCards />
        </div>
      </main>
    </div>
  )
}

export default Dashboard