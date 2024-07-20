import { Arrow } from "@/atoms/icons/arrow";
import { Text } from "@/atoms/text";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export type Project = {
  index: number;
  title: string;
  link: {
    href: string;
    openInNewTab: boolean;
  };
  data: {
    label: string;
    answers: string[];
  }[];
  image: {
    src: string;
    alt: string;
    height: number;
    width: number;
  };
};

export function Project(props: Project) {
  return (
    <article
      className={clsx(
        "animation-parent md:border-b-foreground flex flex-col-reverse md:grid md:grid-cols-2 md:border-b-[2px]",
      )}
    >
      <div className="md:border-r-foreground flex flex-col justify-between py-8 md:border-r-[1px]">
        {/* top */}
        <div className="flex flex-row justify-between">
          <div>
            <Text
              as="p"
              styledAs="tag"
              className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
            >
              PROJECT #{props.index + 1}
            </Text>
            <Text as="h3" styledAs="display-3" className="pt-1">
              {props.title}
            </Text>
          </div>
          <div className="animated-button animated-arrow">
            <Link
              href={props.link.href}
              target={props.link.openInNewTab ? "_blank" : "_self"}
              className="flex flex-col items-end gap-1 p-4 pr-0 pt-0 md:gap-3 md:pr-8 [&>svg]:h-4 [&>svg]:w-4 md:[&>svg]:h-8 md:[&>svg]:w-8"
            >
              <Arrow />
              <div className="animated-button-content">
                <Text
                  as="p"
                  styledAs="tag"
                  className="font-monument w-[min-content] text-right text-[0.4rem] leading-[1.4em] md:text-[0.6rem]"
                >
                  GO TO WEBSITE
                </Text>
                <p aria-hidden></p>
              </div>
            </Link>
          </div>
        </div>
        {/* bottom */}
        <ul className="grid max-w-[80%] grid-cols-2 gap-x-4 gap-y-8 pt-8 md:max-w-full md:grid-cols-3 md:gap-16 md:pr-8 md:pt-0">
          {props.data.map((answer, index) => (
            <li key={index} className={index < 2 ? "" : "md:row-start-2"}>
              <Text
                as="p"
                styledAs="tag"
                className={
                  "text-secondary-foreground font-monument text-[0.4rem] leading-[1.4em] opacity-75 md:text-[0.6rem]"
                }
              >
                {answer.label}
              </Text>
              <Text
                as="p"
                styledAs="display-4"
                className="pt-1 md:pt-4 [&>*]:block"
              >
                {answer.answers.map((text, index) => (
                  <span key={index}>{text}</span>
                ))}
              </Text>
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={props.link.href}
        target={props.link.openInNewTab ? "_blank" : "_self"}
      >
        <div className="animated-project-image">
          <Image
            src={props.image.src}
            alt={props.image.alt}
            height={props.image.height * 2}
            width={props.image.width * 2}
            sizes="(min-width: 768px) 50vw, 100vw"
            style={{
              aspectRatio: `${props.image.width} / ${props.image.height}`,
            }}
            className="md:border-l-foreground h-[15rem] object-cover md:h-[750px] md:border-l-[1px]"
          />
        </div>
      </Link>
    </article>
  );
}
