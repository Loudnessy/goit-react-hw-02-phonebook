export const Filter = ({input}) => {
    return <div>
    <p>Find contacts by name</p>
    <input name="name" onChange={input}></input>
    </div>
}