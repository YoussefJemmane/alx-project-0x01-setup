import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('address.')) {
      const addressField = name.split('.')[1];
      if (addressField === 'lat' || addressField === 'lng') {
        setUser(prevUser => ({
          ...prevUser,
          address: {
            ...prevUser.address,
            geo: {
              ...prevUser.address.geo,
              [addressField]: value
            }
          }
        }));
      } else {
        setUser(prevUser => ({
          ...prevUser,
          address: {
            ...prevUser.address,
            [addressField]: value
          }
        }));
      }
    } else if (name.includes('company.')) {
      const companyField = name.split('.')[1];
      setUser(prevUser => ({
        ...prevUser,
        company: {
          ...prevUser.company,
          [companyField]: value
        }
      }));
    } else {
      setUser(prevUser => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-2xl max-h-screen overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            {/* Basic Info */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter full name"
                required
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={user.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter phone number"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
              <input
                type="text"
                id="website"
                name="website"
                value={user.website}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter website"
              />
            </div>

            {/* Address */}
            <div className="mb-4">
              <label htmlFor="address.street" className="block text-gray-700 font-medium mb-2">Street</label>
              <input
                type="text"
                id="address.street"
                name="address.street"
                value={user.address.street}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter street address"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address.suite" className="block text-gray-700 font-medium mb-2">Suite</label>
              <input
                type="text"
                id="address.suite"
                name="address.suite"
                value={user.address.suite}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter suite"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address.city" className="block text-gray-700 font-medium mb-2">City</label>
              <input
                type="text"
                id="address.city"
                name="address.city"
                value={user.address.city}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter city"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address.zipcode" className="block text-gray-700 font-medium mb-2">Zipcode</label>
              <input
                type="text"
                id="address.zipcode"
                name="address.zipcode"
                value={user.address.zipcode}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter zipcode"
              />
            </div>

            {/* Company */}
            <div className="mb-4">
              <label htmlFor="company.name" className="block text-gray-700 font-medium mb-2">Company Name</label>
              <input
                type="text"
                id="company.name"
                name="company.name"
                value={user.company.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter company name"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="company.catchPhrase" className="block text-gray-700 font-medium mb-2">Catch Phrase</label>
              <input
                type="text"
                id="company.catchPhrase"
                name="company.catchPhrase"
                value={user.company.catchPhrase}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter catch phrase"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="company.bs" className="block text-gray-700 font-medium mb-2">Business</label>
            <textarea
              id="company.bs"
              name="company.bs"
              value={user.company.bs}
              onChange={handleChange}
              rows={2}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter business description"
            />
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
