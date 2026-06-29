Project title :     Mini-Blog-Explorer

Function:           This Application fetches blog posts from a public API.

API Used:           https://jsonplaceholder.typicode.com/posts

App Architecture:

                    src/
                    ├── components/
                    │   ├── FilterBar.jsx      # Form inputs for keyword typing & user selection
                    │   ├── Header.jsx         # Simple branding & header text for Title
                    │   ├── PostCard.jsx       # Presentation card rendering one single post object
                    │   ├── PostGrid.jsx       # Grid controller handling loops and "no results" state
                    │   └── SearchBar.jsx      # The central processing container for filtering logic
                    │   └── StatusMessage.jsx  # The StatusMessage Handles loading, error, and empty states cleanly.
                    ├── App.css                # Application styling and responsive grids
                    ├── index.css              # Application styling and responsive grids
                    ├── App.jsx                # Application root, state lifecycle, and API fetching
                    └── main.jsx               # React DOM entry point

React concepts used:props, useState, useEffect, component

How to run locally: From Bash/powershell terminal go to /mini-blog-explorer> dir, type "npm run dev" and press enter,
                    Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal output) to explore the application.

Challenges faced:   I find it very challenging to link all the props (loading, error, retry) in StatusMessage to App.jsx, because they return almost nothing,
                    therefore I have to add children to props (loading, error, retry, children) and return the children, sothat this component becomes reuseable.

                    Another challenge is the refresh button, because I needed to reuse fetchPost as prop, therefore I createted (const [refresh, setRefresh] = useState(0))
                    and later pass the refresh to useEffect Array. Here it will only work, when the button is clicked. 
                    " useEffect(()=>{
                      fetchPosts();
                      }, [refresh]);
                    "

What I learned:     I learned App architecture, how component should be arranged, I also learned the need to understand code, for example I create refresh button twice,
                    the first one for Refresh, to fetch from API when the Blog show empty-blog, the second one used when the API is unreacheable (error status), because both of them fetch data from API.