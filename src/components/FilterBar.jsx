import { useState, useEffect } from "react";

function FilterBar({ searchTerm, setSearchTerm, selectedUserId, setSelectedUserId, userIds, onRefresh}) {
   
        
    return (
        <div className="controls">
            {/* text search input */}
            <input className="search-input"
                type="text"
                placeholder="Search posts..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />

            {/* user id selection */}
            <select className="user-filter"
                value={selectedUserId}
                onChange={(event) => setSelectedUserId(event.target.value)}
            >
                <option value="all">All Users</option>
                {userIds.map((id) => (
                    <option key={`user-${id}`} value={id}>
                        User {id}
                    </option>
                ))}
            </select>
            <button onClick={onRefresh} className="btn-refresh">
                Refresh
            </button>

        </div>
    );
}

export default FilterBar;