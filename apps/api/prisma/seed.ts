import { PrismaClient } from '@prisma/client';
import { experiences, positions, skills, skillsOnUsers, units, users } from './seed.models';

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

    const skillsData = await prisma.skill.createMany({
        data: skills
    });

    const positionsData = await prisma.position.createMany({
        data: positions
    });

    const unitsData = await prisma.unit.createMany({
        data: units
    });

    const usersData = await prisma.user.createMany({
        data: users
    });

    const experiencesData = await prisma.experience.createMany({
        data: experiences
    });

    const skillsOnUsersData = await prisma.skillsOnUsers.createMany({
        data: skillsOnUsers
    });

    console.log("Skills:", skillsData);
    console.log("Positions:", positionsData);
    console.log("Units:", unitsData);
    console.log("Users:", usersData );
    console.log("Experience:", experiencesData );
    console.log("SkillsOnUsers:", skillsOnUsersData );
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
