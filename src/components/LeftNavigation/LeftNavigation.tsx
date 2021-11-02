import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { StyledSubcomponentType, SubcomponentPropsType } from '../commonTypes';
import { Div, A } from '../../htmlElements';
import { useTheme } from '../../context';

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

export const Header = styled(Div)`
    ${() => {
        const { colors } = useTheme();
        return `padding: 1.5rem 1.5rem 0rem
        border-radius: 0.25rem 0.25rem 0rem 0rem;
        font-weight: bold;
        color: ${colors.grayDark};
    `;
    }}
`;

export const Body = styled(Div)`
    ${() => {
        const { colors } = useTheme();

        return `
            padding: 1.5rem 1.5rem;
            color: ${colors.grayMedium};
        `;
    }}
`;

export const Footer = styled(Div)`
    ${() => {
        const { colors } = useTheme();

        return `
            padding: 1rem 1.5rem;
            color: ${colors.grayLight};
            border-radius: 0rem 0rem 0.25rem 0.25rem;
        `;
    }}
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
    padding: 8px 8px 8px 0px;
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
    StyledHeader?: StyledSubcomponentType,
    StyledBody?: StyledSubcomponentType,
    StyledFooter?: StyledSubcomponentType,
    navButtons?: NavButton[];
    color?: string;
    bgcolor?: string;
    HrefColor?: string;
    containerProps?: SubcomponentPropsType;
    hidden?: boolean;
    hideAnimation?: (value: HideAnimationPropType) => void;

    header?: ReactNode;
    footer?: ReactNode;
}

const LeftNavigation = ({
    StyledContainer = Container,
    StyledHeader = Header,
    StyledBody = Body,
    StyledFooter = Footer,
    navButtons,
    bgcolor = 'Black',
    HrefColor = 'White',
    containerProps,
    hidden = false,
    hideAnimation = defaultHideAnimation,
    header,
    footer,
}: LeftNavigationProps): JSX.Element => {
    const [isHidden] = React.useState(false);
    const animationProps = { collapsed: hidden || isHidden };
    return (
        <StyledContainer
          bgcolor={bgcolor}
          animation={hideAnimation(animationProps)}
          {...containerProps}
        >
            {header && (
                <StyledHeader>
                    {header}
                </StyledHeader>
            )}
            <StyledBody>
                {navButtons &&
                navButtons.map((navButton) => (
                <ContainerHref HrefColor={HrefColor} href={navButton.link} key={navButton.label}>{navButton.label}</ContainerHref>
                ))}
            </StyledBody>
            {footer && (
                <StyledFooter>
                    {footer}
                </StyledFooter>
            )}
        </StyledContainer>
    );
};

export default LeftNavigation;
