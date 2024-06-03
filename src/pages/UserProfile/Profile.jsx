import { useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { FaRegEdit } from "react-icons/fa";

const Profile = () => {
  const [ isEdit, setIsEdit ] = useState(false);
  const { user } = useAuth();

  const handleProfileEdit = () => {
    setIsEdit(!isEdit);
    console.log(isEdit)
  }
  if (!isEdit) {
    return (
      <>
        <div className=" p-6 w-full rounded-xl shadow-md ">
        <div className="mb-12 flex justify-between border-b-2 border-dashed py-4">
          <p className="text-2xl font-semibold">My Profile</p>  
            <button onClick={() => handleProfileEdit(isEdit)}>
            <FaRegEdit size={25}/>
            </button>
        </div>
        {/* 1st row */}
        <div className="mb-12 md:grid md:grid-cols-2 ">
          <div>
          <p className="text-lg ">Full Name</p>
          <h3 className="mt-2 p-3 text-xl font-semibold">{user?.displayName }</h3>
          </div>
          <div>
            <p className="text-lg"> Email</p>
            <h3 className="mt-2 p-3 text-xl font-semibold">{ user?.email}</h3>
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:grid md:grid-cols-2 ">
          <div>
          <p className="text-lg">Mobile Number</p>
          <h3 className="mt-2 p-3 text-xl font-semibold">01918585333</h3>
          </div>
        </div>
      </div>
      </>
    )
  }
  return (
    <>
      
      {/* ------------------------------------------------------------------ */}
      <div className=" p-6 w-full rounded-xl shadow-md ">
        <div className="mb-12 flex justify-between border-b-2 border-dashed py-4">
          <p className="text-2xl font-semibold">My Profile</p>  
          <button onClick={() => handleProfileEdit(isEdit)}>
          <FaRegEdit size={25}/>
          </button>
        </div>
        {/* 1st row */}
        <div className="mb-12 md:grid md:grid-cols-2 ">
          <div className="mr-6">
            <p className="text-lg ">Full Name</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full"
              type="text" defaultValue={user?.displayName} />
          </div>
          <div>
            <p className="text-lg"> Email</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full"
              type="text" defaultValue={user?.email} />
          </div>
        </div>
        {/* 2nd row */}
        <div className="md:grid md:grid-cols-2 ">
          <div className="mr-6">
            <p className="text-lg">Mobile Number</p>
            <input
              className="mt-2 text-xl font-semibold bg-zinc-200 p-3 rounded-lg w-full"
              type="text" defaultValue="01918585333" />
          </div>
        </div>
        <div className="mt-10 text-end">
          <button className="btn ">Save Changes</button>
        </div>
      </div>
    </>
  );
};

export default Profile;