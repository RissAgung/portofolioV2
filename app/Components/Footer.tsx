import Container from "./Container";

const Footer = () => {
  return (
    <Container>
      <div
        data-aos-duration="700"
        data-aos="fade-up"
        className="w-full h-fit flex flex-col"
      >
        <hr className="my-6 border-t-[1px] md:border-t-2 border-secondary2" />

        <div className="w-full h-fit flex flex-wrap gap-6 md:gap-3 text-secondary md:px-8">
          <div className="w-fit flex flex-col flex-1 flex-wrap gap-5 footer">
            <div className="w-fit h-fit flex gap-2">
              <div className="w-[4px] self-stretch bg-tertiary"></div>
              <h3 className="uppercase font-extrabold text-base">
                contact <span className="text-[#ADADAD]">person</span>
              </h3>
            </div>
            <div className="w-fit flex flex-col gap-3 pl-3">
              {/* phone */}
              <div className="flex gap-2">
                <svg
                  className="w-4 aspect-square fill-secondary"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.6448 13.0655C9.63497 12.6807 5.37254 8.31173 5.05288 6.47358C5.59236 5.93411 6.6713 4.85525 6.6713 3.7762L2.89509 0C1.81614 0 0.53898 1.67379 0.197721 2.69739C-1.63956 8.20931 9.79065 19.6396 15.3026 17.8023C16.3262 17.4611 18 16.1839 18 15.1049L14.2238 11.3287C13.1448 11.3287 12.1843 12.526 11.6449 13.0655L11.6448 13.0655Z" />
                </svg>
                <p className="font-normal md:text-sm">081233764580</p>
              </div>

              {/* whatsapp */}
              <div className="flex gap-2">
                <svg
                  className="w-4 aspect-square fill-secondary"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.6538 4.16239C13.9613 -0.000137598 8.46392 -1.23765 4.20066 1.34987C0.049603 3.93739 -1.29669 9.56244 1.39589 13.725L1.62028 14.0625L0.722748 17.4375L4.08847 16.5375L4.42505 16.7625C5.88353 17.55 7.4542 18 9.02487 18C10.7077 18 12.3906 17.55 13.8491 16.65C18.0001 13.95 19.2342 8.43743 16.6538 4.16239ZM14.2978 12.825C13.8491 13.5 13.2881 13.95 12.5028 14.0625C12.054 14.0625 11.4931 14.2875 9.24925 13.3875C7.34201 12.4875 5.77134 11.0249 4.64943 9.33743C3.97628 8.54993 3.63971 7.53742 3.52752 6.52491C3.52752 5.62491 3.86409 4.8374 4.42505 4.2749C4.64943 4.04989 4.87381 3.93739 5.09819 3.93739H5.65915C5.88353 3.93739 6.10791 3.93739 6.2201 4.3874C6.44448 4.9499 7.00544 6.29991 7.00544 6.41241C7.11763 6.52491 7.11763 6.74991 7.00544 6.86242C7.11763 7.08742 7.00544 7.31242 6.89325 7.42492C6.78105 7.53742 6.66886 7.76242 6.55667 7.87492C6.33229 7.98742 6.2201 8.21243 6.33229 8.43743C6.78105 9.11243 7.34201 9.78744 7.90296 10.3499C8.57611 10.9124 9.24925 11.3624 10.0346 11.7C10.259 11.8125 10.4834 11.8125 10.5955 11.5875C10.7077 11.3624 11.2687 10.7999 11.4931 10.5749C11.7175 10.3499 11.8296 10.3499 12.054 10.4624L13.8491 11.3624C14.0735 11.475 14.2978 11.5875 14.41 11.7C14.5222 12.0375 14.5222 12.4875 14.2978 12.825Z" />
                </svg>

                <p className="font-normal md:text-sm">081233764580</p>
              </div>

              {/* email */}
              <div className="w-full flex gap-2">
                <svg
                  className="w-4 aspect-auto fill-white"
                  viewBox="0 0 18 14"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.2 0H1.8C0.81 0 0.00899999 0.7875 0.00899999 1.75L0 12.25C0 13.2125 0.81 14 1.8 14H16.2C17.19 14 18 13.2125 18 12.25V1.75C18 0.7875 17.19 0 16.2 0ZM16.2 3.5L9 7.875L1.8 3.5V1.75L9 6.125L16.2 1.75V3.5Z" />
                </svg>

                <p className="font-normal md:text-sm">
                  risqiagungg123@gmail.com
                </p>
              </div>

              {/* instagram */}
              <div className="flex gap-2">
                <svg
                  className="w-4 aspect-square fill-secondary"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.92521 0.00110732C10.5819 -0.0014128 11.2387 0.00518768 11.8952 0.0209067L12.0698 0.0272065C12.2714 0.0344062 12.4703 0.0434059 12.7106 0.0542055C13.6681 0.099204 14.3215 0.250399 14.8948 0.472691C15.4887 0.701284 15.9891 1.01087 16.4895 1.51126C16.947 1.96089 17.3011 2.50477 17.5271 3.1051C17.7494 3.67838 17.9006 4.33266 17.9456 5.29023C17.9564 5.52962 17.9654 5.72941 17.9726 5.93101L17.978 6.1056C17.994 6.76185 18.0009 7.41829 17.9987 8.07473L17.9996 8.74611V9.92507C18.0018 10.5818 17.9949 11.2386 17.9789 11.8951L17.9735 12.0697C17.9663 12.2713 17.9573 12.4702 17.9465 12.7105C17.9015 13.668 17.7485 14.3214 17.5271 14.8947C17.3018 15.4957 16.9476 16.04 16.4895 16.4894C16.0395 16.9469 15.4953 17.301 14.8948 17.5271C14.3215 17.7494 13.6681 17.9006 12.7106 17.9456C12.4703 17.9564 12.2714 17.9654 12.0698 17.9726L11.8952 17.978C11.2387 17.994 10.5819 18.0009 9.92521 17.9987L9.25384 17.9996H8.0758C7.41907 18.0018 6.76235 17.9949 6.10581 17.9789L5.93122 17.9735C5.71758 17.9658 5.50398 17.9568 5.29045 17.9465C4.3329 17.9015 3.67953 17.7485 3.10536 17.5271C2.50481 17.3015 1.96083 16.9474 1.51154 16.4894C1.05351 16.0397 0.699085 15.4955 0.472995 14.8947C0.250706 14.3214 0.0995141 13.668 0.0545165 12.7105C0.0444936 12.4969 0.035494 12.2833 0.0275179 12.0697L0.0230182 11.8951C0.00642628 11.2386 -0.00107414 10.5818 0.000519274 9.92507V8.07473C-0.00199247 7.41829 0.0046079 6.76185 0.0203183 6.1056L0.026618 5.93101C0.0338176 5.72941 0.0428171 5.52962 0.0536166 5.29023C0.0986143 4.33176 0.249806 3.67928 0.472095 3.1051C0.698319 2.50448 1.05343 1.96074 1.51244 1.51216C1.96142 1.05385 2.50506 0.699099 3.10536 0.472691C3.67953 0.250399 4.332 0.099204 5.29045 0.0542055L5.93122 0.0272065L6.10581 0.0227067C6.76204 0.00612283 7.41847 -0.00137772 8.07491 0.000207414L9.92521 0.00110732ZM9.00006 4.50095C8.40384 4.49252 7.8119 4.60267 7.25863 4.825C6.70535 5.04734 6.20178 5.37742 5.77718 5.79606C5.35258 6.2147 5.01542 6.71356 4.78529 7.26365C4.55516 7.81373 4.43665 8.40407 4.43665 9.00035C4.43665 9.59663 4.55516 10.187 4.78529 10.7371C5.01542 11.2871 5.35258 11.786 5.77718 12.2046C6.20178 12.6233 6.70535 12.9534 7.25863 13.1757C7.8119 13.398 8.40384 13.5082 9.00006 13.4997C10.1935 13.4997 11.338 13.0257 12.1819 12.1818C13.0257 11.3379 13.4998 10.1933 13.4998 8.9999C13.4998 7.80647 13.0257 6.66191 12.1819 5.81803C11.338 4.97414 10.1935 4.50095 9.00006 4.50095ZM9.00006 6.30089C9.3587 6.29428 9.71506 6.35921 10.0483 6.49187C10.3816 6.62454 10.6851 6.82228 10.9411 7.07356C11.197 7.32483 11.4004 7.6246 11.5392 7.95534C11.6781 8.28609 11.7496 8.64119 11.7497 8.99989C11.7497 9.3586 11.6783 9.71372 11.5396 10.0445C11.4009 10.3753 11.1976 10.6751 10.9417 10.9265C10.6858 11.1779 10.3824 11.3757 10.0492 11.5085C9.71594 11.6413 9.3596 11.7063 9.00096 11.6998C8.28491 11.6998 7.59819 11.4154 7.09187 10.909C6.58555 10.4027 6.3011 9.71596 6.3011 8.9999C6.3011 8.28384 6.58555 7.59711 7.09187 7.09078C7.59819 6.58445 8.28491 6.29999 9.00096 6.29999L9.00006 6.30089ZM13.7248 3.151C13.4345 3.16262 13.1599 3.28613 12.9586 3.49566C12.7573 3.70519 12.6449 3.98449 12.6449 4.27506C12.6449 4.56563 12.7573 4.84493 12.9586 5.05446C13.1599 5.26399 13.4345 5.3875 13.7248 5.39912C14.0232 5.39912 14.3093 5.2806 14.5203 5.06963C14.7312 4.85866 14.8498 4.57252 14.8498 4.27416C14.8498 3.9758 14.7312 3.68967 14.5203 3.47869C14.3093 3.26772 14.0232 3.1492 13.7248 3.1492V3.151Z" />
                </svg>

                <p className="font-normal md:text-sm">@RisqiYoupack</p>
              </div>
            </div>
          </div>

          <div className="w-fit flex flex-col flex-1 flex-wrap gap-5 footer">
            <div className="w-fit h-fit flex gap-2">
              <div className="w-[4px] self-stretch bg-tertiary"></div>
              <h3 className="uppercase font-extrabold text-base">
                our <span className="text-[#ADADAD]">services</span>
              </h3>
            </div>
            <div className="w-fit flex flex-col gap-3 pl-3">
              {/* phone */}
              <div className="flex gap-2">
                <p className="font-normal md:text-sm">Web Design</p>
              </div>

              {/* whatsapp */}
              <div className="flex gap-2">
                <p className="font-normal md:text-sm">Web Development</p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[11px] md:text-sm text-secondary2 mt-9 md:mt-12 mb-4 md:mb-0 mx-auto">
          COPYRIGHT @ 2023 - All Right Reserved by RisqiYoupack
        </p>
      </div>
    </Container>
  );
};

export default Footer;