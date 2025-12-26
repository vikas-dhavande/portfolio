import Link from "next/link";
import ThemeToggle from "../ThemeToggle";
import styles from "./Header.module.css";
// You might want to use real icons like lucide-react or heroicons later. 
// For now, I'll use simple text/emoji or placeholders if no icon library is installed.
// Since globals.css imports @appwrite.io/pink-icons, we might have access to some, 
// but to be safe and dependency-free for this file, I'll use SVGs or text.

const TopNav = ({ toggleMobileMenu }: { toggleMobileMenu: () => void }) => {
    return (
        <div className={styles.topNav}>
            <div className="u-flex u-gap-16 u-cross-center">
                {/* Mobile Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={toggleMobileMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>

                {/* Logo */}
                <Link href="/" className={styles.logoSection}>
                    <div className={styles.logoIcon}>
                        <svg
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M12 2v20M2 12h20" /> {/* Medical Cross */}
                        </svg>
                    </div>
                    <span className={styles.logoText}>
                        Med<span>Portal</span>
                    </span>
                </Link>
            </div>

            {/* Search Bar - Center */}
            <div className={styles.searchContainer}>
                <div className={styles.searchInputWrapper}>
                    <svg
                        className={styles.searchIcon}
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search doctors, hospitals, symptoms, courses..."
                        className={styles.searchInput}
                    />
                </div>
            </div>

            {/* Right Actions */}
            <div className={styles.rightActions}>
                <ThemeToggle />

                <button className={styles.iconBtn} aria-label="Notifications">
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
                        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                    </svg>
                </button>

                <Link href="/login" className={styles.authBtn}>
                    Sign In
                </Link>
            </div>
        </div>
    );
};

export default TopNav;
