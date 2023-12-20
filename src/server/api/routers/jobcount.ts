import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const jobCount = createTRPCRouter({
getAllData:publicProcedure.query(({ctx})=>{
    return ctx.prisma.jobCount.findMany()
})
})
