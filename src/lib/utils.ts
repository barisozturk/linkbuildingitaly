export function slugFromPath(path: string): string {
  return path.split("/").filter(Boolean).pop() ?? "";
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function wordCount(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}
