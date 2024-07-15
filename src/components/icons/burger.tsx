export function Burger({ shadow }: Readonly<{ shadow?: boolean }>) {
  return (
    <svg
      width="28"
      height="16"
      viewBox="0 0 28 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-3"
    >
      <path
        d="M2 2H26M2 8H26M2 14H26"
        stroke={
          shadow ? "hsl(var(--secondary-foreground))" : "hsl(var(--foreground))"
        }
        stroke-width="3"
        stroke-linecap="round"
      />
    </svg>
  );
}
