import { Logo } from "@/atoms/icons/logo";
import { Text } from "@/atoms/text";
import Link from "next/link";

export function CtaSection() {
  return (
    <section id="main-cta-section" className="py-24">
      <Logo type="icon" />
      <Text as="h2" style="display-2" className="pt-12 [&>*]:block">
        <span>THIS IS THE PART WHERE</span>
        <span>YOU GET IN TOUCH AND</span>
        <span>WE MAKE SOMETHING</span>
        <span>COOL HAPPEN!</span>
      </Text>
      <div className="grid gap-16 pt-24 md:grid-cols-6">
        <button className="col-span-2 py-4 pr-4 text-left">
          <Text
            as="p"
            style="tag"
            className="text-secondary-foreground font-light opacity-75 md:text-sm"
          >
            Email me
          </Text>
          <Text as="p" style="tag" className="pt-1 font-light md:text-sm">
            sebastian@prisacariu.com
          </Text>
        </button>
        <button className="py-4 pr-4 text-left">
          <Text
            as="p"
            style="tag"
            className="text-secondary-foreground font-light opacity-75 md:text-sm"
          >
            Give me a call
          </Text>
          <Text as="p" style="tag" className="pt-1 font-light md:text-sm">
            +47 944 48 582
          </Text>
        </button>
        <div className="col-span-3 py-4 pr-4 text-left">
          <Text
            as="p"
            style="tag"
            className="text-secondary-foreground font-light opacity-75 md:text-sm"
          >
            Reach out to me on
          </Text>
          <div className="flex gap-6 pt-1">
            <Link
              href="https://www.linkedin.com/in/sebastian-prisacariu-71b74b162"
              target="_blank"
            >
              <Text as="p" style="tag" className="font-light md:text-sm">
                LinkedIn
              </Text>
            </Link>
            <Link
              href="https://www.instagram.com/s_prisacariu/"
              target="_blank"
            >
              <Text as="p" style="tag" className="font-light md:text-sm">
                Instagram
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
