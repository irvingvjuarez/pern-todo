import { PageContainer } from './containers/PageContainer'
import { InlineForm } from './components/InlineForm'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { TaskList } from './containers/TaskList'
import { useTasks } from './hooks/useTasks'

function App() {
	const { handleChange, handleSubmit } = useTasks()

  return (
    <div className="App">
			<PageContainer>
				<h2 className='text-2xl'>
					Input Todo
				</h2>

				<InlineForm onSubmit={handleSubmit}>
					<InputBox onChange={handleChange} />
					<Button />
				</InlineForm>

				<TaskList />
			</PageContainer>
    </div>
  )
}

export default App
