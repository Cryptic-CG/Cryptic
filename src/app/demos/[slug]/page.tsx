import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { demos, getDemo } from "@/config/demos";
import { DEMO_SITES, hasDemoSite } from "@/demos/registry";
import { site } from "@/config/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demos.map((demo) => ({ slug: demo.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo) {
    return { title: "Demo not found" };
  }

  return {
    title: demo.seoTitle,
    description: demo.seoDescription,
    alternates: { canonical: demo.route },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: demo.seoTitle,
      description: demo.seoDescription,
    },
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const demo = getDemo(slug);

  if (!demo || !hasDemoSite(demo.slug)) {
    notFound();
  }

  const Site = DEMO_SITES[demo.slug];

  return <Site demo={demo} />;
}