"use client";

import CartList from "./components/cartList";
import ProductList from "./components/product";
import {
  useGetAllPostQuery,
  useGetPostByIdQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from "./store/slice/postApi";

export default function Home() {
  const [createPost, postResult] = useCreatePostMutation();
  const [updatePost, updateResult] = useUpdatePostMutation();
  const [deletePost, deleteResult] = useDeletePostMutation();

  const data: any = useGetAllPostQuery("bret");

  const singleData:any = useGetPostByIdQuery(6);

  console.log("api data", data);
  console.log("singlepost", singleData);
  console.log("postResult", postResult)
  console.log("updateResult", updateResult)
  console.log("deleteResult", deleteResult)

  return (
    <main className=" p-5 items-center gap-10 flex flex-col">
      <h1>Redux toolkit</h1>

      <div className='flex w-full items-center justify-evenly gap-10 flex-wrap'>
        <h1>hello</h1>
        <button onClick={() => createPost({ name: "bilal", id: "012" })}>
          add post
        </button>

        <button onClick={() => updatePost({ name: "rantan lal", id: "119" })}>
          update post
        </button>

        <button onClick={() => deletePost(119)}>
          delete post
        </button>
      </div>

      <ProductList />

      <h1 className="mt-5">Cart List</h1>
      <CartList />
    </main>
  );
}
