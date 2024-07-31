import { Text } from "@/atoms/text";
import { WordByLetter } from "@/atoms/word-by-letter";
import Image from "next/image";
import Link from "next/link";

const config = {
  hero_titles: {
    base_speed: -0.01,
    stagger_speed: -0.01,
  },
};

export function Hero() {
  return (
    <section id="hero" className="py-20 md:pb-0">
      <section id="main-hero" className="">
        <div id="main-hero-title" className="relative grid">
          <h1 className="stagger-animation active grid md:grid-cols-6">
            <Text
              as="div"
              styledAs="display-1"
              // @ts-expect-error custom property
              style={{ "--staggered-sentence": 0 }}
              className="block overflow-hidden whitespace-nowrap md:col-span-6 md:col-start-1 md:text-right"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 0
              }
            >
              <WordByLetter>CRAFTING</WordByLetter>
            </Text>
            <Text
              as="div"
              styledAs="display-1"
              // @ts-expect-error custom property
              style={{ "--staggered-sentence": 1 }}
              className="block overflow-hidden whitespace-nowrap md:col-span-6 md:col-start-1"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 1
              }
            >
              <WordByLetter>SEAMLESS</WordByLetter>
            </Text>
            <Text
              as="div"
              styledAs="display-1"
              // @ts-expect-error custom property
              style={{ "--staggered-sentence": 2 }}
              className="block w-[max-content] overflow-hidden whitespace-nowrap md:col-span-2 md:col-start-4"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 2
              }
            >
              <WordByLetter>DIGITAL</WordByLetter>
            </Text>
            <Text
              as="div"
              styledAs="display-1"
              // @ts-expect-error custom property
              style={{ "--staggered-sentence": 3 }}
              className="block w-[max-content] overflow-hidden whitespace-nowrap md:col-span-5 md:col-start-2"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 3
              }
            >
              <WordByLetter>PRODUCTS</WordByLetter>
            </Text>
          </h1>
          <Link
            href="mailto:sebastian@prisacariu.com"
            className="appear appear-delay-150 absolute right-0 top-full z-10 mt-4 hidden text-left md:block [&>*]:text-xs"
            data-scroll
            data-scroll-offset="50px,10%"
            data-scroll-class="active"
          >
            <div className="animated-button">
              <Text
                as="p"
                styledAs="tag"
                className="uppercase opacity-75"
                style={{ fontSize: "8px", lineHeight: "1em" }}
              >
                Email me
              </Text>
              <div className="animated-button-content">
                <Text
                  as="p"
                  styledAs="tag"
                  className="pt-1 font-light md:text-sm"
                >
                  sebastian@prisacariu.com
                </Text>
                <Text
                  as="p"
                  styledAs="tag"
                  className="pt-1 font-light md:text-sm"
                  aria-hidden
                >
                  sebastian@prisacariu.com
                </Text>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <div data-scroll data-scroll-speed="0.375">
        <section
          id="main-hero-image"
          className="mt-8 flex flex-row items-center justify-between md:mt-[-2.5rem]"
        >
          <Image
            src="/my_image.webp"
            alt="A picture of me in a brown turtleneck and green overshirt."
            width={725}
            height={725 * 1.25}
            style={{ aspectRatio: "725 / 910" }}
            className="appear hero-image-appear max-w-[100%] overflow-hidden object-cover md:w-[50%]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <button className="relative hidden h-[1ch] w-[1ch] md:block">
            <Text
              as="p"
              styledAs="tag"
              className="absolute inset-0 -left-[5rem] w-[10rem] rotate-90 text-center text-[0.75rem]"
            >
              SCROLL DOWN
            </Text>
          </button>
        </section>
        <section
          id="main-hero-body"
          className="appear mt-4 md:mt-6 md:w-[50%]"
          data-scroll
          data-scroll-offset="20%,20%"
          data-scroll-class="active"
        >
          <p className="font-monument text-[3vw] leading-[1.4em] text-secondary-foreground md:text-right md:text-[1.125vw]">
            Hey there!
          </p>
          <Text
            as="h2"
            styledAs="display-3"
            className="pt-2 md:pt-3 md:text-right [&>*]:block"
          >
            <span>{"*I’M SEBASTIAN, A FULLSTACK"}</span>
            <span>{"WEB DEVELOPER, DESIGNER"}</span>
            <span>{"AND STRATEGIST*"}</span>
          </Text>
        </section>
        <Link
          href="mailto:sebastian@prisacariu.com"
          className="appear mt-4 block py-4 pr-4 text-left md:mt-44"
          data-scroll
          data-scroll-offset="50px,10%"
          data-scroll-class="active"
        >
          <div className="animated-button">
            <Text
              as="p"
              styledAs="tag"
              className="font-light text-secondary-foreground opacity-75 md:text-sm"
            >
              Email me
            </Text>
            <div className="animated-button-content">
              <Text
                as="p"
                styledAs="tag"
                className="pt-1 font-light md:text-sm"
              >
                sebastian@prisacariu.com
              </Text>
              <Text
                as="p"
                styledAs="tag"
                className="pt-1 font-light md:text-sm"
                aria-hidden
              >
                sebastian@prisacariu.com
              </Text>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
