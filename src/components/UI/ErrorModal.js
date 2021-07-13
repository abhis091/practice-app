import Card from "./Card";
import "./ErrorModal.css";
import {Fragment} from 'react';
import ReactDOM from 'react-dom'

const Backdrop = props => {
    return  <div className="backdrop" onClick={props.errorHandler}/>
};

const Overlay = props => {
      return <Card className="modal">
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
};

const ErrorModal = (props) => {

  return (
    <Fragment>
      {
        ReactDOM.createPortal(<Backdrop errorHandler={props.errorHandler}/>, document.getElementById('backdrop-root'))
      }
      {
        ReactDOM.createPortal(
          <Overlay 
            errorHandler={props.errorHandler} 
            headerData = {props.headerData}
            contentData = {props.contentData}
          />, 
          document.getElementById('overlay-root')
        )
      }
    </Fragment>
  );
};

export default ErrorModal;
