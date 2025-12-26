import BlogLayout from "@/components/Blog/BlogLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog - Medical Platform",
    description: "Latest updates and insights from the medical world.",
};

export default function BlogPage() {
    return (
        <main>
            <BlogLayout />
        </main>
    );
}
