import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
    title: {
        default: "Portafolio - César Reyes",
        template: "%s | César Reyes"
    },
    description: "Portafolio de César Reyes, desarrollador web",
};

const firaSans = Fira_Sans({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
    display: "swap",
    variable: "--font-fira-sans",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="es" className={firaSans.variable} suppressHydrationWarning>
            <body className="font-sans min-h-screen flex flex-col">
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
