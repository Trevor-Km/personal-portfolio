export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  java: {
    name: "Java",
    iconName: "java",
    className: "!bg-[#f6ece1]",
  },
  cs:{
    name: "C#",
    iconName: "csharp"
  },
  cpp: {
    name: "C++",
    iconName: "cpp"
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "!bg-[#f6ece1]",
    iconName: "mysql",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  php: {
    name: "PHP",
    iconName: "php",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  python: {
    name: "Python",
    iconName: "python",
  },
  css:{
    name:"CSS",
    iconName: "css"
  },
  react:{
    name: "React",
    iconName: "react"
  },
  dart: {
    name: "Dart",
    iconName: "dart",
  },
  flutter: {
    name: "Flutter",
    iconName: "flutter"
  }
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 