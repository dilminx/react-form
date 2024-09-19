import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: null,
    url: "",
    about: "",
  });

  const handleChange = (e) => {
    const { name, type, value } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: type === "file" ? e.target.files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.firstname || !value.lastname || !value.email) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log(value);
  };

  const resetFun = () => {
    setValue({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      gender: "",
      subject: "",
      resume: null,
      url: "",
      about: "",
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Form in React</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-slate-100 p-8 rounded-lg space-y-6 shadow-2xl"
      >
        <div>
          <label
            htmlFor="firstname"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="firstname"
            value={value.firstname}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter first name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="lastname"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="lastname"
            value={value.lastname}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter last name"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={value.email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter email"
            required
          />
        </div>

        <div>
          <label
            htmlFor="contact"
            className="block text-sm font-medium text-gray-700"
          >
            Contact
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="contact"
            value={value.contact}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter contact"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <div className="mt-1">
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              value="Male"
              className="mr-2"
            />{" "}
            Male
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              value="Female"
              className="ml-4 mr-2"
            />{" "}
            Female
            <input
              onChange={handleChange}
              type="radio"
              name="gender"
              value="Other"
              className="ml-4 mr-2"
            />{" "}
            Other
          </div>
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-gray-700"
          >
            Subject
          </label>
          <select
            name="subject"
            onChange={handleChange}
            value={value.subject}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
          >
            <option value="Maths">Maths</option>
            <option value="Art">Art</option>
            <option value="Commerce">Commerce</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700 "
          >
            Resume
          </label>
          <input
            onChange={handleChange}
            type="file"
            name="resume"
            className="mt-1 block w-full text-sm text-gray-500 file:bg-green-200 file:border-none file:m-1"
          />
        </div>

        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-700"
          >
            Resume URL
          </label>
          <input
            onChange={handleChange}
            value={value.url}
            type="text"
            name="url"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Resume URL"
          />
        </div>

        <div>
          <label
            htmlFor="about"
            className="block text-sm font-medium text-gray-700"
          >
            About
          </label>
          <textarea
            onChange={handleChange}
            name="about"
            value={value.about}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter Descriptions"
            rows="4"
          />
        </div>

        <div className="flex justify-between">
          <button
            onClick={resetFun}
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-700"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
        <p className="text-center text-gray-500">
          Check details in the console
        </p>
      </form>
    </div>
  );
}

export default App;
