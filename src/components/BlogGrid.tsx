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

  useEffect(() => {
    if (posts.length > 0 && gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    }
  }, [posts]);

  if (posts.length === 0) return <p>Even geduld...</p>;

  return (
    <div ref={gridRef} className={styles.grid}>
      {posts.map((post, index) => (
        <div key={post.id} className={styles.blogContainer}>
          <Link
            href={`/blog/${generateSlug(post.title)}`}
            className={styles.blogLink}
          >
            <div
              className={styles.blog}
              style={
                {
                  "--image": `url(${post.image})`,
                } as React.CSSProperties
              }
            >
              <div className={styles.labels}>
                <span className={styles.label}>Week {index + 1}</span>
              </div>

              <div className={styles.overlay}>
                <h2 className={styles.title}>{post.title}</h2>
                <p className={styles.shortDescription}>
                  {post.shortDescription}
                </p>
                <span className={styles.readMore}>Lees meer →</span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
