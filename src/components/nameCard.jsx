import './styles.css';

export default function NameCard({newName, deleteButton}) {
   return (
    <div className="container">
      <p><strong>Name:</strong> {newName}</p>
      <button onClick={() => deleteButton(newName)}>x</button>
    </div>
  )
}