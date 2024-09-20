import { Box, LinearProgress } from "@mui/material";
import { useAppSelector } from "../hooks";
import { Action, InitialStateWiki } from "../interface";
import ErrorModal from "./ErrorModal";
import Card from "./Card";

const CardBox = (): JSX.Element => {
  const { loading, error, value } = useAppSelector(
    ({ wiki }: { wiki: InitialStateWiki }) => wiki
  );

  if (loading)
    return (
      <Box sx={{ width: "100%", my: 2 }}>
        <LinearProgress />
      </Box>
    );

  if (error) return <ErrorModal error={error} />;

  return (
    <Box sx={{ width: "100%", my: 2 }}>
      {value.length === 0 ? (
        <div style={{ textAlign: "center", fontSize: "20px" }}>No data</div>
      ) : null}
      {value.map((elem: Action, index: number) => (
        <Card elem={elem} key={index} />
      ))}
    </Box>
  );
};

export default CardBox;
