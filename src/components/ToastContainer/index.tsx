"use client";

import { ToastContainer as Container } from "react-toastify";

const ToastContainer: React.FC = () => {
  return (
    <Container
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export default ToastContainer;
