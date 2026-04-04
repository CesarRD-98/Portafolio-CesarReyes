import { createContext } from "react";
import { UserTypeContext } from "@/app/model/userContext.model";

export const UserContext = createContext<UserTypeContext | undefined>(undefined)