import { PageContainer } from './containers/PageContainer'
import { InlineForm } from './components/InlineForm'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'
import { TaskList } from './containers/TaskList'

function App() {
  return (
    <div className="App">
			<PageContainer>
				<h2 className='text-2xl'>
					Input Todo
				</h2>

				<InlineForm>
					<InputBox />
					<Button />
				</InlineForm>

				<TaskList />
			</PageContainer>
    </div>
  )
}

export default App
