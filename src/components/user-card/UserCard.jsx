import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const UserCard = ({ username, onEdit, onDelete,image }) => {
  return (
    <div className="w-full max-w-sm bg-gray-900 border border-2 border-cyan-400 rounded-lg shadow-lg p-6 flex flex-col items-center">
      <img
        className="w-24 h-24 mb-4 rounded-full shadow-md border-2 border-cyan-400"
        src={image}
        alt={username}
      />
      <h5 className="text-xl font-semibold text-white mb-4">{username}</h5>
      <div className="flex gap-4">
        <button
          onClick={onEdit}
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          <FontAwesomeIcon icon={faEdit} /> Edit
        </button>
        <button
          onClick={onDelete}
          className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-200"
        >
          <FontAwesomeIcon icon={faTrash} /> Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
