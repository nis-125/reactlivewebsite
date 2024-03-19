import React from 'react';

const ExportToExcelButton = ({ data, fileName }) => {
  const exportToExcel = () => {
    const csvData = convertToCSV(data);
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const convertToCSV = (dataArray) => {
    const csvRows = [];
    const headers = Object.keys(dataArray[0]);
    csvRows.push(headers.join(','));

    for (const row of dataArray) {
      const values = headers.map(header => {
        const escaped = ('' + row[header]).replace(/"/g, '\\"');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(','));
    }

    return csvRows.join('\n');
  };

  return (
    <button onClick={exportToExcel}>Export to Excel</button>
  );
};

export default ExportToExcelButton;