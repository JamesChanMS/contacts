/**
 * Created by Kim on 2018/4/18.
 */
const NUM_CONTACTS = 1;

const firstNames = ['Ash', 'Ben', 'Chris'];

const lastNames = ['David', 'Ellison', 'Frank'];

// 取随机数
const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateName = () => `${firstNames[rand(firstNames.length - 1)]} ${lastNames[rand(lastNames.length - 1)]}`;

const generatePhoneNumber = () => `${rand(187, 100)}-${rand(9999, 1000)}-${rand(9999, 1000)}`;

const createContact = () => ({name: generateName(), phone: generatePhoneNumber()});

export const compareNames = (contact1, contact2) => {
    if (contact1.name > contact2.name) {
        return 1;
    }
    if (contact1.name < contact2.name) {
        return -1;
    }
    return 0;
}

export const comparePhones = (contact1, contact2) => contact1.phone > contact2.phone

export const compareIds = (contact1, contact2) => contact1.key < contact2.key

const addKeyToContact = (contact, key) => ({
    key: key,
    ...contact,
})

const addKeys = (val, key) => ({key: key + '', ...val})

export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)