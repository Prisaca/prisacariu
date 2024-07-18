import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { type HTMLProps, type PropsWithChildren } from "react";

export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva("", {
  variants: {
    style: {
      tag: "text-[0.6rem] md:text-xs font-normal tracking-tight leading-[1em] ml-[-0.07em]",
      "display-1":
        "text-[9.5vw] font-monument tracking-tighter leading-[1em] font-normal ml-[-0.07em]",
      "display-2":
        "text-[5vw] md:text-[3.75vw] font-monument tracking-[-0.02em] md:leading-[1.1em] font-normal ml-[-0.07em]",
      "display-3":
        "text-[4vw] md:text-[2vw] font-monument leading-[1.31em] font-normal ml-[-0.07em]",
      "display-4":
        "text-[3vw] md:text-[1.2vw] font-monument leading-[1.4em] font-normal ml-[-0.07em]",
    },
  },
});

export type TextProps = PropsWithChildren<
  Omit<HTMLProps<HTMLParagraphElement>, "style"> &
    TextVariantProps & {
      as?: "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "div";
    }
>;

export const text = (props: TextVariantProps) => textVariants(props);

export const Text = ({ as, style, className, ...props }: TextProps) => {
  const TextType = as ?? "p";
  return <TextType className={clsx(className, text({ style }))} {...props} />;
};
