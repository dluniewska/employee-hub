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

    await resetSequence('Skills', 'id');

    const positionsData = await prisma.position.createMany({
        data: positions
    });

    await resetSequence('Positions', 'id');

    const unitsData = await prisma.unit.createMany({
        data: units
    });

    await resetSequence('Units', 'id');

    const usersData = await prisma.user.createMany({
        data: users
    });

    await resetSequence('Users', 'id');

    const experiencesData = await prisma.experience.createMany({
        data: experiences
    });

    await resetSequence('Experience', 'id');

    const skillsOnUsersData = await prisma.skillsOnUsers.createMany({
        data: skillsOnUsers
    });


    console.log("Skills:", skillsData);
    console.log("Positions:", positionsData);
    console.log("Units:", unitsData);
    console.log("Users:", usersData);
    console.log("Experience:", experiencesData);
    console.log("SkillsOnUsers:", skillsOnUsersData);
}

async function resetSequence(tableName: string, columnName: string): Promise<void> {
    const quotedTableName = `"${tableName}"`;
    const quotedColumnName = `"${columnName}"`;
    const sequenceName = `"${tableName}_${columnName}_seq"`;
  
    const maxIdResult = await prisma.$queryRawUnsafe<{ max: bigint | null }[]>(`SELECT MAX(${quotedColumnName}) as max FROM ${quotedTableName}`);
    const maxId = maxIdResult[0].max;  
    const nextVal = maxId !== null ? Number(maxId) + 1 : 1;  
  
    await prisma.$executeRawUnsafe(`ALTER SEQUENCE public.${sequenceName} RESTART WITH ${nextVal};`);
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
