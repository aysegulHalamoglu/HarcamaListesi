export const convertRawData = data => {
    if (data?.length === 0) {
        return [];
    }

    let convertedList = [];

    let convertedItem;
    for (let itemKey in data) {
        convertedItem = data[itemKey];
        convertedItem.key = itemKey;
        convertedList.push(convertedItem);
    }


    return convertedList;

};