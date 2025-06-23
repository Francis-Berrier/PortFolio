import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type Lang=  "fr" | "en";

type LangContextType= {
    lang: Lang;
    setLang: (newLang: Lang) => void;
};

const LangContext= createContext<LangContextType | undefined>(undefined);

export const LangProvider = ({children}: {children: ReactNode }) => {
    const [lang, setLang]= useState<Lang>("fr");

    return (
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => {
    const context= useContext(LangContext);
    if(!context) throw new Error("useLang must be used within a LangProvider")
    return context;
}