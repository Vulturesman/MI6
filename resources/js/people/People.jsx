import React, { useState, useEffect } from "react";
import PersonDetail from "./PersonDetail";
import { Link } from "react-router-dom";
import StatusFilter from "./StatusFilter";

export default function People() {
    const [people, setPeople] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationData, setPaginationData] = useState({
        currentPage: 1,
        lastPage: 1,
    });
    const [person_id, setPerson_id] = useState(null);
    const [selectedStatus, setSelectedStatus] = useState("");

    // ***********end of States*********************

    const loadData = async (page = 1) => {
        try {
            const response = await fetch(
                `http://www.mi6.test/api/people?page=${page}&status=${encodeURIComponent(
                    selectedStatus
                )}`
            );
            const data = await response.json();
            setPeople(data.data);
            setPaginationData({
                currentPage: data.current_page,
                lastPage: data.last_page,
            });
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        loadData(currentPage);
    }, [currentPage, selectedStatus]);

    const goToNextPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prevCurrentPage) => prevCurrentPage - 1);
    };

    const changePage = (page) => {
        if (page !== currentPage) {
            setCurrentPage(page);
        }
    };

    return (
        <main>
            <div className="page-container">
                <div className="left-panel-container">
                    <img className="logo" src="/mi6-seal.png" alt="logo MI6" />
                    <div className="nav">
                        <Link to={"/"}>Home</Link>
                        <Link to={"/people"}>People of interest</Link>
                        <Link to={"/missions"}>Missions</Link>
                        <Link to={"/register-form"}>Register</Link>
                    </div>
                </div>

                <div className="main-container">
                    <StatusFilter
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                    />
                    {person_id == null ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Nationality</th>
                                        <th>Occupation</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map((person) => (
                                        <tr
                                            key={person.id}
                                            onClick={() =>
                                                setPerson_id(person.id)
                                            }
                                        >
                                            <td>{person.name}</td>
                                            <td>{person.nationality}</td>
                                            <td>{person.occupation}</td>
                                            <td>{person.status_text}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div className="pagination">
                                <button
                                    onClick={goToPreviousPage}
                                    disabled={currentPage === 1}
                                >
                                    Previous
                                </button>
                                {[...Array(paginationData.lastPage).keys()].map(
                                    (page) => (
                                        <button
                                            key={page}
                                            onClick={() => changePage(page + 1)}
                                            disabled={currentPage === page + 1}
                                        >
                                            {page + 1}
                                        </button>
                                    )
                                )}
                                <button
                                    onClick={goToNextPage}
                                    disabled={
                                        currentPage === paginationData.lastPage
                                    }
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    ) : (
                        <PersonDetail person_id={person_id} />
                    )}
                </div>
            </div>
        </main>
    );
}
