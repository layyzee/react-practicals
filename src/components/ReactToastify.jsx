import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

toast.configure();
const ReactToastify = () => {
  const notify = () => {
    toast("Basic  Notification!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 8000,
    });
    toast.success("Success Notification!", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: false,
    });
    toast.info("Info Notifiction!", { position: toast.POSITION.TOP_RIGHT });
    toast.warn(<CustomToast />, { position: toast.POSITION.BOTTOM_LEFT });
    toast.error("Error Notifiction!", {
      position: toast.POSITION.BOTTOM_CENTER,
    });
    toast("Basic Notifiction!", { position: toast.POSITION.BOTTOM_RIGHT });
  };

  return (
    <div>
      <button onClick={notify}>Notify!</button>
    </div>
  );
};

export default ReactToastify;
