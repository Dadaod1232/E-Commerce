// import React from "react";

// const Message = ({ variant, children }) => {
//   return <div className={`alert ${variant}`}>{children}</div>;
// };

// Message.defaultProps = {
//   variant: "alert-info",
// };

// export default Message;
  
import React from "react";

const Message = ({ variant, children }) => {
  return <div className={`alert ${variant}`}>{children}</div>;
};

Message.defaultProps = {
  variant: "alert-info",
};

export default Message; 

// import React from "react";


// const Message = () => {
//   return (
//     <div>
//       {/* Display an error message */}
//       <Message variant="alert-danger">This is an error message!</Message>

//       {/* Display an info message */}
//       <Message>This is an info message!</Message>
//     </div>
//   );
// };

// export default Message;

