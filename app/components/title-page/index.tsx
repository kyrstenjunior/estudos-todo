
interface TitlePageProps {
    title: string;
    subtitle: string;
}

function TitlePage({ title, subtitle }: TitlePageProps) {
  return (
    <div className="mb-10">
        <h1 className="font-manrope text-4xl font-black text-zinc-800 mb-1 dark:text-white">{ title }</h1>
        <span className="text-zinc-500">{ subtitle }</span>
    </div>
  )
}

export default TitlePage