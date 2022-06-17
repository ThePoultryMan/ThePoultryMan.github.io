import React from "react";

class Project extends React.Component {
    render() {
        return (
            <>
                <h1>{this.title}</h1>
                <p><i>{this.simpleDescription}</i></p>
                {this.description}
            </>
        );
    }
}

export default Project;