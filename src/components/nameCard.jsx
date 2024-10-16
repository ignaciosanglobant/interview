import './styles.css';

export default function NameCard({id, name, deleteButton}) {
   return (
    <div className="container">
      <p><strong>Name:</strong> {name}</p>
      <button onClick={() => deleteButton(id)}>x</button>
    </div>
  )
}