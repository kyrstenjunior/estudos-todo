function Badge({ children, template }: { children: React.ReactNode, template: string }) {
    let templateCSS;

    switch (template) {
        case "success":
            templateCSS = "bg-blue-100 text-blue-600";
            break;
        case "inactive":
            templateCSS = "bg-gray-100 text-gray-500";
            break;
        case "warning":
            templateCSS = "bg-yellow-100 text-yellow-700";
            break;
        case "error":
            templateCSS = "bg-red-100 text-red-700";
            break;
        default:
            templateCSS = "bg-blue-100 text-blue-700";
    }

    return (
        <span className={`inline-flex items-center rounded-full text-[10px] font-semibold uppercase py-0.5 px-2 ${templateCSS}`}>
            {children}
        </span>
    )
}

export default Badge