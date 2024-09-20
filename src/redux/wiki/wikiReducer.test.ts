import { InitialStateWiki } from "../../interface";
import {
  GET_WIKI_SENT,
  GET_WIKI_FAILED,
  GET_WIKI_SUCCESS,
} from "./wikiActions";
import wikiReducer from "./wikiReducer";

const initialStateWiki: InitialStateWiki = {
  value: [],
  error: null,
  loading: false,
};

describe("wikiReducer", () => {
  it("should handle GET_WIKI_SENT action", () => {
    const action = { type: GET_WIKI_SENT };
    const state = wikiReducer(initialStateWiki, action);
    expect(state).toEqual({ error: null, value: [], loading: true });
  });

  it("should handle GET_WIKI_FAILED action", () => {
    const action = { type: GET_WIKI_FAILED, payload: "Error" };
    const state = wikiReducer(initialStateWiki, action);
    expect(state).toEqual({ error: "Error", value: [], loading: false });
  });

  it("should handle GET_WIKI_SUCCESS action", () => {
    const action = { type: GET_WIKI_SUCCESS, payload: [] };
    const state = wikiReducer(initialStateWiki, action);
    expect(state).toEqual({ error: null, value: [], loading: false });
  });

  it("should handle default action", () => {
    const action = { type: "DEFAULT_ACTION" };
    const state = wikiReducer(initialStateWiki, action);
    expect(state).toEqual(initialStateWiki);
  });
});
