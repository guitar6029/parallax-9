/**
 * Returns a random color from the given array of colors. If no colors are provided, returns "stroke-(--pz-neon)".
 * @param {string[] | undefined | null} colors - An array of colors to choose from.
 * @returns {string} A random color from the given array of colors, or "stroke-(--pz-neon)" if no colors are provided.
 */
export function getRandomColor(colors: string[] | undfined | null): string {
  if (!colors) return "stroke-(--pz-neon)";
  if (!colors.length) return "stroke-(--pz-neon)";
  const index = Math.floor(Math.random() * colors.length);
  return colors[index] ?? "stroke-(--pz-neon)";
}
