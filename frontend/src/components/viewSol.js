import { Card, CardContent, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import app_config from "../config";
import "./viewSol.css";

const ViewSolutions = () => {
  const [sheetList, setSheetList] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const url = app_config.api_url;

  const fetchPapers = () => {
    fetch(url + "/answer/getbypaper/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSheetList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchPapers();
  }, []);

  const displayAnswer = () => {
    if (!loading) {
      return sheetList.map((sheet) => (
        <Card>
          <CardContent>
            <Grid container spacing={5}>
              <Grid item md={3}>
                <p>
                  {" "}
                  <b>Student Name :</b>{" "}
                </p>
              </Grid>
              <Grid item md={9}>
                <p>{sheet.name}</p>
              </Grid>
            </Grid>
            <Grid container spacing={5}>
              <Grid item md={3}>
                <p>
                  {" "}
                  <b>Email :</b>{" "}
                </p>
              </Grid>
              <Grid item md={9}>
                <p>{sheet.email}</p>
              </Grid>
            </Grid>
            <h3 className="text-center mt-5">Solved Answers</h3>
            <div className="solution">
              {sheet.data.map((ques, index) => (
                <div>
                  <p className="question">
                    <b>
                      {index + 1}. {ques.name}
                    </b>
                  </p>
                  <p className="answer">
                    <b>{ques.answer}</b>
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ));
    } else {
      return <h1>LOading...</h1>;
    }
  };

  return <div className="container">{displayAnswer()}</div>;
};

export default ViewSolutions;
