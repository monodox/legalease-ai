export type SystemAgentId =
  | "compliance"
  | "contract-drafting"
  | "risk-check";

export const DEFAULT_MODEL = "gemini-2.5-flash" as const;

export type SystemAgent = {
  id: SystemAgentId;
  name: string;
  description: string;
  systemPrompt: string;
  model: typeof DEFAULT_MODEL;
  temperature: number;
  maxOutputTokens: number;
};