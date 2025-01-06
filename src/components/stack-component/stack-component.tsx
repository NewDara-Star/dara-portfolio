import styles from './stack-component.module.scss';
import cx from 'classnames';
import techStack from './images/techStack.svg';
import photoshopIcon from './images/skill-icons_photoshop.png';
import ilustratorIcon from './images/skill-icons_illustrator.png';
import figmaIcon from './images/logos_figma.png';
import cssIcon from './images/logos_css-3.png';
import htmlIcon from './images/logos_html-5.png';
import pythonIcon from './images/logos_python.png';
import javascriptIcon from './images/skill-icons_javascript.png';

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
                    <img src={techStack} alt="stack icon" />
                    Tech stack
                </div>
                <div className={styles.IconSpan}>
                    <img src={photoshopIcon} alt="" className={styles.techTools} />
                    <img src={javascriptIcon} alt="" className={styles.techTools} />
                    <img src={ilustratorIcon} alt="" className={styles.techTools} />
                    <img src={pythonIcon} alt="" className={styles.techTools} />
                    <img src={htmlIcon} alt="" className={styles.techTools} />
                    <img src={figmaIcon} alt="" className={styles.techTools} />
                    <img src={cssIcon} alt="" className={styles.techTools} />
                </div>
                <div>
                    <h3 className={styles.header1}>Techstack</h3>
                    <p className={styles.p1}>
                        Lorem ipsum dolor sit amet consectetur. Etiam sed non tortor euismod viverra
                        nulla. Condimentum interdum elementum odio id integer amet suspendisse.
                        Pellentesque.
                    </p>
                </div>
            </div>
        </div>
    );
};
