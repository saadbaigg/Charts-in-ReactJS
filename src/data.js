export const data = [
    { name: 1950, uv: 1, pv: 1, amt: 1 },
    { name: 1970, uv: 1, pv: 3, amt: 4 },
    { name: 1990, uv: 2, pv: 2, amt: 5 },
    { name: 2000, uv: 4, pv: 3, amt: 6 },
    { name: 2005, uv: 6, pv: 5, amt: 6 },
    { name: 2010, uv: 6, pv: 3, amt: 6 },
    { name: 2020, uv: 7, pv: 7, amt: 7 },
];

export const fetchedData = async () => {
    const res = await fetch('https://data.opendatasoft.com/api/records/1.0/search/?dataset=world-population%40kapsarc&rows=6')
    const data = await res.json()
    return await data
}
