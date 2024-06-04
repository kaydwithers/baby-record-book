"use client";

import { useRouter } from "next/navigation";

import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Heading } from "@/components/Heading/Heading";
import { RandomEmoji } from "@/components/RandomEmoji/RandomEmoji";

import Image from "next/image";

import type { IChapters } from "@/api";

interface IChapter {
  chapter: IChapters;
}

export const Chapter = ({ chapter }: IChapter) => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <div className="mb-2 lg:mb-8">
        <button
          className="group flex items-center gap-x-2 lg:gap-x-4"
          onClick={() => router.back()}
        >
          <div className="flex items-center gap-x-2">
            <ChevronLeftIcon
              className="h-6 lg:h-8 w-6 lg:w-8"
              role="presentation"
            />

            <span className="text-4xl">
              <RandomEmoji />
            </span>
          </div>

          <p className="flex items-center underline underline-offset-4 group-hover:no-underline">
            Back
          </p>
        </button>
      </div>

      <div className="pt-8 lg:pt-0 mb-8">
        <Heading variant="h2">{chapter.title}</Heading>
      </div>

      <div className="flex flex-col gap-y-8 lg:gap-y-12 mb-24">
        {chapter.questionItems.map((question, index) => (
          <div className="flex flex-col gap-y-2" key={index}>
            <p className="">
              <strong>{question.question}</strong>
            </p>

            {question.answerItems.map((answer, index) => (
              // <textarea key={index} name="text" value={answer} />
              <p key={index}>{answer}</p>
            ))}
          </div>
        ))}
      </div>

      {chapter.mediaItems.some((item) => item.media_url) && (
        <div className="flex flex-col lg:flex-row gap-8">
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
      )}
    </div>
  );
};
