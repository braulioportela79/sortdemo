import ListItem from './ListItem';
import { useState, useEffect } from 'react';

function List(props) {
    const [sampleData, setSampleData] = useState([]);

    useEffect(() => {
        setSampleData(props.sampleData);
    }, [props]);

    function handleSortAZ() {
        const sortedData = [...sampleData].sort((a, b) => {
            return a.name > b.name ? 1 : -1
        })
        setSampleData(sortedData);
    };

    function handleSortZA() {
        const sortedData = [...sampleData].sort((a, b) => {
            return a.name > b.name ? -1 : 1
        })
        setSampleData(sortedData);
    };
    const listComponents = sampleData.map((object, index) => {
        return <ListItem key={index} name={object.name} />
    });

    return (
        <>
            <button onClick={handleSortAZ}>Sort A-Z</button>
            <button onClick={handleSortZA}>Sort Z-A</button>
            <ul>
                {listComponents}
            </ul>
        </>
    )

}

export default List;