import Container from "./Container";
import TittleSection from "./TittleSection";
import Image from "next/image";
import Data_Achievement from "../Models/achievement.json";

const Achievement = () => {
  const datas = Data_Achievement.map((val, key) => {
    return (
      <Card
        key={key}
        options={{
          name: val.name,
          date: val.date,
          publisher: val.publisher,
          img: val.img,
          tech: val.tech,
        }}
      />
    );
  });

  return (
    <Container id="achievement">
      <div className="w-full min-h-screen flex flex-col">
        <TittleSection reverse={true}>achievement</TittleSection>
        <div className="w-full h-fit grid grid-cols-1 mt-8 gap-7">{datas}</div>
      </div>
    </Container>
  );
};

interface PropsCard {
  options: {
    name: string;
    date: string;
    publisher: string;
    img: string;
    tech: string;
  };
}

const Card = ({ options: { name, date, publisher, img, tech } }: PropsCard) => {
  const techs = tech.split(", ");

  const tech_data = techs.map((val, index) => {
    return <Card_Skill key={index} name={val} />;
  });
  return (
    <div
      data-aos-duration="700"
      data-aos="zoom-in"
      className="w-full h-fit group flex justify-center"
    >
      <div className="w-[90%] md:w-full flex flex-col md:flex-row md:justify-center gap-4 md:gap-6">
        <div className="w-full md:max-w-[280px] h-fit p-4 rounded-md dark:bg-primary2 bg-secondary2 duration-700 overflow-hidden">
          <Image
            priority={false}
            src={img}
            alt="porto"
            width={300}
            height={300}
            className="w-full aspect-auto object-cover group-hover:scale-105 duration-500 rounded-md"
          />
        </div>

        <div className="w-full md:w-fit h-fit flex flex-col gap-3 max-md:px-4">
          <div className="flex gap-3 items-end">
            <p className="font-bold text-baseleading-none dark:text-secondary text-primary duration-700">
              {date}
            </p>
            <div className="flex-1 h-[1px] bg-secondary2 md:hidden"></div>
          </div>

          <h3 className="font-extrabold break-words dark:text-secondary text-primary duration-700">
            {name}
          </h3>

          <p className="font-normal break-words dark:text-secondary text-primary duration-700">
            {publisher}
          </p>

          <div className="flex flex-wrap gap-2 w-full">{tech_data}</div>
        </div>
      </div>
    </div>
  );
};

interface PropsCardSkils {
  name: string;
}
const Card_Skill = ({ name }: PropsCardSkils) => {
  return (
    <div className="w-fit rounded bg-tertiary p-2">
      <p className="capitalize font-bold text-primary">{name}</p>
    </div>
  );
};

export default Achievement;
