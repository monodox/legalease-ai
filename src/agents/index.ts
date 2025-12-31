import type { SystemAgent, SystemAgentId } from "./types";
import { complianceAgent } from "./compliance.agent";
import { contractDraftingAgent } from "./contract-drafting.agent";
import { riskCheckAgent } from "./risk-check.agent";

export const AGENTS: SystemAgent[] = [
  complianceAgent,
  contractDraftingAgent,
  riskCheckAgent,
];

export function getAgentById(id: SystemAgentId): SystemAgent {
  const agent = AGENTS.find((a) => a.id === id);
  if (!agent) {
    // Should never happen because SystemAgentId is strict, but safe guard:
    return complianceAgent;
  }
  return agent;
}