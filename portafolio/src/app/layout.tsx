import type { Metadata } from "next";
import "./globals.scss";
import { Fira_Sans } from 'next/font/google'
import ThemeProvider from "@/app/context/changeTheme/theme.provider";

export const metadata: Metadata = {
    title: "Portafolio - César Reyes",
    description: "Portafolio de proyectos y habilidades de César Reyes",
};

const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-fira-sans",
});

export default function RootLayout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider>
            <html lang="es" className={firaSans.variable}>
                <body>
                    {children}
                </body>
            </html>
        </ThemeProvider>
    );
}
