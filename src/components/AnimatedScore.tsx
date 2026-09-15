import { animate, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { formatScore } from "../utils/game";
export function AnimatedScore({ score }: { score: number }) { const [value, setValue] = useState(0); useEffect(() => { const controls = animate(0, score, { duration: 1.35, ease: "easeOut", onUpdate: (latest) => setValue(Math.round(latest)) }); return () => controls.stop(); }, [score]); return <motion.strong className="animated-score" initial={{ opacity: 0, scale: .78 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 180, damping: 14 }}>{formatScore(value)} <small>PTS</small></motion.strong>; }
