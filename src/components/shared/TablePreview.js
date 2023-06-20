import React from 'react';

const TablePreview = (props) => {
    const { rows = [], tableType } = props ?? {
        title: 'Title missing',
    };

    return (
        <div className="relative overflow-x-auto border sm:rounded-lg mb-8">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
                <thead className={`text-xs text-white uppercase ${tableType} dark:text-white`}>
                    <tr>
                        {
                            rows[0]?.cells.map((item, index) => {
                                return (
                                    <th scope="col" className="px-6 py-3" key={index}>
                                        {item}
                                    </th>
                                )
                            })
                        }


                    </tr>
                </thead>
                <tbody>
                    {
                        rows.map((item, rowIndex) => {
                            if (rowIndex > 0)
                                return (
                                    <tr key={rowIndex} className="bg-transparent border-b border-gray-200 text-black">
                                        {
                                            item.cells.map((cell, cellIndex) => {
                                                return (
                                                    <td key={cellIndex} className="px-6 py-3">
                                                        {cell}
                                                    </td>
                                                )
                                            })
                                        }

                                    </tr>
                                )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TablePreview;