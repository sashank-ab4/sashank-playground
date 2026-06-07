import { useState } from "react";
const inititalState = {
  name: "",
  age: "",
  emailId: "",
  phoneNum: "",
};
export default function MultipleForms() {
  const [page, setPage] = useState(1);
  const [formData, setFormData] = useState(inititalState);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table(`
      Name: ${formData.name}
      Age: ${formData.age}
      EmailId: ${formData.emailId}
      Phone: ${formData.phoneNum}
      
      `);
    setFormData(inititalState);
  };

  return (
    <div>
      <h1>Fill the Forms!</h1>
      <form onSubmit={handleSubmit}>
        {page === 1 && (
          <>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              name="name"
              onChange={handleChange}
            />

            <input
              type="text"
              placeholder="age"
              value={formData.age}
              name="age"
              onChange={handleChange}
            />
            <button className="bg-blue-300" onClick={() => setPage(2)}>
              Next
            </button>
          </>
        )}
        {page === 2 && (
          <>
            <input
              type="text"
              placeholder="EmailId"
              value={formData.emailId}
              name="emailId"
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="PhoneNumber"
              value={formData.phoneNum}
              name="phoneNum"
              onChange={handleChange}
            />

            <button className="bg-gray-500 p-2" onClick={() => setPage(1)}>
              Edit
            </button>
            <button className="bg-green-500 p-2" onClick={handleSubmit}>
              Submit
            </button>
          </>
        )}
      </form>
    </div>
  );
}
