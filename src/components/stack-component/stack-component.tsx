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
                    <img src="src/assets/img/noImage/techStack.svg" alt="stack icon" />
                    Tech stack
                </div>
                <div className={styles.IconSpan}>
                    <img src="src/assets/img/noImage/skill-icons_photoshop.png" alt="" />
                    <img src="src/assets/img/noImage/skill-icons_javascript.png" alt="" />
                    <img src="src/assets/img/noImage/skill-icons_illustrator.png" alt="" />
                    <img src="src/assets/img/noImage/logos_python.png" alt="" />
                    <img src="src/assets/img/noImage/logos_html-5.png" alt="" />
                    <img src="src/assets/img/noImage/logos_figma.png" alt="" />
                    <img src="src/assets/img/noImage/logos_css-3.png" alt="" />
                </div>
                <h3>Techstack</h3>
                <p className={styles.p1}>
                    Lorem ipsum dolor sit amet consectetur. Etiam sed non tortor euismod viverra
                    nulla. Condimentum interdum elementum odio id integer amet suspendisse.
                    Pellentesque.
                </p>
            </div>
        </div>
    );
};
