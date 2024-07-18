import { NameXL } from "@/atoms/icons/name-xl";
import { Text } from "@/atoms/text";

export function Footer() {
  return (
    <footer className="pb-2 pt-24 md:pt-32 md:pb-8">
      <h2 className="pb-8 md:pb-0">
        <NameXL />
        <span className="sr-only">Sebastian Prisacariu</span>
      </h2>
      <nav className="grid grid-cols-2 md:grid-cols-6 md:gap-16 md:pt-10">
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground leading-[1.4em] opacity-75"
        >
          Developer
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground row-start-2 leading-[1.4em] opacity-75 md:col-start-2 md:row-start-1"
        >
          Designer
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground row-start-3 leading-[1.4em] opacity-75 md:col-span-2 md:row-start-1"
        >
          Brand Strategist
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground leading-[1.4em] opacity-75 md:text-right"
        >
          Oslo, Norway
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground leading-[1.4em] opacity-75 md:text-right"
        >
          © Prisacariu 2024
        </Text>
      </nav>
    </footer>
  );
}
