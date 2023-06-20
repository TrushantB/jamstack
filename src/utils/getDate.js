const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

export function getDate(date) {
    const dt = new Date(date);
    const day = dt.getDate();
    const month = dt.getMonth();
    const year = dt.getFullYear();
    return `${months[month]} ${day}, ${year}`;
}