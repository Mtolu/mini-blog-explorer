import { useEffect, useState } from "react";
import Header from "./components/Header"
import SearchBar  from "./components/SearchBar";
import StatusMessage from "./components/StatusMessage";

function App() {
    const [posts, setPosts] = useState([]); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(""); 
    const [refresh, setRefresh] = useState(0);
   


    
    const fetchPosts = async() =>{        

      try{
          setLoading(true);
          setError("")
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");

          if(!response.ok){
              throw new Error("Failed to fetch post")
          }

          const data = await response.json();
          setPosts(data)

      } catch (err) {
          setError("Something went wrong. Please try again.");
      } finally {
          setLoading(false);               
      }
    };  

  
    useEffect(()=>{
          fetchPosts();
    }, [refresh]);

    const handleRefresh = () => {
        setRefresh(prev => prev + 1);
    };


    return(
        <div className="app-cointainer">
            <Header/>            
            <StatusMessage
              loading={loading}
              error={error}
              retry={handleRefresh}
            >
              <SearchBar posts={posts} onRefresh={handleRefresh}/>
            </StatusMessage>
        </div>
    );
}

export default App