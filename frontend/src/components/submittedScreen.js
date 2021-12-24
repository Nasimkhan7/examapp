import { Button } from "@mui/material";
import { useState } from "react";

const SubmitScreen = () => {
  const [key, setKey] = useState(JSON.parse(sessionStorage.getItem("key")));

  return (
    <div>
      <div className="container text-center mt-3 bg-warning">
        <div className="row shadow">
          <p>Key : {key.id}</p>
          <p>Password : {key.password}</p>
          <div className="col-ms-4 col-lg col-ms col-lx">
            <div className="text-center text-info ">Thanks</div>
            <p className="text-mute">
              Technology keeps moving forward - catch up & keep up!
            </p>
            <Button variant="contained">Get Your Certificate</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmitScreen;
