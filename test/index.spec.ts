import { helloWorld } from "../src";
import { Admin } from "../src";
import { expect } from "chai";

console.log("##", Admin);

describe("helloWorld", () => {
  it("Should return greetings", () => {
    expect(helloWorld()).equals("Howdy!");
  });
});
