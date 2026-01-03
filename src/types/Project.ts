export interface Project {
  name: string;
  slug: string;
  description: string;
  icon: string;
  image: string[];
  responsibilities: string;
  techStack: string[];
  deployLink: string;
  youtubeLink: string;
  documentLink: string;
  appLink: string;
  AccountTest?: {
    role: string;
    username: string;
    password: string;
  }[];
}