import { IChapters, chapters } from "@/api";
import { Chapter } from "@/components/Chapter/Chapter";

const Page = ({ params }: { params: { slug: string } }) => {
  const chapter: IChapters | undefined = chapters.find(
    (item) => item.id === params.slug
  );

  return chapter && <Chapter chapter={chapter} />;
};

export default Page;
