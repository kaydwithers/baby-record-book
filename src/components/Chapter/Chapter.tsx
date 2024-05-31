"use client";

import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Heading } from "@/components/Heading/Heading";

import Image from "next/image";

import type { IChapters } from "@/api";

interface IChapter {
  chapter: IChapters;
}

export const Chapter = ({ chapter }: IChapter) => {
  const router = useRouter();

  return (
    <div className="relative flex flex-col">
      <div className="absolute -top-6 lg:-top-16 left-0 lg:-left-16">
        <button
          className="flex items-center gap-x-2 lg:gap-x-4 underline underline-offset-4"
          onClick={() => router.back()}
        >
          <ChevronLeftIcon
            className="h-6 lg:h-10 w-6 lg:w-10"
            role="presentation"
          />
          <p className="">Back</p>
        </button>
      </div>

      <div className="pt-8 lg:pt-0 mb-8">
        <Heading>{chapter.title}</Heading>
      </div>

      <div className="flex flex-col gap-y-8 mb-24">
        {chapter.questionItems.map((question, index) => (
          <div className="flex flex-col gap-y-4" key={index}>
            <h2 className="">{question.question}</h2>

            {question.answerItems.map((answer, index) => (
              <textarea key={index} name="text" value={answer} />
            ))}
          </div>
        ))}
      </div>

      <div className="flex gap-8">
        {chapter.mediaItems.map((item, index) => (
          <div key={index} className="">
            <Image
              className="w-full h-full object-cover"
              src={item.media_url}
              alt={item.caption}
              height="480"
              width="480"
              sizes="(max-width: 600px) 280px, 480px"
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
