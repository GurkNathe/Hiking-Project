//NOT IMPLEMENTED YET

//From https://blog.larapulse.com/es-2015/synchronous-fetch-browser-geolocation
export default function getCurrentPosition(options = {}) {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
}

/*
const fetchCoordinates = async () => {
    try {
        const { coords } = await getCurrentPosition();
        var { latitude, longitude } = coords;
        return { latitude, longitude };
    } catch (error) {
        console.error("Error Code = " + error.code + " - " + error.message);
    }
};*/