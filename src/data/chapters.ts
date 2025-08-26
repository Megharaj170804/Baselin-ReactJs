export interface Chapter {
  id: number;
  title: string;
  description: string;
  route: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: 'Fundamentals' | 'Components' | 'Hooks' | 'Advanced' | 'Ecosystem';
}

export const chapters: Chapter[] = [
  {
    id: 1,
    title: "React.js (Hello World)",
    description: "Your first React component",
    route: "/chap1",
    difficulty: "Beginner",
    category: "Fundamentals"
  },
  {
    id: 2,
    title: "React Components (Functional + Class)",
    description: "Compare functional and class components",
    route: "/chap2",
    difficulty: "Beginner",
    category: "Components"
  },
  {
    id: 3,
    title: "React State and Props",
    description: "Counter and greeting components",
    route: "/chap3",
    difficulty: "Beginner",
    category: "Components"
  },
  {
    id: 4,
    title: "React State + Props with Hooks",
    description: "Real-time input and greeting updates",
    route: "/chap4",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 5,
    title: "React Component API (Constructor)",
    description: "Class component lifecycle introduction",
    route: "/chap5",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 6,
    title: "Component Lifecycle",
    description: "useEffect for mount/unmount demo",
    route: "/chap6",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 7,
    title: "React Forms (Controlled + Uncontrolled)",
    description: "Form handling with state and refs",
    route: "/chap7",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 8,
    title: "React Forms (Advanced)",
    description: "Form validation and error handling",
    route: "/chap8",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 9,
    title: "React Conditional Rendering",
    description: "Toggle login/logout states",
    route: "/chap9",
    difficulty: "Beginner",
    category: "Components"
  },
  {
    id: 10,
    title: "Lists, Keys and Fragments",
    description: "Render lists with proper keys",
    route: "/chap10",
    difficulty: "Beginner",
    category: "Components"
  },
  {
    id: 11,
    title: "Lists, Nested Lists",
    description: "Nested categories and items",
    route: "/chap11",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 12,
    title: "Map and Table",
    description: "JSON data rendering in tables",
    route: "/chap12",
    difficulty: "Intermediate",
    category: "Components"
  },
  {
    id: 13,
    title: "React Hooks (useState)",
    description: "Interactive counter with useState",
    route: "/chap13",
    difficulty: "Beginner",
    category: "Hooks"
  },
  {
    id: 14,
    title: "React Hooks (useEffect)",
    description: "Live timer with useEffect",
    route: "/chap14",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 15,
    title: "React Hooks (useContext)",
    description: "Dark/Light theme switcher",
    route: "/chap15",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 16,
    title: "React Hooks (useReducer)",
    description: "Counter with reducer pattern",
    route: "/chap16",
    difficulty: "Advanced",
    category: "Hooks"
  },
  {
    id: 17,
    title: "React Hooks (useRef)",
    description: "Input focus management",
    route: "/chap17",
    difficulty: "Intermediate",
    category: "Hooks"
  },
  {
    id: 18,
    title: "Flux vs MVC",
    description: "Architecture pattern comparison",
    route: "/chap18",
    difficulty: "Intermediate",
    category: "Advanced"
  },
  {
    id: 19,
    title: "React Portals",
    description: "Modal popup with portals",
    route: "/chap19",
    difficulty: "Intermediate",
    category: "Advanced"
  },
  {
    id: 20,
    title: "Unit Testing (Jest)",
    description: "Component testing examples",
    route: "/chap20",
    difficulty: "Intermediate",
    category: "Ecosystem"
  },
  {
    id: 21,
    title: "Date Picker & Pagination",
    description: "Third-party integration and pagination",
    route: "/chap21",
    difficulty: "Intermediate",
    category: "Ecosystem"
  }
];