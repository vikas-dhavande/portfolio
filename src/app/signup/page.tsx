"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const { signup, user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user && !loading) {
            router.push("/");
        }
    }, [user, loading, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signup(email, password, name);
            router.push("/");
        } catch (err: any) {
            setError(err.message || "Failed to sign up");
        }
    };

    return (
        <div className="container u-margin-block-start-50 u-flex u-main-center">
            <div className="card u-width-full-line u-max-width-500 u-padding-24">
                <h2 className="heading-level-2 u-text-center">Sign Up</h2>
                {error && (
                    <div className="u-margin-block-start-16 u-color-text-danger u-text-center">
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit} className="u-margin-block-start-24 form-strip">
                    <div className="form-item">
                        <label className="label">Name</label>
                        <div className="input-text-wrapper">
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-item">
                        <label className="label">Email</label>
                        <div className="input-text-wrapper">
                            <input
                                type="email"
                                className="input-text"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-item">
                        <label className="label">Password</label>
                        <div className="input-text-wrapper">
                            <input
                                type="password"
                                className="input-text"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className="u-flex u-main-end u-margin-block-start-16">
                        <button type="submit" className="button is-primary">
                            Sign Up
                        </button>
                    </div>
                </form>
                <div className="u-text-center u-margin-block-start-16">
                    <span className="body-text-2">Already have an account? </span>
                    <Link href="/login" className="link">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
