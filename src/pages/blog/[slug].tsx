"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/BlogPost.module.css";
import text from "@/styles/Text.module.css";

interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  text: string;
  image: string;
}

const BlogPostPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      const res = await fetch("/stageweken.json");
      const data: BlogPost[] = await res.json();

      const foundPost = data.find(
        (p) =>
          p.title.toLowerCase().replace(/\s+/g, "-") ===
          String(slug).toLowerCase()
      );

      setPost(foundPost || null);
    };

    fetchPost();
  }, [slug]);

  if (!post) return <p className={styles.loading}>Even geduld...</p>;

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={text.e}>
          <h1 className={text.subHeading}>{post.title}</h1>
          <p>Juste en train de tester, ne pas faire attention.</p>
        </div>
        <br />
        <br />
        <br />

        <p className={styles.text}>{post.text}</p>

        <div className={styles.headerImage}>
          <img src={post.image} alt={post.title} />
        </div>
        <Link href="/blog" className={styles.backButton}>
          ← Terug naar blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPostPage;
