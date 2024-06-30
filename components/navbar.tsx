import { auth } from "@/auth";
import NavbarButton from "./navbar-button";
import UserButton from "./user-button";

export default async function Navbar() : Promise<JSX.Element> {
    const session = await auth();

    return (
        <nav className="flex items-center justify-around p-4 text-white">
            <NavbarButton text="Renters" link="/" />
            <ul className="flex">
                <li className="ml-6">
                    <NavbarButton text="Home" link="/" />
                </li>
                {session?.user && (
                    <>
                        <li className="ml-6">
                            <NavbarButton text="Dashboard" link="/dashboard" />
                        </li>
                        <li className="ml-6">
                            <NavbarButton text="Tenants" link="/tenants" />
                        </li>
                    </>
                )}
                <li className="ml-6">
                    <UserButton />
                </li>
            </ul>
        </nav>
    );
}