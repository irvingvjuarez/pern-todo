import { useSelector } from "react-redux"
import { PageContainer } from './containers/PageContainer'
import { InlineForm } from './components/InlineForm'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { TaskList } from './containers/TaskList'
import { useTasks } from './hooks/useTasks'
import { InitialState } from './stores/initialState'

function App() {
	const { handleChange, handleSubmit, taskInput } = useTasks()
	const tasks = useSelector((state: InitialState) => state.tasks)

	console.log({
		tasks
	})

  return (
    <div className="App">
			<PageContainer>
				<h2 className='text-2xl'>
					Input Todo
				</h2>

				<InlineForm onSubmit={handleSubmit}>
					<InputBox
						inputValue={taskInput}
						onChange={handleChange}
					/>
					<Button />
				</InlineForm>

				<TaskList />
			</PageContainer>
    </div>
  )
}

export default App
