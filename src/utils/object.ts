export const removeFieldEmptyValue = (obj: any) => {
    const newObj = Object.keys(obj)
        .filter((key) => !!obj[key])
        .reduce((current, key) => ({ ...current, [key]: obj[key] }), {});
    return newObj;
};
