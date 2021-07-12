const User = props => {
    return (
        <div className="box-user">
            <b>{props.username}</b> is <b>{props.age}</b> years old.
        </div>
    );
};

export default User;