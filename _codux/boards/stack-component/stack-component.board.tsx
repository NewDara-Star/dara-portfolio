import { createBoard } from '@wixc3/react-board';
import { StackComponent } from '../../../src/components/stack-component/stack-component';
import styles from './stack-component.board.module.scss';

export default createBoard({
    name: 'StackComponent',
    Board: () => <StackComponent className={styles.stackComponent} />,
    environmentProps: {
        windowWidth: 419.29517794069454,
        windowHeight: 387,
    },
});
