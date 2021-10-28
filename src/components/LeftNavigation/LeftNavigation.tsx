import React from 'react';
import styled from 'styled-components';
import { StyledSubcomponentType } from '../commonTypes';
import { Div, A } from '../../htmlElements';

export const Container = styled(Div)`
${({
    bgcolor,
  }: {
    bgcolor: string;
  }) => `
  padding-top: 20px;
  height: 100%;
  width: 250px;
  position: fixed;
  color: white;
  background-color: ${bgcolor};
  top: 0;
  `}
`;

export const ContainerHref = styled(A)`
${({
    HrefColor,
} : {
    HrefColor: string;
}) => `
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: ${HrefColor};
    display: block;
    `}
`;

export type NavButton = {
    label: string;
    link: string;
    onClick: () => void;
}

export interface LeftNavigationProps {
    StyledContainer?: StyledSubcomponentType,
    navButtons?: NavButton[];
    color?: string;
    bgcolor?: string;
    HrefColor?: string;
}

const LeftNavigation = ({
    StyledContainer = Container,
    navButtons,
    bgcolor,
    HrefColor,
}: LeftNavigationProps): JSX.Element => {
    return (
        <StyledContainer
          bgcolor={bgcolor}
        >
            {navButtons &&
                navButtons.map((navButton) => (
                    <ContainerHref HrefColor={HrefColor} href={navButton.link}>{navButton.label}</ContainerHref>
                ))}
        </StyledContainer>
    );
};

export default LeftNavigation;
