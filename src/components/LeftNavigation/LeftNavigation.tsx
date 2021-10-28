import React from 'react';
import styled from 'styled-components';
import { StyledSubcomponentType } from '../commonTypes';

export const Container = styled.div`
    padding-top: 20px;
    height: 100%;
    width: 250px;
    position: fixed;
    color: white;
    background-color: black;
    top: 0;
`;

export const ContainerHref = styled.a`
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #818181;
    display: block;
`;

export type NavButton = {
    label: string;
    onClick: () => void;
}

export interface LeftNavigationProps {
    StyledContainer?: StyledSubcomponentType,
    navButtons?: NavButton[];
}

const LeftNavigation = ({
    StyledContainer = Container,
    navButtons,
}: LeftNavigationProps): JSX.Element => {
    return (
        <StyledContainer>
            {navButtons &&
                navButtons.map((navButton) => (
                    <ContainerHref href="#">{navButton.label}</ContainerHref>
                ))}
        </StyledContainer>
    );
};

export default LeftNavigation;
