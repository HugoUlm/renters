import { auth } from "@/auth";
import { SignInButton, SignOutButton } from "./auth-components";
import NavbarButton from "./navbar-button";

export default async function UserButton() {
    const session = await auth();

    if (!session?.user) return <SignInButton provider="github" />;
        
    return (
        <>
            <NavbarButton text={session.user.email!} />
            <SignOutButton />
        </>
    )
}