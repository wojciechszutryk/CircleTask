export const fetchCircles = async () => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/circle/`,
        {
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
        }
    )
    return await response.json()
}