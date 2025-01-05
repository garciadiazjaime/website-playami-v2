import Content from "@/app/components/Content";
import { sections } from "@/app/support";

export async function generateStaticParams() {
  const slugs = Object.keys(sections)
    .filter((key) => key !== "home")
    .map((slug) => ({ slug }));

  return slugs;
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  return <Content slug={slug} />;
}
