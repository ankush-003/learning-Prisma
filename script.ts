import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient(({ log: ["query", "info", "warn"] }))
const prisma = new PrismaClient({log: ["query"]})

async function main() {
    // const user = await prisma.user.create({ data: { name: "Alice" } });
    // const user = await prisma.user.deleteMany();
    // here we cannot use name as its not unique
    // const user = await prisma.user.findUnique({
    //     where:{
    //         age_name:{
    //             age:18,
    //             name:"Ankush"
    //         }
    //     },include:{
    //         userPreference:true
    //     }
    // })
    const user = await prisma.user.findMany({
        where:{
            age: 19
        },
    })

    console.log(user);
}

main()
    .catch(e => { 
        console.error(e.message);
    })
    .finally(async () => {
        await prisma.$disconnect();
        console.log("Disconnected");
    });

// async function createUser() {
//     const user = await prisma.user.create({
//        data: {
//          name: "Ankush",
//          email: "anshhv2003@gmail.com",
//          age: 18,   
//          userPreference: {
//             create: {
//                 emailUpdates: true,
//             }
//          }
//        }, 
//        include: {
//               userPreference: true
//        }
//     })
//     console.log(user);
// }


async function createUser() {
    const users = await prisma.user.createMany({
        data:[
            {
                name: "Ankush",
                email: "ansh@gmail.com",
                age: 19
            },
            {
                name: "Ankush2",
                email: "anshh@gmail.com",
                age: 19
            }
        ]
    })
    console.log(users);
}


// createUser()
//     .catch((e) => {
//         console.error(e.message)
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })