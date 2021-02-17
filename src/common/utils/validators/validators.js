export const required = (value) => {
    if (!value) return 'This field is required';
    else return undefined;
}

export const maxLengthCreator = (length) => {
    return (value) => {
        if(value && value.length > length) return `Max length ${length}`;
        else return undefined;
    }
}