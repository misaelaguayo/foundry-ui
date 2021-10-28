import { toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import LeftNavigation from '../LeftNavigation';
import { axe } from 'jest-axe';
import React from 'react'

expect.extend(toHaveNoViolations)

describe('LeftNavigation', () => {
    describe('Accessibility Tests', () => {
        it('Should pass accessibility test with default props', async () => {
            const component = <LeftNavigation bgcolor="Black" />;
            const { container } = render(component);
            const results = await axe(container);
            expect(results).toHaveNoViolations();
        });
    });

});