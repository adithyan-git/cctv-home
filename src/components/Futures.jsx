import { futures } from "../futuresDetails";
import LeftImageRightDetails from "./LeftImageRightDetails";
import LeftDetailsRightImage from "./LeftDetailsRightImage";

const Futures = () => {
  return (
    <>
      {futures.map((future) =>
        future.id % 2 === 0 ? (
          <LeftDetailsRightImage key={future.id} future={future} />
        ) : (
          <LeftImageRightDetails key={future.id} future={future} />
        )
      )}
    </>
  );
};

export default Futures;
