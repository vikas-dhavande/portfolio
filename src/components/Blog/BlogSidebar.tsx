import styles from "./Blog.module.css";

const BlogSidebar = () => {
    return (
        <aside className={styles.sidebar}>
            {/* Author Widget */}
            <div className={styles.widget}>
                <div className={styles.authorProfile}>
                    {/* Placeholder Avatar */}
                    <div
                        className={styles.authorAvatar}
                        style={{ background: "#cbd5e1 url('https://placehold.co/200x200/png?text=Dr.Doe') center/cover" }}
                    />
                    <div>
                        <div className={styles.authorName}>Dr. Alex Doe</div>
                        <div className={styles.authorRole}>Chief Editor</div>
                    </div>
                    <p className={styles.authorBio}>
                        Medical professional and tech enthusiast sharing insights on the intersection of healthcare and AI.
                    </p>
                    <div style={{ fontSize: "2rem", fontFamily: "cursive", color: "#64748b", marginTop: "0.5rem" }}>
                        Alex.D
                    </div>
                </div>
            </div>

            {/* Categories Widget */}
            <div className={styles.widget}>
                <h4 className={styles.widgetTitle}>Categories</h4>
                <div className={styles.categoryList}>
                    {["Cardiology", "Neurology", "Medical Tech", "Research", "Student Life"].map((cat, i) => (
                        <div key={i} className={styles.categoryItem}>
                            <div className={styles.catThumb}></div>
                            <div className={styles.catInfo}>
                                <span className={styles.catName}>{cat}</span>
                                <span className={styles.catCount}>{Math.floor(Math.random() * 20) + 1} Posts</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default BlogSidebar;
