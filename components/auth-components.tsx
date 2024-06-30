"use client";
import { signIn, signOut } from "next-auth/react";

export interface SignInButtonProps {
    provider: string;
}

export function SignInButton(props: SignInButtonProps) {
    return <button className="text-white font-bold py-1 px-2" onClick={() => signIn(props.provider)}>Sign in</button>
}

export function SignOutButton() {
    return <button className="text-white font-bold py-1 px-2" onClick={() => signOut()}>Sign out</button>
}