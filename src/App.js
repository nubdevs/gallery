import Icard from "./components/Icard";
import axios from "axios";
import {useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";


function App() {
  const [photo, setPhoto] = useState("random");
  const [result, setResult] = useState([]);
  const total = 50;
  const count = 16;
 

  useEffect(()=>{
    changePhoto() 
    fetchMoreData()
   },[])

const changePhoto = () => {

const page=1
 const apiroot=`https://api.unsplash.com/search/photos?&query=${photo}&client_id=BxW_iSd8yjeNl2JVar8qL5Tk3AQR27UOc6nVamo0bKQ&per_page=${count}&page=${page}`
   axios
      .get(apiroot)
      .then((response) => {
        console.log(response.data);
        console.log(apiroot)
        setResult([...response.data.results]);
      });
      
      };

  const fetchMoreData = () => {
    const page = Math.ceil(result.length / count) + 1;
    const apiroot=`https://api.unsplash.com/search/photos?&query=${photo}&client_id=BxW_iSd8yjeNl2JVar8qL5Tk3AQR27UOc6nVamo0bKQ&per_page=${count}&page=${page}`
    axios
      .get(apiroot)
      .then((response) => {
        console.log(response.data);
        console.log(apiroot)
        setResult([...result,...response.data.results]);
      });


};
  return (
    <>
   <section className="text-gray-700 bg-gray-200 body-font">
    <div className="container px-2 py-5 mx-auto">
    
    
      <div className="flex w-full justify-center p-2 items-end">
        <div className="relative mr-4 w-2/3 md:w-1/3" >
        <label  className="leading-7 text-sm text-gray-600">search photos here</label>
          <input
            value={photo}
            onChange={(e) => {
              setPhoto(e.target.value);
            }}
            type="text"
            id="hero-field"
            name="hero-field"
            className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <button
          onClick={changePhoto}
          className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg"
        >
          Search
        </button>
      </div>  

      
      
          <InfiniteScroll
            dataLength={result.length}
            next={fetchMoreData}
            hasMore={result.length<total}
            
          >
            <div className="flex flex-wrap py-5">
              {result &&
                result.length > 0 &&
                result.map((img, id) => {
                  return (
                    <Icard
                      url={img.urls.small}
                     
                      
                      key={id}
                    />
                  );
                })}
            </div>
          </InfiniteScroll>

          </div>
          </section>
       
      
    </>
  );
}

export default App;
