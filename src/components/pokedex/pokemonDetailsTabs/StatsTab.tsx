import { Table } from "react-bootstrap";
import { Stat } from "../../../api/types";

const StatsTab = ({ pokemonStats }: { pokemonStats: Stat[] | undefined }) => {
    return (<>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Base stat</th>
                    <th>Effort</th>
                </tr>
            </thead>
            <tbody>
                {pokemonStats?.map((stat) => {
                    return (<>
                        <tr>
                            <td>{stat.name?.toUpperCase()}</td>
                            <td>{stat.baseStat}</td>
                            <td>{stat.effort}</td>
                        </tr>
                    </>)
                })}
            </tbody>
        </Table>
    </>)
}

export default StatsTab;