import { chapters } from "@/api";

import { Heading } from "@/components/Heading/Heading";
import { ThemeToggleButton } from "@/components/ThemeToggleButton/ThemeToggleButton";

import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-y-8 lg:gap-y-12 text-center">
      <Heading>Baby Record Book</Heading>

      <div className="">
        <h2 className="mb-8 lg:mb-10">Chloe Withers</h2>

        <div className="flex justify-center">
          <div className="image w-64 lg:w-96">
            <Image
              className="w-full h-full aspect-auto"
              src="/image/chloe.jpg"
              alt="Chloe"
              height="480"
              width="480"
              sizes="(max-width: 600px) 280px, 480px"
              priority
            />
          </div>
        </div>
      </div>

      <ol className="flex flex-col gap-y-4 lg:gap-y-6">
        {chapters.map((item, index) => (
          <li key={item.id}>
            {index + 1}. <Link href={item.id}>{item.title}</Link>
          </li>
        ))}
      </ol>

      <div className="flex flex-wrap justify-center items-center text-4xl gap-2">
        <div>🦒</div>
        <div>👶</div>
        <div>🐢</div>
        <div>🧸</div>
        <div>🐼</div>
        <div>🐱</div>
        <div>🐶</div>
        <div>🦋</div>
        <div>
          <ThemeToggleButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
