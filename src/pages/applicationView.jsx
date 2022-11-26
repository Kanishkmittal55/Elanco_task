import React from "react";
import { useParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import theContext from "../context/github/theContext";
import Spinner from "../components/layout/Spinner";

function ApplicationView() {
  const { applicationData, loading, applications, justsearchAllApplications } =
    useContext(theContext);

  const params = useParams();

  console.log(params.login);

  useEffect(() => {
    justsearchAllApplications(params.login);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let sum = 0;
  const getTotalCost = applicationData.map(
    (appData) => (sum += parseFloat(appData.Cost)) // I am just reassigning a variable, the power of React
  );

  let ConsumedQuantity = 0;
  const getTotalConsumedQuantity = applicationData.map(
    (appData) => (ConsumedQuantity += parseFloat(appData.ConsumedQuantity)) // I am just reassigning a variable, the power of React
  );

  let dates = [];
  dates = applications.map((appData) => appData.Date);
  const maxDate = new Date(Math.max.apply(null, dates));

  return (
    <>
      {!loading ? (
        <div>
          {console.log(dates)}
          {console.log(maxDate)}
          <h1>
            This Application has {applicationData.length} entries, with total
            cost {sum}, and has total Consumed Quantity as {ConsumedQuantity}
          </h1>
          <div>
            {applicationData.map((appData, index) => (
              <div className="card bg-[#FFFFFF] shadow-md compact side bg-base-100 bg-opacity-97 m border-solid border-4 border-blue-600 mb-5 w-[60%] m-auto">
                <p className="m-auto">{"Entry No : " + (index + 1)}</p>
                <p>{"Date : " + appData.Date}</p>
                <p>{"InstanceId : " + appData.InstanceId}</p>
                <p>{"Cost : " + appData.Cost}</p>
                <p>{"ConsumedQuantity : " + appData.ConsumedQuantity}</p>
                <p>{"MeterCategory : " + appData.MeterCategory}</p>
                <p>{"ResourceGroup : " + appData.ResourceGroup}</p>
                <p>{"ResourceLocation : " + appData.ResourceLocation}</p>
                <p>{"Tags : " + JSON.stringify(appData.Tags.environment)}</p>
                <p>{"UnitOfMeasure : " + appData.UnitOfMeasure}</p>
                <p>{"ServiceName : " + appData.ServiceName}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
}

export default ApplicationView;
