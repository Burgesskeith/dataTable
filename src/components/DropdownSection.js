import React from "react";

function DropdownSection({ data }) {
  console.log(data.data);
  const click = () => {
    alert("You clicked on ticket number " + data.data.id);
  };
  return (
    <div className="border border-slate-700 transition ease-linear delay-500 bg-white text-slate-700 rounded-b-md -mt-1 shadow-lg">
      <div className="px-12 py-4 flex flex-wrap text-sm justify-between ">
        <div className="">
          <p>
            User Id: <strong>{data.data.userId}</strong>
          </p>
        </div>
        <div className="">
          <p>
            Title: <strong>{data.data.title}</strong>
          </p>
        </div>
        <div className="">
          <p>
            Has it been completed: <strong>{data.data.completed}</strong>
          </p>
        </div>
        <div className="flex align-center">
          <p>Status: </p>
          <button
            onClick={click}
            className={
              data.data.completed === "true"
                ? "bg-green-700 py-1 px-4 rounded text-white shadow -mt-1 ml-2"
                : "bg-red-600 py-1 px-4 rounded text-white shadow -mt-1 ml-2"
            }
          >
            {data.data.completed === "true" ? "Completed" : "Incomplete"}
          </button>
        </div>
      </div>
      <div className="px-12 py-2 h-12 text-sm">
        We can place whatever we want in this section, including data from the
        server object, and style it as we wish.
      </div>
    </div>
  );
}

export default DropdownSection;
