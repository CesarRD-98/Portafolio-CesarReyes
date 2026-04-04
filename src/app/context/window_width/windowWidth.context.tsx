import { WindowTypeContext } from "@/app/model/windowContext.model";
import { createContext } from "react";

export const WindowWidthContext = createContext<WindowTypeContext>({
    windowWidth: 0
})