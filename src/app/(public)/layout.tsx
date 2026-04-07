import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Main } from "../components/layout/Main";
import { Navbar } from "../components/layout/Navbar";
import UserProvider from "../modules/user_public/user.context";
import { ChildrenProps } from "../types/children.type";


export default function layout({ children }: ChildrenProps) {
    return (
        <>
            <UserProvider>
                <Header>
                    <Navbar />
                </Header>
                <Main>
                    {children}
                </Main>
                <Footer />
            </UserProvider>
        </>
    )
}
