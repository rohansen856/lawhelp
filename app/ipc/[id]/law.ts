export interface LawSection {
  id: string;
  number: string;
  title: string;
  description: string;
  enactmentDate: string;
  lastAmendmentDate: string;
  jurisdiction: string;
  subsections: Subsection[];
  interpretations: Interpretation[];
  precedentCases: PrecedentCase[];
  relatedNews: NewsItem[];
}

export interface Subsection {
  id: string;
  number: string;
  text: string;
  clauses: Clause[];
}

export interface Clause {
  id: string;
  letter: string;
  text: string;
}

export interface Interpretation {
  id: string;
  court: string;
  date: string;
  summary: string;
  citation: string;
}

export interface PrecedentCase {
  id: string;
  title: string;
  court: string;
  date: string;
  citation: string;
  summary: string;
}

export interface NewsItem {
  id: string;
  title: string;
  source: string;
  date: string;
  url: string;
}
