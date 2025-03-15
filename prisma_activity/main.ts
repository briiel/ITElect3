import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

async function createAccount() {
  const newAccount = await prisma.account.create({
      data: {
          email: 'sample3@testemail.com',
          username: 'sampleuser3',
          password: '7891',
          profile: {
              create: {
                  firstName: 'Juan',
                  middleName: 'M',
                  lastName: 'Dela Cruz'
              }
          }
      },
      include: { profile: true }
  });

  console.log(newAccount);
}

createAccount()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });

// async function addModule(accountId: number, moduleCode: string, moduleDetails: string, moduleDesc: string) {
//   const newModule = await prisma.module.create({
//       data: {
//           accountCode: accountId,
//           moduleCode,
//           moduleDetails,
//           moduleDesc
//       }
//   });

//   console.log(newModule);
// }

// addModule(1, 'IT101', 'Intro to Information Technology', 'Basic IT Concepts')
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });

// async function fetchAccounts() {
//   const accounts = await prisma.account.findMany({
//       include: {
//           profile: true,
//           modules: true
//       }
//   });

//   console.log(JSON.stringify(accounts, null, 2));
// }

// fetchAccounts()
//     .then(async () => {
//         await prisma.$disconnect();
//     })
//     .catch(async (e) => {
//         console.error(e);
//         await prisma.$disconnect();
//         process.exit(1);
//     });