import { User } from "../types";

const getAllUsers = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users: User[] = await response.json();
        return users.length > 0 ? users : null;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const getUserData = async (email: string) => {
    try {
        const usersData = await getAllUsers();
        if(!usersData) throw new Error("Empty users data!");

        const user: User = usersData.filter((userData) => {
            return userData.email === email
        })[0];

        if(!user) throw new Error("No matched user!");
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const setCookie = (cName: string, cValue: string, exMinutes: number) => {
    const d = new Date();
    d.setTime(d.getTime() + (exMinutes*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cName + "=" + cValue + ";" + expires + ";path=/";
}

export const getCookie = (cName: string) => {
    const name = cName + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export const loginUser = async (email: string, password: string) =>
{
    try {
        const user = await getUserData(email);
        if(!user) throw new Error("No user!");

        if(password === (user.username.charAt(0) + "pass"))
        {
            console.log("Login successful!");
            setCookie(user.email, user.name, 20);
            return user;
        }else
        {
            throw new Error("Password incorrect!");
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}