import React from "react";

function TodoDetails({ row, toggleDash }) {
  return (
    <div className="container p-12">
      <div className="text-3xl">Here's the ticket details</div>
      <div className="border p-4 mt-4 shadow bg-slate-100">
        <div>
          <strong>Ticket Id:</strong> {row.id}
        </div>
        <div>
          <strong>User Id:</strong> {row.userId}
        </div>
        <div>
          <strong>Title:</strong> {row.title}
        </div>
        <div>
          <strong>Completed:</strong> {row.completed}
        </div>
      </div>
      <button
        onClick={() => toggleDash()}
        className="text-white border-gray-400 bg-slate-700 px-8 py-2 rounded hover:bg-slate-600 hover:shadow-lg mt-4"
      >
        Go Back
      </button>
    </div>
  );
}

export default TodoDetails;
