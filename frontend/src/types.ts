interface InputProps {
    first_name: string,
    last_name: string,
    age: string,
    PESEL: string,
    telephone_number: string,
    email: string,
    locality: string,
    street: string,
    zip_code: string,
}

interface OutputProps {
    id: number,
    first_name: string,
    last_name: string,
    age: number,
    PESEL: string,
    telephone_number: string,
    email: string,
    locality: string,
    street: string,
    zip_code: string,
    notes: string
}

export type {InputProps, OutputProps};