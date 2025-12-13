import { useState, useEffect } from "react";

export default function Api() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    let url = "https://reqres.in/api/users?page=2";
    let getUser = async () => {
      await fetch(url)
        .then((i) => i.json())
        .then((res) =>
          setuser(
            res.data.sort((a, b) =>
              a.last_first_name > b.first_name
                ? 1
                : b.first_name > a.first_name
                ? -1
                : 0
            )
          )
        )
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);
  return (
    <div style={{ overflowX: "scroll" }}>
      <table className="table table-centered mb-0">
        <thead className="table-dark">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Id</th>
          </tr>
        </thead>

        <tbody>
          {user.map((i) => (
            <tr key={i.id}>
              <td>
                {i.first_name}
                {i.last_name}
              </td>
              <td>{i.email}</td>
              <td>{i.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
