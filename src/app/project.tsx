import { Arrow } from "@/atoms/icons/arrow";
import { Text } from "@/atoms/text";
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
              PROJECT #{props.index + 1}
            </Text>
            <Text as="h3" style="display-3" className="pt-1">
              {props.title}
            </Text>
          </div>
          <Link
            href={props.link.href}
            target={props.link.openInNewTab ? "_blank" : "_self"}
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
          {props.data.map((answer, index) => (
            <li key={index} className={index < 2 ? "" : "md:row-start-2"}>
              <Text
                as="p"
                style="tag"
                className="text-secondary-foreground font-monument leading-[1.4em] opacity-75"
              >
                {answer.label}
              </Text>
              <Text as="p" style="display-4" className="pt-4 [&>*]:block">
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
        <Image
          src={props.image.src}
          alt={props.image.alt}
          height={props.image.height * 2}
          width={props.image.width * 2}
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{
            aspectRatio: `${props.image.width} / ${props.image.height}`,
            height: "750px",
          }}
          className="md:border-l-foreground object-cover md:border-l-[1px]"
        />
      </Link>
    </article>
  );
}
