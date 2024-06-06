export interface ReceiptElement {
    Type: string,
    Data: string,
    SubType: string | null
}

// A TypeScript function using the interface
export function createReceiptElement(type: string, data: string, subType: string | null): ReceiptElement {
    return { Type: type, Data: data, SubType: subType };
}