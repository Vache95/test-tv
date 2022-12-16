import { expect } from "@jest/globals";
import { getShowsFilm, getShows } from "service/filmsApi";

describe("films", () => {
  it("films shows", async () => {
    const data = await getShowsFilm(1);
    expect(data).not.toBe(null);
  });
  it("films shows", async () => {
    const data = await getShowsFilm(1);
    expect(data).not.toBe(undefined);
  });
  it("films", async () => {
    const data = await getShows();
    expect(data).not.toBe(null);
  });
  it("films", async () => {
    const data = await getShows();
    expect(data).not.toBe(undefined);
  });
});
