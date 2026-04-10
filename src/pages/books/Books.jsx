import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Books = () => {

    const { storedBooks, wishList} = useContext(BookContext);
        console.log(storedBooks,wishList, 'bookContext');

    return (
        <div className='container mx-auto'>
            read list: {storedBooks.length}
            <br />
            wish list: {wishList.length}
            <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>Any content 1</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default Books;