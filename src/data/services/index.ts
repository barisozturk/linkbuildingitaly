import { guestPosting } from "./guest-posting";
import { digitalPr } from "./digital-pr";
import { editorialLinks } from "./editorial-links";
import { seoOutreach } from "./seo-outreach";
import type { ServiceData } from "@/types";

export const SERVICES: ServiceData[] = [
  guestPosting,
  digitalPr,
  editorialLinks,
  seoOutreach,
];
