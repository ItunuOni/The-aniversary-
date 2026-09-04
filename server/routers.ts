import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),
  anniversary: router({
    verifyPasscode: publicProcedure
      .input(z.object({ passcode: z.string().min(1).max(128) }))
      .query(({ input }) => ({
        valid: Boolean(process.env.LAMI_SECRET_PASSWORD && input.passcode === process.env.LAMI_SECRET_PASSWORD),
      })),
  }),
});

export type AppRouter = typeof appRouter;
