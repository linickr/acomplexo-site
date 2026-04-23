"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { posts } from "@/data/posts";
import { useResponsive } from "@/hooks/useResponsive";

export default function Blog() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { isMobile, isTablet } = useResponsive();
  const router = useRouter();

  const featured = posts[0];
  const sidePosts = posts.slice(1, 3);
  const gridPosts = posts.slice(3);
  const gridCols = isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)";
  const goTo = (slug: string) => router.push(`/blog/${slug}`);

  const styles: Record<string, React.CSSProperties> = {
    section: { padding: isMobile ? "60px 24px" : "80px 48px", borderBottom: "var(--rule)" },
    header: { display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "3px solid var(--black)", paddingBottom: "12px", flexWrap: "wrap", gap: "8px" },
    sectionTitle: { fontFamily: "var(--serif)", fontSize: "13px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em" },
    sectionTag: { fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" },
    featured: { display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", borderLeft: "var(--rule)", borderRight: "var(--rule)", borderBottom: "var(--rule)" },
    featuredMain: { borderRight: isMobile ? "none" : "var(--rule)", borderBottom: isMobile ? "var(--rule)" : "none", padding: isMobile ? "32px 24px" : "40px", cursor: "pointer" },
    featuredSide: { display: "flex", flexDirection: "column" },
    featuredSideItem: { padding: isMobile ? "24px" : "28px 32px", borderBottom: "var(--rule)", flex: 1, cursor: "pointer" },
    grid: { display: "grid", gridTemplateColumns: gridCols, borderLeft: "var(--rule)", borderRight: "var(--rule)" },
    card: { borderRight: "var(--rule)", borderBottom: "var(--rule)", padding: isMobile ? "24px" : "32px", cursor: "pointer" },
    category: { fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-400)", marginBottom: "12px", display: "block" },
    featuredTitle: { fontFamily: "var(--serif)", fontSize: isMobile ? "24px" : "32px", fontWeight: "700", lineHeight: "1.15", letterSpacing: "-0.01em", marginBottom: "12px" },
    featuredSubtitle: { fontFamily: "var(--body-serif)", fontSize: "17px", lineHeight: "1.6", color: "var(--gray-600)", marginBottom: "20px" },
    excerpt: { fontFamily: "var(--body-serif)", fontSize: "15px", lineHeight: "1.7", color: "var(--gray-600)", marginBottom: "24px" },
    meta: { fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)", display: "flex", gap: "16px" },
    cardTitle: { fontFamily: "var(--serif)", fontSize: "18px", fontWeight: "700", lineHeight: "1.25", marginBottom: "8px" },
    cardSubtitle: { fontFamily: "var(--body-serif)", fontSize: "14px", lineHeight: "1.6", color: "var(--gray-600)", marginBottom: "16px" },
    sideTitle: { fontFamily: "var(--serif)", fontSize: "20px", fontWeight: "700", lineHeight: "1.2", marginBottom: "8px" },
    sideSubtitle: { fontFamily: "var(--body-serif)", fontSize: "14px", lineHeight: "1.6", color: "var(--gray-600)", marginBottom: "12px" },
    readMore: { fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--black)", borderBottom: "1px solid var(--black)", paddingBottom: "2px", cursor: "pointer", display: "inline-block" },
  };

  return (
    <section id="blog" style={styles.section}>
      <div style={styles.header}>
        <span style={styles.sectionTitle}>Editorial</span>
        <span style={styles.sectionTag}>Conteúdo · Estratégia · Monetização</span>
      </div>
      <div style={styles.featured}>
        <div style={styles.featuredMain} onClick={() => goTo(featured.slug)}>
          <span style={styles.category}>{featured.category}</span>
          <h2 style={{ ...styles.featuredTitle, textDecoration: hoveredId === featured.id ? "underline" : "none" }} onMouseEnter={() => setHoveredId(featured.id)} onMouseLeave={() => setHoveredId(null)}>{featured.title}</h2>
          <p style={styles.featuredSubtitle}>{featured.subtitle}</p>
          <p style={styles.excerpt}>{featured.excerpt}</p>
          <div style={styles.meta}><span>{featured.date}</span><span>·</span><span>{featured.readTime} de leitura</span></div>
        </div>
        <div style={styles.featuredSide}>
          {sidePosts.map((post) => (
            <div key={post.id} style={styles.featuredSideItem} onClick={() => goTo(post.slug)}>
              <span style={styles.category}>{post.category}</span>
              <h3 style={{ ...styles.sideTitle, textDecoration: hoveredId === post.id ? "underline" : "none" }} onMouseEnter={() => setHoveredId(post.id)} onMouseLeave={() => setHoveredId(null)}>{post.title}</h3>
              <p style={styles.sideSubtitle}>{post.subtitle}</p>
              <div style={styles.meta}><span>{post.date}</span><span>·</span><span>{post.readTime} de leitura</span></div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.grid}>
        {gridPosts.map((post) => (
          <div key={post.id} style={styles.card} onClick={() => goTo(post.slug)}>
            <span style={styles.category}>{post.category}</span>
            <h3 style={{ ...styles.cardTitle, textDecoration: hoveredId === post.id ? "underline" : "none" }} onMouseEnter={() => setHoveredId(post.id)} onMouseLeave={() => setHoveredId(null)}>{post.title}</h3>
            <p style={styles.cardSubtitle}>{post.subtitle}</p>
            <div style={{ ...styles.meta, marginBottom: "20px" }}><span>{post.date}</span><span>·</span><span>{post.readTime} de leitura</span></div>
            <span style={styles.readMore}>Ler artigo →</span>
          </div>
        ))}
      </div>
    </section>
  );
}
