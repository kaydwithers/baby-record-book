import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-end gap-x-6 mb-8 lg:mb-0">
      <p>
        <Link href="/auth">Sign in</Link>
      </p>
      <p>
        <Link href="/auth">Sign up</Link>
      </p>
    </div>
  );
};
