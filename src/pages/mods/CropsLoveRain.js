import React from 'react';
import ProjectPage from '../../components/ProjectPage';
import { DescSection, LinkContainer } from '../../components/ProjectPage/ProjectPageElements'

class CropsLoveRainPage extends ProjectPage {
    title = 'Crops Love Rain';
    simpleDescription = "Makes crops grow faster when it's raining.";
    description = `## About
Crops Love Rain makes crops and saplings grow faster while it's raining.

## Configuration
### Gamerule
The speed that crops grow at can be changed with the \`cropGrowthSpeedDuringRain\` gamerule. The default value is 10. A
lower value is faster and a higher value is a slower growth rate.

### Disabling
You can disable the effect by setting the \`cropGrowthSpeedDuringRain\` gamerule to 0.

**Download Links**
- [Modrinth](https://modrinth.com/mod/crops-love-rain)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods/crops-love-rain)
- [GitHub Releases](https://github.com/ThePoultryMan/Crops-Love-Rain/releases)

**Related Links**
- [GitHub Repository](https://github.com/ThePoultryMan/Crops-Love-Rain)
- [Issue Reporting](https://github.com/ThePoultryMan/Crops-Love-Rain/issues)`;
}

export default CropsLoveRainPage;