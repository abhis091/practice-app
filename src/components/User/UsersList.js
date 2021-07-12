import Card from "../UI/Card";
import User from "./User";

import './UserList.css';

const Users = (props) => {
    return (
        <Card>
            <ul className="list">
                {
                    props.users.map((user) => {
                        return (
                            <li key={user.id}>
                                <User username={user.username} age={user.age} />;
                            </li>
                        );
                    })
                }
            </ul>
        </Card>
    );
};

export default Users;
