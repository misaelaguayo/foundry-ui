import React from 'react';
import { Meta } from '@storybook/react';
import styled from 'styled-components';
import LeftNavigation from './LeftNavigation';

const App = styled.div`
`;

const Ipsum = styled.body`
    padding-left: 250px;
    top: 0;
`;

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Porttitor massa id neque aliquam vestibulum morbi
blandit cursus risus. Mi bibendum neque egestas congue quisque egestas diam. Pulvinar
sapien et ligula ullamcorper. Ac turpis egestas integer eget aliquet nibh. Bibendum at
varius vel pharetra vel turpis nunc eget. Interdum varius sit amet mattis vulputate enim
nulla aliquet porttitor. Morbi tempus iaculis urna id volutpat. Auctor neque vitae tempus
quam pellentesque. Tempor commodo ullamcorper a lacus vestibulum sed. Malesuada proin
libero nunc consequat interdum varius. At volutpat diam ut venenatis tellus in metus
vulputate eu. Quam adipiscing vitae proin sagittis nisl. Sagittis purus sit amet volutpat
consequat. Magna fringilla urna porttitor rhoncus dolor. Vitae aliquet nec ullamcorper sit
amet. Imperdiet dui accumsan sit amet nulla facilisi. Sapien faucibus et molestie ac
feugiat sed lectus vestibulum. Sed tempus urna et pharetra pharetra. Ut placerat orci
nulla pellentesque dignissim enim sit amet. Netus et malesuada fames ac turpis egestas
integer. Bibendum est ultricies integer quis auctor elit sed. Et netus et malesuada fames
ac turpis. Ultrices sagittis orci a scelerisque purus semper eget duis at. Non blandit
massa enim nec dui nunc. Felis bibendum ut tristique et egestas quis. Volutpat ac
tincidunt vitae semper. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna.
Donec enim diam vulputate ut pharetra sit amet aliquam. Quis enim lobortis scelerisque
fermentum dui faucibus in ornare quam. Suspendisse sed nisi lacus sed viverra tellus in.
Proin nibh nisl condimentum id venenatis. Duis tristique sollicitudin nibh sit amet
commodo nulla. Sed cras ornare arcu dui. Consectetur adipiscing elit pellentesque habitant
morbi tristique senectus et netus. Ut etiam sit amet nisl purus in mollis nunc. Aliquam id
diam maecenas ultricies mi eget mauris pharetra et. Neque volutpat ac tincidunt vitae
semper quis lectus. Amet nisl suscipit adipiscing bibendum. Ultrices sagittis orci a
scelerisque purus. Et malesuada fames ac turpis egestas sed tempus. Euismod lacinia at
quis risus sed vulputate. Egestas fringilla phasellus faucibus scelerisque eleifend donec.
Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Nunc
lobortis mattis aliquam faucibus purus in massa tempor. Euismod nisi porta lorem mollis
aliquam. Varius vel pharetra vel turpis nunc eget lorem dolor sed. Tempus urna et pharetra
pharetra massa massa ultricies mi quis. Aliquam faucibus purus in massa. Pellentesque sit
amet porttitor eget dolor. Sit amet cursus sit amet dictum sit amet. Adipiscing elit ut
aliquam purus sit. Velit ut tortor pretium viverra suspendisse. Aliquet nibh praesent
tristique magna sit amet purus gravida. Risus pretium quam vulputate dignissim suspendisse
in est ante. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Tristique
et egestas quis ipsum suspendisse ultrices gravida. Aliquam ut porttitor leo a diam. Quis
hendrerit dolor magna eget est lorem. Sed tempus urna et pharetra pharetra massa massa
ultricies mi. Venenatis urna cursus eget nunc scelerisque viverra mauris. Sed egestas
egestas fringilla phasellus faucibus scelerisque eleifend. Venenatis tellus in metus
vulputate eu. Parturient montes nascetur ridiculus mus. Id diam vel quam elementum
pulvinar etiam. Magna etiam tempor orci eu.`;

export const Default = () => {
    return (
        <App>
            <LeftNavigation
              navButtons={[
                {
                    label: 'Link 1',
                    link: '123412341235.com',
                    onClick: () => {
                    },
                },
                {
                    label: 'Link 2',
                    link: '123412351235123.com',
                    onClick: () => {
                    },
                },
                {
                    label: 'Link 3',
                    link: '123412351235.com',
                    onClick: () => {
                    },
                },
                {
                    label: 'Link 4',
                    link: '123412351235235.com',
                    onClick: () => {
                    },
                },

            ]}
              HrefColor="#818181"
              bgcolor="Black"
            />
            <Ipsum>
                <h2>Lorem Ipsum</h2>
                <p>{lorem}</p>
            </Ipsum>
        </App>

    );
};

export default {
    title: 'LeftNavigation',
    component: LeftNavigation,
    parameters: {},
} as Meta;
