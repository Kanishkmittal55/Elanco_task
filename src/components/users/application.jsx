import { useContext } from "react";
import Spinner from "../layout/Spinner";
import theContext from "../../context/github/theContext";

function Application({
  appData: {
    InstanceId,
    MeterCategory,
    Date,
    ConsumedQuantity,
    ResourceGroup,
    ResourceLocation,
    Tags
  }
}) {
  const { applicationData, loading, applications } = useContext(theContext);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        <ul>
          {" "}
          <li>{Date}</li>
        </ul>
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default Application;
