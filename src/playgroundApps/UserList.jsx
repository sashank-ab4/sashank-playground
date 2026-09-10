import { useState } from "react";
import useListOfUsers from "../Hooks/useListOfUsers";

export default function UserList() {
  const [searchedTerm, setSearchedTerm] = useState("");
  const { loading, error, data } = useListOfUsers();
  const users = data?.users ?? [];

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchedTerm.toLowerCase()),
  );

  if (loading) return <p>Loading Users....</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl">User Table!</h2>
        <input
          type="text"
          placeholder="Search by First Name.."
          className="p-2 border rounded-sm"
          value={searchedTerm}
          onChange={(e) => setSearchedTerm(e.target.value)}
        />
      </div>
      {/* if it is LIST
       <ul>
        {data.map((user, index) => (
          <li key={index}>
            {user.firstName} {user.lastName} {user.age}
          </li>
        ))}
      </ul> */}

      <table className="border border-collapse">
        <thead>
          <tr>
            <th className="border px-2 py-1">First Name</th>
            <th className="border px-2 py-1">Last Name</th>
            <th className="border px-2 py-1">Email</th>
            <th className="border px-2 py-1">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <tr key={user.id}>
                <td className="border px-2 py-1">{user.firstName}</td>
                <td className="border px-2 py-1">{user.lastName}</td>
                <td className="border px-2 py-1">{user.email}</td>
                <td className="border px-2 py-1">{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4">
                {`No user such as "${searchedTerm}"`}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
