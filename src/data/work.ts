export interface WorkItem {
  title: string;
  description?: string;
  affiliation?: string;
  year: string;
  href?: string;
}

// Newest first. `href` is optional — items without one render as plain text.
export const work: WorkItem[] = [
  {
    title: "The New Bagehot Project",
    affiliation: "Yale School of Management",
    description: "AI agents for financial crisis intervention. In progress.",
    year: "May 2026",
    href: "/projects/new-bagehot/",
  },
  {
    title: "Pera",
    description: "Immersive language learning, anywhere. In progress.",
    year: "May 2026",
    href: "/projects/pera/",
  },
  {
    title: "Nexus",
    description: "Automatic and interpretable concept links for knowledge graphs.",
    year: "Jan 2026",
    href: "https://github.com/tonywanglab/nexus",
  },
];
