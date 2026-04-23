"use client";
import { useRouter } from "next/navigation";
import { useResponsive } from "@/hooks/useResponsive";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Post } from "@/data/posts";

interface Props {
  post: Post;
  allPosts: Post[];
}

export default function BlogPostClient({ post, allPosts }: Props) {
  const router = useRouter();
  const { isMobile } = useResponsive();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Organization", name: "AComplexo" },
    publisher: { "@type": "Organization", name: "AComplexo", url: "https://acomplexo.com.br" },
    datePublished: post.date,
    url: `https://acomplexo.com.br/blog/${post.slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header />
      <main style={{ padding: isMobile ? "110px 24px 80px" : "160px 48px 120px", maxWidth: "1200px", margin: "0 auto" }}>
        {/* Breadcrumb */}
        <div style={{ marginBottom: "48px", borderBottom: "var(--rule)", paddingBottom: "16px", display: "flex", alignItems: "center", gap: "12px" }}>
          <span onClick={() => router.push("/")} style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-400)", cursor: "pointer" }}>Editorial</span>
          <span style={{ color: "var(--gray-400)", fontSize: "11px" }}>→</span>
          <span style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-600)" }}>{post.category}</span>
        </div>

        {/* Header do post */}
        <div style={{ maxWidth: "760px", marginBottom: isMobile ? "48px" : "80px" }}>
          <span style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gray-400)", display: "block", marginBottom: "20px" }}>{post.category}</span>
          <h1 style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "clamp(28px, 6vw, 40px)" : "clamp(36px, 4vw, 56px)", fontWeight: "900", lineHeight: "1.1", letterSpacing: "-0.02em", marginBottom: "20px" }}>{post.title}</h1>
          <p style={{ fontFamily: "var(--body-serif)", fontSize: isMobile ? "17px" : "20px", lineHeight: "1.6", color: "var(--gray-600)", marginBottom: "32px" }}>{post.subtitle}</p>
          <div style={{ display: "flex", alignItems: "center", gap: "20px", borderTop: "var(--rule)", paddingTop: "20px", flexWrap: "wrap" }}>
            {[post.author, post.date, `${post.readTime} de leitura`].map((item, i) => (
              <span key={i} style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-400)" }}>{item}</span>
            ))}
          </div>
        </div>

        {/* Conteúdo + Sidebar */}
        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 280px", gap: isMobile ? "48px" : "80px", alignItems: "start" }}>
          <article>
            {post.content.map((block, i) => {
              if (block.type === "paragraph") return <p key={i} style={{ fontFamily: "var(--body-serif)", fontSize: isMobile ? "17px" : "19px", lineHeight: "1.85", color: "var(--gray-600)", marginBottom: "28px" }}>{block.text}</p>;
              if (block.type === "heading") return <h2 key={i} style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "22px" : "26px", fontWeight: "700", lineHeight: "1.25", marginBottom: "20px", marginTop: "48px", borderTop: "var(--rule)", paddingTop: "32px" }}>{block.text}</h2>;
              if (block.type === "list") return (
                <ul key={i} style={{ listStyle: "none", marginBottom: "28px", borderTop: "var(--rule-light)" }}>
                  {block.items?.map((item, j) => (
                    <li key={j} style={{ fontFamily: "var(--body-serif)", fontSize: isMobile ? "16px" : "18px", lineHeight: "1.7", color: "var(--gray-600)", padding: "14px 0", borderBottom: "var(--rule-light)", display: "flex", gap: "16px" }}>
                      <span style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", color: "var(--gray-400)", minWidth: "20px", paddingTop: "4px" }}>{j + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              );
              return null;
            })}
          </article>

          {!isMobile && (
            <aside style={{ position: "sticky", top: "120px" }}>
              <div style={{ borderTop: "3px solid var(--black)", paddingTop: "24px", marginBottom: "40px" }}>
                <span style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-400)", display: "block", marginBottom: "20px" }}>Mais artigos</span>
                {allPosts.filter((p) => p.id !== post.id).slice(0, 3).map((p) => (
                  <div key={p.id} onClick={() => router.push(`/blog/${p.slug}`)} style={{ borderBottom: "var(--rule-light)", paddingBottom: "16px", marginBottom: "16px", cursor: "pointer" }}>
                    <span style={{ fontFamily: "var(--sub-serif)", fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-400)", display: "block", marginBottom: "6px" }}>{p.category}</span>
                    <p style={{ fontFamily: "var(--serif)", fontSize: "15px", fontWeight: "700", lineHeight: "1.3" }}>{p.title}</p>
                  </div>
                ))}
              </div>
              <div style={{ backgroundColor: "var(--black)", padding: "32px", color: "var(--white)" }}>
                <p style={{ fontFamily: "var(--serif)", fontSize: "18px", fontStyle: "italic", lineHeight: "1.4", marginBottom: "20px" }}>Pronto para monetizar sua expertise?</p>
                <button onClick={() => { router.push("/"); setTimeout(() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }), 200); }} style={{ width: "100%", backgroundColor: "var(--white)", color: "var(--black)", border: "none", padding: "14px", fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>Fale com a gente →</button>
              </div>
            </aside>
          )}
        </div>

        {isMobile && (
          <div style={{ backgroundColor: "var(--black)", padding: "32px", color: "var(--white)", marginTop: "48px" }}>
            <p style={{ fontFamily: "var(--serif)", fontSize: "20px", fontStyle: "italic", lineHeight: "1.4", marginBottom: "20px" }}>Pronto para monetizar sua expertise?</p>
            <button onClick={() => { router.push("/"); setTimeout(() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" }), 200); }} style={{ width: "100%", backgroundColor: "var(--white)", color: "var(--black)", border: "none", padding: "16px", fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", cursor: "pointer" }}>Fale com a gente →</button>
          </div>
        )}

        <div style={{ marginTop: "80px", borderTop: "var(--rule)", paddingTop: "32px" }}>
          <span onClick={() => router.push("/")} style={{ fontFamily: "var(--sub-serif)", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--gray-600)", cursor: "pointer", borderBottom: "1px solid var(--gray-600)", paddingBottom: "2px" }}>← Voltar ao editorial</span>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
