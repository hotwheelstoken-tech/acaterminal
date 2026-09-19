export const BUY_URL = "https://argus.world";
export const X_URL = "https://x.com/ArcCodingAgent";

export const navItems = [
  { label: "Home", to: "/" },
  { label: "Agent", to: "/agent" },
  { label: "How It Works", to: "/#how-it-works" },
  { label: "Lore", to: "/lore" },
  { label: "Terminal", to: "/terminal" },
  { label: "Token", to: "/token" },
  { label: "Docs", to: "/docs" },
] as const;

export const flow = ["IDEA", "PROMPT", "ACA", "CODE", "CONTRACT", "DEPLOY", "ONCHAIN"];

export const faq = [
  ["What is ACA?", "ARC CODING AGENT explores an AI-native development interface where human intent moves toward code, contracts, applications, and onchain execution."],
  ["What does ACA stand for?", "ACA stands for ARC CODING AGENT."],
  ["Is ACA an official Arc or Circle product?", "No. ACA is an independent community project inspired by public Arc concepts and is not an official Circle or Arc product."],
  ["What is the relationship between ACA and Arc Studio?", "ACA is inspired by the public Onchain Coding Agent concept. It has no claimed affiliation, endorsement, partnership, or ownership relationship."],
  ["Where can I buy ACA?", "The project directs visitors to Argus.World. Always verify information independently before taking action."],
  ["Where can I view the chart?", "The chart link directs visitors to Argus.World."],
  ["What is the contract address?", "COMING SOON. No contract address has been announced."],
  ["Is ACA live?", "The website and its terminal are conceptual frontend experiences. Token and onchain status information is not announced unless explicitly shown."],
] as const;

export const terminalResponses: Record<string, string[]> = {
  help: ["AVAILABLE COMMANDS", "help  status  identify  agent  network", "about  architecture  build  deploy  token  lore  clear"],
  status: ["ACA CORE", "STATUS: ONLINE", "MODE: AUTONOMOUS", "NETWORK: ARC", "EXECUTION: ONCHAIN CONCEPT"],
  boot: ["INITIALIZING ACA CORE...", "AGENT ONLINE.", "ALL SIMULATION SYSTEMS READY."],
  identify: ["ACA CORE", "ARC CODING AGENT", "VERSION 1.0", "STATUS ONLINE"],
  agent: ["INTENT ENGINE: READY", "CODE ENGINE: READY", "CONTRACT ENGINE: READY"],
  network: ["NETWORK: ARC", "CONNECTION: SIMULATED"],
  about: ["ARC CODING AGENT", "FROM PROMPT TO ONCHAIN.", "INDEPENDENT COMMUNITY PROJECT."],
  architecture: ["INTENT → AGENT → CODE", "CONTRACT → APPLICATION → ONCHAIN"],
  build: ["ANALYZING INTENT...", "ARCHITECTURE READY.", "SIMULATION COMPLETE."],
  deploy: ["DEPLOYMENT SIMULATION ONLY.", "NO TRANSACTION CREATED OR SIGNED."],
  token: ["TOKEN: ACA", "CONTRACT: COMING SOON"],
  lore: ["FROM IDEA", "TO CODE", "TO ECONOMY."],
};