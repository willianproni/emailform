export default function Home() {

  function sendEmail(){
    const form = document.getElementById('form')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      const name = document.getElementById('name').value
      const email = document.getElementById('email').value
      const message = document.getElementById('message').value

      fetch('/api/hello', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          name,
          email,
          message
        })
      }).then((response) => {
        console.log(response)
        alert('Email enviado com sucesso')
      }).catch((error) => {
        console.log(error)
        alert("Ocoreu um erro")
      })

    })
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-gray-100">
      <form id='form' className="w-3/12 bg-white flex flex-col border border-black p-4 py-8 rounded">
        <h1 className="text-center text-3xl">Formulário E-mail</h1>
        <input id='name' placeholder="Nome..." className="border border-blue-400 mt-4" />
        <input id='email' placeholder="E-mail..." className="border border-blue-400 mt-4" />
        <textarea id='message' placeholder="Mensagem..." className="border border-blue-400 mt-4" />
        <button onClick={sendEmail} className='bg-blue-500 p-5 mt-4 rounded text-white'>Enviar</button>
      </form>
    </div>
  )
}

