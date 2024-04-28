import { NavBar, NavLink } from "../components/navigation/NavBar";

export const dynamic = "force-dynamic"

export default function AdminLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <NavBar>
          <NavLink href="/admin">Dashboard</NavLink>
          <NavLink href="/admin/products">Products</NavLink>
          <NavLink href="/admin/customers">Customers</NavLink>
          <NavLink href="/admin/sales">Sales</NavLink>
        </NavBar>
        {children}
    </div>
  );
}