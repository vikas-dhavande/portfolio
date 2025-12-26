import Link from "next/link";
import styles from "./Header.module.css";

const categories = [
    {
        name: "Doctors",
        href: "/doctors",
        dropdown: [
            { name: "By Specialization", href: "/doctors/specialization" },
            { name: "By City", href: "/doctors/city" },
            { name: "Online Consultation", href: "/doctors/online" },
        ],
    },
    {
        name: "Hospitals",
        href: "/hospitals",
        dropdown: [
            { name: "By City", href: "/hospitals/city" },
            { name: "By Specialty", href: "/hospitals/specialty" },
            { name: "Emergency", href: "/hospitals/emergency" },
        ],
    },
    {
        name: "Clinics",
        href: "/clinics",
    },
    {
        name: "Pharma",
        href: "/pharma"
    },
    {
        name: "Medical Colleges",
        href: "/colleges"
    },
    {
        name: "Courses",
        href: "/courses",
        dropdown: [
            { name: "Medical UG", href: "/courses/ug" },
            { name: "Medical PG", href: "/courses/pg" },
            { name: "Certifications", href: "/courses/certifications" },
        ],
    },
    { name: "Research", href: "/research" },
    { name: "Guidelines", href: "/guidelines" },
    { name: "Blogs", href: "/blogs" },
    { name: "Jobs", href: "/jobs" },
];

const CategoryNav = () => {
    return (
        <nav className={styles.categoryNav} aria-label="Medical Categories">
            <ul className={styles.categoryList}>
                {categories.map((cat) => (
                    <li key={cat.name} className={styles.categoryItem}>
                        <Link href={cat.href} className={styles.categoryLink}>
                            {cat.name}
                            {cat.dropdown && <span className={styles.dropdownArrow}>▼</span>}
                        </Link>

                        {/* Dropdown Menu */}
                        {cat.dropdown && (
                            <div className={styles.dropdownMenu}>
                                {cat.dropdown.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={styles.dropdownItem}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default CategoryNav;
