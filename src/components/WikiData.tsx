import { Button } from "@mui/material";
import { getWikiData } from "../redux/wiki/wikiActions";
import { useAppDispatch } from "../hooks";

const WikiData = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const fetchData = () => dispatch(getWikiData());

  return (
    <>
      <span className="title">
        On This Day <span className="date">{getToday()}</span>
      </span>
      <Button onClick={fetchData} variant="contained">
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
