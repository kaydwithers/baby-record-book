import { IChapters, chapters } from "@/api";
import { Chapter } from "@/components/Chapter/Chapter";

export default function Page({ params }: { params: { slug: string } }) {
  const chapter: IChapters | undefined = chapters.find(
    (item) => item.id === params.slug
  );

  return chapter && <Chapter chapter={chapter} />;
}
