import { Metadata } from "next";
import { notFound } from "next/navigation";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import BlogPostClient from "./BlogPostClient";

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  slug: string;
  excerpt?: string;
  coverUrl?: string;
  createdAt?: string;
}

interface Props {
  params: { slug: string };
}

async function getPost(slug: string): Promise<Post | null> {
  const q = query(collection(db, "posts"), where("slug", "==", slug), where("status", "==", "published"));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() } as Post;
}

async function getAllPosts(): Promise<Post[]> {
  const q = query(collection(db, "posts"), where("status", "==", "published"));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() })) as Post[];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt || "",
    openGraph: {
      title: post.title,
      description: post.excerpt || "",
      type: "article",
      url: `https://acomplexo.com.br/blog/${post.slug}`,
      siteName: "AComplexo",
      locale: "pt_BR",
      images: [{ url: post.coverUrl || "/og-image.jpg", width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPost(params.slug);
  if (!post) notFound();
  const allPosts = await getAllPosts();
  return <BlogPostClient post={post} allPosts={allPosts} />;
}