import { Search } from "lucide-react"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

export function SearchInput({ className }: { className?: string }) {
    return (
        <InputGroup className={`max-w-sm bg-white py-4 ${className || ""}`}>
            <InputGroupInput placeholder="Try: pasta, chicken, pumpkin" className="text-base" />
            <InputGroupAddon>
                <Search />
            </InputGroupAddon>
            {/* add clear button */}
            <InputGroupAddon align="inline-end"></InputGroupAddon>
        </InputGroup>
    )
}