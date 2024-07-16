import { Arrow } from "@/atoms/icons/arrow";
import { Text } from "@/atoms/text";
import Image from "next/image";
import Link from "next/link";

export function Projects() {
  return (
    <section id="recent-projects" className="pb-20">
      <div id="recent-projects-head" className="flex flex-col gap-6">
        <div className="bg-foreground h-[2px] w-full rounded-full" />
        <h2 className="font-monument text-center text-[3vw] uppercase leading-[1.4em] md:text-[1.125vw]">
          *Recent works*
        </h2>
        <div className="bg-foreground h-[2px] w-full rounded-full" />
      </div>
      <article className="[&:not(:last-of-type)]:border-b-foreground grid grid-cols-2 [&:not(:last-of-type)]:border-b-[2px]">
        <div className="md:border-r-foreground flex flex-col justify-between py-8 md:border-r-[1px]">
          {/* top */}
          <div className="flex flex-row justify-between">
            <div>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                PROJECT #1
              </Text>
              <Text as="h3" style="display-3" className="pt-1">
                CAMILLA PIHL
              </Text>
            </div>
            <Link
              href="https://camillapihl.com/"
              target="_blank"
              className="flex flex-col items-end gap-3 p-4 pr-8"
            >
              <Arrow />
              <Text
                as="p"
                style="tag"
                className="font-monument w-[min-content] text-right leading-[1.4em]"
              >
                GO TO WEBSITE
              </Text>
            </Link>
          </div>
          {/* bottom */}
          <ul className="grid grid-cols-2 gap-16 pr-8 md:grid-cols-3">
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                STACK
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Next</span>
                <span>Storyblok</span>
                <span>Centra</span>
              </Text>
            </li>
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                MY ROLE
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Fullstack</span>
                <span>Developer</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Developed By
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Frend</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Designed by
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Bielke&Yang</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                YEAR
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>2023-2024</span>
              </Text>
            </li>
          </ul>
        </div>
        <Link href="https://camillapihl.com/" target="_blank">
          <Image
            src="/camilla-pihl.jpg"
            alt="A laptop showing Camilla Pihl's website"
            height={910 * 2}
            width={830 * 2}
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ aspectRatio: "830 / 910", height: "750px" }}
            className="md:border-l-foreground object-cover md:border-l-[1px]"
          />
        </Link>
      </article>
      <article className="border-b-foreground grid grid-cols-2 border-b-[2px]">
        <div className="md:border-r-foreground flex flex-col justify-between py-8 md:border-r-[1px]">
          {/* top */}
          <div className="flex flex-row justify-between">
            <div>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                PROJECT #2
              </Text>
              <Text as="h3" style="display-3" className="pt-1">
                KOKKELØREN
              </Text>
            </div>
            <Link
              href="https://kokkeloren.no/"
              target="_blank"
              className="flex flex-col items-end gap-3 p-4 pr-8"
            >
              <Arrow />
              <Text
                as="p"
                style="tag"
                className="font-monument w-[min-content] text-right leading-[1.4em]"
              >
                GO TO WEBSITE
              </Text>
            </Link>
          </div>
          {/* bottom */}
          <ul className="grid grid-cols-2 gap-16 pr-8 md:grid-cols-3">
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                STACK
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Next</span>
                <span>Crystallize</span>
              </Text>
            </li>
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                MY ROLE
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Fullstack</span>
                <span>Developer</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Developed By
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Frend</span>
              </Text>
            </li>
            {/* <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Designed by
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Bielke&Yang</span>
              </Text>
            </li> */}
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                YEAR
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>2023-2024</span>
              </Text>
            </li>
          </ul>
        </div>
        <Link href="https://kokkeloren.no/" target="_blank">
          <Image
            src="/kokkeloren.jpg"
            alt="A laptop showing Kokkeløren's website"
            height={910 * 2}
            width={830 * 2}
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ aspectRatio: "830 / 910", height: "750px" }}
            className="md:border-l-foreground object-cover md:border-l-[1px]"
          />
        </Link>
      </article>
      <article className="border-b-foreground grid grid-cols-2 border-b-[2px]">
        <div className="md:border-r-foreground flex flex-col justify-between py-8 md:border-r-[1px]">
          {/* top */}
          <div className="flex flex-row justify-between">
            <div>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                PROJECT #3
              </Text>
              <Text as="h3" style="display-3" className="pt-1">
                RAUMA GARN
              </Text>
            </div>
            <Link
              href="https://www.raumagarn.no/"
              target="_blank"
              className="flex flex-col items-end gap-3 p-4 pr-8"
            >
              <Arrow />
              <Text
                as="p"
                style="tag"
                className="font-monument w-[min-content] text-right leading-[1.4em]"
              >
                GO TO WEBSITE
              </Text>
            </Link>
          </div>
          {/* bottom */}
          <ul className="grid grid-cols-2 gap-16 pr-8 md:grid-cols-3">
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                STACK
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Next</span>
                <span>Storyblok</span>
                <span>Centra</span>
              </Text>
            </li>
            <li>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                MY ROLE
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Fullstack</span>
                <span>Developer</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Developed By
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Frend</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                Designed by
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>Bielke&Yang</span>
              </Text>
            </li>
            <li className="md:row-start-2">
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                YEAR
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
                <span>2023-2024</span>
              </Text>
            </li>
          </ul>
        </div>
        <Link href="https://www.raumagarn.no/" target="_blank">
          <Image
            src="/rauma-garn.jpg"
            alt="A mobile phone showing Rauma Garn's website"
            height={910 * 2}
            width={830 * 2}
            sizes="(min-width: 1024px) 50vw, 100vw"
            style={{ aspectRatio: "830 / 910", height: "750px" }}
            className="md:border-l-foreground object-cover md:border-l-[1px]"
          />
        </Link>
      </article>
    </section>
  );
}
