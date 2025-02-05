import { useReactTable, getCoreRowModel, getPaginationRowModel, flexRender, ColumnDef } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import axios from "axios";

interface User {
    memberIdx: number;
    memberName: string;
    memberId: string;
    memberCreatedAt: string;
}

interface ApiResponse {
    total: number;
    contents: User[];
    details: {
        isLast: boolean;
        offset: number;
        previous: number;
        hasPrevious: boolean;
        next: number;
        hasNext: boolean;
        totalPages: number;
    };
}



interface TableProps<T> {
    data: T[];
    columns: ColumnDef<T>[];
    isLoading: boolean;
    error: string | null;
    onPageChange: (page: number) => void;
    pageIndex: number;
    totalPages: number;
    handleDelete: (id: number) => void; // 삭제 함수 추가
    handleEdit: (user: User) => void; // 수정 함수 추가
}

const ReactTable = <T,>({
                            data,
                            columns,
                            isLoading,
                            error,
                            onPageChange,
                            pageIndex,
                            totalPages,

                        }: TableProps<T>) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
    });

    return (
        <div className="p-4 min-w-[1200px]">
            {isLoading && <p>Loading...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!isLoading && !error && (
                <>

                    {/* 추가 버튼을 오른쪽 상단에 고정 */}
                    <div className="flex justify-end mb-2">
                        <button
                            className="px-2 py-1 text-white bg-gray-500 rounded"
                            onClick={() => location.href = "http://kim-portfolio.p-e.kr/edit"}
                        >
                            추가
                        </button>
                    </div>

                    <table className="w-full border-collapse border border-gray-300">
                        <thead className="bg-gray-200">
                        {table.getHeaderGroups().map((headerGroup) => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <th key={header.id} className="border p-2">
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                    </th>
                                ))}
                            </tr>
                        ))}
                        </thead>
                        <tbody>
                        {table.getRowModel().rows.map((row) => (
                            <tr key={row.id} className="border">
                                {row.getVisibleCells().map((cell) => (
                                    <td key={cell.id} className="border p-2 text-center">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>

                    {/* 페이지네이션 */}
                    <div className="flex justify-between items-center mt-4">
                        <div className="flex items-center">
                            <button
                                className="px-3 py-1 border rounded disabled:opacity-50"
                                onClick={() => onPageChange(pageIndex - 1)}
                                disabled={pageIndex === 1}
                            >
                                Previous
                            </button>

                            <span className="mx-2">
                                Page {pageIndex} of {totalPages}
                            </span>

                            <button
                                className="px-3 py-1 border rounded disabled:opacity-50"
                                onClick={() => onPageChange(pageIndex + 1)}
                                disabled={pageIndex >= totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

const MyComponent = () => {
    const [data, setData] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [pageSize] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);

    const columns: ColumnDef<User>[] = [
        { accessorKey: "memberIdx", header: "번호" },
        { accessorKey: "memberId", header: "아이디" },
        { accessorKey: "memberName", header: "이름" },
        { accessorKey: "memberCreatedAt", header: "회원등록일" },
        { accessorKey: "memberUpdatedAt", header: "회원정보 수정일" },
        {
            id: "actions",
            header: "액션",
            cell: ({ row }) => (
                <div className="flex justify-center gap-2">
                    <button
                        className="px-2 py-1 text-white bg-red-500 rounded"
                        onClick={() => row.original && handleDelete(row.original.memberIdx)}
                    >
                        삭제
                    </button>
                    <button
                        className="px-2 py-1 text-white bg-blue-500 rounded"
                        onClick={() => location.href = `http://kim-portfolio.p-e.kr/edit/${row.original.memberIdx}`}
                    >
                        수정
                    </button>
                </div>
            ),
        },
    ];

    const fetchData = async (page: number, size: number) => {
        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.get<ApiResponse>(
                `http://kim-portfolio.p-e.kr/api/member-list?page=${page}&size=${size}`
            );
            setData(response.data.contents);
            setTotalPages(Math.max(1, Math.ceil(response.data.total / size)));
        } catch (err) {
            setError("Failed to load data");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData(pageIndex, pageSize);
    }, [pageIndex, pageSize]);

    // 삭제 함수
    const handleDelete = async (id: number) => {
        if (!window.confirm("정말 삭제하시겠습니까?")) return;

        try {
            await axios.delete(`http://kim-portfolio.p-e.kr/api/member-delete/${id}`);
            alert("삭제 완료!");
            fetchData(pageIndex, pageSize); // 데이터 갱신
        } catch (error) {
            alert("삭제 실패");
        }
    };

    // 수정 함수
    const handleEdit = async () => {
        location.href = "http://kim-portfolio.p-e.kr/edit";
    };

    return (
        <ReactTable
            data={data}
            columns={columns}
            isLoading={isLoading}
            error={error}
            onPageChange={setPageIndex}
            pageIndex={pageIndex}
            totalPages={totalPages}
            handleDelete={handleDelete} // 삭제 함수 전달
            handleEdit={handleEdit} // 수정 함수 전달
        />
    );
};

export default MyComponent;