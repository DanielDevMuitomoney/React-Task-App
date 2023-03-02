import react from 'react'

const Tasks= ({taskObject}) => {
    return (
      <div>
        {taskObject.map((value, index, array) => (
          <p>{value.id}</p>
        ))}
      </div>
    )
}

export default Tasks;