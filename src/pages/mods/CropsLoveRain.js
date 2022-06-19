import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import { DescSection, LinkContainer } from '../../components/ProjectPage/ProjectPageElements'

class CropsLoveRainPage extends ProjectPage {
    title = 'Crops Love Rain';
    simpleDescription = "Makes crops grow faster when it's raining.";
    description = <>
        <br />
        <DescSection>
            <h2>About</h2>
            <p>Crops Love Rain makes crops and saplings grow faster while it's raining.</p>
        </DescSection>
        <DescSection>
            <h2>Configuration</h2>
            <h3>Gamerule</h3>
            <p>The speed that crops grow at can be changed with the <code>cropGrowthSpeedDuringRain</code> gamerule. The
            default value is 10. A lower value is faster, and a higher value is a slower growth rate.</p>
            <h3>Disabling</h3>
            <p>You can disable the effect by setting the <code>cropGrowthSpeedDuringRain</code> gamerule to 0.</p>
        </DescSection>
        <DescSection>
            <br />
            <LinkContainer>
                <p><b>Download Links</b></p>
                <ul>
                    <li><a href='https://modrinth.com/mods/crops-love-rain' target='_blank' rel='noopener noreferrer'>Modrinth</a></li>
                    <li><a href='https://www.curseforge.com/minecraft/mc-mods/crops-love-rain' target='_blank' rel='noopener noreferrer'>CurseForge</a></li>
                    <li><a href='https://github.com/ThePoultryMan/Crops-Love-Rain/releases' target='_blank' rel='noopener noreferrer'>GitHub Releases</a></li>
                </ul>
                <p><b>Related Links</b></p>
                <ul>
                    <li><a href='https://github.com/ThePoultryMan/Crops-Love-Rain' target='_blank' rel='noopener noreferrer'>GitHub Repository</a></li>
                    <li><a href='https://github.com/ThePoultryMan/Crops-Love-Rain/issues' target='_blank' rel='noopener noreferrer'>Issue Reporting</a></li>
                </ul>
            </LinkContainer>
        </DescSection>
    </>
}

export default CropsLoveRainPage;