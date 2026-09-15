import { motion } from "framer-motion";
import type { HelpKind, Helps } from "../types/game";

const helpItems: { kind: HelpKind; icon: string; name: string; description: string }[] = [
  { kind: "technical", icon: "⌬", name: "VISÃO TÉCNICA", description: "elimina 2" },
  { kind: "field", icon: "◒", name: "OLHAR DO CAMPO", description: "dica prática" },
  { kind: "regenesis", icon: "✦", name: "REGENESIS", description: "visão sistêmica" },
];
export function HelpBar({ helps, onUse, locked }: { helps: Helps; onUse: (kind: HelpKind) => void; locked: boolean }) {
  const available = helpItems.filter((help) => !helps[help.kind]);
  if (!available.length) return null;
  return <div className="help-bar">{available.map((help) => <motion.button key={help.kind} className="help-button" disabled={locked} onClick={() => onUse(help.kind)} whileHover={{ y: -2 }} whileTap={{ scale: .96 }}>
    <b>{help.icon}</b><span>{help.name}<small>{help.description}</small></span>
  </motion.button>)}</div>;
}
