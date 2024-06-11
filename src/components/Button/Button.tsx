interface IButton {
  children: React.ReactNode;
  clickHandler: () => void;
  type: "submit" | "button";
}

export const Button = ({ children, clickHandler, type }: IButton) => {
  return (
    <button
      className="px-6 py-4 bg-secondary text-primary italic"
      type={type}
      onClick={clickHandler}
    >
      {children}
    </button>
  );
};
