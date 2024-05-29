export const uniqueKey = (name, i) => `${name}+${i}`;

export const formatPhoneNum = (str) => {
    const pattern = /(\+7|8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/g;

    return str.replace(pattern, '+7 ($2) $3-$4-$5');
};
