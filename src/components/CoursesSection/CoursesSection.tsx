import Link from "next/link";
import styles from "./CoursesSection.module.css";

interface Course {
    id: number;
    title: string;
    fullName: string;
    level: string;
    rating: number;
    interested: string;
    gradientClass: string;
    tags?: string[];
}

const COURSES: Course[] = [
    {
        id: 1,
        title: "System Design",
        fullName: "System Design - Live",
        level: "Beginner to Advanced",
        rating: 3.5,
        interested: "9k+",
        gradientClass: styles.gradientBrown,
    },
    {
        id: 2,
        title: "TECH INTERVIEW",
        fullName: "Tech Interview 101: DSA to System Design",
        level: "Beginner to Advanced",
        rating: 4.9,
        interested: "382k+",
        gradientClass: styles.gradientGreen,
    },
    {
        id: 3,
        title: "Generative AI",
        fullName: "Generative AI Training Program - Live",
        level: "Beginner to Advanced",
        rating: 3.5,
        interested: "31k+",
        gradientClass: styles.gradientPurple,
    },
    {
        id: 4,
        title: "DEVOPS",
        fullName: "DevOps Engineering with AI",
        level: "Beginner to Advanced",
        rating: 4.7,
        interested: "45k+",
        gradientClass: styles.gradientBlue,
    },
    {
        id: 5,
        title: "C++",
        fullName: "C++ Programming - Self Paced",
        level: "Beginner to Advanced",
        rating: 4.7,
        interested: "120k+",
        gradientClass: styles.gradientGreen,
    },
    {
        id: 6,
        title: "JAVA",
        fullName: "Java Programming - Self Paced",
        level: "Beginner to Advanced",
        rating: 4.6,
        interested: "150k+",
        gradientClass: styles.gradientPurple,
    },
];

const CoursesSection = () => {
    return (
        <section className={styles.sectionContainer}>
            {/* Header */}
            <div className={styles.headerRow}>
                <h2 className={styles.title}>Courses</h2>
                <Link href="/courses" className={styles.viewAllBtn}>
                    View All
                </Link>
            </div>

            {/* Grid */}
            <div className={styles.coursesGrid}>
                {COURSES.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </section>
    );
};

const CourseCard = ({ course }: { course: Course }) => {
    return (
        <div className={styles.card}>
            {/* Top Banner */}
            <div className={`${styles.banner} ${course.gradientClass}`}>
                <div className={styles.ratingBadge}>
                    <span>★</span> {course.rating}
                </div>
                <div style={{ marginTop: "auto" }}>
                    <h3 className={styles.bannerTitle}>{course.title}</h3>
                    <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>Training Program</span>
                </div>
            </div>

            {/* Bottom Content */}
            <div className={styles.content}>
                <h4 className={styles.courseName}>{course.fullName}</h4>

                <div className={styles.levelRow}>
                    {/* Chart Bar Icon */}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.levelIcon}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    <span>{course.level}</span>
                </div>

                <div className={styles.footerRow}>
                    <div className={styles.interestedCount}>
                        {/* Trending/Graph Icon */}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                        <span>{course.interested} interested</span>
                    </div>
                    <button className={styles.exploreBtn}>Explore now</button>
                </div>
            </div>
        </div>
    );
};

export default CoursesSection;
