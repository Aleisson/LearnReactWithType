import { useState } from "react";
interface User {
    name: string;
    age: number;
    country: string;
    admin: boolean;
}

export default function UserButton() {
    // const [user, setUser] = useState(null);
    const [user, setUser] = useState<User | null>(null);
  
    const fetchUser = () =>
      setUser({
        name: "Caio",
        age: 23,
        country: "Brasil",
        admin: false,
      });
  
    return (
      <div>
        <h1>User Button</h1>
        <button onClick={fetchUser}>Gerar o usuario</button>
        {user && <p>{`Bem vindo ${user.name}`}</p>}
      </div>
    );
  }