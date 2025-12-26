import Link from "next/link";
import styles from "./Blog.module.css";

const POSTS = [
    {
        id: 1,
        title: "10 Tips for Medical Students",
        excerpt: "Surviving medical school is tough. Here are the top 10 tips from residents who made it through.",
        category: "Education",
        date: "Dec 25, 2024",
        image: "https://placehold.co/600x400/3b82f6/ffffff?text=Med+School",
        comments: 5
    },
    {
        id: 2,
        title: "Understanding AI in Diagnostics",
        excerpt: "Artificial Intelligence is revolutionizing how we diagnose diseases early. Let's dive deep.",
        category: "Technology",
        date: "Dec 22, 2024",
        image: "https://placehold.co/600x400/8b5cf6/ffffff?text=AI+Diag",
        comments: 12
    },
    {
        id: 3,
        title: "Mental Health in High Stress Jobs",
        excerpt: "Doctors and engineers face high burnout rates. How to manage mental health effectively.",
        category: "Wellness",
        date: "Dec 20, 2024",
        image: "https://placehold.co/600x400/f59e0b/ffffff?text=Wellness",
        comments: 8
    }
];

const PostList = () => {
    return (
        <div className={styles.postList}>
            {POSTS.map((post) => (
                <div key={post.id} className={styles.postCard}>
                    {/* Placeholder Image */}
                    <div
                        className={styles.postImage}
                        style={{
                            background: `url('${post.image}') center/cover no-repeat`
                        }}
                    />
                    <div className={styles.postContent}>
                        <div className={styles.postMeta}>
                            <span style={{ color: "#10B981", fontWeight: 600 }}>{post.category}</span>
                            <span>•</span>
                            <span>{post.date}</span>
                        </div>
                        <h4 className={styles.postTitle}>{post.title}</h4>
                        <p className={styles.postExcerpt}>{post.excerpt}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Link href={`/blog/${post.id}`} className={styles.readMoreLink}>
                                Continue Reading →
                            </Link>
                            <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>💬 {post.comments}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostList;
