export function AmbiosMark({ compact = false }: { compact?: boolean }) {
  return <div className={`ambios-mark ${compact ? "compact" : ""}`} aria-label="Ambios">
    <span className="mark-orbit"><i /></span><span className="mark-word">AMBIOS</span>
  </div>;
}
