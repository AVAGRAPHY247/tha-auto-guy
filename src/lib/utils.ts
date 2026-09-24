export function cn(
  ...inputs: (
    | string
    | false
    | null
    | undefined
    | Record<string, boolean>
  )[]
) {
  return inputs
    .map((input) => {
      if (!input) return "";
      if (typeof input === "string") return input;

      return Object.entries(input)
        .filter(([, value]) => value)
        .map(([key]) => key)
        .join(" ");
    })
    .filter(Boolean)
    .join(" ");
}