import React from "react";
import Card from "../components/Card"
import "../css/CarbonToast.css"
import "../css/SimpleFlex.css"

const bucketHatDescription = "A relatively simple Discord bot written in java."

const Projects = () => {
    return (
        <div>
            <div className="text-center">
                <h1 className="text-center" style={{ paddingBottom: `5px` }}>Projects</h1>
                <p>You can find all of my projects below. I don't usually work on them besides some tinkering here and there.
                    They're all open source, and you can find their respective GitHub links in their cards.</p>
            </div>
            <div className="simple-flex-grid">
                <Card title="Bucket Hat" description={bucketHatDescription} to='./buckethat' className="simple-flex-col" />
            </div>
        </div>
    )
}

export default Projects;