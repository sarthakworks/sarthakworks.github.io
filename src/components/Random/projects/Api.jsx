import { useState, useEffect } from "react";

export default function Api() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    let getUser = async () => {
      await fetch(url)
        .then((i) => i.json())
        .then((res) => setuser(res))
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  const handleSort = () => {
    const sorted = [...user].sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );
    setuser(sorted);
  };

  return (
    <div style={{ overflowX: "scroll" }}>
      <table className="table table-centered mb-0">
        <thead className="table-dark">
          <tr>
            <th onClick={handleSort} style={{ cursor: "pointer" }}>
              Name
            </th>
            <th>Email</th>
            <th>Id</th>
          </tr>
        </thead>

        <tbody>
          {user.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>{i.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
