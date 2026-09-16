
const categories: { id: number, title: string, bg: string }[] = [
    { id: 1, title: "Breakfast", bg: "bg-[#F9C5B6]" },
    { id: 2, title: "Soups", bg: "bg-[#B5D2AF]" },
    { id: 3, title: "Salads", bg: "bg-[#FAC2C0]" },
    { id: 4, title: "Pasta", bg: "bg-[#BCCDF4]" },
    { id: 5, title: "Seafood", bg: "bg-[#9DCED1]" },
    { id: 6, title: "Desserts", bg: "bg-[#F1BDD4]" },
    { id: 7, title: "Vegetarian", bg: "bg-[#D1CEA4]" },
]

export function CategoriesFilter({ className }: { className?: string }) {
    return (<div className="flex flex-col items-start w-full max-w-2xl">

        <h2 className="text-lg font-bold text-[#635851] text-left mb-4 uppercase">Categories</h2>
        <div className={`flex flex-wrap gap-4 ${className || ""}`}>

            {categories.map((category) => (
                <button
                    type="button"
                    key={category.id}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                >
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full p-4 text-sm font-medium text-zinc-950 ${category.bg}`}>
                        <span className="font-bold text-xl">{category.title.charAt(0)}</span>

                    </div>
                    <span className="text-sm font-medium text-zinc-950">{category.title}</span>
                </button>

            ))}
        </div>
    </div>
    )
}