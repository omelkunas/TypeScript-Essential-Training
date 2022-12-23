type ContactName = string;

enum ContactStatus {
    Active = "active",
    Inactive = "inactive",
    New = "new"
}

// custom type - a set of types
type ContactBirthDate = Date | number | string;

// enum may be changed by type as a set of values
type status = "active" | "inactive" | "new";


interface Contact {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: status;
}

interface Address {
    line1: string;
    line2: string;
    province: string;
    region: string;
    postalCode: string;
}

// to combine two+ interfaces
interface AddressableContacts extends Contact, Address {
    // ...
}

// to combine two+ interfaces
type AddressableContacts1 = Contact & Address;

function getBirthDate(contact: Contact) {
    if (typeof contact.birthDate === "number") {
        return new Date(contact.birthDate);
    }
    else if (typeof contact.birthDate === "string") {
        return Date.parse(contact.birthDate)
    }
    else {
        return contact.birthDate
    }
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}
