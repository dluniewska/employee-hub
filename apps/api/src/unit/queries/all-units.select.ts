export const allUnitsSelect = {
    id: true,
    name: true,
    parentId: true,
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
    }
}
