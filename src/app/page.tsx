import { chapters } from "@/api";
import { useRouter } from "next/router";

import { Heading } from "@/components/Heading/Heading";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-12 text-center">
      <Heading>Baby Record Book</Heading>

      <div className="">
        <h2 className="mb-8 lg:mb-10">Chloe Withers</h2>

        <div className="flex justify-center">
          <div className="w-64 lg:w-96">
            <Image
              className="w-full h-full"
              src="/image/chloe.jpg"
              alt=""
              height="480"
              width="480"
              sizes="(max-width: 600px) 280px, 480px"
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <ol className="flex flex-col gap-y-4 lg:gap-y-6">
        {chapters.map((item, index) => (
          <li key={item.id} className="">
            {index + 1}. <Link href={item.id}>{item.title}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
