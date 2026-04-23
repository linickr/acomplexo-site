"use client";
import { useResponsive } from "@/hooks/useResponsive";

const services = [
  { number: "01", title: "Planejamento de Redes Sociais", subtitle: "Estratégia Editorial Completa", description: "Calendário editorial mensal, pautas, roteiros e diretrizes visuais. Você sabe exatamente o que postar, quando postar e por quê — sem improvisar.", items: ["Calendário 30 dias", "Roteiros de Reels", "Diretrizes de identidade", "Métricas de acompanhamento"] },
  { number: "02", title: "Estrutura do Curso Online", subtitle: "Da ideia à aula pronta", description: "Criamos a arquitetura completa do seu curso — módulos, aulas, materiais de apoio e metodologia. Você só grava.", items: ["Estrutura curricular", "Roteiros de aula", "Materiais de apoio", "Precificação estratégica"] },
  { number: "03", title: "Site Portal Personalizado", subtitle: "Sua casa no digital", description: "Um portal que posiciona sua autoridade, centraliza seu conteúdo e converte visitantes em clientes. Feito sob medida para o seu nicho.", items: ["Design exclusivo", "Blog de conteúdo", "Integração com curso", "Otimizado para SEO"] },
  { number: "04", title: "Funil de Vendas e Marketing", subtitle: "Sistema de monetização", description: "Planejamento completo de lançamento, sequências de e-mail, páginas de venda e estratégia de tráfego para o seu produto digital.", items: ["Página de vendas", "Sequência de e-mails", "Estratégia de lançamento", "Copy persuasivo"] },
];

export default function Services() {
  const { isMobile, isTablet } = useResponsive();
  const cols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)";
  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "80px 48px", borderBottom: "var(--rule)" },
    sectionHeader: { display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "3px solid var(--black)", paddingBottom: "12px", flexWrap: "wrap", gap: "8px" },
    sectionTitle: { fontFamily: "var(--serif)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" },
    sectionTag: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" },
    grid: { display: "grid", gridTemplateColumns: cols, borderLeft: "var(--rule)" },
    card: { borderRight: "var(--rule)", borderBottom: "var(--rule)", padding: isMobile ? "32px 24px" : "40px 32px" },
    number: { fontFamily: "var(--serif)", fontSize: "11px", letterSpacing: "0.15em", color: "var(--gray-400)", marginBottom: "24px", display: "block" },
    cardTitle: { fontFamily: "var(--serif)", fontSize: "22px", fontWeight: "700", lineHeight: "1.2", marginBottom: "6px" },
    cardSubtitle: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "20px", display: "block" },
    divider: { width: "32px", height: "1px", backgroundColor: "var(--black)", marginBottom: "20px" },
    description: { fontFamily: "var(--body-serif)", fontSize: "15px", lineHeight: "1.7", color: "var(--gray-600)", marginBottom: "28px" },
    list: { listStyle: "none" },
    listItem: { fontFamily: "var(--sub-serif)", fontSize: "12px", letterSpacing: "0.05em", color: "var(--gray-600)", padding: "6px 0", borderTop: "var(--rule-light)", display: "flex", alignItems: "center", gap: "8px" },
  };
  return (
    <section id="servicos" style={styles.section}>
      <div style={styles.sectionHeader}>
        <span style={styles.sectionTitle}>O Pacote AComplexo</span>
        <span style={styles.sectionTag}>4 Entregáveis · 1 Ecossistema</span>
      </div>
      <div style={styles.grid}>
        {services.map((s) => (
          <div key={s.number} style={styles.card}>
            <span style={styles.number}>{s.number}</span>
            <h3 style={styles.cardTitle}>{s.title}</h3>
            <span style={styles.cardSubtitle}>{s.subtitle}</span>
            <div style={styles.divider}></div>
            <p style={styles.description}>{s.description}</p>
            <ul style={styles.list}>
              {s.items.map((item) => (
                <li key={item} style={styles.listItem}><span style={{ fontSize: "10px" }}>◆</span>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
