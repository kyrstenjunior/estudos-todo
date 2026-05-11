import { Folder, CircleCheck, TrendingUp, Timer } from "lucide-react"

function TopCards() {

    const cards = [
        { titleCard: "Active Projects", value: "12", icon: Folder },
        { titleCard: "Total Tasks", value: "148", icon: CircleCheck },
        { titleCard: "Velocity", value: "+24%", icon: TrendingUp },
        { titleCard: "Avg Completion", value: "3.2d", icon: Timer }
    ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map(({ titleCard, value, icon: Icon }) => (
            <div key={titleCard} className="w-full h-32 relative overflow-hidden rounded-xl p-6 bg-white dark:bg-zinc-800">
                <h2 className="uppercase text-xs text-zinc-700 mb-1 dark:text-white">{titleCard}</h2>
                <p className={`font-manrope text-3xl dark:${titleCard === "Velocity" ? "text-blue-500" : "text-white"} ${titleCard === "Velocity" ? "text-blue-500" : "text-zinc-800"}`}>{value}</p>
                <Icon size={80} className="absolute -right-3 -bottom-5 text-zinc-500 opacity-20 dark:text-white" />
            </div>
        ))}
    </div>
  )
}

export default TopCards