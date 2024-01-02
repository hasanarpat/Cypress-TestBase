import Link from "next/link";

export default function NavItem({ label, path }) {
  return (
    <Link href={path} data-test={label}>
      {label}
    </Link>
  );
}
