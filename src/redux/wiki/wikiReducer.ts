import { AnyAction } from "@reduxjs/toolkit";
import { InitialStateWiki } from "../../interface";
import {
  GET_WIKI_SENT,
  GET_WIKI_FAILED,
  GET_WIKI_SUCCESS,
} from "./wikiActions";

const initialStateWiki: InitialStateWiki = {
  value: [],
  error: null,
  loading: false,
};

const wikiReducer = (state = initialStateWiki, action: AnyAction) => {
  const { type, payload } = action;

  switch (type) {
    case GET_WIKI_SENT:
      return { error: null, value: [], loading: true };

    case GET_WIKI_FAILED:
      return { error: payload, value: [], loading: false };

    case GET_WIKI_SUCCESS:
      return { error: null, value: payload, loading: false };

    default:
      return state;
  }
};
export default wikiReducer;
