import React from "react";
import "./ProjectPage.css";

class ProjectPage extends React.Component {
    render() {
        return (
            <div className="projectContainer">
                <h1>{this.title}</h1>
                <p><i>{this.simpleDescription}</i></p>
                {this.description}
            </div>
        );
    }
}

export default ProjectPage;