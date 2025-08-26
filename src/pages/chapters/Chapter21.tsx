import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import ChapterLayout from '../../components/ChapterLayout';
import 'react-datepicker/dist/react-datepicker.css';

const Chapter21: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Simple data
  const allData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    title: `Item ${i + 1}`,
    date: new Date(2024, 7, i + 1).toLocaleDateString(),
  }));

  const totalPages = Math.ceil(allData.length / itemsPerPage);
  const currentData = allData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <ChapterLayout
      chapterNumber={21}
      title="Date Picker & Pagination"
      description="Simple date picker and pagination example"
    >
      <div>
        {/* Date Picker */}
        <div>
          <h3>Date Picker</h3>
          <DatePicker
            selected={selectedDate}
            onChange={(date: Date) => setSelectedDate(date)}
          />
          <div>Selected: {selectedDate.toLocaleDateString()}</div>
        </div>

        {/* Data Table */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div>
          <button onClick={() => setCurrentPage(p => Math.max(p - 1, 1))} disabled={currentPage === 1}>
            Previous
          </button>
          <span> Page {currentPage} of {totalPages} </span>
          <button onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      </div>
    </ChapterLayout>
  );
};

export default Chapter21;