import { Container } from "@/components/layout/container";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="flex items-center  h-16 w-full border-t bg-zinc-50 dark:border-zinc-800 dark:bg-black py-6">
            <Container className="flex items-center justify-between">
                <p className="text-sm text-zinc-950 dark:text-zinc-50">
                    &copy; {new Date().getFullYear()} Plateful. Stockholm
                </p>
                <Link href="https://www.linkedin.com/in/anna-baidikova/" className="text-sm text-zinc-950 dark:text-zinc-50" target="_blank" rel="noopener noreferrer"
                >Anna Baidikova</Link>
            </Container>
        </footer>
    )
}