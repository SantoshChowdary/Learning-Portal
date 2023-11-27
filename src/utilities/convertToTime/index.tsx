export const convertIntoReadableTime = (seconds : number) : string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    // const sec = Math.floor(seconds % 60);
    const sec = 0;

    const hrString = hours > 0 ? `${hours}hr ` : "";
    const minString = minutes > 0 ? `${minutes}min ` : "";
    const secString = sec > 0 ? `${sec}sec ` : "";

    return hrString + minString +secString
}

export {}