import { use } from "react";
export default function User({ fetchUser }){

    const users = use(fetchUser);
    return(
        <div className="card">
            <h1>User : {users.length}</h1>
        </div>
    )
}