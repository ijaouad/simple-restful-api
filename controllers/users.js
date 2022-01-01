import { v4 as uuidv4 } from 'uuid';


let users = [];

export const getAllUsers = (req, res) => {
    res.json(users)
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const user = users.find((user) => user.id == id)     
    res.json(user)
}

export const addUser = (req, res) => {
    const user = req.body;

    users.push({ id: uuidv4(), ...user });

    res.send(`${user.name} has been added`);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;

    users = users.filter((user) => user.id !== id);

    res.send(`User with id [${id}] has been deleted`)
}

export const editUser = (req, res) => {
    const { id } = req.params;
    const { name, age, bio } = req.body;

    const user = users.find((user) => user.id = id);

    if (name) user.name = name;
    if (age) user.age = age;
    if (bio) user.bio = bio;

    res.send(`User with id [${id}] has been updated`);
    
}