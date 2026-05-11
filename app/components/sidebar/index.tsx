"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FolderOpen, Users, Calendar, ChartNoAxesColumn } from "lucide-react"

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/projetos", label: "Projetos", icon: FolderOpen },
    { href: "/time", label: "Time", icon: Users },
    { href: "/calendario", label: "Calendário", icon: Calendar },
    { href: "/relatorios", label: "Relatórios", icon: ChartNoAxesColumn }
  ];


  return (
    <aside className="flex w-1/6 flex-col">
      <div className="mb-8 p-6">
        <h1 className='font-manrope dark:text-white'>Atelier Workspace</h1>
        <small className="dark:text-white">Creative Studio</small>
      </div>

      <div>
        <nav className="flex flex-col">
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`transition-colors ${
                pathname === href
                  ? "text-blue-600 border-r-3 border-r-blue-600 font-bold bg-zinc-300 dark:bg-zinc-700"
                  : "text-gray-500 dark:text-white hover:bg-zinc-300 dark:hover:bg-zinc-700"
                }
              `}
            >
              <span className="flex gap-4 py-3 p-6">
                <Icon size={20} />
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}

export default Sidebar