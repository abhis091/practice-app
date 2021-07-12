import Card from "../UI/Card";
import User from "./User";

const Users = (props) => {
    return (
        <Card>
            <li>
                {
                    props.users.map((user) => {
                        return <User username={user.username} age={user.age} />;
                    })
                }
            </li>
        </Card>
    );
};

export default Users;
