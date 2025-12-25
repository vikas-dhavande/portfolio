export default function Footer() {
    return (
        <footer className="main-footer u-padding-32 u-border-top u-margin-top-auto">
            <div className="u-flex u-main-space-between u-cross-center">
                <p className="body-text-2 u-color-text-gray">
                    &copy; {new Date().getFullYear()} My Appwrite App. All rights reserved.
                </p>
                <div className="u-flex u-gap-16">
                    <a href="#" className="u-color-text-gray u-color-text-primary-hover">Privacy Policy</a>
                    <a href="#" className="u-color-text-gray u-color-text-primary-hover">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
