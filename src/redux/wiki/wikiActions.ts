import { Dispatch } from "@reduxjs/toolkit";
import { Wiki } from "../../api";
import { Action } from "../../interface";

export const GET_WIKI_SENT = "GET_WIKI_SENT";
export const GET_WIKI_FAILED = "GET_WIKI_FAILED";
export const GET_WIKI_SUCCESS = "GET_WIKI_SUCCESS";

export const getWikiSent = () => {
  const actionObject = { type: GET_WIKI_SENT };
  return actionObject;
};

export const getWikiFailed = (error: string) => {
  const actionObject = { type: GET_WIKI_FAILED, payload: error };
  return actionObject;
};

export const getWikiSuccess = (data: Array<Action>) => {
  const actionObject = { type: GET_WIKI_SUCCESS, payload: data };
  return actionObject;
};

export const getWikiData = () => async (dispatch: Dispatch) => {
  dispatch(getWikiSent());
  await Wiki.getOnThisDay()
    .then((res) => dispatch(getWikiSuccess(parseAndSortWikiData(res))))
    .catch(({ title }) =>
      dispatch(getWikiFailed(title || "Something went wrong"))
    );
};

const parseAndSortWikiData = (data: {
  [key: string]: { text: string; year: number }[];
}): Array<Action> => {
  const dataArray = Object.keys(data).flatMap((key) =>
    data[key].map((elem) => ({ ...elem, type: key }))
  );

  return dataArray.sort((a, b) => b.year - a.year);
};
