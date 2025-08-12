import * as z from "zod"
const verificationCodeSchema=z.number().min(6,"the code must be 6 charecters long")

export default verificationCodeSchema;