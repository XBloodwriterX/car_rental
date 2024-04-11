interface ClientInputProps {
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

interface ClientOutputProps {
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

interface CarInputProps {
    licence_plate: string,
    mark: string,
    model: string,
    VIN: string,
    price_per_hour: number,
    is_useful: boolean,
}

export type {ClientInputProps, ClientOutputProps, CarInputProps};