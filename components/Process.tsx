"use client";
import { useResponsive } from "@/hooks/useResponsive";

const steps = [
  { n: "I", title: "Imersão", text: "Mergulhamos na sua história, nicho, expertise e público. Entendemos o que você sabe, quem você quer alcançar e quanto quer ganhar." },
  { n: "II", title: "Arquitetura", text: "Montamos a estrutura completa — do posicionamento ao funil, do curso ao calendário de conteúdo. Tudo conectado, nada isolado." },
  { n: "III", title: "Produção", text: "Nossa equipe produz cada entregável: roteiros, textos, layouts, páginas. Você revisa, aprova e ajusta até estar perfeito." },
  { n: "IV", title: "Lançamento", text: "Você entra no ar com tudo pronto. Site no ar, curso estruturado, redes com calendário e funil de vendas ativo." },
];

export default function Process() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)";
  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "80px 48px", borderBottom: "var(--rule)", backgroundColor: "var(--gray-100)" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "3px solid var(--black)", paddingBottom: "12px", flexWrap: "wrap", gap: "8px" },
    sectionTitle: { fontFamily: "var(--serif)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" },
    sectionTag: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" },
    grid: { display: "grid", gridTemplateColumns: cols, borderLeft: "var(--rule)" },
    step: { borderRight: "var(--rule)", borderBottom: "var(--rule)", padding: isMobile ? "32px 24px" : "40px 32px" },
    roman: { fontFamily: "var(--serif)", fontSize: "48px", fontWeight: "400", fontStyle: "italic", color: "var(--gray-200)", lineHeight: "1", marginBottom: "16px" },
    title: { fontFamily: "var(--serif)", fontSize: "20px", fontWeight: "700", marginBottom: "16px" },
    text: { fontFamily: "var(--body-serif)", fontSize: "15px", lineHeight: "1.7", color: "var(--gray-600)" },
  };
  return (
    <section id="processo" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionTitle}>O Método</span>
        <span style={styles.sectionTag}>Do zero ao ar</span>
      </div>
      <div style={styles.grid}>
        {steps.map((s) => (
          <div key={s.n} style={styles.step}>
            <div style={styles.roman}>{s.n}</div>
            <h3 style={styles.title}>{s.title}</h3>
            <p style={styles.text}>{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
