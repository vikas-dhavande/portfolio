import styles from "./Blog.module.css";
import FeaturedPost from "./FeaturedPost";
import PostList from "./PostList";
import BlogSidebar from "./BlogSidebar";

const BlogLayout = () => {
    return (
        <div className={styles.pageContainer}>
            <h1 className={styles.heading}>Latest Insights</h1>

            <div className={styles.blogGrid}>
                {/* Left Column: Featured */}
                <FeaturedPost />

                {/* Center Column: List */}
                <PostList />

                {/* Right Column: Sidebar */}
                <BlogSidebar />
            </div>
        </div>
    );
};

export default BlogLayout;
