const endpoint = import.meta.env.VITE_APPS_SCRIPT_ENDPOINT?.trim();
const source = "Game Roleta Regenesis";
const event = "CBA";

export type LeadPayload = {
  participationId: string;
  timestamp: string;
  name: string;
  whatsapp: string;
  consent: boolean;
  source: typeof source;
  event: typeof event;
};

export type ResultPayload = {
  participationId: string;
  challengeNumber: number;
  difficulty: string;
  question: string;
  selectedAnswer: string;
  correctAnswer: string;
  result: "ACERTOU" | "ERROU";
};

type EndpointPayload = ({ action: "lead" } & LeadPayload) | ({ action: "result" } & ResultPayload);

const pending = new Map<string, EndpointPayload>();

export const createParticipationId = () =>
  typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `cba-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

async function send(payload: EndpointPayload) {
  if (!endpoint) return false;
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 6500);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return response.ok;
  } catch {
    return false;
  } finally {
    window.clearTimeout(timer);
  }
}

async function sendWithRetry(payload: EndpointPayload) {
  pending.set(`${payload.action}:${payload.participationId}`, payload);
  for (let attempt = 0; attempt < 2; attempt += 1) {
    if (await send(payload)) {
      pending.delete(`${payload.action}:${payload.participationId}`);
      return true;
    }
    await new Promise((resolve) => window.setTimeout(resolve, 900));
  }
  return false;
}

export const registerLead = (lead: LeadPayload) => void sendWithRetry({ action: "lead", ...lead });
export const registerResult = (result: ResultPayload) => void sendWithRetry({ action: "result", ...result });
export const retryPendingLeads = () => pending.forEach((payload) => void sendWithRetry(payload));
export const leadDefaults = { source, event } as const;
