"use client"

import { cn } from "@/lib/utils";
import { PathnameContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, ReactNode } from "react";

export function NavBar({children}: {children: ReactNode}){
    return(
        <nav className="flex justify-center px-6 sticky top-0 bg-blue-600">{children}</nav>
    )
}

export function NavLink(props: Omit<ComponentProps<typeof Link>, "classname">){
    const pathName = usePathname()
    return(
        <Link {...props} className={cn("p-4", pathName === props.href && "bg-background text-foreground")}/>
    )
}