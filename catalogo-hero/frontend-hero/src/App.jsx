import { useState, useEffect } from 'react';
import './App.css';

import { Header } from './components/header/Header.jsx'
import { Footer } from './components/footer/Footer.jsx'
import { CarritoCompra, crearProductos, detalleProductos, selectorProductos } from './pages/index.jsx';

function App() {

  return (
    <>
      <h1>SuperHero App</h1>
      <Header />
      <CarritoCompra />
      {/* <Pages /> */}
      <Footer />
    </>


  )
}

export default App;


{/* <div className="container">
      <h1>SuperHero App</h1>
      <form onSubmit={addTask} className='add-task-form'>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder='Add new task...'
        />
        <button type='submit'>Agregar Tarea</button>
      </form>
      <ul className='task-list'>
        {tasks.map(task => (
          <li key={task.id} className={task.isCompletada ? 'completed' : ''}>
            <label>
              <input
                type="checkbox"
                checked={task.isCompletada}
                onChange={() => toggleTask(task.id)}
              />
              <span>{task.tarea}</span>
            </label>
            <div className='task-buttons'>
              <button onClick={() => deleteTask(task.id)}>Eliminar</button>
              <button onClick={() => editTask(task)}>Editar</button>
            </div>
          </li>
        ))}
      </ul>
      {editingTask !== null && (
        <form onSubmit={saveEdit} className='edit-task-form'>
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            placeholder='Editar tarea...'
          />
          <button type='submit'>Guardar</button>
          <button type='button' onClick={() => setEditingTask(null)}>Cancelar</button>
        </form>
      )}
    </div>
  ); */}