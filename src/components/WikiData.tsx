import { Button } from "@mui/material";
import { getWikiData } from "../redux/wiki/wikiActions";
import { useAppDispatch, useAppSelector } from "../hooks";
import { InitialStateWiki } from "../interface";

const WikiData = (): JSX.Element => {
  const { loading: disabled } = useAppSelector(
    ({ wiki }: { wiki: InitialStateWiki }) => wiki
  );

  const dispatch = useAppDispatch();
  const fetchData = () => dispatch(getWikiData());

  return (
    <>
      <span className="title">
        On This Day <span className="date">{getToday()}</span>
      </span>
      <Button
        size="large"
        onClick={fetchData}
        variant="contained"
        disabled={disabled}
      >
        Get Data
      </Button>
    </>
  );
};

export default WikiData;

const getToday = (): string => {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${month} ${day}`;
};
