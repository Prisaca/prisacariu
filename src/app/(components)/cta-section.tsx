import { Logo } from "@/atoms/icons/logo";
import { Text } from "@/atoms/text";
import { WordByLetter } from "@/atoms/word-by-letter";
import Link from "next/link";

export function CtaSection() {
  return (
    <section
      id="main-cta-section"
      className="cta-section md:py-24"
      data-scroll
      data-scroll-offset="35%,50%"
      data-scroll-class="cta-section__inview"
    >
      <Logo type="icon" />
      <Text
        as="h2"
        styledAs="display-2"
        className="stagger-animation stagger-animation-long pt-4 md:pt-12 [&>*]:block [&>*]:overflow-hidden"
        data-scroll
        data-scroll-offset="35%,50%"
        data-scroll-class="active"
      >
        <span
          // @ts-expect-error custom property
          style={{ "--staggered-sentence": 0 }}
        >
          <WordByLetter>THIS IS THE PART WHERE</WordByLetter>
        </span>
        <span
          // @ts-expect-error custom property
          style={{ "--staggered-sentence": 1 }}
        >
          <WordByLetter>YOU GET IN TOUCH AND</WordByLetter>
        </span>
        <span
          // @ts-expect-error custom property
          style={{ "--staggered-sentence": 2 }}
        >
          <WordByLetter>WE MAKE SOMETHING</WordByLetter>
        </span>
        <span
          // @ts-expect-error custom property
          style={{ "--staggered-sentence": 3 }}
        >
          <WordByLetter>COOL HAPPEN!</WordByLetter>
        </span>
      </Text>
      <div
        className="appear grid gap-0 pt-4 md:grid-cols-6 md:gap-16 md:pt-24"
        data-scroll
        data-scroll-offset="20%,20%"
        data-scroll-class="active"
      >
        <div className="animated-button">
          <Link
            href="mailto:sebastian@prisacariu.com"
            className="block py-2 pr-4 text-left md:col-span-2 md:py-4"
          >
            <Text
              as="p"
              styledAs="tag"
              className="text-secondary-foreground font-light opacity-75 md:text-sm"
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
          </Link>
        </div>
        <div className="animated-button">
          <Link
            href="tel:+4794448582"
            className="block py-2 pr-4 text-left md:py-4"
          >
            <Text
              as="p"
              styledAs="tag"
              className="text-secondary-foreground font-light opacity-75 md:text-sm"
            >
              Give me a call
            </Text>
            <div className="animated-button-content">
              <Text
                as="p"
                styledAs="tag"
                className="pt-1 font-light md:text-sm"
              >
                +47 944 48 582
              </Text>
              <Text
                as="p"
                styledAs="tag"
                className="pt-1 font-light md:text-sm"
                aria-hidden
              >
                +47 944 48 582
              </Text>
            </div>
          </Link>
        </div>

        <div className="py-2 pr-4 text-left md:col-span-3 md:py-4">
          <Text
            as="p"
            styledAs="tag"
            className="text-secondary-foreground font-light opacity-75 md:text-sm"
          >
            Reach out to me on
          </Text>
          <div className="flex gap-6 pt-1">
            <div className="animated-button">
              <Link
                href="https://www.linkedin.com/in/sebastian-prisacariu-71b74b162"
                target="_blank"
              >
                <div className="animated-button-content">
                  <Text as="p" styledAs="tag" className="font-light md:text-sm">
                    LinkedIn
                  </Text>
                  <Text
                    as="p"
                    styledAs="tag"
                    className="font-light md:text-sm"
                    aria-hidden
                  >
                    LinkedIn
                  </Text>
                </div>
              </Link>
            </div>
            <div className="animated-button">
              <Link
                href="https://www.instagram.com/s_prisacariu/"
                target="_blank"
              >
                <div className="animated-button-content">
                  <Text as="p" styledAs="tag" className="font-light md:text-sm">
                    Instagram
                  </Text>
                  <Text
                    as="p"
                    styledAs="tag"
                    className="font-light md:text-sm"
                    aria-hidden
                  >
                    Instagram
                  </Text>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
