/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { Div, AttributesCard} from './styles'

interface profile {
    name: string;
    rpgClass: string;
    race: string;
    orientation: string;
    currentHealth: number;
    currentLuck: number;
    armor: number;
    profilePicture: string;
}

export function ProfileCard(props:profile) {
    return (
        <Div>
            <img src={process.env.PUBLIC_URL +  props.profilePicture} alt="Trey" />
            <div>
                <h2>{props.name}</h2>
                <h3>{props.race} - {props.rpgClass} | {props.orientation} </h3>
                <AttributesCard className="attributes">
                    <p>{props.currentHealth} Vida</p>
                    <p>{props.armor} CA</p>
                    <p>{props.currentLuck} Sorte</p>
                </AttributesCard>

                <button/>
            </div>
        </Div>
    )
}