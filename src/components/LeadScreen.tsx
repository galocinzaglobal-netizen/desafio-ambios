import { type FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { AmbiosMark } from "./AmbiosMark";
import regenesisWordmark from "../assets/regenesis-wordmark-new.svg";
import marinDeep from "../assets/marin-deep.png";
import ingrow from "../assets/ingrow.png";
import marinPrime from "../assets/marin-prime.png";

export function LeadScreen({ onRestart }: { onRestart: () => void }) {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSent(true); };
  return <motion.main className="lead-screen" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}><AmbiosMark /><div className="lead-copy"><p className="eyebrow">VAMOS CULTIVAR ESSA CONVERSA</p><h1>Fique por dentro<br /><em>da AMBIOS</em></h1><p>Deixe seus dados para receber conteúdos, novidades e uma conversa com nosso time durante a feira.</p></div><section className="regenesis-showcase"><img className="lead-regenesis" src={regenesisWordmark} alt="Regenesis" /><div className="product-trio"><img src={marinDeep} alt="Marin Deep" /><img src={ingrow} alt="Ingrow" /><img src={marinPrime} alt="Marin Prime" /></div></section>{sent ? <div className="lead-success"><b>✓</b><h2>Cadastro recebido!</h2><p>Obrigado por se conectar com a AMBIOS.</p><button className="primary-button" onClick={onRestart}><span>NOVO DESAFIO</span><i>↻</i></button></div> : <form className="lead-form" onSubmit={submit}><label>NOME<input name="name" required autoComplete="name" placeholder="Como podemos te chamar?" /></label><label>WHATSAPP<input name="whatsapp" required inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" /></label><label className="consent"><input type="checkbox" required /><span>Concordo em receber contato da AMBIOS pelo WhatsApp.</span></label><button className="primary-button" type="submit"><span>QUERO RECEBER</span><i>→</i></button></form>}<p className="footer-note">AMBIOS · CIÊNCIA QUE REGENERA</p></motion.main>;
}
