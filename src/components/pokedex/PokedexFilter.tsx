import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownButton, Form } from "react-bootstrap";

interface PokedexFilterProps {
	setFilterParams: React.Dispatch<React.SetStateAction<URLSearchParams>>;
	handleFilter: (filterParams: URLSearchParams) => Promise<void>;
    setPage: React.Dispatch<React.SetStateAction<number>>;
};

const PokedexFilter = ({setFilterParams, handleFilter, setPage}: PokedexFilterProps) => {
    const [sortDirection, setSortDirection] = useState<string>("ASC");
    const [perPage, setPetPage] = useState<number>(8);
    const [searchTerm, setSearchTerm] = useState<string | null>("");

    const onhandleFilter = async (): Promise<void> => {
        const filterParams = new URLSearchParams();

        setPage(1)
        filterParams.append("page", "1");
        filterParams.append("perPage", perPage.toString());

        if (sortDirection.length > 0)
            filterParams.append("sort", sortDirection);
        
        if (searchTerm)
            filterParams.append("name", searchTerm);
        
        setFilterParams(filterParams);
        await handleFilter(filterParams);
    }

    return (<>
        <div className="container mt-3">
            <Form className="d-flex">
                <Form.Control
                    type="search"
                    placeholder="Type in a name to filter..."
                    className="me-2"
                    aria-label="Search"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ButtonGroup>
                    <DropdownButton as={ButtonGroup} title={`Sort: ${sortDirection}`} id="sort-direction-dropdown">
                        <Dropdown.Item eventKey="1" onClick={() => setSortDirection("ASC")}>ASC</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={() => setSortDirection("DESC")}>DESC</Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton as={ButtonGroup} title={`Per page: ${perPage}`} id="perPage-dropdown">
                        <Dropdown.Item eventKey="1" onClick={() => setPetPage(8)}>8</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={() => setPetPage(16)}>16</Dropdown.Item>
                        <Dropdown.Item eventKey="2" onClick={() => setPetPage(24)}>24</Dropdown.Item>
                    </DropdownButton>
                    <Button variant="outline-primary" onClick={onhandleFilter}>Search</Button>
                </ButtonGroup>
            </Form>
        </div>
    </>)
}

export default PokedexFilter;