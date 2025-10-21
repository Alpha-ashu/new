
export enum Page {
  Home,
  Dashboard,
  Interview,
}

export interface Session {
  id: string;
  role: string;
  date: string;
  aiEngine: 'Gemini' | 'GPT-4';
  score: number;
  status: 'Completed' | 'In Progress';
}
