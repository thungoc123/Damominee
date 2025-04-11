import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({
  href,
  icon: Icon,
  label,
  iconColor,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  iconColor: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li className={`flex items-center ${isActive ? "text-white" : "text-gray-700"}`}>
      <Icon className={`w-4 h-4 mr-2 ${iconColor}`} />
      <Link
        href={href}
        className={`${isActive ? "text-white" : "text-gray-700"} hover:${iconColor}`}
      >
        {label}
      </Link>
    </li>
  );
}
