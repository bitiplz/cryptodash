import React from 'react';
import styled from 'styled-components'
import {backgroundColor2, fontSize2} from "../Shared/Styles";


const SelectStyled = styled.select`
    ${backgroundColor2}
    ${fontSize2}
    color : #1163c9;
    border: 1px solid;
    float: right;
`;

export default function({onSelect}) {
    return (
        <SelectStyled defaultValue="months" onChange={onSelect} >
            <option value="days"> Days </option>
            <option value="weeks"> Weeks </option>
            <option value="months"> Months </option>
        </SelectStyled>
    );
}