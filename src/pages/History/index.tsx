import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>History of tasks</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Task 1</td>
              <td>20 minutes</td>
              <td>10 minutes ago</td>
              <td>
                <Status statusColor="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Task 2</td>
              <td>30 minutes</td>
              <td>20 minutes ago</td>
              <td>
                <Status statusColor="red">Stoped</Status>
              </td>
            </tr>
            <tr>
              <td>Task 3</td>
              <td>40 minutes</td>
              <td>15 minutes ago</td>
              <td>
                <Status statusColor="yellow">In progress</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
