import { revalidatePath } from "next/cache"
import { z } from "zod"
import { db } from "../db"

const createUserSchema = z.object({
  email: z.string(),
  name: z.string()
})

export async function createUser(data: FormData) {
  "use server"

  const createUser = createUserSchema.parse({
    email: data.get("email"),
    name: data.get("name")
  })
  const user = await db.user.create({
    data: createUser
  })
  if (user) {
    console.log(user)
    revalidatePath('/')
  }
}
