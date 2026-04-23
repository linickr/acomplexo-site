"use client";
import { useResponsive } from "@/hooks/useResponsive";

export default function Manifesto() {
  const { isMobile } = useResponsive();
  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "100px 48px", borderBottom: "var(--rule)", backgroundColor: "var(--black)", color: "var(--white)" },
    inner: { maxWidth: "900px", margin: "0 auto", textAlign: "center" },
    label: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "48px", display: "block" },
    headline: { fontFamily: "var(--serif)", fontSize: "clamp(28px, 4vw, 60px)", fontWeight: "400", fontStyle: "italic", lineHeight: "1.3", color: "var(--white)", marginBottom: "48px" },
    rule: { width: "60px", height: "1px", backgroundColor: "var(--gray-400)", margin: "0 auto 48px", border: "none" },
    body: { fontFamily: "var(--body-serif)", fontSize: isMobile ? "17px" : "19px", lineHeight: "1.8", color: "var(--gray-200)", maxWidth: "680px", margin: "0 auto" },
  };
  return (
    <section style={styles.section}>
      <div style={styles.inner}>
        <span style={styles.label}>Manifesto</span>
        <h2 style={styles.headline}>O mercado digital não espera por quem ainda está tentando descobrir como funciona.</h2>
        <hr style={styles.rule} />
        <p style={styles.body}>Profissionais que levaram anos construindo expertise não deveriam perder mais tempo aprendendo a editar vídeo, escrever copy ou montar um funil. Esse é o nosso trabalho. O seu é aparecer, entregar e lucrar.</p>
      </div>
    </section>
  );
}
