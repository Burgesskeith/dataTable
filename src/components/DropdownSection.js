import React from "react";

function DropdownSection({ data }) {
  return (
    <div className="border-xl transition ease-linear delay-500 bg-slate-700 text-white">
      <div className="px-12 py-2  flex text-sm justify-between ">
        <div className="">
          <p>
            Title: <strong>{data.title}</strong>
          </p>
        </div>
        <div className="ml-12">
          <p>
            Has it been completed: <strong>{data.completed}</strong>
          </p>
        </div>
      </div>
      <div className="px-12 py-2 h-12 text-sm">
        We can place whatever we want in this section, including data from the
        server object, and style it as we wish.
      </div>
      <div className="px-12 py-2  h-12 text-sm">
        It will be nice to replace the down arrow with a click on the row
        instead.
      </div>
    </div>
  );
}

export default DropdownSection;
