import { useState, useContext } from "react";
import theContext from "../../context/github/theContext";
import AlertContext from "../../context/alert/AlertContext";
import { Link } from "react-router-dom";

function ApplicationsSearch() {
  const {
    applicationData,
    applications,
    clearApplications,
    searchAllApplications,
    getAllApplications
  } = useContext(theContext);
  const { setAlert } = useContext(AlertContext);

  const [text, setText] = useState("");

  // const [Resources, setResources] = useState("");

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      searchAllApplications(text);

      setText("");
    }
  };

  const handleClickAllApplications = (e) => {
    e.preventDefault();

    getAllApplications();
  };

  const handleClick = () => clearApplications();

  return (
    <>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
        {/*Application Search Form */}

        <div>
          <br />
          <form onSubmit={handleSubmit}>
            <div className="form-control">
              <div className="relative pl-6">
                <button
                  type="submit"
                  className="rounded-2-none w-46 btn btn-lg"
                  onClick={handleClickAllApplications}
                >
                  Get All Applications in the Database
                </button>
                <br />
                <h2 className="ml-5 mt-7">Or</h2>
                <br />
                <div className="ml-5">Search For a Specific Applications :</div>
                <br />
                <input
                  type="text"
                  placeholder="Search"
                  className="mb-20 w-full bg-gray-200 input input-lg text-black"
                  value={text}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  className="absolute top-30 right-0 float-right rounded-1-none w-36 btn btn-lg"
                  onClick={handleSubmit}
                >
                  Go
                </button>
              </div>
            </div>
          </form>
        </div>

        {/*Clear Button */}
        {applications.length > 0 && (
          <div className="pl-5">
            <button onClick={handleClick} className="btn btn-ghost btn-lg">
              Clear
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default ApplicationsSearch;
