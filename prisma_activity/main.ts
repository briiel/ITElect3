import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function createAccount() {
    const newAccount = await prisma.account.create({
        data:{
            email: 'sample1@testemail.com',
            password: '4567',
            profile: {
                create: {
                    fullName: 'Lee Leighnard',
                    age: 25
                }
            }
        },
        include: { profile: true }
    });

    console.log(newAccount);
}

createAccount()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

// async function addModule(accountId: number, moduleName: string) {
//     const newModule = await prisma.module.create({
//         data: {
//             name: 'Sample Module',
//             account: { connect: { id: accountId } }
//         }
//     });

//     console.log(newModule);
// }

// addModule(2, 'Sample Module')
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })

// async function fetchAccounts(){
//     const accounts = await prisma.account.findMany({
//         include: { 
//             profile: true, 
//             modules: true 
//         }
//     });

//     console.log(JSON.stringify(accounts, null, 2));
// }

// fetchAccounts()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })
