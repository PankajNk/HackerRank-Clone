import React from 'react';

const Home =() =>{
    return(
        <div className='bg-primary text-white p-3'>
            <div className='bg-black p-3 mb-3'>
            <p>Our goal as an organisation is to be open about where 
            the boundary of our knowledge lies and to hire people 
            smarter than ourselves to push this boundary outward. </p>
            <p>We’ve learned over the years that saying ‘I don’t know’ 
            is sometimes the best thing to say, because this openness 
            about what we don’t know has led to a plethora of learnings, 
            and ultimately, successes.</p>

            </div>


            <div className='bg-white p-3'>
                <h2>Question For Pratices</h2>
                <div className='d-flex overflow-auto'>
                    <div className='card-deck'>
                        <div className='card'>
                            <div className='cardbody'>
                                <h3 className='card-title bg-black'>Question 1</h3>
                                <button className='btn btn-primary'>Start</button>
                            </div>
                            
                        </div>
                    
                    
                    
                   
                    </div>
                </div>
            </div>
            
        </div>
    );
};


const lowerBoxStyle = {
    padding: '20px',
    background: '#ffffff',
}

const scrollcard = {
    overflow: 'auto',
}

const cardContainerStyle = {
    display: 'flex',
}

const cardstyle = {
    flex: '0 0 300px',
    margin: '10px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #cccccc',
    borderRadius: '5px',
}
export default Home;