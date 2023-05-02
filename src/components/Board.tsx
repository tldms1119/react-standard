import { ChangeEvent, FormEvent, useState } from "react";
import styled from "styled-components";
import { getSampleData2, Params } from "@/api/board";

import { Table, TableBody, TableHead } from "@/styles/Board";

const CheckboxLabel = styled.label`
    display: inline-block;
    margin-right: 10px;
    padding: 5px;
`;

type CheckboxItem = {
    label: string;
    checked: boolean;
};

type OptionType = {
    value: string;
    label: string;
};

type SearchCondition = {
    evalYearSeq: number;
    currentPageNo: number;
    allLv: CheckboxItem[];
    scaleLv: CheckboxItem[];
    searchType: string;
    searchWord: string;
};

const options: OptionType[] = [
    { value: "unvrsNm", label: "종목명" },
    { value: "asymbol", label: "종목코드" },
];

const checkList1: CheckboxItem[] = [
    { label: "A", checked: false },
    { label: "AA", checked: false },
    { label: "B", checked: false },
    { label: "BB", checked: false },
];

const checkList2: CheckboxItem[] = [
    { label: "A", checked: false },
    { label: "AA", checked: false },
    { label: "B", checked: false },
    { label: "BB", checked: false },
];

/**
 * @description 게시판
 */
function Board() {
    // state
    const [searchCondition, setSearchCondition] = useState<SearchCondition>({
        evalYearSeq: 1,
        currentPageNo: 1,
        allLv: checkList1,
        scaleLv: checkList2,
        searchType: "",
        searchWord: "",
    });
    const [list, setList] = useState<any[]>([]);

    // read-only
    const { allLv, scaleLv, searchType, searchWord } = searchCondition;

    // event
    const onchange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchCondition((prevState) => {
            return { ...prevState, searchWord: e.target.value };
        });
    };

    const onSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchCondition((prevState) => {
            return { ...prevState, searchType: e.target.value };
        });
    };

    const onCheck = (
        e: ChangeEvent<HTMLInputElement>,
        index: number,
        checkList: CheckboxItem[]
    ) => {
        const { checked, name } = e.target;

        const updateCheckList = checkList.map((item, i) =>
            i === index ? { ...item, checked: checked } : item
        );
        setSearchCondition((prevState) => {
            return { ...prevState, [name]: updateCheckList };
        });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const params = {
            ...searchCondition,
            allLv: allLv
                .filter((item) => item.checked)
                .map((item) => item.label)
                .join(),
            scaleLv: scaleLv
                .filter((item) => item.checked)
                .map((item) => item.label)
                .join(),
        };

        requestSampleData(params);
    };

    // method
    const requestSampleData = async (params: Params) => {
        const response = await getSampleData2(params);
        const { resultList } = response;
        setList(resultList);
    };

    // view
    return (
        <>
            {/* 버튼에 onClick 을 붙일수도 있지만 되도록이면 form 태그를 사용하는 것을 추천 */}
            <form onSubmit={onSubmit}>
                <div>
                    전체등급 :
                    {allLv.map(({ checked, label }, index) => (
                        <CheckboxLabel key={index}>
                            <input
                                name="allLv"
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => onCheck(e, index, allLv)}
                            />
                            {label}
                        </CheckboxLabel>
                    ))}
                    <select value={searchType} onChange={onSelect}>
                        <option value="" disabled>
                            선택하세요
                        </option>
                        {options.map(({ value, label }, index) => (
                            <option key={index.toString()} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    규모등급 :
                    {scaleLv.map(({ checked, label }, index) => (
                        <CheckboxLabel key={index}>
                            <input
                                name="scaleLv"
                                type="checkbox"
                                checked={checked}
                                onChange={(e) => onCheck(e, index, scaleLv)}
                            />
                            {label}
                        </CheckboxLabel>
                    ))}
                    <input value={searchWord} onChange={onchange} />
                    <button>검색</button>
                </div>
            </form>
            <Table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <TableHead>
                    <tr>
                        <th>필드01</th>
                        <th>필드02</th>
                        <th>필드03</th>
                        <th>필드04</th>
                        <th>필드05</th>
                        <th>필드06</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {list.map(
                        (
                            {
                                asymbol,
                                assetScale,
                                unvrsNm,
                                allLvResult,
                                scaleLvResult,
                            },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{asymbol}</td>
                                <td>{assetScale}</td>
                                <td>{unvrsNm}</td>
                                <td>{allLvResult}</td>
                                <td>{scaleLvResult}</td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
