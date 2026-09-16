import type { FormEvent, ReactNode } from "react";
import regenesis from "../assets/regenesis-wordmark-new.svg";
import marinDeep from "../assets/marin-deep.png";
import ingrow from "../assets/ingrow.png";
import marinPrime from "../assets/marin-prime.png";
import { useRouletteGame, type Participant } from "../hooks/useRouletteGame";

const levelName = (level: number) => level === 8 ? "DESAFIO REGENESIS" : level < 3 ? "MUITO FÁCIL" : level < 5 ? "FÁCIL" : level < 7 ? "MÉDIO" : "DIFÍCIL";
const footer = <p className="regenesis-footer">SOLO • RAÍZES • DESENVOLVIMENTO • LAVOURA</p>;

function GameHeader({ stage }: { stage: string }) {
  return <header className="regenesis-header"><span>AMBIOS / {stage}</span><button type="button" aria-label="Som desligado">SOM OFF&nbsp;⌁</button></header>;
}
function BrandSignature({ compact = false }: { compact?: boolean }) {
  return <div className={`brand-signature ${compact ? "compact" : ""}`}><small>PROTOCOLO DE PERFORMANCE AGRÍCOLA</small><img src={regenesis} alt="Regenesis" /><i /></div>;
}
function Screen({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <main className={`regenesis-screen ${className}`}>{children}</main>;
}

export function RouletteGame() {
  const game = useRouletteGame();
  if (game.screen === "opening") return <Screen className="opening-screen"><GameHeader stage="EXPERIÊNCIA" /><div className="opening-copy"><BrandSignature /><p className="step-label">ROLETA REGENESIS</p><h1>GIRE E DESCUBRA<br /><em>SEU DESAFIO.</em></h1><p>UM GIRO. UMA PERGUNTA. UM DESAFIO.</p></div><button className="regenesis-cta" onClick={() => game.setScreen("lead")}><span>PARTICIPAR</span><i>↗</i></button>{footer}</Screen>;
  if (game.screen === "lead") return <Lead onStart={game.start} />;
  if (game.screen === "wheel") return <Screen className="wheel-screen"><GameHeader stage="DESAFIO" /><div className="wheel-copy"><p className="step-label">ROLETA REGENESIS</p><h1>GIRE E DESCUBRA<br /><em>SEU DESAFIO.</em></h1><p>UM GIRO. UMA PERGUNTA. UM DESAFIO.</p></div><div className="roulette-assembly"><i className="wheel-pointer" aria-hidden="true" /><div className={`wheel ${game.spinning ? "spinning" : ""}`} style={{ transform: `rotate(${game.rotation}deg)` }}>{game.revealed && game.wheelNumber && <i className="wheel-selected" style={{ transform: `rotate(${(game.wheelNumber - 1) * 45}deg)` }} />}{Array.from({ length: 8 }, (_, index) => { const number = index + 1; const angle = index * 45 + 22.5; return <b key={number} className="segment" style={{ transform: `rotate(${angle}deg)` }}><span style={{ transform: `rotate(${-game.rotation - angle}deg)` }}>{String(number).padStart(2, "0")}</span></b>; })}<i className="wheel-hub" /></div></div><p className="spin-instruction">TOQUE PARA DESCOBRIR SEU DESAFIO</p><button className="regenesis-cta" disabled={game.spinning} onClick={game.spin}><span>{game.spinning ? "GIRANDO..." : "GIRAR ROLETA"}</span><i>↻</i></button>{footer}</Screen>;
  if (game.screen === "challengeReveal") return <Screen className={`reveal-screen ${game.wheelNumber === 8 ? "special" : ""}`}><GameHeader stage="DESAFIO" /><div className="reveal-copy">{game.wheelNumber === 8 ? <><p className="step-label">DESAFIO 08</p><h1>DESAFIO<br /><em>REGENESIS</em></h1><p>Prepare-se para o desafio máximo.</p></> : <><p className="step-label">SEU DESAFIO</p><strong>{String(game.wheelNumber).padStart(2, "0")}</strong><small>NÍVEL {levelName(game.wheelNumber!)}</small></>}</div><button className="regenesis-cta" onClick={() => game.setScreen("question")}><span>VER PERGUNTA</span><i>↗</i></button>{footer}</Screen>;
  if (game.screen === "question" && game.question) return <Screen className="regenesis-question"><GameHeader stage="DESAFIO" /><div className="question-head"><p className="step-label">DESAFIO {String(game.wheelNumber).padStart(2, "0")} / 08</p><small>NÍVEL {levelName(game.wheelNumber!)}</small></div><p className="question-kicker">SUA PERGUNTA</p><h1>{game.question.question}</h1><div className="answers">{game.question.answers.map((answer, index) => <button className={game.selected === index ? "answer selected" : "answer"} key={answer} onClick={() => game.setSelected(index)}><b>{"ABCD"[index]}</b><span>{answer}</span></button>)}</div><button className="regenesis-cta" disabled={game.selected === null} onClick={game.confirm}><span>RESPONDER</span><i>↗</i></button>{footer}</Screen>;
  return <Screen className={`result-screen ${game.result ? "win" : ""}`}><GameHeader stage="RESULTADO" /><BrandSignature compact /><div className="result-copy"><p className="step-label">DESAFIO CONCLUÍDO</p><h1>{game.result ? "ACERTOU!" : "QUASE!"}</h1><h2>{game.result ? "Boa! Você concluiu o Desafio Regenesis." : "Veja a resposta correta e siga regenerando conhecimento."}</h2>{!game.result && <p className="correct-answer"><b>RESPOSTA CORRETA</b>{game.question?.answers[game.question.correctAnswer]}</p>}<p className="explanation">{game.question?.explanation}</p></div><div className="result-products"><img src={marinDeep} alt="Marin Deep" /><img src={ingrow} alt="Ingrow" /><img src={marinPrime} alt="Marin Prime" /></div><button className="regenesis-cta" onClick={game.next}><span>PRÓXIMO PARTICIPANTE</span><i>↗</i></button>{footer}</Screen>;
}

function Lead({ onStart }: { onStart: (data: Participant) => void }) {
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); const data = new FormData(event.currentTarget); onStart({ name: String(data.get("name")), phone: String(data.get("phone")), email: "", consent: Boolean(data.get("consent")) }); };
  return <Screen className="lead-screen"><GameHeader stage="PARTICIPAÇÃO" /><div className="lead-copy"><p className="step-label">IDENTIFICAÇÃO</p><BrandSignature /><h1>PRONTO PARA<br />O DESAFIO?</h1></div><form onSubmit={submit}><label>NOME<input name="name" required placeholder="Seu nome" /></label><label>WHATSAPP<input name="phone" required inputMode="tel" placeholder="(00) 00000-0000" /></label><label className="consent"><input name="consent" required type="checkbox" /><span>Concordo em receber comunicações da Ambios pelo WhatsApp.</span></label><small className="privacy">Política de Privacidade — link técnico em preparação.</small><button className="regenesis-cta"><span>COMEÇAR</span><i>↗</i></button></form>{footer}</Screen>;
}
