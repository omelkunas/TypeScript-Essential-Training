type ContactName = string;
type ContactStatus = "active" | "inactive" | "new"
type ContactBirthDate = Date | number | string

interface Contact  {
    id: number;
    name: ContactName;
    birthDate?: ContactBirthDate;
    status?: ContactStatus;
}

let primaryContact: Contact = {
    id: 12345,
    name: "Jamie Johnson",
    status: "active"
}

//keys of object
type ContactFields = keyof Contact

const field: ContactFields = ""

function getValue(source, propertyName: keyof Contact) {
    return source[propertyName]
}

getValue(primaryContact, "id")
getValue(primaryContact, "idd")