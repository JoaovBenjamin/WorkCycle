import styles from './GenericHtml.module.css';

interface GenericHtmlProps {
    children: React.ReactNode;
}


export default function GenericHtml({children}: GenericHtmlProps) {
    return (
        <div className={styles.genericHtml}>
            {children}
        </div>
    )

}