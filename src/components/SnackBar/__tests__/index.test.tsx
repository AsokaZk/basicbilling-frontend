import { render } from '@testing-library/react';
import SnackbarAlert from '..';


describe('components/SnackbarAlert', () => {
    describe('Html structure', () => {
        it('Should render with message error', () => {
            const message = 'Error to get billings';
            const { container } = render(
                <SnackbarAlert
                    data={{ message }}
                />
            );
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
            const titleField = container.querySelector('p');
            expect(titleField?.textContent).toBe(message);
        });
    });
});
