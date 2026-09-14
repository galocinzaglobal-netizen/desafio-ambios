import { motion } from "framer-motion";
import type { HelpKind, Helps } from "../types/game";

const helpItems: { kind: HelpKind; icon: string; name: string; description: string }[] = [
  { kind: "technical", icon: "⌬", name: "VISÃO TÉCNICA", description: "elimina 2" },
  { kind: "field", icon: "◒", name: "OLHAR DO CAMPO", description: "dica prática" },
  { kind: "regenesis", icon: "✦", name: "REGENESIS", description: "visão sistêmica" },
];
export function HelpBar({ helps, onUse, locked }: { helps: Helps; onUse: (kind: HelpKind) => void; locked: boolean }) {
  return <div className="help-bar">{helpItems.map((help) => <motion.button key={help.kind} className={`help-button ${helps[help.kind] ? "used" : ""}`} disabled={helps[help.kind] || locked} onClick={() => onUse(help.kind)} whileHover={!helps[help.kind] ? { y: -2 } : {}} whileTap={{ scale: .96 }}>
    <b>{help.icon}</b><span>{help.name}<small>{helps[help.kind] ? "UTILIZADA" : help.description}</small></span>
  </motion.button>)}</div>;
}
