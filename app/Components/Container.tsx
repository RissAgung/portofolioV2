import { ReactNode } from "react";

interface props {
  children: ReactNode;
}

const Container = ({ children }: props) => {
  return (
    <section className="container bg-primary w-full max-w-4xl mb-10">
      {children}
    </section>
  );
};

export default Container;
