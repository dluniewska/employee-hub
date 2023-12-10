import { PrismaClient } from '@prisma/client';
import * as moment from "moment";

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
    // seed for tests

    const user1 = await prisma.user.upsert({
        where: { email: 'j.violin@test.com' },
        update: {},
        create: {
            email: 'j.violin@test.com',
            firstname: "John",
            lastname: "Violin",
            description: "programmer",
            createdBy: "seed",
            unit: {
                create: {
                    name: "Web Developers",
                    createdBy: "seed",
                    parent: {
                        create: {
                            id: 1,
                            name: "IT Department",
                            createdBy: "seed"
                        }
                    }
                }
            },
            position: {
                create: {
                    name: ".NET Developer",
                    description: "Backend developer in .NET",
                    createdBy: "seed"
                }
            },
            experience: {
                create: {
                    name: 'Software Developer at XYZ',
                    description: "Developing software using .NET and React",
                    startDate: moment().add(-3, "years").toDate(),
                    endDate: moment().add(-1, "years").toDate(),
                    isPrivate: false,
                    createdBy: "seed"
                },
            },
            competences: {
                create:
                    [
                        {
                            name: ".NET",
                            createdBy: "seed"
                        },
                        {
                            name: "Docker",
                            createdBy: "seed"
                        },
                        {
                            name: "Visual Studio",
                            createdBy: "seed"
                        }
                    ]
            }
        },
    });

    const user2 = await prisma.user.upsert({
        where: { email: 'j.vengerberg@test.com' },
        update: {},
        create: {
            email: 'j.vengerberg@test.com',
            firstname: "Jenna",
            lastname: "Vengerberg",
            description: "Data Analyst",
            createdBy: "seed",
            unit: {
                create: {
                    name: "Data Analysts",
                    createdBy: "seed",
                    parent: {
                        connect: {
                            id: 1,
                            name: "IT Department",
                            createdBy: "seed"
                        }
                    }
                }
            },
            position: {
                create: {
                    name: "Data Analyst - Python",
                    description: "Data Analyst using Python",
                    createdBy: "seed"
                }
            },
            experience: {
                create:
                    [
                        {
                            name: 'Python Developer at ABC',
                            description: "Developing software using Python",
                            startDate: moment().add(-6, "years").toDate(),
                            endDate: moment().add(-4, "years").toDate(),
                            isPrivate: false,
                            createdBy: "seed"
                        },
                        {
                            name: 'Data Analysts with R',
                            description: "Creating data statistics using R language",
                            startDate: moment().add(-4, "years").toDate(),
                            endDate: moment().add(-3, "years").toDate(),
                            isPrivate: false,
                            createdBy: "seed"
                        }
                    ]
            },
            competences: {
                create:
                    [
                        {
                            name: "Python",
                            createdBy: "seed"
                        },
                        {
                            name: "R Language",
                            createdBy: "seed"
                        },
                        {
                            name: "RStudio",
                            createdBy: "seed"
                        }
                    ]
            }
        },
    });


    console.log({ user1, user2 });
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
