"use client";
import { useRouter } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";

export default function Footer() {
  const { isMobile } = useResponsive();
  const router = useRouter();

  const styles: Record<string, React.CSSProperties> = {
    footer: { padding: isMobile ? "32px 24px" : "40px 48px", borderTop: "var(--rule)", display: isMobile ? "flex" : "grid", flexDirection: "column", alignItems: "center", gridTemplateColumns: "1fr auto 1fr", gap: isMobile ? "16px" : undefined, backgroundColor: "var(--white)", textAlign: isMobile ? "center" : undefined },
    left: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--gray-400)", textAlign: isMobile ? "center" : undefined },
    logo: { fontFamily: "var(--serif)", fontSize: "20px", fontWeight: "900", letterSpacing: "-0.02em", textAlign: "center", color: "var(--gray-600)", cursor: "pointer" },
    italic: { fontStyle: "italic", fontWeight: "400" },
    right: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--gray-400)", textAlign: isMobile ? "center" : "right" },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.logo} onClick={() => router.push("/")}>A<span style={styles.italic}>Complexo</span></div>
      <div style={styles.left}>© {new Date().getFullYear()} AComplexo. Todos os direitos reservados.</div>
      <div style={styles.right}>contato@acomplexo.com.br</div>
    </footer>
  );
}
