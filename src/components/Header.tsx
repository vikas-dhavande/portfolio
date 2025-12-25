"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="main-header u-padding-inline-32 u-padding-block-16 u-flex u-main-space-between u-cross-center u-border-bottom">
            <Link href="/" className="u-flex u-cross-center u-gap-8">
                <h1 className="heading-level-5 u-margin-0">My Appwrite App</h1>
            </Link>

            <nav className="u-flex u-gap-16 u-cross-center">
                <Link href="/" className="button is-text">
                    <span className="text">Home</span>
                </Link>

                {user ? (
                    <>
                        <span className="body-text-2">Hello, {user.name}</span>
                        <button onClick={logout} className="button is-secondary">
                            <span className="text">Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className="button is-secondary">
                            <span className="text">Login</span>
                        </Link>
                        <Link href="/signup" className="button is-primary">
                            <span className="text">Sign Up</span>
                        </Link>
                    </>
                )}
            </nav>
        </header>
    );
}
