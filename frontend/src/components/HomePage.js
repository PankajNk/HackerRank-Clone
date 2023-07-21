import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';






function HomePage(){
    const [questions, setQuestion] = useState([]);
    useEffect(() => {
        fetch('/api/questions/')
            .then((response) => response.json())
            .then((data) => setQuestion(data))
            .catch((error) => console.log(error));
    },[]);
    return(
        <div>
            <header>Place the Header things </header>
            <h1>Welcome to the arena of coding </h1>
            {/* placement of this button should be on the right and only for admin  */}
            <link to = "/create_question"> Create Question </link>
            {/* Render the cards with question here */}
            <div>
                {question.length == 0 ?(
                    <p>No question </p>
                ):(
                questions.map(question =>(
                    <div key={question.id}>
                        <h3>{question.question_title}</h3>
                        <button>
                            <Link to = {'/question/${question.id}'}>start</Link>
                        </button>
                    </div>
                ))
                )}
            </div>
            <footer> Footer of this page </footer>
        </div>
    );
};

export default HomePage;
