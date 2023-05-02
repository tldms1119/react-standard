import client from "@/plugin/client";

// sample data
const getSampleData = async () => {
    const url = "/esgResultReport/details?evalYearSeq=1002&type=gradeChange";

    // 아래와 같이 사용해도 되고 custom hook 으로 진행해도 됨
    // try {
    //     const response = await client.get(url);
    // } catch (error) {
    //     // error
    // }

    const response = await client.get(url);
    // axios 의 특성 : 결과값은 data 라는 필드에 담아서 반환
    return response.data;
};

export interface Params {
    currentPageNo: number;
    evalYearSeq: number;
    allLv: string;
    scaleLv: string;
    searchType?: string;
    searchWord?: string;
}

const getSampleData2 = async (params: Params) => {
    const {
        currentPageNo,
        evalYearSeq,
        allLv,
        scaleLv,
        searchType,
        searchWord,
    } = params;

    let queryString = `currentPageNo=${currentPageNo}&evalYearSeq=${evalYearSeq}&allLv=${allLv}&scaleLv=${scaleLv}`;
    if (searchType) {
        queryString += `&searchType=${searchType}`;
    }
    if (searchWord) {
        queryString += `&searchWord=${searchWord}`;
    }

    const url = `/esgLv/list?${queryString}`;
    const response = await client.get(url);
    return response.data;
};

export { getSampleData, getSampleData2 };
