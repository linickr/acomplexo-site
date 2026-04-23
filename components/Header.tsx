"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";

const styles: Record<string, React.CSSProperties> = {
  wrapper: { position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "var(--white)", borderBottom: "var(--rule)" },
  topBar: { borderBottom: "var(--rule)", padding: "6px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" },
  topBarText: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-600)" },
  main: { padding: "0 48px", display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", height: "72px" },
  mainMobile: { padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center", height: "64px" },
  nav: { display: "flex", gap: "32px", alignItems: "center" },
  navLink: { fontFamily: "var(--sub-serif)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-600)", cursor: "pointer" },
  logoWrapper: { display: "flex", flexDirection: "column", alignItems: "center", gap: "2px" },
  logo: { fontFamily: "var(--serif)", fontSize: "28px", fontWeight: "900", letterSpacing: "-0.02em", textAlign: "center", textTransform: "uppercase", color: "var(--gray-600)" },
  logoMobile: { fontFamily: "var(--serif)", fontSize: "22px", fontWeight: "900", letterSpacing: "-0.02em", textTransform: "uppercase", color: "var(--gray-600)" },
  logoAccent: { fontStyle: "italic", fontWeight: "400" },
  slogan: { fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-600)" },
  navRight: { display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "24px" },
  cta: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", backgroundColor: "var(--black)", color: "var(--white)", padding: "10px 20px", cursor: "pointer", border: "none" },
  hamburger: { cursor: "pointer", display: "flex", flexDirection: "column", gap: "5px", padding: "4px", background: "none", border: "none" },
  hamburgerLine: { width: "22px", height: "1px", backgroundColor: "var(--black)", display: "block" },
  mobileMenu: { backgroundColor: "var(--white)", borderTop: "var(--rule)" },
  mobileMenuLink: { display: "block", padding: "16px 24px", borderBottom: "var(--rule)", fontFamily: "var(--sub-serif)", fontSize: "12px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-600)", cursor: "pointer" },
  mobileMenuCta: { display: "block", margin: "16px 24px", textAlign: "center", backgroundColor: "var(--black)", color: "var(--white)", padding: "14px", fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer", border: "none", width: "calc(100% - 48px)" },
};

function getDate() {
  return new Date().toLocaleDateString("pt-BR", { weekday: "long", year: "numeric", month: "long", day: "numeric" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isMobile } = useResponsive();
  const router = useRouter();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const goHome = () => router.push("/");

  return (
    <header style={{ ...styles.wrapper, boxShadow: scrolled ? "0 2px 16px rgba(0,0,0,0.06)" : "none" }}>
      {!isMobile && (
        <div style={styles.topBar}>
          <span style={styles.topBarText}>{getDate()}</span>
          <span style={styles.topBarText}>Conteúdo · Estratégia · Monetização</span>
        </div>
      )}
      {isMobile ? (
        <>
          <div style={styles.mainMobile}>
            <div style={{ ...styles.logoWrapper, cursor: "pointer" }} onClick={goHome}>
              <div style={styles.logoMobile}>A<span style={styles.logoAccent}>Complexo</span></div>
            </div>
            <button style={styles.hamburger} onClick={() => setMenuOpen((o) => !o)} aria-label="Menu">
              <span style={styles.hamburgerLine} /><span style={styles.hamburgerLine} /><span style={styles.hamburgerLine} />
            </button>
          </div>
          {menuOpen && (
            <div style={styles.mobileMenu}>
              <span style={styles.mobileMenuLink} onClick={() => scrollTo("servicos")}>Serviços</span>
              <span style={styles.mobileMenuLink} onClick={() => scrollTo("processo")}>Processo</span>
              <span style={styles.mobileMenuLink} onClick={() => scrollTo("resultados")}>Resultados</span>
              <span style={styles.mobileMenuLink} onClick={() => scrollTo("contato")}>Contato</span>
              <button style={styles.mobileMenuCta} onClick={() => scrollTo("contato")}>Começar →</button>
            </div>
          )}
        </>
      ) : (
        <div style={styles.main}>
          <nav style={styles.nav}>
            <span style={styles.navLink} onClick={() => scrollTo("servicos")}>Serviços</span>
            <span style={styles.navLink} onClick={() => scrollTo("processo")}>Processo</span>
            <span style={styles.navLink} onClick={() => scrollTo("resultados")}>Resultados</span>
          </nav>
          <div style={{ ...styles.logoWrapper, cursor: "pointer" }} onClick={goHome}>
            <div style={styles.logo}>A<span style={styles.logoAccent}>Complexo</span></div>
            <span style={styles.slogan}>Monetize seu talento</span>
          </div>
          <div style={styles.navRight}>
            <span style={styles.navLink} onClick={() => scrollTo("contato")}>Contato</span>
            <button style={styles.cta} onClick={() => scrollTo("contato")}>Começar</button>
          </div>
        </div>
      )}
    </header>
  );
}
