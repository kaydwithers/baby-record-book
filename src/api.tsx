export interface IChapters {
  id: string;
  title: string;
  questionItems: Array<{
    question: string;
    answerItems: Array<string>;
  }>;
  mediaItems: Array<{
    id: string;
    media_url: string;
    caption: string;
    type: "image" | "video";
  }>;
}

export const chapters: Array<IChapters> = [
  {
    id: "before-you-were-born",
    title: "Before you were born",
    questionItems: [
      {
        question: "When we first found out about you",
        answerItems: [""],
      },
      { question: "Our reaction", answerItems: [""] },
      { question: "Who we told", answerItems: [""] },
      { question: "Who we told", answerItems: [""] },
      { question: "We prepared for you by", answerItems: [""] },
      { question: "Did we expect a boy or a girl?", answerItems: [""] },
      { question: "What we thought you'd be like", answerItems: [""] },
      { question: "You were due on", answerItems: ["25th of April 2024"] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "Ultrasound",
        type: "image",
      },
    ],
  },
  {
    id: "the-day-you-were-born",
    title: "The day you were born",
    questionItems: [
      { question: "Date", answerItems: ["15th of April 2024"] },
      { question: "Time", answerItems: [""] },
      {
        question: "Where you were born",
        answerItems: ["St John of God, Geelong"],
      },
      { question: "Your weight", answerItems: ["3.9kg"] },
      { question: "Your length", answerItems: ["52cms"] },
      { question: "Your eye colour", answerItems: ["Black"] },
      { question: "Your hair colour", answerItems: ["Black"] },
      {
        question: "Had your name been decided?",
        answerItems: [
          "No, it was a very tough decision. We had about 100 names. We liked Xena, Aerith, Avery, Aurora. A couple of days after you were born we liked Sofie (From the movie Kill Bill) or Chloe (From the video game Final Fantasy 7). We chose Chloe for several reasons. Flynn liked it best. It went well with Cookie. It was rarer than Sofie.",
        ],
      },
      {
        question: "Our first thoughts and feelings when you were born",
        answerItems: [
          "Dad: I was mostly worried about mum. A couple of days later I understood why everyone said I won't get much sleep.",
          "Mum: ",
        ],
      },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/image/first-photo-01.jpg",
        caption: "Your very first photo",
        type: "image",
      },
      {
        id: "",
        media_url: "/image/first-photo-02.jpg",
        caption: "Your very first photo",
        type: "image",
      },
      {
        id: "",
        media_url: "/image/first-photo-03.jpg",
        caption: "Your very first photo",
        type: "image",
      },
      {
        id: "",
        media_url: "/image/first-photo-04.jpg",
        caption: "Your very first photo",
        type: "image",
      },
    ],
  },
  {
    id: "messages-from-your-visitors",
    title: "Messages from your visitors",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-first-things",
    title: "Your first things",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "you-and-your-family",
    title: "You and your family",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "first-special-moments",
    title: "First special moments",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "first-trips",
    title: "First trips",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-handprints",
    title: "Your handprints",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-footprints",
    title: "Your footprints",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "early-routines",
    title: "Early routines",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "milestones-you-remember",
    title: "Milestones you remember",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-first-christmas",
    title: "Your first christmas",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-favourite-things",
    title: "Your favourite things",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "first-birthday-facts",
    title: "First birthday facts",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "your-first-birthday-party",
    title: "Your first birthday party",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "how-you-grew",
    title: "How you grew",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "how-you-have-changed",
    title: "How you have changed",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "favourite-photos-of-you",
    title: "Favourite photos of you",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
  {
    id: "through-the-year",
    title: "Through the year",
    questionItems: [{ question: "", answerItems: [""] }],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "",
        type: "image",
      },
    ],
  },
];
