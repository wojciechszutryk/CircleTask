export const deleteCircle = async ({ id }: { id: string }) => {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/circle/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
        }
    )
    return await response.json()
}