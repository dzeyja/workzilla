import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { classNames, Mods } from "shared/lib/classNames/classNames";
import cls from './Flex.module.scss'

type FlexJustify = 'start' | 'center' | 'end' | 'between'
type FlexAlign = 'start' | 'center' | 'end'
type FlexDirection = 'row' | 'column'
type FlexGap = '4' | '8' | '16' | '32' | '64'

const justifyClasses: Record<FlexJustify, string> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween,
}

const alignClasses: Record<FlexAlign, string> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd,
}

const directionClasses: Record<FlexDirection, string> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    32: cls.gap32,
    64: cls.gap64,
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction?: FlexDirection
    max?: boolean
    className?: string
    gap?: FlexGap
}

export const Flex = (props: FlexProps) => {
    const {
        children,
        justify = 'start',
        align = 'center',
        direction = 'row',
        max,
        gap,
        className
    } = props

    const mods: Mods = {
        [cls.max]: max
    }

    const classes = [
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        gap && gapClasses[gap],
        className
    ]

    return (
        <div className={classNames(cls.Flex, mods, classes)}>
            {children}
        </div>
    );
};