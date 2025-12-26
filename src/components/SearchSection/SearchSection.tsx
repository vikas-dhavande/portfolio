import styles from "./SearchSection.module.css";

const SearchSection = () => {
    return (
        <section className={styles.searchSection}>
            <h2 className={styles.heading}>Hello, What Do You Want To Learn?</h2>

            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    placeholder="Learn Python,"
                    className={styles.searchInput}
                />
                <div className={styles.searchIcon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default SearchSection;
