import { SparkleIcon, EllipsisVerticalIcon } from  "lucide-react";
import * as Progress from "@radix-ui/react-progress";
import * as Avatar from "@radix-ui/react-avatar";
import Badge from "@/app/components/badge";


type CardProjectProps = {
    isActive: boolean,
    title: string,
    description: string,
    progress: number
}

const defaultStylesAvatarRoot = "inline-flex items-center justify-center align-middle overflow-hidden select-none w-8 h-8 rounded-full bg-zinc-800";
const defaultStylesAvatarImage = "w-full h-full rounded-[inherit] object-cover";
const defaultStylesAvatarFallback = "w-full h-full flex items-center justify-center bg-mist-100 text-violet-400 text-xs font-bold";

function CardProject({ isActive, title, description, progress }: CardProjectProps) {

    return (
        <div className="max-w-xs bg-white rounded-xl p-6">
            <div className="w-full flex justify-between">
                <div className={`${isActive ? "bg-blue-100" : "bg-gray-100"} p-2.5 rounded-lg`}>
                    <SparkleIcon color={isActive ? "var(--primary)" : "var(--secondary)"} />
                </div>

                <EllipsisVerticalIcon />
            </div>

            <div className="flex items-center mt-4">
                <Badge template={isActive ? "success" : "inactive"}>
                    {isActive ? "Active" : "Inactive"}
                </Badge>

                <small className="font-semibold text-xs text-zinc-500 ml-2">Updated 2h ago</small>
            </div>

            <h3 className="font-manrope font-semibold text-xl text-zinc-800 mt-1.5">{title}</h3>

            <p className="text-sm text-zinc-500 mt-1.5">{description}</p>

            <div className="flex justify-between mt-6">
                <div>
                    <Avatar.Root className={defaultStylesAvatarRoot}>
                        <Avatar.Image
                            className={defaultStylesAvatarImage}
                            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                            alt="Pedro Duarte"
                        />
                        <Avatar.Fallback className={defaultStylesAvatarFallback} delayMs={600}>JD</Avatar.Fallback>
                    </Avatar.Root>

                    <Avatar.Root className={`${defaultStylesAvatarRoot} ml-[-4px] outline-4 outline-white`}>
                        <Avatar.Image
                            className={defaultStylesAvatarImage}
                            src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?ixlib=rb-1.2.1&w=128&h=128&dpr=2&q=80"
                            alt="Pedro Duarte"
                        />
                        <Avatar.Fallback className={defaultStylesAvatarFallback} delayMs={600}>JD</Avatar.Fallback>
                    </Avatar.Root>
                    
                    <Avatar.Root className={`${defaultStylesAvatarRoot} ml-[-4px] outline-4 outline-white`}>
                        <Avatar.Fallback className={defaultStylesAvatarFallback} delayMs={600}>PD</Avatar.Fallback>
                    </Avatar.Root>
                </div>

                <div className="flex items-center gap-1">
                    <span className={`${isActive ? "text-blue-600" : "text-slate-500"} text-xs`}>{progress}%</span>
                    <Progress.Root className="relative overflow-hidden bg-zinc-300 dark:bg-zinc-500 rounded-full w-16 h-2 translate-z-0" value={progress}>
                        <Progress.Indicator
                            className={`${isActive ? "bg-blue-600" : "bg-slate-500"} text-xs h-full w-full transition-transform duration-500`}
                            style={{ transform: `translateX(-${100 - progress}%)` }}
                        />
                    </Progress.Root>
                </div>
            </div>
        </div>
    )
}

export default CardProject