
import { useCallback, useState } from 'react'
import './App.css'
import Button from './assets/components/Button'

// import { Header } from './assets/components/Header'
import { InputForm } from './assets/components/InputForm'
import { Modal } from './assets/components/Modal'
import { EffectSection } from './assets/components/EffectSection'
import { TabsButton } from './assets/components/TabsButton'
import { TabsSection } from './assets/components/TabsSection'
import { ListPosts } from './assets/components/ListPosts'

function App() {
  const [name, setName] = useState('')
  const [modal, setModal] = useState(false)
  const [tab, setTab] = useState('main')

  const handleTabChange = useCallback((current: string) => {
    setTab(current)
  }, [])

  const handleClearModal = useCallback(() => {
    setName('')
    setModal(false)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModal(false)
  }, [])

  const handleOpenModal = useCallback(() => {
    setModal(true)
  }, [])

  return (
    <>  
    {/* <Header/> */}
      <div className='tabsButton'>
        <TabsSection active={tab} onChange={handleTabChange}/>
      </div>

        {tab === 'main' && (
          <>
            <h3>Библиотека для веб- и нативных пользовательских интерфейсов</h3>
            <ListPosts />
            <TabsButton />
          </>
        )}
         {tab === 'search' && (
           < EffectSection />
        )}

         {tab === 'feedback' && (
            <>
              <InputForm name={name} setName={setName}/>
              <Modal open={modal} >
              <h3>Модальное окно</h3>
              <p>Вы точно хотите очистить форму обратной связи?</p>
              <div className='modalFlexBtn'>
                <Button onClick={handleClearModal} >Да</Button>
                <Button onClick={handleCloseModal} >Закрыть</Button>
              </div>
            </Modal>

            <Button onClick={handleOpenModal} className='control'>Открыть модальное окно</Button>
            </>
        )}

    </>
  )
}

export default App
