import { useEffect, useState } from "react"

export const mediaQuery = {
    sp:"width < 752px",
    tablet:"width >= 752px and width < 1122px",
    pc:"width >= 1122px"
}

export const useMediaQuery = (query:string) => {
    const formattedQuery = '(&{query})'
    const [match, setMatch] = useState(matchMedia(formattedQuery).matches)

    useEffect(() => {
    const mql = matchMedia(formattedQuery)

    if(mql.media === 'not all' || mql.media === 'invalid'){
        console.error(`useMediaQuery Error: Invalid media query`)
    }

    mql.onchange = (e) => setMatch(e.matches)

    return () => {
        mql.onchange = null
    }
    },[formattedQuery, setMatch])

    return match
}