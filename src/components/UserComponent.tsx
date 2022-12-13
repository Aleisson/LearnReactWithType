interface UserProps {
    nome: string,
    sobrenome?: string,
}

export default function UserComponent({ nome, sobrenome = "sem sobrenome", }: UserProps) {
    return (
        <div>
            <h1>User direct prop</h1>
            <h2>{nome + " -> propriedade que permite somente string "}</h2>
            <h2>{sobrenome + " -> propiedade que permite string e vazio"}</h2>
        </div>
    )
}