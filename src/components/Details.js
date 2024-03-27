
// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState(localStorage.getItem('currentLoginUser') || '');
//     const [isLoggedIn, setIsLoggedIn] = useState(!!currentLoginUser);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//         setIsLoggedIn(!!currentLoginUser); // Check if currentLoginUser is not empty
//     }, [userData, currentLoginUser]);

//     // Function to handle user login
//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             localStorage.setItem('currentLoginUser', user.email); // Store currentLoginUser in local storage
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//         localStorage.removeItem('currentLoginUser'); // Remove currentLoginUser from local storage
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     return (
//         <div className="container mt-3 ">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
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
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;
// Import React, useState, useEffect, and CryptoJS



// import React, { useState, useEffect } from 'react';
// import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

// const UserManagement = () => {
//     // State for managing user data
//     const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
//     const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
//     const [currentLoginUser, setCurrentLoginUser] = useState(localStorage.getItem('currentLoginUser') || '');
//     const [isLoggedIn, setIsLoggedIn] = useState(!!currentLoginUser);
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     // Effect to update user data in local storage
//     useEffect(() => {
//         localStorage.setItem('useryoutube', JSON.stringify(userData));
//         setIsLoggedIn(!!currentLoginUser); // Check if currentLoginUser is not empty
//     }, [userData, currentLoginUser]);

//     // Function to handle user login
//     const handleLogin = () => {
//         const user = userData.find(user => user.email === email && user.password === password);
//         if (user) {
//             setCurrentLoginUser(user.email);
//             localStorage.setItem('currentLoginUser', user.email); // Store currentLoginUser in local storage
//         } else {
//             alert('Invalid email or password');
//         }
//     };

//     // Function to handle user logout
//     const handleLogout = () => {
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//         localStorage.removeItem('currentLoginUser'); // Remove currentLoginUser from local storage
//     };

//     // Function to handle input change
//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'email') {
//             setEmail(value);
//         } else if (name === 'password') {
//             setPassword(value);
//         }
//     };

//     // Function to handle duplicating user
//     const handleDuplicate = (index) => {
//         const updatedUserData = [...userData];
//         const user = updatedUserData[index];

//         // Encrypt the password
//         const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

//         // Update the passwords in local storage
//         const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
//         localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
//         setPasswords(updatedPasswords);

//         // Duplicate the user
//         const [name, domain] = user.email.split('@');
//         const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
//         const duplicatedUser = { ...user, email: duplicateEmail };
//         setUserData([...userData, duplicatedUser]);
//     };

//     // Function to handle updating user
//     const handleUpdate = () => {
//         // Find the current user in userData
//         const userIndex = userData.findIndex(user => user.email === currentLoginUser);
//         if (userIndex !== -1) {
//             // Update the user's password
//             const updatedUser = { ...userData[userIndex], password: password };
//             const updatedUserData = [...userData];
//             updatedUserData[userIndex] = updatedUser;
//             setUserData(updatedUserData);
//             alert('Password updated successfully');
//         }
//     };

//     // Function to handle deleting user
//     const handleDelete = () => {
//         // Filter out the current user from userData
//         const updatedUserData = userData.filter(user => user.email !== currentLoginUser);
//         setUserData(updatedUserData);
//         setCurrentLoginUser('');
//         setIsLoggedIn(false);
//         localStorage.removeItem('currentLoginUser'); // Remove currentLoginUser from local storage
//         alert('User deleted successfully');
//     };

//     return (
//         <div className="container mt-3">
//             <h3 className='text-center'>User Management</h3>
//             <div className="text-center mb-3">
//                 {!isLoggedIn ? (
//                     <>
//                         <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
//                         <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
//                         <button className="btn btn-success mr-2" onClick={handleLogin}>Login</button>
//                     </>
//                 ) : (
//                     <>
//                         <p>Logged in as: {currentLoginUser}</p>
//                         <button className="btn btn-danger mr-2" onClick={handleLogout}>Logout</button>
//                         <button className="btn btn-info mr-2" onClick={handleUpdate}>Update Password</button>
//                         <button className="btn btn-warning" onClick={handleDelete}>Delete Account</button>
//                     </>
//                 )}
//             </div>
//             {isLoggedIn && (
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
//                             user.email !== currentLoginUser && (
//                                 <tr key={index}>
//                                     <td>{user.email.split('@')[0]}</td>
//                                     <td>{user.name}</td>
//                                     <td>
//                                         <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
//                                     </td>
//                                 </tr>
//                             )
//                         ))}
//                     </tbody>
//                 </table>
//             )}
//         </div>
//     );
// };

// export default UserManagement;
// Import React, useState, useEffect, and CryptoJS
import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js'; // Import CryptoJS for encryption

const UserManagement = () => {
    // State for managing user data
    const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('useryoutube')) || []);
    const [passwords, setPasswords] = useState(JSON.parse(localStorage.getItem('passwords')) || {});
    const [currentLoginUser, setCurrentLoginUser] = useState(localStorage.getItem('currentLoginUser') || '');
    const [isLoggedIn, setIsLoggedIn] = useState(!!currentLoginUser);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // Effect to update user data in local storage
    useEffect(() => {
        localStorage.setItem('useryoutube', JSON.stringify(userData));
        setIsLoggedIn(!!currentLoginUser); // Check if currentLoginUser is not empty
    }, [userData, currentLoginUser]);

    // Function to handle user login
    const handleLogin = () => {
        const user = userData.find(user => user.email === email && user.password === password);
        if (user) {
            setCurrentLoginUser(user.email);
            localStorage.setItem('currentLoginUser', user.email); // Store currentLoginUser in local storage
        } else {
            alert('Invalid email or password');
        }
    };

    // Function to handle user logout
    const handleLogout = () => {
        setCurrentLoginUser('');
        setIsLoggedIn(false);
        localStorage.removeItem('currentLoginUser'); // Remove currentLoginUser from local storage
    };

    // Function to handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        } else if (name === 'newPassword') {
            setNewPassword(value);
        }
    };

    // Function to handle duplicating user
    const handleDuplicate = (index) => {
        const updatedUserData = [...userData];
        const user = updatedUserData[index];

        // Encrypt the password
        const encryptedPassword = CryptoJS.AES.encrypt(user.password, 'secret').toString();

        // Update the passwords in local storage
        const updatedPasswords = { ...passwords, [user.email]: encryptedPassword };
        localStorage.setItem('passwords', JSON.stringify(updatedPasswords));
        setPasswords(updatedPasswords);

        // Duplicate the user
        const [name, domain] = user.email.split('@');
        const duplicateEmail = `${name}_loggedin.${name}@gmail.com`;
        const duplicatedUser = { ...user, email: duplicateEmail };
        setUserData([...userData, duplicatedUser]);
    };

    // Function to handle updating user password
    const handleChangePassword = () => {
        // Find the current user in userData
        const userIndex = userData.findIndex(user => user.email === currentLoginUser);
        if (userIndex !== -1) {
            // Check if the current password matches
            if (userData[userIndex].password === password) {
                // Update the password
                const updatedUser = { ...userData[userIndex], password: newPassword };
                const updatedUserData = [...userData];
                updatedUserData[userIndex] = updatedUser;
                setUserData(updatedUserData);
                setPassword('');
                setNewPassword('');
                alert('Password updated successfully');
            } else {
                alert('Current password is incorrect');
            }
        }
    };

    // Function to handle deleting user account
    const handleDeleteAccount = () => {
        // Filter out the current user from userData
        const updatedUserData = userData.filter(user => user.email !== currentLoginUser);
        setUserData(updatedUserData);
        setCurrentLoginUser('');
        setIsLoggedIn(false);
        localStorage.removeItem('currentLoginUser'); // Remove currentLoginUser from local storage
        alert('Account deleted successfully');
    };

    return (
        <div className="container mt-3">
            <h3 className='text-center'>User Management</h3>
            <div className="text-center mb-3">
                {!isLoggedIn ? (
                    <>
                        <input type="email" name="email" value={email} onChange={handleInputChange} placeholder="Email" />
                        <input type="password" name="password" value={password} onChange={handleInputChange} placeholder="Password" />
                        <button className="btn btn-success mr-2" onClick={handleLogin}>Login</button>
                    </>
                ) : (
                    <>
                        <p>Logged in as: {currentLoginUser}</p>
                        <input type="password" name="newPassword" value={newPassword} onChange={handleInputChange} placeholder="New Password" />
                        <button className="btn btn-info mr-2" onClick={handleChangePassword}>Change Password</button>
                        <button className="btn btn-danger mr-2" onClick={handleDeleteAccount}>Delete Account</button>
                        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                    </>
                )}
            </div>
            {isLoggedIn && (
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user, index) => (
                            user.email !== currentLoginUser && (
                                <tr key={index}>
                                    <td>{user.email.split('@')[0]}</td>
                                    <td>{user.name}</td>
                                    <td>
                                        <button className="btn btn-dark btn-sm" onClick={() => handleDuplicate(index)}>Duplicate</button>
                                    </td>
                                </tr>
                            )
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserManagement;

