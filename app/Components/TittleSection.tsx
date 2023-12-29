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
      className={`w-full flex items-end gap-3 mb-3 mt-[64px] md:mb-6 md:mt-[88px] ${
        reverse && "flex-row-reverse"
      }`}
    >
      <h2 className="uppercase dark:text-secondary text-primary duration-700 leading-none">
        {children}
      </h2>
      <div className="w-full h-1 dark:bg-secondary2 bg-primary2 duration-700"></div>
    </div>
  );
};

export default TittleSection;
