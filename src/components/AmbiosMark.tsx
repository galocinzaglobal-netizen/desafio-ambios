import ambiosNegative from "../assets/ambios-negative.svg";

export function AmbiosMark({ compact = false }: { compact?: boolean }) {
  return <div className={`ambios-mark ${compact ? "compact" : ""}`}><img src={ambiosNegative} alt="AMBIOS" /></div>;
}
