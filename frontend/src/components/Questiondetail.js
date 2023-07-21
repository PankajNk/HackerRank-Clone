import React from 'react';
import { useParams } from 'react-router-dom';

const QuestionDetails = () => {
    const {questionTitle}= useParams();
    return(
        <div>
            <header>Header</header>
              <h1>Question: {questionTitle}</h1>
                 {/* Question details here */}
            <footer>footer</footer>
        </div>
    );
};

export default QuestionDetails;