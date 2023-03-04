import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  getMessage: publicProcedure.mutation(({ ctx }) => {
    return ctx.t("common:message-success");
  }),
});
