import Axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if (country) {
        changeableUrl = `${url}/countries/${country}`
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await Axios.get(changeableUrl);
        const modifiedData = { confirmed, recovered, deaths, lastUpdate }
        return modifiedData
    } catch (error) {
        alert('Something went wrong, try again later');
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await Axios.get(`${url}/daily`)
        const modifiedData = data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate
        }))
        return modifiedData;
        console.log(data)
    } catch (error) {
        alert('Something went wrong, try again later');
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await Axios.get(`${url}/countries`)
        return countries.map(country => country.name)
    } catch (error) {
        alert('Something went wrong, try again later');
    }
}

