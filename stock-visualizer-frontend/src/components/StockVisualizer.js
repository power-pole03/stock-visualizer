import React, {useState} from 'react';
import './StockVisualizer.css';
import PieChart from './PieChart';

function StockVisualizer({ isLoggedIn }) {
    const [chartData, setChartData] = useState([
        { label: 'Category 1', value: 49 },
        { label: 'Category 2', value: 27.6 },
        { label: 'Category 3', value: 18.9 },
        { label: 'Category 4', value: 4.5 },
      ]);

    return(
        <div className="stock-visualizer">
            {isLoggedIn ? (
                <>
                    <div className="chart-container">
                        <PieChart data={chartData} isLoggedIn={isLoggedIn} />
                    </div>
                </>
            ) : (
                <h2>Please login to continue</h2>
            )}
    </div>
    );
}

export default StockVisualizer;