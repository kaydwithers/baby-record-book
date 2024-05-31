import { chapters } from "@/api";
import { Chapter } from "@/components/Chapter/Chapter";

export default function Page({ params }: { params: { slug: string } }) {
  const chapter = chapters.find((item) => item.id === params.slug);

  return <div className="">{chapter && <Chapter chapter={chapter} />}</div>;
}
