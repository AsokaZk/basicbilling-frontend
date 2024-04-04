import { render } from '@testing-library/react';
import BasicModal from '..';


describe('components/BasicModal', () => {
    describe('Html structure', () => {
        it('Should render in the document', () => {
            const { container } = render(
                <BasicModal
                    handleSubmit={() => { }}
                />
            );
            expect(container).toBeDefined();
            expect(container.firstChild).toBeInstanceOf(HTMLDivElement);
        });
    });
});
