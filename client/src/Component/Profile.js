import React from "react";

function Profile({ user }) {
    console.log(user);
    return (
        <div>
            <h2>User Profile</h2>
            {user && (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    {/* Add other user profile information as needed */}
                </div>
            )}
            {!user && <p>No user profile found.</p>}
        </div>
    );
}

export default Profile;
