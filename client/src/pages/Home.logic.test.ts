import { describe, expect, it } from "vitest";
import { cycleGalleryIndex, futureHopeLines, unlockProgress } from "./Home.logic";

describe("anniversary interaction logic", () => {
  it("moves through gallery memories and wraps in both directions", () => {
    expect(cycleGalleryIndex(0, -1, 6)).toBe(5);
    expect(cycleGalleryIndex(5, 1, 6)).toBe(0);
    expect(cycleGalleryIndex(2, 1, 6)).toBe(3);
  });

  it("keeps the successful unlock progression separate from an error", () => {
    expect(unlockProgress(true)).toBe("welcome");
    expect(unlockProgress(false)).toBe("error");
  });

  it("preserves the individually revealed future hopes", () => {
    expect(futureHopeLines).toEqual([
      "I want good health.",
      "I want loyalty.",
      "I want friendship.",
      "I want love.",
      "I want peace.",
    ]);
  });
});
