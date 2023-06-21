import { PrismaClient } from "@prisma/client";
import { disconnect } from "process";
// const prisma = new PrismaClient(({ log: ["query", "info", "warn"] }))
const prisma = new PrismaClient({log: ["query"]})
// reading data
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
            // age: { equals: 19 }
            // age: { gt: 18 }
            // age: { in: [18, 19] }
            // email: { contains: "@gmail.com" } // only for text fields
            // name: { startsWith: "An" }
            // AND: [
            //     { age: { gt: 18 } },
            //     { email: { contains: "@gmail.com" } },
            //     { email: { endsWith: ".com" }}
            // ],
            // NOT: {}
            // queries on relations
            // userPreference:{
            //     emailUpdates: true
            // }
            writtenPosts: {
                every: {
                    title: { contains: "test" }
                },
                none: { },// none of the posts
                some: { }// some of the posts    
            }
        },
        // distinct: ["age"],
    })

    console.log(user);
}

// main()
//     .catch(e => { 
//         console.error(e.message);
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//         console.log("Disconnected");
//     });

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

// async function pagination() {
//     const users = await prisma.user.findMany({
//         take: 1,
//         skip: 1,
//         orderBy: {
//             name: "asc"
//         }
//     })
//     console.log(users);
// }

// pagination()
//     .catch((e) => {
//         console.error(e.message)
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })

// updating data
async function updateData() {
    // const user = await prisma.user.update({
    //     where: {
    //         age_name: {
    //             age: 19,
    //             name: "ganya2"
    //         }
    //     },
    //     data: {
    //         name: "Ganya Umesh"
    //     }
    // })
    // const user = await prisma.user.updateMany({
    //     where: {
    //         name: {contains: "Ankush" }
    //     },
    //     data: {
    //         age: { increment: 1 }
    //     }
    // })
    // const userPreference = await prisma.userPreference.create({
    //     data: {
    //         emailUpdates: true,
    //     }
    // })
    const userUpdate = prisma.user.update({
        where: {
            age_name: {
                age: 19,
                name: "Ganya Umesh"
            }
        },
        data: {
            userPreference: {
                connect: {
                    id: "e61e2cd7-672d-433b-9c47-24f32a0e0511"
                },
                // disconnect: true
            }
        }
    })
    const user = await prisma.user.findUnique({
        where: {
            age_name: {
                age: 19,
                name: "Ganya Umesh"
            }
        },
        include: {
            userPreference: true
        }
    })
    console.log(user);
}

// updateData()
//     .catch((e) => {
//         console.error(e.message)
//     })
//     .finally(async () => {
//         await prisma.$disconnect();
//     })

// deleting data
async function deleteData() {
    const user = await prisma.user.delete({
        where: {
            age_name: {
                age: 20,
                name: "Ankush2"
            }
        }
    })
}

deleteData()
    .catch((e) => {
        console.error(e.message)
    })
    .finally(async () => {
        await prisma.$disconnect();
    })