function TaskGrid() {
    return (
        <section className="flex items-center justify-center w-full">
            <div className="flex justify-center w-full py-5">
                <table className="w-[90vw]">
                    <thead>
                        <tr className="text-center border-b-2">
                            <th>Task</th>
                            <th>Status</th>
                            <th>Categories</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="text-center border-t-2">
                            <td>Task name</td>
                            <td>In Progress</td>
                            <td>Work</td>
                            <td>2025-10-01</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default TaskGrid;