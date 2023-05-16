const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL
export const get = async (url) => {
    const response = await fetch(`${BASE_URL}/${url}`)
    return response.json();
}