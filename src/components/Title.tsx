import { ReactNode } from "react";

export const Title = ({
  text,
  children,
}: {
  text: string;
  children?: ReactNode;
}) => {
  return (
    <section className="px-56 title my-32 flex justify-between items-center">
      <h1>{text}</h1>
      {children}
    </section>
  );
};
