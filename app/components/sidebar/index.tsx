"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Dashboard" },
    { href: "/projetos", label: "Projetos" },
    { href: "/time", label: "Time" },
    { href: "/calendario", label: "Calendário" },
    { href: "/reports", label: "Reports" }
  ];


  return (
    <aside className="p-6">
        <div className="mb-8">
          <h1 className='font-manrope'>Atelier Workspace</h1>
          <small>Creative Studio</small>
        </div>

        <div>
          <nav className="flex flex-col">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`flex gap-4 py-3 transition-colors ${
                  pathname === href
                    ? "text-blue-600 font-bold"
                    : "text-gray-400 dark:text-white"
                  }
                `}
              >{label}</Link>
            ))}
          </nav>
        </div>
    </aside>
  )
}

export default Sidebar