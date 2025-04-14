function TaskGrid() {
    return (
        <section className="Flex items-center justify-center w-full">
            <table className="w-full border border-gray-300 flex items-center justify-between">
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