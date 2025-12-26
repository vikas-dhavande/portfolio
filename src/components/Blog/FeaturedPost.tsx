import Link from "next/link";
import styles from "./Blog.module.css";

const FeaturedPost = () => {
    return (
        <div className={styles.featuredCard}>
            {/* Placeholder for Featured Image (using a colored div for now) */}
            <div
                className={styles.featuredImage}
                style={{
                    background: "url('https://placehold.co/600x800/10b981/ffffff?text=Featured') center/cover no-repeat"
                }}
            />
            <div className={styles.featuredOverlay}>
                <span className={styles.categoryBadge}>Medical</span>
                <h3 className={styles.featuredTitle}>
                    The Future of Telemedicine in Remote Areas
                </h3>
                <p style={{ fontSize: "0.95rem", opacity: 0.9 }}>
                    Explore how technology is bridging the gap for rural healthcare access...
                </p>
                <Link href="/blog/post-1" style={{ color: "white", textDecoration: "underline" }}>
                    Continue Reading
                </Link>
            </div>
        </div>
    );
};

export default FeaturedPost;
