import Navbar from "@/components/navbar";
import React, { useEffect, useState } from "react";

export default function formPacientes() {

  const [selectedObject, setSelectedObject] = useState(null);

  const data = [
    { id: 1, name: "Object 1" },
    { id: 2, name: "Object 2" },
    // Add more data as needed
  ];

  const handleShowObject = (object) => {
    setSelectedObject(object);
  };
  return(
    <div>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((object) => (
          <tr key={object.id}>
            <td>{object.id}</td>
            <td>{object.name}</td>
            <td>
              <button className="btn btn-xs mt-2" onClick={() => handleShowObject(object)}>
                Ver
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {selectedObject && (
      <div>
        <h2>Selected Object</h2>
        <p>ID: {selectedObject.id}</p>
        <p>Name: {selectedObject.name}</p>
      </div>
    )}
  </div>
  );
}