import Sidebar from "../components/sidebar"

function Reports() {
  return (
    <div className="flex flex-1 bg-zinc-50 dark:bg-black">
      <Sidebar />
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        Reports
      </main>
    </div>
  )
}

export default Reports