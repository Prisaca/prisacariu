import { Logo } from "@/atoms/icons/logo";
import { Text } from "@/atoms/text";
import Link from "next/link";

export function CtaSection() {
  return (
    <section id="main-cta-section" className="md:py-24">
      <Logo type="icon" />
      <Text as="h2" style="display-2" className="pt-4 md:pt-12 [&>*]:block">
        <span>THIS IS THE PART WHERE</span>
        <span>YOU GET IN TOUCH AND</span>
        <span>WE MAKE SOMETHING</span>
        <span>COOL HAPPEN!</span>
      </Text>
      <div className="grid gap-0 pt-4 md:grid-cols-6 md:gap-16 md:pt-24">
        <div className="animated-button">
          <Link
            href="mailto:sebastian@prisacariu.com"
            className="block py-2 pr-4 text-left md:col-span-2 md:py-4"
          >
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
          </Link>
        </div>
        <div className="animated-button">
          <Link
            href="tel:+4794448582"
            className="block py-2 pr-4 text-left md:py-4"
          >
            <Text
              as="p"
              style="tag"
              className="text-secondary-foreground font-light opacity-75 md:text-sm"
            >
              Give me a call
            </Text>
            <div className="animated-button-content">
              <Text as="p" style="tag" className="pt-1 font-light md:text-sm">
                +47 944 48 582
              </Text>
              <Text
                as="p"
                style="tag"
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
            style="tag"
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
                  <Text as="p" style="tag" className="font-light md:text-sm">
                    LinkedIn
                  </Text>
                  <Text
                    as="p"
                    style="tag"
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
                  <Text as="p" style="tag" className="font-light md:text-sm">
                    Instagram
                  </Text>
                  <Text
                    as="p"
                    style="tag"
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
