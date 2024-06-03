export const Heading = ({
  children,
  variant = "h1",
}: Readonly<{
  children: React.ReactNode;
  variant?: "h1" | "h2";
}>) => {
  return variant === "h1" ? <h1>{children}</h1> : <h2>{children}</h2>;
};
