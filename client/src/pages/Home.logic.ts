export function cycleGalleryIndex(current: number, delta: number, length: number) {
  return (current + delta + length) % length;
}

export function unlockProgress(valid: boolean) {
  return valid ? "welcome" : "error";
}

export const futureHopeLines = [
  "I want good health.",
  "I want loyalty.",
  "I want friendship.",
  "I want love.",
  "I want peace.",
];
