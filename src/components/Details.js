
// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [newUsername, setNewUsername] = useState('');
//     const [newName, setNewName] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

//     const handleDelete = (index) => {
//         const updatedUserData = [...userData];
//         updatedUserData.splice(index, 1);
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     const handleUpdate = (index) => {
//         setEditIndex(index);
//         setNewUsername(userData[index].email.split('@')[0]);
//         setNewName(userData[index].name);
//     };

//     const handleSave = (index) => {
//         const updatedUserData = [...userData];
//         updatedUserData[index].email = `${newUsername}@domain.com`;
//         updatedUserData[index].name = newName;
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         setEditIndex(null);
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <h3 className='text-center'>User List</h3>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{editIndex === index ? <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} /> : user.email.split('@')[0]}</td>
//                                 <td>{editIndex === index ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : user.name}</td>
//                                 <td>
//                                     {editIndex === index ? (
//                                         <>
//                                             <button className="btn btn-success btn-sm" onClick={() => handleSave(index)}>Save</button>
//                                             <button className="btn btn-secondary btn-sm" onClick={() => setEditIndex(null)}>Cancel</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(index)}>Update</button>
//                                             <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;
// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [newUsername, setNewUsername] = useState('');
//     const [newName, setNewName] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

//     const handleDelete = (index) => {
//         const updatedUserData = [...userData];
//         updatedUserData.splice(index, 1);
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     const handleUpdate = (index) => {
//         setEditIndex(index);
//         setNewUsername(userData[index].email.split('@')[0]);
//         setNewName(userData[index].name);
//     };

//     const handleSave = (index) => {
//         const updatedUserData = [...userData];
//         updatedUserData[index].email = `${newUsername}@domain.com`;
//         updatedUserData[index].name = newName;
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         setEditIndex(null);
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         updatedUserData.push({ ...user, email: duplicateEmail });
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <h3 className='text-center'>User List</h3>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{editIndex === index ? <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} /> : user.email.split('@')[0]}</td>
//                                 <td>{editIndex === index ? <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} /> : user.name}</td>
//                                 <td>
//                                     {editIndex === index ? (
//                                         <>
//                                             <button className="btn btn-success btn-sm" onClick={() => handleSave(index)}>Save</button>
//                                             <button className="btn btn-secondary btn-sm" onClick={() => setEditIndex(null)}>Cancel</button>
//                                         </>
//                                     ) : (
//                                         <>
//                                             <button className="btn btn-primary btn-sm" onClick={() => handleUpdate(index)}>Update</button>
//                                             <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
//                                             <button className="btn btn-info btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                         </>
//                                     )}
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;


// import React, { useState } from 'react';

// const UserManagement = () => {
//     const [newUsername, setNewUsername] = useState('');
//     const [newName, setNewName] = useState('');
//     const [editIndex, setEditIndex] = useState(null);
//     const userData = JSON.parse(localStorage.getItem('useryoutube')) || [];

//     const handleDelete = (index) => {
//         const updatedUserData = [...userData];
//         updatedUserData.splice(index, 1);
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         updatedUserData.push({ ...user, email: duplicateEmail });
//         localStorage.setItem('useryoutube', JSON.stringify(updatedUserData));
//         window.location.reload(); // Reload the page to reflect the changes
//     };

//     return (
//         <>
//             <div className="container mt-3">
//                 <h3 className='text-center'>User List</h3>
//                 <table className="table table-bordered">
//                     <thead>
//                         <tr>
//                             <th>Username</th>
//                             <th>Name</th>
//                             <th>Actions</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {userData.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{user.email.split('@')[0]}</td>
//                                 <td>{user.name}</td>
//                                 <td>
//                                     <button className="btn btn-info btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>
//         </>
//     );
// };

// export default UserManagement;

import React, { useState, useEffect } from 'react';

const UserManagement = () => {
    const [newUsername, setNewUsername] = useState('');
    const [newName, setNewName] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
    const [nextId, setNextId] = useState(parseInt(localStorage.getItem('nextId')) || 202403270001);

    useEffect(() => {
        localStorage.setItem('useryoutube', JSON.stringify(userData));
        localStorage.setItem('nextId', nextId);
    }, [userData, nextId]);

    const handleDelete = (id) => {
        const updatedUserData = userData.filter(user => user.id !== id);
        setUserData(updatedUserData);
        window.location.reload(); // Reload the page to reflect the changes
    };

    const handleDuplicate = (index) => {
        const updatedUserData = [...userData];
        const user = updatedUserData[index];
        const [name, domain] = user.email.split('@');
        const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
        const duplicatedUser = { ...user, id: nextId, email: duplicateEmail };
        setUserData([...userData, duplicatedUser]);
        setNextId(nextId + 1); // Increment the next ID
        window.location.reload(); // Reload the page to reflect the changes
    };

    return (
        <>
            <div className="container mt-3">
                <h3 className='text-center'>User List</h3>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.email.split('@')[0]}</td>
                                <td>{user.name}</td>
                                <td>
                                    <button className="btn btn-info btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
                                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default UserManagement;



























