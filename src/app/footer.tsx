import { NameXL } from "@/atoms/icons/name-xl";
import { Text } from "@/atoms/text";

export function Footer() {
  return (
    <footer className="pb-8 pt-24">
      <h2>
        <NameXL />
        <span className="sr-only">Sebastian Prisacariu</span>
      </h2>
      <nav className="pt-10 grid md:grid-cols-6 gap-16">
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
          className="text-secondary-foreground leading-[1.4em] opacity-75"
        >
          Designer
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground col-span-2 leading-[1.4em] opacity-75"
        >
          Brand Strategist
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground text-right leading-[1.4em] opacity-75"
        >
          Oslo, Norway
        </Text>
        <Text
          as="p"
          style="tag"
          className="text-secondary-foreground text-right leading-[1.4em] opacity-75"
        >
          © Prisacariu 2024
        </Text>
      </nav>
    </footer>
  );
}
