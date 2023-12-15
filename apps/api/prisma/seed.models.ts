import * as moment from "moment";

export const skills = [
    {
        id: 1,
        name: ".NET",
        createdBy: "seed"
    },
    {
        id: 2,
        name: "Docker",
        createdBy: "seed"
    },
    {
        id: 3,
        name: "Visual Studio",
        createdBy: "seed"
    },
    {
        id: 4,
        name: "Python",
        createdBy: "seed"
    },
    {
        id: 5,
        name: "R Language",
        createdBy: "seed"
    },
    {
        id: 6,
        name: "RStudio",
        createdBy: "seed"
    }

]

export const positions = [
    {
        id: 1,
        name: ".NET Developer",
        description: "Backend developer in .NET",
        createdBy: "seed"
    },
    {
        id: 2,
        name: "Data Analyst - Python",
        description: "Data Analyst using Python",
        createdBy: "seed"
    }
]

export const units = [
    {
        id: 1,
        name: "IT Department",
        createdBy: "seed"
    },
    {
        id: 2,
        name: "Web Developers",
        createdBy: "seed",
        parentId: 1
    },
    {
        id: 3,
        name: "Data Analysts",
        createdBy: "seed",
        parentId: 1
    }
]

export const users = [
    {
        id: 1,
        email: 'j.violin@test.com',
        firstname: "John",
        lastname: "Violin",
        description: "programmer",
        positionId: 1,
        phone: "111 111 111",
        createdBy: "seed",
        unitId: 2
    },
    {
        id: 2,
        email: 'j.vengerberg@test.com',
        firstname: "Jenna",
        lastname: "Vengerberg",
        description: "Data Analyst",
        positionId: 2,
        unitId: 3,
        createdBy: "seed"
    }
]


export const experiences = [
    {
        id: 1,
        name: 'Software Developer at XYZ',
        description: "Developing software using .NET and React",
        startDate: moment().add(-3, "years").toDate(),
        endDate: moment().add(-1, "years").toDate(),
        isPrivate: false,
        createdBy: "seed",
        userId: 1
    },
    {
        id: 2,
        name: 'Python Developer at ABC',
        description: "Developing software using Python",
        startDate: moment().add(-6, "years").toDate(),
        endDate: moment().add(-4, "years").toDate(),
        isPrivate: false,
        createdBy: "seed",
        userId: 2
    },
    {
        id: 3,
        name: 'Data Analysts with R',
        description: "Creating data statistics using R language",
        startDate: moment().add(-4, "years").toDate(),
        endDate: moment().add(-3, "years").toDate(),
        isPrivate: false,
        createdBy: "seed",
        userId: 2
    }
]

export const skillsOnUsers = [
    {
        skillId: 1,
        userId: 1,
        createdBy: "seed"
    },
    {
        skillId: 2,
        userId: 1,
        createdBy: "seed"
    },
    {
        skillId: 3,
        userId: 1,
        createdBy: "seed"
    },
    {
        skillId: 4,
        userId: 2,
        createdBy: "seed"
    },
    {
        skillId: 5,
        userId: 2,
        createdBy: "seed"
    },
    {
        skillId: 6,
        userId: 2,
        createdBy: "seed"
    }
]