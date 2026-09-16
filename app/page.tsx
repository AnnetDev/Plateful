// import Image from "next/image";
import { SearchInput } from "@/components/ui/searchInput";
import { CategoriesFilter } from "@/features/recipes/categoriesFilter";

export default function Home() {
  return (
    <div className="flex flex-col items-center py-4">
      <h1 className="text-4xl font-bold text-center mt-16 mb-4">What are we cooking today?</h1>
      <p className="text-center text-muted-foreground mb-10">
        Recipes tested in a real home kitchen. Search by name or ingredient.
      </p>
      <SearchInput className="mb-10" />

      <CategoriesFilter className="mb-10" />

    </div>
  );
}
