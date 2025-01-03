import { createBoard } from '@wixc3/react-board';
import { StackComponent } from '../../../src/components/stack-component/stack-component';

export default createBoard({
    name: 'StackComponent',
    Board: () => <StackComponent />,
    environmentProps: {
        windowWidth: 509,
        windowHeight: 230,
    },
});
