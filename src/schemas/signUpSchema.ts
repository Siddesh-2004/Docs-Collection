import * as z from "zod"

const signUpSchema=z.object({
    username:z.string("Should be a string").min(6,"Username should be atleast 6 charecters"),
    email:z.email(),
    password:z.string()
})
export default signUpSchema