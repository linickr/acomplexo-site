"use client";
import { useResponsive } from "@/hooks/useResponsive";

const testimonials = [
  { quote: "Em 60 dias fui de zero presença digital para um curso com 80 alunos e lista de espera. Não tocei em nada técnico.", name: "Dra. Renata Souza", role: "Nutricionista Funcional" },
  { quote: "A AComplexo montou tudo que eu tentei fazer sozinho por dois anos — em seis semanas. É um investimento, não um custo.", name: "Marcos Alves", role: "Consultor Financeiro" },
  { quote: "Meu portal virou referência no nicho. Clientes chegam já sabendo quem sou. A autoridade foi construída para mim.", name: "Juliana Torres", role: "Coach Executiva" },
];

export default function Proof() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";
  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "80px 48px", borderBottom: "var(--rule)" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "3px solid var(--black)", paddingBottom: "12px", flexWrap: "wrap", gap: "8px" },
    sectionTitle: { fontFamily: "var(--serif)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" },
    sectionTag: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" },
    grid: { display: "grid", gridTemplateColumns: cols, borderLeft: "var(--rule)" },
    card: { borderRight: "var(--rule)", borderBottom: "var(--rule)", padding: isMobile ? "32px 24px" : "40px 32px" },
    openQuote: { fontFamily: "var(--serif)", fontSize: "64px", lineHeight: "0.6", color: "var(--gray-200)", marginBottom: "20px", display: "block" },
    quote: { fontFamily: "var(--serif)", fontSize: "18px", fontStyle: "italic", lineHeight: "1.6", marginBottom: "28px" },
    name: { fontFamily: "var(--sub-serif)", fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "4px" },
    role: { fontFamily: "var(--sub-serif)", fontSize: "11px", color: "var(--gray-400)", letterSpacing: "0.05em" },
  };
  return (
    <section id="resultados" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionTitle}>Resultados</span>
        <span style={styles.sectionTag}>O que nossos clientes dizem</span>
      </div>
      <div style={styles.grid}>
        {testimonials.map((t) => (
          <div key={t.name} style={styles.card}>
            <span style={styles.openQuote}>&ldquo;</span>
            <p style={styles.quote}>{t.quote}</p>
            <div style={styles.name}>{t.name}</div>
            <div style={styles.role}>{t.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
