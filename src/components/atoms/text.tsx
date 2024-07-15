import { cva, type VariantProps } from "class-variance-authority";
import clsx from "clsx";
import { type HTMLProps, type PropsWithChildren } from "react";

export type TextVariantProps = VariantProps<typeof textVariants>;
export const textVariants = cva("", {
  variants: {
    style: {
      tag: "text-2xs font-normal tracking-tight leading-[1em] uppercase",
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

export const Text = ({ as, style, ...props }: TextProps) => {
  const TextType = as ?? "p";
  return (
    <TextType className={clsx(props.className, text({ style }))} {...props} />
  );
};
