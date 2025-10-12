"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "@/styles/BlogPost.module.css";
import text from "@/styles/Text.module.css";
import { FaArrowLeft } from "react-icons/fa";

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
    <div className={styles.outerContianer}>
      <button onClick={() => router.back()} className={styles.backButton}>
        <FaArrowLeft /> Terug naar Blogs
      </button>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={text.e}>
            <h1 className={styles.subHeading}>{post.title}</h1>
            <br />
            <p>{post.shortDescription}</p>
          </div>
          <br />
          <br />
          <br />

          <p className={styles.text}>{post.text}</p>

          <div className={styles.headerImage}>
            <img src={post.image} alt={post.title} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostPage;
