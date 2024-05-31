interface IText {
  answer: string;
  question: string;
}

export const Text = ({ answer, question }: IText) => {
  return (
    <div className="">
      <h2 className="text-2xl">{question}</h2>
      <h2 className="text-2xl">{answer}</h2>
    </div>
  );
};
