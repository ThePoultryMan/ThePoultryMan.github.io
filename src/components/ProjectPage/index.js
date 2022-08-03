import React from 'react';
import './ProjectPage.css';
import ReactMarkdown from 'react-markdown';

class ProjectPage extends React.Component {
    render() {
        return (
            <div className='projectContainer'>
                <h1>{this.title}</h1>
                <p><i>{this.simpleDescription}</i></p>
                <br />
                <ReactMarkdown children={this.description}></ReactMarkdown>
            </div>
        )
    }
}

export default ProjectPage;