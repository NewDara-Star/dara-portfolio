import styles from './stack-component.module.scss';
import cx from 'classnames';

export interface StackComponentProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const StackComponent = ({ className }: StackComponentProps) => {
    return (
        <div className={cx(styles.root, className)}>
            <div className={styles.cardStack}>
                <div className={styles.smallTag}>
                    <img src="public/techStack.png" alt="stack icon" />
                    Tech stack
                </div>
            </div>
            <span className={styles.IconSpan}>
                <img src="public/skill-icons_photoshop.png" alt="" />
                <img src="public/skill-icons_javascript.png" alt="" />
                <img src="public/skill-icons_illustrator.png" alt="" />
                <img src="public/logos_python.png" alt="" />
                <img src="public/logos_html-5.png" alt="" />
                <img src="public/logos_figma.png" alt="" />
                <img src="public/logos_css-3.png" alt="" />
            </span>
        </div>
    );
};
