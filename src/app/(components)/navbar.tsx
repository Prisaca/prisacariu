import { Logo } from "@/atoms/icons/logo";
import { Text } from "@/atoms/text";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="appear active delay-md grid grid-cols-2 items-center gap-16 md:grid-cols-6">
      <Link className="md:col-span-2" href={"/"}>
        <Logo />
        <p className="sr-only">Sebastian Prisacariu</p>
      </Link>
      <div className="grid md:col-span-4 md:grid-cols-4">
        <ul className="hidden md:col-span-2 md:flex md:flex-col [&>*]:text-xs">
          <li>
            <Text as="p" styledAs="tag">
              FULLSTACK DEVELOPER
            </Text>
          </li>
          <li>
            <Text as="p" styledAs="tag">
              WEB DESIGNER
            </Text>
          </li>
          <li>
            <Text as="p" styledAs="tag">
              BRAND STRATEGIST
            </Text>
          </li>
        </ul>
        <ul className="hidden md:flex md:flex-col [&>*]:text-xs">
          <li>
            <Text as="p" styledAs="tag">
              OSLO
            </Text>
          </li>
          <li>
            <Text as="p" styledAs="tag">
              NORWAY
            </Text>
          </li>
        </ul>
        {/* <button className="flex items-start justify-end">
          <Burger />
        </button> */}
      </div>
    </nav>
  );
}
