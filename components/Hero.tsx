"use client";
import { useEffect, useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";

const words = ["construída", "planejada", "monetizada"];

function delay(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

function AnimatedWord() {
  const [displayed, setDisplayed] = useState("");
  const [cursor, setCursor] = useState(true);

  useEffect(() => {
    const blink = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(blink);
  }, []);

  useEffect(() => {
    let alive = true;
    const type = async (word: string) => {
      for (let i = 1; i <= word.length; i++) {
        if (!alive) return;
        setDisplayed(word.slice(0, i));
        await delay(90);
      }
    };
    const erase = async (word: string) => {
      for (let i = word.length - 1; i >= 0; i--) {
        if (!alive) return;
        setDisplayed(word.slice(0, i));
        await delay(55);
      }
    };
    (async () => {
      while (alive) {
        for (let i = 0; i < words.length; i++) {
          await type(words[i]);
          if (!alive) return;
          await delay(2200);
          if (!alive) return;
          await erase(words[i]);
          if (!alive) return;
          await delay(180);
        }
      }
    })();
    return () => { alive = false; };
  }, []);

  return (
    <span style={{ fontStyle: "italic", fontWeight: "400", display: "inline-block" }}>
      {displayed}
      <span style={{ opacity: cursor ? 1 : 0, fontStyle: "normal", fontWeight: "200", marginLeft: "3px", transition: "opacity 0.1s" }}>|</span>
    </span>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const { isMobile } = useResponsive();
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const pad = isMobile ? "120px 24px 60px" : "160px 48px 80px";

  const styles: Record<string, React.CSSProperties> = {
    section: { padding: pad, borderBottom: "var(--rule)" },
    eyebrow: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "24px", display: "flex", alignItems: "center", gap: "12px" },
    eyebrowLine: { width: "32px", height: "1px", backgroundColor: "var(--gray-400)", display: "inline-block" },
    grid: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", borderTop: "var(--rule)" },
    left: { borderRight: isMobile ? "none" : "var(--rule)", borderBottom: isMobile ? "var(--rule)" : "none", paddingRight: isMobile ? "0" : "48px", paddingTop: "40px", paddingBottom: "40px" },
    right: { paddingLeft: isMobile ? "0" : "48px", paddingTop: "40px", paddingBottom: "40px", display: "flex", flexDirection: "column", justifyContent: "space-between" },
    headline: { fontFamily: "var(--serif)", fontSize: "clamp(47px, 7.15vw, 109px)", fontWeight: "900", lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "32px", color: "var(--gray-600)" },
    subheadline: { fontFamily: "var(--body-serif)", fontSize: isMobile ? "17px" : "20px", lineHeight: "1.6", color: "var(--gray-600)", maxWidth: "480px", marginBottom: "48px" },
    statsRow: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", borderTop: "var(--rule)", paddingTop: "32px", gap: "24px" },
    stat: { fontFamily: "var(--serif)", fontSize: "42px", fontWeight: "700", letterSpacing: "-0.03em", lineHeight: "1", marginBottom: "4px", color: "var(--gray-600)" },
    statLabel: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" },
    pullQuote: { fontFamily: "var(--serif)", fontSize: isMobile ? "18px" : "22px", fontStyle: "italic", lineHeight: "1.5", color: "var(--gray-600)", borderLeft: "3px solid var(--black)", paddingLeft: "24px", marginBottom: "40px" },
    tagBadge: { display: "inline-flex", flexWrap: "wrap", gap: "8px", marginTop: "24px" },
    tag: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", border: "var(--rule)", padding: "6px 14px", color: "var(--gray-600)" },
    scrollHint: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-400)", display: "flex", alignItems: "center", gap: "8px", marginTop: "40px" },
  };

  return (
    <section style={styles.section}>
      <div style={{ ...styles.eyebrow, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(8px)", transition: "all 0.6s ease" }}>
        <span style={styles.eyebrowLine}></span>
        Agência de Conteúdo para Influenciadores e Profissionais Liberais
      </div>
      <div style={{ ...styles.grid, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "all 0.8s ease 0.2s" }}>
        <div style={styles.left}>
          <h1 style={styles.headline}>
            Sua autoridade<br />
            <AnimatedWord /><br />
            do zero
          </h1>
          <p style={styles.subheadline}>Do planejamento ao lucro — entregamos o ecossistema completo de conteúdo para quem quer monetizar sua expertise na internet.</p>
          <div style={styles.statsRow}>
            <div><div style={styles.stat}>100%</div><div style={styles.statLabel}>Feito para você</div></div>
            <div><div style={styles.stat}>4 em 1</div><div style={styles.statLabel}>Entregáveis</div></div>
            <div><div style={styles.stat}>∞</div><div style={styles.statLabel}>Potencial de escala</div></div>
          </div>
        </div>
        <div style={styles.right}>
          <div>
            <p style={styles.pullQuote}>&ldquo;Você tem conhecimento. Nós transformamos isso em um negócio digital completo.&rdquo;</p>
            <p style={{ fontFamily: "var(--body-serif)", color: "var(--gray-600)", lineHeight: 1.7 }}>A AComplexo existe para profissionais que sabem que têm algo a ensinar, mas não têm tempo, equipe ou estrutura para construir sozinhos. Nós montamos tudo — e você só aparece.</p>
          </div>
          <div>
            <div style={styles.tagBadge}>
              {["Redes Sociais", "Curso Online", "Site Portal", "Funil de Vendas"].map((t) => (
                <span key={t} style={styles.tag}>{t}</span>
              ))}
            </div>
            <div style={styles.scrollHint}><span>↓</span><span>Entenda o método</span></div>
          </div>
        </div>
      </div>
    </section>
  );
}
