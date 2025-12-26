"use client";

import { useState } from "react";
import TopNav from "./TopNav";
import CategoryNav from "./CategoryNav";
import styles from "./Header.module.css";

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header
            className={`${styles.headerContainer} ${isMobileMenuOpen ? styles.mobileMenuOpen : ""
                }`}
        >
            <TopNav toggleMobileMenu={toggleMobileMenu} />
            <CategoryNav />
        </header>
    );
};

export default Header;
