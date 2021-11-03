import { toHaveNoViolations } from 'jest-axe';
import { render, waitFor, configure, fireEvent } from '@testing-library/react';
import LeftNavigation from '../LeftNavigation';
import { axe } from 'jest-axe';
import React from 'react'

expect.extend(toHaveNoViolations)

configure({testIdAttribute: 'data-test-id'});
const testId = 'foundry-leftnavigation'

describe('LeftNavigation', () => {
    describe('Accessibility Tests', () => {
        it('Should pass accessibility test with default props', async () => {
            const component = <LeftNavigation bgcolor="Black" />;
            const { container } = render(component);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });
    });

    it('shows LeftNavigation with default props', async () => {
        const { container, getByTestId } = render(
            <LeftNavigation containerProps={{'data-test-id': testId}}/>,
        );

        await waitFor(() => getByTestId(testId));
        expect(container).toMatchSnapshot();
    });

    it('shows LeftNavigation with header props', async() => {
        const { container, getByTestId } = render(
            <LeftNavigation header="testing header" headerProps={{'data-test-id': testId}} />
        );

        await waitFor(() => getByTestId(testId));
        expect(container).toMatchSnapshot();
    });

    it('shows LeftNavigation with footer props', async() => {
        const { container, getByTestId } = render(
            <LeftNavigation footer="testing footer" footerProps={{'data-test-id': testId}} />
        );

        await waitFor(() => getByTestId(testId));
        expect(container).toMatchSnapshot();
    });

    it('can click on nav links', async () => {
        const {container, getByTestId} = render(<LeftNavigation navButtons={[
            {
                label: 'Label test 1',
                link: "testlink1",
                onClick: () => {}
            }]}
            navButtonProps={{ 'data-test-id': testId + '-click' }} />
        );
        await waitFor(() => getByTestId(testId + '-click'));
        fireEvent.mouseDown(getByTestId(testId + '-click'));
        expect(container).toMatchSnapshot();
    });

});