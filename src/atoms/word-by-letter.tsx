import clsx from "clsx";
import { type ComponentPropsWithoutRef, type PropsWithChildren } from "react";

/** splits a string into a tag with spans for each letter */
export function WordByLetter({
  children,
  className,
  ...props
}: PropsWithChildren<ComponentPropsWithoutRef<"span">>) {
  if (!children) return null;
  if (typeof children !== "string") return children;
  return children.split("").map((letter, index) => (
    <span
      className={clsx(className, "staggered-letter-word")}
      //@ts-expect-error custom property
      style={{ "--stagger-index": index, "--stagger-length": children.length }}
      {...props}
      key={index}
    >
      {letter}
      {children[index + 1] === " " ? "\u00A0" : ""}
    </span>
  ));
}
