export const selectBase = {
    id: true,
    email: true,
    firstname: true,
    lastname: true,
    phone: true,
    position: {
        select: {
            id: true,
            name: true
        }
    },
    unit: {
        select: {
            id: true,
            name: true
        }
    },
    description: true
}