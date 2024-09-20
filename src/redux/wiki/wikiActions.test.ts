import { getWikiFailed, getWikiSent, getWikiSuccess } from "./wikiActions";
import {
  GET_WIKI_SENT,
  GET_WIKI_FAILED,
  GET_WIKI_SUCCESS,
} from "./wikiActions";

describe("wikiActions", () => {
  it("should return the correct action", () => {
    expect(getWikiSent()).toEqual({ type: GET_WIKI_SENT });
    expect(getWikiFailed("error")).toEqual({
      type: GET_WIKI_FAILED,
      payload: "error",
    });
    expect(
      getWikiSuccess([
        { text: "test", year: 2022 },
        { text: "test2", year: 2020 },
      ])
    ).toEqual({
      type: GET_WIKI_SUCCESS,
      payload: [
        { text: "test", year: 2022 },
        { text: "test2", year: 2020 },
      ],
    });
  });
});
