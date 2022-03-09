import axios from "axios";


export const getBooksByCategory = async () => {
    try {
        const res = await axios.get(
            `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=KO5QXoWcHoem18riclGnT2zqBl1G6UBk
`
        );
        return {success: true, data: res.data};
    } catch (error) {
        return {success: false};
    }

};

    export const getBooksCatigoryByCategory = async (catigory='e-book-nonfiction') => {
        try {
            const res = await axios.get(
                `https://api.nytimes.com/svc/books/v3/lists/current/${catigory}.json?api-key=KO5QXoWcHoem18riclGnT2zqBl1G6UBk
`            );
            return {success: true, data: res.data};
        } catch (error) {
            return {success: false};
        }

    };
