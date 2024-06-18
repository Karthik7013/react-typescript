const dateFormatter = (date: string): string => {
    const newDate = new Date(date);
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const year = newDate.getFullYear();
    const month = months[newDate.getMonth()]
    const day = newDate.getDate();
    return `${month} ${day}, ${year}`;
}

const getToken = () => localStorage.getItem('token');

const getHeaders = () => {
    if (getToken()) {
        return {
            
        }
    } else {
        return null
    }
    return
}



export { dateFormatter, getToken, getHeaders }