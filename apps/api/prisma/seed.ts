import { PrismaClient } from '@prisma/client';
import * as moment from "moment";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {

    await prisma.schedule.deleteMany({})
    await prisma.skillsOnUsers.deleteMany({})
    await prisma.skill.deleteMany({})
    await prisma.experience.deleteMany({})
    await prisma.user.deleteMany({})
    await prisma.unit.deleteMany({})
    await prisma.position.deleteMany({})
    
    // seed for tests, in separate objects for db provider flexibility
    const skillDotnet = await prisma.skill.create({
        data: {
            id: 1,
            name: ".NET",
            createdBy: "seed"
        }
    });

    const skillDocker = await prisma.skill.create({
        data: {
            id: 2,
            name: "Docker",
            createdBy: "seed"
        }
    });

    const skillVisualStudio = await prisma.skill.create({
        data: {
            id: 3,
            name: "Visual Studio",
            createdBy: "seed"
        },
    });

    const skillPython = await prisma.skill.create({
        data: {
            id: 4,
            name: "Python",
            createdBy: "seed"
        }
    });

    const skillRLanguage = await prisma.skill.create({
        data: {
            id: 5,
            name: "R Language",
            createdBy: "seed"
        }
    });

    const skillRStudio = await prisma.skill.create({
        data: {
            id: 6,
            name: "RStudio",
            createdBy: "seed"
        }
    });

    const programmerPosition = await prisma.position.create({
        data: {
            id: 1,
            name: ".NET Developer",
            description: "Backend developer in .NET",
            createdBy: "seed"
        }
    });

    const dataAnalystPosition = await prisma.position.create({
        data: {
            id: 2,
            name: "Data Analyst - Python",
            description: "Data Analyst using Python",
            createdBy: "seed"
        }
    });

    const itDeptUnit = await prisma.unit.create({
        data: {
            id: 1,
            name: "IT Department",
            createdBy: "seed"
        }
    });

    const webDevelopersUnit = await prisma.unit.create({
        data: {
            id: 2,
            name: "Web Developers",
            createdBy: "seed",
            parentId: 1
        }
    });

    const dataAnalystsUnit = await prisma.unit.create({
        data: {
            id: 3,
            name: "Data Analysts",
            createdBy: "seed",
            parentId: 1
        }
    });

    const user1 = await prisma.user.create({
        data: {
            id: 1,
            email: 'j.violin@test.com',
            firstname: "John",
            lastname: "Violin",
            description: "programmer",
            positionId: 1,
            phone: "111 111 111",
            createdBy: "seed",
            unitId: 2,
            experience: {
                create: {
                    id: 1,
                    name: 'Software Developer at XYZ',
                    description: "Developing software using .NET and React",
                    startDate: moment().add(-3, "years").toDate(),
                    endDate: moment().add(-1, "years").toDate(),
                    isPrivate: false,
                    createdBy: "seed",
                }
            },
            skills: {
                create:
                    [
                        {
                            skillId: 1,
                            createdBy: "seed"
                        },
                        {
                            skillId: 2,
                            createdBy: "seed"
                        },
                        {
                            skillId: 3,
                            createdBy: "seed"
                        }
                    ]
            }
        },
    });

    const user2 = await prisma.user.create({
        data: {
            id: 2,
            email: 'j.vengerberg@test.com',
            firstname: "Jenna",
            lastname: "Vengerberg",
            description: "Data Analyst",
            positionId: 2,
            unitId: 3,
            createdBy: "seed",
            experience: {
                create: [
                    {
                        id: 2,
                        name: 'Python Developer at ABC',
                        description: "Developing software using Python",
                        startDate: moment().add(-6, "years").toDate(),
                        endDate: moment().add(-4, "years").toDate(),
                        isPrivate: false,
                        createdBy: "seed",
                    },
                    {
                        id: 3,
                        name: 'Data Analysts with R',
                        description: "Creating data statistics using R language",
                        startDate: moment().add(-4, "years").toDate(),
                        endDate: moment().add(-3, "years").toDate(),
                        isPrivate: false,
                        createdBy: "seed",
                    }
                ]
            },
            skills: {
                create:
                    [
                        {
                            skillId: 4,
                            createdBy: "seed"
                        },
                        {
                            skillId: 5,
                            createdBy: "seed"
                        },
                        {
                            skillId: 6,
                            createdBy: "seed"
                        }
                    ]
            }
        },
    });


    console.log("Skills:", { skillDotnet, skillDocker, skillVisualStudio, skillPython, skillRLanguage, skillRStudio });
    console.log("Positions:", { programmerPosition, dataAnalystPosition });
    console.log("Units:", { itDeptUnit, webDevelopersUnit, dataAnalystsUnit });
    console.log("Users:", { user1, user2 });
}


main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        // close Prisma Client at the end
        await prisma.$disconnect();
    });
