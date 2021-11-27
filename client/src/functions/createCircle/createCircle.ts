export const createCircle = async ({
    text,
    position,
    color
    }: {
    text: string,
    position: number,
    color: string
}) => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/circle`, {
        method: 'POST',
        body: JSON.stringify({
            text,
            position,
            color
        }),
        headers: {
            'Content-type': 'application/json',
        },
    })
    return await response.json()
}