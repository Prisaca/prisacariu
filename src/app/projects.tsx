import { Project } from "./project";

const articles = [
  {
    title: "CAMILLA PIHL",
    link: {
      href: "https://camillapihl.com/",
      openInNewTab: true,
    },
    data: [
      {
        label: "STACK",
        answers: ["Next", "Storyblok", "Centra"],
      },
      {
        label: "MY ROLE",
        answers: ["Fullstack", "Developer"],
      },
      {
        label: "Developed By",
        answers: ["Frend"],
      },
      {
        label: "Designed by",
        answers: ["Bielke&Yang"],
      },
      {
        label: "YEAR",
        answers: ["2023-2024"],
      },
    ],
    image: {
      src: "/camilla-pihl.jpg",
      alt: "A laptop showing Camilla Pihl's website",
      height: 910,
      width: 830,
    },
  },
  {
    title: "KOKKELØREN",
    link: {
      href: "https://kokkeloren.no/",
      openInNewTab: true,
    },
    data: [
      {
        label: "STACK",
        answers: ["Next", "Crystallize"],
      },
      {
        label: "MY ROLE",
        answers: ["Fullstack", "Developer"],
      },
      {
        label: "Developed By",
        answers: ["Frend"],
      },
      {
        label: "YEAR",
        answers: ["2023-2024"],
      },
    ],
    image: {
      src: "/kokkeloren.jpg",
      alt: "A laptop showing Kokkeløren's website",
      height: 910,
      width: 830,
    },
  },
  {
    title: "RAUMA GARN",
    link: {
      href: "https://www.raumagarn.no/",
      openInNewTab: true,
    },
    data: [
      {
        label: "STACK",
        answers: ["Next", "Storyblok", "Centra"],
      },
      {
        label: "MY ROLE",
        answers: ["Fullstack", "Developer"],
      },
      {
        label: "Developed By",
        answers: ["Frend"],
      },
      {
        label: "Designed by ",
        answers: ["Bielke&Yang"],
      },
      {
        label: "YEAR",
        answers: ["2023-2024"],
      },
    ],
    image: {
      src: "/rauma-garn.jpg",
      alt: "A mobile phone showing Rauma Garn's website",
      height: 910,
      width: 830,
    },
  },
];

export function Projects() {
  return (
    <section id="recent-projects" className="pb-20">
      <div id="recent-projects-head" className="flex flex-col gap-6">
        <div className="bg-foreground h-[2px] w-full rounded-full" />
        <h2 className="font-monument text-center text-[3vw] uppercase leading-[1.4em] md:text-[1.125vw]">
          *Recent works*
        </h2>
        <div className="bg-foreground h-[2px] w-full rounded-full" />
      </div>
      {articles.map((article, index) => (
        <Project key={index} index={index} {...article} />
      ))}
    </section>
  );
}
