interface UserAdressProps {
    name: string;
    age: number;
    address: string;
    dob: Date;
}

export default function UserAdressComponent(userAdress: UserAdressProps) {
    return (
        <div>
            <h1>UserAdress Component</h1>
            Nome: <b>{userAdress.name}</b>
            <br />
            Idade: <b>{userAdress.age}</b>
            <br />
            Cidade onde nasceu: <b>{userAdress.address}</b>
            <br />
            Data que nasceu: <b>{userAdress.dob.toDateString()}</b>
        </div>
    )
}