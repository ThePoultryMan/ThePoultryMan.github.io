import React from "react";
import Card from "../components/Card"

const BucketHatDescription = "A discord bot that makes my life easier."

const Projects = () => {
    return (
        <div>
            <h1>Projects</h1>
            <ul>
                <li>This website</li>
            </ul>
            <Card width="25rem" title="Bucket Hat" description={BucketHatDescription}/>
        </div>
    )
}

export default Projects;