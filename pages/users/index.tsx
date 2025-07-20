import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import Header from "@/components/layout/Header";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";

const Users: React.FC<{posts: UserProps[]}> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const handleAddUser = (newUser: UserProps) => {
    setUser(newUser);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">Users Content</h1>
          <button 
            onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">
            Add User
          </button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {
            posts?.map((user: UserProps, key: number) => (
              <UserCard key={key} {...user} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
    </div>
  )
}

export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()
    
    return {
      props: {
        posts
      }
    }
  } catch (error) {
    // Fallback data in case of network issues
    const posts = [
      {
        id: 1,
        name: "John Doe",
        username: "johndoe",
        email: "john@example.com",
        address: {
          street: "123 Main St",
          suite: "Apt 1",
          city: "Sample City",
          zipcode: "12345",
          geo: {
            lat: "40.7128",
            lng: "-74.0060"
          }
        },
        phone: "555-1234",
        website: "johndoe.com",
        company: {
          name: "Sample Company",
          catchPhrase: "Sample catch phrase",
          bs: "sample business"
        }
      }
    ];
    
    return {
      props: {
        posts
      }
    }
  }
}

export default Users;
