import { Text } from "@/atoms/text";
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
        <div id="main-hero-title" className="grid">
          <h1 className="grid md:grid-cols-6">
            <Text
              as="span"
              style="display-1"
              className="block md:col-span-6 md:col-start-1 md:text-right"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 0
              }
            >
              CRAFTING
            </Text>
            <Text
              as="span"
              style="display-1"
              className="block md:col-span-6 md:col-start-1"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 1
              }
            >
              SEAMLESS
            </Text>
            <Text
              as="span"
              style="display-1"
              className="block md:col-span-2 md:col-start-4"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 2
              }
            >
              DIGITAL
            </Text>
            <Text
              as="span"
              style="display-1"
              className="block md:col-span-5 md:col-start-2"
              data-scroll
              data-scroll-speed={
                config.hero_titles.base_speed +
                config.hero_titles.stagger_speed * 3
              }
            >
              PRODUCTS
            </Text>
          </h1>
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
            className="max-w-[100%] overflow-hidden object-cover md:w-[50%]"
            sizes="(min-width: 768px) 50vw, 100vw"
          />
          <button className="relative hidden h-[1ch] w-[1ch] md:block">
            <Text
              as="p"
              style="tag"
              className="absolute inset-0 -left-[5rem] w-[10rem] rotate-90 text-center text-[0.75rem]"
            >
              SCROLL DOWN
            </Text>
          </button>
        </section>
        <section id="main-hero-body" className="mt-4 md:mt-6 md:w-[50%]">
          <p className="font-monument text-secondary-foreground text-[3vw] leading-[1.4em] md:text-right md:text-[1.125vw]">
            Hey there!
          </p>
          <Text
            as="h2"
            style="display-3"
            className="pt-2 md:pt-3 md:text-right [&>*]:block"
          >
            <span>{"*I’M SEBASTIAN, A FULLSTACK"}</span>
            <span>{"WEB DEVELOPER, DESIGNER"}</span>
            <span>{"AND STRATEGIST*"}</span>
          </Text>
        </section>
        <Link
          href="mailto:sebastian@prisacariu.com"
          className="mt-4 block py-4 pr-4 text-left md:mt-44"
        >
          <div className="animated-button">
            <Text
              as="p"
              style="tag"
              className="text-secondary-foreground font-light opacity-75 md:text-sm"
            >
              Email me
            </Text>
            <div className="animated-button-content">
              <Text as="p" style="tag" className="pt-1 font-light md:text-sm">
                sebastian@prisacariu.com
              </Text>
              <Text
                as="p"
                style="tag"
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
