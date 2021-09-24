import { createContext } from "react";
// import {movie} from "./ContextObject";
import {single} from "../SingleMovieInfo";

type WatchlistContextProviderProps = {
    children: React.ReactNode
}

// context accepts an initial value
export const WatchlistContext = createContext(single)

export const WatchlistcontextProvider = ({children}: WatchlistContextProviderProps) => {
    return <WatchlistContext.Provider value={single}>
        {children}
    </WatchlistContext.Provider>
}
