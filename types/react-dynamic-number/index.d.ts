// Type definitions for react-dynamic-number 1.7
// Project: https://github.com/uhlryk/react-dynamic-number
// Definitions by: Eugene Rodin <https://github.com/eugrdn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export type Omit<T, K extends keyof T> = Pick<
    T,
    ({ [P in keyof T]: P } & { [P in K]: never } & { [x: string]: never; [x: number]: never })[keyof T]
>;

export type BaseInputProps = Partial<
    Omit<
        React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
        "ref" | "value" | "onChange" | "placeholder"
    >
>;

export interface DynamicNumberProps extends BaseInputProps {
    value?: number | "" | undefined;
    separator?: "." | "," | undefined;
    thousand?: boolean | " " | undefined;
    integer?: number | undefined;
    fraction?: number | undefined;
    positive?: boolean | undefined;
    negative?: boolean | undefined;
    placeholder?: string | undefined;
    onChange?:
        | ((event: React.ChangeEvent<HTMLInputElement>, modelValue: number, viewValue: string) => void)
        | undefined;
}

export default class DynamicNumber extends React.Component<DynamicNumberProps> {}
