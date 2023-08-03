import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
export function NewCycleForm() {
  return (
    <FormContainer>
      <label htmlFor="task">I am going t work on</label>
      <TaskInput
        id="task"
        list="task-suggestions"
        placeholder="Give a name to your task"
      />

      <datalist id="task-suggestions">
        <option value="Task 1" />
        <option value="Task 2" />
        <option value="Task 3" />
        <option value="Banana" />
      </datalist>

      <label htmlFor="minutesAmount">for</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={5}
        max={60}
      />

      <span>minutes.</span>
    </FormContainer>
  )
}
