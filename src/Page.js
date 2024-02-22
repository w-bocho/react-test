 import { useState } from "react";


const Page = ({users, changeHeader, deleteUser}) => {

    const [inpVal, setInpVal] = useState("");

    return (
        <div className="users">
            {users.map((user, index) => (
                <div className="user" key={"user" + index}>
                    <input type="text" className="aaa"
                onInput={(e) => changeHeader(e.target.value + " " + user.name)} />

                    <input type="text" className="aaa"
                        value={inpVal}
                        onInput={(e) => {
                            setInpVal(e.target.value)
                        }}
                    />

                    <p>{ inpVal }</p>
                
                    <h3>{user.name}</h3>
                    <p>{user.age}</p>
                    <button onClick={() => deleteUser(user.id)}>{`${user.hobby} - delete the usr`}</button>
                </div>
            ))}
        </div>
    );
}
 
export default Page;