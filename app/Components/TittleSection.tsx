import { ReactNode } from "react";

interface props {
  children: ReactNode;
  reverse?: boolean;
}

const TittleSection = ({ children, reverse = false }: props) => {
  return (
    <div
      data-aos-duration="700"
      data-aos="fade-up"
      className={`w-full flex items-end gap-3 my-3 md:my-6 ${
        reverse && "flex-row-reverse"
      }`}
    >
      <h2 className="uppercase text-secondary leading-none">{children}</h2>
      <div className="w-full h-1 bg-secondary2"></div>
    </div>
  );
};

export default TittleSection;
