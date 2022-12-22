// interfaces only to compile
interface Contact {
  id: number;
  name: string;
  birthDate: Date;
  optional?: string;  // put '?' to make field optional
}

interface Address {
  line1: string;
  line2: string;
  city: string;
  province: string;
  postalCode: string;
}

let primaryContact: Contact = {
  id: 12345,
  name: "John Doe",
  birthDate: new Date("01-02-1988"),
}