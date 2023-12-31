import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function seed() {
  try {
    // Delete existing data
    await prisma.book.deleteMany();
    await prisma.author.deleteMany();
    await prisma.bookStore.deleteMany();


    // Reset auto-increment counters
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Author"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="BookStore"`;
    await prisma.$executeRaw`DELETE FROM sqlite_sequence WHERE name="Book"`;

    // seeding data for the Author Model
    await prisma.author.create({
      data: {
        name: "Abdillahi Osman",
      },
    });

    await prisma.author.create({
      data: {
        name: "Mohamed Ali",
      },
    });
    await prisma.author.create({
        data: {
          name: "Jamma Abdi",
        },
      });await prisma.author.create({
        data: {
          name: "Farhia Yousuf",
        },
      });


    // seeding data for book model
    await prisma.bookStore.create({
        data:{
            name:"Al-Xusayni"
        }
    })

    await prisma.bookStore.create({
        data:{
            name:"Hema-Books"
        }
    })

    await prisma.bookStore.create({
        data:{
            name:"Madiina Books"
        }
    })

    await prisma.bookStore.create({
        data:{
            name:"Qaanuuni"
        }
    })


    // seeding Books Model
    await prisma.book.create({
        data:{
           bookstoreId:1,
           bookid:1,
           image: "https://media.springernature.com/full/springer-static/cover-hires/book/978-1-4842-0187-9",
           title:"Beginning of Node.js",
           price:19.99,
          authorId:1
        }
    })

    await prisma.book.create({
        data:{
           bookstoreId:2,
           bookid:33,
           image: "https://javascriptbook.com/images/book/javascript-and-jquery-book-cover.png",
           title:"JavaScript & JQuery",
           price:21.98,
           authorId:1
        }
    })
    await prisma.book.create({
        data:{
           bookstoreId:1,
           bookid:1,
           image: "https://images.booksense.com/images/917/981/9781491981917.jpg",
           title:"Windows 10 - The Missing Manual",
           price:13.59,
           authorId:2
           

        }
    })
  } catch (error) {
    console.error(error.message);
  }
}

seed();
