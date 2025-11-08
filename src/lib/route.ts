
type Email = `${string}@${string}`;
interface Contact{
  name: string;
  address:string;
  email: Email[];
  phone: string[];
}

export function getDirectContact(){
    const contacts:Contact = {
        name: "AEI + KD JV",
        address: "Ishan Tower, Dhanmondi-9, Dhaka",
        email: [
            "invest@aikdm.example.com",
            "support@aikdm.example.com"
        ],
        phone: [
            "+880177777754"
        ]
    }
    return contacts;
}