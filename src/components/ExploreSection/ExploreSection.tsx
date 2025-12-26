import styles from "./ExploreSection.module.css";

const ExploreSection = () => {
    const categories = [
        { title: "Data Structure and Algorithms", gradient: styles.gradientBlue },
        { title: "Web Development", gradient: styles.gradientRed },
        { title: "AI ML & Data Science", gradient: styles.gradientGreen },
        { title: "Machine Learning", gradient: styles.gradientPurple },
        { title: "Python", gradient: styles.gradientOrange },
        { title: "Java", gradient: styles.gradientPink },
    ];

    return (
        <section className={styles.sectionContainer}>
            <h2 className={styles.title}>Explore</h2>

            <div className={styles.exploreGrid}>
                {categories.map((cat, index) => (
                    <div key={index} className={`${styles.card} ${cat.gradient}`}>
                        <h3 className={styles.cardTitle}>{cat.title}</h3>
                        <button className={styles.viewMoreBtn}>
                            View more →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ExploreSection;
