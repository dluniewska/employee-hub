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
            name: true
        }
    }
}
