import { ReactNode } from "react";

interface props {
  children: ReactNode;
  id?: string;
}

const Container = ({ children, id }: props) => {
  return (
    <section
      id={id}
      className="container dark:bg-primary bg-secondary duration-700 w-full max-w-4xl mb-10 container-section"
    >
      {children}
    </section>
  );
};

export default Container;
