import React from 'react';
import styled from 'styled-components';
import { StyledSubcomponentType, SubcomponentPropsType } from '../commonTypes';
import { Div, A } from '../../htmlElements';

export const Container = styled(Div)`
${({
    bgcolor,
    animation,
  }: {
    bgcolor: string;
    animation: () => void;
  }) => `
  padding-top: 20px;
  height: 100%;
  width: 250px;
  position: fixed;
  color: white;
  background-color: ${bgcolor};
  top: 0;
  ${animation}
  `}
`;

export type HideAnimationPropType = {
    length?: number;
    origin?: string;
    collapsed?: boolean;
};

export const defaultHideAnimation = ({
    length = 0.1,
    origin = 'left',
    collapsed,
}: HideAnimationPropType) => `
    transform: ${collapsed ? 'scaleX(0)' : 'scaleX(1)'};
    transform-origin: ${origin};
    transition: transform ${length}s cubic-bezier(0, .7, .9, 1);;
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
    containerProps?: SubcomponentPropsType;
    hidden?: boolean;
    hideAnimation?: (value: HideAnimationPropType) => void;
}

const LeftNavigation = ({
    StyledContainer = Container,
    navButtons,
    bgcolor = 'Black',
    HrefColor = 'White',
    containerProps,
    hidden = false,
    hideAnimation = defaultHideAnimation,
}: LeftNavigationProps): JSX.Element => {
    const [isHidden] = React.useState(false);
    const animationProps = { collapsed: hidden || isHidden };
    return (
        <StyledContainer
          bgcolor={bgcolor}
          animation={hideAnimation(animationProps)}
          {...containerProps}
        >
            {navButtons &&
                navButtons.map((navButton) => (
                    <ContainerHref HrefColor={HrefColor} href={navButton.link}>{navButton.label}</ContainerHref>
                ))}
        </StyledContainer>
    );
};

export default LeftNavigation;
