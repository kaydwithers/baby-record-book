interface IButton {
  children: React.ReactNode;
  clickHandler: () => void;
  type: "submit" | "button";
}

export const Button = ({ children, clickHandler, type }: IButton) => {
  return (
    <button
      className="px-6 py-4 bg-primary dark:bg-secondary text-secondary dark:text-primary italic text-xl"
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
