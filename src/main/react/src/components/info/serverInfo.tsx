import React from 'react';

interface ListPara {
    id: number;
    name: string;
    value: string;
}

interface ListProps {
    ListInfo: ListPara[];
}

const ServerInfoList: React.FC<ListProps> = ({ ListInfo }) => {
    return (
        <table className="table-auto border-collapse">
            <tbody>
            {ListInfo.map((listPara) => (
                <tr key={listPara.id}>
                    <td>{listPara.name}</td>
                    <td className="px-1">:</td>
                    <td>{listPara.value}</td>
                </tr>
            ))}
            </tbody>
        </table>
    );
};

export default ServerInfoList;