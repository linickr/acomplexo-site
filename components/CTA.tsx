"use client";
import { useState } from "react";
import { useResponsive } from "@/hooks/useResponsive";

export default function CTA() {
  const [form, setForm] = useState({ nome: "", email: "", nicho: "", mensagem: "" });
  const [sent, setSent] = useState(false);
  const { isMobile } = useResponsive();
  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "100px 48px", borderBottom: "var(--rule)", backgroundColor: "var(--black)", color: "var(--white)" },
    inner: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: isMobile ? "48px" : "80px", alignItems: "start" },
    label: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "24px", display: "block" },
    headline: { fontFamily: "var(--serif)", fontSize: "clamp(32px, 3.5vw, 56px)", fontWeight: "700", lineHeight: "1.1", marginBottom: "24px" },
    italic: { fontStyle: "italic", fontWeight: "400" },
    body: { fontFamily: "var(--body-serif)", fontSize: "18px", lineHeight: "1.7", color: "var(--gray-200)", marginBottom: "40px" },
    checklist: { listStyle: "none", borderTop: "1px solid var(--gray-600)" },
    checkItem: { fontFamily: "var(--sub-serif)", fontSize: "13px", color: "var(--gray-200)", padding: "12px 0", borderBottom: "1px solid var(--gray-600)", display: "flex", alignItems: "center", gap: "12px" },
    formTitle: { fontFamily: "var(--serif)", fontSize: "24px", fontWeight: "700", marginBottom: "32px", color: "var(--white)" },
    field: { marginBottom: "16px" },
    fieldLabel: { fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-400)", display: "block", marginBottom: "6px" },
    input: { width: "100%", backgroundColor: "transparent", border: "none", borderBottom: "1px solid var(--gray-600)", color: "var(--white)", fontFamily: "var(--body-serif)", fontSize: "16px", padding: "10px 0", outline: "none" },
    textarea: { width: "100%", backgroundColor: "transparent", border: "none", borderBottom: "1px solid var(--gray-600)", color: "var(--white)", fontFamily: "var(--body-serif)", fontSize: "16px", padding: "10px 0", outline: "none", resize: "none", minHeight: "80px" },
    submit: { marginTop: "32px", width: "100%", backgroundColor: "var(--white)", color: "var(--black)", border: "none", padding: "18px 32px", fontFamily: "var(--sub-serif)", fontSize: "12px", letterSpacing: "0.15em", textTransform: "uppercase", cursor: "pointer" },
  };

  return (
    <section id="contato" style={styles.section}>
      <div style={styles.inner}>
        <div>
          <span style={styles.label}>Pronto para começar?</span>
          <h2 style={styles.headline}>Construa sua<br /><span style={styles.italic}>autoridade</span><br />agora.</h2>
          <p style={styles.body}>Entre em contato e descubra como A AComplexo pode transformar o seu conhecimento em um negócio digital sólido.</p>
          <ul style={styles.checklist}>
            {["Diagnóstico gratuito da sua presença digital", "Proposta personalizada para o seu nicho", "Sem compromisso, sem enrolação", "Resposta em até 24 horas"].map((item) => (
              <li key={item} style={styles.checkItem}><span>→</span>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          {sent ? (
            <div style={{ textAlign: "center", paddingTop: "80px" }}>
              <div style={{ fontFamily: "var(--serif)", fontSize: "48px", marginBottom: "16px" }}>✓</div>
              <p style={{ fontFamily: "var(--serif)", fontSize: "22px", fontStyle: "italic", color: "var(--white)" }}>Mensagem recebida.</p>
              <p style={{ fontFamily: "var(--body-serif)", color: "var(--gray-400)", marginTop: "12px" }}>Retornamos em até 24 horas.</p>
            </div>
          ) : (
            <>
              <div style={styles.formTitle}>Fale com a gente</div>
              <form onSubmit={submit}>
                <div style={styles.field}><label style={styles.fieldLabel}>Nome completo</label><input style={styles.input} name="nome" value={form.nome} onChange={handle} required /></div>
                <div style={styles.field}><label style={styles.fieldLabel}>E-mail</label><input style={styles.input} type="email" name="email" value={form.email} onChange={handle} required /></div>
                <div style={styles.field}><label style={styles.fieldLabel}>Seu nicho / profissão</label><input style={styles.input} name="nicho" value={form.nicho} onChange={handle} required /></div>
                <div style={styles.field}><label style={styles.fieldLabel}>O que você quer construir?</label><textarea style={styles.textarea} name="mensagem" value={form.mensagem} onChange={handle} /></div>
                <button type="submit" style={styles.submit}>Enviar mensagem →</button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
