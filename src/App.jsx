import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUserAction } from '../src/redux/user/user-reducer'; 
function SimpleForm() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const userList = useSelector((state) => state.userList); 

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Yuborilgan ism:", name);

    
    dispatch(addUserAction(name));

    
    setName('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mb-6"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Foydalanuvchi Formasi</h2>
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Ismingiz:
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Ismingizni kiriting"
          />
        </label>
        <button 
          type="submit" 
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 transition duration-300"
        >
          Yuborish
        </button>
      </form>

    
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-center text-gray-700">Foydalanuvchilar ro'yxati</h3>
        <ul>
          {userList.map((user, index) => (
            <li key={index} className="text-gray-700 text-center border py-2 ">
              {user}
              <button  className=' rounded-[10px] ml-[10px] py-[5px] px-[20px] bg-green-500 text-white'>edit</button>
            </li>
           
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SimpleForm;
