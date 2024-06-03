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
    questionItems: [
      {
        question: "Your first clothes",
        answerItems: ["Our friends Nico and Anita gave us a bunch of clothes."],
      },
      { question: "Your first toys", answerItems: [""] },
      { question: "The first place you slept", answerItems: [""] },
      { question: "Your first gifts", answerItems: [""] },
      {
        question: "Your first party",
        answerItems: [
          "Oma's 70th Birthday. You slept for most of it. When you cried Aunty Haeli held you and looked after you. Everyone said you were very cute.",
        ],
      },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of some of your first things.",
        type: "image",
      },
    ],
  },
  {
    id: "taking-you-home",
    title: "Taking you home",
    questionItems: [
      { question: "When you arrived home", answerItems: [""] },
      { question: "How did you travel home", answerItems: [""] },
      { question: "Your address", answerItems: [""] },
      { question: "What you wore", answerItems: [""] },
      { question: "Your visitors", answerItems: [""] },
      { question: "What was the day like?", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you at home",
        type: "image",
      },
    ],
  },
  {
    id: "you-and-your-family",
    title: "You and your family",
    questionItems: [
      { question: "Your full name", answerItems: [""] },
      { question: "Why was it chosen?", answerItems: [""] },
      { question: "Other names you might have been given", answerItems: [""] },
      { question: "Your family", answerItems: [""] },
      { question: "Things your family said about you", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you and your parents",
        type: "image",
      },
    ],
  },
  {
    id: "your-family-tree",
    title: "Your family tree",
    questionItems: [
      {
        question: "Your great grandparents",
        answerItems: [
          "Clive Withers (Great grandpa), Val Withers (Great grandma), Dorothy Shirchma, ",
          "",
        ],
      },
      {
        question: "Your grandparents",
        answerItems: ["Adele Withers, Trevor Withers", "Giana"],
      },
      {
        question: "Your parents",
        answerItems: ["Kayd Withers", "Eva Kartiwa"],
      },
      { question: "You", answerItems: ["Chloe Giana Withers"] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you and your family",
        type: "image",
      },
    ],
  },
  {
    id: "first-special-moments",
    title: "First special moments",
    questionItems: [
      {
        question: "When you first had a bath",
        answerItems: ["St John of God"],
      },
      {
        question: "Did you enjoy it?",
        answerItems: [
          "Kind of, the midwife gave you a head massage and you liked it.",
        ],
      },
      {
        question: "When you first smiled",
        answerItems: ["6 weeks old."],
      },
      {
        question: "When you first went to the doctors",
        answerItems: ["28th May 2024"],
      },
      {
        question: "What was it for?",
        answerItems: [
          "Dr. Kesh gave you 3 immunisations. One was orally and two others were injections in your legs. We hadn't seen you that upset before and it was sad. But you didn't cry for long.",
        ],
      },
      {
        question: "The first sounds you made",
        answerItems: ["Crying."],
      },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of your first special moment.",
        type: "image",
      },
    ],
  },
  {
    id: "first-trips",
    title: "First trips",
    questionItems: [
      {
        question: "When you first took a trip in your pram",
        answerItems: [""],
      },
      {
        question: "Where did you go",
        answerItems: [
          "Around the block, through the Newtown park and along Percy St.",
        ],
      },
      {
        question: "When you first took a trip in a car",
        answerItems: [
          "Driving home from the hostpital. Dad drove so slowly and carefully.",
        ],
      },
      { question: "Who were you with?", answerItems: ["Mum and Dad."] },
      {
        question: "When you first went to a park",
        answerItems: ["We live next a park."],
      },
      { question: "What did you see", answerItems: ["The sun."] },
      {
        question: "When you first visited someone",
        answerItems: [
          "You met a lot of people at Oma's 70th Birthday at Jason's Restaurant Upper Beaconsfield on 1st of June 2024.",
        ],
      },
      {
        question: "When you first stayed away overnight",
        answerItems: [
          "Opa and Oma's place in Berwick on the 1st of June 2024. You slept so well. 6 hours. We couldn't believe it.",
        ],
      },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of a first trip",
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
    questionItems: [
      { question: "6 am", answerItems: [""] },
      { question: "8 am", answerItems: [""] },
      { question: "10 am", answerItems: [""] },
      { question: "12 pm", answerItems: [""] },
      { question: "2 pm", answerItems: [""] },
      { question: "4 pm", answerItems: [""] },
      { question: "6 pm", answerItems: [""] },
      { question: "8 pm", answerItems: [""] },
      { question: "10 pm", answerItems: [""] },
      { question: "12 am", answerItems: [""] },
      { question: "2 am", answerItems: [""] },
      { question: "4 am", answerItems: [""] },
    ],
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
    questionItems: [
      { question: "When you first laughed and why", answerItems: [""] },
      { question: "When you first rolled over", answerItems: [""] },
      { question: "When you first held a toy", answerItems: [""] },
      { question: "Which toy was it", answerItems: [""] },
      { question: "When you first sat up", answerItems: [""] },
      { question: "When you first played peekaboo", answerItems: [""] },
      { question: "When you first clapped hands", answerItems: [""] },
      { question: "When you first slept through the night", answerItems: [""] },
      { question: "When you turned the pages of a book", answerItems: [""] },
      { question: "Which book was it?", answerItems: [""] },
      { question: "When you first wave hello or goodbye", answerItems: [""] },
      { question: "Who did you wave to?", answerItems: [""] },
      { question: "Your first words were", answerItems: [""] },
      { question: "When your first teeth appeared", answerItems: [""] },
      { question: "When you first had your haircut", answerItems: [""] },
      { question: "When you first drank from a cup", answerItems: [""] },
      { question: "When you first tried solid food", answerItems: [""] },
      { question: "Where and when you first crawled", answerItems: [""] },
      { question: "Where and when you first walked", answerItems: [""] },
      { question: "When you first held a spoon", answerItems: [""] },
      { question: "When you first scribbled", answerItems: [""] },
      {
        question: "Where and when you first went on holiday",
        answerItems: [""],
      },
      { question: "Where and when you first went swimming", answerItems: [""] },
      { question: "Your first friends", answerItems: [""] },
      { question: "Your first babysitter", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you sitting up",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of a special milestone",
        type: "image",
      },
    ],
  },
  {
    id: "your-first-christmas",
    title: "Your first christmas",
    questionItems: [
      { question: "How old were you?", answerItems: [""] },
      { question: "What you wore", answerItems: [""] },
      { question: "Your presents", answerItems: [""] },
      { question: "Your food", answerItems: [""] },
      { question: "What you did on the day", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A first Christmas photo",
        type: "image",
      },
    ],
  },
  {
    id: "your-favourite-things",
    title: "Your favourite things",
    questionItems: [
      { question: "Your favourite songs or lullabies", answerItems: [""] },
      { question: "Your favourite toys", answerItems: [""] },
      { question: "Your favourite first games", answerItems: [""] },
      { question: "Your favourite first stories", answerItems: [""] },
      { question: "Your favourite comforters", answerItems: ["Mum's nipple"] },
      { question: "Your favourite places to visit", answerItems: [""] },
      {
        question: "Your favourite people to spend time with",
        answerItems: [""],
      },
      { question: "Your favourite outfit", answerItems: [""] },
      { question: "Your favourite first foods", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of some of your favourite things",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you in your favourite outfit",
        type: "image",
      },
    ],
  },
  {
    id: "first-birthday-facts",
    title: "First birthday facts",
    questionItems: [
      { question: "Your weight", answerItems: [""] },
      { question: "Your height", answerItems: [""] },
      { question: "Your shoe size", answerItems: [""] },
      { question: "The number of teeth you had", answerItems: [""] },
      { question: "What you could do", answerItems: [""] },
      { question: "What you could say", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you on your first birthday",
        type: "image",
      },
    ],
  },
  {
    id: "your-first-birthday-party",
    title: "Your first birthday party",
    questionItems: [
      { question: "Where you were", answerItems: [""] },
      { question: "What you wore", answerItems: [""] },
      { question: "Who celebrated with you?", answerItems: [""] },
      { question: "What food did you have?", answerItems: [""] },
      { question: "What was your birthday cake like?", answerItems: [""] },
      { question: "What presents were you given?", answerItems: [""] },
    ],
    mediaItems: [
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you and your family at your first birthday party",
        type: "image",
      },
    ],
  },
  {
    id: "how-you-grew",
    title: "How you grew",
    questionItems: [
      {
        question: "First month",
        answerItems: ["Date: , Weight: , Length (or height): "],
      },
      { question: "Second month", answerItems: [""] },
      { question: "Third month", answerItems: [""] },
      { question: "Fourth month", answerItems: [""] },
      { question: "Fifth month", answerItems: [""] },
      { question: "Sixth month", answerItems: [""] },
      { question: "Seventh month", answerItems: [""] },
      { question: "Eighth month", answerItems: [""] },
      { question: "Ninth month", answerItems: [""] },
      { question: "Tenth month", answerItems: [""] },
      { question: "Eleventh month", answerItems: [""] },
      { question: "Twelfth month", answerItems: [""] },
    ],
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
        caption: "A photo of you in your first months",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "A photo of you on your twelfth month",
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
        caption: "Winter",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "Spring",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "Summer",
        type: "image",
      },
      {
        id: "",
        media_url: "/images/",
        caption: "Autumn",
        type: "image",
      },
    ],
  },
  {
    id: "things-to-remember",
    title: "Things to remember",
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
