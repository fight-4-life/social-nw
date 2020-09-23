export const required = (value) => {
    if (value) return undefined
    return 'Required field'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) return `max length is ${maxLength} symbols`
    return undefined
}
