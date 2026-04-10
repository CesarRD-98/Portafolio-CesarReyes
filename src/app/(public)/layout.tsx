import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Main } from "../components/layout/Main";
import { Navbar } from "../components/layout/Navbar";
import { UserPublicProvider } from "../modules/user_public/userPublic.context";
import { ChildrenProps } from "../types/children.type";


export default function layout({ children }: ChildrenProps) {
    return (
        <UserPublicProvider>
            <Header>
                <Navbar />
            </Header>
            <Main>
                {children}
            </Main>
            <Footer />
        </UserPublicProvider>
    )
}
