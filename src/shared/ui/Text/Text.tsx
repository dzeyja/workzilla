import { classNames } from "shared/lib/classNames/classNames";
import cls from './Text.module.scss'

export enum TextTheme {
    PRIMARY = 'primary',
    SECONdARY = 'secondary',
    BLACK = 'black'
}

export enum TextAlign {
    LEFT = 'left',
    RIGHT = 'right',
    CENTER = 'center'
}

interface TextProps {
    titleBig?: string
    title?: string
    text?: string
    className?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = (props: TextProps) => {
    const { 
        titleBig, 
        title, 
        text, 
        className,
        align = TextAlign.LEFT,
        theme = TextTheme.BLACK
    } = props
    
    return (
        <div>
            {titleBig && <p className={classNames('text-xxl font-bold', {}, [className, cls[theme], cls[align]])}>{titleBig}</p>}
            {title && <p className={classNames('text-xl', {}, [className, cls[theme], cls[align]])}>{title}</p>}
            {text && <p className={classNames('text-lg', {}, [className, cls[theme], cls[align]])}>{text}</p>}
        </div>
    );
};