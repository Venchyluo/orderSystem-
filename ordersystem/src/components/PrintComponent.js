// import React, { useState, useEffect, useRef } from "react";
// import { Button } from "antd";
// import ReactToPrint from "react-to-print";
// import Receipt from "./Receipt";

// export default function PrintComponent() {
//   let componentRef = useRef();

//   return (
//     <div>
//       <ReactToPrint
//         trigger={() => <Button>Print this out!</Button>}
//         content={() => componentRef}
//       />
//       <Receipt ref={(el) => (componentRef = el)} />
//     </div>
//   );
// }
