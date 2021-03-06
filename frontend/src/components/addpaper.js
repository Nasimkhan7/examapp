import { Formik } from "formik";
import React, { useEffect, useState } from "react";
import update from "immutability-helper";
import app_config from "../config";
import Swal from "sweetalert2";
import { Button } from "@mui/material";
import "./addpaper.css";

const AddPaper = () => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.api_url;

  const [questionList, setQuestionList] = React.useState([
    {
      name: "Question 1",
      answertype: "text",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    },
    {
      name: "Question 2",
      answertype: "radio",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    },
  ]);

  const paperform = {
    title: "",
    course: "",
    max_marks: "",
    author: currentUser._id,
    questions: [],
  };

  const formSubmit = (values) => {
    values.questions = questionList;
    console.log(values);

    fetch(url + "/paper/add", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Paper Added Successfully",
        });
      });
  };

  const addNewQuestion = () => {
    const newQues = {
      name: "Question " + (questionList.length + 1),
      answertype: "text",
      answer: "",
      options: ["opt1", "opt2", "opt3"],
    };

    setQuestionList([...questionList, newQues]);
  };

  const setOption = (q_i, index, e) => {
    const options = {};
    const questions = {};

    options[index] = { $set: e.target.value };
    questions[q_i] = { options: options };

    const newData = update(questionList, questions);

    console.log(newData);
    setQuestionList(newData);
  };

  const setQuestion = (q_i, e) => {

    const questions = {};

    questions[q_i] = { name: {$set: e.target.value} };

    const newData = update(questionList, questions);

    console.log(newData);
    setQuestionList(newData);
  };

  const addOption = (q_i) => {
    const questions = {};

    questions[q_i] = { options: { $push: ["new option"] } };

    const newData = update(questionList, questions);

    console.log(newData);
    setQuestionList(newData);
  };

  const changeType = (q_i, e) => {
    const questions = {};

    questions[q_i] = { answertype: { $set: e.target.value } };
    questions[q_i] = { answertype: { $set: e.target.value } };

    const newData = update(questionList, questions);

    console.log(newData);
    setQuestionList(newData);
  };

  const displayOptions = (q_i, type, options) => {
    if (type == "radio" || type == "checkbox") {
      return (
        <>
          {options.map((op, i) => {
            return (
              <input
                className="form-control mt-3 w-50"
                value={op}
                onChange={(e) => setOption(q_i, i, e)}
              />
            );
          })}
          <Button
            onClick={(e) => addOption(q_i)}
            className="mt-3"
            color="primary"
            variant="contained"
          >
            {" "}
            +{" "}
          </Button>
        </>
      );
    }
  };

  return (
    <div className="mybody">
      <div className="container">
        <h1 className="text-center py-3">CCC Exam paper</h1>
        <div className="card mt-5">
          <div className="card-body">
            <Formik initialValues={paperform} onSubmit={formSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <div class="input-group mt-3">
                    <span class="input-group-text">Title</span>
                    <input
                      type="text"
                      class="form-control"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div class="input-group mt-3">
                        <span class="input-group-text">Course</span>
                        <input
                          type="text"
                          class="form-control"
                          id="course"
                          value={values.course}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div class="input-group mt-3">
                        <span class="input-group-text">Max Marks :</span>
                        <input
                          type="number"
                          class="form-control"
                          id="max"
                          value={values.max}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-25 mt-5"
                    variant="outlined"
                  >
                    Create Paper
                  </Button>
                </form>
              )}
            </Formik>
          </div>
        </div>

        {questionList.map((question, index) => (
          <div className="card mt-5">
            <div className="card-body">
              <div class="input-group mt-3">
                <span class="input-group-text" id={"question" + index}>
                  Question {index+1}
                </span>
                <input
                  type="text"
                  class="form-control"
                  aria-label="Username"
                  aria-describedby={"question" + index}
                  onChange={e => setQuestion(index, e)}
                />
              </div>
              <div class="input-group mt-3">
                <span class="input-group-text">Question Type</span>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  value={question.answertype}
                  onChange={(e) => changeType(index, e)}
                >
                  <option value="">Open this select menu</option>
                  <option value="text">Text</option>
                  <option value="radio">Radio</option>
                  <option value="checkbox">Checkbox</option>
                </select>
              </div>
              <div className="my-3">
                {displayOptions(index, question.answertype, question.options)}
              </div>
            </div>
          </div>
        ))}
        <Button
          onClick={addNewQuestion}
          className="mt-5"
          color="primary"
          variant="contained"
        >
          Add New Question
        </Button>
        
      </div>
    </div>
  );
};

export default AddPaper;
