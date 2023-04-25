import { getSampleData } from "@/api/board";
import { Table, TableBody, TableHead } from "@/styles/Board";
import { useState, useEffect } from "react";

/**
 * @description 게시판
 */
function Board() {
    // state
    const [list, setList] = useState<any[]>([]);

    // method
    const fetchRequest = async () => {
        const result = await getSampleData();
        const { resultList = [] } = result || {};
        setList(resultList);
        // console.log(resultList);
    };

    // watch
    useEffect(() => {
        // 최초 화면 렌더링 후 한번만 실행되는 영역
        fetchRequest();
    }, []);

    // view
    return (
        <>
            <input />
            <button>검색</button>
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
                            { asymbol, aflNm, assetScaleCcdNm, unvrsNm },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index + 1}</th>
                                <td>{asymbol}</td>
                                <td>{unvrsNm}</td>
                                <td>{aflNm}</td>
                                <td>{assetScaleCcdNm}</td>
                                <td></td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
