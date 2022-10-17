import { PageContainer } from './containers/PageContainer'
import { InlineForm } from './components/InlineForm'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { TaskList } from './containers/TaskList'
import { useState } from 'react'
import { TASKS_API } from './globals'

function App() {
	const [task, setTask] = useState("")
	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setTask(evt.target.value)
	}
	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault()

		fetch(TASKS_API, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify({
				content: task
			})
		}).then(res => res.json())
			.then(data => {
				console.log({
					data
				})
			})
	}

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
