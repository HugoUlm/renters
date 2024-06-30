import Link from "next/link";

export interface NavbarButtonProps {
    text: string;
    link?: string | undefined;
}

export default async function NavbarButton(props: NavbarButtonProps) {
    return (
        <button className="text-white font-bold py-1 px-2">
            <Link href={props.link ?? ""}>{props.text}</Link>
        </button>
    );
}