import { render } from '@testing-library/react';
import TitleComponent from "..";


describe('components/Title', () => {
    describe('Html structure', () => {
        it('Should render Title h4', () => {
            const title = 'Billings';
            const { container } = render(
                <TitleComponent
                    title={title}
                />
            );
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
            const titleField = container.querySelector('h4');
            expect(titleField?.textContent).toBe(title);
        });
    });
});
