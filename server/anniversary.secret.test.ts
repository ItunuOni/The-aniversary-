import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createPublicContext(): TrpcContext {
  return {
    user: null,
    req: { protocol: "https", headers: {} } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };
}

describe("anniversary.verifyPasscode", () => {
  it("accepts the configured secret without exposing it in the response", async () => {
    const secret = process.env.LAMI_SECRET_PASSWORD;
    expect(secret).toBeTruthy();

    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.anniversary.verifyPasscode({ passcode: secret! });

    expect(result).toEqual({ valid: true });
    expect(JSON.stringify(result)).not.toContain(secret!);
  });

  it("rejects an incorrect passcode", async () => {
    const caller = appRouter.createCaller(createPublicContext());
    const result = await caller.anniversary.verifyPasscode({ passcode: "definitely-not-the-secret" });

    expect(result).toEqual({ valid: false });
  });
});
