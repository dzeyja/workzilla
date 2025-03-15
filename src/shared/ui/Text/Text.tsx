import { classNames } from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    SECONdARY = 'secondary',
    BLACK = 'black'
}

interface TextProps {
    titleBig?: string
    title?: string
    text?: string
    className?: string
    theme?: TextTheme
}

export const Text = (props: TextProps) => {
    const { 
        titleBig, 
        title, 
        text, 
        className,
        theme = TextTheme.BLACK
    } = props
    
    return (
        <div>
            {titleBig && <p className={classNames('text-xxl font-bold', {}, [className, cls[theme]])}>{titleBig}</p>}
            {title && <p className={classNames('text-xl', {}, [className, cls[theme]])}>{title}</p>}
            {text && <p className={classNames('text-lg', {}, [className, cls[theme]])}>{text}</p>}
        </div>
    );
};