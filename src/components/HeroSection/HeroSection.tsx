import styles from "./HeroSection.module.css";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className={styles.heroContainer}>
            {/* Main Grid */}
            <div className={styles.heroGrid}>

                {/* LEFT COLUMN: Text Content */}
                <div className={styles.leftColumn}>
                    <h1 className={styles.headline}>
                        Need help with <span className={styles.highlight}>Career Guidance?</span>
                    </h1>
                    <p className={styles.subtext}>
                        Connect with trusted experts, anytime. Get real answers, real
                        guidance, in real time.
                    </p>
                    <Link href="/doctors" className={styles.ctaButton}>
                        Explore Now
                    </Link>
                </div>

                {/* RIGHT COLUMN: Floating Avatars */}
                <div className={styles.rightColumn}>
                    {/* Avatar 1 */}
                    <div className={styles.avatarWrapper}>
                        <div className={styles.chatBubble}>
                            "Hi everyone, hope you are doing great. Here is a thought for the day!"
                        </div>
                        <div className={styles.avatarCircle}>
                            {/* Placeholder Avatar SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" fill="#cbd5e1" />
                                <circle cx="50" cy="40" r="20" fill="#94a3b8" />
                                <path d="M20 90 Q50 60 80 90" stroke="#94a3b8" strokeWidth="30" />
                            </svg>
                        </div>
                    </div>

                    {/* Avatar 2 */}
                    <div className={styles.avatarWrapper}>
                        <div className={styles.chatBubble}>
                            "On-campus Interview Experience for SDE"
                        </div>
                        <div className={styles.avatarCircle}>
                            {/* Placeholder Avatar SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" fill="#bae6fd" />
                                <circle cx="50" cy="40" r="20" fill="#38bdf8" />
                                <path d="M20 90 Q50 60 80 90" stroke="#38bdf8" strokeWidth="30" />
                            </svg>
                        </div>
                    </div>

                    {/* Avatar 3 */}
                    <div className={styles.avatarWrapper}>
                        <div className={styles.chatBubble}>
                            "Web3 is trending because it’s changing the internet..."
                        </div>
                        <div className={styles.avatarCircle}>
                            {/* Placeholder Avatar SVG */}
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
                                <rect width="100" height="100" fill="#fecaca" />
                                <circle cx="50" cy="40" r="20" fill="#f87171" />
                                <path d="M20 90 Q50 60 80 90" stroke="#f87171" strokeWidth="30" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            {/* BOTTOM ROW: Feature Cards */}
            <div className={styles.featuresRow}>
                <FeatureCard
                    icon={<IconUserGroup />}
                    text="1:1 Expert Sessions"
                    bgColor="#eff6ff"
                    iconColor="#3b82f6"
                />
                <FeatureCard
                    icon={<IconLayout />}
                    text="Personalized Feed"
                    bgColor="#fdf2f8"
                    iconColor="#ec4899"
                />
                <FeatureCard
                    icon={<IconWallet />}
                    text="Flexible & Affordable"
                    bgColor="#f0f9ff"
                    iconColor="#0ea5e9"
                />
                <FeatureCard
                    icon={<IconNetwork />}
                    text="Build Your Network"
                    bgColor="#fff7ed"
                    iconColor="#f97316"
                />
            </div>
        </section>
    );
};

// Sub-component for clean Feature Card usage
const FeatureCard = ({ icon, text, bgColor, iconColor }: { icon: React.ReactNode, text: string, bgColor: string, iconColor: string }) => (
    <div className={styles.featureCard}>
        <div className={styles.featureIcon} style={{ backgroundColor: bgColor, color: iconColor }}>
            {icon}
        </div>
        <span className={styles.featureText}>{text}</span>
    </div>
);

// Simple SVG Icons for zero-dependency features
const IconUserGroup = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const IconLayout = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>
);
const IconWallet = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12a2 2 0 0 0 2 2h14v-4" /><path d="M18 12a2 2 0 0 0 0 4h4v-4Z" /></svg>
);
const IconNetwork = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
);

export default HeroSection;
