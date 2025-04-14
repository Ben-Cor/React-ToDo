function TaskGrid() {
    return (
        <section>
            <table>
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Status</th>
                        <th>Categories</th>
                        <th>Due Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Task name</td>
                        <td>In Progress</td>
                        <td><button>Edit</button></td>
                        <td>2025-10-01</td>
                    </tr>
                </tbody>
            </table>
        </section>
    )
}

export default TaskGrid;