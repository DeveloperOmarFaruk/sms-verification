import React from "react";
import "./Survey.css";

const Survey = () => {
  return (
    <>
      <article className="survey-page">
        <header className="survey-page-header">
          <div className="title-box">
            <h1 id="title">Customer Satisfaction Survey </h1>
          </div>

          <div className="header-box"></div>
        </header>
        <p id="description">
          {" "}
          We need your answers to imporve our service quality
        </p>
        <section className="survey-page-body">
          <form id="survey-form" name="surveyForm" action method="post">
            <fieldset className="question-fieldset">
              <div className="left-tab">
                <h4 className="question-title">
                  <label for="comments">1. How much money do you have?</label>
                </h4>
              </div>
              <div className="right-tab">
                <div className="comments-area">
                  <textarea
                    id="comments"
                    placeholder="Enter your comments here"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <fieldset className="question-fieldset">
              <div className="left-tab">
                <h4 className="question-title">
                  <label for="comments">
                    2. What return did you make in the market last year?
                  </label>
                </h4>
              </div>
              <div className="right-tab">
                <div className="comments-area">
                  <textarea
                    id="comments"
                    placeholder="Enter your comments here"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <fieldset className="question-fieldset">
              <div className="left-tab">
                <h4 className="question-title">
                  <label for="comments">
                    3. What do you think is a good return?
                  </label>
                </h4>
              </div>
              <div className="right-tab">
                <div className="comments-area">
                  <textarea
                    id="comments"
                    placeholder="Enter your comments here"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <fieldset className="question-fieldset">
              <div className="left-tab">
                <h4 className="question-title">
                  <label for="comments">
                    4. What percent return would you lend us money on?
                  </label>
                </h4>
              </div>
              <div className="right-tab">
                <div className="comments-area">
                  <textarea
                    id="comments"
                    placeholder="Enter your comments here"
                  ></textarea>
                </div>
              </div>
            </fieldset>

            <div className="center-row">
              <input
                id="submit"
                className="submit-btn"
                type="submit"
                value="Done"
              />
            </div>
          </form>
        </section>
      </article>
    </>
  );
};

export default Survey;
