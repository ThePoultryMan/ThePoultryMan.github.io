import React from 'react';
import '../components/Card'
import Card from '../components/Card';
import '../css/SimpleFlex.css'

const cropsLoveRainDescription = "Makes crops grow faster when it's raining.";
const pleasantPigeonsDescription = 'Simply adds pigoens to Minecraft.';
const lantersBOWDescription = 'Allows the placement of lanterns on walls.';

const Mods = () => {
    return (
        <>
            <h1>Mods</h1>
            <p>Below you can find all of the Minecraft mods that I have made. None of them are anything too special.</p>
            <div className='simple-flex-grid'>
                <Card title='Crops Love Rain' description={cropsLoveRainDescription} to='./cropsloverain' className='simple-flex-col' />
                <Card title='Pleasant Pigeons' description={pleasantPigeonsDescription} to='./pleasantpigeons' className='simple-flex-col' />
                <Card title='Lanterns Belong on Walls' description={lantersBOWDescription} to='./lantersbow' className='simple-flex-col' />
            </div>
        </>
    )
}

export default Mods;