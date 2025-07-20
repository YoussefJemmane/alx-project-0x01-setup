import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-lg text-gray-600">@{username}</p>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Email:</span>
          <span className="ml-2 text-blue-600">{email}</span>
        </div>
        
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Phone:</span>
          <span className="ml-2 text-gray-600">{phone}</span>
        </div>
        
        <div className="flex items-center">
          <span className="font-medium text-gray-700">Website:</span>
          <span className="ml-2 text-blue-600">{website}</span>
        </div>
        
        <div>
          <span className="font-medium text-gray-700">Address:</span>
          <p className="text-gray-600 ml-2">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>
        
        <div>
          <span className="font-medium text-gray-700">Company:</span>
          <p className="text-gray-600 ml-2">
            <strong>{company.name}</strong><br />
            <em>{company.catchPhrase}</em>
          </p>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};

export default UserCard;
