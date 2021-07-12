import Card from "./Card";
import "./ErrorModal.css";

const ErrorModal = (props) => {

  return (
    <div>
      <div className="backdrop" onClick={props.errorHandler}/>
      <Card className="modal">
        <header className="header">
          <h1>{props.headerData}</h1>
        </header>
        <div className="content">
          <p>{props.contentData}</p>
        </div>
        <footer className="actions">
          <button onClick={props.errorHandler}>Ok</button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
