// component accepts props for changin font size and color of the logo text
import Link from "next/link";

export function PlatefulLogo({
    size = "text-xl",
    color = "text-zinc-900 dark:text-zinc-50",
}: {
    size?: string;
    color?: string;
}) {
    return (
        <div className="flex items-center gap-2">
            <Link
                href="/"
                className="text-sm font-medium text-zinc-950 transition-colors hover:text-zinc-600 dark:text-zinc-50 dark:hover:text-zinc-400"
            >
                {" "}
                <span className={`${size} font-bold ${color}`}>Plateful</span>
            </Link>
        </div>
    );
}
