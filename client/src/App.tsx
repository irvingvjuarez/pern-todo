import { PageContainer } from './containers/PageContainer'
import { InlineForm } from './components/InlineForm'
import { InputBox } from './components/InputBox'
import { Button } from './components/Button'

function App() {
  return (
    <div className="App">
			<PageContainer>
				<h2 className='text-2xl font-medium tracking-wider'>
					Input Todo
				</h2>

				<InlineForm>
					<InputBox />
					<Button />
				</InlineForm>
			</PageContainer>
    </div>
  )
}

export default App
