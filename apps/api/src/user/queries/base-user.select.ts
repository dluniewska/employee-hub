export const baseUserSelect = {
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
            name: true,
            parentId: true
        }
    },
    description: true,
    skills: {
        select: {
            skill: true
        }
    },
    experience: true,
    createdAt: true,
    updatedAt: true
}