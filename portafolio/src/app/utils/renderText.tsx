export const renderHighlightedText = (text: string, highlights: string[]) => {
    if (!text) return null

    const regex = new RegExp(`(${highlights.join("|")})`, "g")
    const parts = text.split(regex)

    return parts.map((part, index) => (
        highlights.includes(part) ? (
            <span key={index} className='hightlight'>{part}</span>
        ) : (
            part
        )
    ))
}