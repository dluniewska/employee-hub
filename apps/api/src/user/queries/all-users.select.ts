export const allUserSelect = {
    id: true,
    email: true,
    firstname: true,
    lastname: true,
    position: {
        select: {
            name: true
        }
    },
    unit: {
        select: {
            id: true,
            name: true
        }
    }
}
