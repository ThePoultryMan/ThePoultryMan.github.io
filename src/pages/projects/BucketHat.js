import React from "react";
import Project from "./Project";

class BucketHat extends Project {
    title = "Bucket Hat"
    simpleDescription = "A relatively simple Discord bot written in java.";
    description = <>
        <h2>About</h2>
        <p>Bucket Hat is a Discord bot created for use on my server(s). My goal was to create a system in which I could
            easily create new guild commands and new global commands.</p>
        <h2>JSON Commands</h2>
        <p>All guild commands can be created with JSON files allowing easy creation of new commands. The commands are
            updated everytime the bot starts and therefore the if you remove a JSON file then you remove the command as well.</p>
        <p>Guild commands can only be customized so much due to limiting factors that come with JSON.</p>
        <h2>Global Commands</h2>
        <p>Because global commands take up to an hour to be created and they usually have additional complexity, they
            must created by hand using code. This allows commands like the currently added GitHub command to exist with
            the functionality that it has.</p>
        <h2>Planned Features</h2>
        <ul>
            <li>Ping Command - Will give the user the current ping of the bot.</li>
            <li>Nickname Request Command - Request a nickname from the mods.</li>
            <li>Report Command - Report a user to the mods.</li>
            <li>
                Tag System
                <ul>
                    <li>Creation of tags in one JSON file.</li>
                    <li>Standard embed for command.</li>
                    <li>Customization command available for admins.</li>
                </ul>
            </li>
        </ul>
    </>;
}

export default BucketHat;