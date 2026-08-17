import Link from "next/link";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/workspace", label: "Life" },
  { href: "/career", label: "Career" },
  { href: "/finance", label: "Finance" },
  { href: "/journal", label: "Recharge" },
  { href: "/settings", label: "Settings" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h1>✦ Nova</h1>
      <nav>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
