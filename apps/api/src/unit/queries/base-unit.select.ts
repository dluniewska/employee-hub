export const baseUnitsSelect = {
    id: true,
    name: true,
    parent: {
        select: {
            id: true,
            name: true
        }
    },
    users: {
        select: {
            id: true,
            firstname: true,
            lastname: true
        }
    },
    units: {
        select: {
            id: true,
            name: true
        }
    },
    createdAt: true,
    updatedAt: true
}