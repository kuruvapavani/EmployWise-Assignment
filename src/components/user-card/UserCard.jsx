import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <div className="w-full max-w-sm bg-gray-900 border border-2 border-cyan-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img
        className="w-24 h-24 mb-4 rounded-full shadow-md border-2 border-cyan-400"
        src={user.avatar}
        alt={user.first_name}
      />
      <h5 className="text-xl font-semibold text-white mb-2">
        {user.first_name} {user.last_name}
      </h5>
      <p className="text-sm text-gray-400 mb-4">{user.email}</p>
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(user)}
          className="px-4 py-2 flex items-center gap-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <FontAwesomeIcon icon={faEdit} /> Edit
        </button>
        <button
          onClick={() => onDelete(user.id)}
          className="px-4 py-2 flex items-center gap-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200"
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
