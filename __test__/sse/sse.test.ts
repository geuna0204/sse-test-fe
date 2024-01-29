import { server } from "./../../src/mocks/server";
import { sum } from "./../../src/utils/sum";
import { screen, waitFor } from "@testing-library/react";

describe("test sum", () => {
  it("success", () => {
    expect(sum(1, 2)).toStrictEqual(3);
  });
});

export {};
