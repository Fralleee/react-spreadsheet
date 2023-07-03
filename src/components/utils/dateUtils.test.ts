import { extractDelayFromDateAndNow } from "./dateUtils";

describe("extractDelayFromDateAndNow", () => {
  it("should return zero for the current time", () => {
    const now = new Date();
    const delay = extractDelayFromDateAndNow(now);
    expect(delay).toBeCloseTo(0, 2); // Allow for a small amount of delay (2 ms) due to test execution time
  });

  it("should return a positive number for a future time", () => {
    const future = new Date();
    future.setHours(future.getHours() + 1);
    const delay = extractDelayFromDateAndNow(future);
    expect(delay).toBeGreaterThan(0);
  });

  it("should return a negative number for a past time", () => {
    const past = new Date();
    past.setHours(past.getHours() - 1);
    const delay = extractDelayFromDateAndNow(past);
    expect(delay).toBeLessThan(0);
  });
});
