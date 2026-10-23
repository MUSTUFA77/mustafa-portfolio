import {
  Home,
  User,
  Terminal,
  Network,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Mail,
} from "lucide-react";

/** Single source of truth for page sections (navbar + command palette). */
export const sections = [
  { id: "home", label: "Home", Icon: Home, nav: false },
  { id: "about", label: "About", Icon: User, nav: true },
  { id: "skills", label: "Skills", Icon: Terminal, nav: true },
  { id: "architecture", label: "Architecture", Icon: Network, nav: true },
  { id: "experience", label: "Experience", Icon: Briefcase, nav: true },
  { id: "projects", label: "Projects", Icon: FolderGit2, nav: true },
  { id: "education", label: "Education", Icon: GraduationCap, nav: false },
  { id: "contact", label: "Contact", Icon: Mail, nav: true },
];
