import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()

export default async function Index() {
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
  return (
    <div>
    </div>
  );
}
