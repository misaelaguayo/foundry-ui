import { toHaveNoViolations } from 'jest-axe';
import { render, waitFor, configure } from '@testing-library/react';
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
            <LeftNavigation bgcolor="Black" containerProps={{'data-test-id': testId}}/>,
        );

        await waitFor(() => getByTestId(testId));
        expect(container).toMatchSnapshot();
    });

});