import PostCard from "@/components/common/PostCard";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";
import { PostData, PostProps } from "@/interfaces";
import { useState } from "react";

const Posts: React.FC<{posts: PostProps[]}> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [post, setPost] = useState<PostData | null>(null);


  const handleAddPost = (newPost: PostData) => {
    setPost({ ...newPost, id: posts.length + 1 });
  };


  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <div className="flex justify-between">
          <h1 className=" text-2xl font-semibold">Post Content</h1>
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white">Add Post</button>
        </div>
        <div className="grid grid-cols-3 gap-2 ">
          {
            posts?.map(({ title, body, userId, id }: PostProps, key: number) => (
              <PostCard title={title} body={body} userId={userId} id={id} key={key} />
            ))
          }
        </div>
      </main>

      {isModalOpen && (
        <PostModal onClose={() => setModalOpen(false)} onSubmit={handleAddPost} />
      )}
    </div>
  )
}


export async function getStaticProps() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
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
        userId: 1,
        id: 1,
        title: "Sample Post 1",
        body: "This is a sample post for demonstration purposes."
      },
      {
        userId: 1,
        id: 2,
        title: "Sample Post 2",
        body: "Another sample post to showcase the PostCard component."
      }
    ];
    
    return {
      props: {
        posts
      }
    }
  }
}

export default Posts;
