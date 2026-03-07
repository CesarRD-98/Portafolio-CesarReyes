import { ChildrenModel } from '../model/children.model'
import AuthProvider from '../context/auth/auth.provider'

export default function layout({ children }: ChildrenModel) {
    return (
        <>
            <AuthProvider>
                {children}
            </AuthProvider>
        </>
    )
}
