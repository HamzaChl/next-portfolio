"use client";

import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "@/styles/BlogGrid.module.css";

export interface BlogPost {
  id: number;
  title: string;
  shortDescription: string;
  text: string;
  image: string;
}

const BlogGrid = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [sortBy, setSortBy] = useState<"week" | "title">("week");
  const gridRef = useRef<HTMLDivElement>(null);

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/stageweken.json");
        const data = await response.json();
        const formattedPosts = data.map((post: any, index: number) => ({
          id: index + 1,
          ...post,
        }));
        setPosts(formattedPosts);
      } catch (error) {
        console.error("Fout bij het ophalen van de blogposts", error);
      }
    };
    fetchPosts();
  }, []);

  const sortedPosts = [...posts].sort((a, b) => {
    if (sortBy === "title") return a.title.localeCompare(b.title);
    if (sortBy === "week") return a.id - b.id;
    return 0;
  });

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.2 }
      );
    }
  }, [sortedPosts]);

  if (posts.length === 0) return <p>Even geduld...</p>;

  return (
    <section className={styles.wrapper}>
      <div className={styles.sortMenu}>
        {["week", "title"].map((key) => (
          <button
            key={key}
            className={`${styles.sortButton} ${
              sortBy === key ? styles.active : ""
            }`}
            onClick={() => setSortBy(key as "week" | "title")}
          >
            {key === "week" ? "Week" : "Titel"}
          </button>
        ))}
      </div>

      <div ref={gridRef} className={styles.grid}>
        {sortedPosts.map((post, index) => (
          <div key={post.id} className={styles.blogCard}>
            <Link href={`/blog/${generateSlug(post.title)}`}>
              <div
                className={styles.imageWrapper}
                style={{ backgroundImage: `url(${post.image})` }}
              ></div>
            </Link>

            <div className={styles.blogInfo}>
              <h3 className={styles.blogTitle}>{post.title}</h3>
              <p className={styles.shortDescription}>{post.shortDescription}</p>
              <span className={styles.blogLabel}>Week {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogGrid;
