export const convertMemoCategory = (category?: string | number): string => {
    switch (String(category)) {
        case '2':
            return 'Chính sách';
        case '3':
            return 'Thi đua';
        case '':
        case undefined:
            return '--';

        default:
            return '--';
    }
};
