import { useState } from "react";
import FilterBar from "./FilterBar";
import PostGrid from "./PostGrid";

function SearchBar({ posts, onRefresh }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedUserId, setSelectedUserId] = useState("all");

    // 
    const userIds = [...new Set(posts.map((post) => post.userId))];

    // to filter posts 
    const search = searchTerm.toLowerCase();
    const filteredPosts = posts.filter((post) => {
        const matchesSearch =
            post.title.toLowerCase().includes(search) ||
            post.body.toLowerCase().includes(search);
        
        const matchesUser =
            selectedUserId === "all" || post.userId === Number(selectedUserId);

        return matchesSearch && matchesUser; // if matchesSearch is true, perform the matchesUser
    });

    return (
        <div className="filter-grid-controls">
            <div className="">
                <FilterBar
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    selectedUserId={selectedUserId}
                    setSelectedUserId={setSelectedUserId}
                    userIds={userIds}
                    onRefresh={onRefresh}
                />
                <PostGrid posts={filteredPosts} />
            </div>
        </div>
    );
}

export default SearchBar;