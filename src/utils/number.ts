export const formatNumberMony = (value?: number | string) => {
    let valueNumber = value;
    if (typeof value !== 'string') {
        valueNumber = Number(value);
    }
    const formater = new Intl.NumberFormat('en-US');
    return value ? formater.format(valueNumber as number) : '--';
};

export const formatNumber = (number: number | string) => {
    return String(number).replace(/(.)(?=(\d{3})+$)/g, '$1,');
};

export const formatFileSize = (size: number) => {
    const marker = 1024;
    if (size === 0) return '0 B';
    const sizeTypes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const idx = Math.floor(Math.log(size) / Math.log(marker));
    return parseFloat((size / Math.pow(marker, idx)).toFixed(2)) + ' ' + sizeTypes[idx];
};
