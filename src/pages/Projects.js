import React from "react";
import Card from "../components/Card"
import "../css/CarbonToast.css"
import "../css/SimpleFlex.css"

const BucketHatDescription = "A relatively simple Discord bot written in java."

const Projects = () => {
    return (
        <div>
            <h1 className="text-center">Projects</h1>
            <div className="simple-flex-grid">
                <Card maxWidth="25vw" title="Bucket Hat" description={BucketHatDescription} className="simple-flex-col" />
            </div>
        </div>
    )
}

export default Projects;