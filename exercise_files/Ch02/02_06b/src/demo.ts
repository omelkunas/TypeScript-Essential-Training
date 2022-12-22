interface Contact {
    id: number;
    name: string;
}

// using Generics. Dynamically replaced types

function clone<T>(source: T): T {
    return Object.apply({}, source);
}

const a: Contact = { id: 123, name: "Homer Simpson" };
const b = clone(a)

const dateRange = { startDate: Date.now(), endDate: Date.now() };
const dateRangeCopy = clone(dateRange);