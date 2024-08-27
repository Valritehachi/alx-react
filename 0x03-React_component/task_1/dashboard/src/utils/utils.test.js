import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

test("returns current year", () => {
  expect(getFullYear()).toBe(2022);
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
});
