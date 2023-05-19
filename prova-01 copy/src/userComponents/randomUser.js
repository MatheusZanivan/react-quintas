import React, { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from "react";
import UserInfo from './randomUserInfo';

export default function RandomUser() {
    const [randomUser, setUser] = React.useState(null);

    React.useEffect(() => {
        Carregar();
    }, []);

    function Carregar() {
        fetch(`https://randomuser.me/api`)
            .then((response) => response.json())
            .then((data) => {
                setUser(data);
            });
    }

    return (
        <div>
            {randomUser ? (
                <div>
                <UserInfo randomUser={randomUser}></UserInfo>
                </div>
            ) : (
                <h3>Loading...</h3>
            )}
        </div>
    );
}
