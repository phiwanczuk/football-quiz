import React from 'react';
import Question from "../Question/Question";
import QuestionCount from '../Question/QuestionCount';
import PropTypes from 'prop-types'
import AnswerOption from '../Quiz/AnswerOption'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


const Quiz = (props) => {

    function renderAnswerOptions(key) {
        return (
            <AnswerOption
                key={key.content}
                answerContent={key.content}
                answerType={key.type}
                answer={props.answer}
                questionId={props.questionId}
                onAnswerSelected={props.onAnswerSelected}
            />
        );
    }

    return (
        <div className="quiz">
            (
            <ReactCSSTransitionGroup
                className="container"
                component="div"
                transitionName="fade"
                transitionEnterTimeout={800}
                transitionLeaveTimeout={500}
                transitionAppear
                transitionAppearTimeout={500}
            >
                <div key={props.questionId}>
                    <QuestionCount
                        counter={props.questionId}
                        total={props.questionTotal}
                    />
                    <Question content={props.question} />
                    <ul className="answerOptions">
                        {props.answerOptions.map(renderAnswerOptions)}
                    </ul>
                </div>
            </ReactCSSTransitionGroup>
        </div>
    )
}
Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;