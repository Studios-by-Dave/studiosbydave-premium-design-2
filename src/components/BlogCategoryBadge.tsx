import { getCategoryBySlug } from "@/data/blogArticles";

export function BlogCategoryBadge({
  categorySlug,
  theme,
}: {
  categorySlug: string;
  theme: "dark" | "light";
}) {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return null;

  const baseClasses =
    "inline-flex items-center text-[10px] sm:text-xs font-serif uppercase tracking-wider px-2.5 py-1 rounded-full border font-semibold";
  const themeClasses =
    theme === "dark"
      ? "text-luxury-lime border-luxury-lime/40 bg-luxury-lime/10"
      : "text-primary border-primary/40 bg-primary/10";

  return <span className={`${baseClasses} ${themeClasses}`}>{category.label}</span>;
}
