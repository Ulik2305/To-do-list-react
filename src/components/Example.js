import React, { useState, useEffect } from 'react';

function Example() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Код side effect, например, загрузка данных
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/data');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData(); // Вызов функции для выполнения side effect

        // Cleanup функция (необязательная), вызывается перед следующим выполнением useEffect или при размонтировании компонента
        return () => {
            // Логика очистки, например, отписка от событий или отмена запросов
        };
    }, []); // Пустой массив зависимостей означает, что useEffect будет выполнен только при монтировании и размонтировании компонента

    return (
        <div>
            {/* Рендеринг компонента с использованием данных */}
            {data.map(item => (
                <p key={item.id}>{item.name}</p>
            ))}
        </div>
    );
}
export default Example