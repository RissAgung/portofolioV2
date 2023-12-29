import Container from "./Container";
import TittleSection from "./TittleSection";
import Image from "next/image";
import dataPortfolio from "../Models/portofolio.json";

const Portfolio = () => {
  const datas = dataPortfolio.map((val, index) => {
    const tech = val.tech.replace(/,/g, " -");
    return (
      <Card
        key={index}
        options={{
          title: val.name,
          imgSrc: val.img,
          tech: tech,
          description: val.description,
          github: val.github,
          url: val.url,
        }}
      />
    );
  });

  return (
    <Container id="portfolio">
      <div className="w-full min-h-screen flex flex-col">
        <TittleSection>portfolio</TittleSection>
        <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 mt-8 gap-7">
          {datas}
        </div>
      </div>
    </Container>
  );
};

interface PropsCard {
  options: {
    title: string;
    imgSrc: string;
    tech: string;
    description: string;
    github: string;
    url: string;
  };
}
const Card = ({
  options: { title, imgSrc, tech, description, github, url },
}: PropsCard) => {
  return (
    <div
      data-aos-duration="700"
      data-aos="zoom-in"
      className="flex flex-col gap-2 w-full h-fit group"
    >
      <div className="w-full aspect-video overflow-hidden rounded-md dark:bg-primary2 bg-secondary2 duration-700 p-4">
        <Image
          priority
          src={imgSrc}
          alt="porto"
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-105 duration-500 rounded-md"
        />
      </div>

      <div className="w-full h-fit flex flex-col gap-1 px-2">
        <div className="w-full h-fit flex items-center gap-3">
          <h3 className="uppercase font-extrabold dark:text-secondary text-primary duration-700 max-w-[50%] break-words">
            {title}
          </h3>

          <div className="flex-1 h-[2px] md:h-[3px] dark:bg-secondary2 bg-primary2 duration-700"></div>

          <div className="flex gap-2">
            {github != "" && (
              <a
                target="_blank"
                aria-label="Visit github"
                href={github}
                className="w-full"
              >
                <svg
                  className="w-5 md:w-6 aspect-square dark:fill-secondary fill-primary duration-700"
                  viewBox="0 0 31 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.4689 3.81075e-09C11.7958 -8.09122e-05 8.2425 1.28845 5.44493 3.635C2.64735 5.98155 0.788044 9.23298 0.199734 12.8074C-0.388576 16.3819 0.332505 20.0461 2.23394 23.1444C4.13537 26.2426 7.09306 28.5727 10.5777 29.7177C11.3512 29.8519 11.6404 29.3944 11.6404 28.9933C11.6404 28.6319 11.6219 27.4302 11.6219 26.1537C7.73462 26.8583 6.72917 25.2189 6.4198 24.3619C6.07662 23.5273 5.53243 22.7877 4.83428 22.207C4.29289 21.9219 3.51946 21.2158 4.81417 21.1975C5.30898 21.2503 5.78358 21.4199 6.19773 21.692C6.61188 21.9641 6.95336 22.3307 7.19323 22.7606C7.40473 23.1353 7.68914 23.4651 8.03017 23.7312C8.3712 23.9973 8.76214 24.1944 9.18059 24.3113C9.59904 24.4282 10.0368 24.4625 10.4687 24.4123C10.9006 24.3621 11.3182 24.2284 11.6977 24.0187C11.7647 23.2431 12.1154 22.5179 12.6845 21.9783C9.2428 21.597 5.64638 20.2825 5.64638 14.4494C5.62446 12.9335 6.19176 11.4668 7.2319 10.3502C6.75904 9.0329 6.81437 7.58732 7.38658 6.30892C7.38658 6.30892 8.6813 5.90937 11.6404 7.87205C14.1715 7.18572 16.8436 7.18572 19.3747 7.87205C22.3322 5.88955 23.6285 6.30892 23.6285 6.30892C24.2009 7.58728 24.2562 9.03293 23.7832 10.3502C24.8265 11.4649 25.3943 12.9329 25.3687 14.4494C25.3687 20.3008 21.7522 21.597 18.3104 21.9783C18.6796 22.3472 18.9639 22.79 19.1441 23.2768C19.3242 23.7636 19.396 24.283 19.3546 24.7995C19.3546 26.84 19.336 28.4794 19.336 28.9933C19.336 29.3944 19.6253 29.8702 20.3987 29.7177C23.8769 28.5631 26.8258 26.2275 28.7189 23.1278C30.612 20.028 31.3261 16.3659 30.7338 12.795C30.1414 9.22421 28.2811 5.97713 25.485 3.63343C22.6889 1.28974 19.139 0.00196734 15.4689 3.81075e-09Z" />
                </svg>
              </a>
            )}

            {url != "" && (
              <a
                target="_blank"
                aria-label="Visit website"
                href={url}
                className="w-full"
              >
                <svg
                  className="w-5 md:w-6 aspect-square dark:fill-secondary fill-primary dark:stroke-secondary stroke-primary duration-700"
                  viewBox="0 0 31 31"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7021 15.5704L13.6947 15.5777L13.6879 15.5856C13.4855 15.8182 13.3784 16.1187 13.3881 16.427C13.3978 16.7352 13.5235 17.0284 13.7401 17.2479C13.9567 17.4675 14.2481 17.5972 14.5562 17.6112C14.8643 17.6253 15.1664 17.5226 15.4021 17.3236L15.4117 17.3155L15.4206 17.3066L27.8511 4.8837V10.7749H27.851L27.8511 10.7796C27.8561 11.1014 27.9863 11.4086 28.214 11.6362C28.4417 11.8637 28.749 11.9937 29.0708 11.9988L29.0708 11.9988H29.0755C29.4002 11.9988 29.7117 11.8699 29.9413 11.6404C30.171 11.4109 30.3 11.0996 30.3 10.7749V1.9239C30.3 1.59925 30.171 1.28792 29.9413 1.05841C29.7117 0.828902 29.4002 0.7 29.0755 0.7H20.2191C19.8945 0.7 19.583 0.828902 19.3534 1.05841C19.1237 1.28792 18.9947 1.59925 18.9947 1.9239C18.9947 2.24856 19.1237 2.55989 19.3534 2.7894C19.583 3.0189 19.8945 3.14781 20.2191 3.14781H26.1145L13.7021 15.5704Z"
                    strokeWidth="0.7"
                  ></path>
                  <path d="M21.2883 30.5H21.2888C22.5296 30.4988 23.7193 30.0053 24.5967 29.1279C25.4741 28.2505 25.9675 27.0609 25.9688 25.82V25.8195V17.5587C25.9688 17.2443 25.8439 16.9428 25.6216 16.7205C25.3993 16.4982 25.0978 16.3733 24.7834 16.3733C24.4691 16.3733 24.1676 16.4982 23.9453 16.7205C23.723 16.9428 23.5981 17.2443 23.5981 17.5587V25.8188C23.5972 26.4313 23.3535 27.0185 22.9204 27.4516C22.4873 27.8847 21.9001 28.1285 21.2876 28.1294H5.1812C4.56868 28.1285 3.9815 27.8847 3.54838 27.4516C3.11533 27.0186 2.87162 26.4315 2.87064 25.8191V9.71213C2.87162 9.09973 3.11533 8.51267 3.54838 8.07963C3.98142 7.64658 4.56848 7.40287 5.18088 7.40189H13.4427C13.7571 7.40189 14.0586 7.27701 14.2809 7.05472C14.5031 6.83243 14.628 6.53094 14.628 6.21657C14.628 5.9022 14.5031 5.60071 14.2809 5.37842C14.0586 5.15613 13.7571 5.03125 13.4427 5.03125L5.18047 5.03125L5.17998 5.03125C3.93914 5.03247 2.74948 5.52593 1.87208 6.40333C0.994678 7.28073 0.501219 8.47039 0.5 9.71123V9.71172L0.5 25.8195L0.5 25.82C0.501219 27.0609 0.994678 28.2505 1.87208 29.1279C2.74948 30.0053 3.93914 30.4988 5.17998 30.5H5.18047H21.2883Z"></path>
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* tech */}
        <div className="w-full max-w-full">
          <p className="dark:font-semibold font-bold dark:text-tertiary text-[#90573B] duration-700 text-base capitalize break-words">
            {tech}
          </p>
        </div>

        {/* descriptions */}
        <div className="w-full max-w-full">
          <p className="dark:text-secondary2 text-primary2 duration-700 font-medium text-sm break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
