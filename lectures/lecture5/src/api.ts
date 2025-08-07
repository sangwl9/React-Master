const COIN_PAPRIKA_URL = "https://api.coinpaprika.com/v1";
const NOMAD_URL = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins(){
    return fetch(`${COIN_PAPRIKA_URL}/coins`).then((response)=> response.json());
}

export function fetchCoinInfo(coinId:string) {
    return fetch(`${COIN_PAPRIKA_URL}/coins/${coinId}`).then((response)=> response.json());
}

export function fetchCoinTickers(coinId:string) {
    return fetch(`${NOMAD_URL}/tickers/${coinId}`).then((response)=> response.json());
}

export function fetchCoinHistory(coinId:string) {
    const endDate = Math.floor(Date.now() / 1000);
    const startDate = endDate -  60 * 60 * 24 * 7 * 2;
    return fetch(`${NOMAD_URL}?coinId=${coinId}&start=${startDate}&end=${endDate}`).then((response)=> response.json());
}