"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronRight, Menu, HomeIcon } from "lucide-react";
import { menu } from "./MenuConfig";

export default function Sidebar() {
    const pathname = usePathname() ?? "";
    const router = useRouter();

    const [openId, setOpenId] = useState<string | null>(null);
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // detectar sección activa
    const activeSection = useMemo(() => {
        return menu.find((section) =>
            section.items.some((i) => pathname.startsWith(i.href))
        )?.id;
    }, [pathname]);

    useEffect(() => {
        if (pathname === "/admin/dashboard") {
            setOpenId(null);
        } else if (activeSection) {
            setOpenId(activeSection);
        }
    }, [pathname, activeSection]);

    // cerrar en cambio responsive
    useEffect(() => {
        const handler = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    return (
        <>
            {/* MOBILE OVERLAY */}
            {mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 bg-black/40 z-40 md:hidden"
                />
            )}

            {/* SIDEBAR */}
            <aside
                className={`
                    fixed z-50 top-0 left-0 h-full bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800
                    transition-all duration-300 ease-in-out flex flex-col
                    ${collapsed ? "w-[70px]" : "w-[260px]"}
                    ${mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
                    `}>
                {/* TOP */}
                <div className="flex items-center justify-between p-4">
                    {!collapsed && (
                        <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
                            Dashboard
                        </span>
                    )}

                    <button
                        onClick={() => setCollapsed((prev) => !prev)}
                        className="hidden md:flex p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                    >
                        <Menu size={18} />
                    </button>
                </div>

                {/* DASHBOARD BUTTON */}
                <button
                    onClick={() => {
                        router.push("/admin/dashboard");
                        setOpenId(null);
                        setMobileOpen(false);
                    }}
                    className={`
                        flex items-center gap-3 px-4 py-2.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all
                    `}>
                    <span className="w-5 h-5 flex items-center justify-center"><HomeIcon size={18} /></span>
                    {!collapsed && <span>Dashboard</span>}
                </button>

                {/* MENU */}
                <nav className="flex flex-col gap-1 mt-2 px-2 transition-all">

                    {menu.map((section) => {
                        const isOpen = openId === section.id;
                        const Icon = section.icon;

                        return (
                            <div key={section.id} className="flex flex-col">

                                {/* SECTION BUTTON */}
                                <button
                                    onClick={() => {

                                        if (collapsed) {
                                            setCollapsed(false);
                                            setOpenId(section.id);
                                            return;
                                        }

                                        setOpenId((prev) => prev === section.id ? null : section.id);
                                    }}
                                    className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm 
                                    hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                                >
                                    <div className="flex items-center gap-3">
                                        <Icon size={18} />
                                        {!collapsed && <span>{section.label}</span>}
                                    </div>

                                    {!collapsed && (
                                        <ChevronRight
                                            className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                                            size={16}
                                        />
                                    )}
                                </button>

                                {/* ITEMS */}
                                <div
                                    className={`
                                        overflow-hidden transition-all duration-300 ease-in-out
                                        ${isOpen && !collapsed ? "max-h-96 mt-1" : "max-h-0"}
                                    `}
                                >
                                    <div className="flex flex-col pl-9 pr-2 gap-1">

                                        {section.items.map((item) => {
                                            const isActive = pathname === item.href;

                                            return (
                                                <button
                                                    key={item.href}
                                                    onClick={() => {
                                                        router.push(item.href);
                                                        setMobileOpen(false);
                                                    }}
                                                    className={`
                                                        text-left text-sm px-3 py-2 rounded-md cursor-pointer
                                                        ${isActive
                                                            ? "bg-blue-100 dark:bg-blue-600/75 text-blue-700 dark:text-white"
                                                            : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                                        }`}
                                                >
                                                    {item.label}
                                                </button>
                                            );
                                        })}

                                    </div>
                                </div>

                            </div>
                        );
                    })}

                </nav>

            </aside>

            {/* MOBILE TOGGLE BUTTON */}
            <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`fixed ${mobileOpen ? "-bottom-full -left-full" : "bottom-3 left-3"} 
                z-50 md:hidden p-3 rounded-full bg-blue-600/75 hover:bg-blue-600 text-white shadow-md transition-all ease-in-out cursor-pointer`}
            >
                <Menu size={20} />
            </button>
        </>
    );
}